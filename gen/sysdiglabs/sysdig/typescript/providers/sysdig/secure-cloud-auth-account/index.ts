// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureCloudAuthAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#enabled SecureCloudAuthAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#id SecureCloudAuthAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#provider_alias SecureCloudAuthAccount#provider_alias}
  */
  readonly providerAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#provider_id SecureCloudAuthAccount#provider_id}
  */
  readonly providerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#provider_partition SecureCloudAuthAccount#provider_partition}
  */
  readonly providerPartition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#provider_tenant_id SecureCloudAuthAccount#provider_tenant_id}
  */
  readonly providerTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#provider_type SecureCloudAuthAccount#provider_type}
  */
  readonly providerType: string;
  /**
  * component block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#component SecureCloudAuthAccount#component}
  */
  readonly component?: SecureCloudAuthAccountComponent[] | cdktf.IResolvable;
  /**
  * feature block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#feature SecureCloudAuthAccount#feature}
  */
  readonly feature?: SecureCloudAuthAccountFeature[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#timeouts SecureCloudAuthAccount#timeouts}
  */
  readonly timeouts?: SecureCloudAuthAccountTimeouts;
}
export interface SecureCloudAuthAccountComponent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#cloud_connector_metadata SecureCloudAuthAccount#cloud_connector_metadata}
  */
  readonly cloudConnectorMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#cloud_logs_metadata SecureCloudAuthAccount#cloud_logs_metadata}
  */
  readonly cloudLogsMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#crypto_key_metadata SecureCloudAuthAccount#crypto_key_metadata}
  */
  readonly cryptoKeyMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#event_bridge_metadata SecureCloudAuthAccount#event_bridge_metadata}
  */
  readonly eventBridgeMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#instance SecureCloudAuthAccount#instance}
  */
  readonly instance: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#service_principal_metadata SecureCloudAuthAccount#service_principal_metadata}
  */
  readonly servicePrincipalMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#trusted_role_metadata SecureCloudAuthAccount#trusted_role_metadata}
  */
  readonly trustedRoleMetadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#type SecureCloudAuthAccount#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#version SecureCloudAuthAccount#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#webhook_datasource_metadata SecureCloudAuthAccount#webhook_datasource_metadata}
  */
  readonly webhookDatasourceMetadata?: string;
}

export function secureCloudAuthAccountComponentToTerraform(struct?: SecureCloudAuthAccountComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_connector_metadata: cdktf.stringToTerraform(struct!.cloudConnectorMetadata),
    cloud_logs_metadata: cdktf.stringToTerraform(struct!.cloudLogsMetadata),
    crypto_key_metadata: cdktf.stringToTerraform(struct!.cryptoKeyMetadata),
    event_bridge_metadata: cdktf.stringToTerraform(struct!.eventBridgeMetadata),
    instance: cdktf.stringToTerraform(struct!.instance),
    service_principal_metadata: cdktf.stringToTerraform(struct!.servicePrincipalMetadata),
    trusted_role_metadata: cdktf.stringToTerraform(struct!.trustedRoleMetadata),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
    webhook_datasource_metadata: cdktf.stringToTerraform(struct!.webhookDatasourceMetadata),
  }
}


