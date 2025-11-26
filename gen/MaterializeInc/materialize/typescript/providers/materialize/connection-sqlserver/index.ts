// https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionSqlserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#comment ConnectionSqlserver#comment}
  */
  readonly comment?: string;
  /**
  * The target SQL Server database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#database ConnectionSqlserver#database}
  */
  readonly database: string;
  /**
  * The identifier for the connection database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#database_name ConnectionSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The SQL Server database hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#host ConnectionSqlserver#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#id ConnectionSqlserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#name ConnectionSqlserver#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#ownership_role ConnectionSqlserver#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The SQL Server database port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#port ConnectionSqlserver#port}
  */
  readonly port?: number;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#region ConnectionSqlserver#region}
  */
  readonly region?: string;
  /**
  * The identifier for the connection schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#schema_name ConnectionSqlserver#schema_name}
  */
  readonly schemaName?: string;
  /**
  * The SSL mode for the SQL Server database. Allowed values are disabled, required, verify, verify-ca.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#ssl_mode ConnectionSqlserver#ssl_mode}
  */
  readonly sslMode?: string;
  /**
  * If the connection should wait for validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#validate ConnectionSqlserver#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * aws_privatelink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#aws_privatelink ConnectionSqlserver#aws_privatelink}
  */
  readonly awsPrivatelink?: ConnectionSqlserverAwsPrivatelink;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#password ConnectionSqlserver#password}
  */
  readonly password?: ConnectionSqlserverPassword;
  /**
  * ssh_tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#ssh_tunnel ConnectionSqlserver#ssh_tunnel}
  */
  readonly sshTunnel?: ConnectionSqlserverSshTunnel;
  /**
  * ssl_certificate_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#ssl_certificate_authority ConnectionSqlserver#ssl_certificate_authority}
  */
  readonly sslCertificateAuthority?: ConnectionSqlserverSslCertificateAuthority;
  /**
  * user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#user ConnectionSqlserver#user}
  */
  readonly user: ConnectionSqlserverUser;
}
export interface ConnectionSqlserverAwsPrivatelink {
  /**
  * The aws_privatelink database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#database_name ConnectionSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The aws_privatelink name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#name ConnectionSqlserver#name}
  */
  readonly name: string;
  /**
  * The aws_privatelink schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#schema_name ConnectionSqlserver#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionSqlserverAwsPrivatelinkToTerraform(struct?: ConnectionSqlserverAwsPrivatelinkOutputReference | ConnectionSqlserverAwsPrivatelink): any {
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


export function connectionSqlserverAwsPrivatelinkToHclTerraform(struct?: ConnectionSqlserverAwsPrivatelinkOutputReference | ConnectionSqlserverAwsPrivatelink): any {
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

export class ConnectionSqlserverAwsPrivatelinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSqlserverAwsPrivatelink | undefined {
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

  public set internalValue(value: ConnectionSqlserverAwsPrivatelink | undefined) {
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
export interface ConnectionSqlserverPassword {
  /**
  * The password database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#database_name ConnectionSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The password name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#name ConnectionSqlserver#name}
  */
  readonly name: string;
  /**
  * The password schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#schema_name ConnectionSqlserver#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionSqlserverPasswordToTerraform(struct?: ConnectionSqlserverPasswordOutputReference | ConnectionSqlserverPassword): any {
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


export function connectionSqlserverPasswordToHclTerraform(struct?: ConnectionSqlserverPasswordOutputReference | ConnectionSqlserverPassword): any {
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

export class ConnectionSqlserverPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSqlserverPassword | undefined {
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

  public set internalValue(value: ConnectionSqlserverPassword | undefined) {
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
export interface ConnectionSqlserverSshTunnel {
  /**
  * The ssh_tunnel database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#database_name ConnectionSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssh_tunnel name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#name ConnectionSqlserver#name}
  */
  readonly name: string;
  /**
  * The ssh_tunnel schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#schema_name ConnectionSqlserver#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionSqlserverSshTunnelToTerraform(struct?: ConnectionSqlserverSshTunnelOutputReference | ConnectionSqlserverSshTunnel): any {
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


export function connectionSqlserverSshTunnelToHclTerraform(struct?: ConnectionSqlserverSshTunnelOutputReference | ConnectionSqlserverSshTunnel): any {
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

export class ConnectionSqlserverSshTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSqlserverSshTunnel | undefined {
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

  public set internalValue(value: ConnectionSqlserverSshTunnel | undefined) {
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
export interface ConnectionSqlserverSslCertificateAuthoritySecret {
  /**
  * The ssl_certificate_authority database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#database_name ConnectionSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The ssl_certificate_authority name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#name ConnectionSqlserver#name}
  */
  readonly name: string;
  /**
  * The ssl_certificate_authority schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#schema_name ConnectionSqlserver#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionSqlserverSslCertificateAuthoritySecretToTerraform(struct?: ConnectionSqlserverSslCertificateAuthoritySecretOutputReference | ConnectionSqlserverSslCertificateAuthoritySecret): any {
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


export function connectionSqlserverSslCertificateAuthoritySecretToHclTerraform(struct?: ConnectionSqlserverSslCertificateAuthoritySecretOutputReference | ConnectionSqlserverSslCertificateAuthoritySecret): any {
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

export class ConnectionSqlserverSslCertificateAuthoritySecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSqlserverSslCertificateAuthoritySecret | undefined {
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

  public set internalValue(value: ConnectionSqlserverSslCertificateAuthoritySecret | undefined) {
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
export interface ConnectionSqlserverSslCertificateAuthority {
  /**
  * The `ssl_certificate_authority` text value. Conflicts with `secret` within this block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#text ConnectionSqlserver#text}
  */
  readonly text?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#secret ConnectionSqlserver#secret}
  */
  readonly secret?: ConnectionSqlserverSslCertificateAuthoritySecret;
}

