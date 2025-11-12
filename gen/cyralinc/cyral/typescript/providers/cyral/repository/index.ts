// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Labels enable you to categorize your repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#labels Repository#labels}
  */
  readonly labels?: string[];
  /**
  * Repository name that will be used internally in the control plane (ex: `your_repo_name`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#name Repository#name}
  */
  readonly name: string;
  /**
  * Repository type. List of supported types:
  *   - `denodo`
  *   - `dremio`
  *   - `dynamodb`
  *   - `dynamodbstreams`
  *   - `galera`
  *   - `mariadb`
  *   - `mongodb`
  *   - `mysql`
  *   - `oracle`
  *   - `postgresql`
  *   - `redshift`
  *   - `s3`
  *   - `snowflake`
  *   - `sqlserver`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#type Repository#type}
  */
  readonly type: string;
  /**
  * connection_draining block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#connection_draining Repository#connection_draining}
  */
  readonly connectionDraining?: RepositoryConnectionDraining;
  /**
  * mongodb_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#mongodb_settings Repository#mongodb_settings}
  */
  readonly mongodbSettings?: RepositoryMongodbSettings;
  /**
  * redshift_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#redshift_settings Repository#redshift_settings}
  */
  readonly redshiftSettings?: RepositoryRedshiftSettings;
  /**
  * repo_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#repo_node Repository#repo_node}
  */
  readonly repoNode: RepositoryRepoNode[] | cdktf.IResolvable;
}
export interface RepositoryConnectionDraining {
  /**
  * Whether connections should be drained automatically after a listener dies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#auto Repository#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Seconds to wait to let connections drain before starting to kill all the connections, if auto is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#wait_time Repository#wait_time}
  */
  readonly waitTime?: number;
}

export function repositoryConnectionDrainingToTerraform(struct?: RepositoryConnectionDrainingOutputReference | RepositoryConnectionDraining): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    wait_time: cdktf.numberToTerraform(struct!.waitTime),
  }
}


export function repositoryConnectionDrainingToHclTerraform(struct?: RepositoryConnectionDrainingOutputReference | RepositoryConnectionDraining): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_time: {
      value: cdktf.numberToHclTerraform(struct!.waitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryConnectionDrainingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryConnectionDraining | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._waitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTime = this._waitTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryConnectionDraining | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auto = undefined;
      this._waitTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auto = value.auto;
      this._waitTime = value.waitTime;
    }
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // wait_time - computed: false, optional: true, required: false
  private _waitTime?: number; 
  public get waitTime() {
    return this.getNumberAttribute('wait_time');
  }
  public set waitTime(value: number) {
    this._waitTime = value;
  }
  public resetWaitTime() {
    this._waitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeInput() {
    return this._waitTime;
  }
}
export interface RepositoryMongodbSettings {
  /**
  * The flavor of the MongoDB deployment. Allowed values: 
  *   - `mongodb`
  *   - `documentdb`
  * 
  *   The following conditions apply:
  *   - The `documentdb` flavor cannot be combined with the MongoDB Server type `sharded`.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#flavor Repository#flavor}
  */
  readonly flavor?: string;
  /**
  * Name of the replica set, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#replica_set_name Repository#replica_set_name}
  */
  readonly replicaSetName?: string;
  /**
  * Type of the MongoDB server. Allowed values: 
  *   - `replicaset`
  *   - `standalone`
  *   - `sharded`
  * 
  *   The following conditions apply:
  *   - If `sharded` and `srv_record_name` *not* provided, then all `repo_node` blocks must be static (see [`dynamic`](#dynamic)).
  *   - If `sharded` and `srv_record_name` provided, then all `repo_node` blocks must be dynamic (see [`dynamic`](#dynamic)).
  *   - If `standalone`, then only one `repo_node` block can be declared and it must be static (see [`dynamic`](#dynamic)). The `srv_record_name` is not supported in this configuration.
  *   - If `replicaset` and `srv_record_name` *not* provided, then `repo_node` blocks may mix dynamic and static nodes (see [`dynamic`](#dynamic)).
  *   - If `replicaset` and `srv_record_name` provided, then `repo_node` blocks must be dynamic (see [`dynamic`](#dynamic)).
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#server_type Repository#server_type}
  */
  readonly serverType: string;
  /**
  * Name of a DNS SRV record which contains cluster topology details. If specified, then all `repo_node` blocks must be declared dynamic (see [`dynamic`](#dynamic)). Only supported for `server_type="sharded"` or `server_type="replicaset".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#srv_record_name Repository#srv_record_name}
  */
  readonly srvRecordName?: string;
}

export function repositoryMongodbSettingsToTerraform(struct?: RepositoryMongodbSettingsOutputReference | RepositoryMongodbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor: cdktf.stringToTerraform(struct!.flavor),
    replica_set_name: cdktf.stringToTerraform(struct!.replicaSetName),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    srv_record_name: cdktf.stringToTerraform(struct!.srvRecordName),
  }
}


