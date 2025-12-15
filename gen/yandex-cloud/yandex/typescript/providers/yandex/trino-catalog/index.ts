// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrinoCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configuration for Clickhouse connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#clickhouse TrinoCatalog#clickhouse}
  */
  readonly clickhouse?: TrinoCatalogClickhouse;
  /**
  * ID of the Trino cluster. Provided by the client when the Catalog is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#cluster_id TrinoCatalog#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Configuration for DeltaLake connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#delta_lake TrinoCatalog#delta_lake}
  */
  readonly deltaLake?: TrinoCatalogDeltaLake;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#description TrinoCatalog#description}
  */
  readonly description?: string;
  /**
  * Configuration for Hive connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#hive TrinoCatalog#hive}
  */
  readonly hive?: TrinoCatalogHive;
  /**
  * Configuration for Hudi connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#hudi TrinoCatalog#hudi}
  */
  readonly hudi?: TrinoCatalogHudi;
  /**
  * Configuration for Iceberg connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#iceberg TrinoCatalog#iceberg}
  */
  readonly iceberg?: TrinoCatalogIceberg;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#labels TrinoCatalog#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Configuration for MySQL connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#mysql TrinoCatalog#mysql}
  */
  readonly mysql?: TrinoCatalogMysql;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#name TrinoCatalog#name}
  */
  readonly name: string;
  /**
  * Configuration for Oracle connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#oracle TrinoCatalog#oracle}
  */
  readonly oracle?: TrinoCatalogOracle;
  /**
  * Configuration for Postgresql connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#postgresql TrinoCatalog#postgresql}
  */
  readonly postgresql?: TrinoCatalogPostgresql;
  /**
  * Configuration for SQLServer connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#sqlserver TrinoCatalog#sqlserver}
  */
  readonly sqlserver?: TrinoCatalogSqlserver;
  /**
  * Configuration for TPCDS connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#tpcds TrinoCatalog#tpcds}
  */
  readonly tpcds?: TrinoCatalogTpcds;
  /**
  * Configuration for TPCH connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#tpch TrinoCatalog#tpch}
  */
  readonly tpch?: TrinoCatalogTpch;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#timeouts TrinoCatalog#timeouts}
  */
  readonly timeouts?: TrinoCatalogTimeouts;
}
export interface TrinoCatalogClickhouseConnectionManager {
  /**
  * Connection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_id TrinoCatalog#connection_id}
  */
  readonly connectionId: string;
  /**
  * Additional connection properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_properties TrinoCatalog#connection_properties}
  */
  readonly connectionProperties?: { [key: string]: string };
  /**
  * Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#database TrinoCatalog#database}
  */
  readonly database: string;
}

export function trinoCatalogClickhouseConnectionManagerToTerraform(struct?: TrinoCatalogClickhouseConnectionManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.connectionProperties),
    database: cdktf.stringToTerraform(struct!.database),
  }
}


export function trinoCatalogClickhouseConnectionManagerToHclTerraform(struct?: TrinoCatalogClickhouseConnectionManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.connectionProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogClickhouseConnectionManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogClickhouseConnectionManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionProperties = this._connectionProperties;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogClickhouseConnectionManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._connectionProperties = undefined;
      this._database = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._connectionProperties = value.connectionProperties;
      this._database = value.database;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_properties - computed: false, optional: true, required: false
  private _connectionProperties?: { [key: string]: string }; 
  public get connectionProperties() {
    return this.getStringMapAttribute('connection_properties');
  }
  public set connectionProperties(value: { [key: string]: string }) {
    this._connectionProperties = value;
  }
  public resetConnectionProperties() {
    this._connectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }
}
export interface TrinoCatalogClickhouseOnPremise {
  /**
  * Connection to the clickhouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_url TrinoCatalog#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Password of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#password TrinoCatalog#password}
  */
  readonly password: string;
  /**
  * Name of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#user_name TrinoCatalog#user_name}
  */
  readonly userName: string;
}

export function trinoCatalogClickhouseOnPremiseToTerraform(struct?: TrinoCatalogClickhouseOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function trinoCatalogClickhouseOnPremiseToHclTerraform(struct?: TrinoCatalogClickhouseOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogClickhouseOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogClickhouseOnPremise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogClickhouseOnPremise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionUrl = undefined;
      this._password = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionUrl = value.connectionUrl;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // connection_url - computed: false, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface TrinoCatalogClickhouse {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Configuration for connection manager connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_manager TrinoCatalog#connection_manager}
  */
  readonly connectionManager?: TrinoCatalogClickhouseConnectionManager;
  /**
  * Configuration for on-premise connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#on_premise TrinoCatalog#on_premise}
  */
  readonly onPremise?: TrinoCatalogClickhouseOnPremise;
}

export function trinoCatalogClickhouseToTerraform(struct?: TrinoCatalogClickhouse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    connection_manager: trinoCatalogClickhouseConnectionManagerToTerraform(struct!.connectionManager),
    on_premise: trinoCatalogClickhouseOnPremiseToTerraform(struct!.onPremise),
  }
}


