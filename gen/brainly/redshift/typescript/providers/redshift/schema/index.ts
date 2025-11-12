// https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates to automatically drop all objects in the schema. The default action is TO NOT drop a schema if it contains any objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#cascade_on_delete Schema#cascade_on_delete}
  */
  readonly cascadeOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#id Schema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the schema. The schema name can't be `PUBLIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#name Schema#name}
  */
  readonly name: string;
  /**
  * Name of the schema owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#owner Schema#owner}
  */
  readonly owner?: string;
  /**
  * The maximum amount of disk space that the specified schema can use. GB is the default unit of measurement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#quota Schema#quota}
  */
  readonly quota?: number;
  /**
  * external_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#external_schema Schema#external_schema}
  */
  readonly externalSchema?: SchemaExternalSchema;
}
export interface SchemaExternalSchemaDataCatalogSource {
  /**
  * The Amazon Resource Name (ARN) for the IAM roles that your cluster uses for authentication and authorization for the data catalog.
  * 	If this is not specified, Amazon Redshift uses the specified iam_role_arns. The catalog role must have permission to access the Data Catalog in AWS Glue or Athena.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-iam-policies.html.
  * 
  *   To chain roles, you establish a trust relationship between the roles. A role that assumes another role must have a permissions policy that allows it to assume the specified role.
  * 	In turn, the role that passes permissions must have a trust policy that allows it to pass its permissions to another role.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/mgmt/authorizing-redshift-service.html#authorizing-redshift-service-chaining-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#catalog_role_arns Schema#catalog_role_arns}
  */
  readonly catalogRoleArns?: string[];
  /**
  * When enabled, creates an external database with the name specified by the database argument,
  * 	if the specified external database doesn't exist. If the specified external database exists, the command makes no changes.
  * 	In this case, the command returns a message that the external database exists, rather than terminating with an error.
  * 
  *   To use create_external_database_if_not_exists with a Data Catalog enabled for AWS Lake Formation, you need CREATE_DATABASE permission on the Data Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#create_external_database_if_not_exists Schema#create_external_database_if_not_exists}
  */
  readonly createExternalDatabaseIfNotExists?: boolean | cdktf.IResolvable;
  /**
  * The Amazon Resource Name (ARN) for the IAM roles that your cluster uses for authentication and authorization.
  * 	As a minimum, the IAM roles must have permission to perform a LIST operation on the Amazon S3 bucket to be accessed and a GET operation on the Amazon S3 objects the bucket contains.
  *   If the external database is defined in an Amazon Athena data catalog or the AWS Glue Data Catalog, the IAM role must have permission to access Athena unless catalog_role is specified.
  *   For more information, see https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-iam-policies.html.
  * 
  *   When you attach a role to your cluster, your cluster can assume that role to access Amazon S3, Athena, and AWS Glue on your behalf.
  *   If a role attached to your cluster doesn't have access to the necessary resources, you can chain another role, possibly belonging to another account.
  * 	Your cluster then temporarily assumes the chained role to access the data. You can also grant cross-account access by chaining roles.
  * 	You can chain a maximum of 10 roles. Each role in the chain assumes the next role in the chain, until the cluster assumes the role at the end of chain.
  * 
  *   To chain roles, you establish a trust relationship between the roles. A role that assumes another role must have a permissions policy that allows it to assume the specified role.
  * 	In turn, the role that passes permissions must have a trust policy that allows it to pass its permissions to another role.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/mgmt/authorizing-redshift-service.html#authorizing-redshift-service-chaining-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#iam_role_arns Schema#iam_role_arns}
  */
  readonly iamRoleArns: string[];
  /**
  * If the external database is defined in an Athena data catalog or the AWS Glue Data Catalog, the AWS Region in which the database is located. This parameter is required if the database is defined in an external Data Catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#region Schema#region}
  */
  readonly region?: string;
}

