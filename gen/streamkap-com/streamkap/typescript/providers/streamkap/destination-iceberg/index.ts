// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationIcebergConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS Access Key ID used to connect to S3. Required for rest and hive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#aws_access_key DestinationIceberg#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * AWS IAM role (e.g., arn:aws:iam:::role/). Required for glue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#aws_iam_role DestinationIceberg#aws_iam_role}
  */
  readonly awsIamRole?: string;
  /**
  * The AWS region to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#aws_region DestinationIceberg#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The AWS Secret Access Key used to connect to Iceberg. Required for rest and hive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#aws_secret_key DestinationIceberg#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * The S3 Bucket path to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#bucket_path DestinationIceberg#bucket_path}
  */
  readonly bucketPath: string;
  /**
  * Iceberg catalog name. Required for rest and hive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#catalog_name DestinationIceberg#catalog_name}
  */
  readonly catalogName?: string;
  /**
  * Type of Iceberg catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#catalog_type DestinationIceberg#catalog_type}
  */
  readonly catalogType?: string;
  /**
  * Iceberg catalog uri. Required for rest and hive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#catalog_uri DestinationIceberg#catalog_uri}
  */
  readonly catalogUri?: string;
  /**
  * Specifies the strategy used to insert events into the database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#insert_mode DestinationIceberg#insert_mode}
  */
  readonly insertMode?: string;
  /**
  * Destination name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#name DestinationIceberg#name}
  */
  readonly name: string;
  /**
  * Optional (upsert). A comma-separated list of field names to use as record identifiers when key fields are not present in Kafka messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#primary_key_fields DestinationIceberg#primary_key_fields}
  */
  readonly primaryKeyFields?: string;
  /**
  * Name of the database schema that contains the table (e.g., public, sales, analytics)..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#schema DestinationIceberg#schema}
  */
  readonly schema: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg streamkap_destination_iceberg}
*/
export class DestinationIceberg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_destination_iceberg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationIceberg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationIceberg to import
  * @param importFromId The id of the existing DestinationIceberg that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationIceberg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_destination_iceberg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.17/docs/resources/destination_iceberg streamkap_destination_iceberg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationIcebergConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationIcebergConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_destination_iceberg',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.17',
        providerVersionConstraint: '2.1.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccessKey = config.awsAccessKey;
    this._awsIamRole = config.awsIamRole;
    this._awsRegion = config.awsRegion;
    this._awsSecretKey = config.awsSecretKey;
    this._bucketPath = config.bucketPath;
    this._catalogName = config.catalogName;
    this._catalogType = config.catalogType;
    this._catalogUri = config.catalogUri;
    this._insertMode = config.insertMode;
    this._name = config.name;
    this._primaryKeyFields = config.primaryKeyFields;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_iam_role - computed: false, optional: true, required: false
  private _awsIamRole?: string; 
  public get awsIamRole() {
    return this.getStringAttribute('aws_iam_role');
  }
  public set awsIamRole(value: string) {
    this._awsIamRole = value;
  }
  public resetAwsIamRole() {
    this._awsIamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleInput() {
    return this._awsIamRole;
  }

  // aws_region - computed: true, optional: true, required: false
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

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // bucket_path - computed: false, optional: false, required: true
  private _bucketPath?: string; 
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
  public set bucketPath(value: string) {
    this._bucketPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathInput() {
    return this._bucketPath;
  }

  // catalog_name - computed: false, optional: true, required: false
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  public resetCatalogName() {
    this._catalogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // catalog_type - computed: true, optional: true, required: false
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  public resetCatalogType() {
    this._catalogType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // catalog_uri - computed: false, optional: true, required: false
  private _catalogUri?: string; 
  public get catalogUri() {
    return this.getStringAttribute('catalog_uri');
  }
  public set catalogUri(value: string) {
    this._catalogUri = value;
  }
  public resetCatalogUri() {
    this._catalogUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogUriInput() {
    return this._catalogUri;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insert_mode - computed: true, optional: true, required: false
  private _insertMode?: string; 
  public get insertMode() {
    return this.getStringAttribute('insert_mode');
  }
  public set insertMode(value: string) {
    this._insertMode = value;
  }
  public resetInsertMode() {
    this._insertMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertModeInput() {
    return this._insertMode;
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

  // primary_key_fields - computed: true, optional: true, required: false
  private _primaryKeyFields?: string; 
  public get primaryKeyFields() {
    return this.getStringAttribute('primary_key_fields');
  }
  public set primaryKeyFields(value: string) {
    this._primaryKeyFields = value;
  }
  public resetPrimaryKeyFields() {
    this._primaryKeyFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyFieldsInput() {
    return this._primaryKeyFields;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_iam_role: cdktf.stringToTerraform(this._awsIamRole),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      bucket_path: cdktf.stringToTerraform(this._bucketPath),
      catalog_name: cdktf.stringToTerraform(this._catalogName),
      catalog_type: cdktf.stringToTerraform(this._catalogType),
      catalog_uri: cdktf.stringToTerraform(this._catalogUri),
      insert_mode: cdktf.stringToTerraform(this._insertMode),
      name: cdktf.stringToTerraform(this._name),
      primary_key_fields: cdktf.stringToTerraform(this._primaryKeyFields),
      schema: cdktf.stringToTerraform(this._schema),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_iam_role: {
        value: cdktf.stringToHclTerraform(this._awsIamRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_path: {
        value: cdktf.stringToHclTerraform(this._bucketPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_name: {
        value: cdktf.stringToHclTerraform(this._catalogName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_type: {
        value: cdktf.stringToHclTerraform(this._catalogType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_uri: {
        value: cdktf.stringToHclTerraform(this._catalogUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_mode: {
        value: cdktf.stringToHclTerraform(this._insertMode),
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
      primary_key_fields: {
        value: cdktf.stringToHclTerraform(this._primaryKeyFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
