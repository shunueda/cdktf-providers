// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraAgentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Agent attributes used as a filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#filter DataApstraAgents#filter}
  */
  readonly filter?: DataApstraAgentsFilter;
  /**
  * Agent attributes used as a filters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#filters DataApstraAgents#filters}
  */
  readonly filters?: DataApstraAgentsFilters[] | cdktf.IResolvable;
}
export interface DataApstraAgentsFilter {
  /**
  * Apstra ID for the Managed Device Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#agent_id DataApstraAgents#agent_id}
  */
  readonly agentId?: string;
  /**
  * ID of the Agent Profile associated with the Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#agent_profile_id DataApstraAgents#agent_profile_id}
  */
  readonly agentProfileId?: string;
  /**
  * Key which uniquely identifies a System asset, probably a serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#device_key DataApstraAgents#device_key}
  */
  readonly deviceKey?: string;
  /**
  * Device `location` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#location DataApstraAgents#location}
  */
  readonly location?: string;
  /**
  * Management IP address of the System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#management_ip DataApstraAgents#management_ip}
  */
  readonly managementIp?: string;
  /**
  * Indicates whether the agent runs on the switch (true) or on an Apstra node (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#off_box DataApstraAgents#off_box}
  */
  readonly offBox?: boolean | cdktf.IResolvable;
  /**
  * Apstra ID for the System onboarded by the Managed Device Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#system_id DataApstraAgents#system_id}
  */
  readonly systemId?: string;
}

export function dataApstraAgentsFilterToTerraform(struct?: DataApstraAgentsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    agent_profile_id: cdktf.stringToTerraform(struct!.agentProfileId),
    device_key: cdktf.stringToTerraform(struct!.deviceKey),
    location: cdktf.stringToTerraform(struct!.location),
    management_ip: cdktf.stringToTerraform(struct!.managementIp),
    off_box: cdktf.booleanToTerraform(struct!.offBox),
    system_id: cdktf.stringToTerraform(struct!.systemId),
  }
}