export function trinoCatalogClickhouseToHclTerraform(struct?: TrinoCatalogClickhouse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    connection_manager: {
      value: trinoCatalogClickhouseConnectionManagerToHclTerraform(struct!.connectionManager),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogClickhouseConnectionManager",
    },
    on_premise: {
      value: trinoCatalogClickhouseOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogClickhouseOnPremise",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogClickhouse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._connectionManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionManager = this._connectionManager?.internalValue;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogClickhouse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._connectionManager.internalValue = undefined;
      this._onPremise.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._connectionManager.internalValue = value.connectionManager;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // connection_manager - computed: false, optional: true, required: false
  private _connectionManager = new TrinoCatalogClickhouseConnectionManagerOutputReference(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }
  public putConnectionManager(value: TrinoCatalogClickhouseConnectionManager) {
    this._connectionManager.internalValue = value;
  }
  public resetConnectionManager() {
    this._connectionManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionManagerInput() {
    return this._connectionManager.internalValue;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new TrinoCatalogClickhouseOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: TrinoCatalogClickhouseOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface TrinoCatalogDeltaLakeFileSystemExternalS3 {
  /**
  * AWS access key ID for S3 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_access_key TrinoCatalog#aws_access_key}
  */
  readonly awsAccessKey: string;
  /**
  * AWS S3 compatible endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_endpoint TrinoCatalog#aws_endpoint}
  */
  readonly awsEndpoint: string;
  /**
  * AWS region for S3 storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_region TrinoCatalog#aws_region}
  */
  readonly awsRegion: string;
  /**
  * AWS secret access key for S3 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_secret_key TrinoCatalog#aws_secret_key}
  */
  readonly awsSecretKey: string;
}

export function trinoCatalogDeltaLakeFileSystemExternalS3ToTerraform(struct?: TrinoCatalogDeltaLakeFileSystemExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key: cdktf.stringToTerraform(struct!.awsAccessKey),
    aws_endpoint: cdktf.stringToTerraform(struct!.awsEndpoint),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
  }
}


export function trinoCatalogDeltaLakeFileSystemExternalS3ToHclTerraform(struct?: TrinoCatalogDeltaLakeFileSystemExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.awsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogDeltaLakeFileSystemExternalS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogDeltaLakeFileSystemExternalS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKey = this._awsAccessKey;
    }
    if (this._awsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEndpoint = this._awsEndpoint;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogDeltaLakeFileSystemExternalS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKey = undefined;
      this._awsEndpoint = undefined;
      this._awsRegion = undefined;
      this._awsSecretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKey = value.awsAccessKey;
      this._awsEndpoint = value.awsEndpoint;
      this._awsRegion = value.awsRegion;
      this._awsSecretKey = value.awsSecretKey;
    }
  }

  // aws_access_key - computed: false, optional: false, required: true
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_endpoint - computed: false, optional: false, required: true
  private _awsEndpoint?: string; 
  public get awsEndpoint() {
    return this.getStringAttribute('aws_endpoint');
  }
  public set awsEndpoint(value: string) {
    this._awsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEndpointInput() {
    return this._awsEndpoint;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_key - computed: false, optional: false, required: true
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }
}
export interface TrinoCatalogDeltaLakeFileSystemS3 {
}

export function trinoCatalogDeltaLakeFileSystemS3ToTerraform(struct?: TrinoCatalogDeltaLakeFileSystemS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function trinoCatalogDeltaLakeFileSystemS3ToHclTerraform(struct?: TrinoCatalogDeltaLakeFileSystemS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TrinoCatalogDeltaLakeFileSystemS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogDeltaLakeFileSystemS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogDeltaLakeFileSystemS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface TrinoCatalogDeltaLakeFileSystem {
  /**
  * Describes External S3 compatible file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#external_s3 TrinoCatalog#external_s3}
  */
  readonly externalS3?: TrinoCatalogDeltaLakeFileSystemExternalS3;
  /**
  * Describes YandexCloud native S3 file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#s3 TrinoCatalog#s3}
  */
  readonly s3?: TrinoCatalogDeltaLakeFileSystemS3;
}

export function trinoCatalogDeltaLakeFileSystemToTerraform(struct?: TrinoCatalogDeltaLakeFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_s3: trinoCatalogDeltaLakeFileSystemExternalS3ToTerraform(struct!.externalS3),
    s3: trinoCatalogDeltaLakeFileSystemS3ToTerraform(struct!.s3),
  }
}


export function trinoCatalogDeltaLakeFileSystemToHclTerraform(struct?: TrinoCatalogDeltaLakeFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_s3: {
      value: trinoCatalogDeltaLakeFileSystemExternalS3ToHclTerraform(struct!.externalS3),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogDeltaLakeFileSystemExternalS3",
    },
    s3: {
      value: trinoCatalogDeltaLakeFileSystemS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogDeltaLakeFileSystemS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogDeltaLakeFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogDeltaLakeFileSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalS3 = this._externalS3?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogDeltaLakeFileSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalS3.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalS3.internalValue = value.externalS3;
      this._s3.internalValue = value.s3;
    }
  }

  // external_s3 - computed: false, optional: true, required: false
  private _externalS3 = new TrinoCatalogDeltaLakeFileSystemExternalS3OutputReference(this, "external_s3");
  public get externalS3() {
    return this._externalS3;
  }
  public putExternalS3(value: TrinoCatalogDeltaLakeFileSystemExternalS3) {
    this._externalS3.internalValue = value;
  }
  public resetExternalS3() {
    this._externalS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalS3Input() {
    return this._externalS3.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TrinoCatalogDeltaLakeFileSystemS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: TrinoCatalogDeltaLakeFileSystemS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface TrinoCatalogDeltaLakeMetastore {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#uri TrinoCatalog#uri}
  */
  readonly uri: string;
}

export function trinoCatalogDeltaLakeMetastoreToTerraform(struct?: TrinoCatalogDeltaLakeMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function trinoCatalogDeltaLakeMetastoreToHclTerraform(struct?: TrinoCatalogDeltaLakeMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogDeltaLakeMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogDeltaLakeMetastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogDeltaLakeMetastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TrinoCatalogDeltaLake {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * File system configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#file_system TrinoCatalog#file_system}
  */
  readonly fileSystem: TrinoCatalogDeltaLakeFileSystem;
  /**
  * Metastore configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#metastore TrinoCatalog#metastore}
  */
  readonly metastore: TrinoCatalogDeltaLakeMetastore;
}

export function trinoCatalogDeltaLakeToTerraform(struct?: TrinoCatalogDeltaLake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    file_system: trinoCatalogDeltaLakeFileSystemToTerraform(struct!.fileSystem),
    metastore: trinoCatalogDeltaLakeMetastoreToTerraform(struct!.metastore),
  }
}


export function trinoCatalogDeltaLakeToHclTerraform(struct?: TrinoCatalogDeltaLake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    file_system: {
      value: trinoCatalogDeltaLakeFileSystemToHclTerraform(struct!.fileSystem),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogDeltaLakeFileSystem",
    },
    metastore: {
      value: trinoCatalogDeltaLakeMetastoreToHclTerraform(struct!.metastore),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogDeltaLakeMetastore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogDeltaLakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogDeltaLake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._fileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem?.internalValue;
    }
    if (this._metastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastore = this._metastore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogDeltaLake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._fileSystem.internalValue = undefined;
      this._metastore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._fileSystem.internalValue = value.fileSystem;
      this._metastore.internalValue = value.metastore;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // file_system - computed: false, optional: false, required: true
  private _fileSystem = new TrinoCatalogDeltaLakeFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }
  public putFileSystem(value: TrinoCatalogDeltaLakeFileSystem) {
    this._fileSystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem.internalValue;
  }

  // metastore - computed: false, optional: false, required: true
  private _metastore = new TrinoCatalogDeltaLakeMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
  public putMetastore(value: TrinoCatalogDeltaLakeMetastore) {
    this._metastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore.internalValue;
  }
}
export interface TrinoCatalogHiveFileSystemExternalS3 {
  /**
  * AWS access key ID for S3 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_access_key TrinoCatalog#aws_access_key}
  */
  readonly awsAccessKey: string;
  /**
  * AWS S3 compatible endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_endpoint TrinoCatalog#aws_endpoint}
  */
  readonly awsEndpoint: string;
  /**
  * AWS region for S3 storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_region TrinoCatalog#aws_region}
  */
  readonly awsRegion: string;
  /**
  * AWS secret access key for S3 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_secret_key TrinoCatalog#aws_secret_key}
  */
  readonly awsSecretKey: string;
}

export function trinoCatalogHiveFileSystemExternalS3ToTerraform(struct?: TrinoCatalogHiveFileSystemExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key: cdktf.stringToTerraform(struct!.awsAccessKey),
    aws_endpoint: cdktf.stringToTerraform(struct!.awsEndpoint),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
  }
}


export function trinoCatalogHiveFileSystemExternalS3ToHclTerraform(struct?: TrinoCatalogHiveFileSystemExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.awsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogHiveFileSystemExternalS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHiveFileSystemExternalS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKey = this._awsAccessKey;
    }
    if (this._awsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEndpoint = this._awsEndpoint;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHiveFileSystemExternalS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKey = undefined;
      this._awsEndpoint = undefined;
      this._awsRegion = undefined;
      this._awsSecretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKey = value.awsAccessKey;
      this._awsEndpoint = value.awsEndpoint;
      this._awsRegion = value.awsRegion;
      this._awsSecretKey = value.awsSecretKey;
    }
  }

  // aws_access_key - computed: false, optional: false, required: true
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_endpoint - computed: false, optional: false, required: true
  private _awsEndpoint?: string; 
  public get awsEndpoint() {
    return this.getStringAttribute('aws_endpoint');
  }
  public set awsEndpoint(value: string) {
    this._awsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEndpointInput() {
    return this._awsEndpoint;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_key - computed: false, optional: false, required: true
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }
}
export interface TrinoCatalogHiveFileSystemS3 {
}

export function trinoCatalogHiveFileSystemS3ToTerraform(struct?: TrinoCatalogHiveFileSystemS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function trinoCatalogHiveFileSystemS3ToHclTerraform(struct?: TrinoCatalogHiveFileSystemS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TrinoCatalogHiveFileSystemS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHiveFileSystemS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHiveFileSystemS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface TrinoCatalogHiveFileSystem {
  /**
  * Describes External S3 compatible file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#external_s3 TrinoCatalog#external_s3}
  */
  readonly externalS3?: TrinoCatalogHiveFileSystemExternalS3;
  /**
  * Describes YandexCloud native S3 file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#s3 TrinoCatalog#s3}
  */
  readonly s3?: TrinoCatalogHiveFileSystemS3;
}

export function trinoCatalogHiveFileSystemToTerraform(struct?: TrinoCatalogHiveFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_s3: trinoCatalogHiveFileSystemExternalS3ToTerraform(struct!.externalS3),
    s3: trinoCatalogHiveFileSystemS3ToTerraform(struct!.s3),
  }
}


export function trinoCatalogHiveFileSystemToHclTerraform(struct?: TrinoCatalogHiveFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_s3: {
      value: trinoCatalogHiveFileSystemExternalS3ToHclTerraform(struct!.externalS3),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogHiveFileSystemExternalS3",
    },
    s3: {
      value: trinoCatalogHiveFileSystemS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogHiveFileSystemS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogHiveFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHiveFileSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalS3 = this._externalS3?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHiveFileSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalS3.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalS3.internalValue = value.externalS3;
      this._s3.internalValue = value.s3;
    }
  }

  // external_s3 - computed: false, optional: true, required: false
  private _externalS3 = new TrinoCatalogHiveFileSystemExternalS3OutputReference(this, "external_s3");
  public get externalS3() {
    return this._externalS3;
  }
  public putExternalS3(value: TrinoCatalogHiveFileSystemExternalS3) {
    this._externalS3.internalValue = value;
  }
  public resetExternalS3() {
    this._externalS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalS3Input() {
    return this._externalS3.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TrinoCatalogHiveFileSystemS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: TrinoCatalogHiveFileSystemS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface TrinoCatalogHiveMetastore {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#uri TrinoCatalog#uri}
  */
  readonly uri: string;
}

export function trinoCatalogHiveMetastoreToTerraform(struct?: TrinoCatalogHiveMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function trinoCatalogHiveMetastoreToHclTerraform(struct?: TrinoCatalogHiveMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogHiveMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHiveMetastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHiveMetastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TrinoCatalogHive {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * File system configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#file_system TrinoCatalog#file_system}
  */
  readonly fileSystem: TrinoCatalogHiveFileSystem;
  /**
  * Metastore configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#metastore TrinoCatalog#metastore}
  */
  readonly metastore: TrinoCatalogHiveMetastore;
}

export function trinoCatalogHiveToTerraform(struct?: TrinoCatalogHive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    file_system: trinoCatalogHiveFileSystemToTerraform(struct!.fileSystem),
    metastore: trinoCatalogHiveMetastoreToTerraform(struct!.metastore),
  }
}


export function trinoCatalogHiveToHclTerraform(struct?: TrinoCatalogHive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    file_system: {
      value: trinoCatalogHiveFileSystemToHclTerraform(struct!.fileSystem),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogHiveFileSystem",
    },
    metastore: {
      value: trinoCatalogHiveMetastoreToHclTerraform(struct!.metastore),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogHiveMetastore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogHiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._fileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem?.internalValue;
    }
    if (this._metastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastore = this._metastore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._fileSystem.internalValue = undefined;
      this._metastore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._fileSystem.internalValue = value.fileSystem;
      this._metastore.internalValue = value.metastore;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // file_system - computed: false, optional: false, required: true
  private _fileSystem = new TrinoCatalogHiveFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }
  public putFileSystem(value: TrinoCatalogHiveFileSystem) {
    this._fileSystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem.internalValue;
  }

  // metastore - computed: false, optional: false, required: true
  private _metastore = new TrinoCatalogHiveMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
  public putMetastore(value: TrinoCatalogHiveMetastore) {
    this._metastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore.internalValue;
  }
}
export interface TrinoCatalogHudiFileSystemExternalS3 {
  /**
  * AWS access key ID for S3 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_access_key TrinoCatalog#aws_access_key}
  */
  readonly awsAccessKey: string;
  /**
  * AWS S3 compatible endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_endpoint TrinoCatalog#aws_endpoint}
  */
  readonly awsEndpoint: string;
  /**
  * AWS region for S3 storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_region TrinoCatalog#aws_region}
  */
  readonly awsRegion: string;
  /**
  * AWS secret access key for S3 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_secret_key TrinoCatalog#aws_secret_key}
  */
  readonly awsSecretKey: string;
}

export function trinoCatalogHudiFileSystemExternalS3ToTerraform(struct?: TrinoCatalogHudiFileSystemExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key: cdktf.stringToTerraform(struct!.awsAccessKey),
    aws_endpoint: cdktf.stringToTerraform(struct!.awsEndpoint),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
  }
}


export function trinoCatalogHudiFileSystemExternalS3ToHclTerraform(struct?: TrinoCatalogHudiFileSystemExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.awsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogHudiFileSystemExternalS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHudiFileSystemExternalS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKey = this._awsAccessKey;
    }
    if (this._awsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEndpoint = this._awsEndpoint;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHudiFileSystemExternalS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKey = undefined;
      this._awsEndpoint = undefined;
      this._awsRegion = undefined;
      this._awsSecretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKey = value.awsAccessKey;
      this._awsEndpoint = value.awsEndpoint;
      this._awsRegion = value.awsRegion;
      this._awsSecretKey = value.awsSecretKey;
    }
  }

  // aws_access_key - computed: false, optional: false, required: true
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_endpoint - computed: false, optional: false, required: true
  private _awsEndpoint?: string; 
  public get awsEndpoint() {
    return this.getStringAttribute('aws_endpoint');
  }
  public set awsEndpoint(value: string) {
    this._awsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEndpointInput() {
    return this._awsEndpoint;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_key - computed: false, optional: false, required: true
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }
}
export interface TrinoCatalogHudiFileSystemS3 {
}

export function trinoCatalogHudiFileSystemS3ToTerraform(struct?: TrinoCatalogHudiFileSystemS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function trinoCatalogHudiFileSystemS3ToHclTerraform(struct?: TrinoCatalogHudiFileSystemS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TrinoCatalogHudiFileSystemS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHudiFileSystemS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHudiFileSystemS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface TrinoCatalogHudiFileSystem {
  /**
  * Describes External S3 compatible file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#external_s3 TrinoCatalog#external_s3}
  */
  readonly externalS3?: TrinoCatalogHudiFileSystemExternalS3;
  /**
  * Describes YandexCloud native S3 file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#s3 TrinoCatalog#s3}
  */
  readonly s3?: TrinoCatalogHudiFileSystemS3;
}

export function trinoCatalogHudiFileSystemToTerraform(struct?: TrinoCatalogHudiFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_s3: trinoCatalogHudiFileSystemExternalS3ToTerraform(struct!.externalS3),
    s3: trinoCatalogHudiFileSystemS3ToTerraform(struct!.s3),
  }
}


export function trinoCatalogHudiFileSystemToHclTerraform(struct?: TrinoCatalogHudiFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_s3: {
      value: trinoCatalogHudiFileSystemExternalS3ToHclTerraform(struct!.externalS3),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogHudiFileSystemExternalS3",
    },
    s3: {
      value: trinoCatalogHudiFileSystemS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogHudiFileSystemS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogHudiFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHudiFileSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalS3 = this._externalS3?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHudiFileSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalS3.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalS3.internalValue = value.externalS3;
      this._s3.internalValue = value.s3;
    }
  }

  // external_s3 - computed: false, optional: true, required: false
  private _externalS3 = new TrinoCatalogHudiFileSystemExternalS3OutputReference(this, "external_s3");
  public get externalS3() {
    return this._externalS3;
  }
  public putExternalS3(value: TrinoCatalogHudiFileSystemExternalS3) {
    this._externalS3.internalValue = value;
  }
  public resetExternalS3() {
    this._externalS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalS3Input() {
    return this._externalS3.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TrinoCatalogHudiFileSystemS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: TrinoCatalogHudiFileSystemS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface TrinoCatalogHudiMetastore {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#uri TrinoCatalog#uri}
  */
  readonly uri: string;
}

export function trinoCatalogHudiMetastoreToTerraform(struct?: TrinoCatalogHudiMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function trinoCatalogHudiMetastoreToHclTerraform(struct?: TrinoCatalogHudiMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogHudiMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHudiMetastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHudiMetastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TrinoCatalogHudi {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * File system configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#file_system TrinoCatalog#file_system}
  */
  readonly fileSystem: TrinoCatalogHudiFileSystem;
  /**
  * Metastore configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#metastore TrinoCatalog#metastore}
  */
  readonly metastore: TrinoCatalogHudiMetastore;
}

export function trinoCatalogHudiToTerraform(struct?: TrinoCatalogHudi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    file_system: trinoCatalogHudiFileSystemToTerraform(struct!.fileSystem),
    metastore: trinoCatalogHudiMetastoreToTerraform(struct!.metastore),
  }
}


export function trinoCatalogHudiToHclTerraform(struct?: TrinoCatalogHudi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    file_system: {
      value: trinoCatalogHudiFileSystemToHclTerraform(struct!.fileSystem),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogHudiFileSystem",
    },
    metastore: {
      value: trinoCatalogHudiMetastoreToHclTerraform(struct!.metastore),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogHudiMetastore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogHudiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogHudi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._fileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem?.internalValue;
    }
    if (this._metastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastore = this._metastore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogHudi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._fileSystem.internalValue = undefined;
      this._metastore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._fileSystem.internalValue = value.fileSystem;
      this._metastore.internalValue = value.metastore;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // file_system - computed: false, optional: false, required: true
  private _fileSystem = new TrinoCatalogHudiFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }
  public putFileSystem(value: TrinoCatalogHudiFileSystem) {
    this._fileSystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem.internalValue;
  }

  // metastore - computed: false, optional: false, required: true
  private _metastore = new TrinoCatalogHudiMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
  public putMetastore(value: TrinoCatalogHudiMetastore) {
    this._metastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore.internalValue;
  }
}
export interface TrinoCatalogIcebergFileSystemExternalS3 {
  /**
  * AWS access key ID for S3 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_access_key TrinoCatalog#aws_access_key}
  */
  readonly awsAccessKey: string;
  /**
  * AWS S3 compatible endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_endpoint TrinoCatalog#aws_endpoint}
  */
  readonly awsEndpoint: string;
  /**
  * AWS region for S3 storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_region TrinoCatalog#aws_region}
  */
  readonly awsRegion: string;
  /**
  * AWS secret access key for S3 authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#aws_secret_key TrinoCatalog#aws_secret_key}
  */
  readonly awsSecretKey: string;
}

export function trinoCatalogIcebergFileSystemExternalS3ToTerraform(struct?: TrinoCatalogIcebergFileSystemExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_access_key: cdktf.stringToTerraform(struct!.awsAccessKey),
    aws_endpoint: cdktf.stringToTerraform(struct!.awsEndpoint),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_secret_key: cdktf.stringToTerraform(struct!.awsSecretKey),
  }
}


export function trinoCatalogIcebergFileSystemExternalS3ToHclTerraform(struct?: TrinoCatalogIcebergFileSystemExternalS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_access_key: {
      value: cdktf.stringToHclTerraform(struct!.awsAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.awsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.awsSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogIcebergFileSystemExternalS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogIcebergFileSystemExternalS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKey = this._awsAccessKey;
    }
    if (this._awsEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEndpoint = this._awsEndpoint;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretKey = this._awsSecretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogIcebergFileSystemExternalS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAccessKey = undefined;
      this._awsEndpoint = undefined;
      this._awsRegion = undefined;
      this._awsSecretKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAccessKey = value.awsAccessKey;
      this._awsEndpoint = value.awsEndpoint;
      this._awsRegion = value.awsRegion;
      this._awsSecretKey = value.awsSecretKey;
    }
  }

  // aws_access_key - computed: false, optional: false, required: true
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_endpoint - computed: false, optional: false, required: true
  private _awsEndpoint?: string; 
  public get awsEndpoint() {
    return this.getStringAttribute('aws_endpoint');
  }
  public set awsEndpoint(value: string) {
    this._awsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEndpointInput() {
    return this._awsEndpoint;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_secret_key - computed: false, optional: false, required: true
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }
}
export interface TrinoCatalogIcebergFileSystemS3 {
}

export function trinoCatalogIcebergFileSystemS3ToTerraform(struct?: TrinoCatalogIcebergFileSystemS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function trinoCatalogIcebergFileSystemS3ToHclTerraform(struct?: TrinoCatalogIcebergFileSystemS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TrinoCatalogIcebergFileSystemS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogIcebergFileSystemS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogIcebergFileSystemS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface TrinoCatalogIcebergFileSystem {
  /**
  * Describes External S3 compatible file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#external_s3 TrinoCatalog#external_s3}
  */
  readonly externalS3?: TrinoCatalogIcebergFileSystemExternalS3;
  /**
  * Describes YandexCloud native S3 file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#s3 TrinoCatalog#s3}
  */
  readonly s3?: TrinoCatalogIcebergFileSystemS3;
}

export function trinoCatalogIcebergFileSystemToTerraform(struct?: TrinoCatalogIcebergFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_s3: trinoCatalogIcebergFileSystemExternalS3ToTerraform(struct!.externalS3),
    s3: trinoCatalogIcebergFileSystemS3ToTerraform(struct!.s3),
  }
}


export function trinoCatalogIcebergFileSystemToHclTerraform(struct?: TrinoCatalogIcebergFileSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_s3: {
      value: trinoCatalogIcebergFileSystemExternalS3ToHclTerraform(struct!.externalS3),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogIcebergFileSystemExternalS3",
    },
    s3: {
      value: trinoCatalogIcebergFileSystemS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogIcebergFileSystemS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogIcebergFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogIcebergFileSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalS3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalS3 = this._externalS3?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogIcebergFileSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalS3.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalS3.internalValue = value.externalS3;
      this._s3.internalValue = value.s3;
    }
  }

  // external_s3 - computed: false, optional: true, required: false
  private _externalS3 = new TrinoCatalogIcebergFileSystemExternalS3OutputReference(this, "external_s3");
  public get externalS3() {
    return this._externalS3;
  }
  public putExternalS3(value: TrinoCatalogIcebergFileSystemExternalS3) {
    this._externalS3.internalValue = value;
  }
  public resetExternalS3() {
    this._externalS3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalS3Input() {
    return this._externalS3.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new TrinoCatalogIcebergFileSystemS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: TrinoCatalogIcebergFileSystemS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface TrinoCatalogIcebergMetastore {
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#uri TrinoCatalog#uri}
  */
  readonly uri: string;
}

export function trinoCatalogIcebergMetastoreToTerraform(struct?: TrinoCatalogIcebergMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function trinoCatalogIcebergMetastoreToHclTerraform(struct?: TrinoCatalogIcebergMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogIcebergMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogIcebergMetastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogIcebergMetastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface TrinoCatalogIceberg {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * File system configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#file_system TrinoCatalog#file_system}
  */
  readonly fileSystem: TrinoCatalogIcebergFileSystem;
  /**
  * Metastore configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#metastore TrinoCatalog#metastore}
  */
  readonly metastore: TrinoCatalogIcebergMetastore;
}

export function trinoCatalogIcebergToTerraform(struct?: TrinoCatalogIceberg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    file_system: trinoCatalogIcebergFileSystemToTerraform(struct!.fileSystem),
    metastore: trinoCatalogIcebergMetastoreToTerraform(struct!.metastore),
  }
}


export function trinoCatalogIcebergToHclTerraform(struct?: TrinoCatalogIceberg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    file_system: {
      value: trinoCatalogIcebergFileSystemToHclTerraform(struct!.fileSystem),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogIcebergFileSystem",
    },
    metastore: {
      value: trinoCatalogIcebergMetastoreToHclTerraform(struct!.metastore),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogIcebergMetastore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogIcebergOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogIceberg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._fileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystem = this._fileSystem?.internalValue;
    }
    if (this._metastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastore = this._metastore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogIceberg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._fileSystem.internalValue = undefined;
      this._metastore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._fileSystem.internalValue = value.fileSystem;
      this._metastore.internalValue = value.metastore;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // file_system - computed: false, optional: false, required: true
  private _fileSystem = new TrinoCatalogIcebergFileSystemOutputReference(this, "file_system");
  public get fileSystem() {
    return this._fileSystem;
  }
  public putFileSystem(value: TrinoCatalogIcebergFileSystem) {
    this._fileSystem.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemInput() {
    return this._fileSystem.internalValue;
  }

  // metastore - computed: false, optional: false, required: true
  private _metastore = new TrinoCatalogIcebergMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
  public putMetastore(value: TrinoCatalogIcebergMetastore) {
    this._metastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore.internalValue;
  }
}
export interface TrinoCatalogMysqlConnectionManager {
  /**
  * Connection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_id TrinoCatalog#connection_id}
  */
  readonly connectionId: string;
  /**
  * Additional connection properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_properties TrinoCatalog#connection_properties}
  */
  readonly connectionProperties?: { [key: string]: string };
}

export function trinoCatalogMysqlConnectionManagerToTerraform(struct?: TrinoCatalogMysqlConnectionManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.connectionProperties),
  }
}


export function trinoCatalogMysqlConnectionManagerToHclTerraform(struct?: TrinoCatalogMysqlConnectionManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.connectionProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogMysqlConnectionManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogMysqlConnectionManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionProperties = this._connectionProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogMysqlConnectionManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._connectionProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._connectionProperties = value.connectionProperties;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_properties - computed: false, optional: true, required: false
  private _connectionProperties?: { [key: string]: string }; 
  public get connectionProperties() {
    return this.getStringMapAttribute('connection_properties');
  }
  public set connectionProperties(value: { [key: string]: string }) {
    this._connectionProperties = value;
  }
  public resetConnectionProperties() {
    this._connectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties;
  }
}
export interface TrinoCatalogMysqlOnPremise {
  /**
  * Connection to the clickhouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_url TrinoCatalog#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Password of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#password TrinoCatalog#password}
  */
  readonly password: string;
  /**
  * Name of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#user_name TrinoCatalog#user_name}
  */
  readonly userName: string;
}

export function trinoCatalogMysqlOnPremiseToTerraform(struct?: TrinoCatalogMysqlOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function trinoCatalogMysqlOnPremiseToHclTerraform(struct?: TrinoCatalogMysqlOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogMysqlOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogMysqlOnPremise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogMysqlOnPremise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionUrl = undefined;
      this._password = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionUrl = value.connectionUrl;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // connection_url - computed: false, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface TrinoCatalogMysql {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Configuration for MySQL connection manager connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_manager TrinoCatalog#connection_manager}
  */
  readonly connectionManager?: TrinoCatalogMysqlConnectionManager;
  /**
  * Configuration for on-premise connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#on_premise TrinoCatalog#on_premise}
  */
  readonly onPremise?: TrinoCatalogMysqlOnPremise;
}

export function trinoCatalogMysqlToTerraform(struct?: TrinoCatalogMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    connection_manager: trinoCatalogMysqlConnectionManagerToTerraform(struct!.connectionManager),
    on_premise: trinoCatalogMysqlOnPremiseToTerraform(struct!.onPremise),
  }
}


export function trinoCatalogMysqlToHclTerraform(struct?: TrinoCatalogMysql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    connection_manager: {
      value: trinoCatalogMysqlConnectionManagerToHclTerraform(struct!.connectionManager),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogMysqlConnectionManager",
    },
    on_premise: {
      value: trinoCatalogMysqlOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogMysqlOnPremise",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogMysql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._connectionManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionManager = this._connectionManager?.internalValue;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogMysql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._connectionManager.internalValue = undefined;
      this._onPremise.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._connectionManager.internalValue = value.connectionManager;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // connection_manager - computed: false, optional: true, required: false
  private _connectionManager = new TrinoCatalogMysqlConnectionManagerOutputReference(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }
  public putConnectionManager(value: TrinoCatalogMysqlConnectionManager) {
    this._connectionManager.internalValue = value;
  }
  public resetConnectionManager() {
    this._connectionManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionManagerInput() {
    return this._connectionManager.internalValue;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new TrinoCatalogMysqlOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: TrinoCatalogMysqlOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface TrinoCatalogOracleOnPremise {
  /**
  * Connection to the clickhouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_url TrinoCatalog#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Password of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#password TrinoCatalog#password}
  */
  readonly password: string;
  /**
  * Name of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#user_name TrinoCatalog#user_name}
  */
  readonly userName: string;
}

export function trinoCatalogOracleOnPremiseToTerraform(struct?: TrinoCatalogOracleOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function trinoCatalogOracleOnPremiseToHclTerraform(struct?: TrinoCatalogOracleOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogOracleOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogOracleOnPremise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogOracleOnPremise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionUrl = undefined;
      this._password = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionUrl = value.connectionUrl;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // connection_url - computed: false, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface TrinoCatalogOracle {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Configuration for on-premise connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#on_premise TrinoCatalog#on_premise}
  */
  readonly onPremise?: TrinoCatalogOracleOnPremise;
}

export function trinoCatalogOracleToTerraform(struct?: TrinoCatalogOracle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    on_premise: trinoCatalogOracleOnPremiseToTerraform(struct!.onPremise),
  }
}


export function trinoCatalogOracleToHclTerraform(struct?: TrinoCatalogOracle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    on_premise: {
      value: trinoCatalogOracleOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogOracleOnPremise",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogOracleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogOracle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogOracle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._onPremise.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new TrinoCatalogOracleOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: TrinoCatalogOracleOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface TrinoCatalogPostgresqlConnectionManager {
  /**
  * Connection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_id TrinoCatalog#connection_id}
  */
  readonly connectionId: string;
  /**
  * Additional connection properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_properties TrinoCatalog#connection_properties}
  */
  readonly connectionProperties?: { [key: string]: string };
  /**
  * Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#database TrinoCatalog#database}
  */
  readonly database: string;
}

export function trinoCatalogPostgresqlConnectionManagerToTerraform(struct?: TrinoCatalogPostgresqlConnectionManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    connection_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.connectionProperties),
    database: cdktf.stringToTerraform(struct!.database),
  }
}


export function trinoCatalogPostgresqlConnectionManagerToHclTerraform(struct?: TrinoCatalogPostgresqlConnectionManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.connectionProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogPostgresqlConnectionManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogPostgresqlConnectionManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._connectionProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionProperties = this._connectionProperties;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogPostgresqlConnectionManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._connectionProperties = undefined;
      this._database = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._connectionProperties = value.connectionProperties;
      this._database = value.database;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // connection_properties - computed: false, optional: true, required: false
  private _connectionProperties?: { [key: string]: string }; 
  public get connectionProperties() {
    return this.getStringMapAttribute('connection_properties');
  }
  public set connectionProperties(value: { [key: string]: string }) {
    this._connectionProperties = value;
  }
  public resetConnectionProperties() {
    this._connectionProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPropertiesInput() {
    return this._connectionProperties;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }
}
export interface TrinoCatalogPostgresqlOnPremise {
  /**
  * Connection to the clickhouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_url TrinoCatalog#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Password of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#password TrinoCatalog#password}
  */
  readonly password: string;
  /**
  * Name of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#user_name TrinoCatalog#user_name}
  */
  readonly userName: string;
}

export function trinoCatalogPostgresqlOnPremiseToTerraform(struct?: TrinoCatalogPostgresqlOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function trinoCatalogPostgresqlOnPremiseToHclTerraform(struct?: TrinoCatalogPostgresqlOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogPostgresqlOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogPostgresqlOnPremise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogPostgresqlOnPremise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionUrl = undefined;
      this._password = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionUrl = value.connectionUrl;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // connection_url - computed: false, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface TrinoCatalogPostgresql {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Configuration for connection manager connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_manager TrinoCatalog#connection_manager}
  */
  readonly connectionManager?: TrinoCatalogPostgresqlConnectionManager;
  /**
  * Configuration for on-premise connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#on_premise TrinoCatalog#on_premise}
  */
  readonly onPremise?: TrinoCatalogPostgresqlOnPremise;
}

export function trinoCatalogPostgresqlToTerraform(struct?: TrinoCatalogPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    connection_manager: trinoCatalogPostgresqlConnectionManagerToTerraform(struct!.connectionManager),
    on_premise: trinoCatalogPostgresqlOnPremiseToTerraform(struct!.onPremise),
  }
}


export function trinoCatalogPostgresqlToHclTerraform(struct?: TrinoCatalogPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    connection_manager: {
      value: trinoCatalogPostgresqlConnectionManagerToHclTerraform(struct!.connectionManager),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogPostgresqlConnectionManager",
    },
    on_premise: {
      value: trinoCatalogPostgresqlOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogPostgresqlOnPremise",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogPostgresql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._connectionManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionManager = this._connectionManager?.internalValue;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogPostgresql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._connectionManager.internalValue = undefined;
      this._onPremise.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._connectionManager.internalValue = value.connectionManager;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // connection_manager - computed: false, optional: true, required: false
  private _connectionManager = new TrinoCatalogPostgresqlConnectionManagerOutputReference(this, "connection_manager");
  public get connectionManager() {
    return this._connectionManager;
  }
  public putConnectionManager(value: TrinoCatalogPostgresqlConnectionManager) {
    this._connectionManager.internalValue = value;
  }
  public resetConnectionManager() {
    this._connectionManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionManagerInput() {
    return this._connectionManager.internalValue;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new TrinoCatalogPostgresqlOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: TrinoCatalogPostgresqlOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface TrinoCatalogSqlserverOnPremise {
  /**
  * Connection to the clickhouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#connection_url TrinoCatalog#connection_url}
  */
  readonly connectionUrl: string;
  /**
  * Password of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#password TrinoCatalog#password}
  */
  readonly password: string;
  /**
  * Name of the clickhouse user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#user_name TrinoCatalog#user_name}
  */
  readonly userName: string;
}

export function trinoCatalogSqlserverOnPremiseToTerraform(struct?: TrinoCatalogSqlserverOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_url: cdktf.stringToTerraform(struct!.connectionUrl),
    password: cdktf.stringToTerraform(struct!.password),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function trinoCatalogSqlserverOnPremiseToHclTerraform(struct?: TrinoCatalogSqlserverOnPremise | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_url: {
      value: cdktf.stringToHclTerraform(struct!.connectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogSqlserverOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogSqlserverOnPremise | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionUrl = this._connectionUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogSqlserverOnPremise | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionUrl = undefined;
      this._password = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionUrl = value.connectionUrl;
      this._password = value.password;
      this._userName = value.userName;
    }
  }

  // connection_url - computed: false, optional: false, required: true
  private _connectionUrl?: string; 
  public get connectionUrl() {
    return this.getStringAttribute('connection_url');
  }
  public set connectionUrl(value: string) {
    this._connectionUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionUrlInput() {
    return this._connectionUrl;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface TrinoCatalogSqlserver {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Configuration for on-premise connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#on_premise TrinoCatalog#on_premise}
  */
  readonly onPremise?: TrinoCatalogSqlserverOnPremise;
}

export function trinoCatalogSqlserverToTerraform(struct?: TrinoCatalogSqlserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    on_premise: trinoCatalogSqlserverOnPremiseToTerraform(struct!.onPremise),
  }
}


export function trinoCatalogSqlserverToHclTerraform(struct?: TrinoCatalogSqlserver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    on_premise: {
      value: trinoCatalogSqlserverOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "struct",
      storageClassType: "TrinoCatalogSqlserverOnPremise",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogSqlserverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogSqlserver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogSqlserver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._onPremise.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new TrinoCatalogSqlserverOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: TrinoCatalogSqlserverOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface TrinoCatalogTpcds {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
}

export function trinoCatalogTpcdsToTerraform(struct?: TrinoCatalogTpcds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
  }
}


export function trinoCatalogTpcdsToHclTerraform(struct?: TrinoCatalogTpcds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogTpcdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogTpcds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogTpcds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }
}
export interface TrinoCatalogTpch {
  /**
  * Additional properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#additional_properties TrinoCatalog#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
}

export function trinoCatalogTpchToTerraform(struct?: TrinoCatalogTpch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
  }
}


export function trinoCatalogTpchToHclTerraform(struct?: TrinoCatalogTpch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrinoCatalogTpchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogTpch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrinoCatalogTpch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }
}
export interface TrinoCatalogTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#create TrinoCatalog#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#delete TrinoCatalog#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#update TrinoCatalog#update}
  */
  readonly update?: string;
}

export function trinoCatalogTimeoutsToTerraform(struct?: TrinoCatalogTimeouts | cdktf.IResolvable): any {
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


export function trinoCatalogTimeoutsToHclTerraform(struct?: TrinoCatalogTimeouts | cdktf.IResolvable): any {
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

export class TrinoCatalogTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrinoCatalogTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TrinoCatalogTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog yandex_trino_catalog}
*/
export class TrinoCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_trino_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrinoCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrinoCatalog to import
  * @param importFromId The id of the existing TrinoCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrinoCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_trino_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/resources/trino_catalog yandex_trino_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrinoCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: TrinoCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_trino_catalog',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clickhouse.internalValue = config.clickhouse;
    this._clusterId = config.clusterId;
    this._deltaLake.internalValue = config.deltaLake;
    this._description = config.description;
    this._hive.internalValue = config.hive;
    this._hudi.internalValue = config.hudi;
    this._iceberg.internalValue = config.iceberg;
    this._labels = config.labels;
    this._mysql.internalValue = config.mysql;
    this._name = config.name;
    this._oracle.internalValue = config.oracle;
    this._postgresql.internalValue = config.postgresql;
    this._sqlserver.internalValue = config.sqlserver;
    this._tpcds.internalValue = config.tpcds;
    this._tpch.internalValue = config.tpch;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clickhouse - computed: false, optional: true, required: false
  private _clickhouse = new TrinoCatalogClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }
  public putClickhouse(value: TrinoCatalogClickhouse) {
    this._clickhouse.internalValue = value;
  }
  public resetClickhouse() {
    this._clickhouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse.internalValue;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // delta_lake - computed: false, optional: true, required: false
  private _deltaLake = new TrinoCatalogDeltaLakeOutputReference(this, "delta_lake");
  public get deltaLake() {
    return this._deltaLake;
  }
  public putDeltaLake(value: TrinoCatalogDeltaLake) {
    this._deltaLake.internalValue = value;
  }
  public resetDeltaLake() {
    this._deltaLake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaLakeInput() {
    return this._deltaLake.internalValue;
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

  // hive - computed: false, optional: true, required: false
  private _hive = new TrinoCatalogHiveOutputReference(this, "hive");
  public get hive() {
    return this._hive;
  }
  public putHive(value: TrinoCatalogHive) {
    this._hive.internalValue = value;
  }
  public resetHive() {
    this._hive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveInput() {
    return this._hive.internalValue;
  }

  // hudi - computed: false, optional: true, required: false
  private _hudi = new TrinoCatalogHudiOutputReference(this, "hudi");
  public get hudi() {
    return this._hudi;
  }
  public putHudi(value: TrinoCatalogHudi) {
    this._hudi.internalValue = value;
  }
  public resetHudi() {
    this._hudi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hudiInput() {
    return this._hudi.internalValue;
  }

  // iceberg - computed: false, optional: true, required: false
  private _iceberg = new TrinoCatalogIcebergOutputReference(this, "iceberg");
  public get iceberg() {
    return this._iceberg;
  }
  public putIceberg(value: TrinoCatalogIceberg) {
    this._iceberg.internalValue = value;
  }
  public resetIceberg() {
    this._iceberg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergInput() {
    return this._iceberg.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // mysql - computed: false, optional: true, required: false
  private _mysql = new TrinoCatalogMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: TrinoCatalogMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
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

  // oracle - computed: false, optional: true, required: false
  private _oracle = new TrinoCatalogOracleOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: TrinoCatalogOracle) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new TrinoCatalogPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: TrinoCatalogPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // sqlserver - computed: false, optional: true, required: false
  private _sqlserver = new TrinoCatalogSqlserverOutputReference(this, "sqlserver");
  public get sqlserver() {
    return this._sqlserver;
  }
  public putSqlserver(value: TrinoCatalogSqlserver) {
    this._sqlserver.internalValue = value;
  }
  public resetSqlserver() {
    this._sqlserver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverInput() {
    return this._sqlserver.internalValue;
  }

  // tpcds - computed: false, optional: true, required: false
  private _tpcds = new TrinoCatalogTpcdsOutputReference(this, "tpcds");
  public get tpcds() {
    return this._tpcds;
  }
  public putTpcds(value: TrinoCatalogTpcds) {
    this._tpcds.internalValue = value;
  }
  public resetTpcds() {
    this._tpcds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpcdsInput() {
    return this._tpcds.internalValue;
  }

  // tpch - computed: false, optional: true, required: false
  private _tpch = new TrinoCatalogTpchOutputReference(this, "tpch");
  public get tpch() {
    return this._tpch;
  }
  public putTpch(value: TrinoCatalogTpch) {
    this._tpch.internalValue = value;
  }
  public resetTpch() {
    this._tpch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpchInput() {
    return this._tpch.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TrinoCatalogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TrinoCatalogTimeouts) {
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
      clickhouse: trinoCatalogClickhouseToTerraform(this._clickhouse.internalValue),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      delta_lake: trinoCatalogDeltaLakeToTerraform(this._deltaLake.internalValue),
      description: cdktf.stringToTerraform(this._description),
      hive: trinoCatalogHiveToTerraform(this._hive.internalValue),
      hudi: trinoCatalogHudiToTerraform(this._hudi.internalValue),
      iceberg: trinoCatalogIcebergToTerraform(this._iceberg.internalValue),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mysql: trinoCatalogMysqlToTerraform(this._mysql.internalValue),
      name: cdktf.stringToTerraform(this._name),
      oracle: trinoCatalogOracleToTerraform(this._oracle.internalValue),
      postgresql: trinoCatalogPostgresqlToTerraform(this._postgresql.internalValue),
      sqlserver: trinoCatalogSqlserverToTerraform(this._sqlserver.internalValue),
      tpcds: trinoCatalogTpcdsToTerraform(this._tpcds.internalValue),
      tpch: trinoCatalogTpchToTerraform(this._tpch.internalValue),
      timeouts: trinoCatalogTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clickhouse: {
        value: trinoCatalogClickhouseToHclTerraform(this._clickhouse.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogClickhouse",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delta_lake: {
        value: trinoCatalogDeltaLakeToHclTerraform(this._deltaLake.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogDeltaLake",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hive: {
        value: trinoCatalogHiveToHclTerraform(this._hive.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogHive",
      },
      hudi: {
        value: trinoCatalogHudiToHclTerraform(this._hudi.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogHudi",
      },
      iceberg: {
        value: trinoCatalogIcebergToHclTerraform(this._iceberg.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogIceberg",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mysql: {
        value: trinoCatalogMysqlToHclTerraform(this._mysql.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogMysql",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle: {
        value: trinoCatalogOracleToHclTerraform(this._oracle.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogOracle",
      },
      postgresql: {
        value: trinoCatalogPostgresqlToHclTerraform(this._postgresql.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogPostgresql",
      },
      sqlserver: {
        value: trinoCatalogSqlserverToHclTerraform(this._sqlserver.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogSqlserver",
      },
      tpcds: {
        value: trinoCatalogTpcdsToHclTerraform(this._tpcds.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogTpcds",
      },
      tpch: {
        value: trinoCatalogTpchToHclTerraform(this._tpch.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogTpch",
      },
      timeouts: {
        value: trinoCatalogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrinoCatalogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
