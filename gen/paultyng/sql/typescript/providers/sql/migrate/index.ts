// https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MigrateConfig extends cdktf.TerraformMetaArguments {
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate#migration Migrate#migration}
  */
  readonly migration?: MigrateMigration[] | cdktf.IResolvable;
}
export interface MigrateCompleteMigrations {
}

export function migrateCompleteMigrationsToTerraform(struct?: MigrateCompleteMigrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function migrateCompleteMigrationsToHclTerraform(struct?: MigrateCompleteMigrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrateCompleteMigrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MigrateCompleteMigrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrateCompleteMigrations | undefined) {
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

export class MigrateCompleteMigrationsList extends cdktf.ComplexList {

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
  public get(index: number): MigrateCompleteMigrationsOutputReference {
    return new MigrateCompleteMigrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrateMigration {
  /**
  * The query to run when undoing this migration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate#down Migrate#down}
  */
  readonly down: string;
  /**
  * Identifier can be any string to help identifying the migration in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate#id Migrate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The query to run when applying this migration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate#up Migrate#up}
  */
  readonly up: string;
}

export function migrateMigrationToTerraform(struct?: MigrateMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down: cdktf.stringToTerraform(struct!.down),
    id: cdktf.stringToTerraform(struct!.id),
    up: cdktf.stringToTerraform(struct!.up),
  }
}


export function migrateMigrationToHclTerraform(struct?: MigrateMigration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down: {
      value: cdktf.stringToHclTerraform(struct!.down),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    up: {
      value: cdktf.stringToHclTerraform(struct!.up),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrateMigrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MigrateMigration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._down !== undefined) {
      hasAnyValues = true;
      internalValueResult.down = this._down;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._up !== undefined) {
      hasAnyValues = true;
      internalValueResult.up = this._up;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrateMigration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._down = undefined;
      this._id = undefined;
      this._up = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._down = value.down;
      this._id = value.id;
      this._up = value.up;
    }
  }

  // down - computed: false, optional: false, required: true
  private _down?: string; 
  public get down() {
    return this.getStringAttribute('down');
  }
  public set down(value: string) {
    this._down = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downInput() {
    return this._down;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // up - computed: false, optional: false, required: true
  private _up?: string; 
  public get up() {
    return this.getStringAttribute('up');
  }
  public set up(value: string) {
    this._up = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upInput() {
    return this._up;
  }
}

export class MigrateMigrationList extends cdktf.ComplexList {
  public internalValue? : MigrateMigration[] | cdktf.IResolvable

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
  public get(index: number): MigrateMigrationOutputReference {
    return new MigrateMigrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate sql_migrate}
*/
export class Migrate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sql_migrate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Migrate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Migrate to import
  * @param importFromId The id of the existing Migrate that should be imported. Refer to the {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Migrate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sql_migrate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paultyng/sql/0.5.0/docs/resources/migrate sql_migrate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MigrateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MigrateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sql_migrate',
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
    this._migration.internalValue = config.migration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // complete_migrations - computed: true, optional: false, required: false
  private _completeMigrations = new MigrateCompleteMigrationsList(this, "complete_migrations", false);
  public get completeMigrations() {
    return this._completeMigrations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // migration - computed: false, optional: true, required: false
  private _migration = new MigrateMigrationList(this, "migration", false);
  public get migration() {
    return this._migration;
  }
  public putMigration(value: MigrateMigration[] | cdktf.IResolvable) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      migration: cdktf.listMapper(migrateMigrationToTerraform, true)(this._migration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      migration: {
        value: cdktf.listMapperHcl(migrateMigrationToHclTerraform, true)(this._migration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MigrateMigrationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
