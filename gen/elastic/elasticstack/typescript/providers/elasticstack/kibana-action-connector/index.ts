// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaActionConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The configuration for the connector. Configuration properties vary depending on the connector type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#config KibanaActionConnector#config}
  */
  readonly config?: string;
  /**
  * A UUID v1 or v4 to use instead of a randomly generated ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#connector_id KibanaActionConnector#connector_id}
  */
  readonly connectorId?: string;
  /**
  * The ID of the connector type, e.g. `.index`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#connector_type_id KibanaActionConnector#connector_type_id}
  */
  readonly connectorTypeId: string;
  /**
  * The name of the connector. While this name does not have to be unique, a distinctive name can help you identify a connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#name KibanaActionConnector#name}
  */
  readonly name: string;
  /**
  * The secrets configuration for the connector. Secrets configuration properties vary depending on the connector type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#secrets KibanaActionConnector#secrets}
  */
  readonly secrets?: string;
  /**
  * An identifier for the space. If space_id is not provided, the default space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#space_id KibanaActionConnector#space_id}
  */
  readonly spaceId?: string;
  /**
  * kibana_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#kibana_connection KibanaActionConnector#kibana_connection}
  */
  readonly kibanaConnection?: KibanaActionConnectorKibanaConnection[] | cdktf.IResolvable;
}
export interface KibanaActionConnectorKibanaConnection {
  /**
  * API Key to use for authentication to Kibana
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#api_key KibanaActionConnector#api_key}
  */
  readonly apiKey?: string;
  /**
  * A list of paths to CA certificates to validate the certificate presented by the Kibana server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#ca_certs KibanaActionConnector#ca_certs}
  */
  readonly caCerts?: string[];
  /**
  * A comma-separated list of endpoints where the terraform provider will point to, this must include the http(s) schema and port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#endpoints KibanaActionConnector#endpoints}
  */
  readonly endpoints?: string[];
  /**
  * Disable TLS certificate validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#insecure KibanaActionConnector#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Password to use for API authentication to Kibana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#password KibanaActionConnector#password}
  */
  readonly password?: string;
  /**
  * Username to use for API authentication to Kibana.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#username KibanaActionConnector#username}
  */
  readonly username?: string;
}

export function kibanaActionConnectorKibanaConnectionToTerraform(struct?: KibanaActionConnectorKibanaConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.caCerts),
    endpoints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.endpoints),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function kibanaActionConnectorKibanaConnectionToHclTerraform(struct?: KibanaActionConnectorKibanaConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.caCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    endpoints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.endpoints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KibanaActionConnectorKibanaConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KibanaActionConnectorKibanaConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._caCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts;
    }
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KibanaActionConnectorKibanaConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._caCerts = undefined;
      this._endpoints = undefined;
      this._insecure = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._caCerts = value.caCerts;
      this._endpoints = value.endpoints;
      this._insecure = value.insecure;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts?: string[]; 
  public get caCerts() {
    return this.getListAttribute('ca_certs');
  }
  public set caCerts(value: string[]) {
    this._caCerts = value;
  }
  public resetCaCerts() {
    this._caCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: string[]; 
  public get endpoints() {
    return this.getListAttribute('endpoints');
  }
  public set endpoints(value: string[]) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class KibanaActionConnectorKibanaConnectionList extends cdktf.ComplexList {
  public internalValue? : KibanaActionConnectorKibanaConnection[] | cdktf.IResolvable

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
  public get(index: number): KibanaActionConnectorKibanaConnectionOutputReference {
    return new KibanaActionConnectorKibanaConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector elasticstack_kibana_action_connector}
*/
export class KibanaActionConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_action_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaActionConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaActionConnector to import
  * @param importFromId The id of the existing KibanaActionConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaActionConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_action_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_action_connector elasticstack_kibana_action_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaActionConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaActionConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_action_connector',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._connectorId = config.connectorId;
    this._connectorTypeId = config.connectorTypeId;
    this._name = config.name;
    this._secrets = config.secrets;
    this._spaceId = config.spaceId;
    this._kibanaConnection.internalValue = config.kibanaConnection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // connector_id - computed: true, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // connector_type_id - computed: false, optional: false, required: true
  private _connectorTypeId?: string; 
  public get connectorTypeId() {
    return this.getStringAttribute('connector_type_id');
  }
  public set connectorTypeId(value: string) {
    this._connectorTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeIdInput() {
    return this._connectorTypeId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_deprecated - computed: true, optional: false, required: false
  public get isDeprecated() {
    return this.getBooleanAttribute('is_deprecated');
  }

  // is_missing_secrets - computed: true, optional: false, required: false
  public get isMissingSecrets() {
    return this.getBooleanAttribute('is_missing_secrets');
  }

  // is_preconfigured - computed: true, optional: false, required: false
  public get isPreconfigured() {
    return this.getBooleanAttribute('is_preconfigured');
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

  // secrets - computed: false, optional: true, required: false
  private _secrets?: string; 
  public get secrets() {
    return this.getStringAttribute('secrets');
  }
  public set secrets(value: string) {
    this._secrets = value;
  }
  public resetSecrets() {
    this._secrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // kibana_connection - computed: false, optional: true, required: false
  private _kibanaConnection = new KibanaActionConnectorKibanaConnectionList(this, "kibana_connection", false);
  public get kibanaConnection() {
    return this._kibanaConnection;
  }
  public putKibanaConnection(value: KibanaActionConnectorKibanaConnection[] | cdktf.IResolvable) {
    this._kibanaConnection.internalValue = value;
  }
  public resetKibanaConnection() {
    this._kibanaConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kibanaConnectionInput() {
    return this._kibanaConnection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      connector_id: cdktf.stringToTerraform(this._connectorId),
      connector_type_id: cdktf.stringToTerraform(this._connectorTypeId),
      name: cdktf.stringToTerraform(this._name),
      secrets: cdktf.stringToTerraform(this._secrets),
      space_id: cdktf.stringToTerraform(this._spaceId),
      kibana_connection: cdktf.listMapper(kibanaActionConnectorKibanaConnectionToTerraform, true)(this._kibanaConnection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_type_id: {
        value: cdktf.stringToHclTerraform(this._connectorTypeId),
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
      secrets: {
        value: cdktf.stringToHclTerraform(this._secrets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kibana_connection: {
        value: cdktf.listMapperHcl(kibanaActionConnectorKibanaConnectionToHclTerraform, true)(this._kibanaConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KibanaActionConnectorKibanaConnectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
