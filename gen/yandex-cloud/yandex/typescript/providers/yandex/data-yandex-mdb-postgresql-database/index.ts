// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexMdbPostgresqlDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#cluster_id DataYandexMdbPostgresqlDatabase#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The `true` value means that resource is protected from accidental deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#deletion_protection DataYandexMdbPostgresqlDatabase#deletion_protection}
  */
  readonly deletionProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#id DataYandexMdbPostgresqlDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * POSIX locale for string sorting order. Forbidden to change in an existing database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#lc_collate DataYandexMdbPostgresqlDatabase#lc_collate}
  */
  readonly lcCollate?: string;
  /**
  * POSIX locale for character classification. Forbidden to change in an existing database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#lc_type DataYandexMdbPostgresqlDatabase#lc_type}
  */
  readonly lcType?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#name DataYandexMdbPostgresqlDatabase#name}
  */
  readonly name: string;
  /**
  * Name of the user assigned as the owner of the database. Forbidden to change in an existing database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#owner DataYandexMdbPostgresqlDatabase#owner}
  */
  readonly owner?: string;
  /**
  * Name of the template database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#template_db DataYandexMdbPostgresqlDatabase#template_db}
  */
  readonly templateDb?: string;
  /**
  * extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#extension DataYandexMdbPostgresqlDatabase#extension}
  */
  readonly extension?: DataYandexMdbPostgresqlDatabaseExtension[] | cdktf.IResolvable;
}
export interface DataYandexMdbPostgresqlDatabaseExtension {
  /**
  * Name of the database extension. For more information on available extensions see [the official documentation](https://yandex.cloud/docs/managed-postgresql/operations/cluster-extensions).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#name DataYandexMdbPostgresqlDatabase#name}
  */
  readonly name: string;
}

export function dataYandexMdbPostgresqlDatabaseExtensionToTerraform(struct?: DataYandexMdbPostgresqlDatabaseExtension | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataYandexMdbPostgresqlDatabaseExtensionToHclTerraform(struct?: DataYandexMdbPostgresqlDatabaseExtension | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexMdbPostgresqlDatabaseExtensionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexMdbPostgresqlDatabaseExtension | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexMdbPostgresqlDatabaseExtension | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataYandexMdbPostgresqlDatabaseExtensionList extends cdktf.ComplexList {
  public internalValue? : DataYandexMdbPostgresqlDatabaseExtension[] | cdktf.IResolvable

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
  public get(index: number): DataYandexMdbPostgresqlDatabaseExtensionOutputReference {
    return new DataYandexMdbPostgresqlDatabaseExtensionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database yandex_mdb_postgresql_database}
*/
export class DataYandexMdbPostgresqlDatabase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_postgresql_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexMdbPostgresqlDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexMdbPostgresqlDatabase to import
  * @param importFromId The id of the existing DataYandexMdbPostgresqlDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexMdbPostgresqlDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_postgresql_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/mdb_postgresql_database yandex_mdb_postgresql_database} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexMdbPostgresqlDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DataYandexMdbPostgresqlDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_postgresql_database',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._lcCollate = config.lcCollate;
    this._lcType = config.lcType;
    this._name = config.name;
    this._owner = config.owner;
    this._templateDb = config.templateDb;
    this._extension.internalValue = config.extension;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: string; 
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }
  public set deletionProtection(value: string) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // lc_collate - computed: true, optional: true, required: false
  private _lcCollate?: string; 
  public get lcCollate() {
    return this.getStringAttribute('lc_collate');
  }
  public set lcCollate(value: string) {
    this._lcCollate = value;
  }
  public resetLcCollate() {
    this._lcCollate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcCollateInput() {
    return this._lcCollate;
  }

  // lc_type - computed: true, optional: true, required: false
  private _lcType?: string; 
  public get lcType() {
    return this.getStringAttribute('lc_type');
  }
  public set lcType(value: string) {
    this._lcType = value;
  }
  public resetLcType() {
    this._lcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lcTypeInput() {
    return this._lcType;
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

  // template_db - computed: true, optional: true, required: false
  private _templateDb?: string; 
  public get templateDb() {
    return this.getStringAttribute('template_db');
  }
  public set templateDb(value: string) {
    this._templateDb = value;
  }
  public resetTemplateDb() {
    this._templateDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDbInput() {
    return this._templateDb;
  }

  // extension - computed: false, optional: true, required: false
  private _extension = new DataYandexMdbPostgresqlDatabaseExtensionList(this, "extension", true);
  public get extension() {
    return this._extension;
  }
  public putExtension(value: DataYandexMdbPostgresqlDatabaseExtension[] | cdktf.IResolvable) {
    this._extension.internalValue = value;
  }
  public resetExtension() {
    this._extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      deletion_protection: cdktf.stringToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      lc_collate: cdktf.stringToTerraform(this._lcCollate),
      lc_type: cdktf.stringToTerraform(this._lcType),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
      template_db: cdktf.stringToTerraform(this._templateDb),
      extension: cdktf.listMapper(dataYandexMdbPostgresqlDatabaseExtensionToTerraform, true)(this._extension.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.stringToHclTerraform(this._deletionProtection),
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
      lc_collate: {
        value: cdktf.stringToHclTerraform(this._lcCollate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lc_type: {
        value: cdktf.stringToHclTerraform(this._lcType),
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
      template_db: {
        value: cdktf.stringToHclTerraform(this._templateDb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension: {
        value: cdktf.listMapperHcl(dataYandexMdbPostgresqlDatabaseExtensionToHclTerraform, true)(this._extension.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataYandexMdbPostgresqlDatabaseExtensionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
