// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutostoppingRuleEcsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Id of the cloud connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#cloud_connector_id AutostoppingRuleEcs#cloud_connector_id}
  */
  readonly cloudConnectorId: string;
  /**
  * Custom URLs used to access the instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#custom_domains AutostoppingRuleEcs#custom_domains}
  */
  readonly customDomains?: string[];
  /**
  * Boolean that indicates whether the AutoStopping rule should be created in DryRun mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#dry_run AutostoppingRuleEcs#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#id AutostoppingRuleEcs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Idle time in minutes. This is the time that the AutoStopping rule waits before stopping the idle instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#idle_time_mins AutostoppingRuleEcs#idle_time_mins}
  */
  readonly idleTimeMins?: number;
  /**
  * Name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#name AutostoppingRuleEcs#name}
  */
  readonly name: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#container AutostoppingRuleEcs#container}
  */
  readonly container?: AutostoppingRuleEcsContainer;
  /**
  * depends block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#depends AutostoppingRuleEcs#depends}
  */
  readonly depends?: AutostoppingRuleEcsDepends[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#http AutostoppingRuleEcs#http}
  */
  readonly http?: AutostoppingRuleEcsHttp[] | cdktf.IResolvable;
}
export interface AutostoppingRuleEcsContainer {
  /**
  * Name of cluster in which service belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#cluster AutostoppingRuleEcs#cluster}
  */
  readonly cluster: string;
  /**
  * Region of cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#region AutostoppingRuleEcs#region}
  */
  readonly region: string;
  /**
  * Name of service to be onboarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#service AutostoppingRuleEcs#service}
  */
  readonly service: string;
  /**
  * Desired number of tasks on warming up a rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#task_count AutostoppingRuleEcs#task_count}
  */
  readonly taskCount?: number;
}

export function autostoppingRuleEcsContainerToTerraform(struct?: AutostoppingRuleEcsContainerOutputReference | AutostoppingRuleEcsContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    region: cdktf.stringToTerraform(struct!.region),
    service: cdktf.stringToTerraform(struct!.service),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
  }
}


export function autostoppingRuleEcsContainerToHclTerraform(struct?: AutostoppingRuleEcsContainerOutputReference | AutostoppingRuleEcsContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_count: {
      value: cdktf.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutostoppingRuleEcsContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutostoppingRuleEcsContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingRuleEcsContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._region = undefined;
      this._service = undefined;
      this._taskCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._region = value.region;
      this._service = value.service;
      this._taskCount = value.taskCount;
    }
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // task_count - computed: false, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }
}
export interface AutostoppingRuleEcsDepends {
  /**
  * Number of seconds the rule should wait after warming up the dependent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#delay_in_sec AutostoppingRuleEcs#delay_in_sec}
  */
  readonly delayInSec?: number;
  /**
  * Rule id of the dependent rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#rule_id AutostoppingRuleEcs#rule_id}
  */
  readonly ruleId: number;
}

export function autostoppingRuleEcsDependsToTerraform(struct?: AutostoppingRuleEcsDepends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay_in_sec: cdktf.numberToTerraform(struct!.delayInSec),
    rule_id: cdktf.numberToTerraform(struct!.ruleId),
  }
}