export function repositoryMongodbSettingsToHclTerraform(struct?: RepositoryMongodbSettingsOutputReference | RepositoryMongodbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_set_name: {
      value: cdktf.stringToHclTerraform(struct!.replicaSetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    srv_record_name: {
      value: cdktf.stringToHclTerraform(struct!.srvRecordName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryMongodbSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryMongodbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._replicaSetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSetName = this._replicaSetName;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._srvRecordName !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvRecordName = this._srvRecordName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryMongodbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._flavor = undefined;
      this._replicaSetName = undefined;
      this._serverType = undefined;
      this._srvRecordName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._flavor = value.flavor;
      this._replicaSetName = value.replicaSetName;
      this._serverType = value.serverType;
      this._srvRecordName = value.srvRecordName;
    }
  }

  // flavor - computed: false, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
  }

  // replica_set_name - computed: false, optional: true, required: false
  private _replicaSetName?: string; 
  public get replicaSetName() {
    return this.getStringAttribute('replica_set_name');
  }
  public set replicaSetName(value: string) {
    this._replicaSetName = value;
  }
  public resetReplicaSetName() {
    this._replicaSetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetNameInput() {
    return this._replicaSetName;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // srv_record_name - computed: false, optional: true, required: false
  private _srvRecordName?: string; 
  public get srvRecordName() {
    return this.getStringAttribute('srv_record_name');
  }
  public set srvRecordName(value: string) {
    this._srvRecordName = value;
  }
  public resetSrvRecordName() {
    this._srvRecordName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvRecordNameInput() {
    return this._srvRecordName;
  }
}
export interface RepositoryRedshiftSettings {
  /**
  * Code of the AWS region where the Redshift instance is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#aws_region Repository#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Name of the provisioned cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#cluster_identifier Repository#cluster_identifier}
  */
  readonly clusterIdentifier?: string;
  /**
  * Workgroup name for serverless cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#workgroup_name Repository#workgroup_name}
  */
  readonly workgroupName?: string;
}

export function repositoryRedshiftSettingsToTerraform(struct?: RepositoryRedshiftSettingsOutputReference | RepositoryRedshiftSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    cluster_identifier: cdktf.stringToTerraform(struct!.clusterIdentifier),
    workgroup_name: cdktf.stringToTerraform(struct!.workgroupName),
  }
}


export function repositoryRedshiftSettingsToHclTerraform(struct?: RepositoryRedshiftSettingsOutputReference | RepositoryRedshiftSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_identifier: {
      value: cdktf.stringToHclTerraform(struct!.clusterIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workgroup_name: {
      value: cdktf.stringToHclTerraform(struct!.workgroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRedshiftSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryRedshiftSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._clusterIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIdentifier = this._clusterIdentifier;
    }
    if (this._workgroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.workgroupName = this._workgroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRedshiftSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._clusterIdentifier = undefined;
      this._workgroupName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._clusterIdentifier = value.clusterIdentifier;
      this._workgroupName = value.workgroupName;
    }
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // cluster_identifier - computed: false, optional: true, required: false
  private _clusterIdentifier?: string; 
  public get clusterIdentifier() {
    return this.getStringAttribute('cluster_identifier');
  }
  public set clusterIdentifier(value: string) {
    this._clusterIdentifier = value;
  }
  public resetClusterIdentifier() {
    this._clusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdentifierInput() {
    return this._clusterIdentifier;
  }

  // workgroup_name - computed: false, optional: true, required: false
  private _workgroupName?: string; 
  public get workgroupName() {
    return this.getStringAttribute('workgroup_name');
  }
  public set workgroupName(value: string) {
    this._workgroupName = value;
  }
  public resetWorkgroupName() {
    this._workgroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workgroupNameInput() {
    return this._workgroupName;
  }
}
export interface RepositoryRepoNode {
  /**
  * *Only supported for MongoDB in cluster configurations.*
  * Indicates if the node is dynamically discovered, meaning that the sidecar will query the cluster to get the topology information and discover the addresses of the dynamic nodes. If set to `true`, `host` and `port` must be empty. A node with value of this field as false considered `static`.
  * The following conditions apply: 
  *   - The total number of declared `repo_node` blocks must match the actual number of nodes in the cluster.
  *   - If there are static nodes in the configuration, they must be declared before all dynamic nodes.
  *   - See the MongoDB-specific configuration in the [mongodb_settings](#nested-schema-for-mongodb_settings).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#dynamic Repository#dynamic}
  */
  readonly dynamic?: boolean | cdktf.IResolvable;
  /**
  * Repo node host (ex: `somerepo.cyral.com`). Can be empty if node is dynamic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#host Repository#host}
  */
  readonly host?: string;
  /**
  * Name of the repo node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#name Repository#name}
  */
  readonly name?: string;
  /**
  * Repository access port (ex: `3306`). Can be empty if node is dynamic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#port Repository#port}
  */
  readonly port?: number;
}

export function repositoryRepoNodeToTerraform(struct?: RepositoryRepoNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: cdktf.booleanToTerraform(struct!.dynamic),
    host: cdktf.stringToTerraform(struct!.host),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function repositoryRepoNodeToHclTerraform(struct?: RepositoryRepoNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryRepoNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryRepoNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryRepoNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic = undefined;
      this._host = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic = value.dynamic;
      this._host = value.host;
      this._name = value.name;
      this._port = value.port;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic?: boolean | cdktf.IResolvable; 
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }
  public set dynamic(value: boolean | cdktf.IResolvable) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class RepositoryRepoNodeList extends cdktf.ComplexList {
  public internalValue? : RepositoryRepoNode[] | cdktf.IResolvable

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
  public get(index: number): RepositoryRepoNodeOutputReference {
    return new RepositoryRepoNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository cyral_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repository to import
  * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository cyral_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_repository',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._labels = config.labels;
    this._name = config.name;
    this._type = config.type;
    this._connectionDraining.internalValue = config.connectionDraining;
    this._mongodbSettings.internalValue = config.mongodbSettings;
    this._redshiftSettings.internalValue = config.redshiftSettings;
    this._repoNode.internalValue = config.repoNode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
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

  // connection_draining - computed: false, optional: true, required: false
  private _connectionDraining = new RepositoryConnectionDrainingOutputReference(this, "connection_draining");
  public get connectionDraining() {
    return this._connectionDraining;
  }
  public putConnectionDraining(value: RepositoryConnectionDraining) {
    this._connectionDraining.internalValue = value;
  }
  public resetConnectionDraining() {
    this._connectionDraining.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionDrainingInput() {
    return this._connectionDraining.internalValue;
  }

  // mongodb_settings - computed: false, optional: true, required: false
  private _mongodbSettings = new RepositoryMongodbSettingsOutputReference(this, "mongodb_settings");
  public get mongodbSettings() {
    return this._mongodbSettings;
  }
  public putMongodbSettings(value: RepositoryMongodbSettings) {
    this._mongodbSettings.internalValue = value;
  }
  public resetMongodbSettings() {
    this._mongodbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbSettingsInput() {
    return this._mongodbSettings.internalValue;
  }

  // redshift_settings - computed: false, optional: true, required: false
  private _redshiftSettings = new RepositoryRedshiftSettingsOutputReference(this, "redshift_settings");
  public get redshiftSettings() {
    return this._redshiftSettings;
  }
  public putRedshiftSettings(value: RepositoryRedshiftSettings) {
    this._redshiftSettings.internalValue = value;
  }
  public resetRedshiftSettings() {
    this._redshiftSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftSettingsInput() {
    return this._redshiftSettings.internalValue;
  }

  // repo_node - computed: false, optional: false, required: true
  private _repoNode = new RepositoryRepoNodeList(this, "repo_node", false);
  public get repoNode() {
    return this._repoNode;
  }
  public putRepoNode(value: RepositoryRepoNode[] | cdktf.IResolvable) {
    this._repoNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNodeInput() {
    return this._repoNode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      connection_draining: repositoryConnectionDrainingToTerraform(this._connectionDraining.internalValue),
      mongodb_settings: repositoryMongodbSettingsToTerraform(this._mongodbSettings.internalValue),
      redshift_settings: repositoryRedshiftSettingsToTerraform(this._redshiftSettings.internalValue),
      repo_node: cdktf.listMapper(repositoryRepoNodeToTerraform, true)(this._repoNode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_draining: {
        value: repositoryConnectionDrainingToHclTerraform(this._connectionDraining.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RepositoryConnectionDrainingList",
      },
      mongodb_settings: {
        value: repositoryMongodbSettingsToHclTerraform(this._mongodbSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RepositoryMongodbSettingsList",
      },
      redshift_settings: {
        value: repositoryRedshiftSettingsToHclTerraform(this._redshiftSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RepositoryRedshiftSettingsList",
      },
      repo_node: {
        value: cdktf.listMapperHcl(repositoryRepoNodeToHclTerraform, true)(this._repoNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryRepoNodeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
