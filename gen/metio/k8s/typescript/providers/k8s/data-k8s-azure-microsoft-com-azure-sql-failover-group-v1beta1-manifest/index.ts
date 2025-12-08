// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#metadata DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadata;
  /**
  * AzureSqlFailoverGroupSpec defines the desired state of AzureSqlFailoverGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#spec DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#annotations DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#labels DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#name DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#namespace DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
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
}
export interface DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#database_list DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#database_list}
  */
  readonly databaseList: string[];
  /**
  * TODO: This field should be a ptr as it must not be specified if the failover policy is Manual, TODO: but is required when the policy is Automatic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#failover_grace_period DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#failover_grace_period}
  */
  readonly failoverGracePeriod: number;
  /**
  * ReadWriteEndpointFailoverPolicy - wraps https://godoc.org/github.com/Azure/azure-sdk-for-go/services/preview/sql/mgmt/v3.0/sql#ReadWriteEndpointFailoverPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#failover_policy DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#failover_policy}
  */
  readonly failoverPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#key_vault_to_store_secrets DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#key_vault_to_store_secrets}
  */
  readonly keyVaultToStoreSecrets?: string;
  /**
  * Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#location DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#resource_group DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#secondary_server DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#secondary_server}
  */
  readonly secondaryServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#secondary_server_resource_group DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#secondary_server_resource_group}
  */
  readonly secondaryServerResourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#secondary_server_subscription_id DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#secondary_server_subscription_id}
  */
  readonly secondaryServerSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#server DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#subscription_id DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest#subscription_id}
  */
  readonly subscriptionId?: string;
}

export function dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaseList),
    failover_grace_period: cdktf.numberToTerraform(struct!.failoverGracePeriod),
    failover_policy: cdktf.stringToTerraform(struct!.failoverPolicy),
    key_vault_to_store_secrets: cdktf.stringToTerraform(struct!.keyVaultToStoreSecrets),
    location: cdktf.stringToTerraform(struct!.location),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    secondary_server: cdktf.stringToTerraform(struct!.secondaryServer),
    secondary_server_resource_group: cdktf.stringToTerraform(struct!.secondaryServerResourceGroup),
    secondary_server_subscription_id: cdktf.stringToTerraform(struct!.secondaryServerSubscriptionId),
    server: cdktf.stringToTerraform(struct!.server),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
  }
}


export function dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaseList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failover_grace_period: {
      value: cdktf.numberToHclTerraform(struct!.failoverGracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failover_policy: {
      value: cdktf.stringToHclTerraform(struct!.failoverPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_vault_to_store_secrets: {
      value: cdktf.stringToHclTerraform(struct!.keyVaultToStoreSecrets),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_server: {
      value: cdktf.stringToHclTerraform(struct!.secondaryServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_server_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.secondaryServerResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_server_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.secondaryServerSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseList !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseList = this._databaseList;
    }
    if (this._failoverGracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverGracePeriod = this._failoverGracePeriod;
    }
    if (this._failoverPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverPolicy = this._failoverPolicy;
    }
    if (this._keyVaultToStoreSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultToStoreSecrets = this._keyVaultToStoreSecrets;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._secondaryServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryServer = this._secondaryServer;
    }
    if (this._secondaryServerResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryServerResourceGroup = this._secondaryServerResourceGroup;
    }
    if (this._secondaryServerSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryServerSubscriptionId = this._secondaryServerSubscriptionId;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseList = undefined;
      this._failoverGracePeriod = undefined;
      this._failoverPolicy = undefined;
      this._keyVaultToStoreSecrets = undefined;
      this._location = undefined;
      this._resourceGroup = undefined;
      this._secondaryServer = undefined;
      this._secondaryServerResourceGroup = undefined;
      this._secondaryServerSubscriptionId = undefined;
      this._server = undefined;
      this._subscriptionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseList = value.databaseList;
      this._failoverGracePeriod = value.failoverGracePeriod;
      this._failoverPolicy = value.failoverPolicy;
      this._keyVaultToStoreSecrets = value.keyVaultToStoreSecrets;
      this._location = value.location;
      this._resourceGroup = value.resourceGroup;
      this._secondaryServer = value.secondaryServer;
      this._secondaryServerResourceGroup = value.secondaryServerResourceGroup;
      this._secondaryServerSubscriptionId = value.secondaryServerSubscriptionId;
      this._server = value.server;
      this._subscriptionId = value.subscriptionId;
    }
  }

  // database_list - computed: false, optional: false, required: true
  private _databaseList?: string[]; 
  public get databaseList() {
    return this.getListAttribute('database_list');
  }
  public set databaseList(value: string[]) {
    this._databaseList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseListInput() {
    return this._databaseList;
  }

  // failover_grace_period - computed: false, optional: false, required: true
  private _failoverGracePeriod?: number; 
  public get failoverGracePeriod() {
    return this.getNumberAttribute('failover_grace_period');
  }
  public set failoverGracePeriod(value: number) {
    this._failoverGracePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverGracePeriodInput() {
    return this._failoverGracePeriod;
  }

  // failover_policy - computed: false, optional: false, required: true
  private _failoverPolicy?: string; 
  public get failoverPolicy() {
    return this.getStringAttribute('failover_policy');
  }
  public set failoverPolicy(value: string) {
    this._failoverPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverPolicyInput() {
    return this._failoverPolicy;
  }

  // key_vault_to_store_secrets - computed: false, optional: true, required: false
  private _keyVaultToStoreSecrets?: string; 
  public get keyVaultToStoreSecrets() {
    return this.getStringAttribute('key_vault_to_store_secrets');
  }
  public set keyVaultToStoreSecrets(value: string) {
    this._keyVaultToStoreSecrets = value;
  }
  public resetKeyVaultToStoreSecrets() {
    this._keyVaultToStoreSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultToStoreSecretsInput() {
    return this._keyVaultToStoreSecrets;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // secondary_server - computed: false, optional: false, required: true
  private _secondaryServer?: string; 
  public get secondaryServer() {
    return this.getStringAttribute('secondary_server');
  }
  public set secondaryServer(value: string) {
    this._secondaryServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryServerInput() {
    return this._secondaryServer;
  }

  // secondary_server_resource_group - computed: false, optional: false, required: true
  private _secondaryServerResourceGroup?: string; 
  public get secondaryServerResourceGroup() {
    return this.getStringAttribute('secondary_server_resource_group');
  }
  public set secondaryServerResourceGroup(value: string) {
    this._secondaryServerResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryServerResourceGroupInput() {
    return this._secondaryServerResourceGroup;
  }

  // secondary_server_subscription_id - computed: false, optional: true, required: false
  private _secondaryServerSubscriptionId?: string; 
  public get secondaryServerSubscriptionId() {
    return this.getStringAttribute('secondary_server_subscription_id');
  }
  public set secondaryServerSubscriptionId(value: string) {
    this._secondaryServerSubscriptionId = value;
  }
  public resetSecondaryServerSubscriptionId() {
    this._secondaryServerSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryServerSubscriptionIdInput() {
    return this._secondaryServerSubscriptionId;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest k8s_azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest}
*/
export class DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest k8s_azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_azure_sql_failover_group_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