export function schemaExternalSchemaDataCatalogSourceToTerraform(struct?: SchemaExternalSchemaDataCatalogSourceOutputReference | SchemaExternalSchemaDataCatalogSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.catalogRoleArns),
    create_external_database_if_not_exists: cdktf.booleanToTerraform(struct!.createExternalDatabaseIfNotExists),
    iam_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.iamRoleArns),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function schemaExternalSchemaDataCatalogSourceToHclTerraform(struct?: SchemaExternalSchemaDataCatalogSourceOutputReference | SchemaExternalSchemaDataCatalogSource): any {
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
    create_external_database_if_not_exists: {
      value: cdktf.booleanToHclTerraform(struct!.createExternalDatabaseIfNotExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iam_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.iamRoleArns),
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

export class SchemaExternalSchemaDataCatalogSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaExternalSchemaDataCatalogSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogRoleArns = this._catalogRoleArns;
    }
    if (this._createExternalDatabaseIfNotExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.createExternalDatabaseIfNotExists = this._createExternalDatabaseIfNotExists;
    }
    if (this._iamRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArns = this._iamRoleArns;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaExternalSchemaDataCatalogSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogRoleArns = undefined;
      this._createExternalDatabaseIfNotExists = undefined;
      this._iamRoleArns = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogRoleArns = value.catalogRoleArns;
      this._createExternalDatabaseIfNotExists = value.createExternalDatabaseIfNotExists;
      this._iamRoleArns = value.iamRoleArns;
      this._region = value.region;
    }
  }

  // catalog_role_arns - computed: false, optional: true, required: false
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

  // create_external_database_if_not_exists - computed: false, optional: true, required: false
  private _createExternalDatabaseIfNotExists?: boolean | cdktf.IResolvable; 
  public get createExternalDatabaseIfNotExists() {
    return this.getBooleanAttribute('create_external_database_if_not_exists');
  }
  public set createExternalDatabaseIfNotExists(value: boolean | cdktf.IResolvable) {
    this._createExternalDatabaseIfNotExists = value;
  }
  public resetCreateExternalDatabaseIfNotExists() {
    this._createExternalDatabaseIfNotExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createExternalDatabaseIfNotExistsInput() {
    return this._createExternalDatabaseIfNotExists;
  }

  // iam_role_arns - computed: false, optional: false, required: true
  private _iamRoleArns?: string[]; 
  public get iamRoleArns() {
    return this.getListAttribute('iam_role_arns');
  }
  public set iamRoleArns(value: string[]) {
    this._iamRoleArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnsInput() {
    return this._iamRoleArns;
  }

  // region - computed: false, optional: true, required: false
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
export interface SchemaExternalSchemaHiveMetastoreSource {
  /**
  * The hostname of the hive metastore database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#hostname Schema#hostname}
  */
  readonly hostname: string;
  /**
  * The Amazon Resource Name (ARN) for the IAM roles that your cluster uses for authentication and authorization.
  * 	As a minimum, the IAM roles must have permission to perform a LIST operation on the Amazon S3 bucket to be accessed and a GET operation on the Amazon S3 objects the bucket contains.
  * 	If the external database is defined in an Amazon Athena data catalog or the AWS Glue Data Catalog, the IAM role must have permission to access Athena unless catalog_role is specified.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-iam-policies.html.
  * 
  *   When you attach a role to your cluster, your cluster can assume that role to access Amazon S3, Athena, and AWS Glue on your behalf.
  * 	If a role attached to your cluster doesn't have access to the necessary resources, you can chain another role, possibly belonging to another account.
  * 	Your cluster then temporarily assumes the chained role to access the data. You can also grant cross-account access by chaining roles.
  * 	You can chain a maximum of 10 roles. Each role in the chain assumes the next role in the chain, until the cluster assumes the role at the end of chain.
  * 
  *   To chain roles, you establish a trust relationship between the roles. A role that assumes another role must have a permissions policy that allows it to assume the specified role.
  * 	In turn, the role that passes permissions must have a trust policy that allows it to pass its permissions to another role.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/mgmt/authorizing-redshift-service.html#authorizing-redshift-service-chaining-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#iam_role_arns Schema#iam_role_arns}
  */
  readonly iamRoleArns: string[];
  /**
  * The port number of the hive metastore. The default port number is 9083.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#port Schema#port}
  */
  readonly port?: number;
}

export function schemaExternalSchemaHiveMetastoreSourceToTerraform(struct?: SchemaExternalSchemaHiveMetastoreSourceOutputReference | SchemaExternalSchemaHiveMetastoreSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    iam_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.iamRoleArns),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function schemaExternalSchemaHiveMetastoreSourceToHclTerraform(struct?: SchemaExternalSchemaHiveMetastoreSourceOutputReference | SchemaExternalSchemaHiveMetastoreSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.iamRoleArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class SchemaExternalSchemaHiveMetastoreSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaExternalSchemaHiveMetastoreSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._iamRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArns = this._iamRoleArns;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaExternalSchemaHiveMetastoreSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._iamRoleArns = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._iamRoleArns = value.iamRoleArns;
      this._port = value.port;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // iam_role_arns - computed: false, optional: false, required: true
  private _iamRoleArns?: string[]; 
  public get iamRoleArns() {
    return this.getListAttribute('iam_role_arns');
  }
  public set iamRoleArns(value: string[]) {
    this._iamRoleArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnsInput() {
    return this._iamRoleArns;
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
export interface SchemaExternalSchemaRdsMysqlSource {
  /**
  * The hostname of the head node of the MySQL database replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#hostname Schema#hostname}
  */
  readonly hostname: string;
  /**
  * The Amazon Resource Name (ARN) for the IAM roles that your cluster uses for authentication and authorization.
  * 	As a minimum, the IAM roles must have permission to perform a LIST operation on the Amazon S3 bucket to be accessed and a GET operation on the Amazon S3 objects the bucket contains.
  * 	If the external database is defined in an Amazon Athena data catalog or the AWS Glue Data Catalog, the IAM role must have permission to access Athena unless catalog_role is specified.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-iam-policies.html.
  * 
  *   When you attach a role to your cluster, your cluster can assume that role to access Amazon S3, Athena, and AWS Glue on your behalf.
  * 	If a role attached to your cluster doesn't have access to the necessary resources, you can chain another role, possibly belonging to another account.
  * 	Your cluster then temporarily assumes the chained role to access the data. You can also grant cross-account access by chaining roles.
  * 	You can chain a maximum of 10 roles. Each role in the chain assumes the next role in the chain, until the cluster assumes the role at the end of chain.
  * 
  *   To chain roles, you establish a trust relationship between the roles. A role that assumes another role must have a permissions policy that allows it to assume the specified role.
  * 	In turn, the role that passes permissions must have a trust policy that allows it to pass its permissions to another role.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/mgmt/authorizing-redshift-service.html#authorizing-redshift-service-chaining-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#iam_role_arns Schema#iam_role_arns}
  */
  readonly iamRoleArns: string[];
  /**
  * The port number of the MySQL database. The default port number is 3306.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#port Schema#port}
  */
  readonly port?: number;
  /**
  * The Amazon Resource Name (ARN) of a supported MySQL database engine secret created using AWS Secrets Manager.
  * 	For information about how to create and retrieve an ARN for a secret, see https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html
  * 	and https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_retrieve-secret.html in the AWS Secrets Manager User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#secret_arn Schema#secret_arn}
  */
  readonly secretArn: string;
}

export function schemaExternalSchemaRdsMysqlSourceToTerraform(struct?: SchemaExternalSchemaRdsMysqlSourceOutputReference | SchemaExternalSchemaRdsMysqlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    iam_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.iamRoleArns),
    port: cdktf.numberToTerraform(struct!.port),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


export function schemaExternalSchemaRdsMysqlSourceToHclTerraform(struct?: SchemaExternalSchemaRdsMysqlSourceOutputReference | SchemaExternalSchemaRdsMysqlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.iamRoleArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaExternalSchemaRdsMysqlSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaExternalSchemaRdsMysqlSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._iamRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArns = this._iamRoleArns;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaExternalSchemaRdsMysqlSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._iamRoleArns = undefined;
      this._port = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._iamRoleArns = value.iamRoleArns;
      this._port = value.port;
      this._secretArn = value.secretArn;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // iam_role_arns - computed: false, optional: false, required: true
  private _iamRoleArns?: string[]; 
  public get iamRoleArns() {
    return this.getListAttribute('iam_role_arns');
  }
  public set iamRoleArns(value: string[]) {
    this._iamRoleArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnsInput() {
    return this._iamRoleArns;
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

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface SchemaExternalSchemaRdsPostgresSource {
  /**
  * The hostname of the head node of the PostgreSQL database replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#hostname Schema#hostname}
  */
  readonly hostname: string;
  /**
  * The Amazon Resource Name (ARN) for the IAM roles that your cluster uses for authentication and authorization.
  * 	As a minimum, the IAM roles must have permission to perform a LIST operation on the Amazon S3 bucket to be accessed and a GET operation on the Amazon S3 objects the bucket contains.
  * 	If the external database is defined in an Amazon Athena data catalog or the AWS Glue Data Catalog, the IAM role must have permission to access Athena unless catalog_role is specified.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-iam-policies.html.
  * 
  *   When you attach a role to your cluster, your cluster can assume that role to access Amazon S3, Athena, and AWS Glue on your behalf.
  * 	If a role attached to your cluster doesn't have access to the necessary resources, you can chain another role, possibly belonging to another account.
  * 	Your cluster then temporarily assumes the chained role to access the data. You can also grant cross-account access by chaining roles.
  * 	You can chain a maximum of 10 roles. Each role in the chain assumes the next role in the chain, until the cluster assumes the role at the end of chain.
  * 
  *   To chain roles, you establish a trust relationship between the roles. A role that assumes another role must have a permissions policy that allows it to assume the specified role.
  * 	In turn, the role that passes permissions must have a trust policy that allows it to pass its permissions to another role.
  * 	For more information, see https://docs.aws.amazon.com/redshift/latest/mgmt/authorizing-redshift-service.html#authorizing-redshift-service-chaining-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#iam_role_arns Schema#iam_role_arns}
  */
  readonly iamRoleArns: string[];
  /**
  * The port number of the PostgreSQL database. The default port number is 5432.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#port Schema#port}
  */
  readonly port?: number;
  /**
  * The name of the PostgreSQL schema. The default schema is 'public'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#schema Schema#schema}
  */
  readonly schema?: string;
  /**
  * The Amazon Resource Name (ARN) of a supported PostgreSQL database engine secret created using AWS Secrets Manager.
  * 	For information about how to create and retrieve an ARN for a secret, see https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_create-basic-secret.html
  * 	and https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_retrieve-secret.html in the AWS Secrets Manager User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#secret_arn Schema#secret_arn}
  */
  readonly secretArn: string;
}

export function schemaExternalSchemaRdsPostgresSourceToTerraform(struct?: SchemaExternalSchemaRdsPostgresSourceOutputReference | SchemaExternalSchemaRdsPostgresSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    iam_role_arns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.iamRoleArns),
    port: cdktf.numberToTerraform(struct!.port),
    schema: cdktf.stringToTerraform(struct!.schema),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


export function schemaExternalSchemaRdsPostgresSourceToHclTerraform(struct?: SchemaExternalSchemaRdsPostgresSourceOutputReference | SchemaExternalSchemaRdsPostgresSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_role_arns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.iamRoleArns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaExternalSchemaRdsPostgresSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaExternalSchemaRdsPostgresSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._iamRoleArns !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleArns = this._iamRoleArns;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaExternalSchemaRdsPostgresSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._iamRoleArns = undefined;
      this._port = undefined;
      this._schema = undefined;
      this._secretArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._iamRoleArns = value.iamRoleArns;
      this._port = value.port;
      this._schema = value.schema;
      this._secretArn = value.secretArn;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // iam_role_arns - computed: false, optional: false, required: true
  private _iamRoleArns?: string[]; 
  public get iamRoleArns() {
    return this.getListAttribute('iam_role_arns');
  }
  public set iamRoleArns(value: string[]) {
    this._iamRoleArns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleArnsInput() {
    return this._iamRoleArns;
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

  // schema - computed: false, optional: true, required: false
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

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }
}
export interface SchemaExternalSchemaRedshiftSource {
  /**
  * The name of the datashare schema. The default schema is 'public'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#schema Schema#schema}
  */
  readonly schema?: string;
}

export function schemaExternalSchemaRedshiftSourceToTerraform(struct?: SchemaExternalSchemaRedshiftSourceOutputReference | SchemaExternalSchemaRedshiftSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function schemaExternalSchemaRedshiftSourceToHclTerraform(struct?: SchemaExternalSchemaRedshiftSourceOutputReference | SchemaExternalSchemaRedshiftSource): any {
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

export class SchemaExternalSchemaRedshiftSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaExternalSchemaRedshiftSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaExternalSchemaRedshiftSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schema = value.schema;
    }
  }

  // schema - computed: false, optional: true, required: false
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
export interface SchemaExternalSchema {
  /**
  * The database where the external schema can be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#database_name Schema#database_name}
  */
  readonly databaseName: string;
  /**
  * data_catalog_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#data_catalog_source Schema#data_catalog_source}
  */
  readonly dataCatalogSource?: SchemaExternalSchemaDataCatalogSource;
  /**
  * hive_metastore_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#hive_metastore_source Schema#hive_metastore_source}
  */
  readonly hiveMetastoreSource?: SchemaExternalSchemaHiveMetastoreSource;
  /**
  * rds_mysql_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#rds_mysql_source Schema#rds_mysql_source}
  */
  readonly rdsMysqlSource?: SchemaExternalSchemaRdsMysqlSource;
  /**
  * rds_postgres_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#rds_postgres_source Schema#rds_postgres_source}
  */
  readonly rdsPostgresSource?: SchemaExternalSchemaRdsPostgresSource;
  /**
  * redshift_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#redshift_source Schema#redshift_source}
  */
  readonly redshiftSource?: SchemaExternalSchemaRedshiftSource;
}

export function schemaExternalSchemaToTerraform(struct?: SchemaExternalSchemaOutputReference | SchemaExternalSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    data_catalog_source: schemaExternalSchemaDataCatalogSourceToTerraform(struct!.dataCatalogSource),
    hive_metastore_source: schemaExternalSchemaHiveMetastoreSourceToTerraform(struct!.hiveMetastoreSource),
    rds_mysql_source: schemaExternalSchemaRdsMysqlSourceToTerraform(struct!.rdsMysqlSource),
    rds_postgres_source: schemaExternalSchemaRdsPostgresSourceToTerraform(struct!.rdsPostgresSource),
    redshift_source: schemaExternalSchemaRedshiftSourceToTerraform(struct!.redshiftSource),
  }
}


export function schemaExternalSchemaToHclTerraform(struct?: SchemaExternalSchemaOutputReference | SchemaExternalSchema): any {
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
    data_catalog_source: {
      value: schemaExternalSchemaDataCatalogSourceToHclTerraform(struct!.dataCatalogSource),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaExternalSchemaDataCatalogSourceList",
    },
    hive_metastore_source: {
      value: schemaExternalSchemaHiveMetastoreSourceToHclTerraform(struct!.hiveMetastoreSource),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaExternalSchemaHiveMetastoreSourceList",
    },
    rds_mysql_source: {
      value: schemaExternalSchemaRdsMysqlSourceToHclTerraform(struct!.rdsMysqlSource),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaExternalSchemaRdsMysqlSourceList",
    },
    rds_postgres_source: {
      value: schemaExternalSchemaRdsPostgresSourceToHclTerraform(struct!.rdsPostgresSource),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaExternalSchemaRdsPostgresSourceList",
    },
    redshift_source: {
      value: schemaExternalSchemaRedshiftSourceToHclTerraform(struct!.redshiftSource),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaExternalSchemaRedshiftSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaExternalSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaExternalSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
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

  public set internalValue(value: SchemaExternalSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseName = undefined;
      this._dataCatalogSource.internalValue = undefined;
      this._hiveMetastoreSource.internalValue = undefined;
      this._rdsMysqlSource.internalValue = undefined;
      this._rdsPostgresSource.internalValue = undefined;
      this._redshiftSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseName = value.databaseName;
      this._dataCatalogSource.internalValue = value.dataCatalogSource;
      this._hiveMetastoreSource.internalValue = value.hiveMetastoreSource;
      this._rdsMysqlSource.internalValue = value.rdsMysqlSource;
      this._rdsPostgresSource.internalValue = value.rdsPostgresSource;
      this._redshiftSource.internalValue = value.redshiftSource;
    }
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // data_catalog_source - computed: false, optional: true, required: false
  private _dataCatalogSource = new SchemaExternalSchemaDataCatalogSourceOutputReference(this, "data_catalog_source");
  public get dataCatalogSource() {
    return this._dataCatalogSource;
  }
  public putDataCatalogSource(value: SchemaExternalSchemaDataCatalogSource) {
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
  private _hiveMetastoreSource = new SchemaExternalSchemaHiveMetastoreSourceOutputReference(this, "hive_metastore_source");
  public get hiveMetastoreSource() {
    return this._hiveMetastoreSource;
  }
  public putHiveMetastoreSource(value: SchemaExternalSchemaHiveMetastoreSource) {
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
  private _rdsMysqlSource = new SchemaExternalSchemaRdsMysqlSourceOutputReference(this, "rds_mysql_source");
  public get rdsMysqlSource() {
    return this._rdsMysqlSource;
  }
  public putRdsMysqlSource(value: SchemaExternalSchemaRdsMysqlSource) {
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
  private _rdsPostgresSource = new SchemaExternalSchemaRdsPostgresSourceOutputReference(this, "rds_postgres_source");
  public get rdsPostgresSource() {
    return this._rdsPostgresSource;
  }
  public putRdsPostgresSource(value: SchemaExternalSchemaRdsPostgresSource) {
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
  private _redshiftSource = new SchemaExternalSchemaRedshiftSourceOutputReference(this, "redshift_source");
  public get redshiftSource() {
    return this._redshiftSource;
  }
  public putRedshiftSource(value: SchemaExternalSchemaRedshiftSource) {
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
* Represents a {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema redshift_schema}
*/
export class Schema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "redshift_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schema to import
  * @param importFromId The id of the existing Schema that should be imported. Refer to the {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "redshift_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brainly/redshift/1.1.0/docs/resources/schema redshift_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'redshift_schema',
      terraformGeneratorMetadata: {
        providerName: 'redshift',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cascadeOnDelete = config.cascadeOnDelete;
    this._id = config.id;
    this._name = config.name;
    this._owner = config.owner;
    this._quota = config.quota;
    this._externalSchema.internalValue = config.externalSchema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cascade_on_delete - computed: false, optional: true, required: false
  private _cascadeOnDelete?: boolean | cdktf.IResolvable; 
  public get cascadeOnDelete() {
    return this.getBooleanAttribute('cascade_on_delete');
  }
  public set cascadeOnDelete(value: boolean | cdktf.IResolvable) {
    this._cascadeOnDelete = value;
  }
  public resetCascadeOnDelete() {
    this._cascadeOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeOnDeleteInput() {
    return this._cascadeOnDelete;
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

  // owner - computed: true, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: number; 
  public get quota() {
    return this.getNumberAttribute('quota');
  }
  public set quota(value: number) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // external_schema - computed: false, optional: true, required: false
  private _externalSchema = new SchemaExternalSchemaOutputReference(this, "external_schema");
  public get externalSchema() {
    return this._externalSchema;
  }
  public putExternalSchema(value: SchemaExternalSchema) {
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
      cascade_on_delete: cdktf.booleanToTerraform(this._cascadeOnDelete),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      quota: cdktf.numberToTerraform(this._quota),
      external_schema: schemaExternalSchemaToTerraform(this._externalSchema.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cascade_on_delete: {
        value: cdktf.booleanToHclTerraform(this._cascadeOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota: {
        value: cdktf.numberToHclTerraform(this._quota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_schema: {
        value: schemaExternalSchemaToHclTerraform(this._externalSchema.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaExternalSchemaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
