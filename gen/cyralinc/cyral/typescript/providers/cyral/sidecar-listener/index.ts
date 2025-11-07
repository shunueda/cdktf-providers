// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SidecarListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#id SidecarListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of repository types that the listener supports. Currently limited to one repo type from supported repo types:
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#repo_types SidecarListener#repo_types}
  */
  readonly repoTypes: string[];
  /**
  * ID of the sidecar that the listener will be bound to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#sidecar_id SidecarListener#sidecar_id}
  */
  readonly sidecarId: string;
  /**
  * dynamodb_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#dynamodb_settings SidecarListener#dynamodb_settings}
  */
  readonly dynamodbSettings?: SidecarListenerDynamodbSettings;
  /**
  * mysql_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#mysql_settings SidecarListener#mysql_settings}
  */
  readonly mysqlSettings?: SidecarListenerMysqlSettings;
  /**
  * network_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#network_address SidecarListener#network_address}
  */
  readonly networkAddress: SidecarListenerNetworkAddress;
  /**
  * s3_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#s3_settings SidecarListener#s3_settings}
  */
  readonly s3Settings?: SidecarListenerS3Settings;
  /**
  * sqlserver_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#sqlserver_settings SidecarListener#sqlserver_settings}
  */
  readonly sqlserverSettings?: SidecarListenerSqlserverSettings;
}
export interface SidecarListenerDynamodbSettings {
  /**
  * DynamoDB proxy mode. Only relevant for listeners of type `dynamodb` or `dynamodbstreams` and must always be set to `true` for these listener types. Defaults to false. When `true`, instructs the sidecar to operate as an HTTP Proxy server. Client applications need to be explicitly configured to send the traffic through an HTTP proxy server, represented by the Cyral sidecar endpoint + the DynamoDB listening port. It is indicated when connecting from CLI applications, such as `aws cli`, or through the AWS SDK.Setting this value to `false` for the `dynamodb` and `dynamodbstreams` listeners types is currently not allowed and is reserved for future use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#proxy_mode SidecarListener#proxy_mode}
  */
  readonly proxyMode?: boolean | cdktf.IResolvable;
}

export function sidecarListenerDynamodbSettingsToTerraform(struct?: SidecarListenerDynamodbSettingsOutputReference | SidecarListenerDynamodbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_mode: cdktf.booleanToTerraform(struct!.proxyMode),
  }
}


export function sidecarListenerDynamodbSettingsToHclTerraform(struct?: SidecarListenerDynamodbSettingsOutputReference | SidecarListenerDynamodbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_mode: {
      value: cdktf.booleanToHclTerraform(struct!.proxyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SidecarListenerDynamodbSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SidecarListenerDynamodbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyMode = this._proxyMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SidecarListenerDynamodbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyMode = value.proxyMode;
    }
  }

  // proxy_mode - computed: false, optional: true, required: false
  private _proxyMode?: boolean | cdktf.IResolvable; 
  public get proxyMode() {
    return this.getBooleanAttribute('proxy_mode');
  }
  public set proxyMode(value: boolean | cdktf.IResolvable) {
    this._proxyMode = value;
  }
  public resetProxyMode() {
    this._proxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyModeInput() {
    return this._proxyMode;
  }
}
export interface SidecarListenerMysqlSettings {
  /**
  * MySQL character set. Optional (and only relevant) for listeners of types `mysql` and `mariadb`. The sidecar automatically derives this value out of the server version specified in the dbVersion field. This field should only be populated if the database was configured, at deployment time, to use a global character set different from the database default. The char set is extracted from the collation informed. The list of possible collations can be extracted from the column `collation` by running the command `SHOW COLLATION` in the target database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#character_set SidecarListener#character_set}
  */
  readonly characterSet?: string;
  /**
  * MySQL advertised DB version. Required (and only relevant) for listeners of types `mysql` and `mariadb`. This value represents the MySQL/MariaDB server version that the Cyral sidecar will use to present itself to client applications. Different applications, especially JDBC-based ones, may behave differently according to the version of the database they are connecting to. It is crucial that version value specified in this field to be either the same value as the underlying database version, or to be a compatible one. For a compatibility reference, refer to our [public docs](https://cyral.com/docs/sidecars/manage/bind-repo). Example values: `"5.7.3"`, `"8.0.4"` or `"10.2.1"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#db_version SidecarListener#db_version}
  */
  readonly dbVersion?: string;
}

export function sidecarListenerMysqlSettingsToTerraform(struct?: SidecarListenerMysqlSettingsOutputReference | SidecarListenerMysqlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    db_version: cdktf.stringToTerraform(struct!.dbVersion),
  }
}


