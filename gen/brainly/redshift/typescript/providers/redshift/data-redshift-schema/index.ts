// https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRedshiftSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#id DataRedshiftSchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#name DataRedshiftSchema#name}
  */
  readonly name: string;
  /**
  * external_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#external_schema DataRedshiftSchema#external_schema}
  */
  readonly externalSchema?: DataRedshiftSchemaExternalSchema;
}
export interface DataRedshiftSchemaExternalSchemaDataCatalogSource {
  /**
  * The Amazon Resource Name (ARN) for the IAM roles that your cluster uses for authentication and authorization for the data catalog.
  * 	If this is not specified, Amazon Redshift uses the specified iam_role_arns. The catalog role must have permission to access the Data Catalog in AWS Glue or Athena.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-iam-policies.html.
  * 
  * 	To chain roles, you establish a trust relationship between the roles. A role that assumes another role must have a permissions policy that allows it to assume the specified role.
  * 	In turn, the role that passes permissions must have a trust policy that allows it to pass its permissions to another role.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/mgmt/authorizing-redshift-service.html#authorizing-redshift-service-chaining-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#catalog_role_arns DataRedshiftSchema#catalog_role_arns}
  */
  readonly catalogRoleArns?: string[];
  /**
  * If the external database is defined in an Athena data catalog or the AWS Glue Data Catalog, the AWS Region in which the database is located. This parameter is required if the database is defined in an external Data Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#region DataRedshiftSchema#region}
  */
  readonly region?: string;
}

