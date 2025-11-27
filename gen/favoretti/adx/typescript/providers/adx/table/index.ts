// https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#database_name Table#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#docstring Table#docstring}
  */
  readonly docstring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#folder Table#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#id Table#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#merge_on_update Table#merge_on_update}
  */
  readonly mergeOnUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#name Table#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#table_schema Table#table_schema}
  */
  readonly tableSchema?: string;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#cluster Table#cluster}
  */
  readonly cluster?: TableCluster;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#column Table#column}
  */
  readonly column?: TableColumn[] | cdktf.IResolvable;
  /**
  * from_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#from_query Table#from_query}
  */
  readonly fromQuery?: TableFromQuery[] | cdktf.IResolvable;
}
export interface TableCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#client_id Table#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#client_secret Table#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#tenant_id Table#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#uri Table#uri}
  */
  readonly uri?: string;
}

export function tableClusterToTerraform(struct?: TableClusterOutputReference | TableCluster): any {
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


export function tableClusterToHclTerraform(struct?: TableClusterOutputReference | TableCluster): any {
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

export class TableClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TableCluster | undefined {
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

  public set internalValue(value: TableCluster | undefined) {
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
export interface TableColumn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#name Table#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#type Table#type}
  */
  readonly type: string;
}

export function tableColumnToTerraform(struct?: TableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tableColumnToHclTerraform(struct?: TableColumn | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TableColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class TableColumnList extends cdktf.ComplexList {
  public internalValue? : TableColumn[] | cdktf.IResolvable

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
  public get(index: number): TableColumnOutputReference {
    return new TableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TableFromQuery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#append Table#append}
  */
  readonly append: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#distributed Table#distributed}
  */
  readonly distributed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#extend_schema Table#extend_schema}
  */
  readonly extendSchema?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#force_an_update_when_value_changed Table#force_an_update_when_value_changed}
  */
  readonly forceAnUpdateWhenValueChanged?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#query Table#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#recreate_schema Table#recreate_schema}
  */
  readonly recreateSchema?: boolean | cdktf.IResolvable;
}

export function tableFromQueryToTerraform(struct?: TableFromQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    distributed: cdktf.booleanToTerraform(struct!.distributed),
    extend_schema: cdktf.booleanToTerraform(struct!.extendSchema),
    force_an_update_when_value_changed: cdktf.stringToTerraform(struct!.forceAnUpdateWhenValueChanged),
    query: cdktf.stringToTerraform(struct!.query),
    recreate_schema: cdktf.booleanToTerraform(struct!.recreateSchema),
  }
}


export function tableFromQueryToHclTerraform(struct?: TableFromQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distributed: {
      value: cdktf.booleanToHclTerraform(struct!.distributed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extend_schema: {
      value: cdktf.booleanToHclTerraform(struct!.extendSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_an_update_when_value_changed: {
      value: cdktf.stringToHclTerraform(struct!.forceAnUpdateWhenValueChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recreate_schema: {
      value: cdktf.booleanToHclTerraform(struct!.recreateSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TableFromQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TableFromQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._distributed !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributed = this._distributed;
    }
    if (this._extendSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendSchema = this._extendSchema;
    }
    if (this._forceAnUpdateWhenValueChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceAnUpdateWhenValueChanged = this._forceAnUpdateWhenValueChanged;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._recreateSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.recreateSchema = this._recreateSchema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TableFromQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._distributed = undefined;
      this._extendSchema = undefined;
      this._forceAnUpdateWhenValueChanged = undefined;
      this._query = undefined;
      this._recreateSchema = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._distributed = value.distributed;
      this._extendSchema = value.extendSchema;
      this._forceAnUpdateWhenValueChanged = value.forceAnUpdateWhenValueChanged;
      this._query = value.query;
      this._recreateSchema = value.recreateSchema;
    }
  }

  // append - computed: false, optional: false, required: true
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
  }

  // distributed - computed: false, optional: true, required: false
  private _distributed?: boolean | cdktf.IResolvable; 
  public get distributed() {
    return this.getBooleanAttribute('distributed');
  }
  public set distributed(value: boolean | cdktf.IResolvable) {
    this._distributed = value;
  }
  public resetDistributed() {
    this._distributed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedInput() {
    return this._distributed;
  }

  // extend_schema - computed: false, optional: true, required: false
  private _extendSchema?: boolean | cdktf.IResolvable; 
  public get extendSchema() {
    return this.getBooleanAttribute('extend_schema');
  }
  public set extendSchema(value: boolean | cdktf.IResolvable) {
    this._extendSchema = value;
  }
  public resetExtendSchema() {
    this._extendSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendSchemaInput() {
    return this._extendSchema;
  }

  // force_an_update_when_value_changed - computed: false, optional: true, required: false
  private _forceAnUpdateWhenValueChanged?: string; 
  public get forceAnUpdateWhenValueChanged() {
    return this.getStringAttribute('force_an_update_when_value_changed');
  }
  public set forceAnUpdateWhenValueChanged(value: string) {
    this._forceAnUpdateWhenValueChanged = value;
  }
  public resetForceAnUpdateWhenValueChanged() {
    this._forceAnUpdateWhenValueChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAnUpdateWhenValueChangedInput() {
    return this._forceAnUpdateWhenValueChanged;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // recreate_schema - computed: false, optional: true, required: false
  private _recreateSchema?: boolean | cdktf.IResolvable; 
  public get recreateSchema() {
    return this.getBooleanAttribute('recreate_schema');
  }
  public set recreateSchema(value: boolean | cdktf.IResolvable) {
    this._recreateSchema = value;
  }
  public resetRecreateSchema() {
    this._recreateSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recreateSchemaInput() {
    return this._recreateSchema;
  }
}

export class TableFromQueryList extends cdktf.ComplexList {
  public internalValue? : TableFromQuery[] | cdktf.IResolvable

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
  public get(index: number): TableFromQueryOutputReference {
    return new TableFromQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table adx_table}
*/
export class Table extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adx_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Table resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Table to import
  * @param importFromId The id of the existing Table that should be imported. Refer to the {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Table to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adx_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/favoretti/adx/0.0.35/docs/resources/table adx_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TableConfig
  */
  public constructor(scope: Construct, id: string, config: TableConfig) {
    super(scope, id, {
      terraformResourceType: 'adx_table',
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
    this._databaseName = config.databaseName;
    this._docstring = config.docstring;
    this._folder = config.folder;
    this._id = config.id;
    this._mergeOnUpdate = config.mergeOnUpdate;
    this._name = config.name;
    this._tableSchema = config.tableSchema;
    this._cluster.internalValue = config.cluster;
    this._column.internalValue = config.column;
    this._fromQuery.internalValue = config.fromQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // docstring - computed: false, optional: true, required: false
  private _docstring?: string; 
  public get docstring() {
    return this.getStringAttribute('docstring');
  }
  public set docstring(value: string) {
    this._docstring = value;
  }
  public resetDocstring() {
    this._docstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docstringInput() {
    return this._docstring;
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

  // merge_on_update - computed: false, optional: true, required: false
  private _mergeOnUpdate?: boolean | cdktf.IResolvable; 
  public get mergeOnUpdate() {
    return this.getBooleanAttribute('merge_on_update');
  }
  public set mergeOnUpdate(value: boolean | cdktf.IResolvable) {
    this._mergeOnUpdate = value;
  }
  public resetMergeOnUpdate() {
    this._mergeOnUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeOnUpdateInput() {
    return this._mergeOnUpdate;
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

  // table_schema - computed: true, optional: true, required: false
  private _tableSchema?: string; 
  public get tableSchema() {
    return this.getStringAttribute('table_schema');
  }
  public set tableSchema(value: string) {
    this._tableSchema = value;
  }
  public resetTableSchema() {
    this._tableSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableSchemaInput() {
    return this._tableSchema;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new TableClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: TableCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // column - computed: false, optional: true, required: false
  private _column = new TableColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: TableColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }

  // from_query - computed: false, optional: true, required: false
  private _fromQuery = new TableFromQueryList(this, "from_query", false);
  public get fromQuery() {
    return this._fromQuery;
  }
  public putFromQuery(value: TableFromQuery[] | cdktf.IResolvable) {
    this._fromQuery.internalValue = value;
  }
  public resetFromQuery() {
    this._fromQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromQueryInput() {
    return this._fromQuery.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      docstring: cdktf.stringToTerraform(this._docstring),
      folder: cdktf.stringToTerraform(this._folder),
      id: cdktf.stringToTerraform(this._id),
      merge_on_update: cdktf.booleanToTerraform(this._mergeOnUpdate),
      name: cdktf.stringToTerraform(this._name),
      table_schema: cdktf.stringToTerraform(this._tableSchema),
      cluster: tableClusterToTerraform(this._cluster.internalValue),
      column: cdktf.listMapper(tableColumnToTerraform, true)(this._column.internalValue),
      from_query: cdktf.listMapper(tableFromQueryToTerraform, true)(this._fromQuery.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docstring: {
        value: cdktf.stringToHclTerraform(this._docstring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      merge_on_update: {
        value: cdktf.booleanToHclTerraform(this._mergeOnUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_schema: {
        value: cdktf.stringToHclTerraform(this._tableSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: tableClusterToHclTerraform(this._cluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableClusterList",
      },
      column: {
        value: cdktf.listMapperHcl(tableColumnToHclTerraform, true)(this._column.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableColumnList",
      },
      from_query: {
        value: cdktf.listMapperHcl(tableFromQueryToHclTerraform, true)(this._fromQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TableFromQueryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