export function sidecarListenerMysqlSettingsToHclTerraform(struct?: SidecarListenerMysqlSettingsOutputReference | SidecarListenerMysqlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_version: {
      value: cdktf.stringToHclTerraform(struct!.dbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SidecarListenerMysqlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SidecarListenerMysqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._dbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbVersion = this._dbVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SidecarListenerMysqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._characterSet = undefined;
      this._dbVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._characterSet = value.characterSet;
      this._dbVersion = value.dbVersion;
    }
  }

  // character_set - computed: true, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // db_version - computed: false, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }
}
export interface SidecarListenerNetworkAddress {
  /**
  * Host where the sidecar will listen for the given repository, in the case where the sidecar is deployed on a host with multiple network interfaces. If omitted, the sidecar will assume the default "0.0.0.0" and listen on all network interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#host SidecarListener#host}
  */
  readonly host?: string;
  /**
  * Port where the sidecar will listen for the given repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#port SidecarListener#port}
  */
  readonly port: number;
}

export function sidecarListenerNetworkAddressToTerraform(struct?: SidecarListenerNetworkAddressOutputReference | SidecarListenerNetworkAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function sidecarListenerNetworkAddressToHclTerraform(struct?: SidecarListenerNetworkAddressOutputReference | SidecarListenerNetworkAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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

export class SidecarListenerNetworkAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SidecarListenerNetworkAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SidecarListenerNetworkAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
    }
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface SidecarListenerS3Settings {
  /**
  * S3 proxy mode. Only relevant for S3 listeners. Allowed values: [true, false]. Defaults to `false`. When `true`, instructs the sidecar to operate as an HTTP Proxy server. Client applications need to be explicitly configured to send the traffic through an HTTP proxy server, represented by the Cyral sidecar endpoint + the S3 listening port. It is indicated when connecting from CLI applications, such as `aws cli`, or through the AWS SDK. This listener mode is functional for client applications using either AWS native credentials, e.g. Access Key ID/Secret Access Key, or Cyral-Provided access tokens (Single Sign-On connections). When `false`, instructs the sidecar to mimic the actual behavior of AWS S3, meaning client applications will not be aware of a middleware HTTP proxy in the path to S3. This listener mode is only compatible with applications using Cyral-Provided access tokens and is must used when configuring the Cyral S3 Browser. This mode is currently not recommended for any other use besides the Cyral S3 Browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#proxy_mode SidecarListener#proxy_mode}
  */
  readonly proxyMode?: boolean | cdktf.IResolvable;
}

export function sidecarListenerS3SettingsToTerraform(struct?: SidecarListenerS3SettingsOutputReference | SidecarListenerS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_mode: cdktf.booleanToTerraform(struct!.proxyMode),
  }
}


