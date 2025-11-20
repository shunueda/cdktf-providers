// https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorSchemaConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the connector within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#connector_id ConnectorSchemaConfig#connector_id}
  */
  readonly connectorId?: string;
  /**
  * The name used both as the connection's name within the Fivetran system and as the source schema's name within your destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#connector_name ConnectorSchemaConfig#connector_name}
  */
  readonly connectorName?: string;
  /**
  * The unique identifier for the Group (Destination) within the Fivetran system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#group_id ConnectorSchemaConfig#group_id}
  */
  readonly groupId?: string;
  /**
  * The value specifying how new source data is handled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#schema_change_handling ConnectorSchemaConfig#schema_change_handling}
  */
  readonly schemaChangeHandling?: string;
  /**
  * Map of schema configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#schemas ConnectorSchemaConfig#schemas}
  */
  readonly schemas?: { [key: string]: ConnectorSchemaConfigSchemas } | cdktf.IResolvable;
  /**
  * Schema settings in Json format, following Fivetran API endpoint contract for `schemas` field (a map of schemas).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#schemas_json ConnectorSchemaConfig#schemas_json}
  */
  readonly schemasJson?: string;
  /**
  * 
  * The value defines validation method. 
  * - NONE: no validation, any configuration accepted. 
  * - TABLES: validate table names, fail on attempt to configure non-existing schemas/tables.
  * - COLUMNS: validate the whole schema config including column names. The resource will try to fetch columns for every configured table and verify column names.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#validation_level ConnectorSchemaConfig#validation_level}
  */
  readonly validationLevel?: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#schema ConnectorSchemaConfig#schema}
  */
  readonly schema?: ConnectorSchemaConfigSchema[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#timeouts ConnectorSchemaConfig#timeouts}
  */
  readonly timeouts?: ConnectorSchemaConfigTimeouts;
}
export interface ConnectorSchemaConfigSchemasTablesColumns {
  /**
  * The boolean value specifying whether the sync of the column into the destination is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#enabled ConnectorSchemaConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The boolean value specifying whether a column should be hashed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#hashed ConnectorSchemaConfig#hashed}
  */
  readonly hashed?: boolean | cdktf.IResolvable;
  /**
  * Boolean value indicating if the column is a primary key. This field is read-only and computed by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#is_primary_key ConnectorSchemaConfig#is_primary_key}
  */
  readonly isPrimaryKey?: boolean | cdktf.IResolvable;
}

export function connectorSchemaConfigSchemasTablesColumnsToTerraform(struct?: ConnectorSchemaConfigSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hashed: cdktf.booleanToTerraform(struct!.hashed),
    is_primary_key: cdktf.booleanToTerraform(struct!.isPrimaryKey),
  }
}