export function secureCloudAuthAccountComponentToHclTerraform(struct?: SecureCloudAuthAccountComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_connector_metadata: {
      value: cdktf.stringToHclTerraform(struct!.cloudConnectorMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_logs_metadata: {
      value: cdktf.stringToHclTerraform(struct!.cloudLogsMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_key_metadata: {
      value: cdktf.stringToHclTerraform(struct!.cryptoKeyMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_bridge_metadata: {
      value: cdktf.stringToHclTerraform(struct!.eventBridgeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal_metadata: {
      value: cdktf.stringToHclTerraform(struct!.servicePrincipalMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_role_metadata: {
      value: cdktf.stringToHclTerraform(struct!.trustedRoleMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_datasource_metadata: {
      value: cdktf.stringToHclTerraform(struct!.webhookDatasourceMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureCloudAuthAccountComponentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureCloudAuthAccountComponent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudConnectorMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudConnectorMetadata = this._cloudConnectorMetadata;
    }
    if (this._cloudLogsMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLogsMetadata = this._cloudLogsMetadata;
    }
    if (this._cryptoKeyMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoKeyMetadata = this._cryptoKeyMetadata;
    }
    if (this._eventBridgeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventBridgeMetadata = this._eventBridgeMetadata;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._servicePrincipalMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalMetadata = this._servicePrincipalMetadata;
    }
    if (this._trustedRoleMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedRoleMetadata = this._trustedRoleMetadata;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._webhookDatasourceMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookDatasourceMetadata = this._webhookDatasourceMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureCloudAuthAccountComponent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudConnectorMetadata = undefined;
      this._cloudLogsMetadata = undefined;
      this._cryptoKeyMetadata = undefined;
      this._eventBridgeMetadata = undefined;
      this._instance = undefined;
      this._servicePrincipalMetadata = undefined;
      this._trustedRoleMetadata = undefined;
      this._type = undefined;
      this._version = undefined;
      this._webhookDatasourceMetadata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudConnectorMetadata = value.cloudConnectorMetadata;
      this._cloudLogsMetadata = value.cloudLogsMetadata;
      this._cryptoKeyMetadata = value.cryptoKeyMetadata;
      this._eventBridgeMetadata = value.eventBridgeMetadata;
      this._instance = value.instance;
      this._servicePrincipalMetadata = value.servicePrincipalMetadata;
      this._trustedRoleMetadata = value.trustedRoleMetadata;
      this._type = value.type;
      this._version = value.version;
      this._webhookDatasourceMetadata = value.webhookDatasourceMetadata;
    }
  }

  // cloud_connector_metadata - computed: false, optional: true, required: false
  private _cloudConnectorMetadata?: string; 
  public get cloudConnectorMetadata() {
    return this.getStringAttribute('cloud_connector_metadata');
  }
  public set cloudConnectorMetadata(value: string) {
    this._cloudConnectorMetadata = value;
  }
  public resetCloudConnectorMetadata() {
    this._cloudConnectorMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConnectorMetadataInput() {
    return this._cloudConnectorMetadata;
  }

  // cloud_logs_metadata - computed: false, optional: true, required: false
  private _cloudLogsMetadata?: string; 
  public get cloudLogsMetadata() {
    return this.getStringAttribute('cloud_logs_metadata');
  }
  public set cloudLogsMetadata(value: string) {
    this._cloudLogsMetadata = value;
  }
  public resetCloudLogsMetadata() {
    this._cloudLogsMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLogsMetadataInput() {
    return this._cloudLogsMetadata;
  }

  // crypto_key_metadata - computed: false, optional: true, required: false
  private _cryptoKeyMetadata?: string; 
  public get cryptoKeyMetadata() {
    return this.getStringAttribute('crypto_key_metadata');
  }
  public set cryptoKeyMetadata(value: string) {
    this._cryptoKeyMetadata = value;
  }
  public resetCryptoKeyMetadata() {
    this._cryptoKeyMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyMetadataInput() {
    return this._cryptoKeyMetadata;
  }

  // event_bridge_metadata - computed: false, optional: true, required: false
  private _eventBridgeMetadata?: string; 
  public get eventBridgeMetadata() {
    return this.getStringAttribute('event_bridge_metadata');
  }
  public set eventBridgeMetadata(value: string) {
    this._eventBridgeMetadata = value;
  }
  public resetEventBridgeMetadata() {
    this._eventBridgeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventBridgeMetadataInput() {
    return this._eventBridgeMetadata;
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // service_principal_metadata - computed: false, optional: true, required: false
  private _servicePrincipalMetadata?: string; 
  public get servicePrincipalMetadata() {
    return this.getStringAttribute('service_principal_metadata');
  }
  public set servicePrincipalMetadata(value: string) {
    this._servicePrincipalMetadata = value;
  }
  public resetServicePrincipalMetadata() {
    this._servicePrincipalMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalMetadataInput() {
    return this._servicePrincipalMetadata;
  }

  // trusted_role_metadata - computed: false, optional: true, required: false
  private _trustedRoleMetadata?: string; 
  public get trustedRoleMetadata() {
    return this.getStringAttribute('trusted_role_metadata');
  }
  public set trustedRoleMetadata(value: string) {
    this._trustedRoleMetadata = value;
  }
  public resetTrustedRoleMetadata() {
    this._trustedRoleMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedRoleMetadataInput() {
    return this._trustedRoleMetadata;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // webhook_datasource_metadata - computed: false, optional: true, required: false
  private _webhookDatasourceMetadata?: string; 
  public get webhookDatasourceMetadata() {
    return this.getStringAttribute('webhook_datasource_metadata');
  }
  public set webhookDatasourceMetadata(value: string) {
    this._webhookDatasourceMetadata = value;
  }
  public resetWebhookDatasourceMetadata() {
    this._webhookDatasourceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookDatasourceMetadataInput() {
    return this._webhookDatasourceMetadata;
  }
}

export class SecureCloudAuthAccountComponentList extends cdktf.ComplexList {
  public internalValue? : SecureCloudAuthAccountComponent[] | cdktf.IResolvable

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
  public get(index: number): SecureCloudAuthAccountComponentOutputReference {
    return new SecureCloudAuthAccountComponentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureCloudAuthAccountFeatureMonitorCloudMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#components SecureCloudAuthAccount#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#enabled SecureCloudAuthAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function secureCloudAuthAccountFeatureMonitorCloudMetricsToTerraform(struct?: SecureCloudAuthAccountFeatureMonitorCloudMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function secureCloudAuthAccountFeatureMonitorCloudMetricsToHclTerraform(struct?: SecureCloudAuthAccountFeatureMonitorCloudMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SecureCloudAuthAccountFeatureMonitorCloudMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureCloudAuthAccountFeatureMonitorCloudMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureCloudAuthAccountFeatureMonitorCloudMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components = value.components;
      this._enabled = value.enabled;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SecureCloudAuthAccountFeatureMonitorCloudMetricsList extends cdktf.ComplexList {
  public internalValue? : SecureCloudAuthAccountFeatureMonitorCloudMetrics[] | cdktf.IResolvable

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
  public get(index: number): SecureCloudAuthAccountFeatureMonitorCloudMetricsOutputReference {
    return new SecureCloudAuthAccountFeatureMonitorCloudMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureCloudAuthAccountFeatureSecureAgentlessScanning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#components SecureCloudAuthAccount#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#enabled SecureCloudAuthAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function secureCloudAuthAccountFeatureSecureAgentlessScanningToTerraform(struct?: SecureCloudAuthAccountFeatureSecureAgentlessScanning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function secureCloudAuthAccountFeatureSecureAgentlessScanningToHclTerraform(struct?: SecureCloudAuthAccountFeatureSecureAgentlessScanning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SecureCloudAuthAccountFeatureSecureAgentlessScanningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureCloudAuthAccountFeatureSecureAgentlessScanning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureCloudAuthAccountFeatureSecureAgentlessScanning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components = value.components;
      this._enabled = value.enabled;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SecureCloudAuthAccountFeatureSecureAgentlessScanningList extends cdktf.ComplexList {
  public internalValue? : SecureCloudAuthAccountFeatureSecureAgentlessScanning[] | cdktf.IResolvable

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
  public get(index: number): SecureCloudAuthAccountFeatureSecureAgentlessScanningOutputReference {
    return new SecureCloudAuthAccountFeatureSecureAgentlessScanningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureCloudAuthAccountFeatureSecureConfigPosture {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#components SecureCloudAuthAccount#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#enabled SecureCloudAuthAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function secureCloudAuthAccountFeatureSecureConfigPostureToTerraform(struct?: SecureCloudAuthAccountFeatureSecureConfigPosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function secureCloudAuthAccountFeatureSecureConfigPostureToHclTerraform(struct?: SecureCloudAuthAccountFeatureSecureConfigPosture | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SecureCloudAuthAccountFeatureSecureConfigPostureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureCloudAuthAccountFeatureSecureConfigPosture | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureCloudAuthAccountFeatureSecureConfigPosture | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components = value.components;
      this._enabled = value.enabled;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SecureCloudAuthAccountFeatureSecureConfigPostureList extends cdktf.ComplexList {
  public internalValue? : SecureCloudAuthAccountFeatureSecureConfigPosture[] | cdktf.IResolvable

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
  public get(index: number): SecureCloudAuthAccountFeatureSecureConfigPostureOutputReference {
    return new SecureCloudAuthAccountFeatureSecureConfigPostureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureCloudAuthAccountFeatureSecureIdentityEntitlement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#components SecureCloudAuthAccount#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#enabled SecureCloudAuthAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function secureCloudAuthAccountFeatureSecureIdentityEntitlementToTerraform(struct?: SecureCloudAuthAccountFeatureSecureIdentityEntitlement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function secureCloudAuthAccountFeatureSecureIdentityEntitlementToHclTerraform(struct?: SecureCloudAuthAccountFeatureSecureIdentityEntitlement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SecureCloudAuthAccountFeatureSecureIdentityEntitlementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureCloudAuthAccountFeatureSecureIdentityEntitlement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureCloudAuthAccountFeatureSecureIdentityEntitlement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components = value.components;
      this._enabled = value.enabled;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SecureCloudAuthAccountFeatureSecureIdentityEntitlementList extends cdktf.ComplexList {
  public internalValue? : SecureCloudAuthAccountFeatureSecureIdentityEntitlement[] | cdktf.IResolvable

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
  public get(index: number): SecureCloudAuthAccountFeatureSecureIdentityEntitlementOutputReference {
    return new SecureCloudAuthAccountFeatureSecureIdentityEntitlementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureCloudAuthAccountFeatureSecureThreatDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#components SecureCloudAuthAccount#components}
  */
  readonly components?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#enabled SecureCloudAuthAccount#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function secureCloudAuthAccountFeatureSecureThreatDetectionToTerraform(struct?: SecureCloudAuthAccountFeatureSecureThreatDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function secureCloudAuthAccountFeatureSecureThreatDetectionToHclTerraform(struct?: SecureCloudAuthAccountFeatureSecureThreatDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SecureCloudAuthAccountFeatureSecureThreatDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureCloudAuthAccountFeatureSecureThreatDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureCloudAuthAccountFeatureSecureThreatDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components = value.components;
      this._enabled = value.enabled;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class SecureCloudAuthAccountFeatureSecureThreatDetectionList extends cdktf.ComplexList {
  public internalValue? : SecureCloudAuthAccountFeatureSecureThreatDetection[] | cdktf.IResolvable

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
  public get(index: number): SecureCloudAuthAccountFeatureSecureThreatDetectionOutputReference {
    return new SecureCloudAuthAccountFeatureSecureThreatDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureCloudAuthAccountFeature {
  /**
  * monitor_cloud_metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#monitor_cloud_metrics SecureCloudAuthAccount#monitor_cloud_metrics}
  */
  readonly monitorCloudMetrics?: SecureCloudAuthAccountFeatureMonitorCloudMetrics[] | cdktf.IResolvable;
  /**
  * secure_agentless_scanning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#secure_agentless_scanning SecureCloudAuthAccount#secure_agentless_scanning}
  */
  readonly secureAgentlessScanning?: SecureCloudAuthAccountFeatureSecureAgentlessScanning[] | cdktf.IResolvable;
  /**
  * secure_config_posture block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#secure_config_posture SecureCloudAuthAccount#secure_config_posture}
  */
  readonly secureConfigPosture?: SecureCloudAuthAccountFeatureSecureConfigPosture[] | cdktf.IResolvable;
  /**
  * secure_identity_entitlement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#secure_identity_entitlement SecureCloudAuthAccount#secure_identity_entitlement}
  */
  readonly secureIdentityEntitlement?: SecureCloudAuthAccountFeatureSecureIdentityEntitlement[] | cdktf.IResolvable;
  /**
  * secure_threat_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#secure_threat_detection SecureCloudAuthAccount#secure_threat_detection}
  */
  readonly secureThreatDetection?: SecureCloudAuthAccountFeatureSecureThreatDetection[] | cdktf.IResolvable;
}

export function secureCloudAuthAccountFeatureToTerraform(struct?: SecureCloudAuthAccountFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitor_cloud_metrics: cdktf.listMapper(secureCloudAuthAccountFeatureMonitorCloudMetricsToTerraform, true)(struct!.monitorCloudMetrics),
    secure_agentless_scanning: cdktf.listMapper(secureCloudAuthAccountFeatureSecureAgentlessScanningToTerraform, true)(struct!.secureAgentlessScanning),
    secure_config_posture: cdktf.listMapper(secureCloudAuthAccountFeatureSecureConfigPostureToTerraform, true)(struct!.secureConfigPosture),
    secure_identity_entitlement: cdktf.listMapper(secureCloudAuthAccountFeatureSecureIdentityEntitlementToTerraform, true)(struct!.secureIdentityEntitlement),
    secure_threat_detection: cdktf.listMapper(secureCloudAuthAccountFeatureSecureThreatDetectionToTerraform, true)(struct!.secureThreatDetection),
  }
}


export function secureCloudAuthAccountFeatureToHclTerraform(struct?: SecureCloudAuthAccountFeature | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitor_cloud_metrics: {
      value: cdktf.listMapperHcl(secureCloudAuthAccountFeatureMonitorCloudMetricsToHclTerraform, true)(struct!.monitorCloudMetrics),
      isBlock: true,
      type: "set",
      storageClassType: "SecureCloudAuthAccountFeatureMonitorCloudMetricsList",
    },
    secure_agentless_scanning: {
      value: cdktf.listMapperHcl(secureCloudAuthAccountFeatureSecureAgentlessScanningToHclTerraform, true)(struct!.secureAgentlessScanning),
      isBlock: true,
      type: "set",
      storageClassType: "SecureCloudAuthAccountFeatureSecureAgentlessScanningList",
    },
    secure_config_posture: {
      value: cdktf.listMapperHcl(secureCloudAuthAccountFeatureSecureConfigPostureToHclTerraform, true)(struct!.secureConfigPosture),
      isBlock: true,
      type: "set",
      storageClassType: "SecureCloudAuthAccountFeatureSecureConfigPostureList",
    },
    secure_identity_entitlement: {
      value: cdktf.listMapperHcl(secureCloudAuthAccountFeatureSecureIdentityEntitlementToHclTerraform, true)(struct!.secureIdentityEntitlement),
      isBlock: true,
      type: "set",
      storageClassType: "SecureCloudAuthAccountFeatureSecureIdentityEntitlementList",
    },
    secure_threat_detection: {
      value: cdktf.listMapperHcl(secureCloudAuthAccountFeatureSecureThreatDetectionToHclTerraform, true)(struct!.secureThreatDetection),
      isBlock: true,
      type: "set",
      storageClassType: "SecureCloudAuthAccountFeatureSecureThreatDetectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureCloudAuthAccountFeatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecureCloudAuthAccountFeature | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitorCloudMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorCloudMetrics = this._monitorCloudMetrics?.internalValue;
    }
    if (this._secureAgentlessScanning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureAgentlessScanning = this._secureAgentlessScanning?.internalValue;
    }
    if (this._secureConfigPosture?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureConfigPosture = this._secureConfigPosture?.internalValue;
    }
    if (this._secureIdentityEntitlement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureIdentityEntitlement = this._secureIdentityEntitlement?.internalValue;
    }
    if (this._secureThreatDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureThreatDetection = this._secureThreatDetection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureCloudAuthAccountFeature | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitorCloudMetrics.internalValue = undefined;
      this._secureAgentlessScanning.internalValue = undefined;
      this._secureConfigPosture.internalValue = undefined;
      this._secureIdentityEntitlement.internalValue = undefined;
      this._secureThreatDetection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitorCloudMetrics.internalValue = value.monitorCloudMetrics;
      this._secureAgentlessScanning.internalValue = value.secureAgentlessScanning;
      this._secureConfigPosture.internalValue = value.secureConfigPosture;
      this._secureIdentityEntitlement.internalValue = value.secureIdentityEntitlement;
      this._secureThreatDetection.internalValue = value.secureThreatDetection;
    }
  }

  // monitor_cloud_metrics - computed: false, optional: true, required: false
  private _monitorCloudMetrics = new SecureCloudAuthAccountFeatureMonitorCloudMetricsList(this, "monitor_cloud_metrics", true);
  public get monitorCloudMetrics() {
    return this._monitorCloudMetrics;
  }
  public putMonitorCloudMetrics(value: SecureCloudAuthAccountFeatureMonitorCloudMetrics[] | cdktf.IResolvable) {
    this._monitorCloudMetrics.internalValue = value;
  }
  public resetMonitorCloudMetrics() {
    this._monitorCloudMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorCloudMetricsInput() {
    return this._monitorCloudMetrics.internalValue;
  }

  // secure_agentless_scanning - computed: false, optional: true, required: false
  private _secureAgentlessScanning = new SecureCloudAuthAccountFeatureSecureAgentlessScanningList(this, "secure_agentless_scanning", true);
  public get secureAgentlessScanning() {
    return this._secureAgentlessScanning;
  }
  public putSecureAgentlessScanning(value: SecureCloudAuthAccountFeatureSecureAgentlessScanning[] | cdktf.IResolvable) {
    this._secureAgentlessScanning.internalValue = value;
  }
  public resetSecureAgentlessScanning() {
    this._secureAgentlessScanning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAgentlessScanningInput() {
    return this._secureAgentlessScanning.internalValue;
  }

  // secure_config_posture - computed: false, optional: true, required: false
  private _secureConfigPosture = new SecureCloudAuthAccountFeatureSecureConfigPostureList(this, "secure_config_posture", true);
  public get secureConfigPosture() {
    return this._secureConfigPosture;
  }
  public putSecureConfigPosture(value: SecureCloudAuthAccountFeatureSecureConfigPosture[] | cdktf.IResolvable) {
    this._secureConfigPosture.internalValue = value;
  }
  public resetSecureConfigPosture() {
    this._secureConfigPosture.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureConfigPostureInput() {
    return this._secureConfigPosture.internalValue;
  }

  // secure_identity_entitlement - computed: false, optional: true, required: false
  private _secureIdentityEntitlement = new SecureCloudAuthAccountFeatureSecureIdentityEntitlementList(this, "secure_identity_entitlement", true);
  public get secureIdentityEntitlement() {
    return this._secureIdentityEntitlement;
  }
  public putSecureIdentityEntitlement(value: SecureCloudAuthAccountFeatureSecureIdentityEntitlement[] | cdktf.IResolvable) {
    this._secureIdentityEntitlement.internalValue = value;
  }
  public resetSecureIdentityEntitlement() {
    this._secureIdentityEntitlement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureIdentityEntitlementInput() {
    return this._secureIdentityEntitlement.internalValue;
  }

  // secure_threat_detection - computed: false, optional: true, required: false
  private _secureThreatDetection = new SecureCloudAuthAccountFeatureSecureThreatDetectionList(this, "secure_threat_detection", true);
  public get secureThreatDetection() {
    return this._secureThreatDetection;
  }
  public putSecureThreatDetection(value: SecureCloudAuthAccountFeatureSecureThreatDetection[] | cdktf.IResolvable) {
    this._secureThreatDetection.internalValue = value;
  }
  public resetSecureThreatDetection() {
    this._secureThreatDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureThreatDetectionInput() {
    return this._secureThreatDetection.internalValue;
  }
}

export class SecureCloudAuthAccountFeatureList extends cdktf.ComplexList {
  public internalValue? : SecureCloudAuthAccountFeature[] | cdktf.IResolvable

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
  public get(index: number): SecureCloudAuthAccountFeatureOutputReference {
    return new SecureCloudAuthAccountFeatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecureCloudAuthAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#create SecureCloudAuthAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#delete SecureCloudAuthAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#read SecureCloudAuthAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#update SecureCloudAuthAccount#update}
  */
  readonly update?: string;
}

export function secureCloudAuthAccountTimeoutsToTerraform(struct?: SecureCloudAuthAccountTimeouts | cdktf.IResolvable): any {
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


export function secureCloudAuthAccountTimeoutsToHclTerraform(struct?: SecureCloudAuthAccountTimeouts | cdktf.IResolvable): any {
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

export class SecureCloudAuthAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureCloudAuthAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecureCloudAuthAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account sysdig_secure_cloud_auth_account}
*/
export class SecureCloudAuthAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_cloud_auth_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureCloudAuthAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureCloudAuthAccount to import
  * @param importFromId The id of the existing SecureCloudAuthAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureCloudAuthAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_cloud_auth_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_cloud_auth_account sysdig_secure_cloud_auth_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureCloudAuthAccountConfig
  */
  public constructor(scope: Construct, id: string, config: SecureCloudAuthAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_cloud_auth_account',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._providerAlias = config.providerAlias;
    this._providerId = config.providerId;
    this._providerPartition = config.providerPartition;
    this._providerTenantId = config.providerTenantId;
    this._providerType = config.providerType;
    this._component.internalValue = config.component;
    this._feature.internalValue = config.feature;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // provider_alias - computed: false, optional: true, required: false
  private _providerAlias?: string; 
  public get providerAlias() {
    return this.getStringAttribute('provider_alias');
  }
  public set providerAlias(value: string) {
    this._providerAlias = value;
  }
  public resetProviderAlias() {
    this._providerAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAliasInput() {
    return this._providerAlias;
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // provider_partition - computed: false, optional: true, required: false
  private _providerPartition?: string; 
  public get providerPartition() {
    return this.getStringAttribute('provider_partition');
  }
  public set providerPartition(value: string) {
    this._providerPartition = value;
  }
  public resetProviderPartition() {
    this._providerPartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerPartitionInput() {
    return this._providerPartition;
  }

  // provider_tenant_id - computed: false, optional: true, required: false
  private _providerTenantId?: string; 
  public get providerTenantId() {
    return this.getStringAttribute('provider_tenant_id');
  }
  public set providerTenantId(value: string) {
    this._providerTenantId = value;
  }
  public resetProviderTenantId() {
    this._providerTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTenantIdInput() {
    return this._providerTenantId;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // component - computed: false, optional: true, required: false
  private _component = new SecureCloudAuthAccountComponentList(this, "component", true);
  public get component() {
    return this._component;
  }
  public putComponent(value: SecureCloudAuthAccountComponent[] | cdktf.IResolvable) {
    this._component.internalValue = value;
  }
  public resetComponent() {
    this._component.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component.internalValue;
  }

  // feature - computed: false, optional: true, required: false
  private _feature = new SecureCloudAuthAccountFeatureList(this, "feature", true);
  public get feature() {
    return this._feature;
  }
  public putFeature(value: SecureCloudAuthAccountFeature[] | cdktf.IResolvable) {
    this._feature.internalValue = value;
  }
  public resetFeature() {
    this._feature.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureCloudAuthAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureCloudAuthAccountTimeouts) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      provider_alias: cdktf.stringToTerraform(this._providerAlias),
      provider_id: cdktf.stringToTerraform(this._providerId),
      provider_partition: cdktf.stringToTerraform(this._providerPartition),
      provider_tenant_id: cdktf.stringToTerraform(this._providerTenantId),
      provider_type: cdktf.stringToTerraform(this._providerType),
      component: cdktf.listMapper(secureCloudAuthAccountComponentToTerraform, true)(this._component.internalValue),
      feature: cdktf.listMapper(secureCloudAuthAccountFeatureToTerraform, true)(this._feature.internalValue),
      timeouts: secureCloudAuthAccountTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      provider_alias: {
        value: cdktf.stringToHclTerraform(this._providerAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_id: {
        value: cdktf.stringToHclTerraform(this._providerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_partition: {
        value: cdktf.stringToHclTerraform(this._providerPartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_tenant_id: {
        value: cdktf.stringToHclTerraform(this._providerTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      component: {
        value: cdktf.listMapperHcl(secureCloudAuthAccountComponentToHclTerraform, true)(this._component.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecureCloudAuthAccountComponentList",
      },
      feature: {
        value: cdktf.listMapperHcl(secureCloudAuthAccountFeatureToHclTerraform, true)(this._feature.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SecureCloudAuthAccountFeatureList",
      },
      timeouts: {
        value: secureCloudAuthAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureCloudAuthAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
