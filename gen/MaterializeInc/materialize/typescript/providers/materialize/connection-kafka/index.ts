// https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionKafkaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#comment ConnectionKafka#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#id ConnectionKafka#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#ownership_role ConnectionKafka#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The name of a topic that Kafka sinks can use to track internal consistency metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#progress_topic ConnectionKafka#progress_topic}
  */
  readonly progressTopic?: string;
  /**
  * The replication factor to use when creating the Kafka progress topic (if the Kafka topic does not already exist).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#progress_topic_replication_factor ConnectionKafka#progress_topic_replication_factor}
  */
  readonly progressTopicReplicationFactor?: number;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#region ConnectionKafka#region}
  */
  readonly region?: string;
  /**
  * The SASL mechanism for the Kafka broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#sasl_mechanisms ConnectionKafka#sasl_mechanisms}
  */
  readonly saslMechanisms?: string;
  /**
  * The identifier for the connection schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
  /**
  * The security protocol to use: `PLAINTEXT`, `SSL`, `SASL_PLAINTEXT`, or `SASL_SSL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#security_protocol ConnectionKafka#security_protocol}
  */
  readonly securityProtocol?: string;
  /**
  * If the connection should wait for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#validate ConnectionKafka#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * aws_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#aws_connection ConnectionKafka#aws_connection}
  */
  readonly awsConnection?: ConnectionKafkaAwsConnection;
  /**
  * aws_privatelink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#aws_privatelink ConnectionKafka#aws_privatelink}
  */
  readonly awsPrivatelink?: ConnectionKafkaAwsPrivatelink;
  /**
  * kafka_broker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#kafka_broker ConnectionKafka#kafka_broker}
  */
  readonly kafkaBroker?: ConnectionKafkaKafkaBroker[] | cdktf.IResolvable;
  /**
  * sasl_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#sasl_password ConnectionKafka#sasl_password}
  */
  readonly saslPassword?: ConnectionKafkaSaslPassword;
  /**
  * sasl_username block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#sasl_username ConnectionKafka#sasl_username}
  */
  readonly saslUsername?: ConnectionKafkaSaslUsername;
  /**
  * ssh_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#ssh_tunnel ConnectionKafka#ssh_tunnel}
  */
  readonly sshTunnel?: ConnectionKafkaSshTunnel;
  /**
  * ssl_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#ssl_certificate ConnectionKafka#ssl_certificate}
  */
  readonly sslCertificate?: ConnectionKafkaSslCertificate;
  /**
  * ssl_certificate_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#ssl_certificate_authority ConnectionKafka#ssl_certificate_authority}
  */
  readonly sslCertificateAuthority?: ConnectionKafkaSslCertificateAuthority;
  /**
  * ssl_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#ssl_key ConnectionKafka#ssl_key}
  */
  readonly sslKey?: ConnectionKafkaSslKey;
}
export interface ConnectionKafkaAwsConnection {
  /**
  * The aws_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The aws_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The aws_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaAwsConnectionToTerraform(struct?: ConnectionKafkaAwsConnectionOutputReference | ConnectionKafkaAwsConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaAwsConnectionToHclTerraform(struct?: ConnectionKafkaAwsConnectionOutputReference | ConnectionKafkaAwsConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaAwsConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaAwsConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaAwsConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaAwsPrivatelinkPrivatelinkConnection {
  /**
  * The privatelink_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The privatelink_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The privatelink_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaAwsPrivatelinkPrivatelinkConnectionToTerraform(struct?: ConnectionKafkaAwsPrivatelinkPrivatelinkConnectionOutputReference | ConnectionKafkaAwsPrivatelinkPrivatelinkConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaAwsPrivatelinkPrivatelinkConnectionToHclTerraform(struct?: ConnectionKafkaAwsPrivatelinkPrivatelinkConnectionOutputReference | ConnectionKafkaAwsPrivatelinkPrivatelinkConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaAwsPrivatelinkPrivatelinkConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaAwsPrivatelinkPrivatelinkConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaAwsPrivatelinkPrivatelinkConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaAwsPrivatelink {
  /**
  * The port of the AWS PrivateLink connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#privatelink_connection_port ConnectionKafka#privatelink_connection_port}
  */
  readonly privatelinkConnectionPort: number;
  /**
  * privatelink_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#privatelink_connection ConnectionKafka#privatelink_connection}
  */
  readonly privatelinkConnection: ConnectionKafkaAwsPrivatelinkPrivatelinkConnection;
}

