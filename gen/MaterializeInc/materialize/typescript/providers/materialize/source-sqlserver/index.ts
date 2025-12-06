// https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceSqlserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster to maintain this source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#cluster_name SourceSqlserver#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#comment SourceSqlserver#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the source database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#database_name SourceSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * Exclude specific columns when reading data from SQL Server. Can only be updated in place when also updating a corresponding `table` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#exclude_columns SourceSqlserver#exclude_columns}
  */
  readonly excludeColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#id SourceSqlserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#name SourceSqlserver#name}
  */
  readonly name: string;
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#ownership_role SourceSqlserver#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#region SourceSqlserver#region}
  */
  readonly region?: string;
  /**
  * The identifier for the source schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#schema_name SourceSqlserver#schema_name}
  */
  readonly schemaName?: string;
  /**
  * Decode data as text for specific columns that contain SQL Server types that are unsupported in Materialize. Can only be updated in place when also updating a corresponding `table` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#text_columns SourceSqlserver#text_columns}
  */
  readonly textColumns?: string[];
  /**
  * aws_privatelink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#aws_privatelink SourceSqlserver#aws_privatelink}
  */
  readonly awsPrivatelink?: SourceSqlserverAwsPrivatelink;
  /**
  * expose_progress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#expose_progress SourceSqlserver#expose_progress}
  */
  readonly exposeProgress?: SourceSqlserverExposeProgress;
  /**
  * sqlserver_connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#sqlserver_connection SourceSqlserver#sqlserver_connection}
  */
  readonly sqlserverConnection: SourceSqlserverSqlserverConnection;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#table SourceSqlserver#table}
  */
  readonly table?: SourceSqlserverTable[] | cdktf.IResolvable;
}
export interface SourceSqlserverAwsPrivatelink {
  /**
  * The aws_privatelink database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#database_name SourceSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The aws_privatelink name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#name SourceSqlserver#name}
  */
  readonly name: string;
  /**
  * The aws_privatelink schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#schema_name SourceSqlserver#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceSqlserverAwsPrivatelinkToTerraform(struct?: SourceSqlserverAwsPrivatelinkOutputReference | SourceSqlserverAwsPrivatelink): any {
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


export function sourceSqlserverAwsPrivatelinkToHclTerraform(struct?: SourceSqlserverAwsPrivatelinkOutputReference | SourceSqlserverAwsPrivatelink): any {
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

export class SourceSqlserverAwsPrivatelinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceSqlserverAwsPrivatelink | undefined {
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

  public set internalValue(value: SourceSqlserverAwsPrivatelink | undefined) {
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
export interface SourceSqlserverExposeProgress {
  /**
  * The expose_progress database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#database_name SourceSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The expose_progress name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#name SourceSqlserver#name}
  */
  readonly name: string;
  /**
  * The expose_progress schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#schema_name SourceSqlserver#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceSqlserverExposeProgressToTerraform(struct?: SourceSqlserverExposeProgressOutputReference | SourceSqlserverExposeProgress): any {
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


export function sourceSqlserverExposeProgressToHclTerraform(struct?: SourceSqlserverExposeProgressOutputReference | SourceSqlserverExposeProgress): any {
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

export class SourceSqlserverExposeProgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceSqlserverExposeProgress | undefined {
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

  public set internalValue(value: SourceSqlserverExposeProgress | undefined) {
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
export interface SourceSqlserverSqlserverConnection {
  /**
  * The sqlserver_connection database name. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#database_name SourceSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The sqlserver_connection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#name SourceSqlserver#name}
  */
  readonly name: string;
  /**
  * The sqlserver_connection schema name. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#schema_name SourceSqlserver#schema_name}
  */
  readonly schemaName?: string;
}

