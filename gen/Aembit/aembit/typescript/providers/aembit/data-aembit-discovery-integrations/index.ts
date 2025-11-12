// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitDiscoveryIntegrationsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegration {
  /**
  * Audience for the Wiz Endpoint of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#audience DataAembitDiscoveryIntegrations#audience}
  */
  readonly audience: string;
  /**
  * Client ID for the Wiz Endpoint of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#client_id DataAembitDiscoveryIntegrations#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret for the Wiz Endpoint of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#client_secret DataAembitDiscoveryIntegrations#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Token URL for the Wiz Endpoint of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#token_url DataAembitDiscoveryIntegrations#token_url}
  */
  readonly tokenUrl: string;
}

export function dataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegrationToTerraform(struct?: DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegration | cdktf.IResolvable): any {
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


export function dataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegrationToHclTerraform(struct?: DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegration | cdktf.IResolvable): any {
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

export class DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegration | cdktf.IResolvable | undefined) {
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

  // audience - computed: true, optional: false, required: true
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

  // client_id - computed: true, optional: false, required: true
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

  // client_secret - computed: true, optional: false, required: true
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

  // token_url - computed: true, optional: false, required: true
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
export interface DataAembitDiscoveryIntegrationsDiscoveryIntegrations {
  /**
  * Endpoint that performs the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#endpoint DataAembitDiscoveryIntegrations#endpoint}
  */
  readonly endpoint: string;
  /**
  * Active status of the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#is_active DataAembitDiscoveryIntegrations#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Key-value pairs for tagging the discovery integration. (e.g., "environment" = "production").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#tags DataAembitDiscoveryIntegrations#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Type of discovery integration. The only accepted value is `WizIntegrationApi`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#type DataAembitDiscoveryIntegrations#type}
  */
  readonly type: string;
  /**
  * Wiz-specific properties for the discovery integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#wiz_integration DataAembitDiscoveryIntegrations#wiz_integration}
  */
  readonly wizIntegration?: DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegration;
}

export function dataAembitDiscoveryIntegrationsDiscoveryIntegrationsToTerraform(struct?: DataAembitDiscoveryIntegrationsDiscoveryIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    type: cdktf.stringToTerraform(struct!.type),
    wiz_integration: dataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegrationToTerraform(struct!.wizIntegration),
  }
}


export function dataAembitDiscoveryIntegrationsDiscoveryIntegrationsToHclTerraform(struct?: DataAembitDiscoveryIntegrationsDiscoveryIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_active: {
      value: cdktf.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wiz_integration: {
      value: dataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegrationToHclTerraform(struct!.wizIntegration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegration",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitDiscoveryIntegrationsDiscoveryIntegrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAembitDiscoveryIntegrationsDiscoveryIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._wizIntegration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wizIntegration = this._wizIntegration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitDiscoveryIntegrationsDiscoveryIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpoint = undefined;
      this._isActive = undefined;
      this._tags = undefined;
      this._type = undefined;
      this._wizIntegration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpoint = value.endpoint;
      this._isActive = value.isActive;
      this._tags = value.tags;
      this._type = value.type;
      this._wizIntegration.internalValue = value.wizIntegration;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint - computed: true, optional: false, required: true
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sync_frequency_seconds - computed: true, optional: false, required: false
  public get syncFrequencySeconds() {
    return this.getNumberAttribute('sync_frequency_seconds');
  }

  // tags - computed: true, optional: true, required: false
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

  // type - computed: true, optional: false, required: true
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

  // wiz_integration - computed: true, optional: true, required: false
  private _wizIntegration = new DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegrationOutputReference(this, "wiz_integration");
  public get wizIntegration() {
    return this._wizIntegration;
  }
  public putWizIntegration(value: DataAembitDiscoveryIntegrationsDiscoveryIntegrationsWizIntegration) {
    this._wizIntegration.internalValue = value;
  }
  public resetWizIntegration() {
    this._wizIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wizIntegrationInput() {
    return this._wizIntegration.internalValue;
  }
}

export class DataAembitDiscoveryIntegrationsDiscoveryIntegrationsList extends cdktf.ComplexList {
  public internalValue? : DataAembitDiscoveryIntegrationsDiscoveryIntegrations[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAembitDiscoveryIntegrationsDiscoveryIntegrationsOutputReference {
    return new DataAembitDiscoveryIntegrationsDiscoveryIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations aembit_discovery_integrations}
*/
export class DataAembitDiscoveryIntegrations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_discovery_integrations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitDiscoveryIntegrations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitDiscoveryIntegrations to import
  * @param importFromId The id of the existing DataAembitDiscoveryIntegrations that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitDiscoveryIntegrations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_discovery_integrations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/discovery_integrations aembit_discovery_integrations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitDiscoveryIntegrationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitDiscoveryIntegrationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_discovery_integrations',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // discovery_integrations - computed: true, optional: false, required: false
  private _discoveryIntegrations = new DataAembitDiscoveryIntegrationsDiscoveryIntegrationsList(this, "discovery_integrations", false);
  public get discoveryIntegrations() {
    return this._discoveryIntegrations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
