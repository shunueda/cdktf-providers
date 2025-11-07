// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitoringEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies any optional additional tags to include in StatsD messages. Any additional tags will be appended to the end of each StatsD message, separated by commas. Tags should be written in a [key]:[value] format ("host:server1", for example).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#additional_tags MonitoringEndpoint#additional_tags}
  */
  readonly additionalTags?: string[];
  /**
  * Specifies the protocol and security that this StatsD Monitoring Endpoint should use to connect to the configured endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#connection_type MonitoringEndpoint#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Indicates whether this Monitoring Endpoint is enabled for use in the Directory Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#enabled MonitoringEndpoint#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name of the host where this StatsD Monitoring Endpoint should send metric data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#hostname MonitoringEndpoint#hostname}
  */
  readonly hostname: string;
  /**
  * Name of this config object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#name MonitoringEndpoint#name}
  */
  readonly name: string;
  /**
  * Specifies the port number of the endpoint where metric data should be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#server_port MonitoringEndpoint#server_port}
  */
  readonly serverPort?: number;
  /**
  * The trust manager provider to use if SSL over TCP is to be used for connection-level security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#trust_manager_provider MonitoringEndpoint#trust_manager_provider}
  */
  readonly trustManagerProvider?: string;
  /**
  * The type of Monitoring Endpoint resource. Options are ['statsd']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#type MonitoringEndpoint#type}
  */
  readonly type?: string;
}
export interface MonitoringEndpointRequiredActions {
}

export function monitoringEndpointRequiredActionsToTerraform(struct?: MonitoringEndpointRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function monitoringEndpointRequiredActionsToHclTerraform(struct?: MonitoringEndpointRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MonitoringEndpointRequiredActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitoringEndpointRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitoringEndpointRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class MonitoringEndpointRequiredActionsList extends cdktf.ComplexList {

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
  public get(index: number): MonitoringEndpointRequiredActionsOutputReference {
    return new MonitoringEndpointRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint pingdirectory_monitoring_endpoint}
*/
export class MonitoringEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_monitoring_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitoringEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitoringEndpoint to import
  * @param importFromId The id of the existing MonitoringEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitoringEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_monitoring_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/monitoring_endpoint pingdirectory_monitoring_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitoringEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: MonitoringEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_monitoring_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalTags = config.additionalTags;
    this._connectionType = config.connectionType;
    this._enabled = config.enabled;
    this._hostname = config.hostname;
    this._name = config.name;
    this._serverPort = config.serverPort;
    this._trustManagerProvider = config.trustManagerProvider;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_tags - computed: true, optional: true, required: false
  private _additionalTags?: string[]; 
  public get additionalTags() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_tags'));
  }
  public set additionalTags(value: string[]) {
    this._additionalTags = value;
  }
  public resetAdditionalTags() {
    this._additionalTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTagsInput() {
    return this._additionalTags;
  }

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new MonitoringEndpointRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // server_port - computed: true, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // trust_manager_provider - computed: false, optional: true, required: false
  private _trustManagerProvider?: string; 
  public get trustManagerProvider() {
    return this.getStringAttribute('trust_manager_provider');
  }
  public set trustManagerProvider(value: string) {
    this._trustManagerProvider = value;
  }
  public resetTrustManagerProvider() {
    this._trustManagerProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustManagerProviderInput() {
    return this._trustManagerProvider;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._additionalTags),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hostname: cdktf.stringToTerraform(this._hostname),
      name: cdktf.stringToTerraform(this._name),
      server_port: cdktf.numberToTerraform(this._serverPort),
      trust_manager_provider: cdktf.stringToTerraform(this._trustManagerProvider),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._additionalTags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trust_manager_provider: {
        value: cdktf.stringToHclTerraform(this._trustManagerProvider),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
