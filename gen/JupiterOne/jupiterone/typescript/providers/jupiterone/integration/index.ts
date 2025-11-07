// https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the collector pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#collector_pool_id Integration#collector_pool_id}
  */
  readonly collectorPoolId?: string;
  /**
  * The configuration for the integration instance as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#config Integration#config}
  */
  readonly config: string;
  /**
  * The description of the integration instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#description Integration#description}
  */
  readonly description?: string;
  /**
  * Overrides for ingestion sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#ingestion_sources_overrides Integration#ingestion_sources_overrides}
  */
  readonly ingestionSourcesOverrides?: IntegrationIngestionSourcesOverrides[] | cdktf.IResolvable;
  /**
  * The ID of the integration definition. This cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#integration_definition_id Integration#integration_definition_id}
  */
  readonly integrationDefinitionId: string;
  /**
  * The name of the integration instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#name Integration#name}
  */
  readonly name: string;
  /**
  * The polling interval for the integration instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#polling_interval Integration#polling_interval}
  */
  readonly pollingInterval: string;
  /**
  * The cron expression for the polling interval as a JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#polling_interval_cron_expression Integration#polling_interval_cron_expression}
  */
  readonly pollingIntervalCronExpression?: string;
  /**
  * The ID of the resource group to which the integration instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#resource_group_id Integration#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * The ID of the source integration instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#source_integration_instance_id Integration#source_integration_instance_id}
  */
  readonly sourceIntegrationInstanceId?: string;
}
export interface IntegrationIngestionSourcesOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#enabled Integration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#ingestion_source_id Integration#ingestion_source_id}
  */
  readonly ingestionSourceId?: string;
}

export function integrationIngestionSourcesOverridesToTerraform(struct?: IntegrationIngestionSourcesOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ingestion_source_id: cdktf.stringToTerraform(struct!.ingestionSourceId),
  }
}


