// https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceMongodbConfig extends cdktf.TerraformMetaArguments {
  /**
  * How to encode arrays. 'Array' encodes them as Array objects but requires all values in the array to be of the same type. 'Array_String' encodes them as JSON Strings and should be used if arrays have mixed types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#array_encoding SourceMongodb#array_encoding}
  */
  readonly arrayEncoding?: string;
  /**
  * Source collections to sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#collection_include_list SourceMongodb#collection_include_list}
  */
  readonly collectionIncludeList: string;
  /**
  * Source databases to sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#database_include_list SourceMongodb#database_include_list}
  */
  readonly databaseIncludeList: string;
  /**
  * The name of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#insert_static_key_field_1 SourceMongodb#insert_static_key_field_1}
  */
  readonly insertStaticKeyField1?: string;
  /**
  * The name of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#insert_static_key_field_2 SourceMongodb#insert_static_key_field_2}
  */
  readonly insertStaticKeyField2?: string;
  /**
  * The value of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#insert_static_key_value_1 SourceMongodb#insert_static_key_value_1}
  */
  readonly insertStaticKeyValue1?: string;
  /**
  * The value of the static field to be added to the message key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#insert_static_key_value_2 SourceMongodb#insert_static_key_value_2}
  */
  readonly insertStaticKeyValue2?: string;
  /**
  * The value of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#insert_static_value_1 SourceMongodb#insert_static_value_1}
  */
  readonly insertStaticValue1?: string;
  /**
  * The value of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#insert_static_value_2 SourceMongodb#insert_static_value_2}
  */
  readonly insertStaticValue2?: string;
  /**
  * The name of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#insert_static_value_field_1 SourceMongodb#insert_static_value_field_1}
  */
  readonly insertStaticValueField1?: string;
  /**
  * The name of the static field to be added to the message value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#insert_static_value_field_2 SourceMongodb#insert_static_value_field_2}
  */
  readonly insertStaticValueField2?: string;
  /**
  * Mongodb Connection String. See Mongodb documentation for further details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#mongodb_connection_string SourceMongodb#mongodb_connection_string}
  */
  readonly mongodbConnectionString: string;
  /**
  * Source name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#name SourceMongodb#name}
  */
  readonly name: string;
  /**
  * How to encode nested documents. 'Document' encodes them as JSON Objects, 'String' encodes them as JSON Strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#nested_document_encoding SourceMongodb#nested_document_encoding}
  */
  readonly nestedDocumentEncoding?: string;
  /**
  * Regex pattern to match topics for enrichment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#predicates_istopictoenrich_pattern SourceMongodb#predicates_istopictoenrich_pattern}
  */
  readonly predicatesIstopictoenrichPattern?: string;
  /**
  * Streamkap will use a collection in this database to monitor incremental snapshotting. Follow the instructions in the documentation for creating this collection and specify which database to use here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#signal_data_collection_schema_or_database SourceMongodb#signal_data_collection_schema_or_database}
  */
  readonly signalDataCollectionSchemaOrDatabase: string;
  /**
  * Connect via SSH tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#ssh_enabled SourceMongodb#ssh_enabled}
  */
  readonly sshEnabled?: boolean | cdktf.IResolvable;
  /**
  * Hostname of the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#ssh_host SourceMongodb#ssh_host}
  */
  readonly sshHost?: string;
  /**
  * Port of the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#ssh_port SourceMongodb#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * User for connecting to the SSH server, only required if `ssh_enabled` is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#ssh_user SourceMongodb#ssh_user}
  */
  readonly sshUser?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb streamkap_source_mongodb}
