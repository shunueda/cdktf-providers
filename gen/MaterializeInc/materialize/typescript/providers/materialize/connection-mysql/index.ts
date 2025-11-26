// https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionMysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#comment ConnectionMysql#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#database_name ConnectionMysql#database_name}
  */
  readonly databaseName?: string;
  /**
  * The MySQL database hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#host ConnectionMysql#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#id ConnectionMysql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#name ConnectionMysql#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#ownership_role ConnectionMysql#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The MySQL database port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#port ConnectionMysql#port}
  */
  readonly port?: number;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#region ConnectionMysql#region}
  */
  readonly region?: string;
  /**
  * The identifier for the connection schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#schema_name ConnectionMysql#schema_name}
  */
  readonly schemaName?: string;
  /**
  * The SSL mode for the MySQL database. Allowed values are disabled, required, verify-ca, verify-identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#ssl_mode ConnectionMysql#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * If the connection should wait for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#validate ConnectionMysql#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * aws_privatelink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#aws_privatelink ConnectionMysql#aws_privatelink}
  */
  readonly awsPrivatelink?: ConnectionMysqlAwsPrivatelink;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#password ConnectionMysql#password}
  */
  readonly password?: ConnectionMysqlPassword;
  /**
  * ssh_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#ssh_tunnel ConnectionMysql#ssh_tunnel}
  */
  readonly sshTunnel?: ConnectionMysqlSshTunnel;
  /**
  * ssl_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#ssl_certificate ConnectionMysql#ssl_certificate}
  */
  readonly sslCertificate?: ConnectionMysqlSslCertificate;
  /**
  * ssl_certificate_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#ssl_certificate_authority ConnectionMysql#ssl_certificate_authority}
  */
  readonly sslCertificateAuthority?: ConnectionMysqlSslCertificateAuthority;
  /**
  * ssl_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#ssl_key ConnectionMysql#ssl_key}
  */
  readonly sslKey?: ConnectionMysqlSslKey;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#user ConnectionMysql#user}
  */
  readonly user: ConnectionMysqlUser;
}
export interface ConnectionMysqlAwsPrivatelink {
  /**
  * The aws_privatelink database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#database_name ConnectionMysql#database_name}
  */
  readonly databaseName?: string;
  /**
  * The aws_privatelink name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#name ConnectionMysql#name}
  */
  readonly name: string;
  /**
  * The aws_privatelink schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#schema_name ConnectionMysql#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionMysqlAwsPrivatelinkToTerraform(struct?: ConnectionMysqlAwsPrivatelinkOutputReference | ConnectionMysqlAwsPrivatelink): any {
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


export function connectionMysqlAwsPrivatelinkToHclTerraform(struct?: ConnectionMysqlAwsPrivatelinkOutputReference | ConnectionMysqlAwsPrivatelink): any {
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

export class ConnectionMysqlAwsPrivatelinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlAwsPrivatelink | undefined {
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

  public set internalValue(value: ConnectionMysqlAwsPrivatelink | undefined) {
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
export interface ConnectionMysqlPassword {
  /**
  * The password database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#database_name ConnectionMysql#database_name}
  */
  readonly databaseName?: string;
  /**
  * The password name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#name ConnectionMysql#name}
  */
  readonly name: string;
  /**
  * The password schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#schema_name ConnectionMysql#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionMysqlPasswordToTerraform(struct?: ConnectionMysqlPasswordOutputReference | ConnectionMysqlPassword): any {
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


export function connectionMysqlPasswordToHclTerraform(struct?: ConnectionMysqlPasswordOutputReference | ConnectionMysqlPassword): any {
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

export class ConnectionMysqlPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlPassword | undefined {
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

  public set internalValue(value: ConnectionMysqlPassword | undefined) {
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
export interface ConnectionMysqlSshTunnel {
  /**
  * The ssh_tunnel database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#database_name ConnectionMysql#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssh_tunnel name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#name ConnectionMysql#name}
  */
  readonly name: string;
  /**
  * The ssh_tunnel schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#schema_name ConnectionMysql#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionMysqlSshTunnelToTerraform(struct?: ConnectionMysqlSshTunnelOutputReference | ConnectionMysqlSshTunnel): any {
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


export function connectionMysqlSshTunnelToHclTerraform(struct?: ConnectionMysqlSshTunnelOutputReference | ConnectionMysqlSshTunnel): any {
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

export class ConnectionMysqlSshTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlSshTunnel | undefined {
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

  public set internalValue(value: ConnectionMysqlSshTunnel | undefined) {
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
export interface ConnectionMysqlSslCertificateSecret {
  /**
  * The ssl_certificate database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#database_name ConnectionMysql#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssl_certificate name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#name ConnectionMysql#name}
  */
  readonly name: string;
  /**
  * The ssl_certificate schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#schema_name ConnectionMysql#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionMysqlSslCertificateSecretToTerraform(struct?: ConnectionMysqlSslCertificateSecretOutputReference | ConnectionMysqlSslCertificateSecret): any {
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


export function connectionMysqlSslCertificateSecretToHclTerraform(struct?: ConnectionMysqlSslCertificateSecretOutputReference | ConnectionMysqlSslCertificateSecret): any {
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

export class ConnectionMysqlSslCertificateSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlSslCertificateSecret | undefined {
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

  public set internalValue(value: ConnectionMysqlSslCertificateSecret | undefined) {
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
export interface ConnectionMysqlSslCertificate {
  /**
  * The `ssl_certificate` text value. Conflicts with `secret` within this block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#text ConnectionMysql#text}
  */
  readonly text?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#secret ConnectionMysql#secret}
  */
  readonly secret?: ConnectionMysqlSslCertificateSecret;
}