export function autostoppingRuleEcsDependsToHclTerraform(struct?: AutostoppingRuleEcsDepends | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay_in_sec: {
      value: cdktf.numberToHclTerraform(struct!.delayInSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_id: {
      value: cdktf.numberToHclTerraform(struct!.ruleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutostoppingRuleEcsDependsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutostoppingRuleEcsDepends | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delayInSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayInSec = this._delayInSec;
    }
    if (this._ruleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleId = this._ruleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingRuleEcsDepends | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delayInSec = undefined;
      this._ruleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delayInSec = value.delayInSec;
      this._ruleId = value.ruleId;
    }
  }

  // delay_in_sec - computed: false, optional: true, required: false
  private _delayInSec?: number; 
  public get delayInSec() {
    return this.getNumberAttribute('delay_in_sec');
  }
  public set delayInSec(value: number) {
    this._delayInSec = value;
  }
  public resetDelayInSec() {
    this._delayInSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInSecInput() {
    return this._delayInSec;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: number; 
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }
  public set ruleId(value: number) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }
}

export class AutostoppingRuleEcsDependsList extends cdktf.ComplexList {
  public internalValue? : AutostoppingRuleEcsDepends[] | cdktf.IResolvable

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
  public get(index: number): AutostoppingRuleEcsDependsOutputReference {
    return new AutostoppingRuleEcsDependsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AutostoppingRuleEcsHttp {
  /**
  * Id of the proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#proxy_id AutostoppingRuleEcs#proxy_id}
  */
  readonly proxyId: string;
}

export function autostoppingRuleEcsHttpToTerraform(struct?: AutostoppingRuleEcsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_id: cdktf.stringToTerraform(struct!.proxyId),
  }
}


export function autostoppingRuleEcsHttpToHclTerraform(struct?: AutostoppingRuleEcsHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_id: {
      value: cdktf.stringToHclTerraform(struct!.proxyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutostoppingRuleEcsHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AutostoppingRuleEcsHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyId = this._proxyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutostoppingRuleEcsHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyId = value.proxyId;
    }
  }

  // proxy_id - computed: false, optional: false, required: true
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }
}

export class AutostoppingRuleEcsHttpList extends cdktf.ComplexList {
  public internalValue? : AutostoppingRuleEcsHttp[] | cdktf.IResolvable

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
  public get(index: number): AutostoppingRuleEcsHttpOutputReference {
    return new AutostoppingRuleEcsHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs harness_autostopping_rule_ecs}
*/
export class AutostoppingRuleEcs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_autostopping_rule_ecs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutostoppingRuleEcs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutostoppingRuleEcs to import
  * @param importFromId The id of the existing AutostoppingRuleEcs that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutostoppingRuleEcs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_autostopping_rule_ecs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/autostopping_rule_ecs harness_autostopping_rule_ecs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutostoppingRuleEcsConfig
  */
  public constructor(scope: Construct, id: string, config: AutostoppingRuleEcsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_autostopping_rule_ecs',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudConnectorId = config.cloudConnectorId;
    this._customDomains = config.customDomains;
    this._dryRun = config.dryRun;
    this._id = config.id;
    this._idleTimeMins = config.idleTimeMins;
    this._name = config.name;
    this._container.internalValue = config.container;
    this._depends.internalValue = config.depends;
    this._http.internalValue = config.http;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_connector_id - computed: false, optional: false, required: true
  private _cloudConnectorId?: string; 
  public get cloudConnectorId() {
    return this.getStringAttribute('cloud_connector_id');
  }
  public set cloudConnectorId(value: string) {
    this._cloudConnectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectorIdInput() {
    return this._cloudConnectorId;
  }

  // custom_domains - computed: false, optional: true, required: false
  private _customDomains?: string[]; 
  public get customDomains() {
    return this.getListAttribute('custom_domains');
  }
  public set customDomains(value: string[]) {
    this._customDomains = value;
  }
  public resetCustomDomains() {
    this._customDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainsInput() {
    return this._customDomains;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getNumberAttribute('identifier');
  }

  // idle_time_mins - computed: false, optional: true, required: false
  private _idleTimeMins?: number; 
  public get idleTimeMins() {
    return this.getNumberAttribute('idle_time_mins');
  }
  public set idleTimeMins(value: number) {
    this._idleTimeMins = value;
  }
  public resetIdleTimeMins() {
    this._idleTimeMins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeMinsInput() {
    return this._idleTimeMins;
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

  // container - computed: false, optional: true, required: false
  private _container = new AutostoppingRuleEcsContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: AutostoppingRuleEcsContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // depends - computed: false, optional: true, required: false
  private _depends = new AutostoppingRuleEcsDependsList(this, "depends", false);
  public get depends() {
    return this._depends;
  }
  public putDepends(value: AutostoppingRuleEcsDepends[] | cdktf.IResolvable) {
    this._depends.internalValue = value;
  }
  public resetDepends() {
    this._depends.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsInput() {
    return this._depends.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new AutostoppingRuleEcsHttpList(this, "http", false);
  public get http() {
    return this._http;
  }
  public putHttp(value: AutostoppingRuleEcsHttp[] | cdktf.IResolvable) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_connector_id: cdktf.stringToTerraform(this._cloudConnectorId),
      custom_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customDomains),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      id: cdktf.stringToTerraform(this._id),
      idle_time_mins: cdktf.numberToTerraform(this._idleTimeMins),
      name: cdktf.stringToTerraform(this._name),
      container: autostoppingRuleEcsContainerToTerraform(this._container.internalValue),
      depends: cdktf.listMapper(autostoppingRuleEcsDependsToTerraform, true)(this._depends.internalValue),
      http: cdktf.listMapper(autostoppingRuleEcsHttpToTerraform, true)(this._http.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_connector_id: {
        value: cdktf.stringToHclTerraform(this._cloudConnectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_time_mins: {
        value: cdktf.numberToHclTerraform(this._idleTimeMins),
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
      container: {
        value: autostoppingRuleEcsContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutostoppingRuleEcsContainerList",
      },
      depends: {
        value: cdktf.listMapperHcl(autostoppingRuleEcsDependsToHclTerraform, true)(this._depends.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutostoppingRuleEcsDependsList",
      },
      http: {
        value: cdktf.listMapperHcl(autostoppingRuleEcsHttpToHclTerraform, true)(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutostoppingRuleEcsHttpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