*/
export class SourceMongodb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "streamkap_source_mongodb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceMongodb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceMongodb to import
  * @param importFromId The id of the existing SourceMongodb that should be imported. Refer to the {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceMongodb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "streamkap_source_mongodb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/streamkap-com/streamkap/2.1.16/docs/resources/source_mongodb streamkap_source_mongodb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceMongodbConfig
  */
  public constructor(scope: Construct, id: string, config: SourceMongodbConfig) {
    super(scope, id, {
      terraformResourceType: 'streamkap_source_mongodb',
      terraformGeneratorMetadata: {
        providerName: 'streamkap',
        providerVersion: '2.1.16',
        providerVersionConstraint: '2.1.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arrayEncoding = config.arrayEncoding;
    this._collectionIncludeList = config.collectionIncludeList;
    this._databaseIncludeList = config.databaseIncludeList;
    this._insertStaticKeyField1 = config.insertStaticKeyField1;
    this._insertStaticKeyField2 = config.insertStaticKeyField2;
    this._insertStaticKeyValue1 = config.insertStaticKeyValue1;
    this._insertStaticKeyValue2 = config.insertStaticKeyValue2;
    this._insertStaticValue1 = config.insertStaticValue1;
    this._insertStaticValue2 = config.insertStaticValue2;
    this._insertStaticValueField1 = config.insertStaticValueField1;
    this._insertStaticValueField2 = config.insertStaticValueField2;
    this._mongodbConnectionString = config.mongodbConnectionString;
    this._name = config.name;
    this._nestedDocumentEncoding = config.nestedDocumentEncoding;
    this._predicatesIstopictoenrichPattern = config.predicatesIstopictoenrichPattern;
    this._signalDataCollectionSchemaOrDatabase = config.signalDataCollectionSchemaOrDatabase;
    this._sshEnabled = config.sshEnabled;
    this._sshHost = config.sshHost;
    this._sshPort = config.sshPort;
    this._sshUser = config.sshUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // array_encoding - computed: true, optional: true, required: false
  private _arrayEncoding?: string; 
  public get arrayEncoding() {
    return this.getStringAttribute('array_encoding');
  }
  public set arrayEncoding(value: string) {
    this._arrayEncoding = value;
  }
  public resetArrayEncoding() {
    this._arrayEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayEncodingInput() {
    return this._arrayEncoding;
  }

  // collection_include_list - computed: false, optional: false, required: true
  private _collectionIncludeList?: string; 
  public get collectionIncludeList() {
    return this.getStringAttribute('collection_include_list');
  }
  public set collectionIncludeList(value: string) {
    this._collectionIncludeList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIncludeListInput() {
    return this._collectionIncludeList;
  }

  // connector - computed: true, optional: false, required: false
  public get connector() {
    return this.getStringAttribute('connector');
  }

  // database_include_list - computed: false, optional: false, required: true
  private _databaseIncludeList?: string; 
  public get databaseIncludeList() {
    return this.getStringAttribute('database_include_list');
  }
  public set databaseIncludeList(value: string) {
    this._databaseIncludeList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIncludeListInput() {
    return this._databaseIncludeList;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // insert_static_key_field_1 - computed: true, optional: true, required: false
  private _insertStaticKeyField1?: string; 
  public get insertStaticKeyField1() {
    return this.getStringAttribute('insert_static_key_field_1');
  }
  public set insertStaticKeyField1(value: string) {
    this._insertStaticKeyField1 = value;
  }
  public resetInsertStaticKeyField1() {
    this._insertStaticKeyField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyField1Input() {
    return this._insertStaticKeyField1;
  }

  // insert_static_key_field_2 - computed: true, optional: true, required: false
  private _insertStaticKeyField2?: string; 
  public get insertStaticKeyField2() {
    return this.getStringAttribute('insert_static_key_field_2');
  }
  public set insertStaticKeyField2(value: string) {
    this._insertStaticKeyField2 = value;
  }
  public resetInsertStaticKeyField2() {
    this._insertStaticKeyField2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyField2Input() {
    return this._insertStaticKeyField2;
  }

  // insert_static_key_value_1 - computed: true, optional: true, required: false
  private _insertStaticKeyValue1?: string; 
  public get insertStaticKeyValue1() {
    return this.getStringAttribute('insert_static_key_value_1');
  }
  public set insertStaticKeyValue1(value: string) {
    this._insertStaticKeyValue1 = value;
  }
  public resetInsertStaticKeyValue1() {
    this._insertStaticKeyValue1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyValue1Input() {
    return this._insertStaticKeyValue1;
  }

  // insert_static_key_value_2 - computed: true, optional: true, required: false
  private _insertStaticKeyValue2?: string; 
  public get insertStaticKeyValue2() {
    return this.getStringAttribute('insert_static_key_value_2');
  }
  public set insertStaticKeyValue2(value: string) {
    this._insertStaticKeyValue2 = value;
  }
  public resetInsertStaticKeyValue2() {
    this._insertStaticKeyValue2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticKeyValue2Input() {
    return this._insertStaticKeyValue2;
  }

  // insert_static_value_1 - computed: true, optional: true, required: false
  private _insertStaticValue1?: string; 
  public get insertStaticValue1() {
    return this.getStringAttribute('insert_static_value_1');
  }
  public set insertStaticValue1(value: string) {
    this._insertStaticValue1 = value;
  }
  public resetInsertStaticValue1() {
    this._insertStaticValue1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValue1Input() {
    return this._insertStaticValue1;
  }

  // insert_static_value_2 - computed: true, optional: true, required: false
  private _insertStaticValue2?: string; 
  public get insertStaticValue2() {
    return this.getStringAttribute('insert_static_value_2');
  }
  public set insertStaticValue2(value: string) {
    this._insertStaticValue2 = value;
  }
  public resetInsertStaticValue2() {
    this._insertStaticValue2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValue2Input() {
    return this._insertStaticValue2;
  }

  // insert_static_value_field_1 - computed: true, optional: true, required: false
  private _insertStaticValueField1?: string; 
  public get insertStaticValueField1() {
    return this.getStringAttribute('insert_static_value_field_1');
  }
  public set insertStaticValueField1(value: string) {
    this._insertStaticValueField1 = value;
  }
  public resetInsertStaticValueField1() {
    this._insertStaticValueField1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValueField1Input() {
    return this._insertStaticValueField1;
  }

  // insert_static_value_field_2 - computed: true, optional: true, required: false
  private _insertStaticValueField2?: string; 
  public get insertStaticValueField2() {
    return this.getStringAttribute('insert_static_value_field_2');
  }
  public set insertStaticValueField2(value: string) {
    this._insertStaticValueField2 = value;
  }
  public resetInsertStaticValueField2() {
    this._insertStaticValueField2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertStaticValueField2Input() {
    return this._insertStaticValueField2;
  }

  // mongodb_connection_string - computed: false, optional: false, required: true
  private _mongodbConnectionString?: string; 
  public get mongodbConnectionString() {
    return this.getStringAttribute('mongodb_connection_string');
  }
  public set mongodbConnectionString(value: string) {
    this._mongodbConnectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbConnectionStringInput() {
    return this._mongodbConnectionString;
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

  // nested_document_encoding - computed: true, optional: true, required: false
  private _nestedDocumentEncoding?: string; 
  public get nestedDocumentEncoding() {
    return this.getStringAttribute('nested_document_encoding');
  }
  public set nestedDocumentEncoding(value: string) {
    this._nestedDocumentEncoding = value;
  }
  public resetNestedDocumentEncoding() {
    this._nestedDocumentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedDocumentEncodingInput() {
    return this._nestedDocumentEncoding;
  }

  // predicates_istopictoenrich_pattern - computed: true, optional: true, required: false
  private _predicatesIstopictoenrichPattern?: string; 
  public get predicatesIstopictoenrichPattern() {
    return this.getStringAttribute('predicates_istopictoenrich_pattern');
  }
  public set predicatesIstopictoenrichPattern(value: string) {
    this._predicatesIstopictoenrichPattern = value;
  }
  public resetPredicatesIstopictoenrichPattern() {
    this._predicatesIstopictoenrichPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicatesIstopictoenrichPatternInput() {
    return this._predicatesIstopictoenrichPattern;
  }

  // signal_data_collection_schema_or_database - computed: false, optional: false, required: true
  private _signalDataCollectionSchemaOrDatabase?: string; 
  public get signalDataCollectionSchemaOrDatabase() {
    return this.getStringAttribute('signal_data_collection_schema_or_database');
  }
  public set signalDataCollectionSchemaOrDatabase(value: string) {
    this._signalDataCollectionSchemaOrDatabase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signalDataCollectionSchemaOrDatabaseInput() {
    return this._signalDataCollectionSchemaOrDatabase;
  }

  // ssh_enabled - computed: true, optional: true, required: false
  private _sshEnabled?: boolean | cdktf.IResolvable; 
  public get sshEnabled() {
    return this.getBooleanAttribute('ssh_enabled');
  }
  public set sshEnabled(value: boolean | cdktf.IResolvable) {
    this._sshEnabled = value;
  }
  public resetSshEnabled() {
    this._sshEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshEnabledInput() {
    return this._sshEnabled;
  }

  // ssh_host - computed: false, optional: true, required: false
  private _sshHost?: string; 
  public get sshHost() {
    return this.getStringAttribute('ssh_host');
  }
  public set sshHost(value: string) {
    this._sshHost = value;
  }
  public resetSshHost() {
    this._sshHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostInput() {
    return this._sshHost;
  }

  // ssh_port - computed: true, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // ssh_user - computed: true, optional: true, required: false
  private _sshUser?: string; 
  public get sshUser() {
    return this.getStringAttribute('ssh_user');
  }
  public set sshUser(value: string) {
    this._sshUser = value;
  }
  public resetSshUser() {
    this._sshUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserInput() {
    return this._sshUser;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      array_encoding: cdktf.stringToTerraform(this._arrayEncoding),
      collection_include_list: cdktf.stringToTerraform(this._collectionIncludeList),
      database_include_list: cdktf.stringToTerraform(this._databaseIncludeList),
      insert_static_key_field_1: cdktf.stringToTerraform(this._insertStaticKeyField1),
      insert_static_key_field_2: cdktf.stringToTerraform(this._insertStaticKeyField2),
      insert_static_key_value_1: cdktf.stringToTerraform(this._insertStaticKeyValue1),
      insert_static_key_value_2: cdktf.stringToTerraform(this._insertStaticKeyValue2),
      insert_static_value_1: cdktf.stringToTerraform(this._insertStaticValue1),
      insert_static_value_2: cdktf.stringToTerraform(this._insertStaticValue2),
      insert_static_value_field_1: cdktf.stringToTerraform(this._insertStaticValueField1),
      insert_static_value_field_2: cdktf.stringToTerraform(this._insertStaticValueField2),
      mongodb_connection_string: cdktf.stringToTerraform(this._mongodbConnectionString),
      name: cdktf.stringToTerraform(this._name),
      nested_document_encoding: cdktf.stringToTerraform(this._nestedDocumentEncoding),
      predicates_istopictoenrich_pattern: cdktf.stringToTerraform(this._predicatesIstopictoenrichPattern),
      signal_data_collection_schema_or_database: cdktf.stringToTerraform(this._signalDataCollectionSchemaOrDatabase),
      ssh_enabled: cdktf.booleanToTerraform(this._sshEnabled),
      ssh_host: cdktf.stringToTerraform(this._sshHost),
      ssh_port: cdktf.stringToTerraform(this._sshPort),
      ssh_user: cdktf.stringToTerraform(this._sshUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      array_encoding: {
        value: cdktf.stringToHclTerraform(this._arrayEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_include_list: {
        value: cdktf.stringToHclTerraform(this._collectionIncludeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_include_list: {
        value: cdktf.stringToHclTerraform(this._databaseIncludeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_key_field_1: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_key_field_2: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyField2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_key_value_1: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyValue1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_key_value_2: {
        value: cdktf.stringToHclTerraform(this._insertStaticKeyValue2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_1: {
        value: cdktf.stringToHclTerraform(this._insertStaticValue1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_2: {
        value: cdktf.stringToHclTerraform(this._insertStaticValue2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_field_1: {
        value: cdktf.stringToHclTerraform(this._insertStaticValueField1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_static_value_field_2: {
        value: cdktf.stringToHclTerraform(this._insertStaticValueField2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_connection_string: {
        value: cdktf.stringToHclTerraform(this._mongodbConnectionString),
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
      nested_document_encoding: {
        value: cdktf.stringToHclTerraform(this._nestedDocumentEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      predicates_istopictoenrich_pattern: {
        value: cdktf.stringToHclTerraform(this._predicatesIstopictoenrichPattern),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_data_collection_schema_or_database: {
        value: cdktf.stringToHclTerraform(this._signalDataCollectionSchemaOrDatabase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_enabled: {
        value: cdktf.booleanToHclTerraform(this._sshEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_host: {
        value: cdktf.stringToHclTerraform(this._sshHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_port: {
        value: cdktf.stringToHclTerraform(this._sshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_user: {
        value: cdktf.stringToHclTerraform(this._sshUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
