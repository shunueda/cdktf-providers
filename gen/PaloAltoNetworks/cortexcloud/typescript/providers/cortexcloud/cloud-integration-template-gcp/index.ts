// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIntegrationTemplateGcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Define which additional security capabilities to enable. 
  * 
  * ~>**NOTE** that adding additional capabilities typically requires additional cloud provider permissions. For more information, refer to the [Cortex Cloud Posture Management documentation](https://docs-cortex.paloaltonetworks.com/r/Cortex-CLOUD/Cortex-Cloud-Posture-Management-Documentation/Cloud-service-provider-permissions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#additional_capabilities CloudIntegrationTemplateGcp#additional_capabilities}
  */
  readonly additionalCapabilities?: CloudIntegrationTemplateGcpAdditionalCapabilities;
  /**
  * Configure log data collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#collection_configuration CloudIntegrationTemplateGcp#collection_configuration}
  */
  readonly collectionConfiguration?: CloudIntegrationTemplateGcpCollectionConfiguration;
  /**
  * Tags applied to any new resource created by Cortex Cloud in the cloud environment.
  * 
  * The tag `managed_by` with the value `paloaltonetworks` will be applied by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#custom_resources_tags CloudIntegrationTemplateGcp#custom_resources_tags}
  */
  readonly customResourcesTags?: CloudIntegrationTemplateGcpCustomResourcesTags[] | cdktf.IResolvable;
  /**
  * The name of the integration template. When the template is executed, integrations will appear in the console with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#instance_name CloudIntegrationTemplateGcp#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The ID of the outpost that will be used for scanning. Must be configured if `scan_mode` is set to `OUTPOST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#outpost_id CloudIntegrationTemplateGcp#outpost_id}
  */
  readonly outpostId?: string;
  /**
  * Define what infrastructure the integration will use to scan cloud workloads. If set to `MANAGED`, scanning will be done in the Cortex Cloud environment. If set to `OUTPOST`, scanning will be done on infrastructure deployed to a cloud account owned by you. Possible values are: `MANAGED`, `OUTPOST`. 
  * 
  * ~>**NOTE** Scanning with an outpost may require additional CSP permissions and may incur additional costs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#scan_mode CloudIntegrationTemplateGcp#scan_mode}
  */
  readonly scanMode: string;
  /**
  * Define the scope for this integration instance. Possible values are: `ACCOUNT`, `ACCOUNT_GROUP`, `ORGANIZATION`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#scope CloudIntegrationTemplateGcp#scope}
  */
  readonly scope: string;
  /**
  * Define the scope of scans by including/excluding projects or regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#scope_modifications CloudIntegrationTemplateGcp#scope_modifications}
  */
  readonly scopeModifications?: CloudIntegrationTemplateGcpScopeModifications;
}
export interface CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptions {
  /**
  * Number of days within which the tags on a registry image must have been created or updated for the image to be scanned. Minimum value is 0 and maximum value is 90. Cannot be configured if `type` is not set to `TAGS_MODIFIED_DAYS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#last_days CloudIntegrationTemplateGcp#last_days}
  */
  readonly lastDays?: number;
  /**
  * Type of registry scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#type CloudIntegrationTemplateGcp#type}
  */
  readonly type: string;
}

