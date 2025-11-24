// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDiscoveryAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Correlation ID for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#correlation_id ServiceDiscoveryAgent#correlation_id}
  */
  readonly correlationId?: string;
  /**
  * The environment identifier of the agent. This is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#environment_identifier ServiceDiscoveryAgent#environment_identifier}
  */
  readonly environmentIdentifier: string;
  /**
  * The infrastructure identifier of the agent. This is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#infra_identifier ServiceDiscoveryAgent#infra_identifier}
  */
  readonly infraIdentifier: string;
  /**
  * Type of installation for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#installation_type ServiceDiscoveryAgent#installation_type}
  */
  readonly installationType?: string;
  /**
  * The name of the agent. This is a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#name ServiceDiscoveryAgent#name}
  */
  readonly name: string;
  /**
  * The organization identifier of the agent. Must be 1-64 characters and contain only alphanumeric characters, hyphens, or underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#org_identifier ServiceDiscoveryAgent#org_identifier}
  */
  readonly orgIdentifier?: string;
  /**
  * Whether this is a permanent installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#permanent_installation ServiceDiscoveryAgent#permanent_installation}
  */
  readonly permanentInstallation?: boolean | cdktf.IResolvable;
  /**
  * The project identifier of the agent. Must be 1-64 characters and contain only alphanumeric characters, hyphens, or underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#project_identifier ServiceDiscoveryAgent#project_identifier}
  */
  readonly projectIdentifier?: string;
  /**
  * Webhook URL for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#webhook_url ServiceDiscoveryAgent#webhook_url}
  */
  readonly webhookUrl?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#config ServiceDiscoveryAgent#config}
  */
  readonly config: ServiceDiscoveryAgentConfigA[] | cdktf.IResolvable;
}
export interface ServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster {
}