export function sidecarListenerS3SettingsToHclTerraform(struct?: SidecarListenerS3SettingsOutputReference | SidecarListenerS3Settings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_mode: {
      value: cdktf.booleanToHclTerraform(struct!.proxyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SidecarListenerS3SettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SidecarListenerS3Settings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyMode = this._proxyMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SidecarListenerS3Settings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyMode = value.proxyMode;
    }
  }

  // proxy_mode - computed: false, optional: true, required: false
  private _proxyMode?: boolean | cdktf.IResolvable; 
  public get proxyMode() {
    return this.getBooleanAttribute('proxy_mode');
  }
  public set proxyMode(value: boolean | cdktf.IResolvable) {
    this._proxyMode = value;
  }
  public resetProxyMode() {
    this._proxyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyModeInput() {
    return this._proxyMode;
  }
}
export interface SidecarListenerSqlserverSettings {
  /**
  * Advertised SQL Server version. Required (and only relevant) for Listeners of type 'sqlserver' The format of the version should be <major>.<minor>.<build_number> API will validate that the version is a valid version number. Major version is an integer in range 0-255. Minor version is an integer in range 0-255. Build number is an integer in range 0-65535. Example: 16.0.1000 To get the version of the SQL Server runtime, run the following query: SELECT SERVERPROPERTY('productversion') Note: If the query returns a four part version number, only the first three parts should be used. Example: 16.0.1000.6 -> 16.0.1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#version SidecarListener#version}
  */
  readonly version: string;
}

export function sidecarListenerSqlserverSettingsToTerraform(struct?: SidecarListenerSqlserverSettingsOutputReference | SidecarListenerSqlserverSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function sidecarListenerSqlserverSettingsToHclTerraform(struct?: SidecarListenerSqlserverSettingsOutputReference | SidecarListenerSqlserverSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SidecarListenerSqlserverSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SidecarListenerSqlserverSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SidecarListenerSqlserverSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
    }
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener cyral_sidecar_listener}
*/
export class SidecarListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_sidecar_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SidecarListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SidecarListener to import
  * @param importFromId The id of the existing SidecarListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SidecarListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_sidecar_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar_listener cyral_sidecar_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SidecarListenerConfig
  */
  public constructor(scope: Construct, id: string, config: SidecarListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_sidecar_listener',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._repoTypes = config.repoTypes;
    this._sidecarId = config.sidecarId;
    this._dynamodbSettings.internalValue = config.dynamodbSettings;
    this._mysqlSettings.internalValue = config.mysqlSettings;
    this._networkAddress.internalValue = config.networkAddress;
    this._s3Settings.internalValue = config.s3Settings;
    this._sqlserverSettings.internalValue = config.sqlserverSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // repo_types - computed: false, optional: false, required: true
  private _repoTypes?: string[]; 
  public get repoTypes() {
    return this.getListAttribute('repo_types');
  }
  public set repoTypes(value: string[]) {
    this._repoTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypesInput() {
    return this._repoTypes;
  }

  // sidecar_id - computed: false, optional: false, required: true
  private _sidecarId?: string; 
  public get sidecarId() {
    return this.getStringAttribute('sidecar_id');
  }
  public set sidecarId(value: string) {
    this._sidecarId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarIdInput() {
    return this._sidecarId;
  }

  // dynamodb_settings - computed: false, optional: true, required: false
  private _dynamodbSettings = new SidecarListenerDynamodbSettingsOutputReference(this, "dynamodb_settings");
  public get dynamodbSettings() {
    return this._dynamodbSettings;
  }
  public putDynamodbSettings(value: SidecarListenerDynamodbSettings) {
    this._dynamodbSettings.internalValue = value;
  }
  public resetDynamodbSettings() {
    this._dynamodbSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamodbSettingsInput() {
    return this._dynamodbSettings.internalValue;
  }

  // mysql_settings - computed: false, optional: true, required: false
  private _mysqlSettings = new SidecarListenerMysqlSettingsOutputReference(this, "mysql_settings");
  public get mysqlSettings() {
    return this._mysqlSettings;
  }
  public putMysqlSettings(value: SidecarListenerMysqlSettings) {
    this._mysqlSettings.internalValue = value;
  }
  public resetMysqlSettings() {
    this._mysqlSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSettingsInput() {
    return this._mysqlSettings.internalValue;
  }

  // network_address - computed: false, optional: false, required: true
  private _networkAddress = new SidecarListenerNetworkAddressOutputReference(this, "network_address");
  public get networkAddress() {
    return this._networkAddress;
  }
  public putNetworkAddress(value: SidecarListenerNetworkAddress) {
    this._networkAddress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressInput() {
    return this._networkAddress.internalValue;
  }

  // s3_settings - computed: false, optional: true, required: false
  private _s3Settings = new SidecarListenerS3SettingsOutputReference(this, "s3_settings");
  public get s3Settings() {
    return this._s3Settings;
  }
  public putS3Settings(value: SidecarListenerS3Settings) {
    this._s3Settings.internalValue = value;
  }
  public resetS3Settings() {
    this._s3Settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SettingsInput() {
    return this._s3Settings.internalValue;
  }

  // sqlserver_settings - computed: false, optional: true, required: false
  private _sqlserverSettings = new SidecarListenerSqlserverSettingsOutputReference(this, "sqlserver_settings");
  public get sqlserverSettings() {
    return this._sqlserverSettings;
  }
  public putSqlserverSettings(value: SidecarListenerSqlserverSettings) {
    this._sqlserverSettings.internalValue = value;
  }
  public resetSqlserverSettings() {
    this._sqlserverSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverSettingsInput() {
    return this._sqlserverSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      repo_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repoTypes),
      sidecar_id: cdktf.stringToTerraform(this._sidecarId),
      dynamodb_settings: sidecarListenerDynamodbSettingsToTerraform(this._dynamodbSettings.internalValue),
      mysql_settings: sidecarListenerMysqlSettingsToTerraform(this._mysqlSettings.internalValue),
      network_address: sidecarListenerNetworkAddressToTerraform(this._networkAddress.internalValue),
      s3_settings: sidecarListenerS3SettingsToTerraform(this._s3Settings.internalValue),
      sqlserver_settings: sidecarListenerSqlserverSettingsToTerraform(this._sqlserverSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repoTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sidecar_id: {
        value: cdktf.stringToHclTerraform(this._sidecarId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamodb_settings: {
        value: sidecarListenerDynamodbSettingsToHclTerraform(this._dynamodbSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SidecarListenerDynamodbSettingsList",
      },
      mysql_settings: {
        value: sidecarListenerMysqlSettingsToHclTerraform(this._mysqlSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SidecarListenerMysqlSettingsList",
      },
      network_address: {
        value: sidecarListenerNetworkAddressToHclTerraform(this._networkAddress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SidecarListenerNetworkAddressList",
      },
      s3_settings: {
        value: sidecarListenerS3SettingsToHclTerraform(this._s3Settings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SidecarListenerS3SettingsList",
      },
      sqlserver_settings: {
        value: sidecarListenerSqlserverSettingsToHclTerraform(this._sqlserverSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SidecarListenerSqlserverSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