export function connectionMysqlSslCertificateToTerraform(struct?: ConnectionMysqlSslCertificateOutputReference | ConnectionMysqlSslCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    secret: connectionMysqlSslCertificateSecretToTerraform(struct!.secret),
  }
}


export function connectionMysqlSslCertificateToHclTerraform(struct?: ConnectionMysqlSslCertificateOutputReference | ConnectionMysqlSslCertificate): any {
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
      value: connectionMysqlSslCertificateSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionMysqlSslCertificateSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionMysqlSslCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlSslCertificate | undefined {
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

  public set internalValue(value: ConnectionMysqlSslCertificate | undefined) {
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
  private _secret = new ConnectionMysqlSslCertificateSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ConnectionMysqlSslCertificateSecret) {
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
export interface ConnectionMysqlSslCertificateAuthoritySecret {
  /**
  * The ssl_certificate_authority database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#database_name ConnectionMysql#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssl_certificate_authority name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#name ConnectionMysql#name}
  */
  readonly name: string;
  /**
  * The ssl_certificate_authority schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#schema_name ConnectionMysql#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionMysqlSslCertificateAuthoritySecretToTerraform(struct?: ConnectionMysqlSslCertificateAuthoritySecretOutputReference | ConnectionMysqlSslCertificateAuthoritySecret): any {
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


export function connectionMysqlSslCertificateAuthoritySecretToHclTerraform(struct?: ConnectionMysqlSslCertificateAuthoritySecretOutputReference | ConnectionMysqlSslCertificateAuthoritySecret): any {
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

export class ConnectionMysqlSslCertificateAuthoritySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlSslCertificateAuthoritySecret | undefined {
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

  public set internalValue(value: ConnectionMysqlSslCertificateAuthoritySecret | undefined) {
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
export interface ConnectionMysqlSslCertificateAuthority {
  /**
  * The `ssl_certificate_authority` text value. Conflicts with `secret` within this block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#text ConnectionMysql#text}
  */
  readonly text?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#secret ConnectionMysql#secret}
  */
  readonly secret?: ConnectionMysqlSslCertificateAuthoritySecret;
}

export function connectionMysqlSslCertificateAuthorityToTerraform(struct?: ConnectionMysqlSslCertificateAuthorityOutputReference | ConnectionMysqlSslCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    secret: connectionMysqlSslCertificateAuthoritySecretToTerraform(struct!.secret),
  }
}


export function connectionMysqlSslCertificateAuthorityToHclTerraform(struct?: ConnectionMysqlSslCertificateAuthorityOutputReference | ConnectionMysqlSslCertificateAuthority): any {
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
      value: connectionMysqlSslCertificateAuthoritySecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionMysqlSslCertificateAuthoritySecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionMysqlSslCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlSslCertificateAuthority | undefined {
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

  public set internalValue(value: ConnectionMysqlSslCertificateAuthority | undefined) {
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
  private _secret = new ConnectionMysqlSslCertificateAuthoritySecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ConnectionMysqlSslCertificateAuthoritySecret) {
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
export interface ConnectionMysqlSslKey {
  /**
  * The ssl_key database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#database_name ConnectionMysql#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssl_key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#name ConnectionMysql#name}
  */
  readonly name: string;
  /**
  * The ssl_key schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#schema_name ConnectionMysql#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionMysqlSslKeyToTerraform(struct?: ConnectionMysqlSslKeyOutputReference | ConnectionMysqlSslKey): any {
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


export function connectionMysqlSslKeyToHclTerraform(struct?: ConnectionMysqlSslKeyOutputReference | ConnectionMysqlSslKey): any {
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

export class ConnectionMysqlSslKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlSslKey | undefined {
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

  public set internalValue(value: ConnectionMysqlSslKey | undefined) {
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
export interface ConnectionMysqlUserSecret {
  /**
  * The user database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#database_name ConnectionMysql#database_name}
  */
  readonly databaseName?: string;
  /**
  * The user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#name ConnectionMysql#name}
  */
  readonly name: string;
  /**
  * The user schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#schema_name ConnectionMysql#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionMysqlUserSecretToTerraform(struct?: ConnectionMysqlUserSecretOutputReference | ConnectionMysqlUserSecret): any {
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


export function connectionMysqlUserSecretToHclTerraform(struct?: ConnectionMysqlUserSecretOutputReference | ConnectionMysqlUserSecret): any {
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

export class ConnectionMysqlUserSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlUserSecret | undefined {
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

  public set internalValue(value: ConnectionMysqlUserSecret | undefined) {
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
export interface ConnectionMysqlUser {
  /**
  * The `user` text value. Conflicts with `secret` within this block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#text ConnectionMysql#text}
  */
  readonly text?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#secret ConnectionMysql#secret}
  */
  readonly secret?: ConnectionMysqlUserSecret;
}

export function connectionMysqlUserToTerraform(struct?: ConnectionMysqlUserOutputReference | ConnectionMysqlUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    secret: connectionMysqlUserSecretToTerraform(struct!.secret),
  }
}


export function connectionMysqlUserToHclTerraform(struct?: ConnectionMysqlUserOutputReference | ConnectionMysqlUser): any {
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
      value: connectionMysqlUserSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionMysqlUserSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionMysqlUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionMysqlUser | undefined {
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

  public set internalValue(value: ConnectionMysqlUser | undefined) {
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
  private _secret = new ConnectionMysqlUserSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ConnectionMysqlUserSecret) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql materialize_connection_mysql}
*/
export class ConnectionMysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_connection_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionMysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionMysql to import
  * @param importFromId The id of the existing ConnectionMysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionMysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_connection_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_mysql materialize_connection_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionMysqlConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionMysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_connection_mysql',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.5',
        providerVersionConstraint: '0.9.5'
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
    this._host = config.host;
    this._id = config.id;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._port = config.port;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._sslMode = config.sslMode;
    this._validate = config.validate;
    this._awsPrivatelink.internalValue = config.awsPrivatelink;
    this._password.internalValue = config.password;
    this._sshTunnel.internalValue = config.sshTunnel;
    this._sslCertificate.internalValue = config.sslCertificate;
    this._sslCertificateAuthority.internalValue = config.sslCertificateAuthority;
    this._sslKey.internalValue = config.sslKey;
    this._user.internalValue = config.user;
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // ssl_mode - computed: false, optional: true, required: false
  private _sslMode?: string; 
  public get sslMode() {
    return this.getStringAttribute('ssl_mode');
  }
  public set sslMode(value: string) {
    this._sslMode = value;
  }
  public resetSslMode() {
    this._sslMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslModeInput() {
    return this._sslMode;
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

  // aws_privatelink - computed: false, optional: true, required: false
  private _awsPrivatelink = new ConnectionMysqlAwsPrivatelinkOutputReference(this, "aws_privatelink");
  public get awsPrivatelink() {
    return this._awsPrivatelink;
  }
  public putAwsPrivatelink(value: ConnectionMysqlAwsPrivatelink) {
    this._awsPrivatelink.internalValue = value;
  }
  public resetAwsPrivatelink() {
    this._awsPrivatelink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivatelinkInput() {
    return this._awsPrivatelink.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new ConnectionMysqlPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionMysqlPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // ssh_tunnel - computed: false, optional: true, required: false
  private _sshTunnel = new ConnectionMysqlSshTunnelOutputReference(this, "ssh_tunnel");
  public get sshTunnel() {
    return this._sshTunnel;
  }
  public putSshTunnel(value: ConnectionMysqlSshTunnel) {
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
  private _sslCertificate = new ConnectionMysqlSslCertificateOutputReference(this, "ssl_certificate");
  public get sslCertificate() {
    return this._sslCertificate;
  }
  public putSslCertificate(value: ConnectionMysqlSslCertificate) {
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
  private _sslCertificateAuthority = new ConnectionMysqlSslCertificateAuthorityOutputReference(this, "ssl_certificate_authority");
  public get sslCertificateAuthority() {
    return this._sslCertificateAuthority;
  }
  public putSslCertificateAuthority(value: ConnectionMysqlSslCertificateAuthority) {
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
  private _sslKey = new ConnectionMysqlSslKeyOutputReference(this, "ssl_key");
  public get sslKey() {
    return this._sslKey;
  }
  public putSslKey(value: ConnectionMysqlSslKey) {
    this._sslKey.internalValue = value;
  }
  public resetSslKey() {
    this._sslKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user = new ConnectionMysqlUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: ConnectionMysqlUser) {
    this._user.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      port: cdktf.numberToTerraform(this._port),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      ssl_mode: cdktf.stringToTerraform(this._sslMode),
      validate: cdktf.booleanToTerraform(this._validate),
      aws_privatelink: connectionMysqlAwsPrivatelinkToTerraform(this._awsPrivatelink.internalValue),
      password: connectionMysqlPasswordToTerraform(this._password.internalValue),
      ssh_tunnel: connectionMysqlSshTunnelToTerraform(this._sshTunnel.internalValue),
      ssl_certificate: connectionMysqlSslCertificateToTerraform(this._sslCertificate.internalValue),
      ssl_certificate_authority: connectionMysqlSslCertificateAuthorityToTerraform(this._sslCertificateAuthority.internalValue),
      ssl_key: connectionMysqlSslKeyToTerraform(this._sslKey.internalValue),
      user: connectionMysqlUserToTerraform(this._user.internalValue),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
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
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_mode: {
        value: cdktf.stringToHclTerraform(this._sslMode),
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
      aws_privatelink: {
        value: connectionMysqlAwsPrivatelinkToHclTerraform(this._awsPrivatelink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionMysqlAwsPrivatelinkList",
      },
      password: {
        value: connectionMysqlPasswordToHclTerraform(this._password.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionMysqlPasswordList",
      },
      ssh_tunnel: {
        value: connectionMysqlSshTunnelToHclTerraform(this._sshTunnel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionMysqlSshTunnelList",
      },
      ssl_certificate: {
        value: connectionMysqlSslCertificateToHclTerraform(this._sslCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionMysqlSslCertificateList",
      },
      ssl_certificate_authority: {
        value: connectionMysqlSslCertificateAuthorityToHclTerraform(this._sslCertificateAuthority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionMysqlSslCertificateAuthorityList",
      },
      ssl_key: {
        value: connectionMysqlSslKeyToHclTerraform(this._sslKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionMysqlSslKeyList",
      },
      user: {
        value: connectionMysqlUserToHclTerraform(this._user.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionMysqlUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
