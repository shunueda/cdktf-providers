// https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PbixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#id Pbix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the PBIX. This will be used as the name for the report and dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#name Pbix#name}
  */
  readonly name: string;
  /**
  * If set, will rebind the report to the the specified dataset ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#rebind_dataset_id Pbix#rebind_dataset_id}
  */
  readonly rebindDatasetId?: string;
  /**
  * If true, only the PBIX dataset is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#skip_report Pbix#skip_report}
  */
  readonly skipReport?: boolean | cdktf.IResolvable;
  /**
  * An absolute path to a PBIX file on the local system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#source Pbix#source}
  */
  readonly source: string;
  /**
  * Used to trigger updates. The only meaningful value is `${filemd5("path/to/file")}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#source_hash Pbix#source_hash}
  */
  readonly sourceHash?: string;
  /**
  * Workspace ID in which the PBIX will be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#workspace_id Pbix#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * datasource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#datasource Pbix#datasource}
  */
  readonly datasource?: PbixDatasource[] | cdktf.IResolvable;
  /**
  * parameter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#parameter Pbix#parameter}
  */
  readonly parameter?: PbixParameter[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#timeouts Pbix#timeouts}
  */
  readonly timeouts?: PbixTimeouts;
}
export interface PbixDatasource {
  /**
  * The database name, if applicable for the type of datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#database Pbix#database}
  */
  readonly database?: string;
  /**
  * The database name as configured in the PBIX, if applicable for the type of datasource This will be the value replaced with the value in the 'databsase' field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#original_database Pbix#original_database}
  */
  readonly originalDatabase?: string;
  /**
  * The server name as configured in the PBIX, if applicable for the type of datasource. This will be the value replaced with the value in the 'server' field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#original_server Pbix#original_server}
  */
  readonly originalServer?: string;
  /**
  * The service URL as configured in the PBIX, if applicable for the type of datasource. This will be the value replaced with the value in the 'url' field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#original_url Pbix#original_url}
  */
  readonly originalUrl?: string;
  /**
  * The server name, if applicable for the type of datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#server Pbix#server}
  */
  readonly server?: string;
  /**
  * The type of datasource. For example web, sql
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#type Pbix#type}
  */
  readonly type?: string;
  /**
  * The service URL, if applicable for the type of datasource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#url Pbix#url}
  */
  readonly url?: string;
}