export function serviceDiscoveryAgentInstallationDetailsAgentDetailsClusterToTerraform(struct?: ServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceDiscoveryAgentInstallationDetailsAgentDetailsClusterToHclTerraform(struct?: ServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentInstallationDetailsAgentDetailsCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterList extends cdktf.ComplexList {

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
  public get(index: number): ServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterOutputReference {
    return new ServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentInstallationDetailsAgentDetails {
}

export function serviceDiscoveryAgentInstallationDetailsAgentDetailsToTerraform(struct?: ServiceDiscoveryAgentInstallationDetailsAgentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceDiscoveryAgentInstallationDetailsAgentDetailsToHclTerraform(struct?: ServiceDiscoveryAgentInstallationDetailsAgentDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceDiscoveryAgentInstallationDetailsAgentDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentInstallationDetailsAgentDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentInstallationDetailsAgentDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster - computed: true, optional: false, required: false
  private _cluster = new ServiceDiscoveryAgentInstallationDetailsAgentDetailsClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class ServiceDiscoveryAgentInstallationDetailsAgentDetailsList extends cdktf.ComplexList {

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
  public get(index: number): ServiceDiscoveryAgentInstallationDetailsAgentDetailsOutputReference {
    return new ServiceDiscoveryAgentInstallationDetailsAgentDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentInstallationDetails {
}

export function serviceDiscoveryAgentInstallationDetailsToTerraform(struct?: ServiceDiscoveryAgentInstallationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceDiscoveryAgentInstallationDetailsToHclTerraform(struct?: ServiceDiscoveryAgentInstallationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceDiscoveryAgentInstallationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentInstallationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentInstallationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_identifier - computed: true, optional: false, required: false
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }

  // agent_details - computed: true, optional: false, required: false
  private _agentDetails = new ServiceDiscoveryAgentInstallationDetailsAgentDetailsList(this, "agent_details", false);
  public get agentDetails() {
    return this._agentDetails;
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // delegate_id - computed: true, optional: false, required: false
  public get delegateId() {
    return this.getStringAttribute('delegate_id');
  }

  // delegate_task_id - computed: true, optional: false, required: false
  public get delegateTaskId() {
    return this.getStringAttribute('delegate_task_id');
  }

  // delegate_task_status - computed: true, optional: false, required: false
  public get delegateTaskStatus() {
    return this.getStringAttribute('delegate_task_status');
  }

  // environment_identifier - computed: true, optional: false, required: false
  public get environmentIdentifier() {
    return this.getStringAttribute('environment_identifier');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_cron_triggered - computed: true, optional: false, required: false
  public get isCronTriggered() {
    return this.getBooleanAttribute('is_cron_triggered');
  }

  // log_stream_created_at - computed: true, optional: false, required: false
  public get logStreamCreatedAt() {
    return this.getStringAttribute('log_stream_created_at');
  }

  // log_stream_id - computed: true, optional: false, required: false
  public get logStreamId() {
    return this.getStringAttribute('log_stream_id');
  }

  // organization_identifier - computed: true, optional: false, required: false
  public get organizationIdentifier() {
    return this.getStringAttribute('organization_identifier');
  }

  // project_identifier - computed: true, optional: false, required: false
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }

  // removed - computed: true, optional: false, required: false
  public get removed() {
    return this.getBooleanAttribute('removed');
  }

  // stopped - computed: true, optional: false, required: false
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class ServiceDiscoveryAgentInstallationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): ServiceDiscoveryAgentInstallationDetailsOutputReference {
    return new ServiceDiscoveryAgentInstallationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigDataCron {
  /**
  * Cron expression for scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#expression ServiceDiscoveryAgent#expression}
  */
  readonly expression?: string;
}

export function serviceDiscoveryAgentConfigDataCronToTerraform(struct?: ServiceDiscoveryAgentConfigDataCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function serviceDiscoveryAgentConfigDataCronToHclTerraform(struct?: ServiceDiscoveryAgentConfigDataCron | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoveryAgentConfigDataCronOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigDataCron | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigDataCron | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class ServiceDiscoveryAgentConfigDataCronList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigDataCron[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigDataCronOutputReference {
    return new ServiceDiscoveryAgentConfigDataCronOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigData {
  /**
  * List of namespaces to exclude from discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#blacklisted_namespaces ServiceDiscoveryAgent#blacklisted_namespaces}
  */
  readonly blacklistedNamespaces?: string[];
  /**
  * Collection window in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#collection_window_in_min ServiceDiscoveryAgent#collection_window_in_min}
  */
  readonly collectionWindowInMin?: number;
  /**
  * Whether to enable batch resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#enable_batch_resources ServiceDiscoveryAgent#enable_batch_resources}
  */
  readonly enableBatchResources?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable node agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#enable_node_agent ServiceDiscoveryAgent#enable_node_agent}
  */
  readonly enableNodeAgent?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable orphaned pod detection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#enable_orphaned_pod ServiceDiscoveryAgent#enable_orphaned_pod}
  */
  readonly enableOrphanedPod?: boolean | cdktf.IResolvable;
  /**
  * Namespace selector for the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#namespace_selector ServiceDiscoveryAgent#namespace_selector}
  */
  readonly namespaceSelector?: string;
  /**
  * Node selector for the node agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#node_agent_selector ServiceDiscoveryAgent#node_agent_selector}
  */
  readonly nodeAgentSelector?: string;
  /**
  * List of namespaces to observe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#observed_namespaces ServiceDiscoveryAgent#observed_namespaces}
  */
  readonly observedNamespaces?: string[];
  /**
  * cron block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#cron ServiceDiscoveryAgent#cron}
  */
  readonly cron?: ServiceDiscoveryAgentConfigDataCron[] | cdktf.IResolvable;
}

export function serviceDiscoveryAgentConfigDataToTerraform(struct?: ServiceDiscoveryAgentConfigData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blacklisted_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blacklistedNamespaces),
    collection_window_in_min: cdktf.numberToTerraform(struct!.collectionWindowInMin),
    enable_batch_resources: cdktf.booleanToTerraform(struct!.enableBatchResources),
    enable_node_agent: cdktf.booleanToTerraform(struct!.enableNodeAgent),
    enable_orphaned_pod: cdktf.booleanToTerraform(struct!.enableOrphanedPod),
    namespace_selector: cdktf.stringToTerraform(struct!.namespaceSelector),
    node_agent_selector: cdktf.stringToTerraform(struct!.nodeAgentSelector),
    observed_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.observedNamespaces),
    cron: cdktf.listMapper(serviceDiscoveryAgentConfigDataCronToTerraform, true)(struct!.cron),
  }
}


export function serviceDiscoveryAgentConfigDataToHclTerraform(struct?: ServiceDiscoveryAgentConfigData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blacklisted_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blacklistedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    collection_window_in_min: {
      value: cdktf.numberToHclTerraform(struct!.collectionWindowInMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_batch_resources: {
      value: cdktf.booleanToHclTerraform(struct!.enableBatchResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_node_agent: {
      value: cdktf.booleanToHclTerraform(struct!.enableNodeAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_orphaned_pod: {
      value: cdktf.booleanToHclTerraform(struct!.enableOrphanedPod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace_selector: {
      value: cdktf.stringToHclTerraform(struct!.namespaceSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_agent_selector: {
      value: cdktf.stringToHclTerraform(struct!.nodeAgentSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    observed_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.observedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cron: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigDataCronToHclTerraform, true)(struct!.cron),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigDataCronList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoveryAgentConfigDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blacklistedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklistedNamespaces = this._blacklistedNamespaces;
    }
    if (this._collectionWindowInMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionWindowInMin = this._collectionWindowInMin;
    }
    if (this._enableBatchResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBatchResources = this._enableBatchResources;
    }
    if (this._enableNodeAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNodeAgent = this._enableNodeAgent;
    }
    if (this._enableOrphanedPod !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOrphanedPod = this._enableOrphanedPod;
    }
    if (this._namespaceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector;
    }
    if (this._nodeAgentSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAgentSelector = this._nodeAgentSelector;
    }
    if (this._observedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.observedNamespaces = this._observedNamespaces;
    }
    if (this._cron?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cron = this._cron?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blacklistedNamespaces = undefined;
      this._collectionWindowInMin = undefined;
      this._enableBatchResources = undefined;
      this._enableNodeAgent = undefined;
      this._enableOrphanedPod = undefined;
      this._namespaceSelector = undefined;
      this._nodeAgentSelector = undefined;
      this._observedNamespaces = undefined;
      this._cron.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blacklistedNamespaces = value.blacklistedNamespaces;
      this._collectionWindowInMin = value.collectionWindowInMin;
      this._enableBatchResources = value.enableBatchResources;
      this._enableNodeAgent = value.enableNodeAgent;
      this._enableOrphanedPod = value.enableOrphanedPod;
      this._namespaceSelector = value.namespaceSelector;
      this._nodeAgentSelector = value.nodeAgentSelector;
      this._observedNamespaces = value.observedNamespaces;
      this._cron.internalValue = value.cron;
    }
  }

  // blacklisted_namespaces - computed: false, optional: true, required: false
  private _blacklistedNamespaces?: string[]; 
  public get blacklistedNamespaces() {
    return this.getListAttribute('blacklisted_namespaces');
  }
  public set blacklistedNamespaces(value: string[]) {
    this._blacklistedNamespaces = value;
  }
  public resetBlacklistedNamespaces() {
    this._blacklistedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistedNamespacesInput() {
    return this._blacklistedNamespaces;
  }

  // collection_window_in_min - computed: false, optional: true, required: false
  private _collectionWindowInMin?: number; 
  public get collectionWindowInMin() {
    return this.getNumberAttribute('collection_window_in_min');
  }
  public set collectionWindowInMin(value: number) {
    this._collectionWindowInMin = value;
  }
  public resetCollectionWindowInMin() {
    this._collectionWindowInMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionWindowInMinInput() {
    return this._collectionWindowInMin;
  }

  // enable_batch_resources - computed: false, optional: true, required: false
  private _enableBatchResources?: boolean | cdktf.IResolvable; 
  public get enableBatchResources() {
    return this.getBooleanAttribute('enable_batch_resources');
  }
  public set enableBatchResources(value: boolean | cdktf.IResolvable) {
    this._enableBatchResources = value;
  }
  public resetEnableBatchResources() {
    this._enableBatchResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBatchResourcesInput() {
    return this._enableBatchResources;
  }

  // enable_node_agent - computed: false, optional: true, required: false
  private _enableNodeAgent?: boolean | cdktf.IResolvable; 
  public get enableNodeAgent() {
    return this.getBooleanAttribute('enable_node_agent');
  }
  public set enableNodeAgent(value: boolean | cdktf.IResolvable) {
    this._enableNodeAgent = value;
  }
  public resetEnableNodeAgent() {
    this._enableNodeAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNodeAgentInput() {
    return this._enableNodeAgent;
  }

  // enable_orphaned_pod - computed: false, optional: true, required: false
  private _enableOrphanedPod?: boolean | cdktf.IResolvable; 
  public get enableOrphanedPod() {
    return this.getBooleanAttribute('enable_orphaned_pod');
  }
  public set enableOrphanedPod(value: boolean | cdktf.IResolvable) {
    this._enableOrphanedPod = value;
  }
  public resetEnableOrphanedPod() {
    this._enableOrphanedPod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOrphanedPodInput() {
    return this._enableOrphanedPod;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector?: string; 
  public get namespaceSelector() {
    return this.getStringAttribute('namespace_selector');
  }
  public set namespaceSelector(value: string) {
    this._namespaceSelector = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector;
  }

  // node_agent_selector - computed: false, optional: true, required: false
  private _nodeAgentSelector?: string; 
  public get nodeAgentSelector() {
    return this.getStringAttribute('node_agent_selector');
  }
  public set nodeAgentSelector(value: string) {
    this._nodeAgentSelector = value;
  }
  public resetNodeAgentSelector() {
    this._nodeAgentSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAgentSelectorInput() {
    return this._nodeAgentSelector;
  }

  // observed_namespaces - computed: false, optional: true, required: false
  private _observedNamespaces?: string[]; 
  public get observedNamespaces() {
    return this.getListAttribute('observed_namespaces');
  }
  public set observedNamespaces(value: string[]) {
    this._observedNamespaces = value;
  }
  public resetObservedNamespaces() {
    this._observedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get observedNamespacesInput() {
    return this._observedNamespaces;
  }

  // cron - computed: false, optional: true, required: false
  private _cron = new ServiceDiscoveryAgentConfigDataCronList(this, "cron", false);
  public get cron() {
    return this._cron;
  }
  public putCron(value: ServiceDiscoveryAgentConfigDataCron[] | cdktf.IResolvable) {
    this._cron.internalValue = value;
  }
  public resetCron() {
    this._cron.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron.internalValue;
  }
}

export class ServiceDiscoveryAgentConfigDataList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigData[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigDataOutputReference {
    return new ServiceDiscoveryAgentConfigDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigKubernetesResourcesLimits {
  /**
  * CPU limit in CPU units (e.g., 500m = 0.5 CPU, 2 = 2 CPUs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#cpu ServiceDiscoveryAgent#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory limit in bytes (e.g., 128Mi, 1Gi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#memory ServiceDiscoveryAgent#memory}
  */
  readonly memory?: string;
}

export function serviceDiscoveryAgentConfigKubernetesResourcesLimitsToTerraform(struct?: ServiceDiscoveryAgentConfigKubernetesResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function serviceDiscoveryAgentConfigKubernetesResourcesLimitsToHclTerraform(struct?: ServiceDiscoveryAgentConfigKubernetesResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoveryAgentConfigKubernetesResourcesLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigKubernetesResourcesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigKubernetesResourcesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}

export class ServiceDiscoveryAgentConfigKubernetesResourcesLimitsList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigKubernetesResourcesLimits[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigKubernetesResourcesLimitsOutputReference {
    return new ServiceDiscoveryAgentConfigKubernetesResourcesLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigKubernetesResourcesRequests {
  /**
  * CPU request in CPU units (e.g., 100m = 0.1 CPU).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#cpu ServiceDiscoveryAgent#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory request in bytes (e.g., 128Mi, 1Gi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#memory ServiceDiscoveryAgent#memory}
  */
  readonly memory?: string;
}

export function serviceDiscoveryAgentConfigKubernetesResourcesRequestsToTerraform(struct?: ServiceDiscoveryAgentConfigKubernetesResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function serviceDiscoveryAgentConfigKubernetesResourcesRequestsToHclTerraform(struct?: ServiceDiscoveryAgentConfigKubernetesResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoveryAgentConfigKubernetesResourcesRequestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigKubernetesResourcesRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigKubernetesResourcesRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}

export class ServiceDiscoveryAgentConfigKubernetesResourcesRequestsList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigKubernetesResourcesRequests[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigKubernetesResourcesRequestsOutputReference {
    return new ServiceDiscoveryAgentConfigKubernetesResourcesRequestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigKubernetesResources {
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#limits ServiceDiscoveryAgent#limits}
  */
  readonly limits?: ServiceDiscoveryAgentConfigKubernetesResourcesLimits[] | cdktf.IResolvable;
  /**
  * requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#requests ServiceDiscoveryAgent#requests}
  */
  readonly requests?: ServiceDiscoveryAgentConfigKubernetesResourcesRequests[] | cdktf.IResolvable;
}

export function serviceDiscoveryAgentConfigKubernetesResourcesToTerraform(struct?: ServiceDiscoveryAgentConfigKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.listMapper(serviceDiscoveryAgentConfigKubernetesResourcesLimitsToTerraform, true)(struct!.limits),
    requests: cdktf.listMapper(serviceDiscoveryAgentConfigKubernetesResourcesRequestsToTerraform, true)(struct!.requests),
  }
}


export function serviceDiscoveryAgentConfigKubernetesResourcesToHclTerraform(struct?: ServiceDiscoveryAgentConfigKubernetesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigKubernetesResourcesLimitsToHclTerraform, true)(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigKubernetesResourcesLimitsList",
    },
    requests: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigKubernetesResourcesRequestsToHclTerraform, true)(struct!.requests),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigKubernetesResourcesRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoveryAgentConfigKubernetesResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigKubernetesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigKubernetesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new ServiceDiscoveryAgentConfigKubernetesResourcesLimitsList(this, "limits", false);
  public get limits() {
    return this._limits;
  }
  public putLimits(value: ServiceDiscoveryAgentConfigKubernetesResourcesLimits[] | cdktf.IResolvable) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new ServiceDiscoveryAgentConfigKubernetesResourcesRequestsList(this, "requests", false);
  public get requests() {
    return this._requests;
  }
  public putRequests(value: ServiceDiscoveryAgentConfigKubernetesResourcesRequests[] | cdktf.IResolvable) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}

export class ServiceDiscoveryAgentConfigKubernetesResourcesList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigKubernetesResources[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigKubernetesResourcesOutputReference {
    return new ServiceDiscoveryAgentConfigKubernetesResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigKubernetesTolerations {
  /**
  * Effect indicates the taint effect to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#effect ServiceDiscoveryAgent#effect}
  */
  readonly effect: string;
  /**
  * The taint key that the toleration applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#key ServiceDiscoveryAgent#key}
  */
  readonly key: string;
  /**
  * Operator represents a key's relationship to the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#operator ServiceDiscoveryAgent#operator}
  */
  readonly operator: string;
  /**
  * TolerationSeconds represents the period of time the toleration tolerates the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#toleration_seconds ServiceDiscoveryAgent#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * The taint value the toleration matches to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#value ServiceDiscoveryAgent#value}
  */
  readonly value?: string;
}

export function serviceDiscoveryAgentConfigKubernetesTolerationsToTerraform(struct?: ServiceDiscoveryAgentConfigKubernetesTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serviceDiscoveryAgentConfigKubernetesTolerationsToHclTerraform(struct?: ServiceDiscoveryAgentConfigKubernetesTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoveryAgentConfigKubernetesTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigKubernetesTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigKubernetesTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ServiceDiscoveryAgentConfigKubernetesTolerationsList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigKubernetesTolerations[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigKubernetesTolerationsOutputReference {
    return new ServiceDiscoveryAgentConfigKubernetesTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigKubernetes {
  /**
  * Annotations to add to all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#annotations ServiceDiscoveryAgent#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Whether to disable namespace creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#disable_namespace_creation ServiceDiscoveryAgent#disable_namespace_creation}
  */
  readonly disableNamespaceCreation?: boolean | cdktf.IResolvable;
  /**
  * The image pull policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#image_pull_policy ServiceDiscoveryAgent#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Labels to add to all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#labels ServiceDiscoveryAgent#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Kubernetes namespace to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#namespace ServiceDiscoveryAgent#namespace}
  */
  readonly namespace: string;
  /**
  * Whether the agent is namespaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#namespaced ServiceDiscoveryAgent#namespaced}
  */
  readonly namespaced?: boolean | cdktf.IResolvable;
  /**
  * Node selector labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#node_selector ServiceDiscoveryAgent#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * The group ID to run as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#run_as_group ServiceDiscoveryAgent#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * The user ID to run as.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#run_as_user ServiceDiscoveryAgent#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Service account to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#service_account ServiceDiscoveryAgent#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#resources ServiceDiscoveryAgent#resources}
  */
  readonly resources?: ServiceDiscoveryAgentConfigKubernetesResources[] | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#tolerations ServiceDiscoveryAgent#tolerations}
  */
  readonly tolerations?: ServiceDiscoveryAgentConfigKubernetesTolerations[] | cdktf.IResolvable;
}

export function serviceDiscoveryAgentConfigKubernetesToTerraform(struct?: ServiceDiscoveryAgentConfigKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    disable_namespace_creation: cdktf.booleanToTerraform(struct!.disableNamespaceCreation),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    namespaced: cdktf.booleanToTerraform(struct!.namespaced),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    resources: cdktf.listMapper(serviceDiscoveryAgentConfigKubernetesResourcesToTerraform, true)(struct!.resources),
    tolerations: cdktf.listMapper(serviceDiscoveryAgentConfigKubernetesTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function serviceDiscoveryAgentConfigKubernetesToHclTerraform(struct?: ServiceDiscoveryAgentConfigKubernetes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    disable_namespace_creation: {
      value: cdktf.booleanToHclTerraform(struct!.disableNamespaceCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaced: {
      value: cdktf.booleanToHclTerraform(struct!.namespaced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigKubernetesResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigKubernetesResourcesList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigKubernetesTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigKubernetesTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoveryAgentConfigKubernetesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigKubernetes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._disableNamespaceCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableNamespaceCreation = this._disableNamespaceCreation;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._namespaced !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaced = this._namespaced;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigKubernetes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._disableNamespaceCreation = undefined;
      this._imagePullPolicy = undefined;
      this._labels = undefined;
      this._namespace = undefined;
      this._namespaced = undefined;
      this._nodeSelector = undefined;
      this._runAsGroup = undefined;
      this._runAsUser = undefined;
      this._serviceAccount = undefined;
      this._resources.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._disableNamespaceCreation = value.disableNamespaceCreation;
      this._imagePullPolicy = value.imagePullPolicy;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._namespaced = value.namespaced;
      this._nodeSelector = value.nodeSelector;
      this._runAsGroup = value.runAsGroup;
      this._runAsUser = value.runAsUser;
      this._serviceAccount = value.serviceAccount;
      this._resources.internalValue = value.resources;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // disable_namespace_creation - computed: false, optional: true, required: false
  private _disableNamespaceCreation?: boolean | cdktf.IResolvable; 
  public get disableNamespaceCreation() {
    return this.getBooleanAttribute('disable_namespace_creation');
  }
  public set disableNamespaceCreation(value: boolean | cdktf.IResolvable) {
    this._disableNamespaceCreation = value;
  }
  public resetDisableNamespaceCreation() {
    this._disableNamespaceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNamespaceCreationInput() {
    return this._disableNamespaceCreation;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // namespaced - computed: false, optional: true, required: false
  private _namespaced?: boolean | cdktf.IResolvable; 
  public get namespaced() {
    return this.getBooleanAttribute('namespaced');
  }
  public set namespaced(value: boolean | cdktf.IResolvable) {
    this._namespaced = value;
  }
  public resetNamespaced() {
    this._namespaced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedInput() {
    return this._namespaced;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ServiceDiscoveryAgentConfigKubernetesResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ServiceDiscoveryAgentConfigKubernetesResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new ServiceDiscoveryAgentConfigKubernetesTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: ServiceDiscoveryAgentConfigKubernetesTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}

export class ServiceDiscoveryAgentConfigKubernetesList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigKubernetes[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigKubernetesOutputReference {
    return new ServiceDiscoveryAgentConfigKubernetesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigMtls {
  /**
  * Path to the certificate file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#cert_path ServiceDiscoveryAgent#cert_path}
  */
  readonly certPath?: string;
  /**
  * Path to the key file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#key_path ServiceDiscoveryAgent#key_path}
  */
  readonly keyPath?: string;
  /**
  * Name of the Kubernetes secret containing the certificate and key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#secret_name ServiceDiscoveryAgent#secret_name}
  */
  readonly secretName?: string;
  /**
  * URL of the mTLS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#url ServiceDiscoveryAgent#url}
  */
  readonly url?: string;
}

export function serviceDiscoveryAgentConfigMtlsToTerraform(struct?: ServiceDiscoveryAgentConfigMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_path: cdktf.stringToTerraform(struct!.certPath),
    key_path: cdktf.stringToTerraform(struct!.keyPath),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceDiscoveryAgentConfigMtlsToHclTerraform(struct?: ServiceDiscoveryAgentConfigMtls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_path: {
      value: cdktf.stringToHclTerraform(struct!.certPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_path: {
      value: cdktf.stringToHclTerraform(struct!.keyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ServiceDiscoveryAgentConfigMtlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigMtls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.certPath = this._certPath;
    }
    if (this._keyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPath = this._keyPath;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigMtls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certPath = undefined;
      this._keyPath = undefined;
      this._secretName = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certPath = value.certPath;
      this._keyPath = value.keyPath;
      this._secretName = value.secretName;
      this._url = value.url;
    }
  }

  // cert_path - computed: false, optional: true, required: false
  private _certPath?: string; 
  public get certPath() {
    return this.getStringAttribute('cert_path');
  }
  public set certPath(value: string) {
    this._certPath = value;
  }
  public resetCertPath() {
    this._certPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certPathInput() {
    return this._certPath;
  }

  // key_path - computed: false, optional: true, required: false
  private _keyPath?: string; 
  public get keyPath() {
    return this.getStringAttribute('key_path');
  }
  public set keyPath(value: string) {
    this._keyPath = value;
  }
  public resetKeyPath() {
    this._keyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPathInput() {
    return this._keyPath;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ServiceDiscoveryAgentConfigMtlsList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigMtls[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigMtlsOutputReference {
    return new ServiceDiscoveryAgentConfigMtlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigProxy {
  /**
  * HTTP proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#http_proxy ServiceDiscoveryAgent#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * HTTPS proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#https_proxy ServiceDiscoveryAgent#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * Comma-separated list of hosts that should not use the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#no_proxy ServiceDiscoveryAgent#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Proxy server URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#url ServiceDiscoveryAgent#url}
  */
  readonly url?: string;
}

export function serviceDiscoveryAgentConfigProxyToTerraform(struct?: ServiceDiscoveryAgentConfigProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function serviceDiscoveryAgentConfigProxyToHclTerraform(struct?: ServiceDiscoveryAgentConfigProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class ServiceDiscoveryAgentConfigProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
      this._noProxy = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
      this._noProxy = value.noProxy;
      this._url = value.url;
    }
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ServiceDiscoveryAgentConfigProxyList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigProxy[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigProxyOutputReference {
    return new ServiceDiscoveryAgentConfigProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceDiscoveryAgentConfigA {
  /**
  * Docker image for the collector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#collector_image ServiceDiscoveryAgent#collector_image}
  */
  readonly collectorImage?: string;
  /**
  * List of image pull secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#image_pull_secrets ServiceDiscoveryAgent#image_pull_secrets}
  */
  readonly imagePullSecrets?: string[];
  /**
  * Docker image for the log watcher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#log_watcher_image ServiceDiscoveryAgent#log_watcher_image}
  */
  readonly logWatcherImage?: string;
  /**
  * Whether to skip TLS verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#skip_secure_verify ServiceDiscoveryAgent#skip_secure_verify}
  */
  readonly skipSecureVerify?: boolean | cdktf.IResolvable;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#data ServiceDiscoveryAgent#data}
  */
  readonly data?: ServiceDiscoveryAgentConfigData[] | cdktf.IResolvable;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#kubernetes ServiceDiscoveryAgent#kubernetes}
  */
  readonly kubernetes: ServiceDiscoveryAgentConfigKubernetes[] | cdktf.IResolvable;
  /**
  * mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#mtls ServiceDiscoveryAgent#mtls}
  */
  readonly mtls?: ServiceDiscoveryAgentConfigMtls[] | cdktf.IResolvable;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#proxy ServiceDiscoveryAgent#proxy}
  */
  readonly proxy?: ServiceDiscoveryAgentConfigProxy[] | cdktf.IResolvable;
}

export function serviceDiscoveryAgentConfigAToTerraform(struct?: ServiceDiscoveryAgentConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_image: cdktf.stringToTerraform(struct!.collectorImage),
    image_pull_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullSecrets),
    log_watcher_image: cdktf.stringToTerraform(struct!.logWatcherImage),
    skip_secure_verify: cdktf.booleanToTerraform(struct!.skipSecureVerify),
    data: cdktf.listMapper(serviceDiscoveryAgentConfigDataToTerraform, true)(struct!.data),
    kubernetes: cdktf.listMapper(serviceDiscoveryAgentConfigKubernetesToTerraform, true)(struct!.kubernetes),
    mtls: cdktf.listMapper(serviceDiscoveryAgentConfigMtlsToTerraform, true)(struct!.mtls),
    proxy: cdktf.listMapper(serviceDiscoveryAgentConfigProxyToTerraform, true)(struct!.proxy),
  }
}


export function serviceDiscoveryAgentConfigAToHclTerraform(struct?: ServiceDiscoveryAgentConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_image: {
      value: cdktf.stringToHclTerraform(struct!.collectorImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_watcher_image: {
      value: cdktf.stringToHclTerraform(struct!.logWatcherImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_secure_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipSecureVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigDataToHclTerraform, true)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigDataList",
    },
    kubernetes: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigKubernetesToHclTerraform, true)(struct!.kubernetes),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigKubernetesList",
    },
    mtls: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigMtlsToHclTerraform, true)(struct!.mtls),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigMtlsList",
    },
    proxy: {
      value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigProxyToHclTerraform, true)(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceDiscoveryAgentConfigProxyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDiscoveryAgentConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceDiscoveryAgentConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorImage = this._collectorImage;
    }
    if (this._imagePullSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets;
    }
    if (this._logWatcherImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.logWatcherImage = this._logWatcherImage;
    }
    if (this._skipSecureVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSecureVerify = this._skipSecureVerify;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    if (this._mtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtls = this._mtls?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDiscoveryAgentConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectorImage = undefined;
      this._imagePullSecrets = undefined;
      this._logWatcherImage = undefined;
      this._skipSecureVerify = undefined;
      this._data.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
      this._mtls.internalValue = undefined;
      this._proxy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectorImage = value.collectorImage;
      this._imagePullSecrets = value.imagePullSecrets;
      this._logWatcherImage = value.logWatcherImage;
      this._skipSecureVerify = value.skipSecureVerify;
      this._data.internalValue = value.data;
      this._kubernetes.internalValue = value.kubernetes;
      this._mtls.internalValue = value.mtls;
      this._proxy.internalValue = value.proxy;
    }
  }

  // collector_image - computed: false, optional: true, required: false
  private _collectorImage?: string; 
  public get collectorImage() {
    return this.getStringAttribute('collector_image');
  }
  public set collectorImage(value: string) {
    this._collectorImage = value;
  }
  public resetCollectorImage() {
    this._collectorImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorImageInput() {
    return this._collectorImage;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: string[]; 
  public get imagePullSecrets() {
    return this.getListAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: string[]) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
  }

  // log_watcher_image - computed: false, optional: true, required: false
  private _logWatcherImage?: string; 
  public get logWatcherImage() {
    return this.getStringAttribute('log_watcher_image');
  }
  public set logWatcherImage(value: string) {
    this._logWatcherImage = value;
  }
  public resetLogWatcherImage() {
    this._logWatcherImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logWatcherImageInput() {
    return this._logWatcherImage;
  }

  // skip_secure_verify - computed: false, optional: true, required: false
  private _skipSecureVerify?: boolean | cdktf.IResolvable; 
  public get skipSecureVerify() {
    return this.getBooleanAttribute('skip_secure_verify');
  }
  public set skipSecureVerify(value: boolean | cdktf.IResolvable) {
    this._skipSecureVerify = value;
  }
  public resetSkipSecureVerify() {
    this._skipSecureVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSecureVerifyInput() {
    return this._skipSecureVerify;
  }

  // data - computed: false, optional: true, required: false
  private _data = new ServiceDiscoveryAgentConfigDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: ServiceDiscoveryAgentConfigData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }

  // kubernetes - computed: false, optional: false, required: true
  private _kubernetes = new ServiceDiscoveryAgentConfigKubernetesList(this, "kubernetes", false);
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: ServiceDiscoveryAgentConfigKubernetes[] | cdktf.IResolvable) {
    this._kubernetes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }

  // mtls - computed: false, optional: true, required: false
  private _mtls = new ServiceDiscoveryAgentConfigMtlsList(this, "mtls", false);
  public get mtls() {
    return this._mtls;
  }
  public putMtls(value: ServiceDiscoveryAgentConfigMtls[] | cdktf.IResolvable) {
    this._mtls.internalValue = value;
  }
  public resetMtls() {
    this._mtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsInput() {
    return this._mtls.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new ServiceDiscoveryAgentConfigProxyList(this, "proxy", false);
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: ServiceDiscoveryAgentConfigProxy[] | cdktf.IResolvable) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }
}

export class ServiceDiscoveryAgentConfigAList extends cdktf.ComplexList {
  public internalValue? : ServiceDiscoveryAgentConfigA[] | cdktf.IResolvable

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
  public get(index: number): ServiceDiscoveryAgentConfigAOutputReference {
    return new ServiceDiscoveryAgentConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent harness_service_discovery_agent}
*/
export class ServiceDiscoveryAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_service_discovery_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceDiscoveryAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDiscoveryAgent to import
  * @param importFromId The id of the existing ServiceDiscoveryAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDiscoveryAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_service_discovery_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/service_discovery_agent harness_service_discovery_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDiscoveryAgentConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDiscoveryAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_service_discovery_agent',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._correlationId = config.correlationId;
    this._environmentIdentifier = config.environmentIdentifier;
    this._infraIdentifier = config.infraIdentifier;
    this._installationType = config.installationType;
    this._name = config.name;
    this._orgIdentifier = config.orgIdentifier;
    this._permanentInstallation = config.permanentInstallation;
    this._projectIdentifier = config.projectIdentifier;
    this._webhookUrl = config.webhookUrl;
    this._config.internalValue = config.config;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // correlation_id - computed: true, optional: true, required: false
  private _correlationId?: string; 
  public get correlationId() {
    return this.getStringAttribute('correlation_id');
  }
  public set correlationId(value: string) {
    this._correlationId = value;
  }
  public resetCorrelationId() {
    this._correlationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationIdInput() {
    return this._correlationId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment_identifier - computed: false, optional: false, required: true
  private _environmentIdentifier?: string; 
  public get environmentIdentifier() {
    return this.getStringAttribute('environment_identifier');
  }
  public set environmentIdentifier(value: string) {
    this._environmentIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdentifierInput() {
    return this._environmentIdentifier;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // infra_identifier - computed: false, optional: false, required: true
  private _infraIdentifier?: string; 
  public get infraIdentifier() {
    return this.getStringAttribute('infra_identifier');
  }
  public set infraIdentifier(value: string) {
    this._infraIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infraIdentifierInput() {
    return this._infraIdentifier;
  }

  // installation_details - computed: true, optional: false, required: false
  private _installationDetails = new ServiceDiscoveryAgentInstallationDetailsList(this, "installation_details", false);
  public get installationDetails() {
    return this._installationDetails;
  }

  // installation_type - computed: false, optional: true, required: false
  private _installationType?: string; 
  public get installationType() {
    return this.getStringAttribute('installation_type');
  }
  public set installationType(value: string) {
    this._installationType = value;
  }
  public resetInstallationType() {
    this._installationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationTypeInput() {
    return this._installationType;
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

  // network_map_count - computed: true, optional: false, required: false
  public get networkMapCount() {
    return this.getNumberAttribute('network_map_count');
  }

  // org_identifier - computed: false, optional: true, required: false
  private _orgIdentifier?: string; 
  public get orgIdentifier() {
    return this.getStringAttribute('org_identifier');
  }
  public set orgIdentifier(value: string) {
    this._orgIdentifier = value;
  }
  public resetOrgIdentifier() {
    this._orgIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdentifierInput() {
    return this._orgIdentifier;
  }

  // permanent_installation - computed: false, optional: true, required: false
  private _permanentInstallation?: boolean | cdktf.IResolvable; 
  public get permanentInstallation() {
    return this.getBooleanAttribute('permanent_installation');
  }
  public set permanentInstallation(value: boolean | cdktf.IResolvable) {
    this._permanentInstallation = value;
  }
  public resetPermanentInstallation() {
    this._permanentInstallation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInstallationInput() {
    return this._permanentInstallation;
  }

  // project_identifier - computed: false, optional: true, required: false
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  public resetProjectIdentifier() {
    this._projectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }

  // removed - computed: true, optional: false, required: false
  public get removed() {
    return this.getBooleanAttribute('removed');
  }

  // removed_at - computed: true, optional: false, required: false
  public get removedAt() {
    return this.getStringAttribute('removed_at');
  }

  // service_count - computed: true, optional: false, required: false
  public get serviceCount() {
    return this.getNumberAttribute('service_count');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // webhook_url - computed: false, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }

  // config - computed: false, optional: false, required: true
  private _config = new ServiceDiscoveryAgentConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: ServiceDiscoveryAgentConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      correlation_id: cdktf.stringToTerraform(this._correlationId),
      environment_identifier: cdktf.stringToTerraform(this._environmentIdentifier),
      infra_identifier: cdktf.stringToTerraform(this._infraIdentifier),
      installation_type: cdktf.stringToTerraform(this._installationType),
      name: cdktf.stringToTerraform(this._name),
      org_identifier: cdktf.stringToTerraform(this._orgIdentifier),
      permanent_installation: cdktf.booleanToTerraform(this._permanentInstallation),
      project_identifier: cdktf.stringToTerraform(this._projectIdentifier),
      webhook_url: cdktf.stringToTerraform(this._webhookUrl),
      config: cdktf.listMapper(serviceDiscoveryAgentConfigAToTerraform, true)(this._config.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      correlation_id: {
        value: cdktf.stringToHclTerraform(this._correlationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_identifier: {
        value: cdktf.stringToHclTerraform(this._environmentIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      infra_identifier: {
        value: cdktf.stringToHclTerraform(this._infraIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installation_type: {
        value: cdktf.stringToHclTerraform(this._installationType),
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
      org_identifier: {
        value: cdktf.stringToHclTerraform(this._orgIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permanent_installation: {
        value: cdktf.booleanToHclTerraform(this._permanentInstallation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_identifier: {
        value: cdktf.stringToHclTerraform(this._projectIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_url: {
        value: cdktf.stringToHclTerraform(this._webhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.listMapperHcl(serviceDiscoveryAgentConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceDiscoveryAgentConfigAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
