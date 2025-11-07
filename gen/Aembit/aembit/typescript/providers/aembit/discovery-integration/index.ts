// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined description of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#description DiscoveryIntegration#description}
  */
  readonly description?: string;
  /**
  * Endpoint that performs the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#endpoint DiscoveryIntegration#endpoint}
  */
  readonly endpoint: string;
  /**
  * Active status of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#is_active DiscoveryIntegration#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * User-defined name of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#name DiscoveryIntegration#name}
  */
  readonly name: string;
  /**
  * Frequency (in seconds) for synchronizing the discovery integration. Accepted range: 300-3600 seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#sync_frequency_seconds DiscoveryIntegration#sync_frequency_seconds}
  */
  readonly syncFrequencySeconds?: number;
  /**
  * Key-value pairs for tagging the discovery integration. (e.g., "environment" = "production").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#tags DiscoveryIntegration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of discovery integration. The only accepted value is `WizIntegrationApi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#type DiscoveryIntegration#type}
  */
  readonly type: string;
  /**
  * Wiz-specific properties for the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#wiz_integration DiscoveryIntegration#wiz_integration}
  */
  readonly wizIntegration?: DiscoveryIntegrationWizIntegration;
}
export interface DiscoveryIntegrationWizIntegration {
  /**
  * Audience for the Wiz Endpoint of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#audience DiscoveryIntegration#audience}
  */
  readonly audience: string;
  /**
  * Client ID for the Wiz Endpoint of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#client_id DiscoveryIntegration#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret for the Wiz Endpoint of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#client_secret DiscoveryIntegration#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Token URL for the Wiz Endpoint of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#token_url DiscoveryIntegration#token_url}
  */
  readonly tokenUrl: string;
}

export function discoveryIntegrationWizIntegrationToTerraform(struct?: DiscoveryIntegrationWizIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function discoveryIntegrationWizIntegrationToHclTerraform(struct?: DiscoveryIntegrationWizIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryIntegrationWizIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryIntegrationWizIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryIntegrationWizIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration aembit_discovery_integration}
*/
export class DiscoveryIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_discovery_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryIntegration to import
  * @param importFromId The id of the existing DiscoveryIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_discovery_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/discovery_integration aembit_discovery_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_discovery_integration',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._endpoint = config.endpoint;
    this._isActive = config.isActive;
    this._name = config.name;
    this._syncFrequencySeconds = config.syncFrequencySeconds;
    this._tags = config.tags;
    this._type = config.type;
    this._wizIntegration.internalValue = config.wizIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // last_sync - computed: true, optional: false, required: false
  public get lastSync() {
    return this.getStringAttribute('last_sync');
  }

  // last_sync_status - computed: true, optional: false, required: false
  public get lastSyncStatus() {
    return this.getStringAttribute('last_sync_status');
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

  // sync_frequency_seconds - computed: true, optional: true, required: false
  private _syncFrequencySeconds?: number; 
  public get syncFrequencySeconds() {
    return this.getNumberAttribute('sync_frequency_seconds');
  }
  public set syncFrequencySeconds(value: number) {
    this._syncFrequencySeconds = value;
  }
  public resetSyncFrequencySeconds() {
    this._syncFrequencySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFrequencySecondsInput() {
    return this._syncFrequencySeconds;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
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

  // wiz_integration - computed: false, optional: true, required: false
  private _wizIntegration = new DiscoveryIntegrationWizIntegrationOutputReference(this, "wiz_integration");
  public get wizIntegration() {
    return this._wizIntegration;
  }
  public putWizIntegration(value: DiscoveryIntegrationWizIntegration) {
    this._wizIntegration.internalValue = value;
  }
  public resetWizIntegration() {
    this._wizIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wizIntegrationInput() {
    return this._wizIntegration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      sync_frequency_seconds: cdktf.numberToTerraform(this._syncFrequencySeconds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      wiz_integration: discoveryIntegrationWizIntegrationToTerraform(this._wizIntegration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_frequency_seconds: {
        value: cdktf.numberToHclTerraform(this._syncFrequencySeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wiz_integration: {
        value: discoveryIntegrationWizIntegrationToHclTerraform(this._wizIntegration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryIntegrationWizIntegration",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