export function pbixDatasourceToTerraform(struct?: PbixDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    original_database: cdktf.stringToTerraform(struct!.originalDatabase),
    original_server: cdktf.stringToTerraform(struct!.originalServer),
    original_url: cdktf.stringToTerraform(struct!.originalUrl),
    server: cdktf.stringToTerraform(struct!.server),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function pbixDatasourceToHclTerraform(struct?: PbixDatasource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_database: {
      value: cdktf.stringToHclTerraform(struct!.originalDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_server: {
      value: cdktf.stringToHclTerraform(struct!.originalServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_url: {
      value: cdktf.stringToHclTerraform(struct!.originalUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbixDatasourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbixDatasource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._originalDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalDatabase = this._originalDatabase;
    }
    if (this._originalServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalServer = this._originalServer;
    }
    if (this._originalUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalUrl = this._originalUrl;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbixDatasource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._originalDatabase = undefined;
      this._originalServer = undefined;
      this._originalUrl = undefined;
      this._server = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._originalDatabase = value.originalDatabase;
      this._originalServer = value.originalServer;
      this._originalUrl = value.originalUrl;
      this._server = value.server;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // original_database - computed: false, optional: true, required: false
  private _originalDatabase?: string; 
  public get originalDatabase() {
    return this.getStringAttribute('original_database');
  }
  public set originalDatabase(value: string) {
    this._originalDatabase = value;
  }
  public resetOriginalDatabase() {
    this._originalDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalDatabaseInput() {
    return this._originalDatabase;
  }

  // original_server - computed: false, optional: true, required: false
  private _originalServer?: string; 
  public get originalServer() {
    return this.getStringAttribute('original_server');
  }
  public set originalServer(value: string) {
    this._originalServer = value;
  }
  public resetOriginalServer() {
    this._originalServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalServerInput() {
    return this._originalServer;
  }

  // original_url - computed: false, optional: true, required: false
  private _originalUrl?: string; 
  public get originalUrl() {
    return this.getStringAttribute('original_url');
  }
  public set originalUrl(value: string) {
    this._originalUrl = value;
  }
  public resetOriginalUrl() {
    this._originalUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalUrlInput() {
    return this._originalUrl;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class PbixDatasourceList extends cdktf.ComplexList {
  public internalValue? : PbixDatasource[] | cdktf.IResolvable

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
  public get(index: number): PbixDatasourceOutputReference {
    return new PbixDatasourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbixParameter {
  /**
  * The parameter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#name Pbix#name}
  */
  readonly name: string;
  /**
  * The parameter value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#value Pbix#value}
  */
  readonly value: string;
}

export function pbixParameterToTerraform(struct?: PbixParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pbixParameterToHclTerraform(struct?: PbixParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbixParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PbixParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbixParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PbixParameterList extends cdktf.ComplexList {
  public internalValue? : PbixParameter[] | cdktf.IResolvable

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
  public get(index: number): PbixParameterOutputReference {
    return new PbixParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PbixTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#default Pbix#default}
  */
  readonly default?: string;
}

export function pbixTimeoutsToTerraform(struct?: PbixTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function pbixTimeoutsToHclTerraform(struct?: PbixTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PbixTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PbixTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PbixTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix powerbi_pbix}
*/
export class Pbix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerbi_pbix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pbix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pbix to import
  * @param importFromId The id of the existing Pbix that should be imported. Refer to the {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pbix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerbi_pbix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/codecutout/powerbi/1.4.1/docs/resources/pbix powerbi_pbix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PbixConfig
  */
  public constructor(scope: Construct, id: string, config: PbixConfig) {
    super(scope, id, {
      terraformResourceType: 'powerbi_pbix',
      terraformGeneratorMetadata: {
        providerName: 'powerbi',
        providerVersion: '1.4.1'
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
    this._rebindDatasetId = config.rebindDatasetId;
    this._skipReport = config.skipReport;
    this._source = config.source;
    this._sourceHash = config.sourceHash;
    this._workspaceId = config.workspaceId;
    this._datasource.internalValue = config.datasource;
    this._parameter.internalValue = config.parameter;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
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

  // rebind_dataset_id - computed: false, optional: true, required: false
  private _rebindDatasetId?: string; 
  public get rebindDatasetId() {
    return this.getStringAttribute('rebind_dataset_id');
  }
  public set rebindDatasetId(value: string) {
    this._rebindDatasetId = value;
  }
  public resetRebindDatasetId() {
    this._rebindDatasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebindDatasetIdInput() {
    return this._rebindDatasetId;
  }

  // report_id - computed: true, optional: false, required: false
  public get reportId() {
    return this.getStringAttribute('report_id');
  }

  // report_original_dataset_id - computed: true, optional: false, required: false
  public get reportOriginalDatasetId() {
    return this.getStringAttribute('report_original_dataset_id');
  }

  // skip_report - computed: false, optional: true, required: false
  private _skipReport?: boolean | cdktf.IResolvable; 
  public get skipReport() {
    return this.getBooleanAttribute('skip_report');
  }
  public set skipReport(value: boolean | cdktf.IResolvable) {
    this._skipReport = value;
  }
  public resetSkipReport() {
    this._skipReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipReportInput() {
    return this._skipReport;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_hash - computed: false, optional: true, required: false
  private _sourceHash?: string; 
  public get sourceHash() {
    return this.getStringAttribute('source_hash');
  }
  public set sourceHash(value: string) {
    this._sourceHash = value;
  }
  public resetSourceHash() {
    this._sourceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHashInput() {
    return this._sourceHash;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // datasource - computed: false, optional: true, required: false
  private _datasource = new PbixDatasourceList(this, "datasource", true);
  public get datasource() {
    return this._datasource;
  }
  public putDatasource(value: PbixDatasource[] | cdktf.IResolvable) {
    this._datasource.internalValue = value;
  }
  public resetDatasource() {
    this._datasource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new PbixParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: PbixParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PbixTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PbixTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rebind_dataset_id: cdktf.stringToTerraform(this._rebindDatasetId),
      skip_report: cdktf.booleanToTerraform(this._skipReport),
      source: cdktf.stringToTerraform(this._source),
      source_hash: cdktf.stringToTerraform(this._sourceHash),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      datasource: cdktf.listMapper(pbixDatasourceToTerraform, true)(this._datasource.internalValue),
      parameter: cdktf.listMapper(pbixParameterToTerraform, true)(this._parameter.internalValue),
      timeouts: pbixTimeoutsToTerraform(this._timeouts.internalValue),
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
      rebind_dataset_id: {
        value: cdktf.stringToHclTerraform(this._rebindDatasetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_report: {
        value: cdktf.booleanToHclTerraform(this._skipReport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_hash: {
        value: cdktf.stringToHclTerraform(this._sourceHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datasource: {
        value: cdktf.listMapperHcl(pbixDatasourceToHclTerraform, true)(this._datasource.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PbixDatasourceList",
      },
      parameter: {
        value: cdktf.listMapperHcl(pbixParameterToHclTerraform, true)(this._parameter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PbixParameterList",
      },
      timeouts: {
        value: pbixTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PbixTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
