// https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#compressed ExternalTable#compressed}
  */
  readonly compressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#data_format ExternalTable#data_format}
  */
  readonly dataFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#database_name ExternalTable#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#doc_string ExternalTable#doc_string}
  */
  readonly docString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#dry_run ExternalTable#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#encoding ExternalTable#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#file_extension ExternalTable#file_extension}
  */
  readonly fileExtension?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#files_preview ExternalTable#files_preview}
  */
  readonly filesPreview?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#folder ExternalTable#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#id ExternalTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#include_headers ExternalTable#include_headers}
  */
  readonly includeHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#kind ExternalTable#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#name ExternalTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#name_prefix ExternalTable#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#partitions ExternalTable#partitions}
  */
  readonly partitions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#path_format ExternalTable#path_format}
  */
  readonly pathFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#sample_uris ExternalTable#sample_uris}
  */
  readonly sampleUris?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#schema ExternalTable#schema}
  */
  readonly schema: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#storage_connection_string ExternalTable#storage_connection_string}
  */
  readonly storageConnectionString: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#validate_not_empty ExternalTable#validate_not_empty}
  */
  readonly validateNotEmpty?: boolean | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#cluster ExternalTable#cluster}
  */
  readonly cluster?: ExternalTableCluster;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#timeouts ExternalTable#timeouts}
  */
  readonly timeouts?: ExternalTableTimeouts;
}
export interface ExternalTableCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#client_id ExternalTable#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#client_secret ExternalTable#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#tenant_id ExternalTable#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#uri ExternalTable#uri}
  */
  readonly uri?: string;
}

export function externalTableClusterToTerraform(struct?: ExternalTableClusterOutputReference | ExternalTableCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function externalTableClusterToHclTerraform(struct?: ExternalTableClusterOutputReference | ExternalTableCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ExternalTableClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ExternalTableCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalTableCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tenantId = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tenantId = value.tenantId;
      this._uri = value.uri;
    }
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface ExternalTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#create ExternalTable#create}
  */
  readonly create?: string;
}

