// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCortexcloudCloudIntegrationInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication method to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#authentication_method DataCortexcloudCloudIntegrationInstances#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#cloud_provider DataCortexcloudCloudIntegrationInstances#cloud_provider}
  */
  readonly cloudProvider?: string;
  /**
  * The creation time to filter by (RFC 3339 format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#creation_time DataCortexcloudCloudIntegrationInstances#creation_time}
  */
  readonly creationTime?: string;
  /**
  * The instance ID to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#instance_id DataCortexcloudCloudIntegrationInstances#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The name to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#name DataCortexcloudCloudIntegrationInstances#name}
  */
  readonly name?: string;
  /**
  * The outpost ID to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#outpost_id DataCortexcloudCloudIntegrationInstances#outpost_id}
  */
  readonly outpostId?: string;
  /**
  * The scan mode to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#scan_mode DataCortexcloudCloudIntegrationInstances#scan_mode}
  */
  readonly scanMode?: string;
  /**
  * The scope to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#scope DataCortexcloudCloudIntegrationInstances#scope}
  */
  readonly scope?: string;
  /**
  * The status to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#status DataCortexcloudCloudIntegrationInstances#status}
  */
  readonly status?: string;
}
export interface DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptions {
}

export function dataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptionsToTerraform(struct?: DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptionsToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_days - computed: true, optional: false, required: false
  public get lastDays() {
    return this.getNumberAttribute('last_days');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilities {
}

export function dataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesToTerraform(struct?: DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentless_disk_scanning - computed: true, optional: false, required: false
  public get agentlessDiskScanning() {
    return this.getBooleanAttribute('agentless_disk_scanning');
  }

  // data_security_posture_management - computed: true, optional: false, required: false
  public get dataSecurityPostureManagement() {
    return this.getBooleanAttribute('data_security_posture_management');
  }

  // registry_scanning - computed: true, optional: false, required: false
  public get registryScanning() {
    return this.getBooleanAttribute('registry_scanning');
  }

  // registry_scanning_options - computed: true, optional: false, required: false
  private _registryScanningOptions = new DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesRegistryScanningOptionsOutputReference(this, "registry_scanning_options");
  public get registryScanningOptions() {
    return this._registryScanningOptions;
  }

  // serverless_scanning - computed: true, optional: false, required: false
  public get serverlessScanning() {
    return this.getBooleanAttribute('serverless_scanning');
  }

  // xsiam_analytics - computed: true, optional: false, required: false
  public get xsiamAnalytics() {
    return this.getBooleanAttribute('xsiam_analytics');
  }
}
export interface DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTags {
}

export function dataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTagsToTerraform(struct?: DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTagsToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTagsOutputReference {
    return new DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCortexcloudCloudIntegrationInstancesInstances {
}

export function dataCortexcloudCloudIntegrationInstancesInstancesToTerraform(struct?: DataCortexcloudCloudIntegrationInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCortexcloudCloudIntegrationInstancesInstancesToHclTerraform(struct?: DataCortexcloudCloudIntegrationInstancesInstances): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCortexcloudCloudIntegrationInstancesInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCortexcloudCloudIntegrationInstancesInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCortexcloudCloudIntegrationInstancesInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_name - computed: true, optional: false, required: false
  public get accountName() {
    return this.getStringAttribute('account_name');
  }

  // additional_capabilities - computed: true, optional: false, required: false
  private _additionalCapabilities = new DataCortexcloudCloudIntegrationInstancesInstancesAdditionalCapabilitiesOutputReference(this, "additional_capabilities");
  public get additionalCapabilities() {
    return this._additionalCapabilities;
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // custom_resources_tags - computed: true, optional: false, required: false
  private _customResourcesTags = new DataCortexcloudCloudIntegrationInstancesInstancesCustomResourcesTagsList(this, "custom_resources_tags", true);
  public get customResourcesTags() {
    return this._customResourcesTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // is_pending_changes - computed: true, optional: false, required: false
  public get isPendingChanges() {
    return this.getBooleanAttribute('is_pending_changes');
  }

  // outpost_id - computed: true, optional: false, required: false
  public get outpostId() {
    return this.getStringAttribute('outpost_id');
  }

  // provisioning_method - computed: true, optional: false, required: false
  public get provisioningMethod() {
    return this.getStringAttribute('provisioning_method');
  }

  // scan_mode - computed: true, optional: false, required: false
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // total_accounts - computed: true, optional: false, required: false
  public get totalAccounts() {
    return this.getNumberAttribute('total_accounts');
  }

  // update_status - computed: true, optional: false, required: false
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }
}

export class DataCortexcloudCloudIntegrationInstancesInstancesList extends cdktf.ComplexList {

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
  public get(index: number): DataCortexcloudCloudIntegrationInstancesInstancesOutputReference {
    return new DataCortexcloudCloudIntegrationInstancesInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances cortexcloud_cloud_integration_instances}
*/
export class DataCortexcloudCloudIntegrationInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud_cloud_integration_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCortexcloudCloudIntegrationInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCortexcloudCloudIntegrationInstances to import
  * @param importFromId The id of the existing DataCortexcloudCloudIntegrationInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCortexcloudCloudIntegrationInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud_cloud_integration_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/data-sources/cloud_integration_instances cortexcloud_cloud_integration_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCortexcloudCloudIntegrationInstancesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCortexcloudCloudIntegrationInstancesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud_cloud_integration_instances',
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
    this._authenticationMethod = config.authenticationMethod;
    this._cloudProvider = config.cloudProvider;
    this._creationTime = config.creationTime;
    this._instanceId = config.instanceId;
    this._name = config.name;
    this._outpostId = config.outpostId;
    this._scanMode = config.scanMode;
    this._scope = config.scope;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // cloud_provider - computed: false, optional: true, required: false
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  public resetCloudProvider() {
    this._cloudProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // creation_time - computed: false, optional: true, required: false
  private _creationTime?: string; 
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }
  public set creationTime(value: string) {
    this._creationTime = value;
  }
  public resetCreationTime() {
    this._creationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTimeInput() {
    return this._creationTime;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instances - computed: true, optional: false, required: false
  private _instances = new DataCortexcloudCloudIntegrationInstancesInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }

  // name - computed: false, optional: true, required: false
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

  // outpost_id - computed: false, optional: true, required: false
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

  // scan_mode - computed: false, optional: true, required: false
  private _scanMode?: string; 
  public get scanMode() {
    return this.getStringAttribute('scan_mode');
  }
  public set scanMode(value: string) {
    this._scanMode = value;
  }
  public resetScanMode() {
    this._scanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanModeInput() {
    return this._scanMode;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      creation_time: cdktf.stringToTerraform(this._creationTime),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      name: cdktf.stringToTerraform(this._name),
      outpost_id: cdktf.stringToTerraform(this._outpostId),
      scan_mode: cdktf.stringToTerraform(this._scanMode),
      scope: cdktf.stringToTerraform(this._scope),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      creation_time: {
        value: cdktf.stringToHclTerraform(this._creationTime),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
