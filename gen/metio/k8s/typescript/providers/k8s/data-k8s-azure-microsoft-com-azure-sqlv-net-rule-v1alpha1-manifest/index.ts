// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadata;
  /**
  * NOTE: json tags are required. Any new fields you add must have json tags for the fields to be serialized. AzureSQLVNetRuleSpec defines the desired state of AzureSQLVNetRule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#spec DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#labels DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#name DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#ignore_missing_service_endpoint DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#ignore_missing_service_endpoint}
  */
  readonly ignoreMissingServiceEndpoint?: boolean | cdktf.IResolvable;
  /**
  * INSERT ADDITIONAL SPEC FIELDS - desired state of cluster Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#resource_group DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#server DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#server_subscription_id DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#server_subscription_id}
  */
  readonly serverSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#subnet_name DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#v_net_name DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#v_net_name}
  */
  readonly vNetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#v_net_resource_group DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#v_net_resource_group}
  */
  readonly vNetResourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#v_net_subscription_id DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest#v_net_subscription_id}
  */
  readonly vNetSubscriptionId?: string;
}

export function dataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_service_endpoint: cdktf.booleanToTerraform(struct!.ignoreMissingServiceEndpoint),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    server: cdktf.stringToTerraform(struct!.server),
    server_subscription_id: cdktf.stringToTerraform(struct!.serverSubscriptionId),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    v_net_name: cdktf.stringToTerraform(struct!.vNetName),
    v_net_resource_group: cdktf.stringToTerraform(struct!.vNetResourceGroup),
    v_net_subscription_id: cdktf.stringToTerraform(struct!.vNetSubscriptionId),
  }
}


export function dataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_service_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingServiceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
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
    server_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.serverSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_net_name: {
      value: cdktf.stringToHclTerraform(struct!.vNetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_net_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.vNetResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v_net_subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.vNetSubscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingServiceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingServiceEndpoint = this._ignoreMissingServiceEndpoint;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._serverSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSubscriptionId = this._serverSubscriptionId;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._vNetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vNetName = this._vNetName;
    }
    if (this._vNetResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.vNetResourceGroup = this._vNetResourceGroup;
    }
    if (this._vNetSubscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vNetSubscriptionId = this._vNetSubscriptionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreMissingServiceEndpoint = undefined;
      this._resourceGroup = undefined;
      this._server = undefined;
      this._serverSubscriptionId = undefined;
      this._subnetName = undefined;
      this._vNetName = undefined;
      this._vNetResourceGroup = undefined;
      this._vNetSubscriptionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreMissingServiceEndpoint = value.ignoreMissingServiceEndpoint;
      this._resourceGroup = value.resourceGroup;
      this._server = value.server;
      this._serverSubscriptionId = value.serverSubscriptionId;
      this._subnetName = value.subnetName;
      this._vNetName = value.vNetName;
      this._vNetResourceGroup = value.vNetResourceGroup;
      this._vNetSubscriptionId = value.vNetSubscriptionId;
    }
  }

  // ignore_missing_service_endpoint - computed: false, optional: true, required: false
  private _ignoreMissingServiceEndpoint?: boolean | cdktf.IResolvable; 
  public get ignoreMissingServiceEndpoint() {
    return this.getBooleanAttribute('ignore_missing_service_endpoint');
  }
  public set ignoreMissingServiceEndpoint(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingServiceEndpoint = value;
  }
  public resetIgnoreMissingServiceEndpoint() {
    this._ignoreMissingServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingServiceEndpointInput() {
    return this._ignoreMissingServiceEndpoint;
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

  // server_subscription_id - computed: false, optional: true, required: false
  private _serverSubscriptionId?: string; 
  public get serverSubscriptionId() {
    return this.getStringAttribute('server_subscription_id');
  }
  public set serverSubscriptionId(value: string) {
    this._serverSubscriptionId = value;
  }
  public resetServerSubscriptionId() {
    this._serverSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSubscriptionIdInput() {
    return this._serverSubscriptionId;
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // v_net_name - computed: false, optional: false, required: true
  private _vNetName?: string; 
  public get vNetName() {
    return this.getStringAttribute('v_net_name');
  }
  public set vNetName(value: string) {
    this._vNetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vNetNameInput() {
    return this._vNetName;
  }

  // v_net_resource_group - computed: false, optional: false, required: true
  private _vNetResourceGroup?: string; 
  public get vNetResourceGroup() {
    return this.getStringAttribute('v_net_resource_group');
  }
  public set vNetResourceGroup(value: string) {
    this._vNetResourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vNetResourceGroupInput() {
    return this._vNetResourceGroup;
  }

  // v_net_subscription_id - computed: false, optional: true, required: false
  private _vNetSubscriptionId?: string; 
  public get vNetSubscriptionId() {
    return this.getStringAttribute('v_net_subscription_id');
  }
  public set vNetSubscriptionId(value: string) {
    this._vNetSubscriptionId = value;
  }
  public resetVNetSubscriptionId() {
    this._vNetSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vNetSubscriptionIdInput() {
    return this._vNetSubscriptionId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest k8s_azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest k8s_azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_azure_sqlv_net_rule_v1alpha1_manifest',
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
  private _metadata = new DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlvNetRuleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