export function integrationIngestionSourcesOverridesToHclTerraform(struct?: IntegrationIngestionSourcesOverrides | cdktf.IResolvable): any {
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
    ingestion_source_id: {
      value: cdktf.stringToHclTerraform(struct!.ingestionSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIngestionSourcesOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationIngestionSourcesOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ingestionSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingestionSourceId = this._ingestionSourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIngestionSourcesOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ingestionSourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ingestionSourceId = value.ingestionSourceId;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ingestion_source_id - computed: false, optional: true, required: false
  private _ingestionSourceId?: string; 
  public get ingestionSourceId() {
    return this.getStringAttribute('ingestion_source_id');
  }
  public set ingestionSourceId(value: string) {
    this._ingestionSourceId = value;
  }
  public resetIngestionSourceId() {
    this._ingestionSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionSourceIdInput() {
    return this._ingestionSourceId;
  }
}

export class IntegrationIngestionSourcesOverridesList extends cdktf.ComplexList {
  public internalValue? : IntegrationIngestionSourcesOverrides[] | cdktf.IResolvable

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
  public get(index: number): IntegrationIngestionSourcesOverridesOutputReference {
    return new IntegrationIngestionSourcesOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration jupiterone_integration}
*/
export class Integration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jupiterone_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Integration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Integration to import
  * @param importFromId The id of the existing Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Integration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jupiterone_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jupiterone/jupiterone/1.16.3/docs/resources/integration jupiterone_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'jupiterone_integration',
      terraformGeneratorMetadata: {
        providerName: 'jupiterone',
        providerVersion: '1.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectorPoolId = config.collectorPoolId;
    this._config = config.config;
    this._description = config.description;
    this._ingestionSourcesOverrides.internalValue = config.ingestionSourcesOverrides;
    this._integrationDefinitionId = config.integrationDefinitionId;
    this._name = config.name;
    this._pollingInterval = config.pollingInterval;
    this._pollingIntervalCronExpression = config.pollingIntervalCronExpression;
    this._resourceGroupId = config.resourceGroupId;
    this._sourceIntegrationInstanceId = config.sourceIntegrationInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collector_pool_id - computed: false, optional: true, required: false
  private _collectorPoolId?: string; 
  public get collectorPoolId() {
    return this.getStringAttribute('collector_pool_id');
  }
  public set collectorPoolId(value: string) {
    this._collectorPoolId = value;
  }
  public resetCollectorPoolId() {
    this._collectorPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorPoolIdInput() {
    return this._collectorPoolId;
  }

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingestion_sources_overrides - computed: false, optional: true, required: false
  private _ingestionSourcesOverrides = new IntegrationIngestionSourcesOverridesList(this, "ingestion_sources_overrides", false);
  public get ingestionSourcesOverrides() {
    return this._ingestionSourcesOverrides;
  }
  public putIngestionSourcesOverrides(value: IntegrationIngestionSourcesOverrides[] | cdktf.IResolvable) {
    this._ingestionSourcesOverrides.internalValue = value;
  }
  public resetIngestionSourcesOverrides() {
    this._ingestionSourcesOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionSourcesOverridesInput() {
    return this._ingestionSourcesOverrides.internalValue;
  }

  // integration_definition_id - computed: false, optional: false, required: true
  private _integrationDefinitionId?: string; 
  public get integrationDefinitionId() {
    return this.getStringAttribute('integration_definition_id');
  }
  public set integrationDefinitionId(value: string) {
    this._integrationDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationDefinitionIdInput() {
    return this._integrationDefinitionId;
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

  // polling_interval - computed: false, optional: false, required: true
  private _pollingInterval?: string; 
  public get pollingInterval() {
    return this.getStringAttribute('polling_interval');
  }
  public set pollingInterval(value: string) {
    this._pollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // polling_interval_cron_expression - computed: false, optional: true, required: false
  private _pollingIntervalCronExpression?: string; 
  public get pollingIntervalCronExpression() {
    return this.getStringAttribute('polling_interval_cron_expression');
  }
  public set pollingIntervalCronExpression(value: string) {
    this._pollingIntervalCronExpression = value;
  }
  public resetPollingIntervalCronExpression() {
    this._pollingIntervalCronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalCronExpressionInput() {
    return this._pollingIntervalCronExpression;
  }

  // resource_group_id - computed: false, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // source_integration_instance_id - computed: false, optional: true, required: false
  private _sourceIntegrationInstanceId?: string; 
  public get sourceIntegrationInstanceId() {
    return this.getStringAttribute('source_integration_instance_id');
  }
  public set sourceIntegrationInstanceId(value: string) {
    this._sourceIntegrationInstanceId = value;
  }
  public resetSourceIntegrationInstanceId() {
    this._sourceIntegrationInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIntegrationInstanceIdInput() {
    return this._sourceIntegrationInstanceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collector_pool_id: cdktf.stringToTerraform(this._collectorPoolId),
      config: cdktf.stringToTerraform(this._config),
      description: cdktf.stringToTerraform(this._description),
      ingestion_sources_overrides: cdktf.listMapper(integrationIngestionSourcesOverridesToTerraform, false)(this._ingestionSourcesOverrides.internalValue),
      integration_definition_id: cdktf.stringToTerraform(this._integrationDefinitionId),
      name: cdktf.stringToTerraform(this._name),
      polling_interval: cdktf.stringToTerraform(this._pollingInterval),
      polling_interval_cron_expression: cdktf.stringToTerraform(this._pollingIntervalCronExpression),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      source_integration_instance_id: cdktf.stringToTerraform(this._sourceIntegrationInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collector_pool_id: {
        value: cdktf.stringToHclTerraform(this._collectorPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.stringToHclTerraform(this._config),
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
      ingestion_sources_overrides: {
        value: cdktf.listMapperHcl(integrationIngestionSourcesOverridesToHclTerraform, false)(this._ingestionSourcesOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationIngestionSourcesOverridesList",
      },
      integration_definition_id: {
        value: cdktf.stringToHclTerraform(this._integrationDefinitionId),
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
      polling_interval: {
        value: cdktf.stringToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_interval_cron_expression: {
        value: cdktf.stringToHclTerraform(this._pollingIntervalCronExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_integration_instance_id: {
        value: cdktf.stringToHclTerraform(this._sourceIntegrationInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