export function dataRedshiftSchemaExternalSchemaDataCatalogSourceToTerraform(struct?: DataRedshiftSchemaExternalSchemaDataCatalogSourceOutputReference | DataRedshiftSchemaExternalSchemaDataCatalogSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.catalogRoleArns),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function dataRedshiftSchemaExternalSchemaDataCatalogSourceToHclTerraform(struct?: DataRedshiftSchemaExternalSchemaDataCatalogSourceOutputReference | DataRedshiftSchemaExternalSchemaDataCatalogSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.catalogRoleArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedshiftSchemaExternalSchemaDataCatalogSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRedshiftSchemaExternalSchemaDataCatalogSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogRoleArns = this._catalogRoleArns;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedshiftSchemaExternalSchemaDataCatalogSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogRoleArns = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogRoleArns = value.catalogRoleArns;
      this._region = value.region;
    }
  }

  // catalog_role_arns - computed: true, optional: true, required: false
  private _catalogRoleArns?: string[]; 
  public get catalogRoleArns() {
    return this.getListAttribute('catalog_role_arns');
  }
  public set catalogRoleArns(value: string[]) {
    this._catalogRoleArns = value;
  }
  public resetCatalogRoleArns() {
    this._catalogRoleArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogRoleArnsInput() {
    return this._catalogRoleArns;
  }

  // iam_role_arns - computed: true, optional: false, required: false
  public get iamRoleArns() {
    return this.getListAttribute('iam_role_arns');
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
}
export interface DataRedshiftSchemaExternalSchemaHiveMetastoreSource {
  /**
  * The port number of the hive metastore. The default port number is 9083.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#port DataRedshiftSchema#port}
  */
  readonly port?: number;
}

export function dataRedshiftSchemaExternalSchemaHiveMetastoreSourceToTerraform(struct?: DataRedshiftSchemaExternalSchemaHiveMetastoreSourceOutputReference | DataRedshiftSchemaExternalSchemaHiveMetastoreSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataRedshiftSchemaExternalSchemaHiveMetastoreSourceToHclTerraform(struct?: DataRedshiftSchemaExternalSchemaHiveMetastoreSourceOutputReference | DataRedshiftSchemaExternalSchemaHiveMetastoreSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataRedshiftSchemaExternalSchemaHiveMetastoreSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRedshiftSchemaExternalSchemaHiveMetastoreSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedshiftSchemaExternalSchemaHiveMetastoreSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // iam_role_arns - computed: true, optional: false, required: false
  public get iamRoleArns() {
    return this.getListAttribute('iam_role_arns');
  }

  // port - computed: true, optional: true, required: false
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
export interface DataRedshiftSchemaExternalSchemaRdsMysqlSource {
  /**
  * The port number of the MySQL database. The default port number is 3306.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#port DataRedshiftSchema#port}
  */
  readonly port?: number;
}

export function dataRedshiftSchemaExternalSchemaRdsMysqlSourceToTerraform(struct?: DataRedshiftSchemaExternalSchemaRdsMysqlSourceOutputReference | DataRedshiftSchemaExternalSchemaRdsMysqlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataRedshiftSchemaExternalSchemaRdsMysqlSourceToHclTerraform(struct?: DataRedshiftSchemaExternalSchemaRdsMysqlSourceOutputReference | DataRedshiftSchemaExternalSchemaRdsMysqlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataRedshiftSchemaExternalSchemaRdsMysqlSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRedshiftSchemaExternalSchemaRdsMysqlSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedshiftSchemaExternalSchemaRdsMysqlSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // iam_role_arns - computed: true, optional: false, required: false
  public get iamRoleArns() {
    return this.getListAttribute('iam_role_arns');
  }

  // port - computed: true, optional: true, required: false
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

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataRedshiftSchemaExternalSchemaRdsPostgresSource {
  /**
  * The port number of the PostgreSQL database. The default port number is 5432.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#port DataRedshiftSchema#port}
  */
  readonly port?: number;
  /**
  * The name of the PostgreSQL schema. The default schema is 'public'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#schema DataRedshiftSchema#schema}
  */
  readonly schema?: string;
}

export function dataRedshiftSchemaExternalSchemaRdsPostgresSourceToTerraform(struct?: DataRedshiftSchemaExternalSchemaRdsPostgresSourceOutputReference | DataRedshiftSchemaExternalSchemaRdsPostgresSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function dataRedshiftSchemaExternalSchemaRdsPostgresSourceToHclTerraform(struct?: DataRedshiftSchemaExternalSchemaRdsPostgresSourceOutputReference | DataRedshiftSchemaExternalSchemaRdsPostgresSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedshiftSchemaExternalSchemaRdsPostgresSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRedshiftSchemaExternalSchemaRdsPostgresSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedshiftSchemaExternalSchemaRdsPostgresSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._schema = value.schema;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // iam_role_arns - computed: true, optional: false, required: false
  public get iamRoleArns() {
    return this.getListAttribute('iam_role_arns');
  }

  // port - computed: true, optional: true, required: false
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // secret_arn - computed: true, optional: false, required: false
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
}
export interface DataRedshiftSchemaExternalSchemaRedshiftSource {
  /**
  * The name of the datashare schema. The default schema is 'public'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#schema DataRedshiftSchema#schema}
  */
  readonly schema?: string;
}

export function dataRedshiftSchemaExternalSchemaRedshiftSourceToTerraform(struct?: DataRedshiftSchemaExternalSchemaRedshiftSourceOutputReference | DataRedshiftSchemaExternalSchemaRedshiftSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function dataRedshiftSchemaExternalSchemaRedshiftSourceToHclTerraform(struct?: DataRedshiftSchemaExternalSchemaRedshiftSourceOutputReference | DataRedshiftSchemaExternalSchemaRedshiftSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedshiftSchemaExternalSchemaRedshiftSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRedshiftSchemaExternalSchemaRedshiftSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedshiftSchemaExternalSchemaRedshiftSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
    }
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface DataRedshiftSchemaExternalSchema {
  /**
  * data_catalog_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#data_catalog_source DataRedshiftSchema#data_catalog_source}
  */
  readonly dataCatalogSource?: DataRedshiftSchemaExternalSchemaDataCatalogSource;
  /**
  * hive_metastore_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#hive_metastore_source DataRedshiftSchema#hive_metastore_source}
  */
  readonly hiveMetastoreSource?: DataRedshiftSchemaExternalSchemaHiveMetastoreSource;
  /**
  * rds_mysql_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#rds_mysql_source DataRedshiftSchema#rds_mysql_source}
  */
  readonly rdsMysqlSource?: DataRedshiftSchemaExternalSchemaRdsMysqlSource;
  /**
  * rds_postgres_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#rds_postgres_source DataRedshiftSchema#rds_postgres_source}
  */
  readonly rdsPostgresSource?: DataRedshiftSchemaExternalSchemaRdsPostgresSource;
  /**
  * redshift_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#redshift_source DataRedshiftSchema#redshift_source}
  */
  readonly redshiftSource?: DataRedshiftSchemaExternalSchemaRedshiftSource;
}

export function dataRedshiftSchemaExternalSchemaToTerraform(struct?: DataRedshiftSchemaExternalSchemaOutputReference | DataRedshiftSchemaExternalSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_catalog_source: dataRedshiftSchemaExternalSchemaDataCatalogSourceToTerraform(struct!.dataCatalogSource),
    hive_metastore_source: dataRedshiftSchemaExternalSchemaHiveMetastoreSourceToTerraform(struct!.hiveMetastoreSource),
    rds_mysql_source: dataRedshiftSchemaExternalSchemaRdsMysqlSourceToTerraform(struct!.rdsMysqlSource),
    rds_postgres_source: dataRedshiftSchemaExternalSchemaRdsPostgresSourceToTerraform(struct!.rdsPostgresSource),
    redshift_source: dataRedshiftSchemaExternalSchemaRedshiftSourceToTerraform(struct!.redshiftSource),
  }
}


export function dataRedshiftSchemaExternalSchemaToHclTerraform(struct?: DataRedshiftSchemaExternalSchemaOutputReference | DataRedshiftSchemaExternalSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_catalog_source: {
      value: dataRedshiftSchemaExternalSchemaDataCatalogSourceToHclTerraform(struct!.dataCatalogSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedshiftSchemaExternalSchemaDataCatalogSourceList",
    },
    hive_metastore_source: {
      value: dataRedshiftSchemaExternalSchemaHiveMetastoreSourceToHclTerraform(struct!.hiveMetastoreSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedshiftSchemaExternalSchemaHiveMetastoreSourceList",
    },
    rds_mysql_source: {
      value: dataRedshiftSchemaExternalSchemaRdsMysqlSourceToHclTerraform(struct!.rdsMysqlSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedshiftSchemaExternalSchemaRdsMysqlSourceList",
    },
    rds_postgres_source: {
      value: dataRedshiftSchemaExternalSchemaRdsPostgresSourceToHclTerraform(struct!.rdsPostgresSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedshiftSchemaExternalSchemaRdsPostgresSourceList",
    },
    redshift_source: {
      value: dataRedshiftSchemaExternalSchemaRedshiftSourceToHclTerraform(struct!.redshiftSource),
      isBlock: true,
      type: "list",
      storageClassType: "DataRedshiftSchemaExternalSchemaRedshiftSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRedshiftSchemaExternalSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataRedshiftSchemaExternalSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCatalogSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCatalogSource = this._dataCatalogSource?.internalValue;
    }
    if (this._hiveMetastoreSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiveMetastoreSource = this._hiveMetastoreSource?.internalValue;
    }
    if (this._rdsMysqlSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsMysqlSource = this._rdsMysqlSource?.internalValue;
    }
    if (this._rdsPostgresSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdsPostgresSource = this._rdsPostgresSource?.internalValue;
    }
    if (this._redshiftSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshiftSource = this._redshiftSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRedshiftSchemaExternalSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCatalogSource.internalValue = undefined;
      this._hiveMetastoreSource.internalValue = undefined;
      this._rdsMysqlSource.internalValue = undefined;
      this._rdsPostgresSource.internalValue = undefined;
      this._redshiftSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCatalogSource.internalValue = value.dataCatalogSource;
      this._hiveMetastoreSource.internalValue = value.hiveMetastoreSource;
      this._rdsMysqlSource.internalValue = value.rdsMysqlSource;
      this._rdsPostgresSource.internalValue = value.rdsPostgresSource;
      this._redshiftSource.internalValue = value.redshiftSource;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // data_catalog_source - computed: false, optional: true, required: false
  private _dataCatalogSource = new DataRedshiftSchemaExternalSchemaDataCatalogSourceOutputReference(this, "data_catalog_source");
  public get dataCatalogSource() {
    return this._dataCatalogSource;
  }
  public putDataCatalogSource(value: DataRedshiftSchemaExternalSchemaDataCatalogSource) {
    this._dataCatalogSource.internalValue = value;
  }
  public resetDataCatalogSource() {
    this._dataCatalogSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCatalogSourceInput() {
    return this._dataCatalogSource.internalValue;
  }

  // hive_metastore_source - computed: false, optional: true, required: false
  private _hiveMetastoreSource = new DataRedshiftSchemaExternalSchemaHiveMetastoreSourceOutputReference(this, "hive_metastore_source");
  public get hiveMetastoreSource() {
    return this._hiveMetastoreSource;
  }
  public putHiveMetastoreSource(value: DataRedshiftSchemaExternalSchemaHiveMetastoreSource) {
    this._hiveMetastoreSource.internalValue = value;
  }
  public resetHiveMetastoreSource() {
    this._hiveMetastoreSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveMetastoreSourceInput() {
    return this._hiveMetastoreSource.internalValue;
  }

  // rds_mysql_source - computed: false, optional: true, required: false
  private _rdsMysqlSource = new DataRedshiftSchemaExternalSchemaRdsMysqlSourceOutputReference(this, "rds_mysql_source");
  public get rdsMysqlSource() {
    return this._rdsMysqlSource;
  }
  public putRdsMysqlSource(value: DataRedshiftSchemaExternalSchemaRdsMysqlSource) {
    this._rdsMysqlSource.internalValue = value;
  }
  public resetRdsMysqlSource() {
    this._rdsMysqlSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsMysqlSourceInput() {
    return this._rdsMysqlSource.internalValue;
  }

  // rds_postgres_source - computed: false, optional: true, required: false
  private _rdsPostgresSource = new DataRedshiftSchemaExternalSchemaRdsPostgresSourceOutputReference(this, "rds_postgres_source");
  public get rdsPostgresSource() {
    return this._rdsPostgresSource;
  }
  public putRdsPostgresSource(value: DataRedshiftSchemaExternalSchemaRdsPostgresSource) {
    this._rdsPostgresSource.internalValue = value;
  }
  public resetRdsPostgresSource() {
    this._rdsPostgresSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdsPostgresSourceInput() {
    return this._rdsPostgresSource.internalValue;
  }

  // redshift_source - computed: false, optional: true, required: false
  private _redshiftSource = new DataRedshiftSchemaExternalSchemaRedshiftSourceOutputReference(this, "redshift_source");
  public get redshiftSource() {
    return this._redshiftSource;
  }
  public putRedshiftSource(value: DataRedshiftSchemaExternalSchemaRedshiftSource) {
    this._redshiftSource.internalValue = value;
  }
  public resetRedshiftSource() {
    this._redshiftSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftSourceInput() {
    return this._redshiftSource.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema redshift_schema}
*/
export class DataRedshiftSchema extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRedshiftSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRedshiftSchema to import
  * @param importFromId The id of the existing DataRedshiftSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRedshiftSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/data-sources/schema redshift_schema} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRedshiftSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: DataRedshiftSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift_schema',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '1.1.0'
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
    this._name = config.name;
    this._externalSchema.internalValue = config.externalSchema;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // quota - computed: true, optional: false, required: false
  public get quota() {
    return this.getNumberAttribute('quota');
  }

  // external_schema - computed: false, optional: true, required: false
  private _externalSchema = new DataRedshiftSchemaExternalSchemaOutputReference(this, "external_schema");
  public get externalSchema() {
    return this._externalSchema;
  }
  public putExternalSchema(value: DataRedshiftSchemaExternalSchema) {
    this._externalSchema.internalValue = value;
  }
  public resetExternalSchema() {
    this._externalSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSchemaInput() {
    return this._externalSchema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      external_schema: dataRedshiftSchemaExternalSchemaToTerraform(this._externalSchema.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_schema: {
        value: dataRedshiftSchemaExternalSchemaToHclTerraform(this._externalSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRedshiftSchemaExternalSchemaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
