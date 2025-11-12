// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#additional_disk_space Opensearch#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cloud_name Opensearch#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#disk_space Opensearch#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#id Opensearch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#maintenance_window_dow Opensearch#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#maintenance_window_time Opensearch#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#plan Opensearch#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#project Opensearch#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#project_vpc_id Opensearch#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#service_name Opensearch#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#static_ips Opensearch#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#termination_protection Opensearch#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch Opensearch#opensearch}
  */
  readonly opensearch?: OpensearchOpensearch;
  /**
  * opensearch_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch_user_config Opensearch#opensearch_user_config}
  */
  readonly opensearchUserConfig?: OpensearchOpensearchUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#service_integrations Opensearch#service_integrations}
  */
  readonly serviceIntegrations?: OpensearchServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#tag Opensearch#tag}
  */
  readonly tag?: OpensearchTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#tech_emails Opensearch#tech_emails}
  */
  readonly techEmails?: OpensearchTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#timeouts Opensearch#timeouts}
  */
  readonly timeouts?: OpensearchTimeouts;
}
export interface OpensearchComponents {
}

export function opensearchComponentsToTerraform(struct?: OpensearchComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function opensearchComponentsToHclTerraform(struct?: OpensearchComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OpensearchComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kafka_authentication_method - computed: true, optional: false, required: false
  public get kafkaAuthenticationMethod() {
    return this.getStringAttribute('kafka_authentication_method');
  }

  // kafka_ssl_ca - computed: true, optional: false, required: false
  public get kafkaSslCa() {
    return this.getStringAttribute('kafka_ssl_ca');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class OpensearchComponentsList extends cdktf.ComplexList {

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
  public get(index: number): OpensearchComponentsOutputReference {
    return new OpensearchComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchOpensearch {
  /**
  * OpenSearch server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#uris Opensearch#uris}
  */
  readonly uris?: string[];
}

export function opensearchOpensearchToTerraform(struct?: OpensearchOpensearchOutputReference | OpensearchOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function opensearchOpensearchToHclTerraform(struct?: OpensearchOpensearchOutputReference | OpensearchOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
  }

  // kibana_uri - computed: true, optional: false, required: false
  public get kibanaUri() {
    return this.getStringAttribute('kibana_uri');
  }

  // opensearch_dashboards_uri - computed: true, optional: false, required: false
  public get opensearchDashboardsUri() {
    return this.getStringAttribute('opensearch_dashboards_uri');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // uris - computed: true, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface OpensearchOpensearchUserConfigAzureMigration {
  /**
  * Account name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#account Opensearch#account}
  */
  readonly account: string;
  /**
  * The path to the repository data within its container. The value of this setting should not start or end with a /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#base_path Opensearch#base_path}
  */
  readonly basePath: string;
  /**
  * Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#chunk_size Opensearch#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * When set to true metadata files are stored in compressed format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#compress Opensearch#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Azure container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#container Opensearch#container}
  */
  readonly container: string;
  /**
  * Defines the DNS suffix for Azure Storage endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#endpoint_suffix Opensearch#endpoint_suffix}
  */
  readonly endpointSuffix?: string;
  /**
  * Whether to restore aliases alongside their associated indexes. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#include_aliases Opensearch#include_aliases}
  */
  readonly includeAliases?: boolean | cdktf.IResolvable;
  /**
  * A comma-delimited list of indices to restore from the snapshot. Multi-index syntax is supported. Example: `metrics*,logs*,data-20240823`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices Opensearch#indices}
  */
  readonly indices: string;
  /**
  * Azure account secret key. One of key or sas_token should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#key Opensearch#key}
  */
  readonly key?: string;
  /**
  * Whether the repository is read-only. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#readonly Opensearch#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * If true, restore the cluster state. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#restore_global_state Opensearch#restore_global_state}
  */
  readonly restoreGlobalState?: boolean | cdktf.IResolvable;
  /**
  * A shared access signatures (SAS) token. One of key or sas_token should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#sas_token Opensearch#sas_token}
  */
  readonly sasToken?: string;
  /**
  * The snapshot name to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#snapshot_name Opensearch#snapshot_name}
  */
  readonly snapshotName: string;
}

export function opensearchOpensearchUserConfigAzureMigrationToTerraform(struct?: OpensearchOpensearchUserConfigAzureMigrationOutputReference | OpensearchOpensearchUserConfigAzureMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    compress: cdktf.booleanToTerraform(struct!.compress),
    container: cdktf.stringToTerraform(struct!.container),
    endpoint_suffix: cdktf.stringToTerraform(struct!.endpointSuffix),
    include_aliases: cdktf.booleanToTerraform(struct!.includeAliases),
    indices: cdktf.stringToTerraform(struct!.indices),
    key: cdktf.stringToTerraform(struct!.key),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    restore_global_state: cdktf.booleanToTerraform(struct!.restoreGlobalState),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
  }
}


export function opensearchOpensearchUserConfigAzureMigrationToHclTerraform(struct?: OpensearchOpensearchUserConfigAzureMigrationOutputReference | OpensearchOpensearchUserConfigAzureMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_suffix: {
      value: cdktf.stringToHclTerraform(struct!.endpointSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_aliases: {
      value: cdktf.booleanToHclTerraform(struct!.includeAliases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    indices: {
      value: cdktf.stringToHclTerraform(struct!.indices),
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
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restore_global_state: {
      value: cdktf.booleanToHclTerraform(struct!.restoreGlobalState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sas_token: {
      value: cdktf.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigAzureMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigAzureMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._endpointSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSuffix = this._endpointSuffix;
    }
    if (this._includeAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAliases = this._includeAliases;
    }
    if (this._indices !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._restoreGlobalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreGlobalState = this._restoreGlobalState;
    }
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigAzureMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._account = undefined;
      this._basePath = undefined;
      this._chunkSize = undefined;
      this._compress = undefined;
      this._container = undefined;
      this._endpointSuffix = undefined;
      this._includeAliases = undefined;
      this._indices = undefined;
      this._key = undefined;
      this._readonly = undefined;
      this._restoreGlobalState = undefined;
      this._sasToken = undefined;
      this._snapshotName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._account = value.account;
      this._basePath = value.basePath;
      this._chunkSize = value.chunkSize;
      this._compress = value.compress;
      this._container = value.container;
      this._endpointSuffix = value.endpointSuffix;
      this._includeAliases = value.includeAliases;
      this._indices = value.indices;
      this._key = value.key;
      this._readonly = value.readonly;
      this._restoreGlobalState = value.restoreGlobalState;
      this._sasToken = value.sasToken;
      this._snapshotName = value.snapshotName;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // base_path - computed: false, optional: false, required: true
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // endpoint_suffix - computed: false, optional: true, required: false
  private _endpointSuffix?: string; 
  public get endpointSuffix() {
    return this.getStringAttribute('endpoint_suffix');
  }
  public set endpointSuffix(value: string) {
    this._endpointSuffix = value;
  }
  public resetEndpointSuffix() {
    this._endpointSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSuffixInput() {
    return this._endpointSuffix;
  }

  // include_aliases - computed: false, optional: true, required: false
  private _includeAliases?: boolean | cdktf.IResolvable; 
  public get includeAliases() {
    return this.getBooleanAttribute('include_aliases');
  }
  public set includeAliases(value: boolean | cdktf.IResolvable) {
    this._includeAliases = value;
  }
  public resetIncludeAliases() {
    this._includeAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAliasesInput() {
    return this._includeAliases;
  }

  // indices - computed: false, optional: false, required: true
  private _indices?: string; 
  public get indices() {
    return this.getStringAttribute('indices');
  }
  public set indices(value: string) {
    this._indices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices;
  }

  // key - computed: false, optional: true, required: false
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

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // restore_global_state - computed: false, optional: true, required: false
  private _restoreGlobalState?: boolean | cdktf.IResolvable; 
  public get restoreGlobalState() {
    return this.getBooleanAttribute('restore_global_state');
  }
  public set restoreGlobalState(value: boolean | cdktf.IResolvable) {
    this._restoreGlobalState = value;
  }
  public resetRestoreGlobalState() {
    this._restoreGlobalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreGlobalStateInput() {
    return this._restoreGlobalState;
  }

  // sas_token - computed: false, optional: true, required: false
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  public resetSasToken() {
    this._sasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }

  // snapshot_name - computed: false, optional: false, required: true
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }
}
export interface OpensearchOpensearchUserConfigGcsMigration {
  /**
  * The path to the repository data within its container. The value of this setting should not start or end with a /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#base_path Opensearch#base_path}
  */
  readonly basePath: string;
  /**
  * The path to the repository data within its container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#bucket Opensearch#bucket}
  */
  readonly bucket: string;
  /**
  * Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#chunk_size Opensearch#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * When set to true metadata files are stored in compressed format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#compress Opensearch#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Google Cloud Storage credentials file content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#credentials Opensearch#credentials}
  */
  readonly credentials: string;
  /**
  * Whether to restore aliases alongside their associated indexes. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#include_aliases Opensearch#include_aliases}
  */
  readonly includeAliases?: boolean | cdktf.IResolvable;
  /**
  * A comma-delimited list of indices to restore from the snapshot. Multi-index syntax is supported. Example: `metrics*,logs*,data-20240823`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices Opensearch#indices}
  */
  readonly indices: string;
  /**
  * Whether the repository is read-only. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#readonly Opensearch#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * If true, restore the cluster state. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#restore_global_state Opensearch#restore_global_state}
  */
  readonly restoreGlobalState?: boolean | cdktf.IResolvable;
  /**
  * The snapshot name to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#snapshot_name Opensearch#snapshot_name}
  */
  readonly snapshotName: string;
}

export function opensearchOpensearchUserConfigGcsMigrationToTerraform(struct?: OpensearchOpensearchUserConfigGcsMigrationOutputReference | OpensearchOpensearchUserConfigGcsMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_path: cdktf.stringToTerraform(struct!.basePath),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    compress: cdktf.booleanToTerraform(struct!.compress),
    credentials: cdktf.stringToTerraform(struct!.credentials),
    include_aliases: cdktf.booleanToTerraform(struct!.includeAliases),
    indices: cdktf.stringToTerraform(struct!.indices),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    restore_global_state: cdktf.booleanToTerraform(struct!.restoreGlobalState),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
  }
}


export function opensearchOpensearchUserConfigGcsMigrationToHclTerraform(struct?: OpensearchOpensearchUserConfigGcsMigrationOutputReference | OpensearchOpensearchUserConfigGcsMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credentials: {
      value: cdktf.stringToHclTerraform(struct!.credentials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_aliases: {
      value: cdktf.booleanToHclTerraform(struct!.includeAliases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    indices: {
      value: cdktf.stringToHclTerraform(struct!.indices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restore_global_state: {
      value: cdktf.booleanToHclTerraform(struct!.restoreGlobalState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigGcsMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigGcsMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._credentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials;
    }
    if (this._includeAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAliases = this._includeAliases;
    }
    if (this._indices !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._restoreGlobalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreGlobalState = this._restoreGlobalState;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigGcsMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basePath = undefined;
      this._bucket = undefined;
      this._chunkSize = undefined;
      this._compress = undefined;
      this._credentials = undefined;
      this._includeAliases = undefined;
      this._indices = undefined;
      this._readonly = undefined;
      this._restoreGlobalState = undefined;
      this._snapshotName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basePath = value.basePath;
      this._bucket = value.bucket;
      this._chunkSize = value.chunkSize;
      this._compress = value.compress;
      this._credentials = value.credentials;
      this._includeAliases = value.includeAliases;
      this._indices = value.indices;
      this._readonly = value.readonly;
      this._restoreGlobalState = value.restoreGlobalState;
      this._snapshotName = value.snapshotName;
    }
  }

  // base_path - computed: false, optional: false, required: true
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // include_aliases - computed: false, optional: true, required: false
  private _includeAliases?: boolean | cdktf.IResolvable; 
  public get includeAliases() {
    return this.getBooleanAttribute('include_aliases');
  }
  public set includeAliases(value: boolean | cdktf.IResolvable) {
    this._includeAliases = value;
  }
  public resetIncludeAliases() {
    this._includeAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAliasesInput() {
    return this._includeAliases;
  }

  // indices - computed: false, optional: false, required: true
  private _indices?: string; 
  public get indices() {
    return this.getStringAttribute('indices');
  }
  public set indices(value: string) {
    this._indices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // restore_global_state - computed: false, optional: true, required: false
  private _restoreGlobalState?: boolean | cdktf.IResolvable; 
  public get restoreGlobalState() {
    return this.getBooleanAttribute('restore_global_state');
  }
  public set restoreGlobalState(value: boolean | cdktf.IResolvable) {
    this._restoreGlobalState = value;
  }
  public resetRestoreGlobalState() {
    this._restoreGlobalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreGlobalStateInput() {
    return this._restoreGlobalState;
  }

  // snapshot_name - computed: false, optional: false, required: true
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }
}
export interface OpensearchOpensearchUserConfigIndexPatterns {
  /**
  * Maximum number of indexes to keep. Example: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#max_index_count Opensearch#max_index_count}
  */
  readonly maxIndexCount: number;
  /**
  * fnmatch pattern. Example: `logs_*_foo_*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#pattern Opensearch#pattern}
  */
  readonly pattern: string;
  /**
  * Enum: `alphabetical`, `creation_date`. Deletion sorting algorithm. Default: `creation_date`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#sorting_algorithm Opensearch#sorting_algorithm}
  */
  readonly sortingAlgorithm?: string;
}

export function opensearchOpensearchUserConfigIndexPatternsToTerraform(struct?: OpensearchOpensearchUserConfigIndexPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_index_count: cdktf.numberToTerraform(struct!.maxIndexCount),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    sorting_algorithm: cdktf.stringToTerraform(struct!.sortingAlgorithm),
  }
}


export function opensearchOpensearchUserConfigIndexPatternsToHclTerraform(struct?: OpensearchOpensearchUserConfigIndexPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_index_count: {
      value: cdktf.numberToHclTerraform(struct!.maxIndexCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sorting_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sortingAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigIndexPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchOpensearchUserConfigIndexPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIndexCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIndexCount = this._maxIndexCount;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._sortingAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortingAlgorithm = this._sortingAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigIndexPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxIndexCount = undefined;
      this._pattern = undefined;
      this._sortingAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxIndexCount = value.maxIndexCount;
      this._pattern = value.pattern;
      this._sortingAlgorithm = value.sortingAlgorithm;
    }
  }

  // max_index_count - computed: false, optional: false, required: true
  private _maxIndexCount?: number; 
  public get maxIndexCount() {
    return this.getNumberAttribute('max_index_count');
  }
  public set maxIndexCount(value: number) {
    this._maxIndexCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIndexCountInput() {
    return this._maxIndexCount;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // sorting_algorithm - computed: false, optional: true, required: false
  private _sortingAlgorithm?: string; 
  public get sortingAlgorithm() {
    return this.getStringAttribute('sorting_algorithm');
  }
  public set sortingAlgorithm(value: string) {
    this._sortingAlgorithm = value;
  }
  public resetSortingAlgorithm() {
    this._sortingAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortingAlgorithmInput() {
    return this._sortingAlgorithm;
  }
}

export class OpensearchOpensearchUserConfigIndexPatternsList extends cdktf.ComplexList {
  public internalValue? : OpensearchOpensearchUserConfigIndexPatterns[] | cdktf.IResolvable

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
  public get(index: number): OpensearchOpensearchUserConfigIndexPatternsOutputReference {
    return new OpensearchOpensearchUserConfigIndexPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchOpensearchUserConfigIndexRollup {
  /**
  * Whether rollups are enabled in OpenSearch Dashboards. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#rollup_dashboards_enabled Opensearch#rollup_dashboards_enabled}
  */
  readonly rollupDashboardsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the rollup plugin is enabled. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#rollup_enabled Opensearch#rollup_enabled}
  */
  readonly rollupEnabled?: boolean | cdktf.IResolvable;
  /**
  * How many retries the plugin should attempt for failed rollup jobs. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#rollup_search_backoff_count Opensearch#rollup_search_backoff_count}
  */
  readonly rollupSearchBackoffCount?: number;
  /**
  * The backoff time between retries for failed rollup jobs. Defaults to 1000ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#rollup_search_backoff_millis Opensearch#rollup_search_backoff_millis}
  */
  readonly rollupSearchBackoffMillis?: number;
  /**
  * Whether OpenSearch should return all jobs that match all specified search terms. If disabled, OpenSearch returns just one, as opposed to all, of the jobs that matches the search terms. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#rollup_search_search_all_jobs Opensearch#rollup_search_search_all_jobs}
  */
  readonly rollupSearchSearchAllJobs?: boolean | cdktf.IResolvable;
}

export function opensearchOpensearchUserConfigIndexRollupToTerraform(struct?: OpensearchOpensearchUserConfigIndexRollupOutputReference | OpensearchOpensearchUserConfigIndexRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rollup_dashboards_enabled: cdktf.booleanToTerraform(struct!.rollupDashboardsEnabled),
    rollup_enabled: cdktf.booleanToTerraform(struct!.rollupEnabled),
    rollup_search_backoff_count: cdktf.numberToTerraform(struct!.rollupSearchBackoffCount),
    rollup_search_backoff_millis: cdktf.numberToTerraform(struct!.rollupSearchBackoffMillis),
    rollup_search_search_all_jobs: cdktf.booleanToTerraform(struct!.rollupSearchSearchAllJobs),
  }
}


export function opensearchOpensearchUserConfigIndexRollupToHclTerraform(struct?: OpensearchOpensearchUserConfigIndexRollupOutputReference | OpensearchOpensearchUserConfigIndexRollup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rollup_dashboards_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rollupDashboardsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.rollupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollup_search_backoff_count: {
      value: cdktf.numberToHclTerraform(struct!.rollupSearchBackoffCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollup_search_backoff_millis: {
      value: cdktf.numberToHclTerraform(struct!.rollupSearchBackoffMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rollup_search_search_all_jobs: {
      value: cdktf.booleanToHclTerraform(struct!.rollupSearchSearchAllJobs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigIndexRollupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigIndexRollup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollupDashboardsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupDashboardsEnabled = this._rollupDashboardsEnabled;
    }
    if (this._rollupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupEnabled = this._rollupEnabled;
    }
    if (this._rollupSearchBackoffCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupSearchBackoffCount = this._rollupSearchBackoffCount;
    }
    if (this._rollupSearchBackoffMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupSearchBackoffMillis = this._rollupSearchBackoffMillis;
    }
    if (this._rollupSearchSearchAllJobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollupSearchSearchAllJobs = this._rollupSearchSearchAllJobs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigIndexRollup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rollupDashboardsEnabled = undefined;
      this._rollupEnabled = undefined;
      this._rollupSearchBackoffCount = undefined;
      this._rollupSearchBackoffMillis = undefined;
      this._rollupSearchSearchAllJobs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rollupDashboardsEnabled = value.rollupDashboardsEnabled;
      this._rollupEnabled = value.rollupEnabled;
      this._rollupSearchBackoffCount = value.rollupSearchBackoffCount;
      this._rollupSearchBackoffMillis = value.rollupSearchBackoffMillis;
      this._rollupSearchSearchAllJobs = value.rollupSearchSearchAllJobs;
    }
  }

  // rollup_dashboards_enabled - computed: false, optional: true, required: false
  private _rollupDashboardsEnabled?: boolean | cdktf.IResolvable; 
  public get rollupDashboardsEnabled() {
    return this.getBooleanAttribute('rollup_dashboards_enabled');
  }
  public set rollupDashboardsEnabled(value: boolean | cdktf.IResolvable) {
    this._rollupDashboardsEnabled = value;
  }
  public resetRollupDashboardsEnabled() {
    this._rollupDashboardsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupDashboardsEnabledInput() {
    return this._rollupDashboardsEnabled;
  }

  // rollup_enabled - computed: false, optional: true, required: false
  private _rollupEnabled?: boolean | cdktf.IResolvable; 
  public get rollupEnabled() {
    return this.getBooleanAttribute('rollup_enabled');
  }
  public set rollupEnabled(value: boolean | cdktf.IResolvable) {
    this._rollupEnabled = value;
  }
  public resetRollupEnabled() {
    this._rollupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupEnabledInput() {
    return this._rollupEnabled;
  }

  // rollup_search_backoff_count - computed: false, optional: true, required: false
  private _rollupSearchBackoffCount?: number; 
  public get rollupSearchBackoffCount() {
    return this.getNumberAttribute('rollup_search_backoff_count');
  }
  public set rollupSearchBackoffCount(value: number) {
    this._rollupSearchBackoffCount = value;
  }
  public resetRollupSearchBackoffCount() {
    this._rollupSearchBackoffCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupSearchBackoffCountInput() {
    return this._rollupSearchBackoffCount;
  }

  // rollup_search_backoff_millis - computed: false, optional: true, required: false
  private _rollupSearchBackoffMillis?: number; 
  public get rollupSearchBackoffMillis() {
    return this.getNumberAttribute('rollup_search_backoff_millis');
  }
  public set rollupSearchBackoffMillis(value: number) {
    this._rollupSearchBackoffMillis = value;
  }
  public resetRollupSearchBackoffMillis() {
    this._rollupSearchBackoffMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupSearchBackoffMillisInput() {
    return this._rollupSearchBackoffMillis;
  }

  // rollup_search_search_all_jobs - computed: false, optional: true, required: false
  private _rollupSearchSearchAllJobs?: boolean | cdktf.IResolvable; 
  public get rollupSearchSearchAllJobs() {
    return this.getBooleanAttribute('rollup_search_search_all_jobs');
  }
  public set rollupSearchSearchAllJobs(value: boolean | cdktf.IResolvable) {
    this._rollupSearchSearchAllJobs = value;
  }
  public resetRollupSearchSearchAllJobs() {
    this._rollupSearchSearchAllJobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupSearchSearchAllJobsInput() {
    return this._rollupSearchSearchAllJobs;
  }
}
export interface OpensearchOpensearchUserConfigIndexTemplate {
  /**
  * The maximum number of nested JSON objects that a single document can contain across all nested types. This limit helps to prevent out of memory errors when a document contains too many nested objects. Default is 10000. Deprecated, use an index template instead. Example: `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#mapping_nested_objects_limit Opensearch#mapping_nested_objects_limit}
  */
  readonly mappingNestedObjectsLimit?: number;
  /**
  * The number of replicas each primary shard has. Deprecated, use an index template instead. Example: `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#number_of_replicas Opensearch#number_of_replicas}
  */
  readonly numberOfReplicas?: number;
  /**
  * The number of primary shards that an index should have. Deprecated, use an index template instead. Example: `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#number_of_shards Opensearch#number_of_shards}
  */
  readonly numberOfShards?: number;
}

export function opensearchOpensearchUserConfigIndexTemplateToTerraform(struct?: OpensearchOpensearchUserConfigIndexTemplateOutputReference | OpensearchOpensearchUserConfigIndexTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping_nested_objects_limit: cdktf.numberToTerraform(struct!.mappingNestedObjectsLimit),
    number_of_replicas: cdktf.numberToTerraform(struct!.numberOfReplicas),
    number_of_shards: cdktf.numberToTerraform(struct!.numberOfShards),
  }
}


export function opensearchOpensearchUserConfigIndexTemplateToHclTerraform(struct?: OpensearchOpensearchUserConfigIndexTemplateOutputReference | OpensearchOpensearchUserConfigIndexTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping_nested_objects_limit: {
      value: cdktf.numberToHclTerraform(struct!.mappingNestedObjectsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numberOfReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_of_shards: {
      value: cdktf.numberToHclTerraform(struct!.numberOfShards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigIndexTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigIndexTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappingNestedObjectsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingNestedObjectsLimit = this._mappingNestedObjectsLimit;
    }
    if (this._numberOfReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfReplicas = this._numberOfReplicas;
    }
    if (this._numberOfShards !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfShards = this._numberOfShards;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigIndexTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mappingNestedObjectsLimit = undefined;
      this._numberOfReplicas = undefined;
      this._numberOfShards = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mappingNestedObjectsLimit = value.mappingNestedObjectsLimit;
      this._numberOfReplicas = value.numberOfReplicas;
      this._numberOfShards = value.numberOfShards;
    }
  }

  // mapping_nested_objects_limit - computed: false, optional: true, required: false
  private _mappingNestedObjectsLimit?: number; 
  public get mappingNestedObjectsLimit() {
    return this.getNumberAttribute('mapping_nested_objects_limit');
  }
  public set mappingNestedObjectsLimit(value: number) {
    this._mappingNestedObjectsLimit = value;
  }
  public resetMappingNestedObjectsLimit() {
    this._mappingNestedObjectsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingNestedObjectsLimitInput() {
    return this._mappingNestedObjectsLimit;
  }

  // number_of_replicas - computed: false, optional: true, required: false
  private _numberOfReplicas?: number; 
  public get numberOfReplicas() {
    return this.getNumberAttribute('number_of_replicas');
  }
  public set numberOfReplicas(value: number) {
    this._numberOfReplicas = value;
  }
  public resetNumberOfReplicas() {
    this._numberOfReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfReplicasInput() {
    return this._numberOfReplicas;
  }

  // number_of_shards - computed: false, optional: true, required: false
  private _numberOfShards?: number; 
  public get numberOfShards() {
    return this.getNumberAttribute('number_of_shards');
  }
  public set numberOfShards(value: number) {
    this._numberOfShards = value;
  }
  public resetNumberOfShards() {
    this._numberOfShards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfShardsInput() {
    return this._numberOfShards;
  }
}
export interface OpensearchOpensearchUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#description Opensearch#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#network Opensearch#network}
  */
  readonly network: string;
}

export function opensearchOpensearchUserConfigIpFilterObjectToTerraform(struct?: OpensearchOpensearchUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function opensearchOpensearchUserConfigIpFilterObjectToHclTerraform(struct?: OpensearchOpensearchUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchOpensearchUserConfigIpFilterObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._network = value.network;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class OpensearchOpensearchUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : OpensearchOpensearchUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): OpensearchOpensearchUserConfigIpFilterObjectOutputReference {
    return new OpensearchOpensearchUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchOpensearchUserConfigOpenid {
  /**
  * The ID of the OpenID Connect client configured in your IdP. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#client_id Opensearch#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret of the OpenID Connect client configured in your IdP. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#client_secret Opensearch#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The URL of your IdP where the Security plugin can find the OpenID Connect metadata/configuration settings. Example: `https://test-account.okta.com/app/exk491jujcVc83LEX697/sso/saml/metadata`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#connect_url Opensearch#connect_url}
  */
  readonly connectUrl: string;
  /**
  * Enables or disables OpenID Connect authentication for OpenSearch. When enabled, users can authenticate using OpenID Connect with an Identity Provider. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enabled Opensearch#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * HTTP header name of the JWT token. Optional. Default is Authorization. Default: `Authorization`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#header Opensearch#header}
  */
  readonly header?: string;
  /**
  * The HTTP header that stores the token. Typically the Authorization header with the Bearer schema: Authorization: Bearer <token>. Optional. Default is Authorization. Example: `preferred_username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#jwt_header Opensearch#jwt_header}
  */
  readonly jwtHeader?: string;
  /**
  * If the token is not transmitted in the HTTP header, but as an URL parameter, define the name of the parameter here. Optional. Example: `preferred_username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#jwt_url_parameter Opensearch#jwt_url_parameter}
  */
  readonly jwtUrlParameter?: string;
  /**
  * The maximum number of unknown key IDs in the time frame. Default is 10. Optional. Default: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#refresh_rate_limit_count Opensearch#refresh_rate_limit_count}
  */
  readonly refreshRateLimitCount?: number;
  /**
  * The time frame to use when checking the maximum number of unknown key IDs, in milliseconds. Optional.Default is 10000 (10 seconds). Default: `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#refresh_rate_limit_time_window_ms Opensearch#refresh_rate_limit_time_window_ms}
  */
  readonly refreshRateLimitTimeWindowMs?: number;
  /**
  * The key in the JSON payload that stores the user’s roles. The value of this key must be a comma-separated list of roles. Required only if you want to use roles in the JWT. Example: `roles`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#roles_key Opensearch#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * The scope of the identity token issued by the IdP. Optional. Default is openid profile email address phone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#scope Opensearch#scope}
  */
  readonly scope?: string;
  /**
  * The key in the JSON payload that stores the user’s name. If not defined, the subject registered claim is used. Most IdP providers use the preferred_username claim. Optional. Example: `preferred_username`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#subject_key Opensearch#subject_key}
  */
  readonly subjectKey?: string;
}

export function opensearchOpensearchUserConfigOpenidToTerraform(struct?: OpensearchOpensearchUserConfigOpenidOutputReference | OpensearchOpensearchUserConfigOpenid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    connect_url: cdktf.stringToTerraform(struct!.connectUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    header: cdktf.stringToTerraform(struct!.header),
    jwt_header: cdktf.stringToTerraform(struct!.jwtHeader),
    jwt_url_parameter: cdktf.stringToTerraform(struct!.jwtUrlParameter),
    refresh_rate_limit_count: cdktf.numberToTerraform(struct!.refreshRateLimitCount),
    refresh_rate_limit_time_window_ms: cdktf.numberToTerraform(struct!.refreshRateLimitTimeWindowMs),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    scope: cdktf.stringToTerraform(struct!.scope),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function opensearchOpensearchUserConfigOpenidToHclTerraform(struct?: OpensearchOpensearchUserConfigOpenidOutputReference | OpensearchOpensearchUserConfigOpenid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connect_url: {
      value: cdktf.stringToHclTerraform(struct!.connectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header: {
      value: cdktf.stringToHclTerraform(struct!.header),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_header: {
      value: cdktf.stringToHclTerraform(struct!.jwtHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_url_parameter: {
      value: cdktf.stringToHclTerraform(struct!.jwtUrlParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_rate_limit_count: {
      value: cdktf.numberToHclTerraform(struct!.refreshRateLimitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_rate_limit_time_window_ms: {
      value: cdktf.numberToHclTerraform(struct!.refreshRateLimitTimeWindowMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpenidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpenid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._connectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectUrl = this._connectUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._header !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header;
    }
    if (this._jwtHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtHeader = this._jwtHeader;
    }
    if (this._jwtUrlParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtUrlParameter = this._jwtUrlParameter;
    }
    if (this._refreshRateLimitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRateLimitCount = this._refreshRateLimitCount;
    }
    if (this._refreshRateLimitTimeWindowMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRateLimitTimeWindowMs = this._refreshRateLimitTimeWindowMs;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpenid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._connectUrl = undefined;
      this._enabled = undefined;
      this._header = undefined;
      this._jwtHeader = undefined;
      this._jwtUrlParameter = undefined;
      this._refreshRateLimitCount = undefined;
      this._refreshRateLimitTimeWindowMs = undefined;
      this._rolesKey = undefined;
      this._scope = undefined;
      this._subjectKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._connectUrl = value.connectUrl;
      this._enabled = value.enabled;
      this._header = value.header;
      this._jwtHeader = value.jwtHeader;
      this._jwtUrlParameter = value.jwtUrlParameter;
      this._refreshRateLimitCount = value.refreshRateLimitCount;
      this._refreshRateLimitTimeWindowMs = value.refreshRateLimitTimeWindowMs;
      this._rolesKey = value.rolesKey;
      this._scope = value.scope;
      this._subjectKey = value.subjectKey;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // connect_url - computed: false, optional: false, required: true
  private _connectUrl?: string; 
  public get connectUrl() {
    return this.getStringAttribute('connect_url');
  }
  public set connectUrl(value: string) {
    this._connectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectUrlInput() {
    return this._connectUrl;
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

  // header - computed: false, optional: true, required: false
  private _header?: string; 
  public get header() {
    return this.getStringAttribute('header');
  }
  public set header(value: string) {
    this._header = value;
  }
  public resetHeader() {
    this._header = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header;
  }

  // jwt_header - computed: false, optional: true, required: false
  private _jwtHeader?: string; 
  public get jwtHeader() {
    return this.getStringAttribute('jwt_header');
  }
  public set jwtHeader(value: string) {
    this._jwtHeader = value;
  }
  public resetJwtHeader() {
    this._jwtHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtHeaderInput() {
    return this._jwtHeader;
  }

  // jwt_url_parameter - computed: false, optional: true, required: false
  private _jwtUrlParameter?: string; 
  public get jwtUrlParameter() {
    return this.getStringAttribute('jwt_url_parameter');
  }
  public set jwtUrlParameter(value: string) {
    this._jwtUrlParameter = value;
  }
  public resetJwtUrlParameter() {
    this._jwtUrlParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtUrlParameterInput() {
    return this._jwtUrlParameter;
  }

  // refresh_rate_limit_count - computed: false, optional: true, required: false
  private _refreshRateLimitCount?: number; 
  public get refreshRateLimitCount() {
    return this.getNumberAttribute('refresh_rate_limit_count');
  }
  public set refreshRateLimitCount(value: number) {
    this._refreshRateLimitCount = value;
  }
  public resetRefreshRateLimitCount() {
    this._refreshRateLimitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateLimitCountInput() {
    return this._refreshRateLimitCount;
  }

  // refresh_rate_limit_time_window_ms - computed: false, optional: true, required: false
  private _refreshRateLimitTimeWindowMs?: number; 
  public get refreshRateLimitTimeWindowMs() {
    return this.getNumberAttribute('refresh_rate_limit_time_window_ms');
  }
  public set refreshRateLimitTimeWindowMs(value: number) {
    this._refreshRateLimitTimeWindowMs = value;
  }
  public resetRefreshRateLimitTimeWindowMs() {
    this._refreshRateLimitTimeWindowMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRateLimitTimeWindowMsInput() {
    return this._refreshRateLimitTimeWindowMs;
  }

  // roles_key - computed: false, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
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

  // subject_key - computed: false, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting {
  /**
  * The number of login attempts allowed before login is blocked. Example: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#allowed_tries Opensearch#allowed_tries}
  */
  readonly allowedTries?: number;
  /**
  * Enum: `internal`. internal_authentication_backend_limiting.authentication_backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#authentication_backend Opensearch#authentication_backend}
  */
  readonly authenticationBackend?: string;
  /**
  * The duration of time that login remains blocked after a failed login. Example: `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#block_expiry_seconds Opensearch#block_expiry_seconds}
  */
  readonly blockExpirySeconds?: number;
  /**
  * internal_authentication_backend_limiting.max_blocked_clients. Example: `100000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#max_blocked_clients Opensearch#max_blocked_clients}
  */
  readonly maxBlockedClients?: number;
  /**
  * The maximum number of tracked IP addresses that have failed login. Example: `100000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#max_tracked_clients Opensearch#max_tracked_clients}
  */
  readonly maxTrackedClients?: number;
  /**
  * The window of time in which the value for `allowed_tries` is enforced. Example: `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#time_window_seconds Opensearch#time_window_seconds}
  */
  readonly timeWindowSeconds?: number;
  /**
  * Enum: `username`. internal_authentication_backend_limiting.type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#type Opensearch#type}
  */
  readonly type?: string;
}

export function opensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference | OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_tries: cdktf.numberToTerraform(struct!.allowedTries),
    authentication_backend: cdktf.stringToTerraform(struct!.authenticationBackend),
    block_expiry_seconds: cdktf.numberToTerraform(struct!.blockExpirySeconds),
    max_blocked_clients: cdktf.numberToTerraform(struct!.maxBlockedClients),
    max_tracked_clients: cdktf.numberToTerraform(struct!.maxTrackedClients),
    time_window_seconds: cdktf.numberToTerraform(struct!.timeWindowSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function opensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference | OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_tries: {
      value: cdktf.numberToHclTerraform(struct!.allowedTries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_backend: {
      value: cdktf.stringToHclTerraform(struct!.authenticationBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_expiry_seconds: {
      value: cdktf.numberToHclTerraform(struct!.blockExpirySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_blocked_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxBlockedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_tracked_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxTrackedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeWindowSeconds),
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

export class OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedTries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTries = this._allowedTries;
    }
    if (this._authenticationBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationBackend = this._authenticationBackend;
    }
    if (this._blockExpirySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockExpirySeconds = this._blockExpirySeconds;
    }
    if (this._maxBlockedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockedClients = this._maxBlockedClients;
    }
    if (this._maxTrackedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTrackedClients = this._maxTrackedClients;
    }
    if (this._timeWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowSeconds = this._timeWindowSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedTries = undefined;
      this._authenticationBackend = undefined;
      this._blockExpirySeconds = undefined;
      this._maxBlockedClients = undefined;
      this._maxTrackedClients = undefined;
      this._timeWindowSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedTries = value.allowedTries;
      this._authenticationBackend = value.authenticationBackend;
      this._blockExpirySeconds = value.blockExpirySeconds;
      this._maxBlockedClients = value.maxBlockedClients;
      this._maxTrackedClients = value.maxTrackedClients;
      this._timeWindowSeconds = value.timeWindowSeconds;
      this._type = value.type;
    }
  }

  // allowed_tries - computed: false, optional: true, required: false
  private _allowedTries?: number; 
  public get allowedTries() {
    return this.getNumberAttribute('allowed_tries');
  }
  public set allowedTries(value: number) {
    this._allowedTries = value;
  }
  public resetAllowedTries() {
    this._allowedTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTriesInput() {
    return this._allowedTries;
  }

  // authentication_backend - computed: false, optional: true, required: false
  private _authenticationBackend?: string; 
  public get authenticationBackend() {
    return this.getStringAttribute('authentication_backend');
  }
  public set authenticationBackend(value: string) {
    this._authenticationBackend = value;
  }
  public resetAuthenticationBackend() {
    this._authenticationBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBackendInput() {
    return this._authenticationBackend;
  }

  // block_expiry_seconds - computed: false, optional: true, required: false
  private _blockExpirySeconds?: number; 
  public get blockExpirySeconds() {
    return this.getNumberAttribute('block_expiry_seconds');
  }
  public set blockExpirySeconds(value: number) {
    this._blockExpirySeconds = value;
  }
  public resetBlockExpirySeconds() {
    this._blockExpirySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpirySecondsInput() {
    return this._blockExpirySeconds;
  }

  // max_blocked_clients - computed: false, optional: true, required: false
  private _maxBlockedClients?: number; 
  public get maxBlockedClients() {
    return this.getNumberAttribute('max_blocked_clients');
  }
  public set maxBlockedClients(value: number) {
    this._maxBlockedClients = value;
  }
  public resetMaxBlockedClients() {
    this._maxBlockedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockedClientsInput() {
    return this._maxBlockedClients;
  }

  // max_tracked_clients - computed: false, optional: true, required: false
  private _maxTrackedClients?: number; 
  public get maxTrackedClients() {
    return this.getNumberAttribute('max_tracked_clients');
  }
  public set maxTrackedClients(value: number) {
    this._maxTrackedClients = value;
  }
  public resetMaxTrackedClients() {
    this._maxTrackedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrackedClientsInput() {
    return this._maxTrackedClients;
  }

  // time_window_seconds - computed: false, optional: true, required: false
  private _timeWindowSeconds?: number; 
  public get timeWindowSeconds() {
    return this.getNumberAttribute('time_window_seconds');
  }
  public set timeWindowSeconds(value: number) {
    this._timeWindowSeconds = value;
  }
  public resetTimeWindowSeconds() {
    this._timeWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowSecondsInput() {
    return this._timeWindowSeconds;
  }

  // type - computed: false, optional: true, required: false
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
export interface OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting {
  /**
  * The number of login attempts allowed before login is blocked. Example: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#allowed_tries Opensearch#allowed_tries}
  */
  readonly allowedTries?: number;
  /**
  * The duration of time that login remains blocked after a failed login. Example: `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#block_expiry_seconds Opensearch#block_expiry_seconds}
  */
  readonly blockExpirySeconds?: number;
  /**
  * The maximum number of blocked IP addresses. Example: `100000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#max_blocked_clients Opensearch#max_blocked_clients}
  */
  readonly maxBlockedClients?: number;
  /**
  * The maximum number of tracked IP addresses that have failed login. Example: `100000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#max_tracked_clients Opensearch#max_tracked_clients}
  */
  readonly maxTrackedClients?: number;
  /**
  * The window of time in which the value for `allowed_tries` is enforced. Example: `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#time_window_seconds Opensearch#time_window_seconds}
  */
  readonly timeWindowSeconds?: number;
  /**
  * Enum: `ip`. The type of rate limiting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#type Opensearch#type}
  */
  readonly type?: string;
}

export function opensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingOutputReference | OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_tries: cdktf.numberToTerraform(struct!.allowedTries),
    block_expiry_seconds: cdktf.numberToTerraform(struct!.blockExpirySeconds),
    max_blocked_clients: cdktf.numberToTerraform(struct!.maxBlockedClients),
    max_tracked_clients: cdktf.numberToTerraform(struct!.maxTrackedClients),
    time_window_seconds: cdktf.numberToTerraform(struct!.timeWindowSeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function opensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingOutputReference | OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_tries: {
      value: cdktf.numberToHclTerraform(struct!.allowedTries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_expiry_seconds: {
      value: cdktf.numberToHclTerraform(struct!.blockExpirySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_blocked_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxBlockedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_tracked_clients: {
      value: cdktf.numberToHclTerraform(struct!.maxTrackedClients),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeWindowSeconds),
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

export class OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedTries !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTries = this._allowedTries;
    }
    if (this._blockExpirySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockExpirySeconds = this._blockExpirySeconds;
    }
    if (this._maxBlockedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBlockedClients = this._maxBlockedClients;
    }
    if (this._maxTrackedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTrackedClients = this._maxTrackedClients;
    }
    if (this._timeWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowSeconds = this._timeWindowSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedTries = undefined;
      this._blockExpirySeconds = undefined;
      this._maxBlockedClients = undefined;
      this._maxTrackedClients = undefined;
      this._timeWindowSeconds = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedTries = value.allowedTries;
      this._blockExpirySeconds = value.blockExpirySeconds;
      this._maxBlockedClients = value.maxBlockedClients;
      this._maxTrackedClients = value.maxTrackedClients;
      this._timeWindowSeconds = value.timeWindowSeconds;
      this._type = value.type;
    }
  }

  // allowed_tries - computed: false, optional: true, required: false
  private _allowedTries?: number; 
  public get allowedTries() {
    return this.getNumberAttribute('allowed_tries');
  }
  public set allowedTries(value: number) {
    this._allowedTries = value;
  }
  public resetAllowedTries() {
    this._allowedTries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTriesInput() {
    return this._allowedTries;
  }

  // block_expiry_seconds - computed: false, optional: true, required: false
  private _blockExpirySeconds?: number; 
  public get blockExpirySeconds() {
    return this.getNumberAttribute('block_expiry_seconds');
  }
  public set blockExpirySeconds(value: number) {
    this._blockExpirySeconds = value;
  }
  public resetBlockExpirySeconds() {
    this._blockExpirySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockExpirySecondsInput() {
    return this._blockExpirySeconds;
  }

  // max_blocked_clients - computed: false, optional: true, required: false
  private _maxBlockedClients?: number; 
  public get maxBlockedClients() {
    return this.getNumberAttribute('max_blocked_clients');
  }
  public set maxBlockedClients(value: number) {
    this._maxBlockedClients = value;
  }
  public resetMaxBlockedClients() {
    this._maxBlockedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBlockedClientsInput() {
    return this._maxBlockedClients;
  }

  // max_tracked_clients - computed: false, optional: true, required: false
  private _maxTrackedClients?: number; 
  public get maxTrackedClients() {
    return this.getNumberAttribute('max_tracked_clients');
  }
  public set maxTrackedClients(value: number) {
    this._maxTrackedClients = value;
  }
  public resetMaxTrackedClients() {
    this._maxTrackedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrackedClientsInput() {
    return this._maxTrackedClients;
  }

  // time_window_seconds - computed: false, optional: true, required: false
  private _timeWindowSeconds?: number; 
  public get timeWindowSeconds() {
    return this.getNumberAttribute('time_window_seconds');
  }
  public set timeWindowSeconds(value: number) {
    this._timeWindowSeconds = value;
  }
  public resetTimeWindowSeconds() {
    this._timeWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowSecondsInput() {
    return this._timeWindowSeconds;
  }

  // type - computed: false, optional: true, required: false
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
export interface OpensearchOpensearchUserConfigOpensearchAuthFailureListeners {
  /**
  * internal_authentication_backend_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#internal_authentication_backend_limiting Opensearch#internal_authentication_backend_limiting}
  */
  readonly internalAuthenticationBackendLimiting?: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting;
  /**
  * ip_rate_limiting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ip_rate_limiting Opensearch#ip_rate_limiting}
  */
  readonly ipRateLimiting?: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting;
}

export function opensearchOpensearchUserConfigOpensearchAuthFailureListenersToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersOutputReference | OpensearchOpensearchUserConfigOpensearchAuthFailureListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_authentication_backend_limiting: opensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingToTerraform(struct!.internalAuthenticationBackendLimiting),
    ip_rate_limiting: opensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingToTerraform(struct!.ipRateLimiting),
  }
}


export function opensearchOpensearchUserConfigOpensearchAuthFailureListenersToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersOutputReference | OpensearchOpensearchUserConfigOpensearchAuthFailureListeners): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_authentication_backend_limiting: {
      value: opensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingToHclTerraform(struct!.internalAuthenticationBackendLimiting),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingList",
    },
    ip_rate_limiting: {
      value: opensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingToHclTerraform(struct!.ipRateLimiting),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchAuthFailureListenersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchAuthFailureListeners | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalAuthenticationBackendLimiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalAuthenticationBackendLimiting = this._internalAuthenticationBackendLimiting?.internalValue;
    }
    if (this._ipRateLimiting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRateLimiting = this._ipRateLimiting?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchAuthFailureListeners | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalAuthenticationBackendLimiting.internalValue = undefined;
      this._ipRateLimiting.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalAuthenticationBackendLimiting.internalValue = value.internalAuthenticationBackendLimiting;
      this._ipRateLimiting.internalValue = value.ipRateLimiting;
    }
  }

  // internal_authentication_backend_limiting - computed: false, optional: true, required: false
  private _internalAuthenticationBackendLimiting = new OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimitingOutputReference(this, "internal_authentication_backend_limiting");
  public get internalAuthenticationBackendLimiting() {
    return this._internalAuthenticationBackendLimiting;
  }
  public putInternalAuthenticationBackendLimiting(value: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersInternalAuthenticationBackendLimiting) {
    this._internalAuthenticationBackendLimiting.internalValue = value;
  }
  public resetInternalAuthenticationBackendLimiting() {
    this._internalAuthenticationBackendLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAuthenticationBackendLimitingInput() {
    return this._internalAuthenticationBackendLimiting.internalValue;
  }

  // ip_rate_limiting - computed: false, optional: true, required: false
  private _ipRateLimiting = new OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimitingOutputReference(this, "ip_rate_limiting");
  public get ipRateLimiting() {
    return this._ipRateLimiting;
  }
  public putIpRateLimiting(value: OpensearchOpensearchUserConfigOpensearchAuthFailureListenersIpRateLimiting) {
    this._ipRateLimiting.internalValue = value;
  }
  public resetIpRateLimiting() {
    this._ipRateLimiting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRateLimitingInput() {
    return this._ipRateLimiting.internalValue;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchClusterRemoteStore {
  /**
  * The amount of time to wait for the cluster state upload to complete. Defaults to 20s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#state_global_metadata_upload_timeout Opensearch#state_global_metadata_upload_timeout}
  */
  readonly stateGlobalMetadataUploadTimeout?: string;
  /**
  * The amount of time to wait for the manifest file upload to complete. The manifest file contains the details of each of the files uploaded for a single cluster state, both index metadata files and global metadata files. Defaults to 20s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#state_metadata_manifest_upload_timeout Opensearch#state_metadata_manifest_upload_timeout}
  */
  readonly stateMetadataManifestUploadTimeout?: string;
  /**
  * The default value of the translog buffer interval used when performing periodic translog updates. This setting is only effective when the index setting `index.remote_store.translog.buffer_interval` is not present. Defaults to 650ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#translog_buffer_interval Opensearch#translog_buffer_interval}
  */
  readonly translogBufferInterval?: string;
  /**
  * Sets the maximum number of open translog files for remote-backed indexes. This limits the total number of translog files per shard. After reaching this limit, the remote store flushes the translog files. Default is 1000. The minimum required is 100. Example: `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#translog_max_readers Opensearch#translog_max_readers}
  */
  readonly translogMaxReaders?: number;
}

export function opensearchOpensearchUserConfigOpensearchClusterRemoteStoreToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchClusterRemoteStoreOutputReference | OpensearchOpensearchUserConfigOpensearchClusterRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state_global_metadata_upload_timeout: cdktf.stringToTerraform(struct!.stateGlobalMetadataUploadTimeout),
    state_metadata_manifest_upload_timeout: cdktf.stringToTerraform(struct!.stateMetadataManifestUploadTimeout),
    translog_buffer_interval: cdktf.stringToTerraform(struct!.translogBufferInterval),
    translog_max_readers: cdktf.numberToTerraform(struct!.translogMaxReaders),
  }
}


export function opensearchOpensearchUserConfigOpensearchClusterRemoteStoreToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchClusterRemoteStoreOutputReference | OpensearchOpensearchUserConfigOpensearchClusterRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state_global_metadata_upload_timeout: {
      value: cdktf.stringToHclTerraform(struct!.stateGlobalMetadataUploadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_metadata_manifest_upload_timeout: {
      value: cdktf.stringToHclTerraform(struct!.stateMetadataManifestUploadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translog_buffer_interval: {
      value: cdktf.stringToHclTerraform(struct!.translogBufferInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translog_max_readers: {
      value: cdktf.numberToHclTerraform(struct!.translogMaxReaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchClusterRemoteStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchClusterRemoteStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stateGlobalMetadataUploadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateGlobalMetadataUploadTimeout = this._stateGlobalMetadataUploadTimeout;
    }
    if (this._stateMetadataManifestUploadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateMetadataManifestUploadTimeout = this._stateMetadataManifestUploadTimeout;
    }
    if (this._translogBufferInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.translogBufferInterval = this._translogBufferInterval;
    }
    if (this._translogMaxReaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.translogMaxReaders = this._translogMaxReaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchClusterRemoteStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stateGlobalMetadataUploadTimeout = undefined;
      this._stateMetadataManifestUploadTimeout = undefined;
      this._translogBufferInterval = undefined;
      this._translogMaxReaders = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stateGlobalMetadataUploadTimeout = value.stateGlobalMetadataUploadTimeout;
      this._stateMetadataManifestUploadTimeout = value.stateMetadataManifestUploadTimeout;
      this._translogBufferInterval = value.translogBufferInterval;
      this._translogMaxReaders = value.translogMaxReaders;
    }
  }

  // state_global_metadata_upload_timeout - computed: false, optional: true, required: false
  private _stateGlobalMetadataUploadTimeout?: string; 
  public get stateGlobalMetadataUploadTimeout() {
    return this.getStringAttribute('state_global_metadata_upload_timeout');
  }
  public set stateGlobalMetadataUploadTimeout(value: string) {
    this._stateGlobalMetadataUploadTimeout = value;
  }
  public resetStateGlobalMetadataUploadTimeout() {
    this._stateGlobalMetadataUploadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateGlobalMetadataUploadTimeoutInput() {
    return this._stateGlobalMetadataUploadTimeout;
  }

  // state_metadata_manifest_upload_timeout - computed: false, optional: true, required: false
  private _stateMetadataManifestUploadTimeout?: string; 
  public get stateMetadataManifestUploadTimeout() {
    return this.getStringAttribute('state_metadata_manifest_upload_timeout');
  }
  public set stateMetadataManifestUploadTimeout(value: string) {
    this._stateMetadataManifestUploadTimeout = value;
  }
  public resetStateMetadataManifestUploadTimeout() {
    this._stateMetadataManifestUploadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateMetadataManifestUploadTimeoutInput() {
    return this._stateMetadataManifestUploadTimeout;
  }

  // translog_buffer_interval - computed: false, optional: true, required: false
  private _translogBufferInterval?: string; 
  public get translogBufferInterval() {
    return this.getStringAttribute('translog_buffer_interval');
  }
  public set translogBufferInterval(value: string) {
    this._translogBufferInterval = value;
  }
  public resetTranslogBufferInterval() {
    this._translogBufferInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translogBufferIntervalInput() {
    return this._translogBufferInterval;
  }

  // translog_max_readers - computed: false, optional: true, required: false
  private _translogMaxReaders?: number; 
  public get translogMaxReaders() {
    return this.getNumberAttribute('translog_max_readers');
  }
  public set translogMaxReaders(value: number) {
    this._translogMaxReaders = value;
  }
  public resetTranslogMaxReaders() {
    this._translogMaxReaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translogMaxReadersInput() {
    return this._translogMaxReaders;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold {
  /**
  * Debug threshold for total request took time. The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#debug Opensearch#debug}
  */
  readonly debug?: string;
  /**
  * Info threshold for total request took time. The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#info Opensearch#info}
  */
  readonly info?: string;
  /**
  * Trace threshold for total request took time. The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#trace Opensearch#trace}
  */
  readonly trace?: string;
  /**
  * Warning threshold for total request took time. The value should be in the form count and unit, where unit one of (s,m,h,d,nanos,ms,micros) or -1. Default is -1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#warn Opensearch#warn}
  */
  readonly warn?: string;
}

export function opensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdOutputReference | OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug: cdktf.stringToTerraform(struct!.debug),
    info: cdktf.stringToTerraform(struct!.info),
    trace: cdktf.stringToTerraform(struct!.trace),
    warn: cdktf.stringToTerraform(struct!.warn),
  }
}


export function opensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdOutputReference | OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug: {
      value: cdktf.stringToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    info: {
      value: cdktf.stringToHclTerraform(struct!.info),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trace: {
      value: cdktf.stringToHclTerraform(struct!.trace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warn: {
      value: cdktf.stringToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._info !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info;
    }
    if (this._trace !== undefined) {
      hasAnyValues = true;
      internalValueResult.trace = this._trace;
    }
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debug = undefined;
      this._info = undefined;
      this._trace = undefined;
      this._warn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debug = value.debug;
      this._info = value.info;
      this._trace = value.trace;
      this._warn = value.warn;
    }
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: string; 
  public get debug() {
    return this.getStringAttribute('debug');
  }
  public set debug(value: string) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // info - computed: false, optional: true, required: false
  private _info?: string; 
  public get info() {
    return this.getStringAttribute('info');
  }
  public set info(value: string) {
    this._info = value;
  }
  public resetInfo() {
    this._info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info;
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: string; 
  public get trace() {
    return this.getStringAttribute('trace');
  }
  public set trace(value: string) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: string; 
  public get warn() {
    return this.getStringAttribute('warn');
  }
  public set warn(value: string) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog {
  /**
  * Enum: `debug`, `info`, `trace`, `warn`. Log level. Default: `trace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#level Opensearch#level}
  */
  readonly level?: string;
  /**
  * threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#threshold Opensearch#threshold}
  */
  readonly threshold?: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold;
}

export function opensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogOutputReference | OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    threshold: opensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdToTerraform(struct!.threshold),
  }
}


export function opensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogOutputReference | OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: opensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdToHclTerraform(struct!.threshold),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._threshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._threshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._threshold.internalValue = value.threshold;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold = new OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThresholdOutputReference(this, "threshold");
  public get threshold() {
    return this._threshold;
  }
  public putThreshold(value: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogThreshold) {
    this._threshold.internalValue = value;
  }
  public resetThreshold() {
    this._threshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold.internalValue;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchDiskWatermarks {
  /**
  * The flood stage watermark for disk usage. Example: `95`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#flood_stage Opensearch#flood_stage}
  */
  readonly floodStage: number;
  /**
  * The high watermark for disk usage. Example: `90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#high Opensearch#high}
  */
  readonly high: number;
  /**
  * The low watermark for disk usage. Example: `85`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#low Opensearch#low}
  */
  readonly low: number;
}

export function opensearchOpensearchUserConfigOpensearchDiskWatermarksToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchDiskWatermarksOutputReference | OpensearchOpensearchUserConfigOpensearchDiskWatermarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flood_stage: cdktf.numberToTerraform(struct!.floodStage),
    high: cdktf.numberToTerraform(struct!.high),
    low: cdktf.numberToTerraform(struct!.low),
  }
}


export function opensearchOpensearchUserConfigOpensearchDiskWatermarksToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchDiskWatermarksOutputReference | OpensearchOpensearchUserConfigOpensearchDiskWatermarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flood_stage: {
      value: cdktf.numberToHclTerraform(struct!.floodStage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high: {
      value: cdktf.numberToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low: {
      value: cdktf.numberToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchDiskWatermarksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchDiskWatermarks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floodStage !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodStage = this._floodStage;
    }
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchDiskWatermarks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._floodStage = undefined;
      this._high = undefined;
      this._low = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._floodStage = value.floodStage;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // flood_stage - computed: false, optional: false, required: true
  private _floodStage?: number; 
  public get floodStage() {
    return this.getNumberAttribute('flood_stage');
  }
  public set floodStage(value: number) {
    this._floodStage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get floodStageInput() {
    return this._floodStage;
  }

  // high - computed: false, optional: false, required: true
  private _high?: number; 
  public get high() {
    return this.getNumberAttribute('high');
  }
  public set high(value: number) {
    this._high = value;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: false, required: true
  private _low?: number; 
  public get low() {
    return this.getNumberAttribute('low');
  }
  public set low(value: number) {
    this._low = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchRemoteStore {
  /**
  * The variance factor that is used together with the moving average to calculate the dynamic bytes lag threshold for activating remote segment backpressure. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#segment_pressure_bytes_lag_variance_factor Opensearch#segment_pressure_bytes_lag_variance_factor}
  */
  readonly segmentPressureBytesLagVarianceFactor?: number;
  /**
  * The minimum consecutive failure count for activating remote segment backpressure. Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#segment_pressure_consecutive_failures_limit Opensearch#segment_pressure_consecutive_failures_limit}
  */
  readonly segmentPressureConsecutiveFailuresLimit?: number;
  /**
  * Enables remote segment backpressure. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#segment_pressure_enabled Opensearch#segment_pressure_enabled}
  */
  readonly segmentPressureEnabled?: boolean | cdktf.IResolvable;
  /**
  * The variance factor that is used together with the moving average to calculate the dynamic time lag threshold for activating remote segment backpressure. Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#segment_pressure_time_lag_variance_factor Opensearch#segment_pressure_time_lag_variance_factor}
  */
  readonly segmentPressureTimeLagVarianceFactor?: number;
}

export function opensearchOpensearchUserConfigOpensearchRemoteStoreToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchRemoteStoreOutputReference | OpensearchOpensearchUserConfigOpensearchRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment_pressure_bytes_lag_variance_factor: cdktf.numberToTerraform(struct!.segmentPressureBytesLagVarianceFactor),
    segment_pressure_consecutive_failures_limit: cdktf.numberToTerraform(struct!.segmentPressureConsecutiveFailuresLimit),
    segment_pressure_enabled: cdktf.booleanToTerraform(struct!.segmentPressureEnabled),
    segment_pressure_time_lag_variance_factor: cdktf.numberToTerraform(struct!.segmentPressureTimeLagVarianceFactor),
  }
}


export function opensearchOpensearchUserConfigOpensearchRemoteStoreToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchRemoteStoreOutputReference | OpensearchOpensearchUserConfigOpensearchRemoteStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment_pressure_bytes_lag_variance_factor: {
      value: cdktf.numberToHclTerraform(struct!.segmentPressureBytesLagVarianceFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_pressure_consecutive_failures_limit: {
      value: cdktf.numberToHclTerraform(struct!.segmentPressureConsecutiveFailuresLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_pressure_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.segmentPressureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_pressure_time_lag_variance_factor: {
      value: cdktf.numberToHclTerraform(struct!.segmentPressureTimeLagVarianceFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchRemoteStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchRemoteStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentPressureBytesLagVarianceFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPressureBytesLagVarianceFactor = this._segmentPressureBytesLagVarianceFactor;
    }
    if (this._segmentPressureConsecutiveFailuresLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPressureConsecutiveFailuresLimit = this._segmentPressureConsecutiveFailuresLimit;
    }
    if (this._segmentPressureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPressureEnabled = this._segmentPressureEnabled;
    }
    if (this._segmentPressureTimeLagVarianceFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentPressureTimeLagVarianceFactor = this._segmentPressureTimeLagVarianceFactor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchRemoteStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segmentPressureBytesLagVarianceFactor = undefined;
      this._segmentPressureConsecutiveFailuresLimit = undefined;
      this._segmentPressureEnabled = undefined;
      this._segmentPressureTimeLagVarianceFactor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segmentPressureBytesLagVarianceFactor = value.segmentPressureBytesLagVarianceFactor;
      this._segmentPressureConsecutiveFailuresLimit = value.segmentPressureConsecutiveFailuresLimit;
      this._segmentPressureEnabled = value.segmentPressureEnabled;
      this._segmentPressureTimeLagVarianceFactor = value.segmentPressureTimeLagVarianceFactor;
    }
  }

  // segment_pressure_bytes_lag_variance_factor - computed: false, optional: true, required: false
  private _segmentPressureBytesLagVarianceFactor?: number; 
  public get segmentPressureBytesLagVarianceFactor() {
    return this.getNumberAttribute('segment_pressure_bytes_lag_variance_factor');
  }
  public set segmentPressureBytesLagVarianceFactor(value: number) {
    this._segmentPressureBytesLagVarianceFactor = value;
  }
  public resetSegmentPressureBytesLagVarianceFactor() {
    this._segmentPressureBytesLagVarianceFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPressureBytesLagVarianceFactorInput() {
    return this._segmentPressureBytesLagVarianceFactor;
  }

  // segment_pressure_consecutive_failures_limit - computed: false, optional: true, required: false
  private _segmentPressureConsecutiveFailuresLimit?: number; 
  public get segmentPressureConsecutiveFailuresLimit() {
    return this.getNumberAttribute('segment_pressure_consecutive_failures_limit');
  }
  public set segmentPressureConsecutiveFailuresLimit(value: number) {
    this._segmentPressureConsecutiveFailuresLimit = value;
  }
  public resetSegmentPressureConsecutiveFailuresLimit() {
    this._segmentPressureConsecutiveFailuresLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPressureConsecutiveFailuresLimitInput() {
    return this._segmentPressureConsecutiveFailuresLimit;
  }

  // segment_pressure_enabled - computed: false, optional: true, required: false
  private _segmentPressureEnabled?: boolean | cdktf.IResolvable; 
  public get segmentPressureEnabled() {
    return this.getBooleanAttribute('segment_pressure_enabled');
  }
  public set segmentPressureEnabled(value: boolean | cdktf.IResolvable) {
    this._segmentPressureEnabled = value;
  }
  public resetSegmentPressureEnabled() {
    this._segmentPressureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPressureEnabledInput() {
    return this._segmentPressureEnabled;
  }

  // segment_pressure_time_lag_variance_factor - computed: false, optional: true, required: false
  private _segmentPressureTimeLagVarianceFactor?: number; 
  public get segmentPressureTimeLagVarianceFactor() {
    return this.getNumberAttribute('segment_pressure_time_lag_variance_factor');
  }
  public set segmentPressureTimeLagVarianceFactor(value: number) {
    this._segmentPressureTimeLagVarianceFactor = value;
  }
  public resetSegmentPressureTimeLagVarianceFactor() {
    this._segmentPressureTimeLagVarianceFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPressureTimeLagVarianceFactorInput() {
    return this._segmentPressureTimeLagVarianceFactor;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress {
  /**
  * The CPU usage threshold (as a percentage) required for a node to be considered to be under duress. Default is 0.9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cpu_threshold Opensearch#cpu_threshold}
  */
  readonly cpuThreshold?: number;
  /**
  * The heap usage threshold (as a percentage) required for a node to be considered to be under duress. Default is 0.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#heap_threshold Opensearch#heap_threshold}
  */
  readonly heapThreshold?: number;
  /**
  * The number of successive limit breaches after which the node is considered to be under duress. Default is 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#num_successive_breaches Opensearch#num_successive_breaches}
  */
  readonly numSuccessiveBreaches?: number;
}

export function opensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressOutputReference | OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_threshold: cdktf.numberToTerraform(struct!.cpuThreshold),
    heap_threshold: cdktf.numberToTerraform(struct!.heapThreshold),
    num_successive_breaches: cdktf.numberToTerraform(struct!.numSuccessiveBreaches),
  }
}


export function opensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressOutputReference | OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_threshold: {
      value: cdktf.numberToHclTerraform(struct!.heapThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_successive_breaches: {
      value: cdktf.numberToHclTerraform(struct!.numSuccessiveBreaches),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThreshold = this._cpuThreshold;
    }
    if (this._heapThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapThreshold = this._heapThreshold;
    }
    if (this._numSuccessiveBreaches !== undefined) {
      hasAnyValues = true;
      internalValueResult.numSuccessiveBreaches = this._numSuccessiveBreaches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuThreshold = undefined;
      this._heapThreshold = undefined;
      this._numSuccessiveBreaches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuThreshold = value.cpuThreshold;
      this._heapThreshold = value.heapThreshold;
      this._numSuccessiveBreaches = value.numSuccessiveBreaches;
    }
  }

  // cpu_threshold - computed: false, optional: true, required: false
  private _cpuThreshold?: number; 
  public get cpuThreshold() {
    return this.getNumberAttribute('cpu_threshold');
  }
  public set cpuThreshold(value: number) {
    this._cpuThreshold = value;
  }
  public resetCpuThreshold() {
    this._cpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdInput() {
    return this._cpuThreshold;
  }

  // heap_threshold - computed: false, optional: true, required: false
  private _heapThreshold?: number; 
  public get heapThreshold() {
    return this.getNumberAttribute('heap_threshold');
  }
  public set heapThreshold(value: number) {
    this._heapThreshold = value;
  }
  public resetHeapThreshold() {
    this._heapThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapThresholdInput() {
    return this._heapThreshold;
  }

  // num_successive_breaches - computed: false, optional: true, required: false
  private _numSuccessiveBreaches?: number; 
  public get numSuccessiveBreaches() {
    return this.getNumberAttribute('num_successive_breaches');
  }
  public set numSuccessiveBreaches(value: number) {
    this._numSuccessiveBreaches = value;
  }
  public resetNumSuccessiveBreaches() {
    this._numSuccessiveBreaches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSuccessiveBreachesInput() {
    return this._numSuccessiveBreaches;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask {
  /**
  * The maximum number of search tasks to cancel in a single iteration of the observer thread. Default is 10.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cancellation_burst Opensearch#cancellation_burst}
  */
  readonly cancellationBurst?: number;
  /**
  * The maximum number of tasks to cancel per millisecond of elapsed time. Default is 0.003.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cancellation_rate Opensearch#cancellation_rate}
  */
  readonly cancellationRate?: number;
  /**
  * The maximum number of tasks to cancel, as a percentage of successful task completions. Default is 0.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cancellation_ratio Opensearch#cancellation_ratio}
  */
  readonly cancellationRatio?: number;
  /**
  * The CPU usage threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. Default is 15000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cpu_time_millis_threshold Opensearch#cpu_time_millis_threshold}
  */
  readonly cpuTimeMillisThreshold?: number;
  /**
  * The elapsed time threshold (in milliseconds) required for a single search shard task before it is considered for cancellation. Default is 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#elapsed_time_millis_threshold Opensearch#elapsed_time_millis_threshold}
  */
  readonly elapsedTimeMillisThreshold?: number;
  /**
  * The number of previously completed search shard tasks to consider when calculating the rolling average of heap usage. Default is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#heap_moving_average_window_size Opensearch#heap_moving_average_window_size}
  */
  readonly heapMovingAverageWindowSize?: number;
  /**
  * The heap usage threshold (as a percentage) required for a single search shard task before it is considered for cancellation. Default is 0.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#heap_percent_threshold Opensearch#heap_percent_threshold}
  */
  readonly heapPercentThreshold?: number;
  /**
  * The minimum variance required for a single search shard task’s heap usage compared to the rolling average of previously completed tasks before it is considered for cancellation. Default is 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#heap_variance Opensearch#heap_variance}
  */
  readonly heapVariance?: number;
  /**
  * The heap usage threshold (as a percentage) required for the sum of heap usages of all search shard tasks before cancellation is applied. Default is 0.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#total_heap_percent_threshold Opensearch#total_heap_percent_threshold}
  */
  readonly totalHeapPercentThreshold?: number;
}

export function opensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskOutputReference | OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancellation_burst: cdktf.numberToTerraform(struct!.cancellationBurst),
    cancellation_rate: cdktf.numberToTerraform(struct!.cancellationRate),
    cancellation_ratio: cdktf.numberToTerraform(struct!.cancellationRatio),
    cpu_time_millis_threshold: cdktf.numberToTerraform(struct!.cpuTimeMillisThreshold),
    elapsed_time_millis_threshold: cdktf.numberToTerraform(struct!.elapsedTimeMillisThreshold),
    heap_moving_average_window_size: cdktf.numberToTerraform(struct!.heapMovingAverageWindowSize),
    heap_percent_threshold: cdktf.numberToTerraform(struct!.heapPercentThreshold),
    heap_variance: cdktf.numberToTerraform(struct!.heapVariance),
    total_heap_percent_threshold: cdktf.numberToTerraform(struct!.totalHeapPercentThreshold),
  }
}


export function opensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskOutputReference | OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancellation_burst: {
      value: cdktf.numberToHclTerraform(struct!.cancellationBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancellation_rate: {
      value: cdktf.numberToHclTerraform(struct!.cancellationRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancellation_ratio: {
      value: cdktf.numberToHclTerraform(struct!.cancellationRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_time_millis_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuTimeMillisThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elapsed_time_millis_threshold: {
      value: cdktf.numberToHclTerraform(struct!.elapsedTimeMillisThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_moving_average_window_size: {
      value: cdktf.numberToHclTerraform(struct!.heapMovingAverageWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_percent_threshold: {
      value: cdktf.numberToHclTerraform(struct!.heapPercentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_variance: {
      value: cdktf.numberToHclTerraform(struct!.heapVariance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_heap_percent_threshold: {
      value: cdktf.numberToHclTerraform(struct!.totalHeapPercentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancellationBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationBurst = this._cancellationBurst;
    }
    if (this._cancellationRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationRate = this._cancellationRate;
    }
    if (this._cancellationRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationRatio = this._cancellationRatio;
    }
    if (this._cpuTimeMillisThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuTimeMillisThreshold = this._cpuTimeMillisThreshold;
    }
    if (this._elapsedTimeMillisThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.elapsedTimeMillisThreshold = this._elapsedTimeMillisThreshold;
    }
    if (this._heapMovingAverageWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapMovingAverageWindowSize = this._heapMovingAverageWindowSize;
    }
    if (this._heapPercentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapPercentThreshold = this._heapPercentThreshold;
    }
    if (this._heapVariance !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapVariance = this._heapVariance;
    }
    if (this._totalHeapPercentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHeapPercentThreshold = this._totalHeapPercentThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cancellationBurst = undefined;
      this._cancellationRate = undefined;
      this._cancellationRatio = undefined;
      this._cpuTimeMillisThreshold = undefined;
      this._elapsedTimeMillisThreshold = undefined;
      this._heapMovingAverageWindowSize = undefined;
      this._heapPercentThreshold = undefined;
      this._heapVariance = undefined;
      this._totalHeapPercentThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cancellationBurst = value.cancellationBurst;
      this._cancellationRate = value.cancellationRate;
      this._cancellationRatio = value.cancellationRatio;
      this._cpuTimeMillisThreshold = value.cpuTimeMillisThreshold;
      this._elapsedTimeMillisThreshold = value.elapsedTimeMillisThreshold;
      this._heapMovingAverageWindowSize = value.heapMovingAverageWindowSize;
      this._heapPercentThreshold = value.heapPercentThreshold;
      this._heapVariance = value.heapVariance;
      this._totalHeapPercentThreshold = value.totalHeapPercentThreshold;
    }
  }

  // cancellation_burst - computed: false, optional: true, required: false
  private _cancellationBurst?: number; 
  public get cancellationBurst() {
    return this.getNumberAttribute('cancellation_burst');
  }
  public set cancellationBurst(value: number) {
    this._cancellationBurst = value;
  }
  public resetCancellationBurst() {
    this._cancellationBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationBurstInput() {
    return this._cancellationBurst;
  }

  // cancellation_rate - computed: false, optional: true, required: false
  private _cancellationRate?: number; 
  public get cancellationRate() {
    return this.getNumberAttribute('cancellation_rate');
  }
  public set cancellationRate(value: number) {
    this._cancellationRate = value;
  }
  public resetCancellationRate() {
    this._cancellationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationRateInput() {
    return this._cancellationRate;
  }

  // cancellation_ratio - computed: false, optional: true, required: false
  private _cancellationRatio?: number; 
  public get cancellationRatio() {
    return this.getNumberAttribute('cancellation_ratio');
  }
  public set cancellationRatio(value: number) {
    this._cancellationRatio = value;
  }
  public resetCancellationRatio() {
    this._cancellationRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationRatioInput() {
    return this._cancellationRatio;
  }

  // cpu_time_millis_threshold - computed: false, optional: true, required: false
  private _cpuTimeMillisThreshold?: number; 
  public get cpuTimeMillisThreshold() {
    return this.getNumberAttribute('cpu_time_millis_threshold');
  }
  public set cpuTimeMillisThreshold(value: number) {
    this._cpuTimeMillisThreshold = value;
  }
  public resetCpuTimeMillisThreshold() {
    this._cpuTimeMillisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTimeMillisThresholdInput() {
    return this._cpuTimeMillisThreshold;
  }

  // elapsed_time_millis_threshold - computed: false, optional: true, required: false
  private _elapsedTimeMillisThreshold?: number; 
  public get elapsedTimeMillisThreshold() {
    return this.getNumberAttribute('elapsed_time_millis_threshold');
  }
  public set elapsedTimeMillisThreshold(value: number) {
    this._elapsedTimeMillisThreshold = value;
  }
  public resetElapsedTimeMillisThreshold() {
    this._elapsedTimeMillisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elapsedTimeMillisThresholdInput() {
    return this._elapsedTimeMillisThreshold;
  }

  // heap_moving_average_window_size - computed: false, optional: true, required: false
  private _heapMovingAverageWindowSize?: number; 
  public get heapMovingAverageWindowSize() {
    return this.getNumberAttribute('heap_moving_average_window_size');
  }
  public set heapMovingAverageWindowSize(value: number) {
    this._heapMovingAverageWindowSize = value;
  }
  public resetHeapMovingAverageWindowSize() {
    this._heapMovingAverageWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapMovingAverageWindowSizeInput() {
    return this._heapMovingAverageWindowSize;
  }

  // heap_percent_threshold - computed: false, optional: true, required: false
  private _heapPercentThreshold?: number; 
  public get heapPercentThreshold() {
    return this.getNumberAttribute('heap_percent_threshold');
  }
  public set heapPercentThreshold(value: number) {
    this._heapPercentThreshold = value;
  }
  public resetHeapPercentThreshold() {
    this._heapPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapPercentThresholdInput() {
    return this._heapPercentThreshold;
  }

  // heap_variance - computed: false, optional: true, required: false
  private _heapVariance?: number; 
  public get heapVariance() {
    return this.getNumberAttribute('heap_variance');
  }
  public set heapVariance(value: number) {
    this._heapVariance = value;
  }
  public resetHeapVariance() {
    this._heapVariance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapVarianceInput() {
    return this._heapVariance;
  }

  // total_heap_percent_threshold - computed: false, optional: true, required: false
  private _totalHeapPercentThreshold?: number; 
  public get totalHeapPercentThreshold() {
    return this.getNumberAttribute('total_heap_percent_threshold');
  }
  public set totalHeapPercentThreshold(value: number) {
    this._totalHeapPercentThreshold = value;
  }
  public resetTotalHeapPercentThreshold() {
    this._totalHeapPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHeapPercentThresholdInput() {
    return this._totalHeapPercentThreshold;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask {
  /**
  * The maximum number of search tasks to cancel in a single iteration of the observer thread. Default is 5.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cancellation_burst Opensearch#cancellation_burst}
  */
  readonly cancellationBurst?: number;
  /**
  * The maximum number of search tasks to cancel per millisecond of elapsed time. Default is 0.003.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cancellation_rate Opensearch#cancellation_rate}
  */
  readonly cancellationRate?: number;
  /**
  * The maximum number of search tasks to cancel, as a percentage of successful search task completions. Default is 0.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cancellation_ratio Opensearch#cancellation_ratio}
  */
  readonly cancellationRatio?: number;
  /**
  * The CPU usage threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. Default is 30000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cpu_time_millis_threshold Opensearch#cpu_time_millis_threshold}
  */
  readonly cpuTimeMillisThreshold?: number;
  /**
  * The elapsed time threshold (in milliseconds) required for an individual parent task before it is considered for cancellation. Default is 45000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#elapsed_time_millis_threshold Opensearch#elapsed_time_millis_threshold}
  */
  readonly elapsedTimeMillisThreshold?: number;
  /**
  * The window size used to calculate the rolling average of the heap usage for the completed parent tasks. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#heap_moving_average_window_size Opensearch#heap_moving_average_window_size}
  */
  readonly heapMovingAverageWindowSize?: number;
  /**
  * The heap usage threshold (as a percentage) required for an individual parent task before it is considered for cancellation. Default is 0.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#heap_percent_threshold Opensearch#heap_percent_threshold}
  */
  readonly heapPercentThreshold?: number;
  /**
  * The heap usage variance required for an individual parent task before it is considered for cancellation. A task is considered for cancellation when taskHeapUsage is greater than or equal to heapUsageMovingAverage * variance. Default is 2.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#heap_variance Opensearch#heap_variance}
  */
  readonly heapVariance?: number;
  /**
  * The heap usage threshold (as a percentage) required for the sum of heap usages of all search tasks before cancellation is applied. Default is 0.5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#total_heap_percent_threshold Opensearch#total_heap_percent_threshold}
  */
  readonly totalHeapPercentThreshold?: number;
}

export function opensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskOutputReference | OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancellation_burst: cdktf.numberToTerraform(struct!.cancellationBurst),
    cancellation_rate: cdktf.numberToTerraform(struct!.cancellationRate),
    cancellation_ratio: cdktf.numberToTerraform(struct!.cancellationRatio),
    cpu_time_millis_threshold: cdktf.numberToTerraform(struct!.cpuTimeMillisThreshold),
    elapsed_time_millis_threshold: cdktf.numberToTerraform(struct!.elapsedTimeMillisThreshold),
    heap_moving_average_window_size: cdktf.numberToTerraform(struct!.heapMovingAverageWindowSize),
    heap_percent_threshold: cdktf.numberToTerraform(struct!.heapPercentThreshold),
    heap_variance: cdktf.numberToTerraform(struct!.heapVariance),
    total_heap_percent_threshold: cdktf.numberToTerraform(struct!.totalHeapPercentThreshold),
  }
}


export function opensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskOutputReference | OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancellation_burst: {
      value: cdktf.numberToHclTerraform(struct!.cancellationBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancellation_rate: {
      value: cdktf.numberToHclTerraform(struct!.cancellationRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancellation_ratio: {
      value: cdktf.numberToHclTerraform(struct!.cancellationRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_time_millis_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuTimeMillisThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elapsed_time_millis_threshold: {
      value: cdktf.numberToHclTerraform(struct!.elapsedTimeMillisThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_moving_average_window_size: {
      value: cdktf.numberToHclTerraform(struct!.heapMovingAverageWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_percent_threshold: {
      value: cdktf.numberToHclTerraform(struct!.heapPercentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    heap_variance: {
      value: cdktf.numberToHclTerraform(struct!.heapVariance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_heap_percent_threshold: {
      value: cdktf.numberToHclTerraform(struct!.totalHeapPercentThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancellationBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationBurst = this._cancellationBurst;
    }
    if (this._cancellationRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationRate = this._cancellationRate;
    }
    if (this._cancellationRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancellationRatio = this._cancellationRatio;
    }
    if (this._cpuTimeMillisThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuTimeMillisThreshold = this._cpuTimeMillisThreshold;
    }
    if (this._elapsedTimeMillisThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.elapsedTimeMillisThreshold = this._elapsedTimeMillisThreshold;
    }
    if (this._heapMovingAverageWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapMovingAverageWindowSize = this._heapMovingAverageWindowSize;
    }
    if (this._heapPercentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapPercentThreshold = this._heapPercentThreshold;
    }
    if (this._heapVariance !== undefined) {
      hasAnyValues = true;
      internalValueResult.heapVariance = this._heapVariance;
    }
    if (this._totalHeapPercentThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHeapPercentThreshold = this._totalHeapPercentThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cancellationBurst = undefined;
      this._cancellationRate = undefined;
      this._cancellationRatio = undefined;
      this._cpuTimeMillisThreshold = undefined;
      this._elapsedTimeMillisThreshold = undefined;
      this._heapMovingAverageWindowSize = undefined;
      this._heapPercentThreshold = undefined;
      this._heapVariance = undefined;
      this._totalHeapPercentThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cancellationBurst = value.cancellationBurst;
      this._cancellationRate = value.cancellationRate;
      this._cancellationRatio = value.cancellationRatio;
      this._cpuTimeMillisThreshold = value.cpuTimeMillisThreshold;
      this._elapsedTimeMillisThreshold = value.elapsedTimeMillisThreshold;
      this._heapMovingAverageWindowSize = value.heapMovingAverageWindowSize;
      this._heapPercentThreshold = value.heapPercentThreshold;
      this._heapVariance = value.heapVariance;
      this._totalHeapPercentThreshold = value.totalHeapPercentThreshold;
    }
  }

  // cancellation_burst - computed: false, optional: true, required: false
  private _cancellationBurst?: number; 
  public get cancellationBurst() {
    return this.getNumberAttribute('cancellation_burst');
  }
  public set cancellationBurst(value: number) {
    this._cancellationBurst = value;
  }
  public resetCancellationBurst() {
    this._cancellationBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationBurstInput() {
    return this._cancellationBurst;
  }

  // cancellation_rate - computed: false, optional: true, required: false
  private _cancellationRate?: number; 
  public get cancellationRate() {
    return this.getNumberAttribute('cancellation_rate');
  }
  public set cancellationRate(value: number) {
    this._cancellationRate = value;
  }
  public resetCancellationRate() {
    this._cancellationRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationRateInput() {
    return this._cancellationRate;
  }

  // cancellation_ratio - computed: false, optional: true, required: false
  private _cancellationRatio?: number; 
  public get cancellationRatio() {
    return this.getNumberAttribute('cancellation_ratio');
  }
  public set cancellationRatio(value: number) {
    this._cancellationRatio = value;
  }
  public resetCancellationRatio() {
    this._cancellationRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancellationRatioInput() {
    return this._cancellationRatio;
  }

  // cpu_time_millis_threshold - computed: false, optional: true, required: false
  private _cpuTimeMillisThreshold?: number; 
  public get cpuTimeMillisThreshold() {
    return this.getNumberAttribute('cpu_time_millis_threshold');
  }
  public set cpuTimeMillisThreshold(value: number) {
    this._cpuTimeMillisThreshold = value;
  }
  public resetCpuTimeMillisThreshold() {
    this._cpuTimeMillisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTimeMillisThresholdInput() {
    return this._cpuTimeMillisThreshold;
  }

  // elapsed_time_millis_threshold - computed: false, optional: true, required: false
  private _elapsedTimeMillisThreshold?: number; 
  public get elapsedTimeMillisThreshold() {
    return this.getNumberAttribute('elapsed_time_millis_threshold');
  }
  public set elapsedTimeMillisThreshold(value: number) {
    this._elapsedTimeMillisThreshold = value;
  }
  public resetElapsedTimeMillisThreshold() {
    this._elapsedTimeMillisThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elapsedTimeMillisThresholdInput() {
    return this._elapsedTimeMillisThreshold;
  }

  // heap_moving_average_window_size - computed: false, optional: true, required: false
  private _heapMovingAverageWindowSize?: number; 
  public get heapMovingAverageWindowSize() {
    return this.getNumberAttribute('heap_moving_average_window_size');
  }
  public set heapMovingAverageWindowSize(value: number) {
    this._heapMovingAverageWindowSize = value;
  }
  public resetHeapMovingAverageWindowSize() {
    this._heapMovingAverageWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapMovingAverageWindowSizeInput() {
    return this._heapMovingAverageWindowSize;
  }

  // heap_percent_threshold - computed: false, optional: true, required: false
  private _heapPercentThreshold?: number; 
  public get heapPercentThreshold() {
    return this.getNumberAttribute('heap_percent_threshold');
  }
  public set heapPercentThreshold(value: number) {
    this._heapPercentThreshold = value;
  }
  public resetHeapPercentThreshold() {
    this._heapPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapPercentThresholdInput() {
    return this._heapPercentThreshold;
  }

  // heap_variance - computed: false, optional: true, required: false
  private _heapVariance?: number; 
  public get heapVariance() {
    return this.getNumberAttribute('heap_variance');
  }
  public set heapVariance(value: number) {
    this._heapVariance = value;
  }
  public resetHeapVariance() {
    this._heapVariance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heapVarianceInput() {
    return this._heapVariance;
  }

  // total_heap_percent_threshold - computed: false, optional: true, required: false
  private _totalHeapPercentThreshold?: number; 
  public get totalHeapPercentThreshold() {
    return this.getNumberAttribute('total_heap_percent_threshold');
  }
  public set totalHeapPercentThreshold(value: number) {
    this._totalHeapPercentThreshold = value;
  }
  public resetTotalHeapPercentThreshold() {
    this._totalHeapPercentThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHeapPercentThresholdInput() {
    return this._totalHeapPercentThreshold;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSearchBackpressure {
  /**
  * Enum: `disabled`, `enforced`, `monitor_only`. The search backpressure mode. Valid values are monitor_only, enforced, or disabled. Default is monitor_only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#mode Opensearch#mode}
  */
  readonly mode?: string;
  /**
  * node_duress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#node_duress Opensearch#node_duress}
  */
  readonly nodeDuress?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress;
  /**
  * search_shard_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#search_shard_task Opensearch#search_shard_task}
  */
  readonly searchShardTask?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask;
  /**
  * search_task block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#search_task Opensearch#search_task}
  */
  readonly searchTask?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask;
}

export function opensearchOpensearchUserConfigOpensearchSearchBackpressureToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureOutputReference | OpensearchOpensearchUserConfigOpensearchSearchBackpressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    node_duress: opensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressToTerraform(struct!.nodeDuress),
    search_shard_task: opensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskToTerraform(struct!.searchShardTask),
    search_task: opensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskToTerraform(struct!.searchTask),
  }
}


export function opensearchOpensearchUserConfigOpensearchSearchBackpressureToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchBackpressureOutputReference | OpensearchOpensearchUserConfigOpensearchSearchBackpressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_duress: {
      value: opensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressToHclTerraform(struct!.nodeDuress),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressList",
    },
    search_shard_task: {
      value: opensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskToHclTerraform(struct!.searchShardTask),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskList",
    },
    search_task: {
      value: opensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskToHclTerraform(struct!.searchTask),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSearchBackpressureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSearchBackpressure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeDuress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDuress = this._nodeDuress?.internalValue;
    }
    if (this._searchShardTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchShardTask = this._searchShardTask?.internalValue;
    }
    if (this._searchTask?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchTask = this._searchTask?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSearchBackpressure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._nodeDuress.internalValue = undefined;
      this._searchShardTask.internalValue = undefined;
      this._searchTask.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._nodeDuress.internalValue = value.nodeDuress;
      this._searchShardTask.internalValue = value.searchShardTask;
      this._searchTask.internalValue = value.searchTask;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // node_duress - computed: false, optional: true, required: false
  private _nodeDuress = new OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuressOutputReference(this, "node_duress");
  public get nodeDuress() {
    return this._nodeDuress;
  }
  public putNodeDuress(value: OpensearchOpensearchUserConfigOpensearchSearchBackpressureNodeDuress) {
    this._nodeDuress.internalValue = value;
  }
  public resetNodeDuress() {
    this._nodeDuress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDuressInput() {
    return this._nodeDuress.internalValue;
  }

  // search_shard_task - computed: false, optional: true, required: false
  private _searchShardTask = new OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTaskOutputReference(this, "search_shard_task");
  public get searchShardTask() {
    return this._searchShardTask;
  }
  public putSearchShardTask(value: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchShardTask) {
    this._searchShardTask.internalValue = value;
  }
  public resetSearchShardTask() {
    this._searchShardTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchShardTaskInput() {
    return this._searchShardTask.internalValue;
  }

  // search_task - computed: false, optional: true, required: false
  private _searchTask = new OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTaskOutputReference(this, "search_task");
  public get searchTask() {
    return this._searchTask;
  }
  public putSearchTask(value: OpensearchOpensearchUserConfigOpensearchSearchBackpressureSearchTask) {
    this._searchTask.internalValue = value;
  }
  public resetSearchTask() {
    this._searchTask.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTaskInput() {
    return this._searchTask.internalValue;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu {
  /**
  * Enable or disable top N query monitoring by the metric. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enabled Opensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the value of N for the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#top_n_size Opensearch#top_n_size}
  */
  readonly topNSize?: number;
  /**
  * The window size of the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#window_size Opensearch#window_size}
  */
  readonly windowSize?: string;
}

export function opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuOutputReference | OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    top_n_size: cdktf.numberToTerraform(struct!.topNSize),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
  }
}


export function opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuOutputReference | OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu): any {
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
    top_n_size: {
      value: cdktf.numberToHclTerraform(struct!.topNSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topNSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.topNSize = this._topNSize;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topNSize = undefined;
      this._windowSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topNSize = value.topNSize;
      this._windowSize = value.windowSize;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // top_n_size - computed: false, optional: true, required: false
  private _topNSize?: number; 
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }
  public set topNSize(value: number) {
    this._topNSize = value;
  }
  public resetTopNSize() {
    this._topNSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNSizeInput() {
    return this._topNSize;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency {
  /**
  * Enable or disable top N query monitoring by the metric. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enabled Opensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the value of N for the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#top_n_size Opensearch#top_n_size}
  */
  readonly topNSize?: number;
  /**
  * The window size of the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#window_size Opensearch#window_size}
  */
  readonly windowSize?: string;
}

export function opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyOutputReference | OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    top_n_size: cdktf.numberToTerraform(struct!.topNSize),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
  }
}


export function opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyOutputReference | OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency): any {
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
    top_n_size: {
      value: cdktf.numberToHclTerraform(struct!.topNSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topNSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.topNSize = this._topNSize;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topNSize = undefined;
      this._windowSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topNSize = value.topNSize;
      this._windowSize = value.windowSize;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // top_n_size - computed: false, optional: true, required: false
  private _topNSize?: number; 
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }
  public set topNSize(value: number) {
    this._topNSize = value;
  }
  public resetTopNSize() {
    this._topNSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNSizeInput() {
    return this._topNSize;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory {
  /**
  * Enable or disable top N query monitoring by the metric. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enabled Opensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specify the value of N for the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#top_n_size Opensearch#top_n_size}
  */
  readonly topNSize?: number;
  /**
  * The window size of the top N queries by the metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#window_size Opensearch#window_size}
  */
  readonly windowSize?: string;
}

export function opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryOutputReference | OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    top_n_size: cdktf.numberToTerraform(struct!.topNSize),
    window_size: cdktf.stringToTerraform(struct!.windowSize),
  }
}


export function opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryOutputReference | OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory): any {
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
    top_n_size: {
      value: cdktf.numberToHclTerraform(struct!.topNSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_size: {
      value: cdktf.stringToHclTerraform(struct!.windowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topNSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.topNSize = this._topNSize;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topNSize = undefined;
      this._windowSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topNSize = value.topNSize;
      this._windowSize = value.windowSize;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // top_n_size - computed: false, optional: true, required: false
  private _topNSize?: number; 
  public get topNSize() {
    return this.getNumberAttribute('top_n_size');
  }
  public set topNSize(value: number) {
    this._topNSize = value;
  }
  public resetTopNSize() {
    this._topNSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topNSizeInput() {
    return this._topNSize;
  }

  // window_size - computed: false, optional: true, required: false
  private _windowSize?: string; 
  public get windowSize() {
    return this.getStringAttribute('window_size');
  }
  public set windowSize(value: string) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries {
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cpu Opensearch#cpu}
  */
  readonly cpu?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu;
  /**
  * latency block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#latency Opensearch#latency}
  */
  readonly latency?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#memory Opensearch#memory}
  */
  readonly memory?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory;
}

export function opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesOutputReference | OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuToTerraform(struct!.cpu),
    latency: opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyToTerraform(struct!.latency),
    memory: opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryToTerraform(struct!.memory),
  }
}


export function opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesOutputReference | OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuList",
    },
    latency: {
      value: opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyToHclTerraform(struct!.latency),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyList",
    },
    memory: {
      value: opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._latency?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.latency = this._latency?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu.internalValue = undefined;
      this._latency.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu.internalValue = value.cpu;
      this._latency.internalValue = value.latency;
      this._memory.internalValue = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // latency - computed: false, optional: true, required: false
  private _latency = new OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatencyOutputReference(this, "latency");
  public get latency() {
    return this._latency;
  }
  public putLatency(value: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesLatency) {
    this._latency.internalValue = value;
  }
  public resetLatency() {
    this._latency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyInput() {
    return this._latency.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchSegrep {
  /**
  * The maximum number of indexing checkpoints that a replica shard can fall behind when copying from primary. Once `segrep.pressure.checkpoint.limit` is breached along with `segrep.pressure.time.limit`, the segment replication backpressure mechanism is initiated. Default is 4 checkpoints. Default: `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#pressure_checkpoint_limit Opensearch#pressure_checkpoint_limit}
  */
  readonly pressureCheckpointLimit?: number;
  /**
  * Enables the segment replication backpressure mechanism. Default is false. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#pressure_enabled Opensearch#pressure_enabled}
  */
  readonly pressureEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of stale replica shards that can exist in a replication group. Once `segrep.pressure.replica.stale.limit` is breached, the segment replication backpressure mechanism is initiated. Default is .5, which is 50% of a replication group. Default: `0.5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#pressure_replica_stale_limit Opensearch#pressure_replica_stale_limit}
  */
  readonly pressureReplicaStaleLimit?: number;
  /**
  * The maximum amount of time that a replica shard can take to copy from the primary shard. Once segrep.pressure.time.limit is breached along with segrep.pressure.checkpoint.limit, the segment replication backpressure mechanism is initiated. Default is 5 minutes. Default: `5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#pressure_time_limit Opensearch#pressure_time_limit}
  */
  readonly pressureTimeLimit?: string;
}

export function opensearchOpensearchUserConfigOpensearchSegrepToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSegrepOutputReference | OpensearchOpensearchUserConfigOpensearchSegrep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pressure_checkpoint_limit: cdktf.numberToTerraform(struct!.pressureCheckpointLimit),
    pressure_enabled: cdktf.booleanToTerraform(struct!.pressureEnabled),
    pressure_replica_stale_limit: cdktf.numberToTerraform(struct!.pressureReplicaStaleLimit),
    pressure_time_limit: cdktf.stringToTerraform(struct!.pressureTimeLimit),
  }
}


export function opensearchOpensearchUserConfigOpensearchSegrepToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchSegrepOutputReference | OpensearchOpensearchUserConfigOpensearchSegrep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pressure_checkpoint_limit: {
      value: cdktf.numberToHclTerraform(struct!.pressureCheckpointLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pressure_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pressureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pressure_replica_stale_limit: {
      value: cdktf.numberToHclTerraform(struct!.pressureReplicaStaleLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pressure_time_limit: {
      value: cdktf.stringToHclTerraform(struct!.pressureTimeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchSegrepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchSegrep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pressureCheckpointLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pressureCheckpointLimit = this._pressureCheckpointLimit;
    }
    if (this._pressureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pressureEnabled = this._pressureEnabled;
    }
    if (this._pressureReplicaStaleLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pressureReplicaStaleLimit = this._pressureReplicaStaleLimit;
    }
    if (this._pressureTimeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.pressureTimeLimit = this._pressureTimeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchSegrep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pressureCheckpointLimit = undefined;
      this._pressureEnabled = undefined;
      this._pressureReplicaStaleLimit = undefined;
      this._pressureTimeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pressureCheckpointLimit = value.pressureCheckpointLimit;
      this._pressureEnabled = value.pressureEnabled;
      this._pressureReplicaStaleLimit = value.pressureReplicaStaleLimit;
      this._pressureTimeLimit = value.pressureTimeLimit;
    }
  }

  // pressure_checkpoint_limit - computed: false, optional: true, required: false
  private _pressureCheckpointLimit?: number; 
  public get pressureCheckpointLimit() {
    return this.getNumberAttribute('pressure_checkpoint_limit');
  }
  public set pressureCheckpointLimit(value: number) {
    this._pressureCheckpointLimit = value;
  }
  public resetPressureCheckpointLimit() {
    this._pressureCheckpointLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pressureCheckpointLimitInput() {
    return this._pressureCheckpointLimit;
  }

  // pressure_enabled - computed: false, optional: true, required: false
  private _pressureEnabled?: boolean | cdktf.IResolvable; 
  public get pressureEnabled() {
    return this.getBooleanAttribute('pressure_enabled');
  }
  public set pressureEnabled(value: boolean | cdktf.IResolvable) {
    this._pressureEnabled = value;
  }
  public resetPressureEnabled() {
    this._pressureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pressureEnabledInput() {
    return this._pressureEnabled;
  }

  // pressure_replica_stale_limit - computed: false, optional: true, required: false
  private _pressureReplicaStaleLimit?: number; 
  public get pressureReplicaStaleLimit() {
    return this.getNumberAttribute('pressure_replica_stale_limit');
  }
  public set pressureReplicaStaleLimit(value: number) {
    this._pressureReplicaStaleLimit = value;
  }
  public resetPressureReplicaStaleLimit() {
    this._pressureReplicaStaleLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pressureReplicaStaleLimitInput() {
    return this._pressureReplicaStaleLimit;
  }

  // pressure_time_limit - computed: false, optional: true, required: false
  private _pressureTimeLimit?: string; 
  public get pressureTimeLimit() {
    return this.getStringAttribute('pressure_time_limit');
  }
  public set pressureTimeLimit(value: string) {
    this._pressureTimeLimit = value;
  }
  public resetPressureTimeLimit() {
    this._pressureTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pressureTimeLimitInput() {
    return this._pressureTimeLimit;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor {
  /**
  * Specify the lower occupancy limit of the allocated quota of memory for the shard. If the total memory usage of a shard is below this limit, shard indexing backpressure decreases the current allocated memory for that shard. Default is 0.75.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#lower Opensearch#lower}
  */
  readonly lower?: number;
  /**
  * Specify the optimal occupancy of the allocated quota of memory for the shard. If the total memory usage of a shard is at this level, shard indexing backpressure doesn’t change the current allocated memory for that shard. Default is 0.85.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#optimal Opensearch#optimal}
  */
  readonly optimal?: number;
  /**
  * Specify the upper occupancy limit of the allocated quota of memory for the shard. If the total memory usage of a shard is above this limit, shard indexing backpressure increases the current allocated memory for that shard. Default is 0.95.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#upper Opensearch#upper}
  */
  readonly upper?: number;
}

export function opensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lower: cdktf.numberToTerraform(struct!.lower),
    optimal: cdktf.numberToTerraform(struct!.optimal),
    upper: cdktf.numberToTerraform(struct!.upper),
  }
}


export function opensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lower: {
      value: cdktf.numberToHclTerraform(struct!.lower),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optimal: {
      value: cdktf.numberToHclTerraform(struct!.optimal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    upper: {
      value: cdktf.numberToHclTerraform(struct!.upper),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lower !== undefined) {
      hasAnyValues = true;
      internalValueResult.lower = this._lower;
    }
    if (this._optimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimal = this._optimal;
    }
    if (this._upper !== undefined) {
      hasAnyValues = true;
      internalValueResult.upper = this._upper;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lower = undefined;
      this._optimal = undefined;
      this._upper = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lower = value.lower;
      this._optimal = value.optimal;
      this._upper = value.upper;
    }
  }

  // lower - computed: false, optional: true, required: false
  private _lower?: number; 
  public get lower() {
    return this.getNumberAttribute('lower');
  }
  public set lower(value: number) {
    this._lower = value;
  }
  public resetLower() {
    this._lower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerInput() {
    return this._lower;
  }

  // optimal - computed: false, optional: true, required: false
  private _optimal?: number; 
  public get optimal() {
    return this.getNumberAttribute('optimal');
  }
  public set optimal(value: number) {
    this._optimal = value;
  }
  public resetOptimal() {
    this._optimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimalInput() {
    return this._optimal;
  }

  // upper - computed: false, optional: true, required: false
  private _upper?: number; 
  public get upper() {
    return this.getNumberAttribute('upper');
  }
  public set upper(value: number) {
    this._upper = value;
  }
  public resetUpper() {
    this._upper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upperInput() {
    return this._upper;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode {
  /**
  * Define the percentage of the node-level memory threshold that acts as a soft indicator for strain on a node. Default is 0.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#soft_limit Opensearch#soft_limit}
  */
  readonly softLimit?: number;
}

export function opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    soft_limit: cdktf.numberToTerraform(struct!.softLimit),
  }
}


export function opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    soft_limit: {
      value: cdktf.numberToHclTerraform(struct!.softLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._softLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.softLimit = this._softLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._softLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._softLimit = value.softLimit;
    }
  }

  // soft_limit - computed: false, optional: true, required: false
  private _softLimit?: number; 
  public get softLimit() {
    return this.getNumberAttribute('soft_limit');
  }
  public set softLimit(value: number) {
    this._softLimit = value;
  }
  public resetSoftLimit() {
    this._softLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softLimitInput() {
    return this._softLimit;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard {
  /**
  * Specify the minimum assigned quota for a new shard in any role (coordinator, primary, or replica). Shard indexing backpressure increases or decreases this allocated quota based on the inflow of traffic for the shard. Default is 0.001.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#min_limit Opensearch#min_limit}
  */
  readonly minLimit?: number;
}

export function opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_limit: cdktf.numberToTerraform(struct!.minLimit),
  }
}


export function opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_limit: {
      value: cdktf.numberToHclTerraform(struct!.minLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLimit = this._minLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minLimit = value.minLimit;
    }
  }

  // min_limit - computed: false, optional: true, required: false
  private _minLimit?: number; 
  public get minLimit() {
    return this.getNumberAttribute('min_limit');
  }
  public set minLimit(value: number) {
    this._minLimit = value;
  }
  public resetMinLimit() {
    this._minLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLimitInput() {
    return this._minLimit;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter {
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#node Opensearch#node}
  */
  readonly nodeAttribute?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode;
  /**
  * shard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#shard Opensearch#shard}
  */
  readonly shard?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard;
}

export function opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node: opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeToTerraform(struct!.nodeAttribute),
    shard: opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardToTerraform(struct!.shard),
  }
}


export function opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node: {
      value: opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeToHclTerraform(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeList",
    },
    shard: {
      value: opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardToHclTerraform(struct!.shard),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    if (this._shard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shard = this._shard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._node.internalValue = undefined;
      this._shard.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._node.internalValue = value.nodeAttribute;
      this._shard.internalValue = value.shard;
    }
  }

  // node - computed: false, optional: true, required: false
  private _node = new OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterNode) {
    this._node.internalValue = value;
  }
  public resetNodeAttribute() {
    this._node.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }

  // shard - computed: false, optional: true, required: false
  private _shard = new OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShardOutputReference(this, "shard");
  public get shard() {
    return this._shard;
  }
  public putShard(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterShard) {
    this._shard.internalValue = value;
  }
  public resetShard() {
    this._shard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard.internalValue;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchShardIndexingPressure {
  /**
  * Enable or disable shard indexing backpressure. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enabled Opensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Run shard indexing backpressure in shadow mode or enforced mode. In shadow mode (value set as false), shard indexing backpressure tracks all granular-level metrics, but it doesn’t actually reject any indexing requests. In enforced mode (value set as true), shard indexing backpressure rejects any requests to the cluster that might cause a dip in its performance. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enforced Opensearch#enforced}
  */
  readonly enforced?: boolean | cdktf.IResolvable;
  /**
  * operating_factor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#operating_factor Opensearch#operating_factor}
  */
  readonly operatingFactor?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor;
  /**
  * primary_parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#primary_parameter Opensearch#primary_parameter}
  */
  readonly primaryParameter?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter;
}

export function opensearchOpensearchUserConfigOpensearchShardIndexingPressureToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enforced: cdktf.booleanToTerraform(struct!.enforced),
    operating_factor: opensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorToTerraform(struct!.operatingFactor),
    primary_parameter: opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterToTerraform(struct!.primaryParameter),
  }
}


export function opensearchOpensearchUserConfigOpensearchShardIndexingPressureToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOutputReference | OpensearchOpensearchUserConfigOpensearchShardIndexingPressure): any {
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
    enforced: {
      value: cdktf.booleanToHclTerraform(struct!.enforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operating_factor: {
      value: opensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorToHclTerraform(struct!.operatingFactor),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorList",
    },
    primary_parameter: {
      value: opensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterToHclTerraform(struct!.primaryParameter),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchShardIndexingPressure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforced = this._enforced;
    }
    if (this._operatingFactor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingFactor = this._operatingFactor?.internalValue;
    }
    if (this._primaryParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryParameter = this._primaryParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._enforced = undefined;
      this._operatingFactor.internalValue = undefined;
      this._primaryParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._enforced = value.enforced;
      this._operatingFactor.internalValue = value.operatingFactor;
      this._primaryParameter.internalValue = value.primaryParameter;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // enforced - computed: false, optional: true, required: false
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  public resetEnforced() {
    this._enforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced;
  }

  // operating_factor - computed: false, optional: true, required: false
  private _operatingFactor = new OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactorOutputReference(this, "operating_factor");
  public get operatingFactor() {
    return this._operatingFactor;
  }
  public putOperatingFactor(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOperatingFactor) {
    this._operatingFactor.internalValue = value;
  }
  public resetOperatingFactor() {
    this._operatingFactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingFactorInput() {
    return this._operatingFactor.internalValue;
  }

  // primary_parameter - computed: false, optional: true, required: false
  private _primaryParameter = new OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameterOutputReference(this, "primary_parameter");
  public get primaryParameter() {
    return this._primaryParameter;
  }
  public putPrimaryParameter(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressurePrimaryParameter) {
    this._primaryParameter.internalValue = value;
  }
  public resetPrimaryParameter() {
    this._primaryParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryParameterInput() {
    return this._primaryParameter.internalValue;
  }
}
export interface OpensearchOpensearchUserConfigOpensearch {
  /**
  * Explicitly allow or block automatic creation of indices. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#action_auto_create_index_enabled Opensearch#action_auto_create_index_enabled}
  */
  readonly actionAutoCreateIndexEnabled?: boolean | cdktf.IResolvable;
  /**
  * Require explicit index names when deleting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#action_destructive_requires_name Opensearch#action_destructive_requires_name}
  */
  readonly actionDestructiveRequiresName?: boolean | cdktf.IResolvable;
  /**
  * Defines a limit of how much total remote data can be referenced as a ratio of the size of the disk reserved for the file cache. This is designed to be a safeguard to prevent oversubscribing a cluster. Defaults to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cluster_filecache_remote_data_ratio Opensearch#cluster_filecache_remote_data_ratio}
  */
  readonly clusterFilecacheRemoteDataRatio?: number;
  /**
  * Controls the number of shards allowed in the cluster per data node. Example: `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cluster_max_shards_per_node Opensearch#cluster_max_shards_per_node}
  */
  readonly clusterMaxShardsPerNode?: number;
  /**
  * When set to true, OpenSearch attempts to evenly distribute the primary shards between the cluster nodes. Enabling this setting does not always guarantee an equal number of primary shards on each node, especially in the event of a failover. Changing this setting to false after it was set to true does not invoke redistribution of primary shards. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cluster_routing_allocation_balance_prefer_primary Opensearch#cluster_routing_allocation_balance_prefer_primary}
  */
  readonly clusterRoutingAllocationBalancePreferPrimary?: boolean | cdktf.IResolvable;
  /**
  * How many concurrent incoming/outgoing shard recoveries (normally replicas) are allowed to happen on a node. Defaults to node cpu count * 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cluster_routing_allocation_node_concurrent_recoveries Opensearch#cluster_routing_allocation_node_concurrent_recoveries}
  */
  readonly clusterRoutingAllocationNodeConcurrentRecoveries?: number;
  /**
  * Sender name placeholder to be used in Opensearch Dashboards and Opensearch keystore. Example: `alert-sender`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#email_sender_name Opensearch#email_sender_name}
  */
  readonly emailSenderName?: string;
  /**
  * Sender password for Opensearch alerts to authenticate with SMTP server. Example: `very-secure-mail-password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#email_sender_password Opensearch#email_sender_password}
  */
  readonly emailSenderPassword?: string;
  /**
  * Sender username for Opensearch alerts. Example: `jane@example.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#email_sender_username Opensearch#email_sender_username}
  */
  readonly emailSenderUsername?: string;
  /**
  * Enable remote-backed storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enable_remote_backed_storage Opensearch#enable_remote_backed_storage}
  */
  readonly enableRemoteBackedStorage?: boolean | cdktf.IResolvable;
  /**
  * Enable searchable snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enable_searchable_snapshots Opensearch#enable_searchable_snapshots}
  */
  readonly enableSearchableSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable security audit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enable_security_audit Opensearch#enable_security_audit}
  */
  readonly enableSecurityAudit?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable snapshot API for custom repositories, this requires security management to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enable_snapshot_api Opensearch#enable_snapshot_api}
  */
  readonly enableSnapshotApi?: boolean | cdktf.IResolvable;
  /**
  * Maximum content length for HTTP requests to the OpenSearch HTTP API, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#http_max_content_length Opensearch#http_max_content_length}
  */
  readonly httpMaxContentLength?: number;
  /**
  * The max size of allowed headers, in bytes. Example: `8192`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#http_max_header_size Opensearch#http_max_header_size}
  */
  readonly httpMaxHeaderSize?: number;
  /**
  * The max length of an HTTP URL, in bytes. Example: `4096`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#http_max_initial_line_length Opensearch#http_max_initial_line_length}
  */
  readonly httpMaxInitialLineLength?: number;
  /**
  * Relative amount. Maximum amount of heap memory used for field data cache. This is an expert setting; decreasing the value too much will increase overhead of loading field data; too much memory used for field data cache will decrease amount of heap available for other operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices_fielddata_cache_size Opensearch#indices_fielddata_cache_size}
  */
  readonly indicesFielddataCacheSize?: number;
  /**
  * Percentage value. Default is 10%. Total amount of heap used for indexing buffer, before writing segments to disk. This is an expert setting. Too low value will slow down indexing; too high value will increase indexing performance but causes performance issues for query performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices_memory_index_buffer_size Opensearch#indices_memory_index_buffer_size}
  */
  readonly indicesMemoryIndexBufferSize?: number;
  /**
  * Absolute value. Default is unbound. Doesn't work without indices.memory.index_buffer_size. Maximum amount of heap used for query cache, an absolute indices.memory.index_buffer_size maximum hard limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices_memory_max_index_buffer_size Opensearch#indices_memory_max_index_buffer_size}
  */
  readonly indicesMemoryMaxIndexBufferSize?: number;
  /**
  * Absolute value. Default is 48mb. Doesn't work without indices.memory.index_buffer_size. Minimum amount of heap used for query cache, an absolute indices.memory.index_buffer_size minimal hard limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices_memory_min_index_buffer_size Opensearch#indices_memory_min_index_buffer_size}
  */
  readonly indicesMemoryMinIndexBufferSize?: number;
  /**
  * Percentage value. Default is 10%. Maximum amount of heap used for query cache. This is an expert setting. Too low value will decrease query performance and increase performance for other operations; too high value will cause issues with other OpenSearch functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices_queries_cache_size Opensearch#indices_queries_cache_size}
  */
  readonly indicesQueriesCacheSize?: number;
  /**
  * Maximum number of clauses Lucene BooleanQuery can have. The default value (1024) is relatively high, and increasing it may cause performance issues. Investigate other approaches first before increasing this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices_query_bool_max_clause_count Opensearch#indices_query_bool_max_clause_count}
  */
  readonly indicesQueryBoolMaxClauseCount?: number;
  /**
  * Limits total inbound and outbound recovery traffic for each node. Applies to both peer recoveries as well as snapshot recoveries (i.e., restores from a snapshot). Defaults to 40mb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices_recovery_max_bytes_per_sec Opensearch#indices_recovery_max_bytes_per_sec}
  */
  readonly indicesRecoveryMaxBytesPerSec?: number;
  /**
  * Number of file chunks sent in parallel for each recovery. Defaults to 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices_recovery_max_concurrent_file_chunks Opensearch#indices_recovery_max_concurrent_file_chunks}
  */
  readonly indicesRecoveryMaxConcurrentFileChunks?: number;
  /**
  * Specifies whether ISM is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ism_enabled Opensearch#ism_enabled}
  */
  readonly ismEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether audit history is enabled or not. The logs from ISM are automatically indexed to a logs document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ism_history_enabled Opensearch#ism_history_enabled}
  */
  readonly ismHistoryEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum age before rolling over the audit history index in hours. Example: `24`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ism_history_max_age Opensearch#ism_history_max_age}
  */
  readonly ismHistoryMaxAge?: number;
  /**
  * The maximum number of documents before rolling over the audit history index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ism_history_max_docs Opensearch#ism_history_max_docs}
  */
  readonly ismHistoryMaxDocs?: number;
  /**
  * The time between rollover checks for the audit history index in hours. Example: `8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ism_history_rollover_check_period Opensearch#ism_history_rollover_check_period}
  */
  readonly ismHistoryRolloverCheckPeriod?: number;
  /**
  * How long audit history indices are kept in days. Example: `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ism_history_rollover_retention_period Opensearch#ism_history_rollover_retention_period}
  */
  readonly ismHistoryRolloverRetentionPeriod?: number;
  /**
  * Enable or disable KNN memory circuit breaker. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#knn_memory_circuit_breaker_enabled Opensearch#knn_memory_circuit_breaker_enabled}
  */
  readonly knnMemoryCircuitBreakerEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum amount of memory in percentage that can be used for the KNN index. Defaults to 50% of the JVM heap size. 0 is used to set it to null which can be used to invalidate caches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#knn_memory_circuit_breaker_limit Opensearch#knn_memory_circuit_breaker_limit}
  */
  readonly knnMemoryCircuitBreakerLimit?: number;
  /**
  * Defines a limit of how much total remote data can be referenced as a ratio of the size of the disk reserved for the file cache. This is designed to be a safeguard to prevent oversubscribing a cluster. Defaults to 5gb. Requires restarting all OpenSearch nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#node_search_cache_size Opensearch#node_search_cache_size}
  */
  readonly nodeSearchCacheSize?: string;
  /**
  * Compatibility mode sets OpenSearch to report its version as 7.10 so clients continue to work. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#override_main_response_version Opensearch#override_main_response_version}
  */
  readonly overrideMainResponseVersion?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable filtering of alerting by backend roles. Requires Security plugin. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#plugins_alerting_filter_by_backend_roles Opensearch#plugins_alerting_filter_by_backend_roles}
  */
  readonly pluginsAlertingFilterByBackendRoles?: boolean | cdktf.IResolvable;
  /**
  * Whitelisted addresses for reindexing. Changing this value will cause all OpenSearch instances to restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#reindex_remote_whitelist Opensearch#reindex_remote_whitelist}
  */
  readonly reindexRemoteWhitelist?: string[];
  /**
  * Script compilation circuit breaker limits the number of inline script compilations within a period of time. Default is use-context. Example: `75/5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#script_max_compilations_rate Opensearch#script_max_compilations_rate}
  */
  readonly scriptMaxCompilationsRate?: string;
  /**
  * Maximum number of aggregation buckets allowed in a single response. OpenSearch default value is used when this is not defined. Example: `10000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#search_max_buckets Opensearch#search_max_buckets}
  */
  readonly searchMaxBuckets?: number;
  /**
  * Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_analyze_queue_size Opensearch#thread_pool_analyze_queue_size}
  */
  readonly threadPoolAnalyzeQueueSize?: number;
  /**
  * Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_analyze_size Opensearch#thread_pool_analyze_size}
  */
  readonly threadPoolAnalyzeSize?: number;
  /**
  * Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_force_merge_size Opensearch#thread_pool_force_merge_size}
  */
  readonly threadPoolForceMergeSize?: number;
  /**
  * Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_get_queue_size Opensearch#thread_pool_get_queue_size}
  */
  readonly threadPoolGetQueueSize?: number;
  /**
  * Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_get_size Opensearch#thread_pool_get_size}
  */
  readonly threadPoolGetSize?: number;
  /**
  * Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_search_queue_size Opensearch#thread_pool_search_queue_size}
  */
  readonly threadPoolSearchQueueSize?: number;
  /**
  * Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_search_size Opensearch#thread_pool_search_size}
  */
  readonly threadPoolSearchSize?: number;
  /**
  * Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_search_throttled_queue_size Opensearch#thread_pool_search_throttled_queue_size}
  */
  readonly threadPoolSearchThrottledQueueSize?: number;
  /**
  * Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_search_throttled_size Opensearch#thread_pool_search_throttled_size}
  */
  readonly threadPoolSearchThrottledSize?: number;
  /**
  * Size for the thread pool queue. See documentation for exact details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_write_queue_size Opensearch#thread_pool_write_queue_size}
  */
  readonly threadPoolWriteQueueSize?: number;
  /**
  * Size for the thread pool. See documentation for exact details. Do note this may have maximum value depending on CPU count - value is automatically lowered if set to higher than maximum value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#thread_pool_write_size Opensearch#thread_pool_write_size}
  */
  readonly threadPoolWriteSize?: number;
  /**
  * auth_failure_listeners block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#auth_failure_listeners Opensearch#auth_failure_listeners}
  */
  readonly authFailureListeners?: OpensearchOpensearchUserConfigOpensearchAuthFailureListeners;
  /**
  * cluster_remote_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cluster_remote_store Opensearch#cluster_remote_store}
  */
  readonly clusterRemoteStore?: OpensearchOpensearchUserConfigOpensearchClusterRemoteStore;
  /**
  * cluster_search_request_slowlog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#cluster_search_request_slowlog Opensearch#cluster_search_request_slowlog}
  */
  readonly clusterSearchRequestSlowlog?: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog;
  /**
  * disk_watermarks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#disk_watermarks Opensearch#disk_watermarks}
  */
  readonly diskWatermarks?: OpensearchOpensearchUserConfigOpensearchDiskWatermarks;
  /**
  * remote_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#remote_store Opensearch#remote_store}
  */
  readonly remoteStore?: OpensearchOpensearchUserConfigOpensearchRemoteStore;
  /**
  * search_backpressure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#search_backpressure Opensearch#search_backpressure}
  */
  readonly searchBackpressure?: OpensearchOpensearchUserConfigOpensearchSearchBackpressure;
  /**
  * search_insights_top_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#search_insights_top_queries Opensearch#search_insights_top_queries}
  */
  readonly searchInsightsTopQueries?: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries;
  /**
  * segrep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#segrep Opensearch#segrep}
  */
  readonly segrep?: OpensearchOpensearchUserConfigOpensearchSegrep;
  /**
  * shard_indexing_pressure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#shard_indexing_pressure Opensearch#shard_indexing_pressure}
  */
  readonly shardIndexingPressure?: OpensearchOpensearchUserConfigOpensearchShardIndexingPressure;
}

export function opensearchOpensearchUserConfigOpensearchToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchOutputReference | OpensearchOpensearchUserConfigOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_auto_create_index_enabled: cdktf.booleanToTerraform(struct!.actionAutoCreateIndexEnabled),
    action_destructive_requires_name: cdktf.booleanToTerraform(struct!.actionDestructiveRequiresName),
    cluster_filecache_remote_data_ratio: cdktf.numberToTerraform(struct!.clusterFilecacheRemoteDataRatio),
    cluster_max_shards_per_node: cdktf.numberToTerraform(struct!.clusterMaxShardsPerNode),
    cluster_routing_allocation_balance_prefer_primary: cdktf.booleanToTerraform(struct!.clusterRoutingAllocationBalancePreferPrimary),
    cluster_routing_allocation_node_concurrent_recoveries: cdktf.numberToTerraform(struct!.clusterRoutingAllocationNodeConcurrentRecoveries),
    email_sender_name: cdktf.stringToTerraform(struct!.emailSenderName),
    email_sender_password: cdktf.stringToTerraform(struct!.emailSenderPassword),
    email_sender_username: cdktf.stringToTerraform(struct!.emailSenderUsername),
    enable_remote_backed_storage: cdktf.booleanToTerraform(struct!.enableRemoteBackedStorage),
    enable_searchable_snapshots: cdktf.booleanToTerraform(struct!.enableSearchableSnapshots),
    enable_security_audit: cdktf.booleanToTerraform(struct!.enableSecurityAudit),
    enable_snapshot_api: cdktf.booleanToTerraform(struct!.enableSnapshotApi),
    http_max_content_length: cdktf.numberToTerraform(struct!.httpMaxContentLength),
    http_max_header_size: cdktf.numberToTerraform(struct!.httpMaxHeaderSize),
    http_max_initial_line_length: cdktf.numberToTerraform(struct!.httpMaxInitialLineLength),
    indices_fielddata_cache_size: cdktf.numberToTerraform(struct!.indicesFielddataCacheSize),
    indices_memory_index_buffer_size: cdktf.numberToTerraform(struct!.indicesMemoryIndexBufferSize),
    indices_memory_max_index_buffer_size: cdktf.numberToTerraform(struct!.indicesMemoryMaxIndexBufferSize),
    indices_memory_min_index_buffer_size: cdktf.numberToTerraform(struct!.indicesMemoryMinIndexBufferSize),
    indices_queries_cache_size: cdktf.numberToTerraform(struct!.indicesQueriesCacheSize),
    indices_query_bool_max_clause_count: cdktf.numberToTerraform(struct!.indicesQueryBoolMaxClauseCount),
    indices_recovery_max_bytes_per_sec: cdktf.numberToTerraform(struct!.indicesRecoveryMaxBytesPerSec),
    indices_recovery_max_concurrent_file_chunks: cdktf.numberToTerraform(struct!.indicesRecoveryMaxConcurrentFileChunks),
    ism_enabled: cdktf.booleanToTerraform(struct!.ismEnabled),
    ism_history_enabled: cdktf.booleanToTerraform(struct!.ismHistoryEnabled),
    ism_history_max_age: cdktf.numberToTerraform(struct!.ismHistoryMaxAge),
    ism_history_max_docs: cdktf.numberToTerraform(struct!.ismHistoryMaxDocs),
    ism_history_rollover_check_period: cdktf.numberToTerraform(struct!.ismHistoryRolloverCheckPeriod),
    ism_history_rollover_retention_period: cdktf.numberToTerraform(struct!.ismHistoryRolloverRetentionPeriod),
    knn_memory_circuit_breaker_enabled: cdktf.booleanToTerraform(struct!.knnMemoryCircuitBreakerEnabled),
    knn_memory_circuit_breaker_limit: cdktf.numberToTerraform(struct!.knnMemoryCircuitBreakerLimit),
    node_search_cache_size: cdktf.stringToTerraform(struct!.nodeSearchCacheSize),
    override_main_response_version: cdktf.booleanToTerraform(struct!.overrideMainResponseVersion),
    plugins_alerting_filter_by_backend_roles: cdktf.booleanToTerraform(struct!.pluginsAlertingFilterByBackendRoles),
    reindex_remote_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reindexRemoteWhitelist),
    script_max_compilations_rate: cdktf.stringToTerraform(struct!.scriptMaxCompilationsRate),
    search_max_buckets: cdktf.numberToTerraform(struct!.searchMaxBuckets),
    thread_pool_analyze_queue_size: cdktf.numberToTerraform(struct!.threadPoolAnalyzeQueueSize),
    thread_pool_analyze_size: cdktf.numberToTerraform(struct!.threadPoolAnalyzeSize),
    thread_pool_force_merge_size: cdktf.numberToTerraform(struct!.threadPoolForceMergeSize),
    thread_pool_get_queue_size: cdktf.numberToTerraform(struct!.threadPoolGetQueueSize),
    thread_pool_get_size: cdktf.numberToTerraform(struct!.threadPoolGetSize),
    thread_pool_search_queue_size: cdktf.numberToTerraform(struct!.threadPoolSearchQueueSize),
    thread_pool_search_size: cdktf.numberToTerraform(struct!.threadPoolSearchSize),
    thread_pool_search_throttled_queue_size: cdktf.numberToTerraform(struct!.threadPoolSearchThrottledQueueSize),
    thread_pool_search_throttled_size: cdktf.numberToTerraform(struct!.threadPoolSearchThrottledSize),
    thread_pool_write_queue_size: cdktf.numberToTerraform(struct!.threadPoolWriteQueueSize),
    thread_pool_write_size: cdktf.numberToTerraform(struct!.threadPoolWriteSize),
    auth_failure_listeners: opensearchOpensearchUserConfigOpensearchAuthFailureListenersToTerraform(struct!.authFailureListeners),
    cluster_remote_store: opensearchOpensearchUserConfigOpensearchClusterRemoteStoreToTerraform(struct!.clusterRemoteStore),
    cluster_search_request_slowlog: opensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogToTerraform(struct!.clusterSearchRequestSlowlog),
    disk_watermarks: opensearchOpensearchUserConfigOpensearchDiskWatermarksToTerraform(struct!.diskWatermarks),
    remote_store: opensearchOpensearchUserConfigOpensearchRemoteStoreToTerraform(struct!.remoteStore),
    search_backpressure: opensearchOpensearchUserConfigOpensearchSearchBackpressureToTerraform(struct!.searchBackpressure),
    search_insights_top_queries: opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesToTerraform(struct!.searchInsightsTopQueries),
    segrep: opensearchOpensearchUserConfigOpensearchSegrepToTerraform(struct!.segrep),
    shard_indexing_pressure: opensearchOpensearchUserConfigOpensearchShardIndexingPressureToTerraform(struct!.shardIndexingPressure),
  }
}


export function opensearchOpensearchUserConfigOpensearchToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchOutputReference | OpensearchOpensearchUserConfigOpensearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_auto_create_index_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.actionAutoCreateIndexEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_destructive_requires_name: {
      value: cdktf.booleanToHclTerraform(struct!.actionDestructiveRequiresName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_filecache_remote_data_ratio: {
      value: cdktf.numberToHclTerraform(struct!.clusterFilecacheRemoteDataRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_max_shards_per_node: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxShardsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_routing_allocation_balance_prefer_primary: {
      value: cdktf.booleanToHclTerraform(struct!.clusterRoutingAllocationBalancePreferPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_routing_allocation_node_concurrent_recoveries: {
      value: cdktf.numberToHclTerraform(struct!.clusterRoutingAllocationNodeConcurrentRecoveries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    email_sender_name: {
      value: cdktf.stringToHclTerraform(struct!.emailSenderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_sender_password: {
      value: cdktf.stringToHclTerraform(struct!.emailSenderPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_sender_username: {
      value: cdktf.stringToHclTerraform(struct!.emailSenderUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_remote_backed_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableRemoteBackedStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_searchable_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.enableSearchableSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_security_audit: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecurityAudit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_snapshot_api: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnapshotApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_max_content_length: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxContentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_max_header_size: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxHeaderSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_max_initial_line_length: {
      value: cdktf.numberToHclTerraform(struct!.httpMaxInitialLineLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_fielddata_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesFielddataCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_memory_index_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesMemoryIndexBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_memory_max_index_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesMemoryMaxIndexBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_memory_min_index_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesMemoryMinIndexBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_queries_cache_size: {
      value: cdktf.numberToHclTerraform(struct!.indicesQueriesCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_query_bool_max_clause_count: {
      value: cdktf.numberToHclTerraform(struct!.indicesQueryBoolMaxClauseCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_recovery_max_bytes_per_sec: {
      value: cdktf.numberToHclTerraform(struct!.indicesRecoveryMaxBytesPerSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indices_recovery_max_concurrent_file_chunks: {
      value: cdktf.numberToHclTerraform(struct!.indicesRecoveryMaxConcurrentFileChunks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ism_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ismEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ism_history_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ismHistoryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ism_history_max_age: {
      value: cdktf.numberToHclTerraform(struct!.ismHistoryMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ism_history_max_docs: {
      value: cdktf.numberToHclTerraform(struct!.ismHistoryMaxDocs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ism_history_rollover_check_period: {
      value: cdktf.numberToHclTerraform(struct!.ismHistoryRolloverCheckPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ism_history_rollover_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.ismHistoryRolloverRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    knn_memory_circuit_breaker_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.knnMemoryCircuitBreakerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    knn_memory_circuit_breaker_limit: {
      value: cdktf.numberToHclTerraform(struct!.knnMemoryCircuitBreakerLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_search_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.nodeSearchCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_main_response_version: {
      value: cdktf.booleanToHclTerraform(struct!.overrideMainResponseVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    plugins_alerting_filter_by_backend_roles: {
      value: cdktf.booleanToHclTerraform(struct!.pluginsAlertingFilterByBackendRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reindex_remote_whitelist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reindexRemoteWhitelist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    script_max_compilations_rate: {
      value: cdktf.stringToHclTerraform(struct!.scriptMaxCompilationsRate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_max_buckets: {
      value: cdktf.numberToHclTerraform(struct!.searchMaxBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_analyze_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolAnalyzeQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_analyze_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolAnalyzeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_force_merge_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolForceMergeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_get_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolGetQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_get_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolGetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_search_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSearchQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_search_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSearchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_search_throttled_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSearchThrottledQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_search_throttled_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolSearchThrottledSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_write_queue_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolWriteQueueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thread_pool_write_size: {
      value: cdktf.numberToHclTerraform(struct!.threadPoolWriteSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_failure_listeners: {
      value: opensearchOpensearchUserConfigOpensearchAuthFailureListenersToHclTerraform(struct!.authFailureListeners),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchAuthFailureListenersList",
    },
    cluster_remote_store: {
      value: opensearchOpensearchUserConfigOpensearchClusterRemoteStoreToHclTerraform(struct!.clusterRemoteStore),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchClusterRemoteStoreList",
    },
    cluster_search_request_slowlog: {
      value: opensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogToHclTerraform(struct!.clusterSearchRequestSlowlog),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogList",
    },
    disk_watermarks: {
      value: opensearchOpensearchUserConfigOpensearchDiskWatermarksToHclTerraform(struct!.diskWatermarks),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchDiskWatermarksList",
    },
    remote_store: {
      value: opensearchOpensearchUserConfigOpensearchRemoteStoreToHclTerraform(struct!.remoteStore),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchRemoteStoreList",
    },
    search_backpressure: {
      value: opensearchOpensearchUserConfigOpensearchSearchBackpressureToHclTerraform(struct!.searchBackpressure),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSearchBackpressureList",
    },
    search_insights_top_queries: {
      value: opensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesToHclTerraform(struct!.searchInsightsTopQueries),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesList",
    },
    segrep: {
      value: opensearchOpensearchUserConfigOpensearchSegrepToHclTerraform(struct!.segrep),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchSegrepList",
    },
    shard_indexing_pressure: {
      value: opensearchOpensearchUserConfigOpensearchShardIndexingPressureToHclTerraform(struct!.shardIndexingPressure),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchShardIndexingPressureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionAutoCreateIndexEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionAutoCreateIndexEnabled = this._actionAutoCreateIndexEnabled;
    }
    if (this._actionDestructiveRequiresName !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDestructiveRequiresName = this._actionDestructiveRequiresName;
    }
    if (this._clusterFilecacheRemoteDataRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterFilecacheRemoteDataRatio = this._clusterFilecacheRemoteDataRatio;
    }
    if (this._clusterMaxShardsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxShardsPerNode = this._clusterMaxShardsPerNode;
    }
    if (this._clusterRoutingAllocationBalancePreferPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoutingAllocationBalancePreferPrimary = this._clusterRoutingAllocationBalancePreferPrimary;
    }
    if (this._clusterRoutingAllocationNodeConcurrentRecoveries !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoutingAllocationNodeConcurrentRecoveries = this._clusterRoutingAllocationNodeConcurrentRecoveries;
    }
    if (this._emailSenderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSenderName = this._emailSenderName;
    }
    if (this._emailSenderPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSenderPassword = this._emailSenderPassword;
    }
    if (this._emailSenderUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailSenderUsername = this._emailSenderUsername;
    }
    if (this._enableRemoteBackedStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRemoteBackedStorage = this._enableRemoteBackedStorage;
    }
    if (this._enableSearchableSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSearchableSnapshots = this._enableSearchableSnapshots;
    }
    if (this._enableSecurityAudit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecurityAudit = this._enableSecurityAudit;
    }
    if (this._enableSnapshotApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnapshotApi = this._enableSnapshotApi;
    }
    if (this._httpMaxContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxContentLength = this._httpMaxContentLength;
    }
    if (this._httpMaxHeaderSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxHeaderSize = this._httpMaxHeaderSize;
    }
    if (this._httpMaxInitialLineLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaxInitialLineLength = this._httpMaxInitialLineLength;
    }
    if (this._indicesFielddataCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesFielddataCacheSize = this._indicesFielddataCacheSize;
    }
    if (this._indicesMemoryIndexBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesMemoryIndexBufferSize = this._indicesMemoryIndexBufferSize;
    }
    if (this._indicesMemoryMaxIndexBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesMemoryMaxIndexBufferSize = this._indicesMemoryMaxIndexBufferSize;
    }
    if (this._indicesMemoryMinIndexBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesMemoryMinIndexBufferSize = this._indicesMemoryMinIndexBufferSize;
    }
    if (this._indicesQueriesCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesQueriesCacheSize = this._indicesQueriesCacheSize;
    }
    if (this._indicesQueryBoolMaxClauseCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesQueryBoolMaxClauseCount = this._indicesQueryBoolMaxClauseCount;
    }
    if (this._indicesRecoveryMaxBytesPerSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesRecoveryMaxBytesPerSec = this._indicesRecoveryMaxBytesPerSec;
    }
    if (this._indicesRecoveryMaxConcurrentFileChunks !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicesRecoveryMaxConcurrentFileChunks = this._indicesRecoveryMaxConcurrentFileChunks;
    }
    if (this._ismEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismEnabled = this._ismEnabled;
    }
    if (this._ismHistoryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryEnabled = this._ismHistoryEnabled;
    }
    if (this._ismHistoryMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryMaxAge = this._ismHistoryMaxAge;
    }
    if (this._ismHistoryMaxDocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryMaxDocs = this._ismHistoryMaxDocs;
    }
    if (this._ismHistoryRolloverCheckPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryRolloverCheckPeriod = this._ismHistoryRolloverCheckPeriod;
    }
    if (this._ismHistoryRolloverRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ismHistoryRolloverRetentionPeriod = this._ismHistoryRolloverRetentionPeriod;
    }
    if (this._knnMemoryCircuitBreakerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.knnMemoryCircuitBreakerEnabled = this._knnMemoryCircuitBreakerEnabled;
    }
    if (this._knnMemoryCircuitBreakerLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.knnMemoryCircuitBreakerLimit = this._knnMemoryCircuitBreakerLimit;
    }
    if (this._nodeSearchCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSearchCacheSize = this._nodeSearchCacheSize;
    }
    if (this._overrideMainResponseVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideMainResponseVersion = this._overrideMainResponseVersion;
    }
    if (this._pluginsAlertingFilterByBackendRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginsAlertingFilterByBackendRoles = this._pluginsAlertingFilterByBackendRoles;
    }
    if (this._reindexRemoteWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.reindexRemoteWhitelist = this._reindexRemoteWhitelist;
    }
    if (this._scriptMaxCompilationsRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptMaxCompilationsRate = this._scriptMaxCompilationsRate;
    }
    if (this._searchMaxBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchMaxBuckets = this._searchMaxBuckets;
    }
    if (this._threadPoolAnalyzeQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolAnalyzeQueueSize = this._threadPoolAnalyzeQueueSize;
    }
    if (this._threadPoolAnalyzeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolAnalyzeSize = this._threadPoolAnalyzeSize;
    }
    if (this._threadPoolForceMergeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolForceMergeSize = this._threadPoolForceMergeSize;
    }
    if (this._threadPoolGetQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolGetQueueSize = this._threadPoolGetQueueSize;
    }
    if (this._threadPoolGetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolGetSize = this._threadPoolGetSize;
    }
    if (this._threadPoolSearchQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSearchQueueSize = this._threadPoolSearchQueueSize;
    }
    if (this._threadPoolSearchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSearchSize = this._threadPoolSearchSize;
    }
    if (this._threadPoolSearchThrottledQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSearchThrottledQueueSize = this._threadPoolSearchThrottledQueueSize;
    }
    if (this._threadPoolSearchThrottledSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolSearchThrottledSize = this._threadPoolSearchThrottledSize;
    }
    if (this._threadPoolWriteQueueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolWriteQueueSize = this._threadPoolWriteQueueSize;
    }
    if (this._threadPoolWriteSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadPoolWriteSize = this._threadPoolWriteSize;
    }
    if (this._authFailureListeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailureListeners = this._authFailureListeners?.internalValue;
    }
    if (this._clusterRemoteStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRemoteStore = this._clusterRemoteStore?.internalValue;
    }
    if (this._clusterSearchRequestSlowlog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSearchRequestSlowlog = this._clusterSearchRequestSlowlog?.internalValue;
    }
    if (this._diskWatermarks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskWatermarks = this._diskWatermarks?.internalValue;
    }
    if (this._remoteStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteStore = this._remoteStore?.internalValue;
    }
    if (this._searchBackpressure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchBackpressure = this._searchBackpressure?.internalValue;
    }
    if (this._searchInsightsTopQueries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchInsightsTopQueries = this._searchInsightsTopQueries?.internalValue;
    }
    if (this._segrep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segrep = this._segrep?.internalValue;
    }
    if (this._shardIndexingPressure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardIndexingPressure = this._shardIndexingPressure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionAutoCreateIndexEnabled = undefined;
      this._actionDestructiveRequiresName = undefined;
      this._clusterFilecacheRemoteDataRatio = undefined;
      this._clusterMaxShardsPerNode = undefined;
      this._clusterRoutingAllocationBalancePreferPrimary = undefined;
      this._clusterRoutingAllocationNodeConcurrentRecoveries = undefined;
      this._emailSenderName = undefined;
      this._emailSenderPassword = undefined;
      this._emailSenderUsername = undefined;
      this._enableRemoteBackedStorage = undefined;
      this._enableSearchableSnapshots = undefined;
      this._enableSecurityAudit = undefined;
      this._enableSnapshotApi = undefined;
      this._httpMaxContentLength = undefined;
      this._httpMaxHeaderSize = undefined;
      this._httpMaxInitialLineLength = undefined;
      this._indicesFielddataCacheSize = undefined;
      this._indicesMemoryIndexBufferSize = undefined;
      this._indicesMemoryMaxIndexBufferSize = undefined;
      this._indicesMemoryMinIndexBufferSize = undefined;
      this._indicesQueriesCacheSize = undefined;
      this._indicesQueryBoolMaxClauseCount = undefined;
      this._indicesRecoveryMaxBytesPerSec = undefined;
      this._indicesRecoveryMaxConcurrentFileChunks = undefined;
      this._ismEnabled = undefined;
      this._ismHistoryEnabled = undefined;
      this._ismHistoryMaxAge = undefined;
      this._ismHistoryMaxDocs = undefined;
      this._ismHistoryRolloverCheckPeriod = undefined;
      this._ismHistoryRolloverRetentionPeriod = undefined;
      this._knnMemoryCircuitBreakerEnabled = undefined;
      this._knnMemoryCircuitBreakerLimit = undefined;
      this._nodeSearchCacheSize = undefined;
      this._overrideMainResponseVersion = undefined;
      this._pluginsAlertingFilterByBackendRoles = undefined;
      this._reindexRemoteWhitelist = undefined;
      this._scriptMaxCompilationsRate = undefined;
      this._searchMaxBuckets = undefined;
      this._threadPoolAnalyzeQueueSize = undefined;
      this._threadPoolAnalyzeSize = undefined;
      this._threadPoolForceMergeSize = undefined;
      this._threadPoolGetQueueSize = undefined;
      this._threadPoolGetSize = undefined;
      this._threadPoolSearchQueueSize = undefined;
      this._threadPoolSearchSize = undefined;
      this._threadPoolSearchThrottledQueueSize = undefined;
      this._threadPoolSearchThrottledSize = undefined;
      this._threadPoolWriteQueueSize = undefined;
      this._threadPoolWriteSize = undefined;
      this._authFailureListeners.internalValue = undefined;
      this._clusterRemoteStore.internalValue = undefined;
      this._clusterSearchRequestSlowlog.internalValue = undefined;
      this._diskWatermarks.internalValue = undefined;
      this._remoteStore.internalValue = undefined;
      this._searchBackpressure.internalValue = undefined;
      this._searchInsightsTopQueries.internalValue = undefined;
      this._segrep.internalValue = undefined;
      this._shardIndexingPressure.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionAutoCreateIndexEnabled = value.actionAutoCreateIndexEnabled;
      this._actionDestructiveRequiresName = value.actionDestructiveRequiresName;
      this._clusterFilecacheRemoteDataRatio = value.clusterFilecacheRemoteDataRatio;
      this._clusterMaxShardsPerNode = value.clusterMaxShardsPerNode;
      this._clusterRoutingAllocationBalancePreferPrimary = value.clusterRoutingAllocationBalancePreferPrimary;
      this._clusterRoutingAllocationNodeConcurrentRecoveries = value.clusterRoutingAllocationNodeConcurrentRecoveries;
      this._emailSenderName = value.emailSenderName;
      this._emailSenderPassword = value.emailSenderPassword;
      this._emailSenderUsername = value.emailSenderUsername;
      this._enableRemoteBackedStorage = value.enableRemoteBackedStorage;
      this._enableSearchableSnapshots = value.enableSearchableSnapshots;
      this._enableSecurityAudit = value.enableSecurityAudit;
      this._enableSnapshotApi = value.enableSnapshotApi;
      this._httpMaxContentLength = value.httpMaxContentLength;
      this._httpMaxHeaderSize = value.httpMaxHeaderSize;
      this._httpMaxInitialLineLength = value.httpMaxInitialLineLength;
      this._indicesFielddataCacheSize = value.indicesFielddataCacheSize;
      this._indicesMemoryIndexBufferSize = value.indicesMemoryIndexBufferSize;
      this._indicesMemoryMaxIndexBufferSize = value.indicesMemoryMaxIndexBufferSize;
      this._indicesMemoryMinIndexBufferSize = value.indicesMemoryMinIndexBufferSize;
      this._indicesQueriesCacheSize = value.indicesQueriesCacheSize;
      this._indicesQueryBoolMaxClauseCount = value.indicesQueryBoolMaxClauseCount;
      this._indicesRecoveryMaxBytesPerSec = value.indicesRecoveryMaxBytesPerSec;
      this._indicesRecoveryMaxConcurrentFileChunks = value.indicesRecoveryMaxConcurrentFileChunks;
      this._ismEnabled = value.ismEnabled;
      this._ismHistoryEnabled = value.ismHistoryEnabled;
      this._ismHistoryMaxAge = value.ismHistoryMaxAge;
      this._ismHistoryMaxDocs = value.ismHistoryMaxDocs;
      this._ismHistoryRolloverCheckPeriod = value.ismHistoryRolloverCheckPeriod;
      this._ismHistoryRolloverRetentionPeriod = value.ismHistoryRolloverRetentionPeriod;
      this._knnMemoryCircuitBreakerEnabled = value.knnMemoryCircuitBreakerEnabled;
      this._knnMemoryCircuitBreakerLimit = value.knnMemoryCircuitBreakerLimit;
      this._nodeSearchCacheSize = value.nodeSearchCacheSize;
      this._overrideMainResponseVersion = value.overrideMainResponseVersion;
      this._pluginsAlertingFilterByBackendRoles = value.pluginsAlertingFilterByBackendRoles;
      this._reindexRemoteWhitelist = value.reindexRemoteWhitelist;
      this._scriptMaxCompilationsRate = value.scriptMaxCompilationsRate;
      this._searchMaxBuckets = value.searchMaxBuckets;
      this._threadPoolAnalyzeQueueSize = value.threadPoolAnalyzeQueueSize;
      this._threadPoolAnalyzeSize = value.threadPoolAnalyzeSize;
      this._threadPoolForceMergeSize = value.threadPoolForceMergeSize;
      this._threadPoolGetQueueSize = value.threadPoolGetQueueSize;
      this._threadPoolGetSize = value.threadPoolGetSize;
      this._threadPoolSearchQueueSize = value.threadPoolSearchQueueSize;
      this._threadPoolSearchSize = value.threadPoolSearchSize;
      this._threadPoolSearchThrottledQueueSize = value.threadPoolSearchThrottledQueueSize;
      this._threadPoolSearchThrottledSize = value.threadPoolSearchThrottledSize;
      this._threadPoolWriteQueueSize = value.threadPoolWriteQueueSize;
      this._threadPoolWriteSize = value.threadPoolWriteSize;
      this._authFailureListeners.internalValue = value.authFailureListeners;
      this._clusterRemoteStore.internalValue = value.clusterRemoteStore;
      this._clusterSearchRequestSlowlog.internalValue = value.clusterSearchRequestSlowlog;
      this._diskWatermarks.internalValue = value.diskWatermarks;
      this._remoteStore.internalValue = value.remoteStore;
      this._searchBackpressure.internalValue = value.searchBackpressure;
      this._searchInsightsTopQueries.internalValue = value.searchInsightsTopQueries;
      this._segrep.internalValue = value.segrep;
      this._shardIndexingPressure.internalValue = value.shardIndexingPressure;
    }
  }

  // action_auto_create_index_enabled - computed: false, optional: true, required: false
  private _actionAutoCreateIndexEnabled?: boolean | cdktf.IResolvable; 
  public get actionAutoCreateIndexEnabled() {
    return this.getBooleanAttribute('action_auto_create_index_enabled');
  }
  public set actionAutoCreateIndexEnabled(value: boolean | cdktf.IResolvable) {
    this._actionAutoCreateIndexEnabled = value;
  }
  public resetActionAutoCreateIndexEnabled() {
    this._actionAutoCreateIndexEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionAutoCreateIndexEnabledInput() {
    return this._actionAutoCreateIndexEnabled;
  }

  // action_destructive_requires_name - computed: false, optional: true, required: false
  private _actionDestructiveRequiresName?: boolean | cdktf.IResolvable; 
  public get actionDestructiveRequiresName() {
    return this.getBooleanAttribute('action_destructive_requires_name');
  }
  public set actionDestructiveRequiresName(value: boolean | cdktf.IResolvable) {
    this._actionDestructiveRequiresName = value;
  }
  public resetActionDestructiveRequiresName() {
    this._actionDestructiveRequiresName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDestructiveRequiresNameInput() {
    return this._actionDestructiveRequiresName;
  }

  // cluster_filecache_remote_data_ratio - computed: false, optional: true, required: false
  private _clusterFilecacheRemoteDataRatio?: number; 
  public get clusterFilecacheRemoteDataRatio() {
    return this.getNumberAttribute('cluster_filecache_remote_data_ratio');
  }
  public set clusterFilecacheRemoteDataRatio(value: number) {
    this._clusterFilecacheRemoteDataRatio = value;
  }
  public resetClusterFilecacheRemoteDataRatio() {
    this._clusterFilecacheRemoteDataRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterFilecacheRemoteDataRatioInput() {
    return this._clusterFilecacheRemoteDataRatio;
  }

  // cluster_max_shards_per_node - computed: false, optional: true, required: false
  private _clusterMaxShardsPerNode?: number; 
  public get clusterMaxShardsPerNode() {
    return this.getNumberAttribute('cluster_max_shards_per_node');
  }
  public set clusterMaxShardsPerNode(value: number) {
    this._clusterMaxShardsPerNode = value;
  }
  public resetClusterMaxShardsPerNode() {
    this._clusterMaxShardsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxShardsPerNodeInput() {
    return this._clusterMaxShardsPerNode;
  }

  // cluster_routing_allocation_balance_prefer_primary - computed: false, optional: true, required: false
  private _clusterRoutingAllocationBalancePreferPrimary?: boolean | cdktf.IResolvable; 
  public get clusterRoutingAllocationBalancePreferPrimary() {
    return this.getBooleanAttribute('cluster_routing_allocation_balance_prefer_primary');
  }
  public set clusterRoutingAllocationBalancePreferPrimary(value: boolean | cdktf.IResolvable) {
    this._clusterRoutingAllocationBalancePreferPrimary = value;
  }
  public resetClusterRoutingAllocationBalancePreferPrimary() {
    this._clusterRoutingAllocationBalancePreferPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationBalancePreferPrimaryInput() {
    return this._clusterRoutingAllocationBalancePreferPrimary;
  }

  // cluster_routing_allocation_node_concurrent_recoveries - computed: false, optional: true, required: false
  private _clusterRoutingAllocationNodeConcurrentRecoveries?: number; 
  public get clusterRoutingAllocationNodeConcurrentRecoveries() {
    return this.getNumberAttribute('cluster_routing_allocation_node_concurrent_recoveries');
  }
  public set clusterRoutingAllocationNodeConcurrentRecoveries(value: number) {
    this._clusterRoutingAllocationNodeConcurrentRecoveries = value;
  }
  public resetClusterRoutingAllocationNodeConcurrentRecoveries() {
    this._clusterRoutingAllocationNodeConcurrentRecoveries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoutingAllocationNodeConcurrentRecoveriesInput() {
    return this._clusterRoutingAllocationNodeConcurrentRecoveries;
  }

  // email_sender_name - computed: false, optional: true, required: false
  private _emailSenderName?: string; 
  public get emailSenderName() {
    return this.getStringAttribute('email_sender_name');
  }
  public set emailSenderName(value: string) {
    this._emailSenderName = value;
  }
  public resetEmailSenderName() {
    this._emailSenderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSenderNameInput() {
    return this._emailSenderName;
  }

  // email_sender_password - computed: false, optional: true, required: false
  private _emailSenderPassword?: string; 
  public get emailSenderPassword() {
    return this.getStringAttribute('email_sender_password');
  }
  public set emailSenderPassword(value: string) {
    this._emailSenderPassword = value;
  }
  public resetEmailSenderPassword() {
    this._emailSenderPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSenderPasswordInput() {
    return this._emailSenderPassword;
  }

  // email_sender_username - computed: false, optional: true, required: false
  private _emailSenderUsername?: string; 
  public get emailSenderUsername() {
    return this.getStringAttribute('email_sender_username');
  }
  public set emailSenderUsername(value: string) {
    this._emailSenderUsername = value;
  }
  public resetEmailSenderUsername() {
    this._emailSenderUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSenderUsernameInput() {
    return this._emailSenderUsername;
  }

  // enable_remote_backed_storage - computed: false, optional: true, required: false
  private _enableRemoteBackedStorage?: boolean | cdktf.IResolvable; 
  public get enableRemoteBackedStorage() {
    return this.getBooleanAttribute('enable_remote_backed_storage');
  }
  public set enableRemoteBackedStorage(value: boolean | cdktf.IResolvable) {
    this._enableRemoteBackedStorage = value;
  }
  public resetEnableRemoteBackedStorage() {
    this._enableRemoteBackedStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteBackedStorageInput() {
    return this._enableRemoteBackedStorage;
  }

  // enable_searchable_snapshots - computed: false, optional: true, required: false
  private _enableSearchableSnapshots?: boolean | cdktf.IResolvable; 
  public get enableSearchableSnapshots() {
    return this.getBooleanAttribute('enable_searchable_snapshots');
  }
  public set enableSearchableSnapshots(value: boolean | cdktf.IResolvable) {
    this._enableSearchableSnapshots = value;
  }
  public resetEnableSearchableSnapshots() {
    this._enableSearchableSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSearchableSnapshotsInput() {
    return this._enableSearchableSnapshots;
  }

  // enable_security_audit - computed: false, optional: true, required: false
  private _enableSecurityAudit?: boolean | cdktf.IResolvable; 
  public get enableSecurityAudit() {
    return this.getBooleanAttribute('enable_security_audit');
  }
  public set enableSecurityAudit(value: boolean | cdktf.IResolvable) {
    this._enableSecurityAudit = value;
  }
  public resetEnableSecurityAudit() {
    this._enableSecurityAudit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecurityAuditInput() {
    return this._enableSecurityAudit;
  }

  // enable_snapshot_api - computed: false, optional: true, required: false
  private _enableSnapshotApi?: boolean | cdktf.IResolvable; 
  public get enableSnapshotApi() {
    return this.getBooleanAttribute('enable_snapshot_api');
  }
  public set enableSnapshotApi(value: boolean | cdktf.IResolvable) {
    this._enableSnapshotApi = value;
  }
  public resetEnableSnapshotApi() {
    this._enableSnapshotApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnapshotApiInput() {
    return this._enableSnapshotApi;
  }

  // http_max_content_length - computed: false, optional: true, required: false
  private _httpMaxContentLength?: number; 
  public get httpMaxContentLength() {
    return this.getNumberAttribute('http_max_content_length');
  }
  public set httpMaxContentLength(value: number) {
    this._httpMaxContentLength = value;
  }
  public resetHttpMaxContentLength() {
    this._httpMaxContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxContentLengthInput() {
    return this._httpMaxContentLength;
  }

  // http_max_header_size - computed: false, optional: true, required: false
  private _httpMaxHeaderSize?: number; 
  public get httpMaxHeaderSize() {
    return this.getNumberAttribute('http_max_header_size');
  }
  public set httpMaxHeaderSize(value: number) {
    this._httpMaxHeaderSize = value;
  }
  public resetHttpMaxHeaderSize() {
    this._httpMaxHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxHeaderSizeInput() {
    return this._httpMaxHeaderSize;
  }

  // http_max_initial_line_length - computed: false, optional: true, required: false
  private _httpMaxInitialLineLength?: number; 
  public get httpMaxInitialLineLength() {
    return this.getNumberAttribute('http_max_initial_line_length');
  }
  public set httpMaxInitialLineLength(value: number) {
    this._httpMaxInitialLineLength = value;
  }
  public resetHttpMaxInitialLineLength() {
    this._httpMaxInitialLineLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaxInitialLineLengthInput() {
    return this._httpMaxInitialLineLength;
  }

  // indices_fielddata_cache_size - computed: false, optional: true, required: false
  private _indicesFielddataCacheSize?: number; 
  public get indicesFielddataCacheSize() {
    return this.getNumberAttribute('indices_fielddata_cache_size');
  }
  public set indicesFielddataCacheSize(value: number) {
    this._indicesFielddataCacheSize = value;
  }
  public resetIndicesFielddataCacheSize() {
    this._indicesFielddataCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesFielddataCacheSizeInput() {
    return this._indicesFielddataCacheSize;
  }

  // indices_memory_index_buffer_size - computed: false, optional: true, required: false
  private _indicesMemoryIndexBufferSize?: number; 
  public get indicesMemoryIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_index_buffer_size');
  }
  public set indicesMemoryIndexBufferSize(value: number) {
    this._indicesMemoryIndexBufferSize = value;
  }
  public resetIndicesMemoryIndexBufferSize() {
    this._indicesMemoryIndexBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryIndexBufferSizeInput() {
    return this._indicesMemoryIndexBufferSize;
  }

  // indices_memory_max_index_buffer_size - computed: false, optional: true, required: false
  private _indicesMemoryMaxIndexBufferSize?: number; 
  public get indicesMemoryMaxIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_max_index_buffer_size');
  }
  public set indicesMemoryMaxIndexBufferSize(value: number) {
    this._indicesMemoryMaxIndexBufferSize = value;
  }
  public resetIndicesMemoryMaxIndexBufferSize() {
    this._indicesMemoryMaxIndexBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryMaxIndexBufferSizeInput() {
    return this._indicesMemoryMaxIndexBufferSize;
  }

  // indices_memory_min_index_buffer_size - computed: false, optional: true, required: false
  private _indicesMemoryMinIndexBufferSize?: number; 
  public get indicesMemoryMinIndexBufferSize() {
    return this.getNumberAttribute('indices_memory_min_index_buffer_size');
  }
  public set indicesMemoryMinIndexBufferSize(value: number) {
    this._indicesMemoryMinIndexBufferSize = value;
  }
  public resetIndicesMemoryMinIndexBufferSize() {
    this._indicesMemoryMinIndexBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesMemoryMinIndexBufferSizeInput() {
    return this._indicesMemoryMinIndexBufferSize;
  }

  // indices_queries_cache_size - computed: false, optional: true, required: false
  private _indicesQueriesCacheSize?: number; 
  public get indicesQueriesCacheSize() {
    return this.getNumberAttribute('indices_queries_cache_size');
  }
  public set indicesQueriesCacheSize(value: number) {
    this._indicesQueriesCacheSize = value;
  }
  public resetIndicesQueriesCacheSize() {
    this._indicesQueriesCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesQueriesCacheSizeInput() {
    return this._indicesQueriesCacheSize;
  }

  // indices_query_bool_max_clause_count - computed: false, optional: true, required: false
  private _indicesQueryBoolMaxClauseCount?: number; 
  public get indicesQueryBoolMaxClauseCount() {
    return this.getNumberAttribute('indices_query_bool_max_clause_count');
  }
  public set indicesQueryBoolMaxClauseCount(value: number) {
    this._indicesQueryBoolMaxClauseCount = value;
  }
  public resetIndicesQueryBoolMaxClauseCount() {
    this._indicesQueryBoolMaxClauseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesQueryBoolMaxClauseCountInput() {
    return this._indicesQueryBoolMaxClauseCount;
  }

  // indices_recovery_max_bytes_per_sec - computed: false, optional: true, required: false
  private _indicesRecoveryMaxBytesPerSec?: number; 
  public get indicesRecoveryMaxBytesPerSec() {
    return this.getNumberAttribute('indices_recovery_max_bytes_per_sec');
  }
  public set indicesRecoveryMaxBytesPerSec(value: number) {
    this._indicesRecoveryMaxBytesPerSec = value;
  }
  public resetIndicesRecoveryMaxBytesPerSec() {
    this._indicesRecoveryMaxBytesPerSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesRecoveryMaxBytesPerSecInput() {
    return this._indicesRecoveryMaxBytesPerSec;
  }

  // indices_recovery_max_concurrent_file_chunks - computed: false, optional: true, required: false
  private _indicesRecoveryMaxConcurrentFileChunks?: number; 
  public get indicesRecoveryMaxConcurrentFileChunks() {
    return this.getNumberAttribute('indices_recovery_max_concurrent_file_chunks');
  }
  public set indicesRecoveryMaxConcurrentFileChunks(value: number) {
    this._indicesRecoveryMaxConcurrentFileChunks = value;
  }
  public resetIndicesRecoveryMaxConcurrentFileChunks() {
    this._indicesRecoveryMaxConcurrentFileChunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesRecoveryMaxConcurrentFileChunksInput() {
    return this._indicesRecoveryMaxConcurrentFileChunks;
  }

  // ism_enabled - computed: false, optional: true, required: false
  private _ismEnabled?: boolean | cdktf.IResolvable; 
  public get ismEnabled() {
    return this.getBooleanAttribute('ism_enabled');
  }
  public set ismEnabled(value: boolean | cdktf.IResolvable) {
    this._ismEnabled = value;
  }
  public resetIsmEnabled() {
    this._ismEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismEnabledInput() {
    return this._ismEnabled;
  }

  // ism_history_enabled - computed: false, optional: true, required: false
  private _ismHistoryEnabled?: boolean | cdktf.IResolvable; 
  public get ismHistoryEnabled() {
    return this.getBooleanAttribute('ism_history_enabled');
  }
  public set ismHistoryEnabled(value: boolean | cdktf.IResolvable) {
    this._ismHistoryEnabled = value;
  }
  public resetIsmHistoryEnabled() {
    this._ismHistoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryEnabledInput() {
    return this._ismHistoryEnabled;
  }

  // ism_history_max_age - computed: false, optional: true, required: false
  private _ismHistoryMaxAge?: number; 
  public get ismHistoryMaxAge() {
    return this.getNumberAttribute('ism_history_max_age');
  }
  public set ismHistoryMaxAge(value: number) {
    this._ismHistoryMaxAge = value;
  }
  public resetIsmHistoryMaxAge() {
    this._ismHistoryMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryMaxAgeInput() {
    return this._ismHistoryMaxAge;
  }

  // ism_history_max_docs - computed: false, optional: true, required: false
  private _ismHistoryMaxDocs?: number; 
  public get ismHistoryMaxDocs() {
    return this.getNumberAttribute('ism_history_max_docs');
  }
  public set ismHistoryMaxDocs(value: number) {
    this._ismHistoryMaxDocs = value;
  }
  public resetIsmHistoryMaxDocs() {
    this._ismHistoryMaxDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryMaxDocsInput() {
    return this._ismHistoryMaxDocs;
  }

  // ism_history_rollover_check_period - computed: false, optional: true, required: false
  private _ismHistoryRolloverCheckPeriod?: number; 
  public get ismHistoryRolloverCheckPeriod() {
    return this.getNumberAttribute('ism_history_rollover_check_period');
  }
  public set ismHistoryRolloverCheckPeriod(value: number) {
    this._ismHistoryRolloverCheckPeriod = value;
  }
  public resetIsmHistoryRolloverCheckPeriod() {
    this._ismHistoryRolloverCheckPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryRolloverCheckPeriodInput() {
    return this._ismHistoryRolloverCheckPeriod;
  }

  // ism_history_rollover_retention_period - computed: false, optional: true, required: false
  private _ismHistoryRolloverRetentionPeriod?: number; 
  public get ismHistoryRolloverRetentionPeriod() {
    return this.getNumberAttribute('ism_history_rollover_retention_period');
  }
  public set ismHistoryRolloverRetentionPeriod(value: number) {
    this._ismHistoryRolloverRetentionPeriod = value;
  }
  public resetIsmHistoryRolloverRetentionPeriod() {
    this._ismHistoryRolloverRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ismHistoryRolloverRetentionPeriodInput() {
    return this._ismHistoryRolloverRetentionPeriod;
  }

  // knn_memory_circuit_breaker_enabled - computed: false, optional: true, required: false
  private _knnMemoryCircuitBreakerEnabled?: boolean | cdktf.IResolvable; 
  public get knnMemoryCircuitBreakerEnabled() {
    return this.getBooleanAttribute('knn_memory_circuit_breaker_enabled');
  }
  public set knnMemoryCircuitBreakerEnabled(value: boolean | cdktf.IResolvable) {
    this._knnMemoryCircuitBreakerEnabled = value;
  }
  public resetKnnMemoryCircuitBreakerEnabled() {
    this._knnMemoryCircuitBreakerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knnMemoryCircuitBreakerEnabledInput() {
    return this._knnMemoryCircuitBreakerEnabled;
  }

  // knn_memory_circuit_breaker_limit - computed: false, optional: true, required: false
  private _knnMemoryCircuitBreakerLimit?: number; 
  public get knnMemoryCircuitBreakerLimit() {
    return this.getNumberAttribute('knn_memory_circuit_breaker_limit');
  }
  public set knnMemoryCircuitBreakerLimit(value: number) {
    this._knnMemoryCircuitBreakerLimit = value;
  }
  public resetKnnMemoryCircuitBreakerLimit() {
    this._knnMemoryCircuitBreakerLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knnMemoryCircuitBreakerLimitInput() {
    return this._knnMemoryCircuitBreakerLimit;
  }

  // node_search_cache_size - computed: false, optional: true, required: false
  private _nodeSearchCacheSize?: string; 
  public get nodeSearchCacheSize() {
    return this.getStringAttribute('node_search_cache_size');
  }
  public set nodeSearchCacheSize(value: string) {
    this._nodeSearchCacheSize = value;
  }
  public resetNodeSearchCacheSize() {
    this._nodeSearchCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSearchCacheSizeInput() {
    return this._nodeSearchCacheSize;
  }

  // override_main_response_version - computed: false, optional: true, required: false
  private _overrideMainResponseVersion?: boolean | cdktf.IResolvable; 
  public get overrideMainResponseVersion() {
    return this.getBooleanAttribute('override_main_response_version');
  }
  public set overrideMainResponseVersion(value: boolean | cdktf.IResolvable) {
    this._overrideMainResponseVersion = value;
  }
  public resetOverrideMainResponseVersion() {
    this._overrideMainResponseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideMainResponseVersionInput() {
    return this._overrideMainResponseVersion;
  }

  // plugins_alerting_filter_by_backend_roles - computed: false, optional: true, required: false
  private _pluginsAlertingFilterByBackendRoles?: boolean | cdktf.IResolvable; 
  public get pluginsAlertingFilterByBackendRoles() {
    return this.getBooleanAttribute('plugins_alerting_filter_by_backend_roles');
  }
  public set pluginsAlertingFilterByBackendRoles(value: boolean | cdktf.IResolvable) {
    this._pluginsAlertingFilterByBackendRoles = value;
  }
  public resetPluginsAlertingFilterByBackendRoles() {
    this._pluginsAlertingFilterByBackendRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsAlertingFilterByBackendRolesInput() {
    return this._pluginsAlertingFilterByBackendRoles;
  }

  // reindex_remote_whitelist - computed: false, optional: true, required: false
  private _reindexRemoteWhitelist?: string[]; 
  public get reindexRemoteWhitelist() {
    return this.getListAttribute('reindex_remote_whitelist');
  }
  public set reindexRemoteWhitelist(value: string[]) {
    this._reindexRemoteWhitelist = value;
  }
  public resetReindexRemoteWhitelist() {
    this._reindexRemoteWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reindexRemoteWhitelistInput() {
    return this._reindexRemoteWhitelist;
  }

  // script_max_compilations_rate - computed: false, optional: true, required: false
  private _scriptMaxCompilationsRate?: string; 
  public get scriptMaxCompilationsRate() {
    return this.getStringAttribute('script_max_compilations_rate');
  }
  public set scriptMaxCompilationsRate(value: string) {
    this._scriptMaxCompilationsRate = value;
  }
  public resetScriptMaxCompilationsRate() {
    this._scriptMaxCompilationsRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptMaxCompilationsRateInput() {
    return this._scriptMaxCompilationsRate;
  }

  // search_max_buckets - computed: false, optional: true, required: false
  private _searchMaxBuckets?: number; 
  public get searchMaxBuckets() {
    return this.getNumberAttribute('search_max_buckets');
  }
  public set searchMaxBuckets(value: number) {
    this._searchMaxBuckets = value;
  }
  public resetSearchMaxBuckets() {
    this._searchMaxBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchMaxBucketsInput() {
    return this._searchMaxBuckets;
  }

  // thread_pool_analyze_queue_size - computed: false, optional: true, required: false
  private _threadPoolAnalyzeQueueSize?: number; 
  public get threadPoolAnalyzeQueueSize() {
    return this.getNumberAttribute('thread_pool_analyze_queue_size');
  }
  public set threadPoolAnalyzeQueueSize(value: number) {
    this._threadPoolAnalyzeQueueSize = value;
  }
  public resetThreadPoolAnalyzeQueueSize() {
    this._threadPoolAnalyzeQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolAnalyzeQueueSizeInput() {
    return this._threadPoolAnalyzeQueueSize;
  }

  // thread_pool_analyze_size - computed: false, optional: true, required: false
  private _threadPoolAnalyzeSize?: number; 
  public get threadPoolAnalyzeSize() {
    return this.getNumberAttribute('thread_pool_analyze_size');
  }
  public set threadPoolAnalyzeSize(value: number) {
    this._threadPoolAnalyzeSize = value;
  }
  public resetThreadPoolAnalyzeSize() {
    this._threadPoolAnalyzeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolAnalyzeSizeInput() {
    return this._threadPoolAnalyzeSize;
  }

  // thread_pool_force_merge_size - computed: false, optional: true, required: false
  private _threadPoolForceMergeSize?: number; 
  public get threadPoolForceMergeSize() {
    return this.getNumberAttribute('thread_pool_force_merge_size');
  }
  public set threadPoolForceMergeSize(value: number) {
    this._threadPoolForceMergeSize = value;
  }
  public resetThreadPoolForceMergeSize() {
    this._threadPoolForceMergeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolForceMergeSizeInput() {
    return this._threadPoolForceMergeSize;
  }

  // thread_pool_get_queue_size - computed: false, optional: true, required: false
  private _threadPoolGetQueueSize?: number; 
  public get threadPoolGetQueueSize() {
    return this.getNumberAttribute('thread_pool_get_queue_size');
  }
  public set threadPoolGetQueueSize(value: number) {
    this._threadPoolGetQueueSize = value;
  }
  public resetThreadPoolGetQueueSize() {
    this._threadPoolGetQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolGetQueueSizeInput() {
    return this._threadPoolGetQueueSize;
  }

  // thread_pool_get_size - computed: false, optional: true, required: false
  private _threadPoolGetSize?: number; 
  public get threadPoolGetSize() {
    return this.getNumberAttribute('thread_pool_get_size');
  }
  public set threadPoolGetSize(value: number) {
    this._threadPoolGetSize = value;
  }
  public resetThreadPoolGetSize() {
    this._threadPoolGetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolGetSizeInput() {
    return this._threadPoolGetSize;
  }

  // thread_pool_search_queue_size - computed: false, optional: true, required: false
  private _threadPoolSearchQueueSize?: number; 
  public get threadPoolSearchQueueSize() {
    return this.getNumberAttribute('thread_pool_search_queue_size');
  }
  public set threadPoolSearchQueueSize(value: number) {
    this._threadPoolSearchQueueSize = value;
  }
  public resetThreadPoolSearchQueueSize() {
    this._threadPoolSearchQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchQueueSizeInput() {
    return this._threadPoolSearchQueueSize;
  }

  // thread_pool_search_size - computed: false, optional: true, required: false
  private _threadPoolSearchSize?: number; 
  public get threadPoolSearchSize() {
    return this.getNumberAttribute('thread_pool_search_size');
  }
  public set threadPoolSearchSize(value: number) {
    this._threadPoolSearchSize = value;
  }
  public resetThreadPoolSearchSize() {
    this._threadPoolSearchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchSizeInput() {
    return this._threadPoolSearchSize;
  }

  // thread_pool_search_throttled_queue_size - computed: false, optional: true, required: false
  private _threadPoolSearchThrottledQueueSize?: number; 
  public get threadPoolSearchThrottledQueueSize() {
    return this.getNumberAttribute('thread_pool_search_throttled_queue_size');
  }
  public set threadPoolSearchThrottledQueueSize(value: number) {
    this._threadPoolSearchThrottledQueueSize = value;
  }
  public resetThreadPoolSearchThrottledQueueSize() {
    this._threadPoolSearchThrottledQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchThrottledQueueSizeInput() {
    return this._threadPoolSearchThrottledQueueSize;
  }

  // thread_pool_search_throttled_size - computed: false, optional: true, required: false
  private _threadPoolSearchThrottledSize?: number; 
  public get threadPoolSearchThrottledSize() {
    return this.getNumberAttribute('thread_pool_search_throttled_size');
  }
  public set threadPoolSearchThrottledSize(value: number) {
    this._threadPoolSearchThrottledSize = value;
  }
  public resetThreadPoolSearchThrottledSize() {
    this._threadPoolSearchThrottledSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolSearchThrottledSizeInput() {
    return this._threadPoolSearchThrottledSize;
  }

  // thread_pool_write_queue_size - computed: false, optional: true, required: false
  private _threadPoolWriteQueueSize?: number; 
  public get threadPoolWriteQueueSize() {
    return this.getNumberAttribute('thread_pool_write_queue_size');
  }
  public set threadPoolWriteQueueSize(value: number) {
    this._threadPoolWriteQueueSize = value;
  }
  public resetThreadPoolWriteQueueSize() {
    this._threadPoolWriteQueueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolWriteQueueSizeInput() {
    return this._threadPoolWriteQueueSize;
  }

  // thread_pool_write_size - computed: false, optional: true, required: false
  private _threadPoolWriteSize?: number; 
  public get threadPoolWriteSize() {
    return this.getNumberAttribute('thread_pool_write_size');
  }
  public set threadPoolWriteSize(value: number) {
    this._threadPoolWriteSize = value;
  }
  public resetThreadPoolWriteSize() {
    this._threadPoolWriteSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadPoolWriteSizeInput() {
    return this._threadPoolWriteSize;
  }

  // auth_failure_listeners - computed: false, optional: true, required: false
  private _authFailureListeners = new OpensearchOpensearchUserConfigOpensearchAuthFailureListenersOutputReference(this, "auth_failure_listeners");
  public get authFailureListeners() {
    return this._authFailureListeners;
  }
  public putAuthFailureListeners(value: OpensearchOpensearchUserConfigOpensearchAuthFailureListeners) {
    this._authFailureListeners.internalValue = value;
  }
  public resetAuthFailureListeners() {
    this._authFailureListeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailureListenersInput() {
    return this._authFailureListeners.internalValue;
  }

  // cluster_remote_store - computed: false, optional: true, required: false
  private _clusterRemoteStore = new OpensearchOpensearchUserConfigOpensearchClusterRemoteStoreOutputReference(this, "cluster_remote_store");
  public get clusterRemoteStore() {
    return this._clusterRemoteStore;
  }
  public putClusterRemoteStore(value: OpensearchOpensearchUserConfigOpensearchClusterRemoteStore) {
    this._clusterRemoteStore.internalValue = value;
  }
  public resetClusterRemoteStore() {
    this._clusterRemoteStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRemoteStoreInput() {
    return this._clusterRemoteStore.internalValue;
  }

  // cluster_search_request_slowlog - computed: false, optional: true, required: false
  private _clusterSearchRequestSlowlog = new OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlogOutputReference(this, "cluster_search_request_slowlog");
  public get clusterSearchRequestSlowlog() {
    return this._clusterSearchRequestSlowlog;
  }
  public putClusterSearchRequestSlowlog(value: OpensearchOpensearchUserConfigOpensearchClusterSearchRequestSlowlog) {
    this._clusterSearchRequestSlowlog.internalValue = value;
  }
  public resetClusterSearchRequestSlowlog() {
    this._clusterSearchRequestSlowlog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSearchRequestSlowlogInput() {
    return this._clusterSearchRequestSlowlog.internalValue;
  }

  // disk_watermarks - computed: false, optional: true, required: false
  private _diskWatermarks = new OpensearchOpensearchUserConfigOpensearchDiskWatermarksOutputReference(this, "disk_watermarks");
  public get diskWatermarks() {
    return this._diskWatermarks;
  }
  public putDiskWatermarks(value: OpensearchOpensearchUserConfigOpensearchDiskWatermarks) {
    this._diskWatermarks.internalValue = value;
  }
  public resetDiskWatermarks() {
    this._diskWatermarks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskWatermarksInput() {
    return this._diskWatermarks.internalValue;
  }

  // remote_store - computed: false, optional: true, required: false
  private _remoteStore = new OpensearchOpensearchUserConfigOpensearchRemoteStoreOutputReference(this, "remote_store");
  public get remoteStore() {
    return this._remoteStore;
  }
  public putRemoteStore(value: OpensearchOpensearchUserConfigOpensearchRemoteStore) {
    this._remoteStore.internalValue = value;
  }
  public resetRemoteStore() {
    this._remoteStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteStoreInput() {
    return this._remoteStore.internalValue;
  }

  // search_backpressure - computed: false, optional: true, required: false
  private _searchBackpressure = new OpensearchOpensearchUserConfigOpensearchSearchBackpressureOutputReference(this, "search_backpressure");
  public get searchBackpressure() {
    return this._searchBackpressure;
  }
  public putSearchBackpressure(value: OpensearchOpensearchUserConfigOpensearchSearchBackpressure) {
    this._searchBackpressure.internalValue = value;
  }
  public resetSearchBackpressure() {
    this._searchBackpressure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchBackpressureInput() {
    return this._searchBackpressure.internalValue;
  }

  // search_insights_top_queries - computed: false, optional: true, required: false
  private _searchInsightsTopQueries = new OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueriesOutputReference(this, "search_insights_top_queries");
  public get searchInsightsTopQueries() {
    return this._searchInsightsTopQueries;
  }
  public putSearchInsightsTopQueries(value: OpensearchOpensearchUserConfigOpensearchSearchInsightsTopQueries) {
    this._searchInsightsTopQueries.internalValue = value;
  }
  public resetSearchInsightsTopQueries() {
    this._searchInsightsTopQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInsightsTopQueriesInput() {
    return this._searchInsightsTopQueries.internalValue;
  }

  // segrep - computed: false, optional: true, required: false
  private _segrep = new OpensearchOpensearchUserConfigOpensearchSegrepOutputReference(this, "segrep");
  public get segrep() {
    return this._segrep;
  }
  public putSegrep(value: OpensearchOpensearchUserConfigOpensearchSegrep) {
    this._segrep.internalValue = value;
  }
  public resetSegrep() {
    this._segrep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segrepInput() {
    return this._segrep.internalValue;
  }

  // shard_indexing_pressure - computed: false, optional: true, required: false
  private _shardIndexingPressure = new OpensearchOpensearchUserConfigOpensearchShardIndexingPressureOutputReference(this, "shard_indexing_pressure");
  public get shardIndexingPressure() {
    return this._shardIndexingPressure;
  }
  public putShardIndexingPressure(value: OpensearchOpensearchUserConfigOpensearchShardIndexingPressure) {
    this._shardIndexingPressure.internalValue = value;
  }
  public resetShardIndexingPressure() {
    this._shardIndexingPressure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardIndexingPressureInput() {
    return this._shardIndexingPressure.internalValue;
  }
}
export interface OpensearchOpensearchUserConfigOpensearchDashboards {
  /**
  * Enable or disable OpenSearch Dashboards. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enabled Opensearch#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Limits the maximum amount of memory (in MiB) the OpenSearch Dashboards process can use. This sets the max_old_space_size option of the nodejs running the OpenSearch Dashboards. Note: the memory reserved by OpenSearch Dashboards is not available for OpenSearch. Default: `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#max_old_space_size Opensearch#max_old_space_size}
  */
  readonly maxOldSpaceSize?: number;
  /**
  * Enable or disable multiple data sources in OpenSearch Dashboards. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#multiple_data_source_enabled Opensearch#multiple_data_source_enabled}
  */
  readonly multipleDataSourceEnabled?: boolean | cdktf.IResolvable;
  /**
  * Timeout in milliseconds for requests made by OpenSearch Dashboards towards OpenSearch. Default: `30000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch_request_timeout Opensearch#opensearch_request_timeout}
  */
  readonly opensearchRequestTimeout?: number;
}

export function opensearchOpensearchUserConfigOpensearchDashboardsToTerraform(struct?: OpensearchOpensearchUserConfigOpensearchDashboardsOutputReference | OpensearchOpensearchUserConfigOpensearchDashboards): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    max_old_space_size: cdktf.numberToTerraform(struct!.maxOldSpaceSize),
    multiple_data_source_enabled: cdktf.booleanToTerraform(struct!.multipleDataSourceEnabled),
    opensearch_request_timeout: cdktf.numberToTerraform(struct!.opensearchRequestTimeout),
  }
}


export function opensearchOpensearchUserConfigOpensearchDashboardsToHclTerraform(struct?: OpensearchOpensearchUserConfigOpensearchDashboardsOutputReference | OpensearchOpensearchUserConfigOpensearchDashboards): any {
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
    max_old_space_size: {
      value: cdktf.numberToHclTerraform(struct!.maxOldSpaceSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple_data_source_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.multipleDataSourceEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opensearch_request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.opensearchRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOpensearchDashboardsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigOpensearchDashboards | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._maxOldSpaceSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxOldSpaceSize = this._maxOldSpaceSize;
    }
    if (this._multipleDataSourceEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleDataSourceEnabled = this._multipleDataSourceEnabled;
    }
    if (this._opensearchRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchRequestTimeout = this._opensearchRequestTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigOpensearchDashboards | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._maxOldSpaceSize = undefined;
      this._multipleDataSourceEnabled = undefined;
      this._opensearchRequestTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._maxOldSpaceSize = value.maxOldSpaceSize;
      this._multipleDataSourceEnabled = value.multipleDataSourceEnabled;
      this._opensearchRequestTimeout = value.opensearchRequestTimeout;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // max_old_space_size - computed: false, optional: true, required: false
  private _maxOldSpaceSize?: number; 
  public get maxOldSpaceSize() {
    return this.getNumberAttribute('max_old_space_size');
  }
  public set maxOldSpaceSize(value: number) {
    this._maxOldSpaceSize = value;
  }
  public resetMaxOldSpaceSize() {
    this._maxOldSpaceSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOldSpaceSizeInput() {
    return this._maxOldSpaceSize;
  }

  // multiple_data_source_enabled - computed: false, optional: true, required: false
  private _multipleDataSourceEnabled?: boolean | cdktf.IResolvable; 
  public get multipleDataSourceEnabled() {
    return this.getBooleanAttribute('multiple_data_source_enabled');
  }
  public set multipleDataSourceEnabled(value: boolean | cdktf.IResolvable) {
    this._multipleDataSourceEnabled = value;
  }
  public resetMultipleDataSourceEnabled() {
    this._multipleDataSourceEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleDataSourceEnabledInput() {
    return this._multipleDataSourceEnabled;
  }

  // opensearch_request_timeout - computed: false, optional: true, required: false
  private _opensearchRequestTimeout?: number; 
  public get opensearchRequestTimeout() {
    return this.getNumberAttribute('opensearch_request_timeout');
  }
  public set opensearchRequestTimeout(value: number) {
    this._opensearchRequestTimeout = value;
  }
  public resetOpensearchRequestTimeout() {
    this._opensearchRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchRequestTimeoutInput() {
    return this._opensearchRequestTimeout;
  }
}
export interface OpensearchOpensearchUserConfigPrivateAccess {
  /**
  * Allow clients to connect to opensearch with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch Opensearch#opensearch}
  */
  readonly opensearch?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to opensearch_dashboards with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch_dashboards Opensearch#opensearch_dashboards}
  */
  readonly opensearchDashboards?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#prometheus Opensearch#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function opensearchOpensearchUserConfigPrivateAccessToTerraform(struct?: OpensearchOpensearchUserConfigPrivateAccessOutputReference | OpensearchOpensearchUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opensearch: cdktf.booleanToTerraform(struct!.opensearch),
    opensearch_dashboards: cdktf.booleanToTerraform(struct!.opensearchDashboards),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function opensearchOpensearchUserConfigPrivateAccessToHclTerraform(struct?: OpensearchOpensearchUserConfigPrivateAccessOutputReference | OpensearchOpensearchUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opensearch: {
      value: cdktf.booleanToHclTerraform(struct!.opensearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opensearch_dashboards: {
      value: cdktf.booleanToHclTerraform(struct!.opensearchDashboards),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opensearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch;
    }
    if (this._opensearchDashboards !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchDashboards = this._opensearchDashboards;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._opensearch = undefined;
      this._opensearchDashboards = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._opensearch = value.opensearch;
      this._opensearchDashboards = value.opensearchDashboards;
      this._prometheus = value.prometheus;
    }
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch?: boolean | cdktf.IResolvable; 
  public get opensearch() {
    return this.getBooleanAttribute('opensearch');
  }
  public set opensearch(value: boolean | cdktf.IResolvable) {
    this._opensearch = value;
  }
  public resetOpensearch() {
    this._opensearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch;
  }

  // opensearch_dashboards - computed: false, optional: true, required: false
  private _opensearchDashboards?: boolean | cdktf.IResolvable; 
  public get opensearchDashboards() {
    return this.getBooleanAttribute('opensearch_dashboards');
  }
  public set opensearchDashboards(value: boolean | cdktf.IResolvable) {
    this._opensearchDashboards = value;
  }
  public resetOpensearchDashboards() {
    this._opensearchDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchDashboardsInput() {
    return this._opensearchDashboards;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }
}
export interface OpensearchOpensearchUserConfigPrivatelinkAccess {
  /**
  * Enable opensearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch Opensearch#opensearch}
  */
  readonly opensearch?: boolean | cdktf.IResolvable;
  /**
  * Enable opensearch_dashboards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch_dashboards Opensearch#opensearch_dashboards}
  */
  readonly opensearchDashboards?: boolean | cdktf.IResolvable;
  /**
  * Enable prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#prometheus Opensearch#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function opensearchOpensearchUserConfigPrivatelinkAccessToTerraform(struct?: OpensearchOpensearchUserConfigPrivatelinkAccessOutputReference | OpensearchOpensearchUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opensearch: cdktf.booleanToTerraform(struct!.opensearch),
    opensearch_dashboards: cdktf.booleanToTerraform(struct!.opensearchDashboards),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function opensearchOpensearchUserConfigPrivatelinkAccessToHclTerraform(struct?: OpensearchOpensearchUserConfigPrivatelinkAccessOutputReference | OpensearchOpensearchUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opensearch: {
      value: cdktf.booleanToHclTerraform(struct!.opensearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opensearch_dashboards: {
      value: cdktf.booleanToHclTerraform(struct!.opensearchDashboards),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opensearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch;
    }
    if (this._opensearchDashboards !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchDashboards = this._opensearchDashboards;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._opensearch = undefined;
      this._opensearchDashboards = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._opensearch = value.opensearch;
      this._opensearchDashboards = value.opensearchDashboards;
      this._prometheus = value.prometheus;
    }
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch?: boolean | cdktf.IResolvable; 
  public get opensearch() {
    return this.getBooleanAttribute('opensearch');
  }
  public set opensearch(value: boolean | cdktf.IResolvable) {
    this._opensearch = value;
  }
  public resetOpensearch() {
    this._opensearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch;
  }

  // opensearch_dashboards - computed: false, optional: true, required: false
  private _opensearchDashboards?: boolean | cdktf.IResolvable; 
  public get opensearchDashboards() {
    return this.getBooleanAttribute('opensearch_dashboards');
  }
  public set opensearchDashboards(value: boolean | cdktf.IResolvable) {
    this._opensearchDashboards = value;
  }
  public resetOpensearchDashboards() {
    this._opensearchDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchDashboardsInput() {
    return this._opensearchDashboards;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }
}
export interface OpensearchOpensearchUserConfigPublicAccess {
  /**
  * Allow clients to connect to opensearch from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch Opensearch#opensearch}
  */
  readonly opensearch?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to opensearch_dashboards from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch_dashboards Opensearch#opensearch_dashboards}
  */
  readonly opensearchDashboards?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#prometheus Opensearch#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function opensearchOpensearchUserConfigPublicAccessToTerraform(struct?: OpensearchOpensearchUserConfigPublicAccessOutputReference | OpensearchOpensearchUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    opensearch: cdktf.booleanToTerraform(struct!.opensearch),
    opensearch_dashboards: cdktf.booleanToTerraform(struct!.opensearchDashboards),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function opensearchOpensearchUserConfigPublicAccessToHclTerraform(struct?: OpensearchOpensearchUserConfigPublicAccessOutputReference | OpensearchOpensearchUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    opensearch: {
      value: cdktf.booleanToHclTerraform(struct!.opensearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opensearch_dashboards: {
      value: cdktf.booleanToHclTerraform(struct!.opensearchDashboards),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._opensearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch;
    }
    if (this._opensearchDashboards !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchDashboards = this._opensearchDashboards;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._opensearch = undefined;
      this._opensearchDashboards = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._opensearch = value.opensearch;
      this._opensearchDashboards = value.opensearchDashboards;
      this._prometheus = value.prometheus;
    }
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch?: boolean | cdktf.IResolvable; 
  public get opensearch() {
    return this.getBooleanAttribute('opensearch');
  }
  public set opensearch(value: boolean | cdktf.IResolvable) {
    this._opensearch = value;
  }
  public resetOpensearch() {
    this._opensearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch;
  }

  // opensearch_dashboards - computed: false, optional: true, required: false
  private _opensearchDashboards?: boolean | cdktf.IResolvable; 
  public get opensearchDashboards() {
    return this.getBooleanAttribute('opensearch_dashboards');
  }
  public set opensearchDashboards(value: boolean | cdktf.IResolvable) {
    this._opensearchDashboards = value;
  }
  public resetOpensearchDashboards() {
    this._opensearchDashboards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchDashboardsInput() {
    return this._opensearchDashboards;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }
}
export interface OpensearchOpensearchUserConfigS3Migration {
  /**
  * AWS Access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#access_key Opensearch#access_key}
  */
  readonly accessKey: string;
  /**
  * The path to the repository data within its container. The value of this setting should not start or end with a /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#base_path Opensearch#base_path}
  */
  readonly basePath: string;
  /**
  * S3 bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#bucket Opensearch#bucket}
  */
  readonly bucket: string;
  /**
  * Big files can be broken down into chunks during snapshotting if needed. Should be the same as for the 3rd party repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#chunk_size Opensearch#chunk_size}
  */
  readonly chunkSize?: string;
  /**
  * When set to true metadata files are stored in compressed format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#compress Opensearch#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * The S3 service endpoint to connect to. If you are using an S3-compatible service then you should set this to the service’s endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#endpoint Opensearch#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Whether to restore aliases alongside their associated indexes. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#include_aliases Opensearch#include_aliases}
  */
  readonly includeAliases?: boolean | cdktf.IResolvable;
  /**
  * A comma-delimited list of indices to restore from the snapshot. Multi-index syntax is supported. Example: `metrics*,logs*,data-20240823`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#indices Opensearch#indices}
  */
  readonly indices: string;
  /**
  * Whether the repository is read-only. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#readonly Opensearch#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * S3 region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#region Opensearch#region}
  */
  readonly region: string;
  /**
  * If true, restore the cluster state. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#restore_global_state Opensearch#restore_global_state}
  */
  readonly restoreGlobalState?: boolean | cdktf.IResolvable;
  /**
  * AWS secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#secret_key Opensearch#secret_key}
  */
  readonly secretKey: string;
  /**
  * When set to true files are encrypted on server side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#server_side_encryption Opensearch#server_side_encryption}
  */
  readonly serverSideEncryption?: boolean | cdktf.IResolvable;
  /**
  * The snapshot name to restore from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#snapshot_name Opensearch#snapshot_name}
  */
  readonly snapshotName: string;
}

export function opensearchOpensearchUserConfigS3MigrationToTerraform(struct?: OpensearchOpensearchUserConfigS3MigrationOutputReference | OpensearchOpensearchUserConfigS3Migration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    base_path: cdktf.stringToTerraform(struct!.basePath),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    chunk_size: cdktf.stringToTerraform(struct!.chunkSize),
    compress: cdktf.booleanToTerraform(struct!.compress),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    include_aliases: cdktf.booleanToTerraform(struct!.includeAliases),
    indices: cdktf.stringToTerraform(struct!.indices),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    region: cdktf.stringToTerraform(struct!.region),
    restore_global_state: cdktf.booleanToTerraform(struct!.restoreGlobalState),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    server_side_encryption: cdktf.booleanToTerraform(struct!.serverSideEncryption),
    snapshot_name: cdktf.stringToTerraform(struct!.snapshotName),
  }
}


export function opensearchOpensearchUserConfigS3MigrationToHclTerraform(struct?: OpensearchOpensearchUserConfigS3MigrationOutputReference | OpensearchOpensearchUserConfigS3Migration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base_path: {
      value: cdktf.stringToHclTerraform(struct!.basePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chunk_size: {
      value: cdktf.stringToHclTerraform(struct!.chunkSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_aliases: {
      value: cdktf.booleanToHclTerraform(struct!.includeAliases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    indices: {
      value: cdktf.stringToHclTerraform(struct!.indices),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_global_state: {
      value: cdktf.booleanToHclTerraform(struct!.restoreGlobalState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.serverSideEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_name: {
      value: cdktf.stringToHclTerraform(struct!.snapshotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigS3MigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigS3Migration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._basePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePath = this._basePath;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._chunkSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSize = this._chunkSize;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._includeAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeAliases = this._includeAliases;
    }
    if (this._indices !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._restoreGlobalState !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreGlobalState = this._restoreGlobalState;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._serverSideEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryption = this._serverSideEncryption;
    }
    if (this._snapshotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotName = this._snapshotName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigS3Migration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._basePath = undefined;
      this._bucket = undefined;
      this._chunkSize = undefined;
      this._compress = undefined;
      this._endpoint = undefined;
      this._includeAliases = undefined;
      this._indices = undefined;
      this._readonly = undefined;
      this._region = undefined;
      this._restoreGlobalState = undefined;
      this._secretKey = undefined;
      this._serverSideEncryption = undefined;
      this._snapshotName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._basePath = value.basePath;
      this._bucket = value.bucket;
      this._chunkSize = value.chunkSize;
      this._compress = value.compress;
      this._endpoint = value.endpoint;
      this._includeAliases = value.includeAliases;
      this._indices = value.indices;
      this._readonly = value.readonly;
      this._region = value.region;
      this._restoreGlobalState = value.restoreGlobalState;
      this._secretKey = value.secretKey;
      this._serverSideEncryption = value.serverSideEncryption;
      this._snapshotName = value.snapshotName;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // base_path - computed: false, optional: false, required: true
  private _basePath?: string; 
  public get basePath() {
    return this.getStringAttribute('base_path');
  }
  public set basePath(value: string) {
    this._basePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // chunk_size - computed: false, optional: true, required: false
  private _chunkSize?: string; 
  public get chunkSize() {
    return this.getStringAttribute('chunk_size');
  }
  public set chunkSize(value: string) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // include_aliases - computed: false, optional: true, required: false
  private _includeAliases?: boolean | cdktf.IResolvable; 
  public get includeAliases() {
    return this.getBooleanAttribute('include_aliases');
  }
  public set includeAliases(value: boolean | cdktf.IResolvable) {
    this._includeAliases = value;
  }
  public resetIncludeAliases() {
    this._includeAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAliasesInput() {
    return this._includeAliases;
  }

  // indices - computed: false, optional: false, required: true
  private _indices?: string; 
  public get indices() {
    return this.getStringAttribute('indices');
  }
  public set indices(value: string) {
    this._indices = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // restore_global_state - computed: false, optional: true, required: false
  private _restoreGlobalState?: boolean | cdktf.IResolvable; 
  public get restoreGlobalState() {
    return this.getBooleanAttribute('restore_global_state');
  }
  public set restoreGlobalState(value: boolean | cdktf.IResolvable) {
    this._restoreGlobalState = value;
  }
  public resetRestoreGlobalState() {
    this._restoreGlobalState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreGlobalStateInput() {
    return this._restoreGlobalState;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: boolean | cdktf.IResolvable; 
  public get serverSideEncryption() {
    return this.getBooleanAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: boolean | cdktf.IResolvable) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption;
  }

  // snapshot_name - computed: false, optional: false, required: true
  private _snapshotName?: string; 
  public get snapshotName() {
    return this.getStringAttribute('snapshot_name');
  }
  public set snapshotName(value: string) {
    this._snapshotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotNameInput() {
    return this._snapshotName;
  }
}
export interface OpensearchOpensearchUserConfigSaml {
  /**
  * Enables or disables SAML-based authentication for OpenSearch. When enabled, users can authenticate using SAML with an Identity Provider. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#enabled Opensearch#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The unique identifier for the Identity Provider (IdP) entity that is used for SAML authentication. This value is typically provided by the IdP. Example: `test-idp-entity-id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#idp_entity_id Opensearch#idp_entity_id}
  */
  readonly idpEntityId: string;
  /**
  * The URL of the SAML metadata for the Identity Provider (IdP). This is used to configure SAML-based authentication with the IdP. Example: `https://test-account.okta.com/app/exk491jujcVc83LEX697/sso/saml/metadata`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#idp_metadata_url Opensearch#idp_metadata_url}
  */
  readonly idpMetadataUrl: string;
  /**
  * This parameter specifies the PEM-encoded root certificate authority (CA) content for the SAML identity provider (IdP) server verification. The root CA content is used to verify the SSL/TLS certificate presented by the server. Example: `-----BEGIN CERTIFICATE-----
  * ...
  * -----END CERTIFICATE-----
  * `.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#idp_pemtrustedcas_content Opensearch#idp_pemtrustedcas_content}
  */
  readonly idpPemtrustedcasContent?: string;
  /**
  * Optional. Specifies the attribute in the SAML response where role information is stored, if available. Role attributes are not required for SAML authentication, but can be included in SAML assertions by most Identity Providers (IdPs) to determine user access levels or permissions. Example: `RoleName`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#roles_key Opensearch#roles_key}
  */
  readonly rolesKey?: string;
  /**
  * The unique identifier for the Service Provider (SP) entity that is used for SAML authentication. This value is typically provided by the SP. Example: `test-sp-entity-id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#sp_entity_id Opensearch#sp_entity_id}
  */
  readonly spEntityId: string;
  /**
  * Optional. Specifies the attribute in the SAML response where the subject identifier is stored. If not configured, the NameID attribute is used by default. Example: `NameID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#subject_key Opensearch#subject_key}
  */
  readonly subjectKey?: string;
}

export function opensearchOpensearchUserConfigSamlToTerraform(struct?: OpensearchOpensearchUserConfigSamlOutputReference | OpensearchOpensearchUserConfigSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    idp_metadata_url: cdktf.stringToTerraform(struct!.idpMetadataUrl),
    idp_pemtrustedcas_content: cdktf.stringToTerraform(struct!.idpPemtrustedcasContent),
    roles_key: cdktf.stringToTerraform(struct!.rolesKey),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    subject_key: cdktf.stringToTerraform(struct!.subjectKey),
  }
}


export function opensearchOpensearchUserConfigSamlToHclTerraform(struct?: OpensearchOpensearchUserConfigSamlOutputReference | OpensearchOpensearchUserConfigSaml): any {
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
    idp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.idpEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_pemtrustedcas_content: {
      value: cdktf.stringToHclTerraform(struct!.idpPemtrustedcasContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    roles_key: {
      value: cdktf.stringToHclTerraform(struct!.rolesKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_key: {
      value: cdktf.stringToHclTerraform(struct!.subjectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfigSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._idpMetadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataUrl = this._idpMetadataUrl;
    }
    if (this._idpPemtrustedcasContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpPemtrustedcasContent = this._idpPemtrustedcasContent;
    }
    if (this._rolesKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesKey = this._rolesKey;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    if (this._subjectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectKey = this._subjectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfigSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._idpEntityId = undefined;
      this._idpMetadataUrl = undefined;
      this._idpPemtrustedcasContent = undefined;
      this._rolesKey = undefined;
      this._spEntityId = undefined;
      this._subjectKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._idpEntityId = value.idpEntityId;
      this._idpMetadataUrl = value.idpMetadataUrl;
      this._idpPemtrustedcasContent = value.idpPemtrustedcasContent;
      this._rolesKey = value.rolesKey;
      this._spEntityId = value.spEntityId;
      this._subjectKey = value.subjectKey;
    }
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

  // idp_entity_id - computed: false, optional: false, required: true
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_metadata_url - computed: false, optional: false, required: true
  private _idpMetadataUrl?: string; 
  public get idpMetadataUrl() {
    return this.getStringAttribute('idp_metadata_url');
  }
  public set idpMetadataUrl(value: string) {
    this._idpMetadataUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataUrlInput() {
    return this._idpMetadataUrl;
  }

  // idp_pemtrustedcas_content - computed: false, optional: true, required: false
  private _idpPemtrustedcasContent?: string; 
  public get idpPemtrustedcasContent() {
    return this.getStringAttribute('idp_pemtrustedcas_content');
  }
  public set idpPemtrustedcasContent(value: string) {
    this._idpPemtrustedcasContent = value;
  }
  public resetIdpPemtrustedcasContent() {
    this._idpPemtrustedcasContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpPemtrustedcasContentInput() {
    return this._idpPemtrustedcasContent;
  }

  // roles_key - computed: false, optional: true, required: false
  private _rolesKey?: string; 
  public get rolesKey() {
    return this.getStringAttribute('roles_key');
  }
  public set rolesKey(value: string) {
    this._rolesKey = value;
  }
  public resetRolesKey() {
    this._rolesKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesKeyInput() {
    return this._rolesKey;
  }

  // sp_entity_id - computed: false, optional: false, required: true
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // subject_key - computed: false, optional: true, required: false
  private _subjectKey?: string; 
  public get subjectKey() {
    return this.getStringAttribute('subject_key');
  }
  public set subjectKey(value: string) {
    this._subjectKey = value;
  }
  public resetSubjectKey() {
    this._subjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectKeyInput() {
    return this._subjectKey;
  }
}
export interface OpensearchOpensearchUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#additional_backup_regions Opensearch#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Serve the web frontend using a custom CNAME pointing to the Aiven DNS name. Example: `grafana.example.org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#custom_domain Opensearch#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Disable automatic replication factor adjustment for multi-node services. By default, Aiven ensures all indexes are replicated at least to two nodes. Note: Due to potential data loss in case of losing a service node, this setting can not be activated unless specifically allowed for the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#disable_replication_factor_adjustment Opensearch#disable_replication_factor_adjustment}
  */
  readonly disableReplicationFactorAdjustment?: boolean | cdktf.IResolvable;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ip_filter Opensearch#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ip_filter_string Opensearch#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Aiven automation resets index.refresh_interval to default value for every index to be sure that indices are always visible to search. If it doesn't fit your case, you can disable this by setting up this flag to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#keep_index_refresh_interval Opensearch#keep_index_refresh_interval}
  */
  readonly keepIndexRefreshInterval?: boolean | cdktf.IResolvable;
  /**
  * Use index_patterns instead. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#max_index_count Opensearch#max_index_count}
  */
  readonly maxIndexCount?: number;
  /**
  * Enum: `1`, `2`, `2.19`, and newer. OpenSearch version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch_version Opensearch#opensearch_version}
  */
  readonly opensearchVersion?: string;
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#project_to_fork_from Opensearch#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Name of the basebackup to restore in forked service. Example: `backup-20191112t091354293891z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#recovery_basebackup_name Opensearch#recovery_basebackup_name}
  */
  readonly recoveryBasebackupName?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#service_log Opensearch#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#service_to_fork_from Opensearch#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#static_ips Opensearch#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * azure_migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#azure_migration Opensearch#azure_migration}
  */
  readonly azureMigration?: OpensearchOpensearchUserConfigAzureMigration;
  /**
  * gcs_migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#gcs_migration Opensearch#gcs_migration}
  */
  readonly gcsMigration?: OpensearchOpensearchUserConfigGcsMigration;
  /**
  * index_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#index_patterns Opensearch#index_patterns}
  */
  readonly indexPatterns?: OpensearchOpensearchUserConfigIndexPatterns[] | cdktf.IResolvable;
  /**
  * index_rollup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#index_rollup Opensearch#index_rollup}
  */
  readonly indexRollup?: OpensearchOpensearchUserConfigIndexRollup;
  /**
  * index_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#index_template Opensearch#index_template}
  */
  readonly indexTemplate?: OpensearchOpensearchUserConfigIndexTemplate;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#ip_filter_object Opensearch#ip_filter_object}
  */
  readonly ipFilterObject?: OpensearchOpensearchUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * openid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#openid Opensearch#openid}
  */
  readonly openid?: OpensearchOpensearchUserConfigOpenid;
  /**
  * opensearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch Opensearch#opensearch}
  */
  readonly opensearch?: OpensearchOpensearchUserConfigOpensearch;
  /**
  * opensearch_dashboards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#opensearch_dashboards Opensearch#opensearch_dashboards}
  */
  readonly opensearchDashboards?: OpensearchOpensearchUserConfigOpensearchDashboards;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#private_access Opensearch#private_access}
  */
  readonly privateAccess?: OpensearchOpensearchUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#privatelink_access Opensearch#privatelink_access}
  */
  readonly privatelinkAccess?: OpensearchOpensearchUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#public_access Opensearch#public_access}
  */
  readonly publicAccess?: OpensearchOpensearchUserConfigPublicAccess;
  /**
  * s3_migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#s3_migration Opensearch#s3_migration}
  */
  readonly s3Migration?: OpensearchOpensearchUserConfigS3Migration;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#saml Opensearch#saml}
  */
  readonly saml?: OpensearchOpensearchUserConfigSaml;
}

export function opensearchOpensearchUserConfigToTerraform(struct?: OpensearchOpensearchUserConfigOutputReference | OpensearchOpensearchUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    custom_domain: cdktf.stringToTerraform(struct!.customDomain),
    disable_replication_factor_adjustment: cdktf.booleanToTerraform(struct!.disableReplicationFactorAdjustment),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    keep_index_refresh_interval: cdktf.booleanToTerraform(struct!.keepIndexRefreshInterval),
    max_index_count: cdktf.numberToTerraform(struct!.maxIndexCount),
    opensearch_version: cdktf.stringToTerraform(struct!.opensearchVersion),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    recovery_basebackup_name: cdktf.stringToTerraform(struct!.recoveryBasebackupName),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    azure_migration: opensearchOpensearchUserConfigAzureMigrationToTerraform(struct!.azureMigration),
    gcs_migration: opensearchOpensearchUserConfigGcsMigrationToTerraform(struct!.gcsMigration),
    index_patterns: cdktf.listMapper(opensearchOpensearchUserConfigIndexPatternsToTerraform, true)(struct!.indexPatterns),
    index_rollup: opensearchOpensearchUserConfigIndexRollupToTerraform(struct!.indexRollup),
    index_template: opensearchOpensearchUserConfigIndexTemplateToTerraform(struct!.indexTemplate),
    ip_filter_object: cdktf.listMapper(opensearchOpensearchUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    openid: opensearchOpensearchUserConfigOpenidToTerraform(struct!.openid),
    opensearch: opensearchOpensearchUserConfigOpensearchToTerraform(struct!.opensearch),
    opensearch_dashboards: opensearchOpensearchUserConfigOpensearchDashboardsToTerraform(struct!.opensearchDashboards),
    private_access: opensearchOpensearchUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: opensearchOpensearchUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: opensearchOpensearchUserConfigPublicAccessToTerraform(struct!.publicAccess),
    s3_migration: opensearchOpensearchUserConfigS3MigrationToTerraform(struct!.s3Migration),
    saml: opensearchOpensearchUserConfigSamlToTerraform(struct!.saml),
  }
}


export function opensearchOpensearchUserConfigToHclTerraform(struct?: OpensearchOpensearchUserConfigOutputReference | OpensearchOpensearchUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_backup_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalBackupRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_domain: {
      value: cdktf.stringToHclTerraform(struct!.customDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_replication_factor_adjustment: {
      value: cdktf.booleanToHclTerraform(struct!.disableReplicationFactorAdjustment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_filter_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilterString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keep_index_refresh_interval: {
      value: cdktf.booleanToHclTerraform(struct!.keepIndexRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_index_count: {
      value: cdktf.numberToHclTerraform(struct!.maxIndexCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opensearch_version: {
      value: cdktf.stringToHclTerraform(struct!.opensearchVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_to_fork_from: {
      value: cdktf.stringToHclTerraform(struct!.projectToForkFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_basebackup_name: {
      value: cdktf.stringToHclTerraform(struct!.recoveryBasebackupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_to_fork_from: {
      value: cdktf.stringToHclTerraform(struct!.serviceToForkFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ips: {
      value: cdktf.booleanToHclTerraform(struct!.staticIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    azure_migration: {
      value: opensearchOpensearchUserConfigAzureMigrationToHclTerraform(struct!.azureMigration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigAzureMigrationList",
    },
    gcs_migration: {
      value: opensearchOpensearchUserConfigGcsMigrationToHclTerraform(struct!.gcsMigration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigGcsMigrationList",
    },
    index_patterns: {
      value: cdktf.listMapperHcl(opensearchOpensearchUserConfigIndexPatternsToHclTerraform, true)(struct!.indexPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigIndexPatternsList",
    },
    index_rollup: {
      value: opensearchOpensearchUserConfigIndexRollupToHclTerraform(struct!.indexRollup),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigIndexRollupList",
    },
    index_template: {
      value: opensearchOpensearchUserConfigIndexTemplateToHclTerraform(struct!.indexTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigIndexTemplateList",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(opensearchOpensearchUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "OpensearchOpensearchUserConfigIpFilterObjectList",
    },
    openid: {
      value: opensearchOpensearchUserConfigOpenidToHclTerraform(struct!.openid),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpenidList",
    },
    opensearch: {
      value: opensearchOpensearchUserConfigOpensearchToHclTerraform(struct!.opensearch),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchList",
    },
    opensearch_dashboards: {
      value: opensearchOpensearchUserConfigOpensearchDashboardsToHclTerraform(struct!.opensearchDashboards),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigOpensearchDashboardsList",
    },
    private_access: {
      value: opensearchOpensearchUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: opensearchOpensearchUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: opensearchOpensearchUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigPublicAccessList",
    },
    s3_migration: {
      value: opensearchOpensearchUserConfigS3MigrationToHclTerraform(struct!.s3Migration),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigS3MigrationList",
    },
    saml: {
      value: opensearchOpensearchUserConfigSamlToHclTerraform(struct!.saml),
      isBlock: true,
      type: "list",
      storageClassType: "OpensearchOpensearchUserConfigSamlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchOpensearchUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpensearchOpensearchUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBackupRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBackupRegions = this._additionalBackupRegions;
    }
    if (this._customDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomain = this._customDomain;
    }
    if (this._disableReplicationFactorAdjustment !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableReplicationFactorAdjustment = this._disableReplicationFactorAdjustment;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._keepIndexRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepIndexRefreshInterval = this._keepIndexRefreshInterval;
    }
    if (this._maxIndexCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIndexCount = this._maxIndexCount;
    }
    if (this._opensearchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchVersion = this._opensearchVersion;
    }
    if (this._projectToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectToForkFrom = this._projectToForkFrom;
    }
    if (this._recoveryBasebackupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryBasebackupName = this._recoveryBasebackupName;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._serviceToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToForkFrom = this._serviceToForkFrom;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._azureMigration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMigration = this._azureMigration?.internalValue;
    }
    if (this._gcsMigration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsMigration = this._gcsMigration?.internalValue;
    }
    if (this._indexPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexPatterns = this._indexPatterns?.internalValue;
    }
    if (this._indexRollup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRollup = this._indexRollup?.internalValue;
    }
    if (this._indexTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexTemplate = this._indexTemplate?.internalValue;
    }
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._openid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openid = this._openid?.internalValue;
    }
    if (this._opensearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearch = this._opensearch?.internalValue;
    }
    if (this._opensearchDashboards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opensearchDashboards = this._opensearchDashboards?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._privatelinkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatelinkAccess = this._privatelinkAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    if (this._s3Migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Migration = this._s3Migration?.internalValue;
    }
    if (this._saml?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saml = this._saml?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchOpensearchUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._customDomain = undefined;
      this._disableReplicationFactorAdjustment = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._keepIndexRefreshInterval = undefined;
      this._maxIndexCount = undefined;
      this._opensearchVersion = undefined;
      this._projectToForkFrom = undefined;
      this._recoveryBasebackupName = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._staticIps = undefined;
      this._azureMigration.internalValue = undefined;
      this._gcsMigration.internalValue = undefined;
      this._indexPatterns.internalValue = undefined;
      this._indexRollup.internalValue = undefined;
      this._indexTemplate.internalValue = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._openid.internalValue = undefined;
      this._opensearch.internalValue = undefined;
      this._opensearchDashboards.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
      this._s3Migration.internalValue = undefined;
      this._saml.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._customDomain = value.customDomain;
      this._disableReplicationFactorAdjustment = value.disableReplicationFactorAdjustment;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._keepIndexRefreshInterval = value.keepIndexRefreshInterval;
      this._maxIndexCount = value.maxIndexCount;
      this._opensearchVersion = value.opensearchVersion;
      this._projectToForkFrom = value.projectToForkFrom;
      this._recoveryBasebackupName = value.recoveryBasebackupName;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._staticIps = value.staticIps;
      this._azureMigration.internalValue = value.azureMigration;
      this._gcsMigration.internalValue = value.gcsMigration;
      this._indexPatterns.internalValue = value.indexPatterns;
      this._indexRollup.internalValue = value.indexRollup;
      this._indexTemplate.internalValue = value.indexTemplate;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._openid.internalValue = value.openid;
      this._opensearch.internalValue = value.opensearch;
      this._opensearchDashboards.internalValue = value.opensearchDashboards;
      this._privateAccess.internalValue = value.privateAccess;
      this._privatelinkAccess.internalValue = value.privatelinkAccess;
      this._publicAccess.internalValue = value.publicAccess;
      this._s3Migration.internalValue = value.s3Migration;
      this._saml.internalValue = value.saml;
    }
  }

  // additional_backup_regions - computed: false, optional: true, required: false
  private _additionalBackupRegions?: string[]; 
  public get additionalBackupRegions() {
    return this.getListAttribute('additional_backup_regions');
  }
  public set additionalBackupRegions(value: string[]) {
    this._additionalBackupRegions = value;
  }
  public resetAdditionalBackupRegions() {
    this._additionalBackupRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBackupRegionsInput() {
    return this._additionalBackupRegions;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // disable_replication_factor_adjustment - computed: false, optional: true, required: false
  private _disableReplicationFactorAdjustment?: boolean | cdktf.IResolvable; 
  public get disableReplicationFactorAdjustment() {
    return this.getBooleanAttribute('disable_replication_factor_adjustment');
  }
  public set disableReplicationFactorAdjustment(value: boolean | cdktf.IResolvable) {
    this._disableReplicationFactorAdjustment = value;
  }
  public resetDisableReplicationFactorAdjustment() {
    this._disableReplicationFactorAdjustment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReplicationFactorAdjustmentInput() {
    return this._disableReplicationFactorAdjustment;
  }

  // ip_filter - computed: false, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // ip_filter_string - computed: false, optional: true, required: false
  private _ipFilterString?: string[]; 
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }
  public set ipFilterString(value: string[]) {
    this._ipFilterString = value;
  }
  public resetIpFilterString() {
    this._ipFilterString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterStringInput() {
    return this._ipFilterString;
  }

  // keep_index_refresh_interval - computed: false, optional: true, required: false
  private _keepIndexRefreshInterval?: boolean | cdktf.IResolvable; 
  public get keepIndexRefreshInterval() {
    return this.getBooleanAttribute('keep_index_refresh_interval');
  }
  public set keepIndexRefreshInterval(value: boolean | cdktf.IResolvable) {
    this._keepIndexRefreshInterval = value;
  }
  public resetKeepIndexRefreshInterval() {
    this._keepIndexRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepIndexRefreshIntervalInput() {
    return this._keepIndexRefreshInterval;
  }

  // max_index_count - computed: false, optional: true, required: false
  private _maxIndexCount?: number; 
  public get maxIndexCount() {
    return this.getNumberAttribute('max_index_count');
  }
  public set maxIndexCount(value: number) {
    this._maxIndexCount = value;
  }
  public resetMaxIndexCount() {
    this._maxIndexCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIndexCountInput() {
    return this._maxIndexCount;
  }

  // opensearch_version - computed: false, optional: true, required: false
  private _opensearchVersion?: string; 
  public get opensearchVersion() {
    return this.getStringAttribute('opensearch_version');
  }
  public set opensearchVersion(value: string) {
    this._opensearchVersion = value;
  }
  public resetOpensearchVersion() {
    this._opensearchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchVersionInput() {
    return this._opensearchVersion;
  }

  // project_to_fork_from - computed: false, optional: true, required: false
  private _projectToForkFrom?: string; 
  public get projectToForkFrom() {
    return this.getStringAttribute('project_to_fork_from');
  }
  public set projectToForkFrom(value: string) {
    this._projectToForkFrom = value;
  }
  public resetProjectToForkFrom() {
    this._projectToForkFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectToForkFromInput() {
    return this._projectToForkFrom;
  }

  // recovery_basebackup_name - computed: false, optional: true, required: false
  private _recoveryBasebackupName?: string; 
  public get recoveryBasebackupName() {
    return this.getStringAttribute('recovery_basebackup_name');
  }
  public set recoveryBasebackupName(value: string) {
    this._recoveryBasebackupName = value;
  }
  public resetRecoveryBasebackupName() {
    this._recoveryBasebackupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryBasebackupNameInput() {
    return this._recoveryBasebackupName;
  }

  // service_log - computed: false, optional: true, required: false
  private _serviceLog?: boolean | cdktf.IResolvable; 
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }
  public set serviceLog(value: boolean | cdktf.IResolvable) {
    this._serviceLog = value;
  }
  public resetServiceLog() {
    this._serviceLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLogInput() {
    return this._serviceLog;
  }

  // service_to_fork_from - computed: false, optional: true, required: false
  private _serviceToForkFrom?: string; 
  public get serviceToForkFrom() {
    return this.getStringAttribute('service_to_fork_from');
  }
  public set serviceToForkFrom(value: string) {
    this._serviceToForkFrom = value;
  }
  public resetServiceToForkFrom() {
    this._serviceToForkFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceToForkFromInput() {
    return this._serviceToForkFrom;
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: boolean | cdktf.IResolvable; 
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }
  public set staticIps(value: boolean | cdktf.IResolvable) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // azure_migration - computed: false, optional: true, required: false
  private _azureMigration = new OpensearchOpensearchUserConfigAzureMigrationOutputReference(this, "azure_migration");
  public get azureMigration() {
    return this._azureMigration;
  }
  public putAzureMigration(value: OpensearchOpensearchUserConfigAzureMigration) {
    this._azureMigration.internalValue = value;
  }
  public resetAzureMigration() {
    this._azureMigration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMigrationInput() {
    return this._azureMigration.internalValue;
  }

  // gcs_migration - computed: false, optional: true, required: false
  private _gcsMigration = new OpensearchOpensearchUserConfigGcsMigrationOutputReference(this, "gcs_migration");
  public get gcsMigration() {
    return this._gcsMigration;
  }
  public putGcsMigration(value: OpensearchOpensearchUserConfigGcsMigration) {
    this._gcsMigration.internalValue = value;
  }
  public resetGcsMigration() {
    this._gcsMigration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsMigrationInput() {
    return this._gcsMigration.internalValue;
  }

  // index_patterns - computed: false, optional: true, required: false
  private _indexPatterns = new OpensearchOpensearchUserConfigIndexPatternsList(this, "index_patterns", false);
  public get indexPatterns() {
    return this._indexPatterns;
  }
  public putIndexPatterns(value: OpensearchOpensearchUserConfigIndexPatterns[] | cdktf.IResolvable) {
    this._indexPatterns.internalValue = value;
  }
  public resetIndexPatterns() {
    this._indexPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexPatternsInput() {
    return this._indexPatterns.internalValue;
  }

  // index_rollup - computed: false, optional: true, required: false
  private _indexRollup = new OpensearchOpensearchUserConfigIndexRollupOutputReference(this, "index_rollup");
  public get indexRollup() {
    return this._indexRollup;
  }
  public putIndexRollup(value: OpensearchOpensearchUserConfigIndexRollup) {
    this._indexRollup.internalValue = value;
  }
  public resetIndexRollup() {
    this._indexRollup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRollupInput() {
    return this._indexRollup.internalValue;
  }

  // index_template - computed: false, optional: true, required: false
  private _indexTemplate = new OpensearchOpensearchUserConfigIndexTemplateOutputReference(this, "index_template");
  public get indexTemplate() {
    return this._indexTemplate;
  }
  public putIndexTemplate(value: OpensearchOpensearchUserConfigIndexTemplate) {
    this._indexTemplate.internalValue = value;
  }
  public resetIndexTemplate() {
    this._indexTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTemplateInput() {
    return this._indexTemplate.internalValue;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new OpensearchOpensearchUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: OpensearchOpensearchUserConfigIpFilterObject[] | cdktf.IResolvable) {
    this._ipFilterObject.internalValue = value;
  }
  public resetIpFilterObject() {
    this._ipFilterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterObjectInput() {
    return this._ipFilterObject.internalValue;
  }

  // openid - computed: false, optional: true, required: false
  private _openid = new OpensearchOpensearchUserConfigOpenidOutputReference(this, "openid");
  public get openid() {
    return this._openid;
  }
  public putOpenid(value: OpensearchOpensearchUserConfigOpenid) {
    this._openid.internalValue = value;
  }
  public resetOpenid() {
    this._openid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidInput() {
    return this._openid.internalValue;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new OpensearchOpensearchUserConfigOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: OpensearchOpensearchUserConfigOpensearch) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // opensearch_dashboards - computed: false, optional: true, required: false
  private _opensearchDashboards = new OpensearchOpensearchUserConfigOpensearchDashboardsOutputReference(this, "opensearch_dashboards");
  public get opensearchDashboards() {
    return this._opensearchDashboards;
  }
  public putOpensearchDashboards(value: OpensearchOpensearchUserConfigOpensearchDashboards) {
    this._opensearchDashboards.internalValue = value;
  }
  public resetOpensearchDashboards() {
    this._opensearchDashboards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchDashboardsInput() {
    return this._opensearchDashboards.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new OpensearchOpensearchUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: OpensearchOpensearchUserConfigPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // privatelink_access - computed: false, optional: true, required: false
  private _privatelinkAccess = new OpensearchOpensearchUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: OpensearchOpensearchUserConfigPrivatelinkAccess) {
    this._privatelinkAccess.internalValue = value;
  }
  public resetPrivatelinkAccess() {
    this._privatelinkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatelinkAccessInput() {
    return this._privatelinkAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new OpensearchOpensearchUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: OpensearchOpensearchUserConfigPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // s3_migration - computed: false, optional: true, required: false
  private _s3Migration = new OpensearchOpensearchUserConfigS3MigrationOutputReference(this, "s3_migration");
  public get s3Migration() {
    return this._s3Migration;
  }
  public putS3Migration(value: OpensearchOpensearchUserConfigS3Migration) {
    this._s3Migration.internalValue = value;
  }
  public resetS3Migration() {
    this._s3Migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3MigrationInput() {
    return this._s3Migration.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new OpensearchOpensearchUserConfigSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: OpensearchOpensearchUserConfigSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }
}
export interface OpensearchServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#integration_type Opensearch#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#source_service_name Opensearch#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function opensearchServiceIntegrationsToTerraform(struct?: OpensearchServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function opensearchServiceIntegrationsToHclTerraform(struct?: OpensearchServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchServiceIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._sourceServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServiceName = this._sourceServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchServiceIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationType = undefined;
      this._sourceServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationType = value.integrationType;
      this._sourceServiceName = value.sourceServiceName;
    }
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // source_service_name - computed: false, optional: false, required: true
  private _sourceServiceName?: string; 
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
  public set sourceServiceName(value: string) {
    this._sourceServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceNameInput() {
    return this._sourceServiceName;
  }
}

export class OpensearchServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : OpensearchServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): OpensearchServiceIntegrationsOutputReference {
    return new OpensearchServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#key Opensearch#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#value Opensearch#value}
  */
  readonly value: string;
}

export function opensearchTagToTerraform(struct?: OpensearchTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function opensearchTagToHclTerraform(struct?: OpensearchTag | cdktf.IResolvable): any {
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

export class OpensearchTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OpensearchTag | cdktf.IResolvable | undefined) {
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

export class OpensearchTagList extends cdktf.ComplexList {
  public internalValue? : OpensearchTag[] | cdktf.IResolvable

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
  public get(index: number): OpensearchTagOutputReference {
    return new OpensearchTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#email Opensearch#email}
  */
  readonly email: string;
}

export function opensearchTechEmailsToTerraform(struct?: OpensearchTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function opensearchTechEmailsToHclTerraform(struct?: OpensearchTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OpensearchTechEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchTechEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class OpensearchTechEmailsList extends cdktf.ComplexList {
  public internalValue? : OpensearchTechEmails[] | cdktf.IResolvable

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
  public get(index: number): OpensearchTechEmailsOutputReference {
    return new OpensearchTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OpensearchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#create Opensearch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#default Opensearch#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#delete Opensearch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#read Opensearch#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#update Opensearch#update}
  */
  readonly update?: string;
}

export function opensearchTimeoutsToTerraform(struct?: OpensearchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function opensearchTimeoutsToHclTerraform(struct?: OpensearchTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class OpensearchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: OpensearchTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch aiven_opensearch}
*/
export class Opensearch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_opensearch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Opensearch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Opensearch to import
  * @param importFromId The id of the existing Opensearch that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Opensearch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_opensearch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/opensearch aiven_opensearch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_opensearch',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalDiskSpace = config.additionalDiskSpace;
    this._cloudName = config.cloudName;
    this._diskSpace = config.diskSpace;
    this._id = config.id;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._plan = config.plan;
    this._project = config.project;
    this._projectVpcId = config.projectVpcId;
    this._serviceName = config.serviceName;
    this._staticIps = config.staticIps;
    this._terminationProtection = config.terminationProtection;
    this._opensearch.internalValue = config.opensearch;
    this._opensearchUserConfig.internalValue = config.opensearchUserConfig;
    this._serviceIntegrations.internalValue = config.serviceIntegrations;
    this._tag.internalValue = config.tag;
    this._techEmails.internalValue = config.techEmails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_disk_space - computed: true, optional: true, required: false
  private _additionalDiskSpace?: string; 
  public get additionalDiskSpace() {
    return this.getStringAttribute('additional_disk_space');
  }
  public set additionalDiskSpace(value: string) {
    this._additionalDiskSpace = value;
  }
  public resetAdditionalDiskSpace() {
    this._additionalDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDiskSpaceInput() {
    return this._additionalDiskSpace;
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // components - computed: true, optional: false, required: false
  private _components = new OpensearchComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // disk_space - computed: false, optional: true, required: false
  private _diskSpace?: string; 
  public get diskSpace() {
    return this.getStringAttribute('disk_space');
  }
  public set diskSpace(value: string) {
    this._diskSpace = value;
  }
  public resetDiskSpace() {
    this._diskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpaceInput() {
    return this._diskSpace;
  }

  // disk_space_cap - computed: true, optional: false, required: false
  public get diskSpaceCap() {
    return this.getStringAttribute('disk_space_cap');
  }

  // disk_space_default - computed: true, optional: false, required: false
  public get diskSpaceDefault() {
    return this.getStringAttribute('disk_space_default');
  }

  // disk_space_step - computed: true, optional: false, required: false
  public get diskSpaceStep() {
    return this.getStringAttribute('disk_space_step');
  }

  // disk_space_used - computed: true, optional: false, required: false
  public get diskSpaceUsed() {
    return this.getStringAttribute('disk_space_used');
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

  // maintenance_window_dow - computed: false, optional: true, required: false
  private _maintenanceWindowDow?: string; 
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }
  public set maintenanceWindowDow(value: string) {
    this._maintenanceWindowDow = value;
  }
  public resetMaintenanceWindowDow() {
    this._maintenanceWindowDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDowInput() {
    return this._maintenanceWindowDow;
  }

  // maintenance_window_enabled - computed: true, optional: false, required: false
  public get maintenanceWindowEnabled() {
    return this.getBooleanAttribute('maintenance_window_enabled');
  }

  // maintenance_window_time - computed: false, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_vpc_id - computed: false, optional: true, required: false
  private _projectVpcId?: string; 
  public get projectVpcId() {
    return this.getStringAttribute('project_vpc_id');
  }
  public set projectVpcId(value: string) {
    this._projectVpcId = value;
  }
  public resetProjectVpcId() {
    this._projectVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVpcIdInput() {
    return this._projectVpcId;
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: string[]; 
  public get staticIps() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ips'));
  }
  public set staticIps(value: string[]) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // termination_protection - computed: false, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
  }

  // opensearch - computed: false, optional: true, required: false
  private _opensearch = new OpensearchOpensearchOutputReference(this, "opensearch");
  public get opensearch() {
    return this._opensearch;
  }
  public putOpensearch(value: OpensearchOpensearch) {
    this._opensearch.internalValue = value;
  }
  public resetOpensearch() {
    this._opensearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchInput() {
    return this._opensearch.internalValue;
  }

  // opensearch_user_config - computed: false, optional: true, required: false
  private _opensearchUserConfig = new OpensearchOpensearchUserConfigOutputReference(this, "opensearch_user_config");
  public get opensearchUserConfig() {
    return this._opensearchUserConfig;
  }
  public putOpensearchUserConfig(value: OpensearchOpensearchUserConfig) {
    this._opensearchUserConfig.internalValue = value;
  }
  public resetOpensearchUserConfig() {
    this._opensearchUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opensearchUserConfigInput() {
    return this._opensearchUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new OpensearchServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: OpensearchServiceIntegrations[] | cdktf.IResolvable) {
    this._serviceIntegrations.internalValue = value;
  }
  public resetServiceIntegrations() {
    this._serviceIntegrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIntegrationsInput() {
    return this._serviceIntegrations.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new OpensearchTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: OpensearchTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tech_emails - computed: false, optional: true, required: false
  private _techEmails = new OpensearchTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: OpensearchTechEmails[] | cdktf.IResolvable) {
    this._techEmails.internalValue = value;
  }
  public resetTechEmails() {
    this._techEmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techEmailsInput() {
    return this._techEmails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OpensearchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OpensearchTimeouts) {
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
      additional_disk_space: cdktf.stringToTerraform(this._additionalDiskSpace),
      cloud_name: cdktf.stringToTerraform(this._cloudName),
      disk_space: cdktf.stringToTerraform(this._diskSpace),
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      plan: cdktf.stringToTerraform(this._plan),
      project: cdktf.stringToTerraform(this._project),
      project_vpc_id: cdktf.stringToTerraform(this._projectVpcId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      static_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticIps),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      opensearch: opensearchOpensearchToTerraform(this._opensearch.internalValue),
      opensearch_user_config: opensearchOpensearchUserConfigToTerraform(this._opensearchUserConfig.internalValue),
      service_integrations: cdktf.listMapper(opensearchServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(opensearchTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(opensearchTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: opensearchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_disk_space: {
        value: cdktf.stringToHclTerraform(this._additionalDiskSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_name: {
        value: cdktf.stringToHclTerraform(this._cloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_space: {
        value: cdktf.stringToHclTerraform(this._diskSpace),
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
      maintenance_window_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_vpc_id: {
        value: cdktf.stringToHclTerraform(this._projectVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      opensearch: {
        value: opensearchOpensearchToHclTerraform(this._opensearch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchOpensearchList",
      },
      opensearch_user_config: {
        value: opensearchOpensearchUserConfigToHclTerraform(this._opensearchUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OpensearchOpensearchUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(opensearchServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(opensearchTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(opensearchTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpensearchTechEmailsList",
      },
      timeouts: {
        value: opensearchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
