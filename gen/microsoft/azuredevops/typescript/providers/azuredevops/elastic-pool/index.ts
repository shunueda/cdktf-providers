// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#agent_interactive_ui ElasticPool#agent_interactive_ui}
  */
  readonly agentInteractiveUi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#auto_provision ElasticPool#auto_provision}
  */
  readonly autoProvision?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#auto_update ElasticPool#auto_update}
  */
  readonly autoUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#azure_resource_id ElasticPool#azure_resource_id}
  */
  readonly azureResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#desired_idle ElasticPool#desired_idle}
  */
  readonly desiredIdle: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#id ElasticPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#max_capacity ElasticPool#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#name ElasticPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#project_id ElasticPool#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#recycle_after_each_use ElasticPool#recycle_after_each_use}
  */
  readonly recycleAfterEachUse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#service_endpoint_id ElasticPool#service_endpoint_id}
  */
  readonly serviceEndpointId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#service_endpoint_scope ElasticPool#service_endpoint_scope}
  */
  readonly serviceEndpointScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#time_to_live_minutes ElasticPool#time_to_live_minutes}
  */
  readonly timeToLiveMinutes?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#timeouts ElasticPool#timeouts}
  */
  readonly timeouts?: ElasticPoolTimeouts;
}
export interface ElasticPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#create ElasticPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#delete ElasticPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#read ElasticPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#update ElasticPool#update}
  */
  readonly update?: string;
}

export function elasticPoolTimeoutsToTerraform(struct?: ElasticPoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function elasticPoolTimeoutsToHclTerraform(struct?: ElasticPoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ElasticPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElasticPoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ElasticPoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool azuredevops_elastic_pool}
*/
export class ElasticPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_elastic_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticPool to import
  * @param importFromId The id of the existing ElasticPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_elastic_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/resources/elastic_pool azuredevops_elastic_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticPoolConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_elastic_pool',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentInteractiveUi = config.agentInteractiveUi;
    this._autoProvision = config.autoProvision;
    this._autoUpdate = config.autoUpdate;
    this._azureResourceId = config.azureResourceId;
    this._desiredIdle = config.desiredIdle;
    this._id = config.id;
    this._maxCapacity = config.maxCapacity;
    this._name = config.name;
    this._projectId = config.projectId;
    this._recycleAfterEachUse = config.recycleAfterEachUse;
    this._serviceEndpointId = config.serviceEndpointId;
    this._serviceEndpointScope = config.serviceEndpointScope;
    this._timeToLiveMinutes = config.timeToLiveMinutes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_interactive_ui - computed: false, optional: true, required: false
  private _agentInteractiveUi?: boolean | cdktf.IResolvable; 
  public get agentInteractiveUi() {
    return this.getBooleanAttribute('agent_interactive_ui');
  }
  public set agentInteractiveUi(value: boolean | cdktf.IResolvable) {
    this._agentInteractiveUi = value;
  }
  public resetAgentInteractiveUi() {
    this._agentInteractiveUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInteractiveUiInput() {
    return this._agentInteractiveUi;
  }

  // auto_provision - computed: false, optional: true, required: false
  private _autoProvision?: boolean | cdktf.IResolvable; 
  public get autoProvision() {
    return this.getBooleanAttribute('auto_provision');
  }
  public set autoProvision(value: boolean | cdktf.IResolvable) {
    this._autoProvision = value;
  }
  public resetAutoProvision() {
    this._autoProvision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisionInput() {
    return this._autoProvision;
  }

  // auto_update - computed: false, optional: true, required: false
  private _autoUpdate?: boolean | cdktf.IResolvable; 
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }
  public set autoUpdate(value: boolean | cdktf.IResolvable) {
    this._autoUpdate = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate;
  }

  // azure_resource_id - computed: false, optional: false, required: true
  private _azureResourceId?: string; 
  public get azureResourceId() {
    return this.getStringAttribute('azure_resource_id');
  }
  public set azureResourceId(value: string) {
    this._azureResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureResourceIdInput() {
    return this._azureResourceId;
  }

  // desired_idle - computed: false, optional: false, required: true
  private _desiredIdle?: number; 
  public get desiredIdle() {
    return this.getNumberAttribute('desired_idle');
  }
  public set desiredIdle(value: number) {
    this._desiredIdle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredIdleInput() {
    return this._desiredIdle;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // recycle_after_each_use - computed: false, optional: true, required: false
  private _recycleAfterEachUse?: boolean | cdktf.IResolvable; 
  public get recycleAfterEachUse() {
    return this.getBooleanAttribute('recycle_after_each_use');
  }
  public set recycleAfterEachUse(value: boolean | cdktf.IResolvable) {
    this._recycleAfterEachUse = value;
  }
  public resetRecycleAfterEachUse() {
    this._recycleAfterEachUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleAfterEachUseInput() {
    return this._recycleAfterEachUse;
  }

  // service_endpoint_id - computed: false, optional: false, required: true
  private _serviceEndpointId?: string; 
  public get serviceEndpointId() {
    return this.getStringAttribute('service_endpoint_id');
  }
  public set serviceEndpointId(value: string) {
    this._serviceEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointIdInput() {
    return this._serviceEndpointId;
  }

  // service_endpoint_scope - computed: false, optional: false, required: true
  private _serviceEndpointScope?: string; 
  public get serviceEndpointScope() {
    return this.getStringAttribute('service_endpoint_scope');
  }
  public set serviceEndpointScope(value: string) {
    this._serviceEndpointScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointScopeInput() {
    return this._serviceEndpointScope;
  }

  // time_to_live_minutes - computed: false, optional: true, required: false
  private _timeToLiveMinutes?: number; 
  public get timeToLiveMinutes() {
    return this.getNumberAttribute('time_to_live_minutes');
  }
  public set timeToLiveMinutes(value: number) {
    this._timeToLiveMinutes = value;
  }
  public resetTimeToLiveMinutes() {
    this._timeToLiveMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveMinutesInput() {
    return this._timeToLiveMinutes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElasticPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElasticPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_interactive_ui: cdktf.booleanToTerraform(this._agentInteractiveUi),
      auto_provision: cdktf.booleanToTerraform(this._autoProvision),
      auto_update: cdktf.booleanToTerraform(this._autoUpdate),
      azure_resource_id: cdktf.stringToTerraform(this._azureResourceId),
      desired_idle: cdktf.numberToTerraform(this._desiredIdle),
      id: cdktf.stringToTerraform(this._id),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      recycle_after_each_use: cdktf.booleanToTerraform(this._recycleAfterEachUse),
      service_endpoint_id: cdktf.stringToTerraform(this._serviceEndpointId),
      service_endpoint_scope: cdktf.stringToTerraform(this._serviceEndpointScope),
      time_to_live_minutes: cdktf.numberToTerraform(this._timeToLiveMinutes),
      timeouts: elasticPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_interactive_ui: {
        value: cdktf.booleanToHclTerraform(this._agentInteractiveUi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_provision: {
        value: cdktf.booleanToHclTerraform(this._autoProvision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_update: {
        value: cdktf.booleanToHclTerraform(this._autoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      azure_resource_id: {
        value: cdktf.stringToHclTerraform(this._azureResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_idle: {
        value: cdktf.numberToHclTerraform(this._desiredIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_capacity: {
        value: cdktf.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recycle_after_each_use: {
        value: cdktf.booleanToHclTerraform(this._recycleAfterEachUse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_endpoint_id: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_scope: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_to_live_minutes: {
        value: cdktf.numberToHclTerraform(this._timeToLiveMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: elasticPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElasticPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
