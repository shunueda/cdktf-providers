// https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Integration Config Raw JSON string (use `jsonencode`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#config PortIntegration#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#installation_app_type PortIntegration#installation_app_type}
  */
  readonly installationAppType?: string;
  /**
  * The installation ID of the integration. Must start with a lowercase letter, contain only lowercase letters, numbers, and dashes, and end with a lowercase letter or number (pattern: `^[a-z][a-z0-9-]*[a-z0-9]$`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#installation_id PortIntegration#installation_id}
  */
  readonly installationId: string;
  /**
  * The changelog destination of the blueprint (just an empty `{}`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#kafka_changelog_destination PortIntegration#kafka_changelog_destination}
  */
  readonly kafkaChangelogDestination?: PortIntegrationKafkaChangelogDestination;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#title PortIntegration#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#version PortIntegration#version}
  */
  readonly version?: string;
  /**
  * The webhook changelog destination of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#webhook_changelog_destination PortIntegration#webhook_changelog_destination}
  */
  readonly webhookChangelogDestination?: PortIntegrationWebhookChangelogDestination;
}
export interface PortIntegrationKafkaChangelogDestination {
}

export function portIntegrationKafkaChangelogDestinationToTerraform(struct?: PortIntegrationKafkaChangelogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portIntegrationKafkaChangelogDestinationToHclTerraform(struct?: PortIntegrationKafkaChangelogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortIntegrationKafkaChangelogDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortIntegrationKafkaChangelogDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortIntegrationKafkaChangelogDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface PortIntegrationWebhookChangelogDestination {
  /**
  * The agent of the webhook changelog destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#agent PortIntegration#agent}
  */
  readonly agent?: boolean | cdktf.IResolvable;
  /**
  * The url of the webhook changelog destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#url PortIntegration#url}
  */
  readonly url: string;
}

export function portIntegrationWebhookChangelogDestinationToTerraform(struct?: PortIntegrationWebhookChangelogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent: cdktf.booleanToTerraform(struct!.agent),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function portIntegrationWebhookChangelogDestinationToHclTerraform(struct?: PortIntegrationWebhookChangelogDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent: {
      value: cdktf.booleanToHclTerraform(struct!.agent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortIntegrationWebhookChangelogDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortIntegrationWebhookChangelogDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agent !== undefined) {
      hasAnyValues = true;
      internalValueResult.agent = this._agent;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortIntegrationWebhookChangelogDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agent = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agent = value.agent;
      this._url = value.url;
    }
  }

  // agent - computed: false, optional: true, required: false
  private _agent?: boolean | cdktf.IResolvable; 
  public get agent() {
    return this.getBooleanAttribute('agent');
  }
  public set agent(value: boolean | cdktf.IResolvable) {
    this._agent = value;
  }
  public resetAgent() {
    this._agent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration port_integration}
*/
export class PortIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "port_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortIntegration to import
  * @param importFromId The id of the existing PortIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "port_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/port-labs/port-labs/2.17.2/docs/resources/port_integration port_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: PortIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'port_integration',
      terraformGeneratorMetadata: {
        providerName: 'port-labs',
        providerVersion: '2.17.2',
        providerVersionConstraint: '2.17.2'
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
    this._installationAppType = config.installationAppType;
    this._installationId = config.installationId;
    this._kafkaChangelogDestination.internalValue = config.kafkaChangelogDestination;
    this._title = config.title;
    this._version = config.version;
    this._webhookChangelogDestination.internalValue = config.webhookChangelogDestination;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installation_app_type - computed: false, optional: true, required: false
  private _installationAppType?: string; 
  public get installationAppType() {
    return this.getStringAttribute('installation_app_type');
  }
  public set installationAppType(value: string) {
    this._installationAppType = value;
  }
  public resetInstallationAppType() {
    this._installationAppType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationAppTypeInput() {
    return this._installationAppType;
  }

  // installation_id - computed: false, optional: false, required: true
  private _installationId?: string; 
  public get installationId() {
    return this.getStringAttribute('installation_id');
  }
  public set installationId(value: string) {
    this._installationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
  }

  // kafka_changelog_destination - computed: false, optional: true, required: false
  private _kafkaChangelogDestination = new PortIntegrationKafkaChangelogDestinationOutputReference(this, "kafka_changelog_destination");
  public get kafkaChangelogDestination() {
    return this._kafkaChangelogDestination;
  }
  public putKafkaChangelogDestination(value: PortIntegrationKafkaChangelogDestination) {
    this._kafkaChangelogDestination.internalValue = value;
  }
  public resetKafkaChangelogDestination() {
    this._kafkaChangelogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaChangelogDestinationInput() {
    return this._kafkaChangelogDestination.internalValue;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // webhook_changelog_destination - computed: false, optional: true, required: false
  private _webhookChangelogDestination = new PortIntegrationWebhookChangelogDestinationOutputReference(this, "webhook_changelog_destination");
  public get webhookChangelogDestination() {
    return this._webhookChangelogDestination;
  }
  public putWebhookChangelogDestination(value: PortIntegrationWebhookChangelogDestination) {
    this._webhookChangelogDestination.internalValue = value;
  }
  public resetWebhookChangelogDestination() {
    this._webhookChangelogDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookChangelogDestinationInput() {
    return this._webhookChangelogDestination.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      installation_app_type: cdktf.stringToTerraform(this._installationAppType),
      installation_id: cdktf.stringToTerraform(this._installationId),
      kafka_changelog_destination: portIntegrationKafkaChangelogDestinationToTerraform(this._kafkaChangelogDestination.internalValue),
      title: cdktf.stringToTerraform(this._title),
      version: cdktf.stringToTerraform(this._version),
      webhook_changelog_destination: portIntegrationWebhookChangelogDestinationToTerraform(this._webhookChangelogDestination.internalValue),
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
      installation_app_type: {
        value: cdktf.stringToHclTerraform(this._installationAppType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installation_id: {
        value: cdktf.stringToHclTerraform(this._installationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kafka_changelog_destination: {
        value: portIntegrationKafkaChangelogDestinationToHclTerraform(this._kafkaChangelogDestination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortIntegrationKafkaChangelogDestination",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_changelog_destination: {
        value: portIntegrationWebhookChangelogDestinationToHclTerraform(this._webhookChangelogDestination.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortIntegrationWebhookChangelogDestination",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
