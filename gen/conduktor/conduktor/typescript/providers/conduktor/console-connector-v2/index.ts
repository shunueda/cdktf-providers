// https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsoleConnectorV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Auto restart configuration for the connector. NOTE: this field has been introduced with Console `1.29.0` and it will not work with previous versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#auto_restart ConsoleConnectorV2#auto_restart}
  */
  readonly autoRestart?: ConsoleConnectorV2AutoRestart;
  /**
  * Kafka cluster name linked with Kafka Connect connector. Must already exist in Conduktor Console. Any change will require the Connector to be destroyed and re-created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#cluster ConsoleConnectorV2#cluster}
  */
  readonly cluster: string;
  /**
  * Kafka Connect server name linked with connector. Must already exist in Conduktor Console. Any change will require the Connector to be destroyed and re-created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#connect_cluster ConsoleConnectorV2#connect_cluster}
  */
  readonly connectCluster: string;
  /**
  * Connector description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#description ConsoleConnectorV2#description}
  */
  readonly description?: string;
  /**
  * Custom labels for the connector resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#labels ConsoleConnectorV2#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Connector name, must be unique, acts as an ID for import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#name ConsoleConnectorV2#name}
  */
  readonly name: string;
  /**
  * Connector specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#spec ConsoleConnectorV2#spec}
  */
  readonly spec: ConsoleConnectorV2Spec;
}
export interface ConsoleConnectorV2AutoRestart {
  /**
  * Whether to enable auto restart for the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#enabled ConsoleConnectorV2#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Defines the delay between consecutive restart attempts, default to 600 seconds (10 minutes) max 86400 (1 day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#frequency_seconds ConsoleConnectorV2#frequency_seconds}
  */
  readonly frequencySeconds?: number;
}

export function consoleConnectorV2AutoRestartToTerraform(struct?: ConsoleConnectorV2AutoRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    frequency_seconds: cdktf.numberToTerraform(struct!.frequencySeconds),
  }
}


export function consoleConnectorV2AutoRestartToHclTerraform(struct?: ConsoleConnectorV2AutoRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frequency_seconds: {
      value: cdktf.numberToHclTerraform(struct!.frequencySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleConnectorV2AutoRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleConnectorV2AutoRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._frequencySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencySeconds = this._frequencySeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleConnectorV2AutoRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._frequencySeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._frequencySeconds = value.frequencySeconds;
    }
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

  // frequency_seconds - computed: true, optional: true, required: false
  private _frequencySeconds?: number; 
  public get frequencySeconds() {
    return this.getNumberAttribute('frequency_seconds');
  }
  public set frequencySeconds(value: number) {
    this._frequencySeconds = value;
  }
  public resetFrequencySeconds() {
    this._frequencySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencySecondsInput() {
    return this._frequencySeconds;
  }
}
export interface ConsoleConnectorV2Spec {
  /**
  * Must be valid Kafka Connect Connector configs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#config ConsoleConnectorV2#config}
  */
  readonly config?: { [key: string]: string };
}

export function consoleConnectorV2SpecToTerraform(struct?: ConsoleConnectorV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.config),
  }
}


export function consoleConnectorV2SpecToHclTerraform(struct?: ConsoleConnectorV2Spec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.config),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsoleConnectorV2SpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConsoleConnectorV2Spec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsoleConnectorV2Spec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2 conduktor_console_connector_v2}
*/
export class ConsoleConnectorV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "conduktor_console_connector_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsoleConnectorV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsoleConnectorV2 to import
  * @param importFromId The id of the existing ConsoleConnectorV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsoleConnectorV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "conduktor_console_connector_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/conduktor/conduktor/1.0.1/docs/resources/console_connector_v2 conduktor_console_connector_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsoleConnectorV2Config
  */
  public constructor(scope: Construct, id: string, config: ConsoleConnectorV2Config) {
    super(scope, id, {
      terraformResourceType: 'conduktor_console_connector_v2',
      terraformGeneratorMetadata: {
        providerName: 'conduktor',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRestart.internalValue = config.autoRestart;
    this._cluster = config.cluster;
    this._connectCluster = config.connectCluster;
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_restart - computed: false, optional: true, required: false
  private _autoRestart = new ConsoleConnectorV2AutoRestartOutputReference(this, "auto_restart");
  public get autoRestart() {
    return this._autoRestart;
  }
  public putAutoRestart(value: ConsoleConnectorV2AutoRestart) {
    this._autoRestart.internalValue = value;
  }
  public resetAutoRestart() {
    this._autoRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRestartInput() {
    return this._autoRestart.internalValue;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // connect_cluster - computed: false, optional: false, required: true
  private _connectCluster?: string; 
  public get connectCluster() {
    return this.getStringAttribute('connect_cluster');
  }
  public set connectCluster(value: string) {
    this._connectCluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectClusterInput() {
    return this._connectCluster;
  }

  // description - computed: false, optional: true, required: false
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // managed_labels - computed: true, optional: false, required: false
  private _managedLabels = new cdktf.StringMap(this, "managed_labels");
  public get managedLabels() {
    return this._managedLabels;
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

  // spec - computed: false, optional: false, required: true
  private _spec = new ConsoleConnectorV2SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ConsoleConnectorV2Spec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_restart: consoleConnectorV2AutoRestartToTerraform(this._autoRestart.internalValue),
      cluster: cdktf.stringToTerraform(this._cluster),
      connect_cluster: cdktf.stringToTerraform(this._connectCluster),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      spec: consoleConnectorV2SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_restart: {
        value: consoleConnectorV2AutoRestartToHclTerraform(this._autoRestart.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleConnectorV2AutoRestart",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_cluster: {
        value: cdktf.stringToHclTerraform(this._connectCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: consoleConnectorV2SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConsoleConnectorV2Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
