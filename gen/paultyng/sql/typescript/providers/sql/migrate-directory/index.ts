// https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MigrateDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The path of the SQL migration files. For a path relative to the current module, use `path.module`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate_directory#path MigrateDirectory#path}
  */
  readonly path: string;
  /**
  * Set this to a value if your migration up and down are in a single file, split on some constant string (ie. in the case of [shmig](https://github.com/mbucc/shmig) you would use `-- ==== DOWN ====`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate_directory#single_file_split MigrateDirectory#single_file_split}
  */
  readonly singleFileSplit?: string;
}
export interface MigrateDirectoryCompleteMigrations {
}

export function migrateDirectoryCompleteMigrationsToTerraform(struct?: MigrateDirectoryCompleteMigrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function migrateDirectoryCompleteMigrationsToHclTerraform(struct?: MigrateDirectoryCompleteMigrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrateDirectoryCompleteMigrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MigrateDirectoryCompleteMigrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrateDirectoryCompleteMigrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // down - computed: true, optional: false, required: false
  public get down() {
    return this.getStringAttribute('down');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // up - computed: true, optional: false, required: false
  public get up() {
    return this.getStringAttribute('up');
  }
}

export class MigrateDirectoryCompleteMigrationsList extends cdktf.ComplexList {

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
  public get(index: number): MigrateDirectoryCompleteMigrationsOutputReference {
    return new MigrateDirectoryCompleteMigrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate_directory sql_migrate_directory}
*/
export class MigrateDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sql_migrate_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MigrateDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MigrateDirectory to import
  * @param importFromId The id of the existing MigrateDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MigrateDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sql_migrate_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate_directory sql_migrate_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MigrateDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: MigrateDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'sql_migrate_directory',
      terraformGeneratorMetadata: {
        providerName: 'sql',
        providerVersion: '0.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._singleFileSplit = config.singleFileSplit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // complete_migrations - computed: true, optional: false, required: false
  private _completeMigrations = new MigrateDirectoryCompleteMigrationsList(this, "complete_migrations", false);
  public get completeMigrations() {
    return this._completeMigrations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // single_file_split - computed: false, optional: true, required: false
  private _singleFileSplit?: string; 
  public get singleFileSplit() {
    return this.getStringAttribute('single_file_split');
  }
  public set singleFileSplit(value: string) {
    this._singleFileSplit = value;
  }
  public resetSingleFileSplit() {
    this._singleFileSplit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleFileSplitInput() {
    return this._singleFileSplit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      path: cdktf.stringToTerraform(this._path),
      single_file_split: cdktf.stringToTerraform(this._singleFileSplit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_file_split: {
        value: cdktf.stringToHclTerraform(this._singleFileSplit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
