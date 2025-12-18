// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingUnifiedAgentConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#compartment_id LoggingUnifiedAgentConfiguration#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#defined_tags LoggingUnifiedAgentConfiguration#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#description LoggingUnifiedAgentConfiguration#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#display_name LoggingUnifiedAgentConfiguration#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#freeform_tags LoggingUnifiedAgentConfiguration#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#id LoggingUnifiedAgentConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_enabled LoggingUnifiedAgentConfiguration#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * group_association block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#group_association LoggingUnifiedAgentConfiguration#group_association}
  */
  readonly groupAssociation?: LoggingUnifiedAgentConfigurationGroupAssociation;
  /**
  * service_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#service_configuration LoggingUnifiedAgentConfiguration#service_configuration}
  */
  readonly serviceConfiguration: LoggingUnifiedAgentConfigurationServiceConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#timeouts LoggingUnifiedAgentConfiguration#timeouts}
  */
  readonly timeouts?: LoggingUnifiedAgentConfigurationTimeouts;
}
export interface LoggingUnifiedAgentConfigurationGroupAssociation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#group_list LoggingUnifiedAgentConfiguration#group_list}
  */
  readonly groupList?: string[];
}

export function loggingUnifiedAgentConfigurationGroupAssociationToTerraform(struct?: LoggingUnifiedAgentConfigurationGroupAssociationOutputReference | LoggingUnifiedAgentConfigurationGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupList),
  }
}