export function connectorSchemaConfigSchemasTablesColumnsToHclTerraform(struct?: ConnectorSchemaConfigSchemasTablesColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hashed: {
      value: cdktf.booleanToHclTerraform(struct!.hashed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorSchemaConfigSchemasTablesColumnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ConnectorSchemaConfigSchemasTablesColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hashed !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashed = this._hashed;
    }
    if (this._isPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimaryKey = this._isPrimaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorSchemaConfigSchemasTablesColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._hashed = undefined;
      this._isPrimaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._hashed = value.hashed;
      this._isPrimaryKey = value.isPrimaryKey;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hashed - computed: true, optional: true, required: false
  private _hashed?: boolean | cdktf.IResolvable; 
  public get hashed() {
    return this.getBooleanAttribute('hashed');
  }
  public set hashed(value: boolean | cdktf.IResolvable) {
    this._hashed = value;
  }
  public resetHashed() {
    this._hashed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashedInput() {
    return this._hashed;
  }

  // is_primary_key - computed: true, optional: true, required: false
  private _isPrimaryKey?: boolean | cdktf.IResolvable; 
  public get isPrimaryKey() {
    return this.getBooleanAttribute('is_primary_key');
  }
  public set isPrimaryKey(value: boolean | cdktf.IResolvable) {
    this._isPrimaryKey = value;
  }
  public resetIsPrimaryKey() {
    this._isPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryKeyInput() {
    return this._isPrimaryKey;
  }
}

export class ConnectorSchemaConfigSchemasTablesColumnsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ConnectorSchemaConfigSchemasTablesColumns } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ConnectorSchemaConfigSchemasTablesColumnsOutputReference {
    return new ConnectorSchemaConfigSchemasTablesColumnsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ConnectorSchemaConfigSchemasTables {
  /**
  * Map of table configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#columns ConnectorSchemaConfig#columns}
  */
  readonly columns?: { [key: string]: ConnectorSchemaConfigSchemasTablesColumns } | cdktf.IResolvable;
  /**
  * The boolean value specifying whether the sync for the table into the destination is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#enabled ConnectorSchemaConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This field appears in the response if the connector supports switching sync modes for tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#sync_mode ConnectorSchemaConfig#sync_mode}
  */
  readonly syncMode?: string;
}

export function connectorSchemaConfigSchemasTablesToTerraform(struct?: ConnectorSchemaConfigSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.hashMapper(connectorSchemaConfigSchemasTablesColumnsToTerraform)(struct!.columns),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
  }
}


export function connectorSchemaConfigSchemasTablesToHclTerraform(struct?: ConnectorSchemaConfigSchemasTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.hashMapperHcl(connectorSchemaConfigSchemasTablesColumnsToHclTerraform)(struct!.columns),
      isBlock: true,
      type: "map",
      storageClassType: "ConnectorSchemaConfigSchemasTablesColumnsMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_mode: {
      value: cdktf.stringToHclTerraform(struct!.syncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorSchemaConfigSchemasTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ConnectorSchemaConfigSchemasTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorSchemaConfigSchemasTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns.internalValue = undefined;
      this._enabled = undefined;
      this._syncMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns.internalValue = value.columns;
      this._enabled = value.enabled;
      this._syncMode = value.syncMode;
    }
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new ConnectorSchemaConfigSchemasTablesColumnsMap(this, "columns");
  public get columns() {
    return this._columns;
  }
  public putColumns(value: { [key: string]: ConnectorSchemaConfigSchemasTablesColumns } | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // sync_mode - computed: true, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }
}

export class ConnectorSchemaConfigSchemasTablesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ConnectorSchemaConfigSchemasTables } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ConnectorSchemaConfigSchemasTablesOutputReference {
    return new ConnectorSchemaConfigSchemasTablesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ConnectorSchemaConfigSchemas {
  /**
  * The boolean value specifying whether the sync for the schema into the destination is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#enabled ConnectorSchemaConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Map of table configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#tables ConnectorSchemaConfig#tables}
  */
  readonly tables?: { [key: string]: ConnectorSchemaConfigSchemasTables } | cdktf.IResolvable;
}

export function connectorSchemaConfigSchemasToTerraform(struct?: ConnectorSchemaConfigSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    tables: cdktf.hashMapper(connectorSchemaConfigSchemasTablesToTerraform)(struct!.tables),
  }
}


export function connectorSchemaConfigSchemasToHclTerraform(struct?: ConnectorSchemaConfigSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tables: {
      value: cdktf.hashMapperHcl(connectorSchemaConfigSchemasTablesToHclTerraform)(struct!.tables),
      isBlock: true,
      type: "map",
      storageClassType: "ConnectorSchemaConfigSchemasTablesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorSchemaConfigSchemasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): ConnectorSchemaConfigSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorSchemaConfigSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._tables.internalValue = value.tables;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // tables - computed: false, optional: true, required: false
  private _tables = new ConnectorSchemaConfigSchemasTablesMap(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: { [key: string]: ConnectorSchemaConfigSchemasTables } | cdktf.IResolvable) {
    this._tables.internalValue = value;
  }
  public resetTables() {
    this._tables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class ConnectorSchemaConfigSchemasMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: ConnectorSchemaConfigSchemas } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): ConnectorSchemaConfigSchemasOutputReference {
    return new ConnectorSchemaConfigSchemasOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface ConnectorSchemaConfigSchemaTableColumn {
  /**
  * The boolean value specifying whether the sync of the column into the destination is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#enabled ConnectorSchemaConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The boolean value specifying whether a column should be hashed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#hashed ConnectorSchemaConfig#hashed}
  */
  readonly hashed?: boolean | cdktf.IResolvable;
  /**
  * Boolean value indicating if the column is a primary key. This field is read-only and computed by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#is_primary_key ConnectorSchemaConfig#is_primary_key}
  */
  readonly isPrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * The column name within your destination in accordance with Fivetran conventional rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#name ConnectorSchemaConfig#name}
  */
  readonly name: string;
}

export function connectorSchemaConfigSchemaTableColumnToTerraform(struct?: ConnectorSchemaConfigSchemaTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hashed: cdktf.booleanToTerraform(struct!.hashed),
    is_primary_key: cdktf.booleanToTerraform(struct!.isPrimaryKey),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function connectorSchemaConfigSchemaTableColumnToHclTerraform(struct?: ConnectorSchemaConfigSchemaTableColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hashed: {
      value: cdktf.booleanToHclTerraform(struct!.hashed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorSchemaConfigSchemaTableColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorSchemaConfigSchemaTableColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._hashed !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashed = this._hashed;
    }
    if (this._isPrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimaryKey = this._isPrimaryKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorSchemaConfigSchemaTableColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._hashed = undefined;
      this._isPrimaryKey = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._hashed = value.hashed;
      this._isPrimaryKey = value.isPrimaryKey;
      this._name = value.name;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hashed - computed: true, optional: true, required: false
  private _hashed?: boolean | cdktf.IResolvable; 
  public get hashed() {
    return this.getBooleanAttribute('hashed');
  }
  public set hashed(value: boolean | cdktf.IResolvable) {
    this._hashed = value;
  }
  public resetHashed() {
    this._hashed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashedInput() {
    return this._hashed;
  }

  // is_primary_key - computed: true, optional: true, required: false
  private _isPrimaryKey?: boolean | cdktf.IResolvable; 
  public get isPrimaryKey() {
    return this.getBooleanAttribute('is_primary_key');
  }
  public set isPrimaryKey(value: boolean | cdktf.IResolvable) {
    this._isPrimaryKey = value;
  }
  public resetIsPrimaryKey() {
    this._isPrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryKeyInput() {
    return this._isPrimaryKey;
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
}

export class ConnectorSchemaConfigSchemaTableColumnList extends cdktf.ComplexList {
  public internalValue? : ConnectorSchemaConfigSchemaTableColumn[] | cdktf.IResolvable

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
  public get(index: number): ConnectorSchemaConfigSchemaTableColumnOutputReference {
    return new ConnectorSchemaConfigSchemaTableColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorSchemaConfigSchemaTable {
  /**
  * The boolean value specifying whether the sync of table into the destination is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#enabled ConnectorSchemaConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The table name within your destination in accordance with Fivetran conventional rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#name ConnectorSchemaConfig#name}
  */
  readonly name: string;
  /**
  * This field appears in the response if the connector supports switching sync modes for tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#sync_mode ConnectorSchemaConfig#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#column ConnectorSchemaConfig#column}
  */
  readonly column?: ConnectorSchemaConfigSchemaTableColumn[] | cdktf.IResolvable;
}

export function connectorSchemaConfigSchemaTableToTerraform(struct?: ConnectorSchemaConfigSchemaTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
    column: cdktf.listMapper(connectorSchemaConfigSchemaTableColumnToTerraform, true)(struct!.column),
  }
}


export function connectorSchemaConfigSchemaTableToHclTerraform(struct?: ConnectorSchemaConfigSchemaTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_mode: {
      value: cdktf.stringToHclTerraform(struct!.syncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktf.listMapperHcl(connectorSchemaConfigSchemaTableColumnToHclTerraform, true)(struct!.column),
      isBlock: true,
      type: "set",
      storageClassType: "ConnectorSchemaConfigSchemaTableColumnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorSchemaConfigSchemaTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorSchemaConfigSchemaTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorSchemaConfigSchemaTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._syncMode = undefined;
      this._column.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
      this._syncMode = value.syncMode;
      this._column.internalValue = value.column;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // sync_mode - computed: true, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // column - computed: false, optional: true, required: false
  private _column = new ConnectorSchemaConfigSchemaTableColumnList(this, "column", true);
  public get column() {
    return this._column;
  }
  public putColumn(value: ConnectorSchemaConfigSchemaTableColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}

export class ConnectorSchemaConfigSchemaTableList extends cdktf.ComplexList {
  public internalValue? : ConnectorSchemaConfigSchemaTable[] | cdktf.IResolvable

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
  public get(index: number): ConnectorSchemaConfigSchemaTableOutputReference {
    return new ConnectorSchemaConfigSchemaTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorSchemaConfigSchema {
  /**
  * The boolean value specifying whether the sync for the schema into the destination is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#enabled ConnectorSchemaConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The schema name within your destination in accordance with Fivetran conventional rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#name ConnectorSchemaConfig#name}
  */
  readonly name: string;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#table ConnectorSchemaConfig#table}
  */
  readonly table?: ConnectorSchemaConfigSchemaTable[] | cdktf.IResolvable;
}

export function connectorSchemaConfigSchemaToTerraform(struct?: ConnectorSchemaConfigSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    name: cdktf.stringToTerraform(struct!.name),
    table: cdktf.listMapper(connectorSchemaConfigSchemaTableToTerraform, true)(struct!.table),
  }
}


export function connectorSchemaConfigSchemaToHclTerraform(struct?: ConnectorSchemaConfigSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.listMapperHcl(connectorSchemaConfigSchemaTableToHclTerraform, true)(struct!.table),
      isBlock: true,
      type: "set",
      storageClassType: "ConnectorSchemaConfigSchemaTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorSchemaConfigSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorSchemaConfigSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorSchemaConfigSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._name = undefined;
      this._table.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._name = value.name;
      this._table.internalValue = value.table;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // table - computed: false, optional: true, required: false
  private _table = new ConnectorSchemaConfigSchemaTableList(this, "table", true);
  public get table() {
    return this._table;
  }
  public putTable(value: ConnectorSchemaConfigSchemaTable[] | cdktf.IResolvable) {
    this._table.internalValue = value;
  }
  public resetTable() {
    this._table.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}

export class ConnectorSchemaConfigSchemaList extends cdktf.ComplexList {
  public internalValue? : ConnectorSchemaConfigSchema[] | cdktf.IResolvable

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
  public get(index: number): ConnectorSchemaConfigSchemaOutputReference {
    return new ConnectorSchemaConfigSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorSchemaConfigTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#create ConnectorSchemaConfig#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#read ConnectorSchemaConfig#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#update ConnectorSchemaConfig#update}
  */
  readonly update?: string;
}

export function connectorSchemaConfigTimeoutsToTerraform(struct?: ConnectorSchemaConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function connectorSchemaConfigTimeoutsToHclTerraform(struct?: ConnectorSchemaConfigTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorSchemaConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConnectorSchemaConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorSchemaConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._read = value.read;
      this._update = value.update;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config fivetran_connector_schema_config}
*/
export class ConnectorSchemaConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fivetran_connector_schema_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorSchemaConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorSchemaConfig to import
  * @param importFromId The id of the existing ConnectorSchemaConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorSchemaConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fivetran_connector_schema_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fivetran/fivetran/1.9.15/docs/resources/connector_schema_config fivetran_connector_schema_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorSchemaConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConnectorSchemaConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fivetran_connector_schema_config',
      terraformGeneratorMetadata: {
        providerName: 'fivetran',
        providerVersion: '1.9.15',
        providerVersionConstraint: '1.9.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorId = config.connectorId;
    this._connectorName = config.connectorName;
    this._groupId = config.groupId;
    this._schemaChangeHandling = config.schemaChangeHandling;
    this._schemas.internalValue = config.schemas;
    this._schemasJson = config.schemasJson;
    this._validationLevel = config.validationLevel;
    this._schema.internalValue = config.schema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connector_id - computed: true, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // connector_name - computed: false, optional: true, required: false
  private _connectorName?: string; 
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }
  public set connectorName(value: string) {
    this._connectorName = value;
  }
  public resetConnectorName() {
    this._connectorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorNameInput() {
    return this._connectorName;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema_change_handling - computed: false, optional: true, required: false
  private _schemaChangeHandling?: string; 
  public get schemaChangeHandling() {
    return this.getStringAttribute('schema_change_handling');
  }
  public set schemaChangeHandling(value: string) {
    this._schemaChangeHandling = value;
  }
  public resetSchemaChangeHandling() {
    this._schemaChangeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaChangeHandlingInput() {
    return this._schemaChangeHandling;
  }

  // schemas - computed: false, optional: true, required: false
  private _schemas = new ConnectorSchemaConfigSchemasMap(this, "schemas");
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: { [key: string]: ConnectorSchemaConfigSchemas } | cdktf.IResolvable) {
    this._schemas.internalValue = value;
  }
  public resetSchemas() {
    this._schemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }

  // schemas_json - computed: false, optional: true, required: false
  private _schemasJson?: string; 
  public get schemasJson() {
    return this.getStringAttribute('schemas_json');
  }
  public set schemasJson(value: string) {
    this._schemasJson = value;
  }
  public resetSchemasJson() {
    this._schemasJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasJsonInput() {
    return this._schemasJson;
  }

  // validation_level - computed: true, optional: true, required: false
  private _validationLevel?: string; 
  public get validationLevel() {
    return this.getStringAttribute('validation_level');
  }
  public set validationLevel(value: string) {
    this._validationLevel = value;
  }
  public resetValidationLevel() {
    this._validationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationLevelInput() {
    return this._validationLevel;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new ConnectorSchemaConfigSchemaList(this, "schema", true);
  public get schema() {
    return this._schema;
  }
  public putSchema(value: ConnectorSchemaConfigSchema[] | cdktf.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConnectorSchemaConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConnectorSchemaConfigTimeouts) {
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
      connector_id: cdktf.stringToTerraform(this._connectorId),
      connector_name: cdktf.stringToTerraform(this._connectorName),
      group_id: cdktf.stringToTerraform(this._groupId),
      schema_change_handling: cdktf.stringToTerraform(this._schemaChangeHandling),
      schemas: cdktf.hashMapper(connectorSchemaConfigSchemasToTerraform)(this._schemas.internalValue),
      schemas_json: cdktf.stringToTerraform(this._schemasJson),
      validation_level: cdktf.stringToTerraform(this._validationLevel),
      schema: cdktf.listMapper(connectorSchemaConfigSchemaToTerraform, true)(this._schema.internalValue),
      timeouts: connectorSchemaConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_id: {
        value: cdktf.stringToHclTerraform(this._connectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_name: {
        value: cdktf.stringToHclTerraform(this._connectorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_change_handling: {
        value: cdktf.stringToHclTerraform(this._schemaChangeHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemas: {
        value: cdktf.hashMapperHcl(connectorSchemaConfigSchemasToHclTerraform)(this._schemas.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "ConnectorSchemaConfigSchemasMap",
      },
      schemas_json: {
        value: cdktf.stringToHclTerraform(this._schemasJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_level: {
        value: cdktf.stringToHclTerraform(this._validationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.listMapperHcl(connectorSchemaConfigSchemaToHclTerraform, true)(this._schema.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorSchemaConfigSchemaList",
      },
      timeouts: {
        value: connectorSchemaConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConnectorSchemaConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
