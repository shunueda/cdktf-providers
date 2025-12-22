// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#metadata DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadata;
  /**
  * DeveloperAccountSpec defines the desired state of DeveloperAccount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#spec DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpec;
}
export interface DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#annotations DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#labels DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#name DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#namespace DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadataToTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#name DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRefToTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}
export interface DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpec {
  /**
  * MonthlyBillingEnabled sets the billing status. Defaults to 'true', ie., active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#monthly_billing_enabled DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#monthly_billing_enabled}
  */
  readonly monthlyBillingEnabled?: boolean | cdktf.IResolvable;
  /**
  * MonthlyChargingEnabled Defaults to 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#monthly_charging_enabled DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#monthly_charging_enabled}
  */
  readonly monthlyChargingEnabled?: boolean | cdktf.IResolvable;
  /**
  * OrgName is the organization name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#org_name DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#org_name}
  */
  readonly orgName: string;
  /**
  * ProviderAccountRef references account provider credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#provider_account_ref DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest#provider_account_ref}
  */
  readonly providerAccountRef?: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRef;
}

export function dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecToTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monthly_billing_enabled: cdktf.booleanToTerraform(struct!.monthlyBillingEnabled),
    monthly_charging_enabled: cdktf.booleanToTerraform(struct!.monthlyChargingEnabled),
    org_name: cdktf.stringToTerraform(struct!.orgName),
    provider_account_ref: dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRefToTerraform(struct!.providerAccountRef),
  }
}


export function dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monthly_billing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.monthlyBillingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monthly_charging_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.monthlyChargingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    org_name: {
      value: cdktf.stringToHclTerraform(struct!.orgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_account_ref: {
      value: dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRefToHclTerraform(struct!.providerAccountRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monthlyBillingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyBillingEnabled = this._monthlyBillingEnabled;
    }
    if (this._monthlyChargingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyChargingEnabled = this._monthlyChargingEnabled;
    }
    if (this._orgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgName = this._orgName;
    }
    if (this._providerAccountRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerAccountRef = this._providerAccountRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monthlyBillingEnabled = undefined;
      this._monthlyChargingEnabled = undefined;
      this._orgName = undefined;
      this._providerAccountRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monthlyBillingEnabled = value.monthlyBillingEnabled;
      this._monthlyChargingEnabled = value.monthlyChargingEnabled;
      this._orgName = value.orgName;
      this._providerAccountRef.internalValue = value.providerAccountRef;
    }
  }

  // monthly_billing_enabled - computed: false, optional: true, required: false
  private _monthlyBillingEnabled?: boolean | cdktf.IResolvable; 
  public get monthlyBillingEnabled() {
    return this.getBooleanAttribute('monthly_billing_enabled');
  }
  public set monthlyBillingEnabled(value: boolean | cdktf.IResolvable) {
    this._monthlyBillingEnabled = value;
  }
  public resetMonthlyBillingEnabled() {
    this._monthlyBillingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyBillingEnabledInput() {
    return this._monthlyBillingEnabled;
  }

  // monthly_charging_enabled - computed: false, optional: true, required: false
  private _monthlyChargingEnabled?: boolean | cdktf.IResolvable; 
  public get monthlyChargingEnabled() {
    return this.getBooleanAttribute('monthly_charging_enabled');
  }
  public set monthlyChargingEnabled(value: boolean | cdktf.IResolvable) {
    this._monthlyChargingEnabled = value;
  }
  public resetMonthlyChargingEnabled() {
    this._monthlyChargingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyChargingEnabledInput() {
    return this._monthlyChargingEnabled;
  }

  // org_name - computed: false, optional: false, required: true
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }

  // provider_account_ref - computed: false, optional: true, required: false
  private _providerAccountRef = new DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRefOutputReference(this, "provider_account_ref");
  public get providerAccountRef() {
    return this._providerAccountRef;
  }
  public putProviderAccountRef(value: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecProviderAccountRef) {
    this._providerAccountRef.internalValue = value;
  }
  public resetProviderAccountRef() {
    this._providerAccountRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerAccountRefInput() {
    return this._providerAccountRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest k8s_capabilities_3scale_net_developer_account_v1beta1_manifest}
*/
export class DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capabilities_3scale_net_developer_account_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capabilities_3scale_net_developer_account_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/capabilities_3scale_net_developer_account_v1beta1_manifest k8s_capabilities_3scale_net_developer_account_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capabilities_3scale_net_developer_account_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpec) {
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
      metadata: dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapabilities3ScaleNetDeveloperAccountV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