export function cloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptionsToTerraform(struct?: CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    last_days: cdktf.numberToTerraform(struct!.lastDays),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptionsToHclTerraform(struct?: CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    last_days: {
      value: cdktf.numberToHclTerraform(struct!.lastDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lastDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastDays = this._lastDays;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lastDays = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lastDays = value.lastDays;
      this._type = value.type;
    }
  }

  // last_days - computed: true, optional: true, required: false
  private _lastDays?: number; 
  public get lastDays() {
    return this.getNumberAttribute('last_days');
  }
  public set lastDays(value: number) {
    this._lastDays = value;
  }
  public resetLastDays() {
    this._lastDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastDaysInput() {
    return this._lastDays;
  }

  // type - computed: true, optional: false, required: true
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
}
export interface CloudIntegrationTemplateGcpAdditionalCapabilities {
  /**
  * Whether to enable agentless disk scanning to remotely detect and remediate vulnerabilities during the development lifecycle. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#agentless_disk_scanning CloudIntegrationTemplateGcp#agentless_disk_scanning}
  */
  readonly agentlessDiskScanning?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable data security posture management, an agentless data security scanner that discovers, classifies, protects, and governs sensitive data. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#data_security_posture_management CloudIntegrationTemplateGcp#data_security_posture_management}
  */
  readonly dataSecurityPostureManagement?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable registry scanning, a container registry scanner that scans registry images for vulnerabilities, malware, and secrets. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#registry_scanning CloudIntegrationTemplateGcp#registry_scanning}
  */
  readonly registryScanning?: boolean | cdktf.IResolvable;
  /**
  * Additional configuration options forregistry scanning. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#registry_scanning_options CloudIntegrationTemplateGcp#registry_scanning_options}
  */
  readonly registryScanningOptions?: CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptions;
  /**
  * Whether to enable agentless disk scanning to remotely detect and remediate vulnerabilities during the development lifecycle. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#serverless_scanning CloudIntegrationTemplateGcp#serverless_scanning}
  */
  readonly serverlessScanning?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable XSIAM analytics to analyze your endpoint data to develop a baseline and raise Analytics and Analytics BIOC alerts when anomalies and malicious behaviors are detected. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#xsiam_analytics CloudIntegrationTemplateGcp#xsiam_analytics}
  */
  readonly xsiamAnalytics?: boolean | cdktf.IResolvable;
}

export function cloudIntegrationTemplateGcpAdditionalCapabilitiesToTerraform(struct?: CloudIntegrationTemplateGcpAdditionalCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agentless_disk_scanning: cdktf.booleanToTerraform(struct!.agentlessDiskScanning),
    data_security_posture_management: cdktf.booleanToTerraform(struct!.dataSecurityPostureManagement),
    registry_scanning: cdktf.booleanToTerraform(struct!.registryScanning),
    registry_scanning_options: cloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptionsToTerraform(struct!.registryScanningOptions),
    serverless_scanning: cdktf.booleanToTerraform(struct!.serverlessScanning),
    xsiam_analytics: cdktf.booleanToTerraform(struct!.xsiamAnalytics),
  }
}


export function cloudIntegrationTemplateGcpAdditionalCapabilitiesToHclTerraform(struct?: CloudIntegrationTemplateGcpAdditionalCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agentless_disk_scanning: {
      value: cdktf.booleanToHclTerraform(struct!.agentlessDiskScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_security_posture_management: {
      value: cdktf.booleanToHclTerraform(struct!.dataSecurityPostureManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry_scanning: {
      value: cdktf.booleanToHclTerraform(struct!.registryScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry_scanning_options: {
      value: cloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptionsToHclTerraform(struct!.registryScanningOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptions",
    },
    serverless_scanning: {
      value: cdktf.booleanToHclTerraform(struct!.serverlessScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xsiam_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.xsiamAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIntegrationTemplateGcpAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIntegrationTemplateGcpAdditionalCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentlessDiskScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentlessDiskScanning = this._agentlessDiskScanning;
    }
    if (this._dataSecurityPostureManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecurityPostureManagement = this._dataSecurityPostureManagement;
    }
    if (this._registryScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryScanning = this._registryScanning;
    }
    if (this._registryScanningOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryScanningOptions = this._registryScanningOptions?.internalValue;
    }
    if (this._serverlessScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverlessScanning = this._serverlessScanning;
    }
    if (this._xsiamAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.xsiamAnalytics = this._xsiamAnalytics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIntegrationTemplateGcpAdditionalCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentlessDiskScanning = undefined;
      this._dataSecurityPostureManagement = undefined;
      this._registryScanning = undefined;
      this._registryScanningOptions.internalValue = undefined;
      this._serverlessScanning = undefined;
      this._xsiamAnalytics = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentlessDiskScanning = value.agentlessDiskScanning;
      this._dataSecurityPostureManagement = value.dataSecurityPostureManagement;
      this._registryScanning = value.registryScanning;
      this._registryScanningOptions.internalValue = value.registryScanningOptions;
      this._serverlessScanning = value.serverlessScanning;
      this._xsiamAnalytics = value.xsiamAnalytics;
    }
  }

  // agentless_disk_scanning - computed: true, optional: true, required: false
  private _agentlessDiskScanning?: boolean | cdktf.IResolvable; 
  public get agentlessDiskScanning() {
    return this.getBooleanAttribute('agentless_disk_scanning');
  }
  public set agentlessDiskScanning(value: boolean | cdktf.IResolvable) {
    this._agentlessDiskScanning = value;
  }
  public resetAgentlessDiskScanning() {
    this._agentlessDiskScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentlessDiskScanningInput() {
    return this._agentlessDiskScanning;
  }

  // data_security_posture_management - computed: true, optional: true, required: false
  private _dataSecurityPostureManagement?: boolean | cdktf.IResolvable; 
  public get dataSecurityPostureManagement() {
    return this.getBooleanAttribute('data_security_posture_management');
  }
  public set dataSecurityPostureManagement(value: boolean | cdktf.IResolvable) {
    this._dataSecurityPostureManagement = value;
  }
  public resetDataSecurityPostureManagement() {
    this._dataSecurityPostureManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecurityPostureManagementInput() {
    return this._dataSecurityPostureManagement;
  }

  // registry_scanning - computed: true, optional: true, required: false
  private _registryScanning?: boolean | cdktf.IResolvable; 
  public get registryScanning() {
    return this.getBooleanAttribute('registry_scanning');
  }
  public set registryScanning(value: boolean | cdktf.IResolvable) {
    this._registryScanning = value;
  }
  public resetRegistryScanning() {
    this._registryScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryScanningInput() {
    return this._registryScanning;
  }

  // registry_scanning_options - computed: true, optional: true, required: false
  private _registryScanningOptions = new CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptionsOutputReference(this, "registry_scanning_options");
  public get registryScanningOptions() {
    return this._registryScanningOptions;
  }
  public putRegistryScanningOptions(value: CloudIntegrationTemplateGcpAdditionalCapabilitiesRegistryScanningOptions) {
    this._registryScanningOptions.internalValue = value;
  }
  public resetRegistryScanningOptions() {
    this._registryScanningOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryScanningOptionsInput() {
    return this._registryScanningOptions.internalValue;
  }

  // serverless_scanning - computed: true, optional: true, required: false
  private _serverlessScanning?: boolean | cdktf.IResolvable; 
  public get serverlessScanning() {
    return this.getBooleanAttribute('serverless_scanning');
  }
  public set serverlessScanning(value: boolean | cdktf.IResolvable) {
    this._serverlessScanning = value;
  }
  public resetServerlessScanning() {
    this._serverlessScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessScanningInput() {
    return this._serverlessScanning;
  }

  // xsiam_analytics - computed: true, optional: true, required: false
  private _xsiamAnalytics?: boolean | cdktf.IResolvable; 
  public get xsiamAnalytics() {
    return this.getBooleanAttribute('xsiam_analytics');
  }
  public set xsiamAnalytics(value: boolean | cdktf.IResolvable) {
    this._xsiamAnalytics = value;
  }
  public resetXsiamAnalytics() {
    this._xsiamAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xsiamAnalyticsInput() {
    return this._xsiamAnalytics;
  }
}
export interface CloudIntegrationTemplateGcpCollectionConfigurationAuditLogs {
  /**
  * Method of audit log collection. Default value is `AUTOMATED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#collection_method CloudIntegrationTemplateGcp#collection_method}
  */
  readonly collectionMethod?: string;
  /**
  * Whether to collect data events as part of audit log collection. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#data_events CloudIntegrationTemplateGcp#data_events}
  */
  readonly dataEvents?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable audit log collection. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#enabled CloudIntegrationTemplateGcp#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cloudIntegrationTemplateGcpCollectionConfigurationAuditLogsToTerraform(struct?: CloudIntegrationTemplateGcpCollectionConfigurationAuditLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_method: cdktf.stringToTerraform(struct!.collectionMethod),
    data_events: cdktf.booleanToTerraform(struct!.dataEvents),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cloudIntegrationTemplateGcpCollectionConfigurationAuditLogsToHclTerraform(struct?: CloudIntegrationTemplateGcpCollectionConfigurationAuditLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_method: {
      value: cdktf.stringToHclTerraform(struct!.collectionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_events: {
      value: cdktf.booleanToHclTerraform(struct!.dataEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIntegrationTemplateGcpCollectionConfigurationAuditLogsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIntegrationTemplateGcpCollectionConfigurationAuditLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionMethod = this._collectionMethod;
    }
    if (this._dataEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEvents = this._dataEvents;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIntegrationTemplateGcpCollectionConfigurationAuditLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectionMethod = undefined;
      this._dataEvents = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectionMethod = value.collectionMethod;
      this._dataEvents = value.dataEvents;
      this._enabled = value.enabled;
    }
  }

  // collection_method - computed: true, optional: true, required: false
  private _collectionMethod?: string; 
  public get collectionMethod() {
    return this.getStringAttribute('collection_method');
  }
  public set collectionMethod(value: string) {
    this._collectionMethod = value;
  }
  public resetCollectionMethod() {
    this._collectionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionMethodInput() {
    return this._collectionMethod;
  }

  // data_events - computed: true, optional: true, required: false
  private _dataEvents?: boolean | cdktf.IResolvable; 
  public get dataEvents() {
    return this.getBooleanAttribute('data_events');
  }
  public set dataEvents(value: boolean | cdktf.IResolvable) {
    this._dataEvents = value;
  }
  public resetDataEvents() {
    this._dataEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEventsInput() {
    return this._dataEvents;
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface CloudIntegrationTemplateGcpCollectionConfiguration {
  /**
  * Configuration for audit logs collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#audit_logs CloudIntegrationTemplateGcp#audit_logs}
  */
  readonly auditLogs: CloudIntegrationTemplateGcpCollectionConfigurationAuditLogs;
}

export function cloudIntegrationTemplateGcpCollectionConfigurationToTerraform(struct?: CloudIntegrationTemplateGcpCollectionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_logs: cloudIntegrationTemplateGcpCollectionConfigurationAuditLogsToTerraform(struct!.auditLogs),
  }
}


export function cloudIntegrationTemplateGcpCollectionConfigurationToHclTerraform(struct?: CloudIntegrationTemplateGcpCollectionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_logs: {
      value: cloudIntegrationTemplateGcpCollectionConfigurationAuditLogsToHclTerraform(struct!.auditLogs),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudIntegrationTemplateGcpCollectionConfigurationAuditLogs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIntegrationTemplateGcpCollectionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIntegrationTemplateGcpCollectionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditLogs = this._auditLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIntegrationTemplateGcpCollectionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditLogs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditLogs.internalValue = value.auditLogs;
    }
  }

  // audit_logs - computed: true, optional: false, required: true
  private _auditLogs = new CloudIntegrationTemplateGcpCollectionConfigurationAuditLogsOutputReference(this, "audit_logs");
  public get auditLogs() {
    return this._auditLogs;
  }
  public putAuditLogs(value: CloudIntegrationTemplateGcpCollectionConfigurationAuditLogs) {
    this._auditLogs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsInput() {
    return this._auditLogs.internalValue;
  }
}
export interface CloudIntegrationTemplateGcpCustomResourcesTags {
  /**
  * The tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#key CloudIntegrationTemplateGcp#key}
  */
  readonly key: string;
  /**
  * The tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#value CloudIntegrationTemplateGcp#value}
  */
  readonly value: string;
}

export function cloudIntegrationTemplateGcpCustomResourcesTagsToTerraform(struct?: CloudIntegrationTemplateGcpCustomResourcesTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudIntegrationTemplateGcpCustomResourcesTagsToHclTerraform(struct?: CloudIntegrationTemplateGcpCustomResourcesTags | cdktf.IResolvable): any {
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

export class CloudIntegrationTemplateGcpCustomResourcesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudIntegrationTemplateGcpCustomResourcesTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudIntegrationTemplateGcpCustomResourcesTags | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudIntegrationTemplateGcpCustomResourcesTagsList extends cdktf.ComplexList {
  public internalValue? : CloudIntegrationTemplateGcpCustomResourcesTags[] | cdktf.IResolvable

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
  public get(index: number): CloudIntegrationTemplateGcpCustomResourcesTagsOutputReference {
    return new CloudIntegrationTemplateGcpCustomResourcesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudIntegrationTemplateGcpScopeModificationsProjects {
  /**
  * Whether to enable this scope modification. Cannot be set to `true` if scope is set to `project`. If enabled, the `type` and `project_ids` attributes must be configured as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#enabled CloudIntegrationTemplateGcp#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Project IDs to include or exclude from scans. Cannot be configured if scope is set to `ACCOUNT`. If scope is set to `ORGANIZATION` or `ACCOUNT_GROUP` and enabled is set to `true`, it must be configured with at least 1 value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#project_ids CloudIntegrationTemplateGcp#project_ids}
  */
  readonly projectIds?: string[];
  /**
  * Whether the specified project IDs should be included in the scope or excluded from the scope. Must be configured if `enabled` is set to `true` and scope is not set to `ACCOUNT`. Possible values are: `INCLUDE`, `EXCLUDE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#type CloudIntegrationTemplateGcp#type}
  */
  readonly type?: string;
}

export function cloudIntegrationTemplateGcpScopeModificationsProjectsToTerraform(struct?: CloudIntegrationTemplateGcpScopeModificationsProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudIntegrationTemplateGcpScopeModificationsProjectsToHclTerraform(struct?: CloudIntegrationTemplateGcpScopeModificationsProjects | cdktf.IResolvable): any {
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
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIntegrationTemplateGcpScopeModificationsProjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIntegrationTemplateGcpScopeModificationsProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIntegrationTemplateGcpScopeModificationsProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._projectIds = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._projectIds = value.projectIds;
      this._type = value.type;
    }
  }

  // enabled - computed: true, optional: false, required: true
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

  // project_ids - computed: true, optional: true, required: false
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  public resetProjectIds() {
    this._projectIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CloudIntegrationTemplateGcpScopeModificationsRegions {
  /**
  * Whether to enable this scope modification. If set to `true`, the `type` and `regions` attributes must be configured as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#enabled CloudIntegrationTemplateGcp#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Regions to include or exclude from scans. Must be configured with at least 1 value if `enabled` is set to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#regions CloudIntegrationTemplateGcp#regions}
  */
  readonly regions?: string[];
  /**
  * Whether the specified regions should be included in the scope or excluded from the scope. Must be configured if `enabled` is set to `true`. Possible values are: `INCLUDE`, `EXCLUDE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#type CloudIntegrationTemplateGcp#type}
  */
  readonly type?: string;
}

export function cloudIntegrationTemplateGcpScopeModificationsRegionsToTerraform(struct?: CloudIntegrationTemplateGcpScopeModificationsRegions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudIntegrationTemplateGcpScopeModificationsRegionsToHclTerraform(struct?: CloudIntegrationTemplateGcpScopeModificationsRegions | cdktf.IResolvable): any {
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
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIntegrationTemplateGcpScopeModificationsRegionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIntegrationTemplateGcpScopeModificationsRegions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIntegrationTemplateGcpScopeModificationsRegions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._regions = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._regions = value.regions;
      this._type = value.type;
    }
  }

  // enabled - computed: true, optional: false, required: true
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

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CloudIntegrationTemplateGcpScopeModifications {
  /**
  * Configuration for project-level scope modifications for GCP integrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#projects CloudIntegrationTemplateGcp#projects}
  */
  readonly projects?: CloudIntegrationTemplateGcpScopeModificationsProjects;
  /**
  * TODO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#regions CloudIntegrationTemplateGcp#regions}
  */
  readonly regions?: CloudIntegrationTemplateGcpScopeModificationsRegions;
}

export function cloudIntegrationTemplateGcpScopeModificationsToTerraform(struct?: CloudIntegrationTemplateGcpScopeModifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    projects: cloudIntegrationTemplateGcpScopeModificationsProjectsToTerraform(struct!.projects),
    regions: cloudIntegrationTemplateGcpScopeModificationsRegionsToTerraform(struct!.regions),
  }
}


export function cloudIntegrationTemplateGcpScopeModificationsToHclTerraform(struct?: CloudIntegrationTemplateGcpScopeModifications | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    projects: {
      value: cloudIntegrationTemplateGcpScopeModificationsProjectsToHclTerraform(struct!.projects),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudIntegrationTemplateGcpScopeModificationsProjects",
    },
    regions: {
      value: cloudIntegrationTemplateGcpScopeModificationsRegionsToHclTerraform(struct!.regions),
      isBlock: true,
      type: "struct",
      storageClassType: "CloudIntegrationTemplateGcpScopeModificationsRegions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIntegrationTemplateGcpScopeModificationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIntegrationTemplateGcpScopeModifications | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    if (this._regions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIntegrationTemplateGcpScopeModifications | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projects.internalValue = undefined;
      this._regions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projects.internalValue = value.projects;
      this._regions.internalValue = value.regions;
    }
  }

  // projects - computed: true, optional: true, required: false
  private _projects = new CloudIntegrationTemplateGcpScopeModificationsProjectsOutputReference(this, "projects");
  public get projects() {
    return this._projects;
  }
  public putProjects(value: CloudIntegrationTemplateGcpScopeModificationsProjects) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }

  // regions - computed: true, optional: true, required: false
  private _regions = new CloudIntegrationTemplateGcpScopeModificationsRegionsOutputReference(this, "regions");
  public get regions() {
    return this._regions;
  }
  public putRegions(value: CloudIntegrationTemplateGcpScopeModificationsRegions) {
    this._regions.internalValue = value;
  }
  public resetRegions() {
    this._regions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp cortexcloud_cloud_integration_template_gcp}
*/
export class CloudIntegrationTemplateGcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud_cloud_integration_template_gcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudIntegrationTemplateGcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudIntegrationTemplateGcp to import
  * @param importFromId The id of the existing CloudIntegrationTemplateGcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudIntegrationTemplateGcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud_cloud_integration_template_gcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/cloud_integration_template_gcp cortexcloud_cloud_integration_template_gcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIntegrationTemplateGcpConfig
  */
  public constructor(scope: Construct, id: string, config: CloudIntegrationTemplateGcpConfig) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud_cloud_integration_template_gcp',
      terraformGeneratorMetadata: {
        providerName: 'cortexcloud',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalCapabilities.internalValue = config.additionalCapabilities;
    this._collectionConfiguration.internalValue = config.collectionConfiguration;
    this._customResourcesTags.internalValue = config.customResourcesTags;
    this._instanceName = config.instanceName;
    this._outpostId = config.outpostId;
    this._scanMode = config.scanMode;
    this._scope = config.scope;
    this._scopeModifications.internalValue = config.scopeModifications;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_capabilities - computed: true, optional: true, required: false
  private _additionalCapabilities = new CloudIntegrationTemplateGcpAdditionalCapabilitiesOutputReference(this, "additional_capabilities");
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }
  public putAdditionalCapabilities(value: CloudIntegrationTemplateGcpAdditionalCapabilities) {
    this._additionalCapabilities.internalValue = value;
  }
  public resetAdditionalCapabilities() {
    this._additionalCapabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCapabilitiesInput() {
    return this._additionalCapabilities.internalValue;
  }

  // collection_configuration - computed: true, optional: true, required: false
  private _collectionConfiguration = new CloudIntegrationTemplateGcpCollectionConfigurationOutputReference(this, "collection_configuration");
  public get collectionConfiguration() {
    return this._collectionConfiguration;
  }
  public putCollectionConfiguration(value: CloudIntegrationTemplateGcpCollectionConfiguration) {
    this._collectionConfiguration.internalValue = value;
  }
  public resetCollectionConfiguration() {
    this._collectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionConfigurationInput() {
    return this._collectionConfiguration.internalValue;
  }

  // custom_resources_tags - computed: false, optional: true, required: false
  private _customResourcesTags = new CloudIntegrationTemplateGcpCustomResourcesTagsList(this, "custom_resources_tags", true);
  public get customResourcesTags() {
    return this._customResourcesTags;
  }
  public putCustomResourcesTags(value: CloudIntegrationTemplateGcpCustomResourcesTags[] | cdktf.IResolvable) {
    this._customResourcesTags.internalValue = value;
  }
  public resetCustomResourcesTags() {
    this._customResourcesTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customResourcesTagsInput() {
    return this._customResourcesTags.internalValue;
  }

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // outpost_id - computed: true, optional: true, required: false
  private _outpostId?: string; 
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }
  public set outpostId(value: string) {
    this._outpostId = value;
  }
  public resetOutpostId() {
    this._outpostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outpostIdInput() {
    return this._outpostId;
  }

  // scan_mode - computed: false, optional: false, required: true
  private _scanMode?: string; 
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }
  public set scanMode(value: string) {
    this._scanMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scanModeInput() {
    return this._scanMode;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // scope_modifications - computed: true, optional: true, required: false
  private _scopeModifications = new CloudIntegrationTemplateGcpScopeModificationsOutputReference(this, "scope_modifications");
  public get scopeModifications() {
    return this._scopeModifications;
  }
  public putScopeModifications(value: CloudIntegrationTemplateGcpScopeModifications) {
    this._scopeModifications.internalValue = value;
  }
  public resetScopeModifications() {
    this._scopeModifications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeModificationsInput() {
    return this._scopeModifications.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // terraform_module_url - computed: true, optional: false, required: false
  public get terraformModuleUrl() {
    return this.getStringAttribute('terraform_module_url');
  }

  // tracking_guid - computed: true, optional: false, required: false
  public get trackingGuid() {
    return this.getStringAttribute('tracking_guid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_capabilities: cloudIntegrationTemplateGcpAdditionalCapabilitiesToTerraform(this._additionalCapabilities.internalValue),
      collection_configuration: cloudIntegrationTemplateGcpCollectionConfigurationToTerraform(this._collectionConfiguration.internalValue),
      custom_resources_tags: cdktf.listMapper(cloudIntegrationTemplateGcpCustomResourcesTagsToTerraform, false)(this._customResourcesTags.internalValue),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      outpost_id: cdktf.stringToTerraform(this._outpostId),
      scan_mode: cdktf.stringToTerraform(this._scanMode),
      scope: cdktf.stringToTerraform(this._scope),
      scope_modifications: cloudIntegrationTemplateGcpScopeModificationsToTerraform(this._scopeModifications.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_capabilities: {
        value: cloudIntegrationTemplateGcpAdditionalCapabilitiesToHclTerraform(this._additionalCapabilities.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudIntegrationTemplateGcpAdditionalCapabilities",
      },
      collection_configuration: {
        value: cloudIntegrationTemplateGcpCollectionConfigurationToHclTerraform(this._collectionConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudIntegrationTemplateGcpCollectionConfiguration",
      },
      custom_resources_tags: {
        value: cdktf.listMapperHcl(cloudIntegrationTemplateGcpCustomResourcesTagsToHclTerraform, false)(this._customResourcesTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudIntegrationTemplateGcpCustomResourcesTagsList",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outpost_id: {
        value: cdktf.stringToHclTerraform(this._outpostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scan_mode: {
        value: cdktf.stringToHclTerraform(this._scanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_modifications: {
        value: cloudIntegrationTemplateGcpScopeModificationsToHclTerraform(this._scopeModifications.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudIntegrationTemplateGcpScopeModifications",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
