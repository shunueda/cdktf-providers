// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpTkeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#cluster_id MonitorTmpTkeConfig#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Type of cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#cluster_type MonitorTmpTkeConfig#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#id MonitorTmpTkeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#instance_id MonitorTmpTkeConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * pod_monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#pod_monitors MonitorTmpTkeConfig#pod_monitors}
  */
  readonly podMonitors?: MonitorTmpTkeConfigPodMonitors[] | cdktf.IResolvable;
  /**
  * raw_jobs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#raw_jobs MonitorTmpTkeConfig#raw_jobs}
  */
  readonly rawJobs?: MonitorTmpTkeConfigRawJobs[] | cdktf.IResolvable;
  /**
  * service_monitors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#service_monitors MonitorTmpTkeConfig#service_monitors}
  */
  readonly serviceMonitors?: MonitorTmpTkeConfigServiceMonitors[] | cdktf.IResolvable;
}
export interface MonitorTmpTkeConfigPodMonitors {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#config MonitorTmpTkeConfig#config}
  */
  readonly config: string;
  /**
  * Name. The naming rule is: namespace/name. If you don't have any namespace, use the default namespace: kube-system, otherwise use the specified one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#name MonitorTmpTkeConfig#name}
  */
  readonly name: string;
  /**
  * Used for output parameters, if the configuration comes from a template, it is the template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#template_id MonitorTmpTkeConfig#template_id}
  */
  readonly templateId?: string;
}

export function monitorTmpTkeConfigPodMonitorsToTerraform(struct?: MonitorTmpTkeConfigPodMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function monitorTmpTkeConfigPodMonitorsToHclTerraform(struct?: MonitorTmpTkeConfigPodMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeConfigPodMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeConfigPodMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeConfigPodMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._templateId = value.templateId;
    }
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class MonitorTmpTkeConfigPodMonitorsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeConfigPodMonitors[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeConfigPodMonitorsOutputReference {
    return new MonitorTmpTkeConfigPodMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeConfigRawJobs {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#config MonitorTmpTkeConfig#config}
  */
  readonly config: string;
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#name MonitorTmpTkeConfig#name}
  */
  readonly name: string;
  /**
  * Used for output parameters, if the configuration comes from a template, it is the template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#template_id MonitorTmpTkeConfig#template_id}
  */
  readonly templateId?: string;
}

export function monitorTmpTkeConfigRawJobsToTerraform(struct?: MonitorTmpTkeConfigRawJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function monitorTmpTkeConfigRawJobsToHclTerraform(struct?: MonitorTmpTkeConfigRawJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeConfigRawJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeConfigRawJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeConfigRawJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._templateId = value.templateId;
    }
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class MonitorTmpTkeConfigRawJobsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeConfigRawJobs[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeConfigRawJobsOutputReference {
    return new MonitorTmpTkeConfigRawJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpTkeConfigServiceMonitors {
  /**
  * Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#config MonitorTmpTkeConfig#config}
  */
  readonly config: string;
  /**
  * Name. The naming rule is: namespace/name. If you don't have any namespace, use the default namespace: kube-system, otherwise use the specified one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#name MonitorTmpTkeConfig#name}
  */
  readonly name: string;
  /**
  * Used for output parameters, if the configuration comes from a template, it is the template id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#template_id MonitorTmpTkeConfig#template_id}
  */
  readonly templateId?: string;
}

export function monitorTmpTkeConfigServiceMonitorsToTerraform(struct?: MonitorTmpTkeConfigServiceMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    name: cdktf.stringToTerraform(struct!.name),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function monitorTmpTkeConfigServiceMonitorsToHclTerraform(struct?: MonitorTmpTkeConfigServiceMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpTkeConfigServiceMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpTkeConfigServiceMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpTkeConfigServiceMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config = undefined;
      this._name = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config = value.config;
      this._name = value.name;
      this._templateId = value.templateId;
    }
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class MonitorTmpTkeConfigServiceMonitorsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpTkeConfigServiceMonitors[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpTkeConfigServiceMonitorsOutputReference {
    return new MonitorTmpTkeConfigServiceMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config tencentcloud_monitor_tmp_tke_config}
*/
export class MonitorTmpTkeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_tke_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpTkeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpTkeConfig to import
  * @param importFromId The id of the existing MonitorTmpTkeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpTkeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_tke_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/monitor_tmp_tke_config tencentcloud_monitor_tmp_tke_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpTkeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpTkeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_tke_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._clusterType = config.clusterType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._podMonitors.internalValue = config.podMonitors;
    this._rawJobs.internalValue = config.rawJobs;
    this._serviceMonitors.internalValue = config.serviceMonitors;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // pod_monitors - computed: false, optional: true, required: false
  private _podMonitors = new MonitorTmpTkeConfigPodMonitorsList(this, "pod_monitors", false);
  public get podMonitors() {
    return this._podMonitors;
  }
  public putPodMonitors(value: MonitorTmpTkeConfigPodMonitors[] | cdktf.IResolvable) {
    this._podMonitors.internalValue = value;
  }
  public resetPodMonitors() {
    this._podMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podMonitorsInput() {
    return this._podMonitors.internalValue;
  }

  // raw_jobs - computed: false, optional: true, required: false
  private _rawJobs = new MonitorTmpTkeConfigRawJobsList(this, "raw_jobs", false);
  public get rawJobs() {
    return this._rawJobs;
  }
  public putRawJobs(value: MonitorTmpTkeConfigRawJobs[] | cdktf.IResolvable) {
    this._rawJobs.internalValue = value;
  }
  public resetRawJobs() {
    this._rawJobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawJobsInput() {
    return this._rawJobs.internalValue;
  }

  // service_monitors - computed: false, optional: true, required: false
  private _serviceMonitors = new MonitorTmpTkeConfigServiceMonitorsList(this, "service_monitors", false);
  public get serviceMonitors() {
    return this._serviceMonitors;
  }
  public putServiceMonitors(value: MonitorTmpTkeConfigServiceMonitors[] | cdktf.IResolvable) {
    this._serviceMonitors.internalValue = value;
  }
  public resetServiceMonitors() {
    this._serviceMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMonitorsInput() {
    return this._serviceMonitors.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      pod_monitors: cdktf.listMapper(monitorTmpTkeConfigPodMonitorsToTerraform, true)(this._podMonitors.internalValue),
      raw_jobs: cdktf.listMapper(monitorTmpTkeConfigRawJobsToTerraform, true)(this._rawJobs.internalValue),
      service_monitors: cdktf.listMapper(monitorTmpTkeConfigServiceMonitorsToTerraform, true)(this._serviceMonitors.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pod_monitors: {
        value: cdktf.listMapperHcl(monitorTmpTkeConfigPodMonitorsToHclTerraform, true)(this._podMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpTkeConfigPodMonitorsList",
      },
      raw_jobs: {
        value: cdktf.listMapperHcl(monitorTmpTkeConfigRawJobsToHclTerraform, true)(this._rawJobs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpTkeConfigRawJobsList",
      },
      service_monitors: {
        value: cdktf.listMapperHcl(monitorTmpTkeConfigServiceMonitorsToHclTerraform, true)(this._serviceMonitors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MonitorTmpTkeConfigServiceMonitorsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