export function dataApstraAgentsFilterToHclTerraform(struct?: DataApstraAgentsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.agentProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_key: {
      value: cdktf.stringToHclTerraform(struct!.deviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_box: {
      value: cdktf.booleanToHclTerraform(struct!.offBox),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraAgentsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataApstraAgentsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._agentProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentProfileId = this._agentProfileId;
    }
    if (this._deviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceKey = this._deviceKey;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._managementIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIp = this._managementIp;
    }
    if (this._offBox !== undefined) {
      hasAnyValues = true;
      internalValueResult.offBox = this._offBox;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraAgentsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentId = undefined;
      this._agentProfileId = undefined;
      this._deviceKey = undefined;
      this._location = undefined;
      this._managementIp = undefined;
      this._offBox = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentId = value.agentId;
      this._agentProfileId = value.agentProfileId;
      this._deviceKey = value.deviceKey;
      this._location = value.location;
      this._managementIp = value.managementIp;
      this._offBox = value.offBox;
      this._systemId = value.systemId;
    }
  }

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // agent_profile_id - computed: false, optional: true, required: false
  private _agentProfileId?: string; 
  public get agentProfileId() {
    return this.getStringAttribute('agent_profile_id');
  }
  public set agentProfileId(value: string) {
    this._agentProfileId = value;
  }
  public resetAgentProfileId() {
    this._agentProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentProfileIdInput() {
    return this._agentProfileId;
  }

  // device_key - computed: false, optional: true, required: false
  private _deviceKey?: string; 
  public get deviceKey() {
    return this.getStringAttribute('device_key');
  }
  public set deviceKey(value: string) {
    this._deviceKey = value;
  }
  public resetDeviceKey() {
    this._deviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceKeyInput() {
    return this._deviceKey;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // management_ip - computed: false, optional: true, required: false
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  public resetManagementIp() {
    this._managementIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
  }

  // off_box - computed: false, optional: true, required: false
  private _offBox?: boolean | cdktf.IResolvable; 
  public get offBox() {
    return this.getBooleanAttribute('off_box');
  }
  public set offBox(value: boolean | cdktf.IResolvable) {
    this._offBox = value;
  }
  public resetOffBox() {
    this._offBox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offBoxInput() {
    return this._offBox;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}
export interface DataApstraAgentsFilters {
  /**
  * Apstra ID for the Managed Device Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#agent_id DataApstraAgents#agent_id}
  */
  readonly agentId?: string;
  /**
  * ID of the Agent Profile associated with the Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#agent_profile_id DataApstraAgents#agent_profile_id}
  */
  readonly agentProfileId?: string;
  /**
  * Key which uniquely identifies a System asset, probably a serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#device_key DataApstraAgents#device_key}
  */
  readonly deviceKey?: string;
  /**
  * Device `location` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#location DataApstraAgents#location}
  */
  readonly location?: string;
  /**
  * Management IP address of the System.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#management_ip DataApstraAgents#management_ip}
  */
  readonly managementIp?: string;
  /**
  * Indicates whether the agent runs on the switch (true) or on an Apstra node (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#off_box DataApstraAgents#off_box}
  */
  readonly offBox?: boolean | cdktf.IResolvable;
  /**
  * Apstra ID for the System onboarded by the Managed Device Agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#system_id DataApstraAgents#system_id}
  */
  readonly systemId?: string;
}

export function dataApstraAgentsFiltersToTerraform(struct?: DataApstraAgentsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    agent_profile_id: cdktf.stringToTerraform(struct!.agentProfileId),
    device_key: cdktf.stringToTerraform(struct!.deviceKey),
    location: cdktf.stringToTerraform(struct!.location),
    management_ip: cdktf.stringToTerraform(struct!.managementIp),
    off_box: cdktf.booleanToTerraform(struct!.offBox),
    system_id: cdktf.stringToTerraform(struct!.systemId),
  }
}


export function dataApstraAgentsFiltersToHclTerraform(struct?: DataApstraAgentsFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.agentProfileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_key: {
      value: cdktf.stringToHclTerraform(struct!.deviceKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_ip: {
      value: cdktf.stringToHclTerraform(struct!.managementIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    off_box: {
      value: cdktf.booleanToHclTerraform(struct!.offBox),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_id: {
      value: cdktf.stringToHclTerraform(struct!.systemId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataApstraAgentsFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataApstraAgentsFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._agentProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentProfileId = this._agentProfileId;
    }
    if (this._deviceKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceKey = this._deviceKey;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._managementIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementIp = this._managementIp;
    }
    if (this._offBox !== undefined) {
      hasAnyValues = true;
      internalValueResult.offBox = this._offBox;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraAgentsFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentId = undefined;
      this._agentProfileId = undefined;
      this._deviceKey = undefined;
      this._location = undefined;
      this._managementIp = undefined;
      this._offBox = undefined;
      this._systemId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentId = value.agentId;
      this._agentProfileId = value.agentProfileId;
      this._deviceKey = value.deviceKey;
      this._location = value.location;
      this._managementIp = value.managementIp;
      this._offBox = value.offBox;
      this._systemId = value.systemId;
    }
  }

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // agent_profile_id - computed: false, optional: true, required: false
  private _agentProfileId?: string; 
  public get agentProfileId() {
    return this.getStringAttribute('agent_profile_id');
  }
  public set agentProfileId(value: string) {
    this._agentProfileId = value;
  }
  public resetAgentProfileId() {
    this._agentProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentProfileIdInput() {
    return this._agentProfileId;
  }

  // device_key - computed: false, optional: true, required: false
  private _deviceKey?: string; 
  public get deviceKey() {
    return this.getStringAttribute('device_key');
  }
  public set deviceKey(value: string) {
    this._deviceKey = value;
  }
  public resetDeviceKey() {
    this._deviceKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceKeyInput() {
    return this._deviceKey;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // management_ip - computed: false, optional: true, required: false
  private _managementIp?: string; 
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }
  public set managementIp(value: string) {
    this._managementIp = value;
  }
  public resetManagementIp() {
    this._managementIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementIpInput() {
    return this._managementIp;
  }

  // off_box - computed: false, optional: true, required: false
  private _offBox?: boolean | cdktf.IResolvable; 
  public get offBox() {
    return this.getBooleanAttribute('off_box');
  }
  public set offBox(value: boolean | cdktf.IResolvable) {
    this._offBox = value;
  }
  public resetOffBox() {
    this._offBox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offBoxInput() {
    return this._offBox;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }
}

export class DataApstraAgentsFiltersList extends cdktf.ComplexList {
  public internalValue? : DataApstraAgentsFilters[] | cdktf.IResolvable

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
  public get(index: number): DataApstraAgentsFiltersOutputReference {
    return new DataApstraAgentsFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents apstra_agents}
*/
export class DataApstraAgents extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_agents";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraAgents resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraAgents to import
  * @param importFromId The id of the existing DataApstraAgents that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraAgents to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_agents", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/agents apstra_agents} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraAgentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApstraAgentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apstra_agents',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
    this._filters.internalValue = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter = new DataApstraAgentsFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataApstraAgentsFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataApstraAgentsFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataApstraAgentsFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return cdktf.Fn.tolist(this.getListAttribute('ids'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataApstraAgentsFilterToTerraform(this._filter.internalValue),
      filters: cdktf.listMapper(dataApstraAgentsFiltersToTerraform, false)(this._filters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataApstraAgentsFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataApstraAgentsFilter",
      },
      filters: {
        value: cdktf.listMapperHcl(dataApstraAgentsFiltersToHclTerraform, false)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataApstraAgentsFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