export function externalTableTimeoutsToTerraform(struct?: ExternalTableTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function externalTableTimeoutsToHclTerraform(struct?: ExternalTableTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ExternalTableTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalTableTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table adx_external_table}
*/
export class ExternalTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adx_external_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalTable to import
  * @param importFromId The id of the existing ExternalTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adx_external_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/external_table adx_external_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalTableConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalTableConfig) {
    super(scope, id, {
      terraformResourceType: 'adx_external_table',
      terraformGeneratorMetadata: {
        providerName: 'adx',
        providerVersion: '0.0.35',
        providerVersionConstraint: '0.0.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compressed = config.compressed;
    this._dataFormat = config.dataFormat;
    this._databaseName = config.databaseName;
    this._docString = config.docString;
    this._dryRun = config.dryRun;
    this._encoding = config.encoding;
    this._fileExtension = config.fileExtension;
    this._filesPreview = config.filesPreview;
    this._folder = config.folder;
    this._id = config.id;
    this._includeHeaders = config.includeHeaders;
    this._kind = config.kind;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._partitions = config.partitions;
    this._pathFormat = config.pathFormat;
    this._sampleUris = config.sampleUris;
    this._schema = config.schema;
    this._storageConnectionString = config.storageConnectionString;
    this._validateNotEmpty = config.validateNotEmpty;
    this._cluster.internalValue = config.cluster;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktf.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }
  public set compressed(value: boolean | cdktf.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // data_format - computed: false, optional: false, required: true
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
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

  // doc_string - computed: false, optional: true, required: false
  private _docString?: string; 
  public get docString() {
    return this.getStringAttribute('doc_string');
  }
  public set docString(value: string) {
    this._docString = value;
  }
  public resetDocString() {
    this._docString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docStringInput() {
    return this._docString;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // file_extension - computed: false, optional: true, required: false
  private _fileExtension?: string; 
  public get fileExtension() {
    return this.getStringAttribute('file_extension');
  }
  public set fileExtension(value: string) {
    this._fileExtension = value;
  }
  public resetFileExtension() {
    this._fileExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionInput() {
    return this._fileExtension;
  }

  // files_preview - computed: false, optional: true, required: false
  private _filesPreview?: boolean | cdktf.IResolvable; 
  public get filesPreview() {
    return this.getBooleanAttribute('files_preview');
  }
  public set filesPreview(value: boolean | cdktf.IResolvable) {
    this._filesPreview = value;
  }
  public resetFilesPreview() {
    this._filesPreview = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesPreviewInput() {
    return this._filesPreview;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // include_headers - computed: false, optional: true, required: false
  private _includeHeaders?: string; 
  public get includeHeaders() {
    return this.getStringAttribute('include_headers');
  }
  public set includeHeaders(value: string) {
    this._includeHeaders = value;
  }
  public resetIncludeHeaders() {
    this._includeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersInput() {
    return this._includeHeaders;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions?: string; 
  public get partitions() {
    return this.getStringAttribute('partitions');
  }
  public set partitions(value: string) {
    this._partitions = value;
  }
  public resetPartitions() {
    this._partitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }

  // path_format - computed: false, optional: true, required: false
  private _pathFormat?: string; 
  public get pathFormat() {
    return this.getStringAttribute('path_format');
  }
  public set pathFormat(value: string) {
    this._pathFormat = value;
  }
  public resetPathFormat() {
    this._pathFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFormatInput() {
    return this._pathFormat;
  }

  // sample_uris - computed: false, optional: true, required: false
  private _sampleUris?: boolean | cdktf.IResolvable; 
  public get sampleUris() {
    return this.getBooleanAttribute('sample_uris');
  }
  public set sampleUris(value: boolean | cdktf.IResolvable) {
    this._sampleUris = value;
  }
  public resetSampleUris() {
    this._sampleUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleUrisInput() {
    return this._sampleUris;
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

  // storage_connection_string - computed: false, optional: false, required: true
  private _storageConnectionString?: string; 
  public get storageConnectionString() {
    return this.getStringAttribute('storage_connection_string');
  }
  public set storageConnectionString(value: string) {
    this._storageConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConnectionStringInput() {
    return this._storageConnectionString;
  }

  // validate_not_empty - computed: false, optional: true, required: false
  private _validateNotEmpty?: boolean | cdktf.IResolvable; 
  public get validateNotEmpty() {
    return this.getBooleanAttribute('validate_not_empty');
  }
  public set validateNotEmpty(value: boolean | cdktf.IResolvable) {
    this._validateNotEmpty = value;
  }
  public resetValidateNotEmpty() {
    this._validateNotEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateNotEmptyInput() {
    return this._validateNotEmpty;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new ExternalTableClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: ExternalTableCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ExternalTableTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ExternalTableTimeouts) {
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
      compressed: cdktf.booleanToTerraform(this._compressed),
      data_format: cdktf.stringToTerraform(this._dataFormat),
      database_name: cdktf.stringToTerraform(this._databaseName),
      doc_string: cdktf.stringToTerraform(this._docString),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      encoding: cdktf.stringToTerraform(this._encoding),
      file_extension: cdktf.stringToTerraform(this._fileExtension),
      files_preview: cdktf.booleanToTerraform(this._filesPreview),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      include_headers: cdktf.stringToTerraform(this._includeHeaders),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      partitions: cdktf.stringToTerraform(this._partitions),
      path_format: cdktf.stringToTerraform(this._pathFormat),
      sample_uris: cdktf.booleanToTerraform(this._sampleUris),
      schema: cdktf.stringToTerraform(this._schema),
      storage_connection_string: cdktf.stringToTerraform(this._storageConnectionString),
      validate_not_empty: cdktf.booleanToTerraform(this._validateNotEmpty),
      cluster: externalTableClusterToTerraform(this._cluster.internalValue),
      timeouts: externalTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compressed: {
        value: cdktf.booleanToHclTerraform(this._compressed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_format: {
        value: cdktf.stringToHclTerraform(this._dataFormat),
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
      doc_string: {
        value: cdktf.stringToHclTerraform(this._docString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encoding: {
        value: cdktf.stringToHclTerraform(this._encoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_extension: {
        value: cdktf.stringToHclTerraform(this._fileExtension),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      files_preview: {
        value: cdktf.booleanToHclTerraform(this._filesPreview),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      include_headers: {
        value: cdktf.stringToHclTerraform(this._includeHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      name_prefix: {
        value: cdktf.stringToHclTerraform(this._namePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partitions: {
        value: cdktf.stringToHclTerraform(this._partitions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_format: {
        value: cdktf.stringToHclTerraform(this._pathFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_uris: {
        value: cdktf.booleanToHclTerraform(this._sampleUris),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_connection_string: {
        value: cdktf.stringToHclTerraform(this._storageConnectionString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_not_empty: {
        value: cdktf.booleanToHclTerraform(this._validateNotEmpty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster: {
        value: externalTableClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalTableClusterList",
      },
      timeouts: {
        value: externalTableTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ExternalTableTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