export function sourceSqlserverSqlserverConnectionToTerraform(struct?: SourceSqlserverSqlserverConnectionOutputReference | SourceSqlserverSqlserverConnection): any {
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


export function sourceSqlserverSqlserverConnectionToHclTerraform(struct?: SourceSqlserverSqlserverConnectionOutputReference | SourceSqlserverSqlserverConnection): any {
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

export class SourceSqlserverSqlserverConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SourceSqlserverSqlserverConnection | undefined {
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

  public set internalValue(value: SourceSqlserverSqlserverConnection | undefined) {
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
export interface SourceSqlserverTable {
  /**
  * The database of the table in Materialize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#database_name SourceSqlserver#database_name}
  */
  readonly databaseName?: string;
  /**
  * The name for the table, used in Materialize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#name SourceSqlserver#name}
  */
  readonly name?: string;
  /**
  * The schema of the table in Materialize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#schema_name SourceSqlserver#schema_name}
  */
  readonly schemaName?: string;
  /**
  * The name of the table in the upstream SQL Server database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#upstream_name SourceSqlserver#upstream_name}
  */
  readonly upstreamName: string;
  /**
  * The schema of the table in the upstream SQL Server database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#upstream_schema_name SourceSqlserver#upstream_schema_name}
  */
  readonly upstreamSchemaName?: string;
}

export function sourceSqlserverTableToTerraform(struct?: SourceSqlserverTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    name: cdktf.stringToTerraform(struct!.name),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    upstream_name: cdktf.stringToTerraform(struct!.upstreamName),
    upstream_schema_name: cdktf.stringToTerraform(struct!.upstreamSchemaName),
  }
}


export function sourceSqlserverTableToHclTerraform(struct?: SourceSqlserverTable | cdktf.IResolvable): any {
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
    upstream_name: {
      value: cdktf.stringToHclTerraform(struct!.upstreamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upstream_schema_name: {
      value: cdktf.stringToHclTerraform(struct!.upstreamSchemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceSqlserverTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceSqlserverTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._upstreamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamName = this._upstreamName;
    }
    if (this._upstreamSchemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamSchemaName = this._upstreamSchemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceSqlserverTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._name = undefined;
      this._schemaName = undefined;
      this._upstreamName = undefined;
      this._upstreamSchemaName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._name = value.name;
      this._schemaName = value.schemaName;
      this._upstreamName = value.upstreamName;
      this._upstreamSchemaName = value.upstreamSchemaName;
    }
  }

  // database_name - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // schema_name - computed: true, optional: true, required: false
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

  // upstream_name - computed: false, optional: false, required: true
  private _upstreamName?: string; 
  public get upstreamName() {
    return this.getStringAttribute('upstream_name');
  }
  public set upstreamName(value: string) {
    this._upstreamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamNameInput() {
    return this._upstreamName;
  }

  // upstream_schema_name - computed: true, optional: true, required: false
  private _upstreamSchemaName?: string; 
  public get upstreamSchemaName() {
    return this.getStringAttribute('upstream_schema_name');
  }
  public set upstreamSchemaName(value: string) {
    this._upstreamSchemaName = value;
  }
  public resetUpstreamSchemaName() {
    this._upstreamSchemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamSchemaNameInput() {
    return this._upstreamSchemaName;
  }
}

export class SourceSqlserverTableList extends cdktf.ComplexList {
  public internalValue? : SourceSqlserverTable[] | cdktf.IResolvable

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
  public get(index: number): SourceSqlserverTableOutputReference {
    return new SourceSqlserverTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver materialize_source_sqlserver}
*/
export class SourceSqlserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_source_sqlserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceSqlserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceSqlserver to import
  * @param importFromId The id of the existing SourceSqlserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceSqlserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_source_sqlserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.10.0/docs/resources/source_sqlserver materialize_source_sqlserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceSqlserverConfig
  */
  public constructor(scope: Construct, id: string, config: SourceSqlserverConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_source_sqlserver',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterName = config.clusterName;
    this._comment = config.comment;
    this._databaseName = config.databaseName;
    this._excludeColumns = config.excludeColumns;
    this._id = config.id;
    this._name = config.name;
    this._ownershipRole = config.ownershipRole;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._textColumns = config.textColumns;
    this._awsPrivatelink.internalValue = config.awsPrivatelink;
    this._exposeProgress.internalValue = config.exposeProgress;
    this._sqlserverConnection.internalValue = config.sqlserverConnection;
    this._table.internalValue = config.table;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

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

  // exclude_columns - computed: false, optional: true, required: false
  private _excludeColumns?: string[]; 
  public get excludeColumns() {
    return this.getListAttribute('exclude_columns');
  }
  public set excludeColumns(value: string[]) {
    this._excludeColumns = value;
  }
  public resetExcludeColumns() {
    this._excludeColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeColumnsInput() {
    return this._excludeColumns;
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

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // text_columns - computed: false, optional: true, required: false
  private _textColumns?: string[]; 
  public get textColumns() {
    return this.getListAttribute('text_columns');
  }
  public set textColumns(value: string[]) {
    this._textColumns = value;
  }
  public resetTextColumns() {
    this._textColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColumnsInput() {
    return this._textColumns;
  }

  // aws_privatelink - computed: false, optional: true, required: false
  private _awsPrivatelink = new SourceSqlserverAwsPrivatelinkOutputReference(this, "aws_privatelink");
  public get awsPrivatelink() {
    return this._awsPrivatelink;
  }
  public putAwsPrivatelink(value: SourceSqlserverAwsPrivatelink) {
    this._awsPrivatelink.internalValue = value;
  }
  public resetAwsPrivatelink() {
    this._awsPrivatelink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivatelinkInput() {
    return this._awsPrivatelink.internalValue;
  }

  // expose_progress - computed: false, optional: true, required: false
  private _exposeProgress = new SourceSqlserverExposeProgressOutputReference(this, "expose_progress");
  public get exposeProgress() {
    return this._exposeProgress;
  }
  public putExposeProgress(value: SourceSqlserverExposeProgress) {
    this._exposeProgress.internalValue = value;
  }
  public resetExposeProgress() {
    this._exposeProgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeProgressInput() {
    return this._exposeProgress.internalValue;
  }

  // sqlserver_connection - computed: false, optional: false, required: true
  private _sqlserverConnection = new SourceSqlserverSqlserverConnectionOutputReference(this, "sqlserver_connection");
  public get sqlserverConnection() {
    return this._sqlserverConnection;
  }
  public putSqlserverConnection(value: SourceSqlserverSqlserverConnection) {
    this._sqlserverConnection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlserverConnectionInput() {
    return this._sqlserverConnection.internalValue;
  }

  // table - computed: false, optional: true, required: false
  private _table = new SourceSqlserverTableList(this, "table", true);
  public get table() {
    return this._table;
  }
  public putTable(value: SourceSqlserverTable[] | cdktf.IResolvable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      exclude_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeColumns),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      text_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._textColumns),
      aws_privatelink: sourceSqlserverAwsPrivatelinkToTerraform(this._awsPrivatelink.internalValue),
      expose_progress: sourceSqlserverExposeProgressToTerraform(this._exposeProgress.internalValue),
      sqlserver_connection: sourceSqlserverSqlserverConnectionToTerraform(this._sqlserverConnection.internalValue),
      table: cdktf.listMapper(sourceSqlserverTableToTerraform, true)(this._table.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      exclude_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      text_columns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._textColumns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aws_privatelink: {
        value: sourceSqlserverAwsPrivatelinkToHclTerraform(this._awsPrivatelink.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceSqlserverAwsPrivatelinkList",
      },
      expose_progress: {
        value: sourceSqlserverExposeProgressToHclTerraform(this._exposeProgress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceSqlserverExposeProgressList",
      },
      sqlserver_connection: {
        value: sourceSqlserverSqlserverConnectionToHclTerraform(this._sqlserverConnection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SourceSqlserverSqlserverConnectionList",
      },
      table: {
        value: cdktf.listMapperHcl(sourceSqlserverTableToHclTerraform, true)(this._table.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SourceSqlserverTableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
