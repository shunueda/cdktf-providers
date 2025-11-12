// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/datasources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSquaredupDatasourcesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the data source. If not specified, all data sources will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/datasources#data_source_name DataSquaredupDatasources#data_source_name}
  */
  readonly dataSourceName?: string;
  /**
  * If true, only on-prem data sources will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/datasources#on_prem DataSquaredupDatasources#on_prem}
  */
  readonly onPrem?: boolean | cdktf.IResolvable;
}
export interface DataSquaredupDatasourcesPlugins {
}

export function dataSquaredupDatasourcesPluginsToTerraform(struct?: DataSquaredupDatasourcesPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSquaredupDatasourcesPluginsToHclTerraform(struct?: DataSquaredupDatasourcesPlugins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSquaredupDatasourcesPluginsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSquaredupDatasourcesPlugins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSquaredupDatasourcesPlugins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // on_prem - computed: true, optional: false, required: false
  public get onPrem() {
    return this.getBooleanAttribute('on_prem');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataSquaredupDatasourcesPluginsList extends cdktf.ComplexList {

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
  public get(index: number): DataSquaredupDatasourcesPluginsOutputReference {
    return new DataSquaredupDatasourcesPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/datasources squaredup_datasources}
*/
export class DataSquaredupDatasources extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_datasources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSquaredupDatasources resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSquaredupDatasources to import
  * @param importFromId The id of the existing DataSquaredupDatasources that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/datasources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSquaredupDatasources to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_datasources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/data-sources/datasources squaredup_datasources} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSquaredupDatasourcesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSquaredupDatasourcesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'squaredup_datasources',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceName = config.dataSourceName;
    this._onPrem = config.onPrem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source_name - computed: false, optional: true, required: false
  private _dataSourceName?: string; 
  public get dataSourceName() {
    return this.getStringAttribute('data_source_name');
  }
  public set dataSourceName(value: string) {
    this._dataSourceName = value;
  }
  public resetDataSourceName() {
    this._dataSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceNameInput() {
    return this._dataSourceName;
  }

  // on_prem - computed: false, optional: true, required: false
  private _onPrem?: boolean | cdktf.IResolvable; 
  public get onPrem() {
    return this.getBooleanAttribute('on_prem');
  }
  public set onPrem(value: boolean | cdktf.IResolvable) {
    this._onPrem = value;
  }
  public resetOnPrem() {
    this._onPrem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremInput() {
    return this._onPrem;
  }

  // plugins - computed: true, optional: false, required: false
  private _plugins = new DataSquaredupDatasourcesPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_name: cdktf.stringToTerraform(this._dataSourceName),
      on_prem: cdktf.booleanToTerraform(this._onPrem),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_name: {
        value: cdktf.stringToHclTerraform(this._dataSourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_prem: {
        value: cdktf.booleanToHclTerraform(this._onPrem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
