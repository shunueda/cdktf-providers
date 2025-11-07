// https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/connectors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFivetranConnectorsConfig extends cdktf.TerraformMetaArguments {
  /**
  * connectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/connectors#connectors DataFivetranConnectors#connectors}
  */
  readonly connectors?: DataFivetranConnectorsConnectors[] | cdktf.IResolvable;
}
export interface DataFivetranConnectorsConnectors {
}

export function dataFivetranConnectorsConnectorsToTerraform(struct?: DataFivetranConnectorsConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFivetranConnectorsConnectorsToHclTerraform(struct?: DataFivetranConnectorsConnectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFivetranConnectorsConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFivetranConnectorsConnectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFivetranConnectorsConnectors | cdktf.IResolvable | undefined) {
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

  // connected_by - computed: true, optional: false, required: false
  public get connectedBy() {
    return this.getStringAttribute('connected_by');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // daily_sync_time - computed: true, optional: false, required: false
  public get dailySyncTime() {
    return this.getStringAttribute('daily_sync_time');
  }

  // data_delay_sensitivity - computed: true, optional: false, required: false
  public get dataDelaySensitivity() {
    return this.getStringAttribute('data_delay_sensitivity');
  }

  // data_delay_threshold - computed: true, optional: false, required: false
  public get dataDelayThreshold() {
    return this.getNumberAttribute('data_delay_threshold');
  }

  // failed_at - computed: true, optional: false, required: false
  public get failedAt() {
    return this.getStringAttribute('failed_at');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
  }

  // hybrid_deployment_agent_id - computed: true, optional: false, required: false
  public get hybridDeploymentAgentId() {
    return this.getStringAttribute('hybrid_deployment_agent_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // networking_method - computed: true, optional: false, required: false
  public get networkingMethod() {
    return this.getStringAttribute('networking_method');
  }

  // pause_after_trial - computed: true, optional: false, required: false
  public get pauseAfterTrial() {
    return this.getBooleanAttribute('pause_after_trial');
  }

  // paused - computed: true, optional: false, required: false
  public get paused() {
    return this.getBooleanAttribute('paused');
  }

  // private_link_id - computed: true, optional: false, required: false
  public get privateLinkId() {
    return this.getStringAttribute('private_link_id');
  }

  // proxy_agent_id - computed: true, optional: false, required: false
  public get proxyAgentId() {
    return this.getStringAttribute('proxy_agent_id');
  }

  // schedule_type - computed: true, optional: false, required: false
  public get scheduleType() {
    return this.getStringAttribute('schedule_type');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_version - computed: true, optional: false, required: false
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }

  // succeeded_at - computed: true, optional: false, required: false
  public get succeededAt() {
    return this.getStringAttribute('succeeded_at');
  }

  // sync_frequency - computed: true, optional: false, required: false
  public get syncFrequency() {
    return this.getNumberAttribute('sync_frequency');
  }
}

export class DataFivetranConnectorsConnectorsList extends cdktf.ComplexList {
  public internalValue? : DataFivetranConnectorsConnectors[] | cdktf.IResolvable

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
  public get(index: number): DataFivetranConnectorsConnectorsOutputReference {
    return new DataFivetranConnectorsConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/connectors fivetran_connectors}
*/
export class DataFivetranConnectors extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_connectors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFivetranConnectors resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFivetranConnectors to import
  * @param importFromId The id of the existing DataFivetranConnectors that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/connectors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFivetranConnectors to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_connectors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.13/docs/data-sources/connectors fivetran_connectors} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFivetranConnectorsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFivetranConnectorsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fivetran_connectors',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectors.internalValue = config.connectors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // connectors - computed: false, optional: true, required: false
  private _connectors = new DataFivetranConnectorsConnectorsList(this, "connectors", true);
  public get connectors() {
    return this._connectors;
  }
  public putConnectors(value: DataFivetranConnectorsConnectors[] | cdktf.IResolvable) {
    this._connectors.internalValue = value;
  }
  public resetConnectors() {
    this._connectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsInput() {
    return this._connectors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connectors: cdktf.listMapper(dataFivetranConnectorsConnectorsToTerraform, true)(this._connectors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connectors: {
        value: cdktf.listMapperHcl(dataFivetranConnectorsConnectorsToHclTerraform, true)(this._connectors.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataFivetranConnectorsConnectorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