export function connectionKafkaAwsPrivatelinkToTerraform(struct?: ConnectionKafkaAwsPrivatelinkOutputReference | ConnectionKafkaAwsPrivatelink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privatelink_connection_port: cdktf.numberToTerraform(struct!.privatelinkConnectionPort),
    privatelink_connection: connectionKafkaAwsPrivatelinkPrivatelinkConnectionToTerraform(struct!.privatelinkConnection),
  }
}


export function connectionKafkaAwsPrivatelinkToHclTerraform(struct?: ConnectionKafkaAwsPrivatelinkOutputReference | ConnectionKafkaAwsPrivatelink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privatelink_connection_port: {
      value: cdktf.numberToHclTerraform(struct!.privatelinkConnectionPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privatelink_connection: {
      value: connectionKafkaAwsPrivatelinkPrivatelinkConnectionToHclTerraform(struct!.privatelinkConnection),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionKafkaAwsPrivatelinkPrivatelinkConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaAwsPrivatelinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaAwsPrivatelink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privatelinkConnectionPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatelinkConnectionPort = this._privatelinkConnectionPort;
    }
    if (this._privatelinkConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatelinkConnection = this._privatelinkConnection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaAwsPrivatelink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privatelinkConnectionPort = undefined;
      this._privatelinkConnection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privatelinkConnectionPort = value.privatelinkConnectionPort;
      this._privatelinkConnection.internalValue = value.privatelinkConnection;
    }
  }

  // privatelink_connection_port - computed: false, optional: false, required: true
  private _privatelinkConnectionPort?: number; 
  public get privatelinkConnectionPort() {
    return this.getNumberAttribute('privatelink_connection_port');
  }
  public set privatelinkConnectionPort(value: number) {
    this._privatelinkConnectionPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privatelinkConnectionPortInput() {
    return this._privatelinkConnectionPort;
  }

  // privatelink_connection - computed: false, optional: false, required: true
  private _privatelinkConnection = new ConnectionKafkaAwsPrivatelinkPrivatelinkConnectionOutputReference(this, "privatelink_connection");
  public get privatelinkConnection() {
    return this._privatelinkConnection;
  }
  public putPrivatelinkConnection(value: ConnectionKafkaAwsPrivatelinkPrivatelinkConnection) {
    this._privatelinkConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privatelinkConnectionInput() {
    return this._privatelinkConnection.internalValue;
  }
}
export interface ConnectionKafkaKafkaBrokerPrivatelinkConnection {
  /**
  * The privatelink_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The privatelink_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The privatelink_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaKafkaBrokerPrivatelinkConnectionToTerraform(struct?: ConnectionKafkaKafkaBrokerPrivatelinkConnectionOutputReference | ConnectionKafkaKafkaBrokerPrivatelinkConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaKafkaBrokerPrivatelinkConnectionToHclTerraform(struct?: ConnectionKafkaKafkaBrokerPrivatelinkConnectionOutputReference | ConnectionKafkaKafkaBrokerPrivatelinkConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaKafkaBrokerPrivatelinkConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaKafkaBrokerPrivatelinkConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaKafkaBrokerPrivatelinkConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaKafkaBrokerSshTunnel {
  /**
  * The ssh_tunnel database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssh_tunnel name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The ssh_tunnel schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaKafkaBrokerSshTunnelToTerraform(struct?: ConnectionKafkaKafkaBrokerSshTunnelOutputReference | ConnectionKafkaKafkaBrokerSshTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaKafkaBrokerSshTunnelToHclTerraform(struct?: ConnectionKafkaKafkaBrokerSshTunnelOutputReference | ConnectionKafkaKafkaBrokerSshTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaKafkaBrokerSshTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaKafkaBrokerSshTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaKafkaBrokerSshTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaKafkaBroker {
  /**
  * The availability zone of the Kafka broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#availability_zone ConnectionKafka#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The Kafka broker, in the form of `host:port`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#broker ConnectionKafka#broker}
  */
  readonly broker: string;
  /**
  * The port of the target group associated with the Kafka broker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#target_group_port ConnectionKafka#target_group_port}
  */
  readonly targetGroupPort?: number;
  /**
  * privatelink_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#privatelink_connection ConnectionKafka#privatelink_connection}
  */
  readonly privatelinkConnection?: ConnectionKafkaKafkaBrokerPrivatelinkConnection;
  /**
  * ssh_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#ssh_tunnel ConnectionKafka#ssh_tunnel}
  */
  readonly sshTunnel?: ConnectionKafkaKafkaBrokerSshTunnel;
}

export function connectionKafkaKafkaBrokerToTerraform(struct?: ConnectionKafkaKafkaBroker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    broker: cdktf.stringToTerraform(struct!.broker),
    target_group_port: cdktf.numberToTerraform(struct!.targetGroupPort),
    privatelink_connection: connectionKafkaKafkaBrokerPrivatelinkConnectionToTerraform(struct!.privatelinkConnection),
    ssh_tunnel: connectionKafkaKafkaBrokerSshTunnelToTerraform(struct!.sshTunnel),
  }
}


export function connectionKafkaKafkaBrokerToHclTerraform(struct?: ConnectionKafkaKafkaBroker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    broker: {
      value: cdktf.stringToHclTerraform(struct!.broker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_port: {
      value: cdktf.numberToHclTerraform(struct!.targetGroupPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    privatelink_connection: {
      value: connectionKafkaKafkaBrokerPrivatelinkConnectionToHclTerraform(struct!.privatelinkConnection),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionKafkaKafkaBrokerPrivatelinkConnectionList",
    },
    ssh_tunnel: {
      value: connectionKafkaKafkaBrokerSshTunnelToHclTerraform(struct!.sshTunnel),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionKafkaKafkaBrokerSshTunnelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaKafkaBrokerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionKafkaKafkaBroker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._broker !== undefined) {
      hasAnyValues = true;
      internalValueResult.broker = this._broker;
    }
    if (this._targetGroupPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupPort = this._targetGroupPort;
    }
    if (this._privatelinkConnection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatelinkConnection = this._privatelinkConnection?.internalValue;
    }
    if (this._sshTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshTunnel = this._sshTunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaKafkaBroker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityZone = undefined;
      this._broker = undefined;
      this._targetGroupPort = undefined;
      this._privatelinkConnection.internalValue = undefined;
      this._sshTunnel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityZone = value.availabilityZone;
      this._broker = value.broker;
      this._targetGroupPort = value.targetGroupPort;
      this._privatelinkConnection.internalValue = value.privatelinkConnection;
      this._sshTunnel.internalValue = value.sshTunnel;
    }
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // broker - computed: false, optional: false, required: true
  private _broker?: string; 
  public get broker() {
    return this.getStringAttribute('broker');
  }
  public set broker(value: string) {
    this._broker = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerInput() {
    return this._broker;
  }

  // target_group_port - computed: false, optional: true, required: false
  private _targetGroupPort?: number; 
  public get targetGroupPort() {
    return this.getNumberAttribute('target_group_port');
  }
  public set targetGroupPort(value: number) {
    this._targetGroupPort = value;
  }
  public resetTargetGroupPort() {
    this._targetGroupPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupPortInput() {
    return this._targetGroupPort;
  }

  // privatelink_connection - computed: false, optional: true, required: false
  private _privatelinkConnection = new ConnectionKafkaKafkaBrokerPrivatelinkConnectionOutputReference(this, "privatelink_connection");
  public get privatelinkConnection() {
    return this._privatelinkConnection;
  }
  public putPrivatelinkConnection(value: ConnectionKafkaKafkaBrokerPrivatelinkConnection) {
    this._privatelinkConnection.internalValue = value;
  }
  public resetPrivatelinkConnection() {
    this._privatelinkConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatelinkConnectionInput() {
    return this._privatelinkConnection.internalValue;
  }

  // ssh_tunnel - computed: false, optional: true, required: false
  private _sshTunnel = new ConnectionKafkaKafkaBrokerSshTunnelOutputReference(this, "ssh_tunnel");
  public get sshTunnel() {
    return this._sshTunnel;
  }
  public putSshTunnel(value: ConnectionKafkaKafkaBrokerSshTunnel) {
    this._sshTunnel.internalValue = value;
  }
  public resetSshTunnel() {
    this._sshTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunnelInput() {
    return this._sshTunnel.internalValue;
  }
}

export class ConnectionKafkaKafkaBrokerList extends cdktf.ComplexList {
  public internalValue? : ConnectionKafkaKafkaBroker[] | cdktf.IResolvable

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
  public get(index: number): ConnectionKafkaKafkaBrokerOutputReference {
    return new ConnectionKafkaKafkaBrokerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionKafkaSaslPassword {
  /**
  * The sasl_password database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The sasl_password name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The sasl_password schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaSaslPasswordToTerraform(struct?: ConnectionKafkaSaslPasswordOutputReference | ConnectionKafkaSaslPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaSaslPasswordToHclTerraform(struct?: ConnectionKafkaSaslPasswordOutputReference | ConnectionKafkaSaslPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSaslPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSaslPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSaslPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaSaslUsernameSecret {
  /**
  * The sasl_username database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The sasl_username name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The sasl_username schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaSaslUsernameSecretToTerraform(struct?: ConnectionKafkaSaslUsernameSecretOutputReference | ConnectionKafkaSaslUsernameSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaSaslUsernameSecretToHclTerraform(struct?: ConnectionKafkaSaslUsernameSecretOutputReference | ConnectionKafkaSaslUsernameSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSaslUsernameSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSaslUsernameSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSaslUsernameSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaSaslUsername {
  /**
  * The `sasl_username` text value. Conflicts with `secret` within this block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#text ConnectionKafka#text}
  */
  readonly text?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#secret ConnectionKafka#secret}
  */
  readonly secret?: ConnectionKafkaSaslUsernameSecret;
}

export function connectionKafkaSaslUsernameToTerraform(struct?: ConnectionKafkaSaslUsernameOutputReference | ConnectionKafkaSaslUsername): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    secret: connectionKafkaSaslUsernameSecretToTerraform(struct!.secret),
  }
}


export function connectionKafkaSaslUsernameToHclTerraform(struct?: ConnectionKafkaSaslUsernameOutputReference | ConnectionKafkaSaslUsername): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: connectionKafkaSaslUsernameSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionKafkaSaslUsernameSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSaslUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSaslUsername | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSaslUsername | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
      this._secret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
      this._secret.internalValue = value.secret;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ConnectionKafkaSaslUsernameSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ConnectionKafkaSaslUsernameSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface ConnectionKafkaSshTunnel {
  /**
  * The ssh_tunnel database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssh_tunnel name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The ssh_tunnel schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaSshTunnelToTerraform(struct?: ConnectionKafkaSshTunnelOutputReference | ConnectionKafkaSshTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaSshTunnelToHclTerraform(struct?: ConnectionKafkaSshTunnelOutputReference | ConnectionKafkaSshTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSshTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSshTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSshTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaSslCertificateSecret {
  /**
  * The ssl_certificate database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssl_certificate name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The ssl_certificate schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaSslCertificateSecretToTerraform(struct?: ConnectionKafkaSslCertificateSecretOutputReference | ConnectionKafkaSslCertificateSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaSslCertificateSecretToHclTerraform(struct?: ConnectionKafkaSslCertificateSecretOutputReference | ConnectionKafkaSslCertificateSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSslCertificateSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSslCertificateSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSslCertificateSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaSslCertificate {
  /**
  * The `ssl_certificate` text value. Conflicts with `secret` within this block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#text ConnectionKafka#text}
  */
  readonly text?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#secret ConnectionKafka#secret}
  */
  readonly secret?: ConnectionKafkaSslCertificateSecret;
}

export function connectionKafkaSslCertificateToTerraform(struct?: ConnectionKafkaSslCertificateOutputReference | ConnectionKafkaSslCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    secret: connectionKafkaSslCertificateSecretToTerraform(struct!.secret),
  }
}


export function connectionKafkaSslCertificateToHclTerraform(struct?: ConnectionKafkaSslCertificateOutputReference | ConnectionKafkaSslCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: connectionKafkaSslCertificateSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionKafkaSslCertificateSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSslCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSslCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSslCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
      this._secret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
      this._secret.internalValue = value.secret;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ConnectionKafkaSslCertificateSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ConnectionKafkaSslCertificateSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface ConnectionKafkaSslCertificateAuthoritySecret {
  /**
  * The ssl_certificate_authority database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssl_certificate_authority name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The ssl_certificate_authority schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaSslCertificateAuthoritySecretToTerraform(struct?: ConnectionKafkaSslCertificateAuthoritySecretOutputReference | ConnectionKafkaSslCertificateAuthoritySecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaSslCertificateAuthoritySecretToHclTerraform(struct?: ConnectionKafkaSslCertificateAuthoritySecretOutputReference | ConnectionKafkaSslCertificateAuthoritySecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSslCertificateAuthoritySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSslCertificateAuthoritySecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSslCertificateAuthoritySecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ConnectionKafkaSslCertificateAuthority {
  /**
  * The `ssl_certificate_authority` text value. Conflicts with `secret` within this block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#text ConnectionKafka#text}
  */
  readonly text?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#secret ConnectionKafka#secret}
  */
  readonly secret?: ConnectionKafkaSslCertificateAuthoritySecret;
}

export function connectionKafkaSslCertificateAuthorityToTerraform(struct?: ConnectionKafkaSslCertificateAuthorityOutputReference | ConnectionKafkaSslCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    secret: connectionKafkaSslCertificateAuthoritySecretToTerraform(struct!.secret),
  }
}


export function connectionKafkaSslCertificateAuthorityToHclTerraform(struct?: ConnectionKafkaSslCertificateAuthorityOutputReference | ConnectionKafkaSslCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: connectionKafkaSslCertificateAuthoritySecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionKafkaSslCertificateAuthoritySecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSslCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSslCertificateAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSslCertificateAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
      this._secret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
      this._secret.internalValue = value.secret;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new ConnectionKafkaSslCertificateAuthoritySecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ConnectionKafkaSslCertificateAuthoritySecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}
export interface ConnectionKafkaSslKey {
  /**
  * The ssl_key database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#database_name ConnectionKafka#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssl_key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#name ConnectionKafka#name}
  */
  readonly name: string;
  /**
  * The ssl_key schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#schema_name ConnectionKafka#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionKafkaSslKeyToTerraform(struct?: ConnectionKafkaSslKeyOutputReference | ConnectionKafkaSslKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function connectionKafkaSslKeyToHclTerraform(struct?: ConnectionKafkaSslKeyOutputReference | ConnectionKafkaSslKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
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
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionKafkaSslKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionKafkaSslKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionKafkaSslKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka materialize_connection_kafka}
*/
export class ConnectionKafka extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_connection_kafka";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionKafka resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionKafka to import
  * @param importFromId The id of the existing ConnectionKafka that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionKafka to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_connection_kafka", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.2/docs/resources/connection_kafka materialize_connection_kafka} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionKafkaConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionKafkaConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_connection_kafka',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._progressTopic = config.progressTopic;
    this._progressTopicReplicationFactor = config.progressTopicReplicationFactor;
    this._region = config.region;
    this._saslMechanisms = config.saslMechanisms;
    this._schemaName = config.schemaName;
    this._securityProtocol = config.securityProtocol;
    this._validate = config.validate;
    this._awsConnection.internalValue = config.awsConnection;
    this._awsPrivatelink.internalValue = config.awsPrivatelink;
    this._kafkaBroker.internalValue = config.kafkaBroker;
    this._saslPassword.internalValue = config.saslPassword;
    this._saslUsername.internalValue = config.saslUsername;
    this._sshTunnel.internalValue = config.sshTunnel;
    this._sslCertificate.internalValue = config.sslCertificate;
    this._sslCertificateAuthority.internalValue = config.sslCertificateAuthority;
    this._sslKey.internalValue = config.sslKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // ownership_role - computed: true, optional: true, required: false
  private _ownershipRole?: string; 
  public get ownershipRole() {
    return this.getStringAttribute('ownership_role');
  }
  public set ownershipRole(value: string) {
    this._ownershipRole = value;
  }
  public resetOwnershipRole() {
    this._ownershipRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipRoleInput() {
    return this._ownershipRole;
  }

  // progress_topic - computed: false, optional: true, required: false
  private _progressTopic?: string; 
  public get progressTopic() {
    return this.getStringAttribute('progress_topic');
  }
  public set progressTopic(value: string) {
    this._progressTopic = value;
  }
  public resetProgressTopic() {
    this._progressTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressTopicInput() {
    return this._progressTopic;
  }

  // progress_topic_replication_factor - computed: false, optional: true, required: false
  private _progressTopicReplicationFactor?: number; 
  public get progressTopicReplicationFactor() {
    return this.getNumberAttribute('progress_topic_replication_factor');
  }
  public set progressTopicReplicationFactor(value: number) {
    this._progressTopicReplicationFactor = value;
  }
  public resetProgressTopicReplicationFactor() {
    this._progressTopicReplicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressTopicReplicationFactorInput() {
    return this._progressTopicReplicationFactor;
  }

  // qualified_sql_name - computed: true, optional: false, required: false
  public get qualifiedSqlName() {
    return this.getStringAttribute('qualified_sql_name');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sasl_mechanisms - computed: false, optional: true, required: false
  private _saslMechanisms?: string; 
  public get saslMechanisms() {
    return this.getStringAttribute('sasl_mechanisms');
  }
  public set saslMechanisms(value: string) {
    this._saslMechanisms = value;
  }
  public resetSaslMechanisms() {
    this._saslMechanisms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslMechanismsInput() {
    return this._saslMechanisms;
  }

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // security_protocol - computed: false, optional: true, required: false
  private _securityProtocol?: string; 
  public get securityProtocol() {
    return this.getStringAttribute('security_protocol');
  }
  public set securityProtocol(value: string) {
    this._securityProtocol = value;
  }
  public resetSecurityProtocol() {
    this._securityProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolInput() {
    return this._securityProtocol;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // aws_connection - computed: false, optional: true, required: false
  private _awsConnection = new ConnectionKafkaAwsConnectionOutputReference(this, "aws_connection");
  public get awsConnection() {
    return this._awsConnection;
  }
  public putAwsConnection(value: ConnectionKafkaAwsConnection) {
    this._awsConnection.internalValue = value;
  }
  public resetAwsConnection() {
    this._awsConnection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConnectionInput() {
    return this._awsConnection.internalValue;
  }

  // aws_privatelink - computed: false, optional: true, required: false
  private _awsPrivatelink = new ConnectionKafkaAwsPrivatelinkOutputReference(this, "aws_privatelink");
  public get awsPrivatelink() {
    return this._awsPrivatelink;
  }
  public putAwsPrivatelink(value: ConnectionKafkaAwsPrivatelink) {
    this._awsPrivatelink.internalValue = value;
  }
  public resetAwsPrivatelink() {
    this._awsPrivatelink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivatelinkInput() {
    return this._awsPrivatelink.internalValue;
  }

  // kafka_broker - computed: false, optional: true, required: false
  private _kafkaBroker = new ConnectionKafkaKafkaBrokerList(this, "kafka_broker", false);
  public get kafkaBroker() {
    return this._kafkaBroker;
  }
  public putKafkaBroker(value: ConnectionKafkaKafkaBroker[] | cdktf.IResolvable) {
    this._kafkaBroker.internalValue = value;
  }
  public resetKafkaBroker() {
    this._kafkaBroker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaBrokerInput() {
    return this._kafkaBroker.internalValue;
  }

  // sasl_password - computed: false, optional: true, required: false
  private _saslPassword = new ConnectionKafkaSaslPasswordOutputReference(this, "sasl_password");
  public get saslPassword() {
    return this._saslPassword;
  }
  public putSaslPassword(value: ConnectionKafkaSaslPassword) {
    this._saslPassword.internalValue = value;
  }
  public resetSaslPassword() {
    this._saslPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslPasswordInput() {
    return this._saslPassword.internalValue;
  }

  // sasl_username - computed: false, optional: true, required: false
  private _saslUsername = new ConnectionKafkaSaslUsernameOutputReference(this, "sasl_username");
  public get saslUsername() {
    return this._saslUsername;
  }
  public putSaslUsername(value: ConnectionKafkaSaslUsername) {
    this._saslUsername.internalValue = value;
  }
  public resetSaslUsername() {
    this._saslUsername.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslUsernameInput() {
    return this._saslUsername.internalValue;
  }

  // ssh_tunnel - computed: false, optional: true, required: false
  private _sshTunnel = new ConnectionKafkaSshTunnelOutputReference(this, "ssh_tunnel");
  public get sshTunnel() {
    return this._sshTunnel;
  }
  public putSshTunnel(value: ConnectionKafkaSshTunnel) {
    this._sshTunnel.internalValue = value;
  }
  public resetSshTunnel() {
    this._sshTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunnelInput() {
    return this._sshTunnel.internalValue;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate = new ConnectionKafkaSslCertificateOutputReference(this, "ssl_certificate");
  public get sslCertificate() {
    return this._sslCertificate;
  }
  public putSslCertificate(value: ConnectionKafkaSslCertificate) {
    this._sslCertificate.internalValue = value;
  }
  public resetSslCertificate() {
    this._sslCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate.internalValue;
  }

  // ssl_certificate_authority - computed: false, optional: true, required: false
  private _sslCertificateAuthority = new ConnectionKafkaSslCertificateAuthorityOutputReference(this, "ssl_certificate_authority");
  public get sslCertificateAuthority() {
    return this._sslCertificateAuthority;
  }
  public putSslCertificateAuthority(value: ConnectionKafkaSslCertificateAuthority) {
    this._sslCertificateAuthority.internalValue = value;
  }
  public resetSslCertificateAuthority() {
    this._sslCertificateAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateAuthorityInput() {
    return this._sslCertificateAuthority.internalValue;
  }

  // ssl_key - computed: false, optional: true, required: false
  private _sslKey = new ConnectionKafkaSslKeyOutputReference(this, "ssl_key");
  public get sslKey() {
    return this._sslKey;
  }
  public putSslKey(value: ConnectionKafkaSslKey) {
    this._sslKey.internalValue = value;
  }
  public resetSslKey() {
    this._sslKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      progress_topic: cdktf.stringToTerraform(this._progressTopic),
      progress_topic_replication_factor: cdktf.numberToTerraform(this._progressTopicReplicationFactor),
      region: cdktf.stringToTerraform(this._region),
      sasl_mechanisms: cdktf.stringToTerraform(this._saslMechanisms),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      security_protocol: cdktf.stringToTerraform(this._securityProtocol),
      validate: cdktf.booleanToTerraform(this._validate),
      aws_connection: connectionKafkaAwsConnectionToTerraform(this._awsConnection.internalValue),
      aws_privatelink: connectionKafkaAwsPrivatelinkToTerraform(this._awsPrivatelink.internalValue),
      kafka_broker: cdktf.listMapper(connectionKafkaKafkaBrokerToTerraform, true)(this._kafkaBroker.internalValue),
      sasl_password: connectionKafkaSaslPasswordToTerraform(this._saslPassword.internalValue),
      sasl_username: connectionKafkaSaslUsernameToTerraform(this._saslUsername.internalValue),
      ssh_tunnel: connectionKafkaSshTunnelToTerraform(this._sshTunnel.internalValue),
      ssl_certificate: connectionKafkaSslCertificateToTerraform(this._sslCertificate.internalValue),
      ssl_certificate_authority: connectionKafkaSslCertificateAuthorityToTerraform(this._sslCertificateAuthority.internalValue),
      ssl_key: connectionKafkaSslKeyToTerraform(this._sslKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progress_topic: {
        value: cdktf.stringToHclTerraform(this._progressTopic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progress_topic_replication_factor: {
        value: cdktf.numberToHclTerraform(this._progressTopicReplicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_mechanisms: {
        value: cdktf.stringToHclTerraform(this._saslMechanisms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_protocol: {
        value: cdktf.stringToHclTerraform(this._securityProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_connection: {
        value: connectionKafkaAwsConnectionToHclTerraform(this._awsConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaAwsConnectionList",
      },
      aws_privatelink: {
        value: connectionKafkaAwsPrivatelinkToHclTerraform(this._awsPrivatelink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaAwsPrivatelinkList",
      },
      kafka_broker: {
        value: cdktf.listMapperHcl(connectionKafkaKafkaBrokerToHclTerraform, true)(this._kafkaBroker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaKafkaBrokerList",
      },
      sasl_password: {
        value: connectionKafkaSaslPasswordToHclTerraform(this._saslPassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaSaslPasswordList",
      },
      sasl_username: {
        value: connectionKafkaSaslUsernameToHclTerraform(this._saslUsername.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaSaslUsernameList",
      },
      ssh_tunnel: {
        value: connectionKafkaSshTunnelToHclTerraform(this._sshTunnel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaSshTunnelList",
      },
      ssl_certificate: {
        value: connectionKafkaSslCertificateToHclTerraform(this._sslCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaSslCertificateList",
      },
      ssl_certificate_authority: {
        value: connectionKafkaSslCertificateAuthorityToHclTerraform(this._sslCertificateAuthority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaSslCertificateAuthorityList",
      },
      ssl_key: {
        value: connectionKafkaSslKeyToHclTerraform(this._sslKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionKafkaSslKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