export function connectionSqlserverSslCertificateAuthorityToTerraform(struct?: ConnectionSqlserverSslCertificateAuthorityOutputReference | ConnectionSqlserverSslCertificateAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    secret: connectionSqlserverSslCertificateAuthoritySecretToTerraform(struct!.secret),
  }
}


export function connectionSqlserverSslCertificateAuthorityToHclTerraform(struct?: ConnectionSqlserverSslCertificateAuthorityOutputReference | ConnectionSqlserverSslCertificateAuthority): any {
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
      value: connectionSqlserverSslCertificateAuthoritySecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionSqlserverSslCertificateAuthoritySecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionSqlserverSslCertificateAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSqlserverSslCertificateAuthority | undefined {
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

  public set internalValue(value: ConnectionSqlserverSslCertificateAuthority | undefined) {
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
  private _secret = new ConnectionSqlserverSslCertificateAuthoritySecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ConnectionSqlserverSslCertificateAuthoritySecret) {
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
export interface ConnectionSqlserverUserSecret {
  /**
  * The user database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#database_name ConnectionSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#name ConnectionSqlserver#name}
  */
  readonly name: string;
  /**
  * The user schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#schema_name ConnectionSqlserver#schema_name}
  */
  readonly schemaName?: string;
}

export function connectionSqlserverUserSecretToTerraform(struct?: ConnectionSqlserverUserSecretOutputReference | ConnectionSqlserverUserSecret): any {
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


export function connectionSqlserverUserSecretToHclTerraform(struct?: ConnectionSqlserverUserSecretOutputReference | ConnectionSqlserverUserSecret): any {
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

export class ConnectionSqlserverUserSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSqlserverUserSecret | undefined {
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

  public set internalValue(value: ConnectionSqlserverUserSecret | undefined) {
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
export interface ConnectionSqlserverUser {
  /**
  * The `user` text value. Conflicts with `secret` within this block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#text ConnectionSqlserver#text}
  */
  readonly text?: string;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#secret ConnectionSqlserver#secret}
  */
  readonly secret?: ConnectionSqlserverUserSecret;
}

export function connectionSqlserverUserToTerraform(struct?: ConnectionSqlserverUserOutputReference | ConnectionSqlserverUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
    secret: connectionSqlserverUserSecretToTerraform(struct!.secret),
  }
}


export function connectionSqlserverUserToHclTerraform(struct?: ConnectionSqlserverUserOutputReference | ConnectionSqlserverUser): any {
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
      value: connectionSqlserverUserSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionSqlserverUserSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionSqlserverUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionSqlserverUser | undefined {
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

  public set internalValue(value: ConnectionSqlserverUser | undefined) {
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
  private _secret = new ConnectionSqlserverUserSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: ConnectionSqlserverUserSecret) {
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
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver materialize_connection_sqlserver}
*/
export class ConnectionSqlserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_connection_sqlserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectionSqlserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectionSqlserver to import
  * @param importFromId The id of the existing ConnectionSqlserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectionSqlserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_connection_sqlserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.5/docs/resources/connection_sqlserver materialize_connection_sqlserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionSqlserverConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionSqlserverConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_connection_sqlserver',
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
    this._database = config.database;
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
    this._sslCertificateAuthority.internalValue = config.sslCertificateAuthority;
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
  private _awsPrivatelink = new ConnectionSqlserverAwsPrivatelinkOutputReference(this, "aws_privatelink");
  public get awsPrivatelink() {
    return this._awsPrivatelink;
  }
  public putAwsPrivatelink(value: ConnectionSqlserverAwsPrivatelink) {
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
  private _password = new ConnectionSqlserverPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ConnectionSqlserverPassword) {
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
  private _sshTunnel = new ConnectionSqlserverSshTunnelOutputReference(this, "ssh_tunnel");
  public get sshTunnel() {
    return this._sshTunnel;
  }
  public putSshTunnel(value: ConnectionSqlserverSshTunnel) {
    this._sshTunnel.internalValue = value;
  }
  public resetSshTunnel() {
    this._sshTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshTunnelInput() {
    return this._sshTunnel.internalValue;
  }

  // ssl_certificate_authority - computed: false, optional: true, required: false
  private _sslCertificateAuthority = new ConnectionSqlserverSslCertificateAuthorityOutputReference(this, "ssl_certificate_authority");
  public get sslCertificateAuthority() {
    return this._sslCertificateAuthority;
  }
  public putSslCertificateAuthority(value: ConnectionSqlserverSslCertificateAuthority) {
    this._sslCertificateAuthority.internalValue = value;
  }
  public resetSslCertificateAuthority() {
    this._sslCertificateAuthority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateAuthorityInput() {
    return this._sslCertificateAuthority.internalValue;
  }

  // user - computed: false, optional: false, required: true
  private _user = new ConnectionSqlserverUserOutputReference(this, "user");
  public get user() {
    return this._user;
  }
  public putUser(value: ConnectionSqlserverUser) {
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
      database: cdktf.stringToTerraform(this._database),
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
      aws_privatelink: connectionSqlserverAwsPrivatelinkToTerraform(this._awsPrivatelink.internalValue),
      password: connectionSqlserverPasswordToTerraform(this._password.internalValue),
      ssh_tunnel: connectionSqlserverSshTunnelToTerraform(this._sshTunnel.internalValue),
      ssl_certificate_authority: connectionSqlserverSslCertificateAuthorityToTerraform(this._sslCertificateAuthority.internalValue),
      user: connectionSqlserverUserToTerraform(this._user.internalValue),
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
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
        value: connectionSqlserverAwsPrivatelinkToHclTerraform(this._awsPrivatelink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSqlserverAwsPrivatelinkList",
      },
      password: {
        value: connectionSqlserverPasswordToHclTerraform(this._password.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSqlserverPasswordList",
      },
      ssh_tunnel: {
        value: connectionSqlserverSshTunnelToHclTerraform(this._sshTunnel.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSqlserverSshTunnelList",
      },
      ssl_certificate_authority: {
        value: connectionSqlserverSslCertificateAuthorityToHclTerraform(this._sslCertificateAuthority.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSqlserverSslCertificateAuthorityList",
      },
      user: {
        value: connectionSqlserverUserToHclTerraform(this._user.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionSqlserverUserList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