export function loggingUnifiedAgentConfigurationGroupAssociationToHclTerraform(struct?: LoggingUnifiedAgentConfigurationGroupAssociationOutputReference | LoggingUnifiedAgentConfigurationGroupAssociation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationGroupAssociationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationGroupAssociation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationGroupAssociation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupList = value.groupList;
    }
  }

  // group_list - computed: true, optional: true, required: false
  private _groupList?: string[]; 
  public get groupList() {
    return this.getListAttribute('group_list');
  }
  public set groupList(value: string[]) {
    this._groupList = value;
  }
  public resetGroupList() {
    this._groupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#compartment_id LoggingUnifiedAgentConfiguration#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#metrics_namespace LoggingUnifiedAgentConfiguration#metrics_namespace}
  */
  readonly metricsNamespace?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    metrics_namespace: cdktf.stringToTerraform(struct!.metricsNamespace),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metricsNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._metricsNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsNamespace = this._metricsNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
      this._metricsNamespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
      this._metricsNamespace = value.metricsNamespace;
    }
  }

  // compartment_id - computed: true, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // metrics_namespace - computed: true, optional: true, required: false
  private _metricsNamespace?: string; 
  public get metricsNamespace() {
    return this.getStringAttribute('metrics_namespace');
  }
  public set metricsNamespace(value: string) {
    this._metricsNamespace = value;
  }
  public resetMetricsNamespace() {
    this._metricsNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsNamespaceInput() {
    return this._metricsNamespace;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#k8s_namespace LoggingUnifiedAgentConfiguration#k8s_namespace}
  */
  readonly k8SNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#resource_group LoggingUnifiedAgentConfiguration#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#resource_type LoggingUnifiedAgentConfiguration#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#service_name LoggingUnifiedAgentConfiguration#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#url LoggingUnifiedAgentConfiguration#url}
  */
  readonly url?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    k8s_namespace: cdktf.stringToTerraform(struct!.k8SNamespace),
    name: cdktf.stringToTerraform(struct!.name),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    k8s_namespace: {
      value: cdktf.stringToHclTerraform(struct!.k8SNamespace),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
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

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._k8SNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SNamespace = this._k8SNamespace;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._k8SNamespace = undefined;
      this._name = undefined;
      this._resourceGroup = undefined;
      this._resourceType = undefined;
      this._serviceName = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._k8SNamespace = value.k8SNamespace;
      this._name = value.name;
      this._resourceGroup = value.resourceGroup;
      this._resourceType = value.resourceType;
      this._serviceName = value.serviceName;
      this._url = value.url;
    }
  }

  // k8s_namespace - computed: true, optional: true, required: false
  private _k8SNamespace?: string; 
  public get k8SNamespace() {
    return this.getStringAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: string) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // url - computed: true, optional: true, required: false
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

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
  /**
  * scrape_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#scrape_targets LoggingUnifiedAgentConfiguration#scrape_targets}
  */
  readonly scrapeTargets?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets[] | cdktf.IResolvable;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    scrape_targets: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsToTerraform, true)(struct!.scrapeTargets),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scrape_targets: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsToHclTerraform, true)(struct!.scrapeTargets),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scrapeTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeTargets = this._scrapeTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._scrapeTargets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._scrapeTargets.internalValue = value.scrapeTargets;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scrape_targets - computed: false, optional: true, required: false
  private _scrapeTargets = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargetsList(this, "scrape_targets", false);
  public get scrapeTargets() {
    return this._scrapeTargets;
  }
  public putScrapeTargets(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceScrapeTargets[] | cdktf.IResolvable) {
    this._scrapeTargets.internalValue = value;
  }
  public resetScrapeTargets() {
    this._scrapeTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeTargetsInput() {
    return this._scrapeTargets.internalValue;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_read_from_head LoggingUnifiedAgentConfiguration#is_read_from_head}
  */
  readonly isReadFromHead?: boolean | cdktf.IResolvable;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_read_from_head: cdktf.booleanToTerraform(struct!.isReadFromHead),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_read_from_head: {
      value: cdktf.booleanToHclTerraform(struct!.isReadFromHead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isReadFromHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadFromHead = this._isReadFromHead;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isReadFromHead = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isReadFromHead = value.isReadFromHead;
    }
  }

  // is_read_from_head - computed: true, optional: true, required: false
  private _isReadFromHead?: boolean | cdktf.IResolvable; 
  public get isReadFromHead() {
    return this.getBooleanAttribute('is_read_from_head');
  }
  public set isReadFromHead(value: boolean | cdktf.IResolvable) {
    this._isReadFromHead = value;
  }
  public resetIsReadFromHead() {
    this._isReadFromHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadFromHeadInput() {
    return this._isReadFromHead;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_keep_time_key LoggingUnifiedAgentConfiguration#is_keep_time_key}
  */
  readonly isKeepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parse_nested LoggingUnifiedAgentConfiguration#parse_nested}
  */
  readonly parseNested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#separator LoggingUnifiedAgentConfiguration#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_format LoggingUnifiedAgentConfiguration#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_type LoggingUnifiedAgentConfiguration#time_type}
  */
  readonly timeType?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    is_keep_time_key: cdktf.booleanToTerraform(struct!.isKeepTimeKey),
    parse_nested: cdktf.booleanToTerraform(struct!.parseNested),
    separator: cdktf.stringToTerraform(struct!.separator),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_type: cdktf.stringToTerraform(struct!.timeType),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.isKeepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parse_nested: {
      value: cdktf.booleanToHclTerraform(struct!.parseNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._isKeepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKeepTimeKey = this._isKeepTimeKey;
    }
    if (this._parseNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseNested = this._parseNested;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldTimeKey = undefined;
      this._isKeepTimeKey = undefined;
      this._parseNested = undefined;
      this._separator = undefined;
      this._timeFormat = undefined;
      this._timeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldTimeKey = value.fieldTimeKey;
      this._isKeepTimeKey = value.isKeepTimeKey;
      this._parseNested = value.parseNested;
      this._separator = value.separator;
      this._timeFormat = value.timeFormat;
      this._timeType = value.timeType;
    }
  }

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // is_keep_time_key - computed: true, optional: true, required: false
  private _isKeepTimeKey?: boolean | cdktf.IResolvable; 
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }
  public set isKeepTimeKey(value: boolean | cdktf.IResolvable) {
    this._isKeepTimeKey = value;
  }
  public resetIsKeepTimeKey() {
    this._isKeepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepTimeKeyInput() {
    return this._isKeepTimeKey;
  }

  // parse_nested - computed: true, optional: true, required: false
  private _parseNested?: boolean | cdktf.IResolvable; 
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }
  public set parseNested(value: boolean | cdktf.IResolvable) {
    this._parseNested = value;
  }
  public resetParseNested() {
    this._parseNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseNestedInput() {
    return this._parseNested;
  }

  // separator - computed: true, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // time_format - computed: true, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_type - computed: true, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_format LoggingUnifiedAgentConfiguration#field_time_format}
  */
  readonly fieldTimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_zone LoggingUnifiedAgentConfiguration#field_time_zone}
  */
  readonly fieldTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#pattern LoggingUnifiedAgentConfiguration#pattern}
  */
  readonly pattern?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_time_format: cdktf.stringToTerraform(struct!.fieldTimeFormat),
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    field_time_zone: cdktf.stringToTerraform(struct!.fieldTimeZone),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_time_format: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeZone),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeFormat = this._fieldTimeFormat;
    }
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._fieldTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeZone = this._fieldTimeZone;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldTimeFormat = undefined;
      this._fieldTimeKey = undefined;
      this._fieldTimeZone = undefined;
      this._name = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldTimeFormat = value.fieldTimeFormat;
      this._fieldTimeKey = value.fieldTimeKey;
      this._fieldTimeZone = value.fieldTimeZone;
      this._name = value.name;
      this._pattern = value.pattern;
    }
  }

  // field_time_format - computed: true, optional: true, required: false
  private _fieldTimeFormat?: string; 
  public get fieldTimeFormat() {
    return this.getStringAttribute('field_time_format');
  }
  public set fieldTimeFormat(value: string) {
    this._fieldTimeFormat = value;
  }
  public resetFieldTimeFormat() {
    this._fieldTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeFormatInput() {
    return this._fieldTimeFormat;
  }

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // field_time_zone - computed: true, optional: true, required: false
  private _fieldTimeZone?: string; 
  public get fieldTimeZone() {
    return this.getStringAttribute('field_time_zone');
  }
  public set fieldTimeZone(value: string) {
    this._fieldTimeZone = value;
  }
  public resetFieldTimeZone() {
    this._fieldTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeZoneInput() {
    return this._fieldTimeZone;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#dimensions LoggingUnifiedAgentConfiguration#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#namespace LoggingUnifiedAgentConfiguration#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#resource_group LoggingUnifiedAgentConfiguration#resource_group}
  */
  readonly resourceGroup?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimensions),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensions = undefined;
      this._namespace = undefined;
      this._resourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensions = value.dimensions;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#delimiter LoggingUnifiedAgentConfiguration#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#expression LoggingUnifiedAgentConfiguration#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#format LoggingUnifiedAgentConfiguration#format}
  */
  readonly format?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#format_firstline LoggingUnifiedAgentConfiguration#format_firstline}
  */
  readonly formatFirstline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#grok_failure_key LoggingUnifiedAgentConfiguration#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#grok_name_key LoggingUnifiedAgentConfiguration#grok_name_key}
  */
  readonly grokNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_estimate_current_event LoggingUnifiedAgentConfiguration#is_estimate_current_event}
  */
  readonly isEstimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_keep_time_key LoggingUnifiedAgentConfiguration#is_keep_time_key}
  */
  readonly isKeepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_merge_cri_fields LoggingUnifiedAgentConfiguration#is_merge_cri_fields}
  */
  readonly isMergeCriFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_null_empty_string LoggingUnifiedAgentConfiguration#is_null_empty_string}
  */
  readonly isNullEmptyString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_support_colonless_ident LoggingUnifiedAgentConfiguration#is_support_colonless_ident}
  */
  readonly isSupportColonlessIdent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_with_priority LoggingUnifiedAgentConfiguration#is_with_priority}
  */
  readonly isWithPriority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#keys LoggingUnifiedAgentConfiguration#keys}
  */
  readonly keys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#message_format LoggingUnifiedAgentConfiguration#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#message_key LoggingUnifiedAgentConfiguration#message_key}
  */
  readonly messageKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#multi_line_start_regexp LoggingUnifiedAgentConfiguration#multi_line_start_regexp}
  */
  readonly multiLineStartRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#null_value_pattern LoggingUnifiedAgentConfiguration#null_value_pattern}
  */
  readonly nullValuePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parse_nested LoggingUnifiedAgentConfiguration#parse_nested}
  */
  readonly parseNested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parser_type LoggingUnifiedAgentConfiguration#parser_type}
  */
  readonly parserType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#rfc5424time_format LoggingUnifiedAgentConfiguration#rfc5424time_format}
  */
  readonly rfc5424TimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#separator LoggingUnifiedAgentConfiguration#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#syslog_parser_type LoggingUnifiedAgentConfiguration#syslog_parser_type}
  */
  readonly syslogParserType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_format LoggingUnifiedAgentConfiguration#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_type LoggingUnifiedAgentConfiguration#time_type}
  */
  readonly timeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#timeout_in_milliseconds LoggingUnifiedAgentConfiguration#timeout_in_milliseconds}
  */
  readonly timeoutInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#types LoggingUnifiedAgentConfiguration#types}
  */
  readonly types?: { [key: string]: string };
  /**
  * nested_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#nested_parser LoggingUnifiedAgentConfiguration#nested_parser}
  */
  readonly nestedParser?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser;
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#patterns LoggingUnifiedAgentConfiguration#patterns}
  */
  readonly patterns?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns[] | cdktf.IResolvable;
  /**
  * record_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#record_input LoggingUnifiedAgentConfiguration#record_input}
  */
  readonly recordInput?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    expression: cdktf.stringToTerraform(struct!.expression),
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    format: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.format),
    format_firstline: cdktf.stringToTerraform(struct!.formatFirstline),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_name_key: cdktf.stringToTerraform(struct!.grokNameKey),
    is_estimate_current_event: cdktf.booleanToTerraform(struct!.isEstimateCurrentEvent),
    is_keep_time_key: cdktf.booleanToTerraform(struct!.isKeepTimeKey),
    is_merge_cri_fields: cdktf.booleanToTerraform(struct!.isMergeCriFields),
    is_null_empty_string: cdktf.booleanToTerraform(struct!.isNullEmptyString),
    is_support_colonless_ident: cdktf.booleanToTerraform(struct!.isSupportColonlessIdent),
    is_with_priority: cdktf.booleanToTerraform(struct!.isWithPriority),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    message_key: cdktf.stringToTerraform(struct!.messageKey),
    multi_line_start_regexp: cdktf.stringToTerraform(struct!.multiLineStartRegexp),
    null_value_pattern: cdktf.stringToTerraform(struct!.nullValuePattern),
    parse_nested: cdktf.booleanToTerraform(struct!.parseNested),
    parser_type: cdktf.stringToTerraform(struct!.parserType),
    rfc5424time_format: cdktf.stringToTerraform(struct!.rfc5424TimeFormat),
    separator: cdktf.stringToTerraform(struct!.separator),
    syslog_parser_type: cdktf.stringToTerraform(struct!.syslogParserType),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timeout_in_milliseconds: cdktf.numberToTerraform(struct!.timeoutInMilliseconds),
    types: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.types),
    nested_parser: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserToTerraform(struct!.nestedParser),
    patterns: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsToTerraform, true)(struct!.patterns),
    record_input: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputToTerraform(struct!.recordInput),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.format),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format_firstline: {
      value: cdktf.stringToHclTerraform(struct!.formatFirstline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_name_key: {
      value: cdktf.stringToHclTerraform(struct!.grokNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.isEstimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.isKeepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_merge_cri_fields: {
      value: cdktf.booleanToHclTerraform(struct!.isMergeCriFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_null_empty_string: {
      value: cdktf.booleanToHclTerraform(struct!.isNullEmptyString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_support_colonless_ident: {
      value: cdktf.booleanToHclTerraform(struct!.isSupportColonlessIdent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_with_priority: {
      value: cdktf.booleanToHclTerraform(struct!.isWithPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_key: {
      value: cdktf.stringToHclTerraform(struct!.messageKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multiLineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.nullValuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse_nested: {
      value: cdktf.booleanToHclTerraform(struct!.parseNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parser_type: {
      value: cdktf.stringToHclTerraform(struct!.parserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc5424time_format: {
      value: cdktf.stringToHclTerraform(struct!.rfc5424TimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_parser_type: {
      value: cdktf.stringToHclTerraform(struct!.syslogParserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    types: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.types),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nested_parser: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserToHclTerraform(struct!.nestedParser),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserList",
    },
    patterns: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsList",
    },
    record_input: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputToHclTerraform(struct!.recordInput),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatFirstline !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatFirstline = this._formatFirstline;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokNameKey = this._grokNameKey;
    }
    if (this._isEstimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEstimateCurrentEvent = this._isEstimateCurrentEvent;
    }
    if (this._isKeepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKeepTimeKey = this._isKeepTimeKey;
    }
    if (this._isMergeCriFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMergeCriFields = this._isMergeCriFields;
    }
    if (this._isNullEmptyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNullEmptyString = this._isNullEmptyString;
    }
    if (this._isSupportColonlessIdent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSupportColonlessIdent = this._isSupportColonlessIdent;
    }
    if (this._isWithPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWithPriority = this._isWithPriority;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._messageKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageKey = this._messageKey;
    }
    if (this._multiLineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLineStartRegexp = this._multiLineStartRegexp;
    }
    if (this._nullValuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValuePattern = this._nullValuePattern;
    }
    if (this._parseNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseNested = this._parseNested;
    }
    if (this._parserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserType = this._parserType;
    }
    if (this._rfc5424TimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc5424TimeFormat = this._rfc5424TimeFormat;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._syslogParserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogParserType = this._syslogParserType;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timeoutInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMilliseconds = this._timeoutInMilliseconds;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._nestedParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestedParser = this._nestedParser?.internalValue;
    }
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    if (this._recordInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInput = this._recordInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._expression = undefined;
      this._fieldTimeKey = undefined;
      this._format = undefined;
      this._formatFirstline = undefined;
      this._grokFailureKey = undefined;
      this._grokNameKey = undefined;
      this._isEstimateCurrentEvent = undefined;
      this._isKeepTimeKey = undefined;
      this._isMergeCriFields = undefined;
      this._isNullEmptyString = undefined;
      this._isSupportColonlessIdent = undefined;
      this._isWithPriority = undefined;
      this._keys = undefined;
      this._messageFormat = undefined;
      this._messageKey = undefined;
      this._multiLineStartRegexp = undefined;
      this._nullValuePattern = undefined;
      this._parseNested = undefined;
      this._parserType = undefined;
      this._rfc5424TimeFormat = undefined;
      this._separator = undefined;
      this._syslogParserType = undefined;
      this._timeFormat = undefined;
      this._timeType = undefined;
      this._timeoutInMilliseconds = undefined;
      this._types = undefined;
      this._nestedParser.internalValue = undefined;
      this._patterns.internalValue = undefined;
      this._recordInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._expression = value.expression;
      this._fieldTimeKey = value.fieldTimeKey;
      this._format = value.format;
      this._formatFirstline = value.formatFirstline;
      this._grokFailureKey = value.grokFailureKey;
      this._grokNameKey = value.grokNameKey;
      this._isEstimateCurrentEvent = value.isEstimateCurrentEvent;
      this._isKeepTimeKey = value.isKeepTimeKey;
      this._isMergeCriFields = value.isMergeCriFields;
      this._isNullEmptyString = value.isNullEmptyString;
      this._isSupportColonlessIdent = value.isSupportColonlessIdent;
      this._isWithPriority = value.isWithPriority;
      this._keys = value.keys;
      this._messageFormat = value.messageFormat;
      this._messageKey = value.messageKey;
      this._multiLineStartRegexp = value.multiLineStartRegexp;
      this._nullValuePattern = value.nullValuePattern;
      this._parseNested = value.parseNested;
      this._parserType = value.parserType;
      this._rfc5424TimeFormat = value.rfc5424TimeFormat;
      this._separator = value.separator;
      this._syslogParserType = value.syslogParserType;
      this._timeFormat = value.timeFormat;
      this._timeType = value.timeType;
      this._timeoutInMilliseconds = value.timeoutInMilliseconds;
      this._types = value.types;
      this._nestedParser.internalValue = value.nestedParser;
      this._patterns.internalValue = value.patterns;
      this._recordInput.internalValue = value.recordInput;
    }
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // expression - computed: true, optional: true, required: false
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

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string[]; 
  public get format() {
    return this.getListAttribute('format');
  }
  public set format(value: string[]) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_firstline - computed: true, optional: true, required: false
  private _formatFirstline?: string; 
  public get formatFirstline() {
    return this.getStringAttribute('format_firstline');
  }
  public set formatFirstline(value: string) {
    this._formatFirstline = value;
  }
  public resetFormatFirstline() {
    this._formatFirstline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatFirstlineInput() {
    return this._formatFirstline;
  }

  // grok_failure_key - computed: true, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_name_key - computed: true, optional: true, required: false
  private _grokNameKey?: string; 
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }
  public set grokNameKey(value: string) {
    this._grokNameKey = value;
  }
  public resetGrokNameKey() {
    this._grokNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokNameKeyInput() {
    return this._grokNameKey;
  }

  // is_estimate_current_event - computed: false, optional: true, required: false
  private _isEstimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get isEstimateCurrentEvent() {
    return this.getBooleanAttribute('is_estimate_current_event');
  }
  public set isEstimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._isEstimateCurrentEvent = value;
  }
  public resetIsEstimateCurrentEvent() {
    this._isEstimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEstimateCurrentEventInput() {
    return this._isEstimateCurrentEvent;
  }

  // is_keep_time_key - computed: false, optional: true, required: false
  private _isKeepTimeKey?: boolean | cdktf.IResolvable; 
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }
  public set isKeepTimeKey(value: boolean | cdktf.IResolvable) {
    this._isKeepTimeKey = value;
  }
  public resetIsKeepTimeKey() {
    this._isKeepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepTimeKeyInput() {
    return this._isKeepTimeKey;
  }

  // is_merge_cri_fields - computed: true, optional: true, required: false
  private _isMergeCriFields?: boolean | cdktf.IResolvable; 
  public get isMergeCriFields() {
    return this.getBooleanAttribute('is_merge_cri_fields');
  }
  public set isMergeCriFields(value: boolean | cdktf.IResolvable) {
    this._isMergeCriFields = value;
  }
  public resetIsMergeCriFields() {
    this._isMergeCriFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMergeCriFieldsInput() {
    return this._isMergeCriFields;
  }

  // is_null_empty_string - computed: false, optional: true, required: false
  private _isNullEmptyString?: boolean | cdktf.IResolvable; 
  public get isNullEmptyString() {
    return this.getBooleanAttribute('is_null_empty_string');
  }
  public set isNullEmptyString(value: boolean | cdktf.IResolvable) {
    this._isNullEmptyString = value;
  }
  public resetIsNullEmptyString() {
    this._isNullEmptyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNullEmptyStringInput() {
    return this._isNullEmptyString;
  }

  // is_support_colonless_ident - computed: true, optional: true, required: false
  private _isSupportColonlessIdent?: boolean | cdktf.IResolvable; 
  public get isSupportColonlessIdent() {
    return this.getBooleanAttribute('is_support_colonless_ident');
  }
  public set isSupportColonlessIdent(value: boolean | cdktf.IResolvable) {
    this._isSupportColonlessIdent = value;
  }
  public resetIsSupportColonlessIdent() {
    this._isSupportColonlessIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSupportColonlessIdentInput() {
    return this._isSupportColonlessIdent;
  }

  // is_with_priority - computed: true, optional: true, required: false
  private _isWithPriority?: boolean | cdktf.IResolvable; 
  public get isWithPriority() {
    return this.getBooleanAttribute('is_with_priority');
  }
  public set isWithPriority(value: boolean | cdktf.IResolvable) {
    this._isWithPriority = value;
  }
  public resetIsWithPriority() {
    this._isWithPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWithPriorityInput() {
    return this._isWithPriority;
  }

  // keys - computed: true, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // message_format - computed: true, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // message_key - computed: true, optional: true, required: false
  private _messageKey?: string; 
  public get messageKey() {
    return this.getStringAttribute('message_key');
  }
  public set messageKey(value: string) {
    this._messageKey = value;
  }
  public resetMessageKey() {
    this._messageKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageKeyInput() {
    return this._messageKey;
  }

  // multi_line_start_regexp - computed: true, optional: true, required: false
  private _multiLineStartRegexp?: string; 
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }
  public set multiLineStartRegexp(value: string) {
    this._multiLineStartRegexp = value;
  }
  public resetMultiLineStartRegexp() {
    this._multiLineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineStartRegexpInput() {
    return this._multiLineStartRegexp;
  }

  // null_value_pattern - computed: true, optional: true, required: false
  private _nullValuePattern?: string; 
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }
  public set nullValuePattern(value: string) {
    this._nullValuePattern = value;
  }
  public resetNullValuePattern() {
    this._nullValuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuePatternInput() {
    return this._nullValuePattern;
  }

  // parse_nested - computed: true, optional: true, required: false
  private _parseNested?: boolean | cdktf.IResolvable; 
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }
  public set parseNested(value: boolean | cdktf.IResolvable) {
    this._parseNested = value;
  }
  public resetParseNested() {
    this._parseNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseNestedInput() {
    return this._parseNested;
  }

  // parser_type - computed: false, optional: false, required: true
  private _parserType?: string; 
  public get parserType() {
    return this.getStringAttribute('parser_type');
  }
  public set parserType(value: string) {
    this._parserType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserTypeInput() {
    return this._parserType;
  }

  // rfc5424time_format - computed: true, optional: true, required: false
  private _rfc5424TimeFormat?: string; 
  public get rfc5424TimeFormat() {
    return this.getStringAttribute('rfc5424time_format');
  }
  public set rfc5424TimeFormat(value: string) {
    this._rfc5424TimeFormat = value;
  }
  public resetRfc5424TimeFormat() {
    this._rfc5424TimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc5424TimeFormatInput() {
    return this._rfc5424TimeFormat;
  }

  // separator - computed: true, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // syslog_parser_type - computed: true, optional: true, required: false
  private _syslogParserType?: string; 
  public get syslogParserType() {
    return this.getStringAttribute('syslog_parser_type');
  }
  public set syslogParserType(value: string) {
    this._syslogParserType = value;
  }
  public resetSyslogParserType() {
    this._syslogParserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogParserTypeInput() {
    return this._syslogParserType;
  }

  // time_format - computed: true, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_type - computed: true, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timeout_in_milliseconds - computed: true, optional: true, required: false
  private _timeoutInMilliseconds?: number; 
  public get timeoutInMilliseconds() {
    return this.getNumberAttribute('timeout_in_milliseconds');
  }
  public set timeoutInMilliseconds(value: number) {
    this._timeoutInMilliseconds = value;
  }
  public resetTimeoutInMilliseconds() {
    this._timeoutInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMillisecondsInput() {
    return this._timeoutInMilliseconds;
  }

  // types - computed: true, optional: true, required: false
  private _types?: { [key: string]: string }; 
  public get types() {
    return this.getStringMapAttribute('types');
  }
  public set types(value: { [key: string]: string }) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // nested_parser - computed: false, optional: true, required: false
  private _nestedParser = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParserOutputReference(this, "nested_parser");
  public get nestedParser() {
    return this._nestedParser;
  }
  public putNestedParser(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserNestedParser) {
    this._nestedParser.internalValue = value;
  }
  public resetNestedParser() {
    this._nestedParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedParserInput() {
    return this._nestedParser.internalValue;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }

  // record_input - computed: false, optional: true, required: false
  private _recordInput = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInputOutputReference(this, "record_input");
  public get recordInput() {
    return this._recordInput;
  }
  public putRecordInput(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserRecordInput) {
    this._recordInput.internalValue = value;
  }
  public resetRecordInput() {
    this._recordInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInputInput() {
    return this._recordInput.internalValue;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#paths LoggingUnifiedAgentConfiguration#paths}
  */
  readonly paths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#source_type LoggingUnifiedAgentConfiguration#source_type}
  */
  readonly sourceType?: string;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#advanced_options LoggingUnifiedAgentConfiguration#advanced_options}
  */
  readonly advancedOptions?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions;
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parser LoggingUnifiedAgentConfiguration#parser}
  */
  readonly parser?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    advanced_options: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsToTerraform(struct!.advancedOptions),
    parser: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserToTerraform(struct!.parser),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_options: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsList",
    },
    parser: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._paths = undefined;
      this._sourceType = undefined;
      this._advancedOptions.internalValue = undefined;
      this._parser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._paths = value.paths;
      this._sourceType = value.sourceType;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._parser.internalValue = value.parser;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // paths - computed: true, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // source_type - computed: true, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#allow_list LoggingUnifiedAgentConfiguration#allow_list}
  */
  readonly allowList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#deny_list LoggingUnifiedAgentConfiguration#deny_list}
  */
  readonly denyList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#filter_type LoggingUnifiedAgentConfiguration#filter_type}
  */
  readonly filterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowList),
    deny_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denyList),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deny_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denyList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowList = this._allowList;
    }
    if (this._denyList !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyList = this._denyList;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowList = undefined;
      this._denyList = undefined;
      this._filterType = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowList = value.allowList;
      this._denyList = value.denyList;
      this._filterType = value.filterType;
      this._name = value.name;
    }
  }

  // allow_list - computed: true, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return this.getListAttribute('allow_list');
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
  }

  // deny_list - computed: true, optional: true, required: false
  private _denyList?: string[]; 
  public get denyList() {
    return this.getListAttribute('deny_list');
  }
  public set denyList(value: string[]) {
    this._denyList = value;
  }
  public resetDenyList() {
    this._denyList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyListInput() {
    return this._denyList;
  }

  // filter_type - computed: true, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#source_type LoggingUnifiedAgentConfiguration#source_type}
  */
  readonly sourceType: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#destination LoggingUnifiedAgentConfiguration#destination}
  */
  readonly destination: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#source LoggingUnifiedAgentConfiguration#source}
  */
  readonly source?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#sources LoggingUnifiedAgentConfiguration#sources}
  */
  readonly sources?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources[] | cdktf.IResolvable;
  /**
  * unified_agent_configuration_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#unified_agent_configuration_filter LoggingUnifiedAgentConfiguration#unified_agent_configuration_filter}
  */
  readonly unifiedAgentConfigurationFilter?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    destination: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationToTerraform(struct!.destination),
    source: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceToTerraform(struct!.source),
    sources: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesToTerraform, true)(struct!.sources),
    unified_agent_configuration_filter: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterToTerraform(struct!.unifiedAgentConfigurationFilter),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationList",
    },
    source: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceList",
    },
    sources: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesList",
    },
    unified_agent_configuration_filter: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterToHclTerraform(struct!.unifiedAgentConfigurationFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._unifiedAgentConfigurationFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unifiedAgentConfigurationFilter = this._unifiedAgentConfigurationFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceType = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._unifiedAgentConfigurationFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceType = value.sourceType;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
      this._sources.internalValue = value.sources;
      this._unifiedAgentConfigurationFilter.internalValue = value.unifiedAgentConfigurationFilter;
    }
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // unified_agent_configuration_filter - computed: false, optional: true, required: false
  private _unifiedAgentConfigurationFilter = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilterOutputReference(this, "unified_agent_configuration_filter");
  public get unifiedAgentConfigurationFilter() {
    return this._unifiedAgentConfigurationFilter;
  }
  public putUnifiedAgentConfigurationFilter(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsUnifiedAgentConfigurationFilter) {
    this._unifiedAgentConfigurationFilter.internalValue = value;
  }
  public resetUnifiedAgentConfigurationFilter() {
    this._unifiedAgentConfigurationFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAgentConfigurationFilterInput() {
    return this._unifiedAgentConfigurationFilter.internalValue;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#compartment_id LoggingUnifiedAgentConfiguration#compartment_id}
  */
  readonly compartmentId: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compartmentId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compartmentId = value.compartmentId;
    }
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#namespace LoggingUnifiedAgentConfiguration#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#resource_group LoggingUnifiedAgentConfiguration#resource_group}
  */
  readonly resourceGroup?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
      this._resourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
    }
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

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#metrics LoggingUnifiedAgentConfiguration#metrics}
  */
  readonly metrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#type LoggingUnifiedAgentConfiguration#type}
  */
  readonly type: string;
  /**
  * record_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#record_input LoggingUnifiedAgentConfiguration#record_input}
  */
  readonly recordInput: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
    type: cdktf.stringToTerraform(struct!.type),
    record_input: loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputToTerraform(struct!.recordInput),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    record_input: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputToHclTerraform(struct!.recordInput),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._recordInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInput = this._recordInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metrics = undefined;
      this._type = undefined;
      this._recordInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metrics = value.metrics;
      this._type = value.type;
      this._recordInput.internalValue = value.recordInput;
    }
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // record_input - computed: false, optional: false, required: true
  private _recordInput = new LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInputOutputReference(this, "record_input");
  public get recordInput() {
    return this._recordInput;
  }
  public putRecordInput(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceRecordInput) {
    this._recordInput.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInputInput() {
    return this._recordInput.internalValue;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration {
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#destination LoggingUnifiedAgentConfiguration#destination}
  */
  readonly destination: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#source LoggingUnifiedAgentConfiguration#source}
  */
  readonly source: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationToTerraform(struct!.destination),
    source: loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceToTerraform(struct!.source),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationList",
    },
    source: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#log_object_id LoggingUnifiedAgentConfiguration#log_object_id}
  */
  readonly logObjectId: string;
  /**
  * operational_metrics_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#operational_metrics_configuration LoggingUnifiedAgentConfiguration#operational_metrics_configuration}
  */
  readonly operationalMetricsConfiguration?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_object_id: cdktf.stringToTerraform(struct!.logObjectId),
    operational_metrics_configuration: loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationToTerraform(struct!.operationalMetricsConfiguration),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationDestinationToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_object_id: {
      value: cdktf.stringToHclTerraform(struct!.logObjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operational_metrics_configuration: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationToHclTerraform(struct!.operationalMetricsConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logObjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logObjectId = this._logObjectId;
    }
    if (this._operationalMetricsConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationalMetricsConfiguration = this._operationalMetricsConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logObjectId = undefined;
      this._operationalMetricsConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logObjectId = value.logObjectId;
      this._operationalMetricsConfiguration.internalValue = value.operationalMetricsConfiguration;
    }
  }

  // log_object_id - computed: false, optional: false, required: true
  private _logObjectId?: string; 
  public get logObjectId() {
    return this.getStringAttribute('log_object_id');
  }
  public set logObjectId(value: string) {
    this._logObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logObjectIdInput() {
    return this._logObjectId;
  }

  // operational_metrics_configuration - computed: false, optional: true, required: false
  private _operationalMetricsConfiguration = new LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfigurationOutputReference(this, "operational_metrics_configuration");
  public get operationalMetricsConfiguration() {
    return this._operationalMetricsConfiguration;
  }
  public putOperationalMetricsConfiguration(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOperationalMetricsConfiguration) {
    this._operationalMetricsConfiguration.internalValue = value;
  }
  public resetOperationalMetricsConfiguration() {
    this._operationalMetricsConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalMetricsConfigurationInput() {
    return this._operationalMetricsConfiguration.internalValue;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_read_from_head LoggingUnifiedAgentConfiguration#is_read_from_head}
  */
  readonly isReadFromHead?: boolean | cdktf.IResolvable;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_read_from_head: cdktf.booleanToTerraform(struct!.isReadFromHead),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_read_from_head: {
      value: cdktf.booleanToHclTerraform(struct!.isReadFromHead),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isReadFromHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.isReadFromHead = this._isReadFromHead;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isReadFromHead = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isReadFromHead = value.isReadFromHead;
    }
  }

  // is_read_from_head - computed: true, optional: true, required: false
  private _isReadFromHead?: boolean | cdktf.IResolvable; 
  public get isReadFromHead() {
    return this.getBooleanAttribute('is_read_from_head');
  }
  public set isReadFromHead(value: boolean | cdktf.IResolvable) {
    this._isReadFromHead = value;
  }
  public resetIsReadFromHead() {
    this._isReadFromHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReadFromHeadInput() {
    return this._isReadFromHead;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_keep_time_key LoggingUnifiedAgentConfiguration#is_keep_time_key}
  */
  readonly isKeepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parse_nested LoggingUnifiedAgentConfiguration#parse_nested}
  */
  readonly parseNested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#separator LoggingUnifiedAgentConfiguration#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_format LoggingUnifiedAgentConfiguration#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_type LoggingUnifiedAgentConfiguration#time_type}
  */
  readonly timeType?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    is_keep_time_key: cdktf.booleanToTerraform(struct!.isKeepTimeKey),
    parse_nested: cdktf.booleanToTerraform(struct!.parseNested),
    separator: cdktf.stringToTerraform(struct!.separator),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_type: cdktf.stringToTerraform(struct!.timeType),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.isKeepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parse_nested: {
      value: cdktf.booleanToHclTerraform(struct!.parseNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._isKeepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKeepTimeKey = this._isKeepTimeKey;
    }
    if (this._parseNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseNested = this._parseNested;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldTimeKey = undefined;
      this._isKeepTimeKey = undefined;
      this._parseNested = undefined;
      this._separator = undefined;
      this._timeFormat = undefined;
      this._timeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldTimeKey = value.fieldTimeKey;
      this._isKeepTimeKey = value.isKeepTimeKey;
      this._parseNested = value.parseNested;
      this._separator = value.separator;
      this._timeFormat = value.timeFormat;
      this._timeType = value.timeType;
    }
  }

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // is_keep_time_key - computed: true, optional: true, required: false
  private _isKeepTimeKey?: boolean | cdktf.IResolvable; 
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }
  public set isKeepTimeKey(value: boolean | cdktf.IResolvable) {
    this._isKeepTimeKey = value;
  }
  public resetIsKeepTimeKey() {
    this._isKeepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepTimeKeyInput() {
    return this._isKeepTimeKey;
  }

  // parse_nested - computed: true, optional: true, required: false
  private _parseNested?: boolean | cdktf.IResolvable; 
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }
  public set parseNested(value: boolean | cdktf.IResolvable) {
    this._parseNested = value;
  }
  public resetParseNested() {
    this._parseNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseNestedInput() {
    return this._parseNested;
  }

  // separator - computed: true, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // time_format - computed: true, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_type - computed: true, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_format LoggingUnifiedAgentConfiguration#field_time_format}
  */
  readonly fieldTimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_zone LoggingUnifiedAgentConfiguration#field_time_zone}
  */
  readonly fieldTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#pattern LoggingUnifiedAgentConfiguration#pattern}
  */
  readonly pattern?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_time_format: cdktf.stringToTerraform(struct!.fieldTimeFormat),
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    field_time_zone: cdktf.stringToTerraform(struct!.fieldTimeZone),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_time_format: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeZone),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeFormat = this._fieldTimeFormat;
    }
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._fieldTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeZone = this._fieldTimeZone;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldTimeFormat = undefined;
      this._fieldTimeKey = undefined;
      this._fieldTimeZone = undefined;
      this._name = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldTimeFormat = value.fieldTimeFormat;
      this._fieldTimeKey = value.fieldTimeKey;
      this._fieldTimeZone = value.fieldTimeZone;
      this._name = value.name;
      this._pattern = value.pattern;
    }
  }

  // field_time_format - computed: true, optional: true, required: false
  private _fieldTimeFormat?: string; 
  public get fieldTimeFormat() {
    return this.getStringAttribute('field_time_format');
  }
  public set fieldTimeFormat(value: string) {
    this._fieldTimeFormat = value;
  }
  public resetFieldTimeFormat() {
    this._fieldTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeFormatInput() {
    return this._fieldTimeFormat;
  }

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // field_time_zone - computed: true, optional: true, required: false
  private _fieldTimeZone?: string; 
  public get fieldTimeZone() {
    return this.getStringAttribute('field_time_zone');
  }
  public set fieldTimeZone(value: string) {
    this._fieldTimeZone = value;
  }
  public resetFieldTimeZone() {
    this._fieldTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeZoneInput() {
    return this._fieldTimeZone;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#dimensions LoggingUnifiedAgentConfiguration#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#namespace LoggingUnifiedAgentConfiguration#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#resource_group LoggingUnifiedAgentConfiguration#resource_group}
  */
  readonly resourceGroup?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimensions),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensions = undefined;
      this._namespace = undefined;
      this._resourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensions = value.dimensions;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#delimiter LoggingUnifiedAgentConfiguration#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#expression LoggingUnifiedAgentConfiguration#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#format LoggingUnifiedAgentConfiguration#format}
  */
  readonly format?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#format_firstline LoggingUnifiedAgentConfiguration#format_firstline}
  */
  readonly formatFirstline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#grok_failure_key LoggingUnifiedAgentConfiguration#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#grok_name_key LoggingUnifiedAgentConfiguration#grok_name_key}
  */
  readonly grokNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_estimate_current_event LoggingUnifiedAgentConfiguration#is_estimate_current_event}
  */
  readonly isEstimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_keep_time_key LoggingUnifiedAgentConfiguration#is_keep_time_key}
  */
  readonly isKeepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_merge_cri_fields LoggingUnifiedAgentConfiguration#is_merge_cri_fields}
  */
  readonly isMergeCriFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_null_empty_string LoggingUnifiedAgentConfiguration#is_null_empty_string}
  */
  readonly isNullEmptyString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_support_colonless_ident LoggingUnifiedAgentConfiguration#is_support_colonless_ident}
  */
  readonly isSupportColonlessIdent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_with_priority LoggingUnifiedAgentConfiguration#is_with_priority}
  */
  readonly isWithPriority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#keys LoggingUnifiedAgentConfiguration#keys}
  */
  readonly keys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#message_format LoggingUnifiedAgentConfiguration#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#message_key LoggingUnifiedAgentConfiguration#message_key}
  */
  readonly messageKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#multi_line_start_regexp LoggingUnifiedAgentConfiguration#multi_line_start_regexp}
  */
  readonly multiLineStartRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#null_value_pattern LoggingUnifiedAgentConfiguration#null_value_pattern}
  */
  readonly nullValuePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parse_nested LoggingUnifiedAgentConfiguration#parse_nested}
  */
  readonly parseNested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parser_type LoggingUnifiedAgentConfiguration#parser_type}
  */
  readonly parserType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#rfc5424time_format LoggingUnifiedAgentConfiguration#rfc5424time_format}
  */
  readonly rfc5424TimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#separator LoggingUnifiedAgentConfiguration#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#syslog_parser_type LoggingUnifiedAgentConfiguration#syslog_parser_type}
  */
  readonly syslogParserType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_format LoggingUnifiedAgentConfiguration#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_type LoggingUnifiedAgentConfiguration#time_type}
  */
  readonly timeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#timeout_in_milliseconds LoggingUnifiedAgentConfiguration#timeout_in_milliseconds}
  */
  readonly timeoutInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#types LoggingUnifiedAgentConfiguration#types}
  */
  readonly types?: { [key: string]: string };
  /**
  * nested_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#nested_parser LoggingUnifiedAgentConfiguration#nested_parser}
  */
  readonly nestedParser?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser;
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#patterns LoggingUnifiedAgentConfiguration#patterns}
  */
  readonly patterns?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns[] | cdktf.IResolvable;
  /**
  * record_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#record_input LoggingUnifiedAgentConfiguration#record_input}
  */
  readonly recordInput?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    expression: cdktf.stringToTerraform(struct!.expression),
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    format: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.format),
    format_firstline: cdktf.stringToTerraform(struct!.formatFirstline),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_name_key: cdktf.stringToTerraform(struct!.grokNameKey),
    is_estimate_current_event: cdktf.booleanToTerraform(struct!.isEstimateCurrentEvent),
    is_keep_time_key: cdktf.booleanToTerraform(struct!.isKeepTimeKey),
    is_merge_cri_fields: cdktf.booleanToTerraform(struct!.isMergeCriFields),
    is_null_empty_string: cdktf.booleanToTerraform(struct!.isNullEmptyString),
    is_support_colonless_ident: cdktf.booleanToTerraform(struct!.isSupportColonlessIdent),
    is_with_priority: cdktf.booleanToTerraform(struct!.isWithPriority),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    message_key: cdktf.stringToTerraform(struct!.messageKey),
    multi_line_start_regexp: cdktf.stringToTerraform(struct!.multiLineStartRegexp),
    null_value_pattern: cdktf.stringToTerraform(struct!.nullValuePattern),
    parse_nested: cdktf.booleanToTerraform(struct!.parseNested),
    parser_type: cdktf.stringToTerraform(struct!.parserType),
    rfc5424time_format: cdktf.stringToTerraform(struct!.rfc5424TimeFormat),
    separator: cdktf.stringToTerraform(struct!.separator),
    syslog_parser_type: cdktf.stringToTerraform(struct!.syslogParserType),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timeout_in_milliseconds: cdktf.numberToTerraform(struct!.timeoutInMilliseconds),
    types: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.types),
    nested_parser: loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserToTerraform(struct!.nestedParser),
    patterns: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsToTerraform, true)(struct!.patterns),
    record_input: loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputToTerraform(struct!.recordInput),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.format),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format_firstline: {
      value: cdktf.stringToHclTerraform(struct!.formatFirstline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_name_key: {
      value: cdktf.stringToHclTerraform(struct!.grokNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.isEstimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.isKeepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_merge_cri_fields: {
      value: cdktf.booleanToHclTerraform(struct!.isMergeCriFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_null_empty_string: {
      value: cdktf.booleanToHclTerraform(struct!.isNullEmptyString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_support_colonless_ident: {
      value: cdktf.booleanToHclTerraform(struct!.isSupportColonlessIdent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_with_priority: {
      value: cdktf.booleanToHclTerraform(struct!.isWithPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_key: {
      value: cdktf.stringToHclTerraform(struct!.messageKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multiLineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.nullValuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse_nested: {
      value: cdktf.booleanToHclTerraform(struct!.parseNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parser_type: {
      value: cdktf.stringToHclTerraform(struct!.parserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc5424time_format: {
      value: cdktf.stringToHclTerraform(struct!.rfc5424TimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_parser_type: {
      value: cdktf.stringToHclTerraform(struct!.syslogParserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    types: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.types),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nested_parser: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserToHclTerraform(struct!.nestedParser),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserList",
    },
    patterns: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsList",
    },
    record_input: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputToHclTerraform(struct!.recordInput),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatFirstline !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatFirstline = this._formatFirstline;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokNameKey = this._grokNameKey;
    }
    if (this._isEstimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEstimateCurrentEvent = this._isEstimateCurrentEvent;
    }
    if (this._isKeepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKeepTimeKey = this._isKeepTimeKey;
    }
    if (this._isMergeCriFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMergeCriFields = this._isMergeCriFields;
    }
    if (this._isNullEmptyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNullEmptyString = this._isNullEmptyString;
    }
    if (this._isSupportColonlessIdent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSupportColonlessIdent = this._isSupportColonlessIdent;
    }
    if (this._isWithPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWithPriority = this._isWithPriority;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._messageKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageKey = this._messageKey;
    }
    if (this._multiLineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLineStartRegexp = this._multiLineStartRegexp;
    }
    if (this._nullValuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValuePattern = this._nullValuePattern;
    }
    if (this._parseNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseNested = this._parseNested;
    }
    if (this._parserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserType = this._parserType;
    }
    if (this._rfc5424TimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc5424TimeFormat = this._rfc5424TimeFormat;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._syslogParserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogParserType = this._syslogParserType;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timeoutInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMilliseconds = this._timeoutInMilliseconds;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._nestedParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestedParser = this._nestedParser?.internalValue;
    }
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    if (this._recordInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInput = this._recordInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._expression = undefined;
      this._fieldTimeKey = undefined;
      this._format = undefined;
      this._formatFirstline = undefined;
      this._grokFailureKey = undefined;
      this._grokNameKey = undefined;
      this._isEstimateCurrentEvent = undefined;
      this._isKeepTimeKey = undefined;
      this._isMergeCriFields = undefined;
      this._isNullEmptyString = undefined;
      this._isSupportColonlessIdent = undefined;
      this._isWithPriority = undefined;
      this._keys = undefined;
      this._messageFormat = undefined;
      this._messageKey = undefined;
      this._multiLineStartRegexp = undefined;
      this._nullValuePattern = undefined;
      this._parseNested = undefined;
      this._parserType = undefined;
      this._rfc5424TimeFormat = undefined;
      this._separator = undefined;
      this._syslogParserType = undefined;
      this._timeFormat = undefined;
      this._timeType = undefined;
      this._timeoutInMilliseconds = undefined;
      this._types = undefined;
      this._nestedParser.internalValue = undefined;
      this._patterns.internalValue = undefined;
      this._recordInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._expression = value.expression;
      this._fieldTimeKey = value.fieldTimeKey;
      this._format = value.format;
      this._formatFirstline = value.formatFirstline;
      this._grokFailureKey = value.grokFailureKey;
      this._grokNameKey = value.grokNameKey;
      this._isEstimateCurrentEvent = value.isEstimateCurrentEvent;
      this._isKeepTimeKey = value.isKeepTimeKey;
      this._isMergeCriFields = value.isMergeCriFields;
      this._isNullEmptyString = value.isNullEmptyString;
      this._isSupportColonlessIdent = value.isSupportColonlessIdent;
      this._isWithPriority = value.isWithPriority;
      this._keys = value.keys;
      this._messageFormat = value.messageFormat;
      this._messageKey = value.messageKey;
      this._multiLineStartRegexp = value.multiLineStartRegexp;
      this._nullValuePattern = value.nullValuePattern;
      this._parseNested = value.parseNested;
      this._parserType = value.parserType;
      this._rfc5424TimeFormat = value.rfc5424TimeFormat;
      this._separator = value.separator;
      this._syslogParserType = value.syslogParserType;
      this._timeFormat = value.timeFormat;
      this._timeType = value.timeType;
      this._timeoutInMilliseconds = value.timeoutInMilliseconds;
      this._types = value.types;
      this._nestedParser.internalValue = value.nestedParser;
      this._patterns.internalValue = value.patterns;
      this._recordInput.internalValue = value.recordInput;
    }
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // expression - computed: true, optional: true, required: false
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

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string[]; 
  public get format() {
    return this.getListAttribute('format');
  }
  public set format(value: string[]) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_firstline - computed: true, optional: true, required: false
  private _formatFirstline?: string; 
  public get formatFirstline() {
    return this.getStringAttribute('format_firstline');
  }
  public set formatFirstline(value: string) {
    this._formatFirstline = value;
  }
  public resetFormatFirstline() {
    this._formatFirstline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatFirstlineInput() {
    return this._formatFirstline;
  }

  // grok_failure_key - computed: true, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_name_key - computed: true, optional: true, required: false
  private _grokNameKey?: string; 
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }
  public set grokNameKey(value: string) {
    this._grokNameKey = value;
  }
  public resetGrokNameKey() {
    this._grokNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokNameKeyInput() {
    return this._grokNameKey;
  }

  // is_estimate_current_event - computed: false, optional: true, required: false
  private _isEstimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get isEstimateCurrentEvent() {
    return this.getBooleanAttribute('is_estimate_current_event');
  }
  public set isEstimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._isEstimateCurrentEvent = value;
  }
  public resetIsEstimateCurrentEvent() {
    this._isEstimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEstimateCurrentEventInput() {
    return this._isEstimateCurrentEvent;
  }

  // is_keep_time_key - computed: false, optional: true, required: false
  private _isKeepTimeKey?: boolean | cdktf.IResolvable; 
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }
  public set isKeepTimeKey(value: boolean | cdktf.IResolvable) {
    this._isKeepTimeKey = value;
  }
  public resetIsKeepTimeKey() {
    this._isKeepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepTimeKeyInput() {
    return this._isKeepTimeKey;
  }

  // is_merge_cri_fields - computed: true, optional: true, required: false
  private _isMergeCriFields?: boolean | cdktf.IResolvable; 
  public get isMergeCriFields() {
    return this.getBooleanAttribute('is_merge_cri_fields');
  }
  public set isMergeCriFields(value: boolean | cdktf.IResolvable) {
    this._isMergeCriFields = value;
  }
  public resetIsMergeCriFields() {
    this._isMergeCriFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMergeCriFieldsInput() {
    return this._isMergeCriFields;
  }

  // is_null_empty_string - computed: false, optional: true, required: false
  private _isNullEmptyString?: boolean | cdktf.IResolvable; 
  public get isNullEmptyString() {
    return this.getBooleanAttribute('is_null_empty_string');
  }
  public set isNullEmptyString(value: boolean | cdktf.IResolvable) {
    this._isNullEmptyString = value;
  }
  public resetIsNullEmptyString() {
    this._isNullEmptyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNullEmptyStringInput() {
    return this._isNullEmptyString;
  }

  // is_support_colonless_ident - computed: true, optional: true, required: false
  private _isSupportColonlessIdent?: boolean | cdktf.IResolvable; 
  public get isSupportColonlessIdent() {
    return this.getBooleanAttribute('is_support_colonless_ident');
  }
  public set isSupportColonlessIdent(value: boolean | cdktf.IResolvable) {
    this._isSupportColonlessIdent = value;
  }
  public resetIsSupportColonlessIdent() {
    this._isSupportColonlessIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSupportColonlessIdentInput() {
    return this._isSupportColonlessIdent;
  }

  // is_with_priority - computed: true, optional: true, required: false
  private _isWithPriority?: boolean | cdktf.IResolvable; 
  public get isWithPriority() {
    return this.getBooleanAttribute('is_with_priority');
  }
  public set isWithPriority(value: boolean | cdktf.IResolvable) {
    this._isWithPriority = value;
  }
  public resetIsWithPriority() {
    this._isWithPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWithPriorityInput() {
    return this._isWithPriority;
  }

  // keys - computed: true, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // message_format - computed: true, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // message_key - computed: true, optional: true, required: false
  private _messageKey?: string; 
  public get messageKey() {
    return this.getStringAttribute('message_key');
  }
  public set messageKey(value: string) {
    this._messageKey = value;
  }
  public resetMessageKey() {
    this._messageKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageKeyInput() {
    return this._messageKey;
  }

  // multi_line_start_regexp - computed: true, optional: true, required: false
  private _multiLineStartRegexp?: string; 
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }
  public set multiLineStartRegexp(value: string) {
    this._multiLineStartRegexp = value;
  }
  public resetMultiLineStartRegexp() {
    this._multiLineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineStartRegexpInput() {
    return this._multiLineStartRegexp;
  }

  // null_value_pattern - computed: true, optional: true, required: false
  private _nullValuePattern?: string; 
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }
  public set nullValuePattern(value: string) {
    this._nullValuePattern = value;
  }
  public resetNullValuePattern() {
    this._nullValuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuePatternInput() {
    return this._nullValuePattern;
  }

  // parse_nested - computed: true, optional: true, required: false
  private _parseNested?: boolean | cdktf.IResolvable; 
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }
  public set parseNested(value: boolean | cdktf.IResolvable) {
    this._parseNested = value;
  }
  public resetParseNested() {
    this._parseNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseNestedInput() {
    return this._parseNested;
  }

  // parser_type - computed: false, optional: false, required: true
  private _parserType?: string; 
  public get parserType() {
    return this.getStringAttribute('parser_type');
  }
  public set parserType(value: string) {
    this._parserType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserTypeInput() {
    return this._parserType;
  }

  // rfc5424time_format - computed: true, optional: true, required: false
  private _rfc5424TimeFormat?: string; 
  public get rfc5424TimeFormat() {
    return this.getStringAttribute('rfc5424time_format');
  }
  public set rfc5424TimeFormat(value: string) {
    this._rfc5424TimeFormat = value;
  }
  public resetRfc5424TimeFormat() {
    this._rfc5424TimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc5424TimeFormatInput() {
    return this._rfc5424TimeFormat;
  }

  // separator - computed: true, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // syslog_parser_type - computed: true, optional: true, required: false
  private _syslogParserType?: string; 
  public get syslogParserType() {
    return this.getStringAttribute('syslog_parser_type');
  }
  public set syslogParserType(value: string) {
    this._syslogParserType = value;
  }
  public resetSyslogParserType() {
    this._syslogParserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogParserTypeInput() {
    return this._syslogParserType;
  }

  // time_format - computed: true, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_type - computed: true, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timeout_in_milliseconds - computed: true, optional: true, required: false
  private _timeoutInMilliseconds?: number; 
  public get timeoutInMilliseconds() {
    return this.getNumberAttribute('timeout_in_milliseconds');
  }
  public set timeoutInMilliseconds(value: number) {
    this._timeoutInMilliseconds = value;
  }
  public resetTimeoutInMilliseconds() {
    this._timeoutInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMillisecondsInput() {
    return this._timeoutInMilliseconds;
  }

  // types - computed: true, optional: true, required: false
  private _types?: { [key: string]: string }; 
  public get types() {
    return this.getStringMapAttribute('types');
  }
  public set types(value: { [key: string]: string }) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // nested_parser - computed: false, optional: true, required: false
  private _nestedParser = new LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParserOutputReference(this, "nested_parser");
  public get nestedParser() {
    return this._nestedParser;
  }
  public putNestedParser(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserNestedParser) {
    this._nestedParser.internalValue = value;
  }
  public resetNestedParser() {
    this._nestedParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedParserInput() {
    return this._nestedParser.internalValue;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }

  // record_input - computed: false, optional: true, required: false
  private _recordInput = new LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInputOutputReference(this, "record_input");
  public get recordInput() {
    return this._recordInput;
  }
  public putRecordInput(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserRecordInput) {
    this._recordInput.internalValue = value;
  }
  public resetRecordInput() {
    this._recordInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInputInput() {
    return this._recordInput.internalValue;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#channels LoggingUnifiedAgentConfiguration#channels}
  */
  readonly channels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#custom_plugin LoggingUnifiedAgentConfiguration#custom_plugin}
  */
  readonly customPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#paths LoggingUnifiedAgentConfiguration#paths}
  */
  readonly paths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#source_type LoggingUnifiedAgentConfiguration#source_type}
  */
  readonly sourceType: string;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#advanced_options LoggingUnifiedAgentConfiguration#advanced_options}
  */
  readonly advancedOptions?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions;
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parser LoggingUnifiedAgentConfiguration#parser}
  */
  readonly parser?: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channels),
    custom_plugin: cdktf.stringToTerraform(struct!.customPlugin),
    name: cdktf.stringToTerraform(struct!.name),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    advanced_options: loggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsToTerraform(struct!.advancedOptions),
    parser: loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserToTerraform(struct!.parser),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationSourcesToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_plugin: {
      value: cdktf.stringToHclTerraform(struct!.customPlugin),
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
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advanced_options: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsList",
    },
    parser: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationSourcesParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channels !== undefined) {
      hasAnyValues = true;
      internalValueResult.channels = this._channels;
    }
    if (this._customPlugin !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPlugin = this._customPlugin;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channels = undefined;
      this._customPlugin = undefined;
      this._name = undefined;
      this._paths = undefined;
      this._sourceType = undefined;
      this._advancedOptions.internalValue = undefined;
      this._parser.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channels = value.channels;
      this._customPlugin = value.customPlugin;
      this._name = value.name;
      this._paths = value.paths;
      this._sourceType = value.sourceType;
      this._advancedOptions.internalValue = value.advancedOptions;
      this._parser.internalValue = value.parser;
    }
  }

  // channels - computed: true, optional: true, required: false
  private _channels?: string[]; 
  public get channels() {
    return this.getListAttribute('channels');
  }
  public set channels(value: string[]) {
    this._channels = value;
  }
  public resetChannels() {
    this._channels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelsInput() {
    return this._channels;
  }

  // custom_plugin - computed: true, optional: true, required: false
  private _customPlugin?: string; 
  public get customPlugin() {
    return this.getStringAttribute('custom_plugin');
  }
  public set customPlugin(value: string) {
    this._customPlugin = value;
  }
  public resetCustomPlugin() {
    this._customPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPluginInput() {
    return this._customPlugin;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // paths - computed: true, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: LoggingUnifiedAgentConfigurationServiceConfigurationSourcesParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationSourcesList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationSources[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationSourcesOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#key LoggingUnifiedAgentConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#pattern LoggingUnifiedAgentConfiguration#pattern}
  */
  readonly pattern?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#params LoggingUnifiedAgentConfiguration#params}
  */
  readonly params?: { [key: string]: string };
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._params = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._params = value.params;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // params - computed: true, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#key LoggingUnifiedAgentConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#pattern LoggingUnifiedAgentConfiguration#pattern}
  */
  readonly pattern?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._pattern = value.pattern;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_keep_time_key LoggingUnifiedAgentConfiguration#is_keep_time_key}
  */
  readonly isKeepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parse_nested LoggingUnifiedAgentConfiguration#parse_nested}
  */
  readonly parseNested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#separator LoggingUnifiedAgentConfiguration#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_format LoggingUnifiedAgentConfiguration#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_type LoggingUnifiedAgentConfiguration#time_type}
  */
  readonly timeType?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    is_keep_time_key: cdktf.booleanToTerraform(struct!.isKeepTimeKey),
    parse_nested: cdktf.booleanToTerraform(struct!.parseNested),
    separator: cdktf.stringToTerraform(struct!.separator),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_type: cdktf.stringToTerraform(struct!.timeType),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.isKeepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parse_nested: {
      value: cdktf.booleanToHclTerraform(struct!.parseNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._isKeepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKeepTimeKey = this._isKeepTimeKey;
    }
    if (this._parseNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseNested = this._parseNested;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldTimeKey = undefined;
      this._isKeepTimeKey = undefined;
      this._parseNested = undefined;
      this._separator = undefined;
      this._timeFormat = undefined;
      this._timeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldTimeKey = value.fieldTimeKey;
      this._isKeepTimeKey = value.isKeepTimeKey;
      this._parseNested = value.parseNested;
      this._separator = value.separator;
      this._timeFormat = value.timeFormat;
      this._timeType = value.timeType;
    }
  }

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // is_keep_time_key - computed: true, optional: true, required: false
  private _isKeepTimeKey?: boolean | cdktf.IResolvable; 
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }
  public set isKeepTimeKey(value: boolean | cdktf.IResolvable) {
    this._isKeepTimeKey = value;
  }
  public resetIsKeepTimeKey() {
    this._isKeepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepTimeKeyInput() {
    return this._isKeepTimeKey;
  }

  // parse_nested - computed: true, optional: true, required: false
  private _parseNested?: boolean | cdktf.IResolvable; 
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }
  public set parseNested(value: boolean | cdktf.IResolvable) {
    this._parseNested = value;
  }
  public resetParseNested() {
    this._parseNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseNestedInput() {
    return this._parseNested;
  }

  // separator - computed: true, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // time_format - computed: true, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_type - computed: true, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_format LoggingUnifiedAgentConfiguration#field_time_format}
  */
  readonly fieldTimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_zone LoggingUnifiedAgentConfiguration#field_time_zone}
  */
  readonly fieldTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#pattern LoggingUnifiedAgentConfiguration#pattern}
  */
  readonly pattern?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_time_format: cdktf.stringToTerraform(struct!.fieldTimeFormat),
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    field_time_zone: cdktf.stringToTerraform(struct!.fieldTimeZone),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_time_format: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeZone),
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeFormat = this._fieldTimeFormat;
    }
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._fieldTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeZone = this._fieldTimeZone;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldTimeFormat = undefined;
      this._fieldTimeKey = undefined;
      this._fieldTimeZone = undefined;
      this._name = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldTimeFormat = value.fieldTimeFormat;
      this._fieldTimeKey = value.fieldTimeKey;
      this._fieldTimeZone = value.fieldTimeZone;
      this._name = value.name;
      this._pattern = value.pattern;
    }
  }

  // field_time_format - computed: true, optional: true, required: false
  private _fieldTimeFormat?: string; 
  public get fieldTimeFormat() {
    return this.getStringAttribute('field_time_format');
  }
  public set fieldTimeFormat(value: string) {
    this._fieldTimeFormat = value;
  }
  public resetFieldTimeFormat() {
    this._fieldTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeFormatInput() {
    return this._fieldTimeFormat;
  }

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // field_time_zone - computed: true, optional: true, required: false
  private _fieldTimeZone?: string; 
  public get fieldTimeZone() {
    return this.getStringAttribute('field_time_zone');
  }
  public set fieldTimeZone(value: string) {
    this._fieldTimeZone = value;
  }
  public resetFieldTimeZone() {
    this._fieldTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeZoneInput() {
    return this._fieldTimeZone;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#dimensions LoggingUnifiedAgentConfiguration#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#namespace LoggingUnifiedAgentConfiguration#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#resource_group LoggingUnifiedAgentConfiguration#resource_group}
  */
  readonly resourceGroup?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.dimensions),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.dimensions),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimensions = undefined;
      this._namespace = undefined;
      this._resourceGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimensions = value.dimensions;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
    }
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#delimiter LoggingUnifiedAgentConfiguration#delimiter}
  */
  readonly delimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#expression LoggingUnifiedAgentConfiguration#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#field_time_key LoggingUnifiedAgentConfiguration#field_time_key}
  */
  readonly fieldTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#format LoggingUnifiedAgentConfiguration#format}
  */
  readonly format?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#format_firstline LoggingUnifiedAgentConfiguration#format_firstline}
  */
  readonly formatFirstline?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#grok_failure_key LoggingUnifiedAgentConfiguration#grok_failure_key}
  */
  readonly grokFailureKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#grok_name_key LoggingUnifiedAgentConfiguration#grok_name_key}
  */
  readonly grokNameKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_estimate_current_event LoggingUnifiedAgentConfiguration#is_estimate_current_event}
  */
  readonly isEstimateCurrentEvent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_keep_time_key LoggingUnifiedAgentConfiguration#is_keep_time_key}
  */
  readonly isKeepTimeKey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_merge_cri_fields LoggingUnifiedAgentConfiguration#is_merge_cri_fields}
  */
  readonly isMergeCriFields?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_null_empty_string LoggingUnifiedAgentConfiguration#is_null_empty_string}
  */
  readonly isNullEmptyString?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_support_colonless_ident LoggingUnifiedAgentConfiguration#is_support_colonless_ident}
  */
  readonly isSupportColonlessIdent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_with_priority LoggingUnifiedAgentConfiguration#is_with_priority}
  */
  readonly isWithPriority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#keys LoggingUnifiedAgentConfiguration#keys}
  */
  readonly keys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#message_format LoggingUnifiedAgentConfiguration#message_format}
  */
  readonly messageFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#message_key LoggingUnifiedAgentConfiguration#message_key}
  */
  readonly messageKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#multi_line_start_regexp LoggingUnifiedAgentConfiguration#multi_line_start_regexp}
  */
  readonly multiLineStartRegexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#null_value_pattern LoggingUnifiedAgentConfiguration#null_value_pattern}
  */
  readonly nullValuePattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parse_nested LoggingUnifiedAgentConfiguration#parse_nested}
  */
  readonly parseNested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parser_type LoggingUnifiedAgentConfiguration#parser_type}
  */
  readonly parserType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#rfc5424time_format LoggingUnifiedAgentConfiguration#rfc5424time_format}
  */
  readonly rfc5424TimeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#separator LoggingUnifiedAgentConfiguration#separator}
  */
  readonly separator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#syslog_parser_type LoggingUnifiedAgentConfiguration#syslog_parser_type}
  */
  readonly syslogParserType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_format LoggingUnifiedAgentConfiguration#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#time_type LoggingUnifiedAgentConfiguration#time_type}
  */
  readonly timeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#timeout_in_milliseconds LoggingUnifiedAgentConfiguration#timeout_in_milliseconds}
  */
  readonly timeoutInMilliseconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#types LoggingUnifiedAgentConfiguration#types}
  */
  readonly types?: { [key: string]: string };
  /**
  * nested_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#nested_parser LoggingUnifiedAgentConfiguration#nested_parser}
  */
  readonly nestedParser?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser;
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#patterns LoggingUnifiedAgentConfiguration#patterns}
  */
  readonly patterns?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns[] | cdktf.IResolvable;
  /**
  * record_input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#record_input LoggingUnifiedAgentConfiguration#record_input}
  */
  readonly recordInput?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
    expression: cdktf.stringToTerraform(struct!.expression),
    field_time_key: cdktf.stringToTerraform(struct!.fieldTimeKey),
    format: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.format),
    format_firstline: cdktf.stringToTerraform(struct!.formatFirstline),
    grok_failure_key: cdktf.stringToTerraform(struct!.grokFailureKey),
    grok_name_key: cdktf.stringToTerraform(struct!.grokNameKey),
    is_estimate_current_event: cdktf.booleanToTerraform(struct!.isEstimateCurrentEvent),
    is_keep_time_key: cdktf.booleanToTerraform(struct!.isKeepTimeKey),
    is_merge_cri_fields: cdktf.booleanToTerraform(struct!.isMergeCriFields),
    is_null_empty_string: cdktf.booleanToTerraform(struct!.isNullEmptyString),
    is_support_colonless_ident: cdktf.booleanToTerraform(struct!.isSupportColonlessIdent),
    is_with_priority: cdktf.booleanToTerraform(struct!.isWithPriority),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    message_format: cdktf.stringToTerraform(struct!.messageFormat),
    message_key: cdktf.stringToTerraform(struct!.messageKey),
    multi_line_start_regexp: cdktf.stringToTerraform(struct!.multiLineStartRegexp),
    null_value_pattern: cdktf.stringToTerraform(struct!.nullValuePattern),
    parse_nested: cdktf.booleanToTerraform(struct!.parseNested),
    parser_type: cdktf.stringToTerraform(struct!.parserType),
    rfc5424time_format: cdktf.stringToTerraform(struct!.rfc5424TimeFormat),
    separator: cdktf.stringToTerraform(struct!.separator),
    syslog_parser_type: cdktf.stringToTerraform(struct!.syslogParserType),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_type: cdktf.stringToTerraform(struct!.timeType),
    timeout_in_milliseconds: cdktf.numberToTerraform(struct!.timeoutInMilliseconds),
    types: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.types),
    nested_parser: loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserToTerraform(struct!.nestedParser),
    patterns: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsToTerraform, true)(struct!.patterns),
    record_input: loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputToTerraform(struct!.recordInput),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserOutputReference | LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_time_key: {
      value: cdktf.stringToHclTerraform(struct!.fieldTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.format),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format_firstline: {
      value: cdktf.stringToHclTerraform(struct!.formatFirstline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_failure_key: {
      value: cdktf.stringToHclTerraform(struct!.grokFailureKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grok_name_key: {
      value: cdktf.stringToHclTerraform(struct!.grokNameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_estimate_current_event: {
      value: cdktf.booleanToHclTerraform(struct!.isEstimateCurrentEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_keep_time_key: {
      value: cdktf.booleanToHclTerraform(struct!.isKeepTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_merge_cri_fields: {
      value: cdktf.booleanToHclTerraform(struct!.isMergeCriFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_null_empty_string: {
      value: cdktf.booleanToHclTerraform(struct!.isNullEmptyString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_support_colonless_ident: {
      value: cdktf.booleanToHclTerraform(struct!.isSupportColonlessIdent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_with_priority: {
      value: cdktf.booleanToHclTerraform(struct!.isWithPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    message_format: {
      value: cdktf.stringToHclTerraform(struct!.messageFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_key: {
      value: cdktf.stringToHclTerraform(struct!.messageKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_line_start_regexp: {
      value: cdktf.stringToHclTerraform(struct!.multiLineStartRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    null_value_pattern: {
      value: cdktf.stringToHclTerraform(struct!.nullValuePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parse_nested: {
      value: cdktf.booleanToHclTerraform(struct!.parseNested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parser_type: {
      value: cdktf.stringToHclTerraform(struct!.parserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc5424time_format: {
      value: cdktf.stringToHclTerraform(struct!.rfc5424TimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog_parser_type: {
      value: cdktf.stringToHclTerraform(struct!.syslogParserType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_type: {
      value: cdktf.stringToHclTerraform(struct!.timeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_in_milliseconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutInMilliseconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    types: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.types),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nested_parser: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserToHclTerraform(struct!.nestedParser),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserList",
    },
    patterns: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsToHclTerraform, true)(struct!.patterns),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsList",
    },
    record_input: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputToHclTerraform(struct!.recordInput),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._fieldTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldTimeKey = this._fieldTimeKey;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._formatFirstline !== undefined) {
      hasAnyValues = true;
      internalValueResult.formatFirstline = this._formatFirstline;
    }
    if (this._grokFailureKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokFailureKey = this._grokFailureKey;
    }
    if (this._grokNameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.grokNameKey = this._grokNameKey;
    }
    if (this._isEstimateCurrentEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEstimateCurrentEvent = this._isEstimateCurrentEvent;
    }
    if (this._isKeepTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKeepTimeKey = this._isKeepTimeKey;
    }
    if (this._isMergeCriFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMergeCriFields = this._isMergeCriFields;
    }
    if (this._isNullEmptyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNullEmptyString = this._isNullEmptyString;
    }
    if (this._isSupportColonlessIdent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSupportColonlessIdent = this._isSupportColonlessIdent;
    }
    if (this._isWithPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWithPriority = this._isWithPriority;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._messageFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageFormat = this._messageFormat;
    }
    if (this._messageKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageKey = this._messageKey;
    }
    if (this._multiLineStartRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiLineStartRegexp = this._multiLineStartRegexp;
    }
    if (this._nullValuePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullValuePattern = this._nullValuePattern;
    }
    if (this._parseNested !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseNested = this._parseNested;
    }
    if (this._parserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parserType = this._parserType;
    }
    if (this._rfc5424TimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc5424TimeFormat = this._rfc5424TimeFormat;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._syslogParserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogParserType = this._syslogParserType;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeType = this._timeType;
    }
    if (this._timeoutInMilliseconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutInMilliseconds = this._timeoutInMilliseconds;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._nestedParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nestedParser = this._nestedParser?.internalValue;
    }
    if (this._patterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns?.internalValue;
    }
    if (this._recordInput?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordInput = this._recordInput?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
      this._expression = undefined;
      this._fieldTimeKey = undefined;
      this._format = undefined;
      this._formatFirstline = undefined;
      this._grokFailureKey = undefined;
      this._grokNameKey = undefined;
      this._isEstimateCurrentEvent = undefined;
      this._isKeepTimeKey = undefined;
      this._isMergeCriFields = undefined;
      this._isNullEmptyString = undefined;
      this._isSupportColonlessIdent = undefined;
      this._isWithPriority = undefined;
      this._keys = undefined;
      this._messageFormat = undefined;
      this._messageKey = undefined;
      this._multiLineStartRegexp = undefined;
      this._nullValuePattern = undefined;
      this._parseNested = undefined;
      this._parserType = undefined;
      this._rfc5424TimeFormat = undefined;
      this._separator = undefined;
      this._syslogParserType = undefined;
      this._timeFormat = undefined;
      this._timeType = undefined;
      this._timeoutInMilliseconds = undefined;
      this._types = undefined;
      this._nestedParser.internalValue = undefined;
      this._patterns.internalValue = undefined;
      this._recordInput.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
      this._expression = value.expression;
      this._fieldTimeKey = value.fieldTimeKey;
      this._format = value.format;
      this._formatFirstline = value.formatFirstline;
      this._grokFailureKey = value.grokFailureKey;
      this._grokNameKey = value.grokNameKey;
      this._isEstimateCurrentEvent = value.isEstimateCurrentEvent;
      this._isKeepTimeKey = value.isKeepTimeKey;
      this._isMergeCriFields = value.isMergeCriFields;
      this._isNullEmptyString = value.isNullEmptyString;
      this._isSupportColonlessIdent = value.isSupportColonlessIdent;
      this._isWithPriority = value.isWithPriority;
      this._keys = value.keys;
      this._messageFormat = value.messageFormat;
      this._messageKey = value.messageKey;
      this._multiLineStartRegexp = value.multiLineStartRegexp;
      this._nullValuePattern = value.nullValuePattern;
      this._parseNested = value.parseNested;
      this._parserType = value.parserType;
      this._rfc5424TimeFormat = value.rfc5424TimeFormat;
      this._separator = value.separator;
      this._syslogParserType = value.syslogParserType;
      this._timeFormat = value.timeFormat;
      this._timeType = value.timeType;
      this._timeoutInMilliseconds = value.timeoutInMilliseconds;
      this._types = value.types;
      this._nestedParser.internalValue = value.nestedParser;
      this._patterns.internalValue = value.patterns;
      this._recordInput.internalValue = value.recordInput;
    }
  }

  // delimiter - computed: true, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }

  // expression - computed: true, optional: true, required: false
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

  // field_time_key - computed: true, optional: true, required: false
  private _fieldTimeKey?: string; 
  public get fieldTimeKey() {
    return this.getStringAttribute('field_time_key');
  }
  public set fieldTimeKey(value: string) {
    this._fieldTimeKey = value;
  }
  public resetFieldTimeKey() {
    this._fieldTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTimeKeyInput() {
    return this._fieldTimeKey;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string[]; 
  public get format() {
    return this.getListAttribute('format');
  }
  public set format(value: string[]) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // format_firstline - computed: true, optional: true, required: false
  private _formatFirstline?: string; 
  public get formatFirstline() {
    return this.getStringAttribute('format_firstline');
  }
  public set formatFirstline(value: string) {
    this._formatFirstline = value;
  }
  public resetFormatFirstline() {
    this._formatFirstline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatFirstlineInput() {
    return this._formatFirstline;
  }

  // grok_failure_key - computed: true, optional: true, required: false
  private _grokFailureKey?: string; 
  public get grokFailureKey() {
    return this.getStringAttribute('grok_failure_key');
  }
  public set grokFailureKey(value: string) {
    this._grokFailureKey = value;
  }
  public resetGrokFailureKey() {
    this._grokFailureKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokFailureKeyInput() {
    return this._grokFailureKey;
  }

  // grok_name_key - computed: true, optional: true, required: false
  private _grokNameKey?: string; 
  public get grokNameKey() {
    return this.getStringAttribute('grok_name_key');
  }
  public set grokNameKey(value: string) {
    this._grokNameKey = value;
  }
  public resetGrokNameKey() {
    this._grokNameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grokNameKeyInput() {
    return this._grokNameKey;
  }

  // is_estimate_current_event - computed: false, optional: true, required: false
  private _isEstimateCurrentEvent?: boolean | cdktf.IResolvable; 
  public get isEstimateCurrentEvent() {
    return this.getBooleanAttribute('is_estimate_current_event');
  }
  public set isEstimateCurrentEvent(value: boolean | cdktf.IResolvable) {
    this._isEstimateCurrentEvent = value;
  }
  public resetIsEstimateCurrentEvent() {
    this._isEstimateCurrentEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEstimateCurrentEventInput() {
    return this._isEstimateCurrentEvent;
  }

  // is_keep_time_key - computed: false, optional: true, required: false
  private _isKeepTimeKey?: boolean | cdktf.IResolvable; 
  public get isKeepTimeKey() {
    return this.getBooleanAttribute('is_keep_time_key');
  }
  public set isKeepTimeKey(value: boolean | cdktf.IResolvable) {
    this._isKeepTimeKey = value;
  }
  public resetIsKeepTimeKey() {
    this._isKeepTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeepTimeKeyInput() {
    return this._isKeepTimeKey;
  }

  // is_merge_cri_fields - computed: true, optional: true, required: false
  private _isMergeCriFields?: boolean | cdktf.IResolvable; 
  public get isMergeCriFields() {
    return this.getBooleanAttribute('is_merge_cri_fields');
  }
  public set isMergeCriFields(value: boolean | cdktf.IResolvable) {
    this._isMergeCriFields = value;
  }
  public resetIsMergeCriFields() {
    this._isMergeCriFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMergeCriFieldsInput() {
    return this._isMergeCriFields;
  }

  // is_null_empty_string - computed: false, optional: true, required: false
  private _isNullEmptyString?: boolean | cdktf.IResolvable; 
  public get isNullEmptyString() {
    return this.getBooleanAttribute('is_null_empty_string');
  }
  public set isNullEmptyString(value: boolean | cdktf.IResolvable) {
    this._isNullEmptyString = value;
  }
  public resetIsNullEmptyString() {
    this._isNullEmptyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNullEmptyStringInput() {
    return this._isNullEmptyString;
  }

  // is_support_colonless_ident - computed: true, optional: true, required: false
  private _isSupportColonlessIdent?: boolean | cdktf.IResolvable; 
  public get isSupportColonlessIdent() {
    return this.getBooleanAttribute('is_support_colonless_ident');
  }
  public set isSupportColonlessIdent(value: boolean | cdktf.IResolvable) {
    this._isSupportColonlessIdent = value;
  }
  public resetIsSupportColonlessIdent() {
    this._isSupportColonlessIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSupportColonlessIdentInput() {
    return this._isSupportColonlessIdent;
  }

  // is_with_priority - computed: true, optional: true, required: false
  private _isWithPriority?: boolean | cdktf.IResolvable; 
  public get isWithPriority() {
    return this.getBooleanAttribute('is_with_priority');
  }
  public set isWithPriority(value: boolean | cdktf.IResolvable) {
    this._isWithPriority = value;
  }
  public resetIsWithPriority() {
    this._isWithPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWithPriorityInput() {
    return this._isWithPriority;
  }

  // keys - computed: true, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // message_format - computed: true, optional: true, required: false
  private _messageFormat?: string; 
  public get messageFormat() {
    return this.getStringAttribute('message_format');
  }
  public set messageFormat(value: string) {
    this._messageFormat = value;
  }
  public resetMessageFormat() {
    this._messageFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageFormatInput() {
    return this._messageFormat;
  }

  // message_key - computed: true, optional: true, required: false
  private _messageKey?: string; 
  public get messageKey() {
    return this.getStringAttribute('message_key');
  }
  public set messageKey(value: string) {
    this._messageKey = value;
  }
  public resetMessageKey() {
    this._messageKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageKeyInput() {
    return this._messageKey;
  }

  // multi_line_start_regexp - computed: true, optional: true, required: false
  private _multiLineStartRegexp?: string; 
  public get multiLineStartRegexp() {
    return this.getStringAttribute('multi_line_start_regexp');
  }
  public set multiLineStartRegexp(value: string) {
    this._multiLineStartRegexp = value;
  }
  public resetMultiLineStartRegexp() {
    this._multiLineStartRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiLineStartRegexpInput() {
    return this._multiLineStartRegexp;
  }

  // null_value_pattern - computed: true, optional: true, required: false
  private _nullValuePattern?: string; 
  public get nullValuePattern() {
    return this.getStringAttribute('null_value_pattern');
  }
  public set nullValuePattern(value: string) {
    this._nullValuePattern = value;
  }
  public resetNullValuePattern() {
    this._nullValuePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullValuePatternInput() {
    return this._nullValuePattern;
  }

  // parse_nested - computed: true, optional: true, required: false
  private _parseNested?: boolean | cdktf.IResolvable; 
  public get parseNested() {
    return this.getBooleanAttribute('parse_nested');
  }
  public set parseNested(value: boolean | cdktf.IResolvable) {
    this._parseNested = value;
  }
  public resetParseNested() {
    this._parseNested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseNestedInput() {
    return this._parseNested;
  }

  // parser_type - computed: false, optional: false, required: true
  private _parserType?: string; 
  public get parserType() {
    return this.getStringAttribute('parser_type');
  }
  public set parserType(value: string) {
    this._parserType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parserTypeInput() {
    return this._parserType;
  }

  // rfc5424time_format - computed: true, optional: true, required: false
  private _rfc5424TimeFormat?: string; 
  public get rfc5424TimeFormat() {
    return this.getStringAttribute('rfc5424time_format');
  }
  public set rfc5424TimeFormat(value: string) {
    this._rfc5424TimeFormat = value;
  }
  public resetRfc5424TimeFormat() {
    this._rfc5424TimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc5424TimeFormatInput() {
    return this._rfc5424TimeFormat;
  }

  // separator - computed: true, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // syslog_parser_type - computed: true, optional: true, required: false
  private _syslogParserType?: string; 
  public get syslogParserType() {
    return this.getStringAttribute('syslog_parser_type');
  }
  public set syslogParserType(value: string) {
    this._syslogParserType = value;
  }
  public resetSyslogParserType() {
    this._syslogParserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogParserTypeInput() {
    return this._syslogParserType;
  }

  // time_format - computed: true, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_type - computed: true, optional: true, required: false
  private _timeType?: string; 
  public get timeType() {
    return this.getStringAttribute('time_type');
  }
  public set timeType(value: string) {
    this._timeType = value;
  }
  public resetTimeType() {
    this._timeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTypeInput() {
    return this._timeType;
  }

  // timeout_in_milliseconds - computed: true, optional: true, required: false
  private _timeoutInMilliseconds?: number; 
  public get timeoutInMilliseconds() {
    return this.getNumberAttribute('timeout_in_milliseconds');
  }
  public set timeoutInMilliseconds(value: number) {
    this._timeoutInMilliseconds = value;
  }
  public resetTimeoutInMilliseconds() {
    this._timeoutInMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMillisecondsInput() {
    return this._timeoutInMilliseconds;
  }

  // types - computed: true, optional: true, required: false
  private _types?: { [key: string]: string }; 
  public get types() {
    return this.getStringMapAttribute('types');
  }
  public set types(value: { [key: string]: string }) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // nested_parser - computed: false, optional: true, required: false
  private _nestedParser = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParserOutputReference(this, "nested_parser");
  public get nestedParser() {
    return this._nestedParser;
  }
  public putNestedParser(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserNestedParser) {
    this._nestedParser.internalValue = value;
  }
  public resetNestedParser() {
    this._nestedParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedParserInput() {
    return this._nestedParser.internalValue;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatternsList(this, "patterns", false);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }

  // record_input - computed: false, optional: true, required: false
  private _recordInput = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInputOutputReference(this, "record_input");
  public get recordInput() {
    return this._recordInput;
  }
  public putRecordInput(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserRecordInput) {
    this._recordInput.internalValue = value;
  }
  public resetRecordInput() {
    this._recordInput.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInputInput() {
    return this._recordInput.internalValue;
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#key LoggingUnifiedAgentConfiguration#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#value LoggingUnifiedAgentConfiguration#value}
  */
  readonly value?: string;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
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

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#custom_filter_type LoggingUnifiedAgentConfiguration#custom_filter_type}
  */
  readonly customFilterType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#emit_invalid_record_to_error LoggingUnifiedAgentConfiguration#emit_invalid_record_to_error}
  */
  readonly emitInvalidRecordToError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#filter_type LoggingUnifiedAgentConfiguration#filter_type}
  */
  readonly filterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#hash_value_field LoggingUnifiedAgentConfiguration#hash_value_field}
  */
  readonly hashValueField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#inject_key_prefix LoggingUnifiedAgentConfiguration#inject_key_prefix}
  */
  readonly injectKeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_auto_typecast_enabled LoggingUnifiedAgentConfiguration#is_auto_typecast_enabled}
  */
  readonly isAutoTypecastEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_renew_record_enabled LoggingUnifiedAgentConfiguration#is_renew_record_enabled}
  */
  readonly isRenewRecordEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#is_ruby_enabled LoggingUnifiedAgentConfiguration#is_ruby_enabled}
  */
  readonly isRubyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#keep_keys LoggingUnifiedAgentConfiguration#keep_keys}
  */
  readonly keepKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#key_name LoggingUnifiedAgentConfiguration#key_name}
  */
  readonly keyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#name LoggingUnifiedAgentConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#params LoggingUnifiedAgentConfiguration#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#remove_key_name_field LoggingUnifiedAgentConfiguration#remove_key_name_field}
  */
  readonly removeKeyNameField?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#remove_keys LoggingUnifiedAgentConfiguration#remove_keys}
  */
  readonly removeKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#renew_time_key LoggingUnifiedAgentConfiguration#renew_time_key}
  */
  readonly renewTimeKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#replace_invalid_sequence LoggingUnifiedAgentConfiguration#replace_invalid_sequence}
  */
  readonly replaceInvalidSequence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#reserve_data LoggingUnifiedAgentConfiguration#reserve_data}
  */
  readonly reserveData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#reserve_time LoggingUnifiedAgentConfiguration#reserve_time}
  */
  readonly reserveTime?: boolean | cdktf.IResolvable;
  /**
  * allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#allow_list LoggingUnifiedAgentConfiguration#allow_list}
  */
  readonly allowList?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct[] | cdktf.IResolvable;
  /**
  * custom_sections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#custom_sections LoggingUnifiedAgentConfiguration#custom_sections}
  */
  readonly customSections?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections[] | cdktf.IResolvable;
  /**
  * deny_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#deny_list LoggingUnifiedAgentConfiguration#deny_list}
  */
  readonly denyList?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct[] | cdktf.IResolvable;
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#parser LoggingUnifiedAgentConfiguration#parser}
  */
  readonly parser?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser;
  /**
  * record_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#record_list LoggingUnifiedAgentConfiguration#record_list}
  */
  readonly recordList?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct[] | cdktf.IResolvable;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_filter_type: cdktf.stringToTerraform(struct!.customFilterType),
    emit_invalid_record_to_error: cdktf.booleanToTerraform(struct!.emitInvalidRecordToError),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    hash_value_field: cdktf.stringToTerraform(struct!.hashValueField),
    inject_key_prefix: cdktf.stringToTerraform(struct!.injectKeyPrefix),
    is_auto_typecast_enabled: cdktf.booleanToTerraform(struct!.isAutoTypecastEnabled),
    is_renew_record_enabled: cdktf.booleanToTerraform(struct!.isRenewRecordEnabled),
    is_ruby_enabled: cdktf.booleanToTerraform(struct!.isRubyEnabled),
    keep_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keepKeys),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    name: cdktf.stringToTerraform(struct!.name),
    params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.params),
    remove_key_name_field: cdktf.booleanToTerraform(struct!.removeKeyNameField),
    remove_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeKeys),
    renew_time_key: cdktf.stringToTerraform(struct!.renewTimeKey),
    replace_invalid_sequence: cdktf.booleanToTerraform(struct!.replaceInvalidSequence),
    reserve_data: cdktf.booleanToTerraform(struct!.reserveData),
    reserve_time: cdktf.booleanToTerraform(struct!.reserveTime),
    allow_list: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructToTerraform, true)(struct!.allowList),
    custom_sections: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsToTerraform, true)(struct!.customSections),
    deny_list: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructToTerraform, true)(struct!.denyList),
    parser: loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserToTerraform(struct!.parser),
    record_list: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructToTerraform, true)(struct!.recordList),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.customFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emit_invalid_record_to_error: {
      value: cdktf.booleanToHclTerraform(struct!.emitInvalidRecordToError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_value_field: {
      value: cdktf.stringToHclTerraform(struct!.hashValueField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inject_key_prefix: {
      value: cdktf.stringToHclTerraform(struct!.injectKeyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_auto_typecast_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoTypecastEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_renew_record_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isRenewRecordEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_ruby_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isRubyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keepKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
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
    params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.params),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    remove_key_name_field: {
      value: cdktf.booleanToHclTerraform(struct!.removeKeyNameField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    renew_time_key: {
      value: cdktf.stringToHclTerraform(struct!.renewTimeKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replace_invalid_sequence: {
      value: cdktf.booleanToHclTerraform(struct!.replaceInvalidSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserve_data: {
      value: cdktf.booleanToHclTerraform(struct!.reserveData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserve_time: {
      value: cdktf.booleanToHclTerraform(struct!.reserveTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_list: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructToHclTerraform, true)(struct!.allowList),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructList",
    },
    custom_sections: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsToHclTerraform, true)(struct!.customSections),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsList",
    },
    deny_list: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructToHclTerraform, true)(struct!.denyList),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructList",
    },
    parser: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserList",
    },
    record_list: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructToHclTerraform, true)(struct!.recordList),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFilterType = this._customFilterType;
    }
    if (this._emitInvalidRecordToError !== undefined) {
      hasAnyValues = true;
      internalValueResult.emitInvalidRecordToError = this._emitInvalidRecordToError;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._hashValueField !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashValueField = this._hashValueField;
    }
    if (this._injectKeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.injectKeyPrefix = this._injectKeyPrefix;
    }
    if (this._isAutoTypecastEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoTypecastEnabled = this._isAutoTypecastEnabled;
    }
    if (this._isRenewRecordEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRenewRecordEnabled = this._isRenewRecordEnabled;
    }
    if (this._isRubyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRubyEnabled = this._isRubyEnabled;
    }
    if (this._keepKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepKeys = this._keepKeys;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._removeKeyNameField !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeyNameField = this._removeKeyNameField;
    }
    if (this._removeKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeKeys = this._removeKeys;
    }
    if (this._renewTimeKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewTimeKey = this._renewTimeKey;
    }
    if (this._replaceInvalidSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceInvalidSequence = this._replaceInvalidSequence;
    }
    if (this._reserveData !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveData = this._reserveData;
    }
    if (this._reserveTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserveTime = this._reserveTime;
    }
    if (this._allowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowList = this._allowList?.internalValue;
    }
    if (this._customSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSections = this._customSections?.internalValue;
    }
    if (this._denyList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyList = this._denyList?.internalValue;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    if (this._recordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordList = this._recordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customFilterType = undefined;
      this._emitInvalidRecordToError = undefined;
      this._filterType = undefined;
      this._hashValueField = undefined;
      this._injectKeyPrefix = undefined;
      this._isAutoTypecastEnabled = undefined;
      this._isRenewRecordEnabled = undefined;
      this._isRubyEnabled = undefined;
      this._keepKeys = undefined;
      this._keyName = undefined;
      this._name = undefined;
      this._params = undefined;
      this._removeKeyNameField = undefined;
      this._removeKeys = undefined;
      this._renewTimeKey = undefined;
      this._replaceInvalidSequence = undefined;
      this._reserveData = undefined;
      this._reserveTime = undefined;
      this._allowList.internalValue = undefined;
      this._customSections.internalValue = undefined;
      this._denyList.internalValue = undefined;
      this._parser.internalValue = undefined;
      this._recordList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customFilterType = value.customFilterType;
      this._emitInvalidRecordToError = value.emitInvalidRecordToError;
      this._filterType = value.filterType;
      this._hashValueField = value.hashValueField;
      this._injectKeyPrefix = value.injectKeyPrefix;
      this._isAutoTypecastEnabled = value.isAutoTypecastEnabled;
      this._isRenewRecordEnabled = value.isRenewRecordEnabled;
      this._isRubyEnabled = value.isRubyEnabled;
      this._keepKeys = value.keepKeys;
      this._keyName = value.keyName;
      this._name = value.name;
      this._params = value.params;
      this._removeKeyNameField = value.removeKeyNameField;
      this._removeKeys = value.removeKeys;
      this._renewTimeKey = value.renewTimeKey;
      this._replaceInvalidSequence = value.replaceInvalidSequence;
      this._reserveData = value.reserveData;
      this._reserveTime = value.reserveTime;
      this._allowList.internalValue = value.allowList;
      this._customSections.internalValue = value.customSections;
      this._denyList.internalValue = value.denyList;
      this._parser.internalValue = value.parser;
      this._recordList.internalValue = value.recordList;
    }
  }

  // custom_filter_type - computed: true, optional: true, required: false
  private _customFilterType?: string; 
  public get customFilterType() {
    return this.getStringAttribute('custom_filter_type');
  }
  public set customFilterType(value: string) {
    this._customFilterType = value;
  }
  public resetCustomFilterType() {
    this._customFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFilterTypeInput() {
    return this._customFilterType;
  }

  // emit_invalid_record_to_error - computed: true, optional: true, required: false
  private _emitInvalidRecordToError?: boolean | cdktf.IResolvable; 
  public get emitInvalidRecordToError() {
    return this.getBooleanAttribute('emit_invalid_record_to_error');
  }
  public set emitInvalidRecordToError(value: boolean | cdktf.IResolvable) {
    this._emitInvalidRecordToError = value;
  }
  public resetEmitInvalidRecordToError() {
    this._emitInvalidRecordToError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emitInvalidRecordToErrorInput() {
    return this._emitInvalidRecordToError;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // hash_value_field - computed: true, optional: true, required: false
  private _hashValueField?: string; 
  public get hashValueField() {
    return this.getStringAttribute('hash_value_field');
  }
  public set hashValueField(value: string) {
    this._hashValueField = value;
  }
  public resetHashValueField() {
    this._hashValueField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashValueFieldInput() {
    return this._hashValueField;
  }

  // inject_key_prefix - computed: true, optional: true, required: false
  private _injectKeyPrefix?: string; 
  public get injectKeyPrefix() {
    return this.getStringAttribute('inject_key_prefix');
  }
  public set injectKeyPrefix(value: string) {
    this._injectKeyPrefix = value;
  }
  public resetInjectKeyPrefix() {
    this._injectKeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get injectKeyPrefixInput() {
    return this._injectKeyPrefix;
  }

  // is_auto_typecast_enabled - computed: true, optional: true, required: false
  private _isAutoTypecastEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoTypecastEnabled() {
    return this.getBooleanAttribute('is_auto_typecast_enabled');
  }
  public set isAutoTypecastEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoTypecastEnabled = value;
  }
  public resetIsAutoTypecastEnabled() {
    this._isAutoTypecastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoTypecastEnabledInput() {
    return this._isAutoTypecastEnabled;
  }

  // is_renew_record_enabled - computed: true, optional: true, required: false
  private _isRenewRecordEnabled?: boolean | cdktf.IResolvable; 
  public get isRenewRecordEnabled() {
    return this.getBooleanAttribute('is_renew_record_enabled');
  }
  public set isRenewRecordEnabled(value: boolean | cdktf.IResolvable) {
    this._isRenewRecordEnabled = value;
  }
  public resetIsRenewRecordEnabled() {
    this._isRenewRecordEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRenewRecordEnabledInput() {
    return this._isRenewRecordEnabled;
  }

  // is_ruby_enabled - computed: true, optional: true, required: false
  private _isRubyEnabled?: boolean | cdktf.IResolvable; 
  public get isRubyEnabled() {
    return this.getBooleanAttribute('is_ruby_enabled');
  }
  public set isRubyEnabled(value: boolean | cdktf.IResolvable) {
    this._isRubyEnabled = value;
  }
  public resetIsRubyEnabled() {
    this._isRubyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRubyEnabledInput() {
    return this._isRubyEnabled;
  }

  // keep_keys - computed: true, optional: true, required: false
  private _keepKeys?: string[]; 
  public get keepKeys() {
    return this.getListAttribute('keep_keys');
  }
  public set keepKeys(value: string[]) {
    this._keepKeys = value;
  }
  public resetKeepKeys() {
    this._keepKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepKeysInput() {
    return this._keepKeys;
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
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

  // params - computed: true, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // remove_key_name_field - computed: true, optional: true, required: false
  private _removeKeyNameField?: boolean | cdktf.IResolvable; 
  public get removeKeyNameField() {
    return this.getBooleanAttribute('remove_key_name_field');
  }
  public set removeKeyNameField(value: boolean | cdktf.IResolvable) {
    this._removeKeyNameField = value;
  }
  public resetRemoveKeyNameField() {
    this._removeKeyNameField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeyNameFieldInput() {
    return this._removeKeyNameField;
  }

  // remove_keys - computed: true, optional: true, required: false
  private _removeKeys?: string[]; 
  public get removeKeys() {
    return this.getListAttribute('remove_keys');
  }
  public set removeKeys(value: string[]) {
    this._removeKeys = value;
  }
  public resetRemoveKeys() {
    this._removeKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeKeysInput() {
    return this._removeKeys;
  }

  // renew_time_key - computed: true, optional: true, required: false
  private _renewTimeKey?: string; 
  public get renewTimeKey() {
    return this.getStringAttribute('renew_time_key');
  }
  public set renewTimeKey(value: string) {
    this._renewTimeKey = value;
  }
  public resetRenewTimeKey() {
    this._renewTimeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewTimeKeyInput() {
    return this._renewTimeKey;
  }

  // replace_invalid_sequence - computed: true, optional: true, required: false
  private _replaceInvalidSequence?: boolean | cdktf.IResolvable; 
  public get replaceInvalidSequence() {
    return this.getBooleanAttribute('replace_invalid_sequence');
  }
  public set replaceInvalidSequence(value: boolean | cdktf.IResolvable) {
    this._replaceInvalidSequence = value;
  }
  public resetReplaceInvalidSequence() {
    this._replaceInvalidSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidSequenceInput() {
    return this._replaceInvalidSequence;
  }

  // reserve_data - computed: true, optional: true, required: false
  private _reserveData?: boolean | cdktf.IResolvable; 
  public get reserveData() {
    return this.getBooleanAttribute('reserve_data');
  }
  public set reserveData(value: boolean | cdktf.IResolvable) {
    this._reserveData = value;
  }
  public resetReserveData() {
    this._reserveData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveDataInput() {
    return this._reserveData;
  }

  // reserve_time - computed: true, optional: true, required: false
  private _reserveTime?: boolean | cdktf.IResolvable; 
  public get reserveTime() {
    return this.getBooleanAttribute('reserve_time');
  }
  public set reserveTime(value: boolean | cdktf.IResolvable) {
    this._reserveTime = value;
  }
  public resetReserveTime() {
    this._reserveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveTimeInput() {
    return this._reserveTime;
  }

  // allow_list - computed: false, optional: true, required: false
  private _allowList = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStructList(this, "allow_list", false);
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterAllowListStruct[] | cdktf.IResolvable) {
    this._allowList.internalValue = value;
  }
  public resetAllowList() {
    this._allowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // custom_sections - computed: false, optional: true, required: false
  private _customSections = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSectionsList(this, "custom_sections", false);
  public get customSections() {
    return this._customSections;
  }
  public putCustomSections(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterCustomSections[] | cdktf.IResolvable) {
    this._customSections.internalValue = value;
  }
  public resetCustomSections() {
    this._customSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSectionsInput() {
    return this._customSections.internalValue;
  }

  // deny_list - computed: false, optional: true, required: false
  private _denyList = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStructList(this, "deny_list", false);
  public get denyList() {
    return this._denyList;
  }
  public putDenyList(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterDenyListStruct[] | cdktf.IResolvable) {
    this._denyList.internalValue = value;
  }
  public resetDenyList() {
    this._denyList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyListInput() {
    return this._denyList.internalValue;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }

  // record_list - computed: false, optional: true, required: false
  private _recordList = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStructList(this, "record_list", false);
  public get recordList() {
    return this._recordList;
  }
  public putRecordList(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterRecordListStruct[] | cdktf.IResolvable) {
    this._recordList.internalValue = value;
  }
  public resetRecordList() {
    this._recordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordListInput() {
    return this._recordList.internalValue;
  }
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterList extends cdktf.ComplexList {
  public internalValue? : LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter[] | cdktf.IResolvable

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
  public get(index: number): LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterOutputReference {
    return new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoggingUnifiedAgentConfigurationServiceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#configuration_type LoggingUnifiedAgentConfiguration#configuration_type}
  */
  readonly configurationType: string;
  /**
  * application_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#application_configurations LoggingUnifiedAgentConfiguration#application_configurations}
  */
  readonly applicationConfigurations?: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations[] | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#destination LoggingUnifiedAgentConfiguration#destination}
  */
  readonly destination?: LoggingUnifiedAgentConfigurationServiceConfigurationDestination;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#sources LoggingUnifiedAgentConfiguration#sources}
  */
  readonly sources?: LoggingUnifiedAgentConfigurationServiceConfigurationSources[] | cdktf.IResolvable;
  /**
  * unified_agent_configuration_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#unified_agent_configuration_filter LoggingUnifiedAgentConfiguration#unified_agent_configuration_filter}
  */
  readonly unifiedAgentConfigurationFilter?: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter[] | cdktf.IResolvable;
}

export function loggingUnifiedAgentConfigurationServiceConfigurationToTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationOutputReference | LoggingUnifiedAgentConfigurationServiceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_type: cdktf.stringToTerraform(struct!.configurationType),
    application_configurations: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsToTerraform, true)(struct!.applicationConfigurations),
    destination: loggingUnifiedAgentConfigurationServiceConfigurationDestinationToTerraform(struct!.destination),
    sources: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationSourcesToTerraform, true)(struct!.sources),
    unified_agent_configuration_filter: cdktf.listMapper(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterToTerraform, true)(struct!.unifiedAgentConfigurationFilter),
  }
}


export function loggingUnifiedAgentConfigurationServiceConfigurationToHclTerraform(struct?: LoggingUnifiedAgentConfigurationServiceConfigurationOutputReference | LoggingUnifiedAgentConfigurationServiceConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_configurations: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsToHclTerraform, true)(struct!.applicationConfigurations),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsList",
    },
    destination: {
      value: loggingUnifiedAgentConfigurationServiceConfigurationDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationDestinationList",
    },
    sources: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationSourcesList",
    },
    unified_agent_configuration_filter: {
      value: cdktf.listMapperHcl(loggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterToHclTerraform, true)(struct!.unifiedAgentConfigurationFilter),
      isBlock: true,
      type: "list",
      storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoggingUnifiedAgentConfigurationServiceConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationServiceConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._applicationConfigurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationConfigurations = this._applicationConfigurations?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._unifiedAgentConfigurationFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unifiedAgentConfigurationFilter = this._unifiedAgentConfigurationFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationServiceConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationType = undefined;
      this._applicationConfigurations.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._unifiedAgentConfigurationFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationType = value.configurationType;
      this._applicationConfigurations.internalValue = value.applicationConfigurations;
      this._destination.internalValue = value.destination;
      this._sources.internalValue = value.sources;
      this._unifiedAgentConfigurationFilter.internalValue = value.unifiedAgentConfigurationFilter;
    }
  }

  // configuration_type - computed: false, optional: false, required: true
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // application_configurations - computed: false, optional: true, required: false
  private _applicationConfigurations = new LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurationsList(this, "application_configurations", false);
  public get applicationConfigurations() {
    return this._applicationConfigurations;
  }
  public putApplicationConfigurations(value: LoggingUnifiedAgentConfigurationServiceConfigurationApplicationConfigurations[] | cdktf.IResolvable) {
    this._applicationConfigurations.internalValue = value;
  }
  public resetApplicationConfigurations() {
    this._applicationConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigurationsInput() {
    return this._applicationConfigurations.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new LoggingUnifiedAgentConfigurationServiceConfigurationDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: LoggingUnifiedAgentConfigurationServiceConfigurationDestination) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new LoggingUnifiedAgentConfigurationServiceConfigurationSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: LoggingUnifiedAgentConfigurationServiceConfigurationSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // unified_agent_configuration_filter - computed: false, optional: true, required: false
  private _unifiedAgentConfigurationFilter = new LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilterList(this, "unified_agent_configuration_filter", false);
  public get unifiedAgentConfigurationFilter() {
    return this._unifiedAgentConfigurationFilter;
  }
  public putUnifiedAgentConfigurationFilter(value: LoggingUnifiedAgentConfigurationServiceConfigurationUnifiedAgentConfigurationFilter[] | cdktf.IResolvable) {
    this._unifiedAgentConfigurationFilter.internalValue = value;
  }
  public resetUnifiedAgentConfigurationFilter() {
    this._unifiedAgentConfigurationFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unifiedAgentConfigurationFilterInput() {
    return this._unifiedAgentConfigurationFilter.internalValue;
  }
}
export interface LoggingUnifiedAgentConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#create LoggingUnifiedAgentConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#delete LoggingUnifiedAgentConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#update LoggingUnifiedAgentConfiguration#update}
  */
  readonly update?: string;
}

export function loggingUnifiedAgentConfigurationTimeoutsToTerraform(struct?: LoggingUnifiedAgentConfigurationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function loggingUnifiedAgentConfigurationTimeoutsToHclTerraform(struct?: LoggingUnifiedAgentConfigurationTimeouts | cdktf.IResolvable): any {
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

export class LoggingUnifiedAgentConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoggingUnifiedAgentConfigurationTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoggingUnifiedAgentConfigurationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration oci_logging_unified_agent_configuration}
*/
export class LoggingUnifiedAgentConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_logging_unified_agent_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LoggingUnifiedAgentConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LoggingUnifiedAgentConfiguration to import
  * @param importFromId The id of the existing LoggingUnifiedAgentConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LoggingUnifiedAgentConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_logging_unified_agent_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/logging_unified_agent_configuration oci_logging_unified_agent_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingUnifiedAgentConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: LoggingUnifiedAgentConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_logging_unified_agent_configuration',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._groupAssociation.internalValue = config.groupAssociation;
    this._serviceConfiguration.internalValue = config.serviceConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // configuration_state - computed: true, optional: false, required: false
  public get configurationState() {
    return this.getStringAttribute('configuration_state');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_last_modified - computed: true, optional: false, required: false
  public get timeLastModified() {
    return this.getStringAttribute('time_last_modified');
  }

  // group_association - computed: false, optional: true, required: false
  private _groupAssociation = new LoggingUnifiedAgentConfigurationGroupAssociationOutputReference(this, "group_association");
  public get groupAssociation() {
    return this._groupAssociation;
  }
  public putGroupAssociation(value: LoggingUnifiedAgentConfigurationGroupAssociation) {
    this._groupAssociation.internalValue = value;
  }
  public resetGroupAssociation() {
    this._groupAssociation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAssociationInput() {
    return this._groupAssociation.internalValue;
  }

  // service_configuration - computed: false, optional: false, required: true
  private _serviceConfiguration = new LoggingUnifiedAgentConfigurationServiceConfigurationOutputReference(this, "service_configuration");
  public get serviceConfiguration() {
    return this._serviceConfiguration;
  }
  public putServiceConfiguration(value: LoggingUnifiedAgentConfigurationServiceConfiguration) {
    this._serviceConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigurationInput() {
    return this._serviceConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoggingUnifiedAgentConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoggingUnifiedAgentConfigurationTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      group_association: loggingUnifiedAgentConfigurationGroupAssociationToTerraform(this._groupAssociation.internalValue),
      service_configuration: loggingUnifiedAgentConfigurationServiceConfigurationToTerraform(this._serviceConfiguration.internalValue),
      timeouts: loggingUnifiedAgentConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_association: {
        value: loggingUnifiedAgentConfigurationGroupAssociationToHclTerraform(this._groupAssociation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingUnifiedAgentConfigurationGroupAssociationList",
      },
      service_configuration: {
        value: loggingUnifiedAgentConfigurationServiceConfigurationToHclTerraform(this._serviceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LoggingUnifiedAgentConfigurationServiceConfigurationList",
      },
      timeouts: {
        value: loggingUnifiedAgentConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoggingUnifiedAgentConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
