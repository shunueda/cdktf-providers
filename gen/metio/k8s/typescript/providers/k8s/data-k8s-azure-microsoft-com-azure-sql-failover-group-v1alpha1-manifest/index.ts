// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#metadata DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadata;
  /**
  * AzureSqlFailoverGroupSpec defines the desired state of AzureSqlFailoverGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#spec DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpec;
}
export interface DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#annotations DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#labels DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#name DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#namespace DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#databaselist DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#databaselist}
  */
  readonly databaselist: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#failovergraceperiod DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#failovergraceperiod}
  */
  readonly failovergraceperiod: number;
  /**
  * ReadWriteEndpointFailoverPolicy - wraps https://godoc.org/github.com/Azure/azure-sdk-for-go/services/preview/sql/mgmt/v3.0/sql#ReadWriteEndpointFailoverPolicy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#failoverpolicy DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#failoverpolicy}
  */
  readonly failoverpolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#key_vault_to_store_secrets DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#key_vault_to_store_secrets}
  */
  readonly keyVaultToStoreSecrets?: string;
  /**
  * Important: Run 'make' to regenerate code after modifying this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#location DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#resourcegroup DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#resourcegroup}
  */
  readonly resourcegroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#secondaryserver DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#secondaryserver}
  */
  readonly secondaryserver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#secondaryserverresourcegroup DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#secondaryserverresourcegroup}
  */
  readonly secondaryserverresourcegroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#server DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databaselist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databaselist),
    failovergraceperiod: cdktf.numberToTerraform(struct!.failovergraceperiod),
    failoverpolicy: cdktf.stringToTerraform(struct!.failoverpolicy),
    key_vault_to_store_secrets: cdktf.stringToTerraform(struct!.keyVaultToStoreSecrets),
    location: cdktf.stringToTerraform(struct!.location),
    resourcegroup: cdktf.stringToTerraform(struct!.resourcegroup),
    secondaryserver: cdktf.stringToTerraform(struct!.secondaryserver),
    secondaryserverresourcegroup: cdktf.stringToTerraform(struct!.secondaryserverresourcegroup),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databaselist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databaselist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failovergraceperiod: {
      value: cdktf.numberToHclTerraform(struct!.failovergraceperiod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failoverpolicy: {
      value: cdktf.stringToHclTerraform(struct!.failoverpolicy),
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
    resourcegroup: {
      value: cdktf.stringToHclTerraform(struct!.resourcegroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondaryserver: {
      value: cdktf.stringToHclTerraform(struct!.secondaryserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondaryserverresourcegroup: {
      value: cdktf.stringToHclTerraform(struct!.secondaryserverresourcegroup),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaselist !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaselist = this._databaselist;
    }
    if (this._failovergraceperiod !== undefined) {
      hasAnyValues = true;
      internalValueResult.failovergraceperiod = this._failovergraceperiod;
    }
    if (this._failoverpolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverpolicy = this._failoverpolicy;
    }
    if (this._keyVaultToStoreSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyVaultToStoreSecrets = this._keyVaultToStoreSecrets;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._resourcegroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcegroup = this._resourcegroup;
    }
    if (this._secondaryserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryserver = this._secondaryserver;
    }
    if (this._secondaryserverresourcegroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryserverresourcegroup = this._secondaryserverresourcegroup;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaselist = undefined;
      this._failovergraceperiod = undefined;
      this._failoverpolicy = undefined;
      this._keyVaultToStoreSecrets = undefined;
      this._location = undefined;
      this._resourcegroup = undefined;
      this._secondaryserver = undefined;
      this._secondaryserverresourcegroup = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaselist = value.databaselist;
      this._failovergraceperiod = value.failovergraceperiod;
      this._failoverpolicy = value.failoverpolicy;
      this._keyVaultToStoreSecrets = value.keyVaultToStoreSecrets;
      this._location = value.location;
      this._resourcegroup = value.resourcegroup;
      this._secondaryserver = value.secondaryserver;
      this._secondaryserverresourcegroup = value.secondaryserverresourcegroup;
      this._server = value.server;
    }
  }

  // databaselist - computed: false, optional: false, required: true
  private _databaselist?: string[]; 
  public get databaselist() {
    return this.getListAttribute('databaselist');
  }
  public set databaselist(value: string[]) {
    this._databaselist = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaselistInput() {
    return this._databaselist;
  }

  // failovergraceperiod - computed: false, optional: false, required: true
  private _failovergraceperiod?: number; 
  public get failovergraceperiod() {
    return this.getNumberAttribute('failovergraceperiod');
  }
  public set failovergraceperiod(value: number) {
    this._failovergraceperiod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failovergraceperiodInput() {
    return this._failovergraceperiod;
  }

  // failoverpolicy - computed: false, optional: false, required: true
  private _failoverpolicy?: string; 
  public get failoverpolicy() {
    return this.getStringAttribute('failoverpolicy');
  }
  public set failoverpolicy(value: string) {
    this._failoverpolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverpolicyInput() {
    return this._failoverpolicy;
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

  // resourcegroup - computed: false, optional: false, required: true
  private _resourcegroup?: string; 
  public get resourcegroup() {
    return this.getStringAttribute('resourcegroup');
  }
  public set resourcegroup(value: string) {
    this._resourcegroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcegroupInput() {
    return this._resourcegroup;
  }

  // secondaryserver - computed: false, optional: false, required: true
  private _secondaryserver?: string; 
  public get secondaryserver() {
    return this.getStringAttribute('secondaryserver');
  }
  public set secondaryserver(value: string) {
    this._secondaryserver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryserverInput() {
    return this._secondaryserver;
  }

  // secondaryserverresourcegroup - computed: false, optional: false, required: true
  private _secondaryserverresourcegroup?: string; 
  public get secondaryserverresourcegroup() {
    return this.getStringAttribute('secondaryserverresourcegroup');
  }
  public set secondaryserverresourcegroup(value: string) {
    this._secondaryserverresourcegroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryserverresourcegroupInput() {
    return this._secondaryserverresourcegroup;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest k8s_azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest}
*/
export class DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest k8s_azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_azure_microsoft_com_azure_sql_failover_group_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAzureMicrosoftComAzureSqlFailoverGroupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
