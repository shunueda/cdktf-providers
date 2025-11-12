// https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_databases#mysql_database_list MysqlDatabases#mysql_database_list}
  */
  readonly mysqlDatabaseList: MysqlDatabasesMysqlDatabaseListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_databases#mysql_instance_no MysqlDatabases#mysql_instance_no}
  */
  readonly mysqlInstanceNo: string;
}
export interface MysqlDatabasesMysqlDatabaseListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_databases#name MysqlDatabases#name}
  */
  readonly name: string;
}

export function mysqlDatabasesMysqlDatabaseListStructToTerraform(struct?: MysqlDatabasesMysqlDatabaseListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function mysqlDatabasesMysqlDatabaseListStructToHclTerraform(struct?: MysqlDatabasesMysqlDatabaseListStruct | cdktf.IResolvable): any {
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

export class MysqlDatabasesMysqlDatabaseListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlDatabasesMysqlDatabaseListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlDatabasesMysqlDatabaseListStruct | cdktf.IResolvable | undefined) {
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

export class MysqlDatabasesMysqlDatabaseListStructList extends cdktf.ComplexList {
  public internalValue? : MysqlDatabasesMysqlDatabaseListStruct[] | cdktf.IResolvable

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
  public get(index: number): MysqlDatabasesMysqlDatabaseListStructOutputReference {
    return new MysqlDatabasesMysqlDatabaseListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_databases ncloud_mysql_databases}
*/
export class MysqlDatabases extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ncloud_mysql_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlDatabases to import
  * @param importFromId The id of the existing MysqlDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ncloud_mysql_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/navercloudplatform/ncloud/4.0.4/docs/resources/mysql_databases ncloud_mysql_databases} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlDatabasesConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlDatabasesConfig) {
    super(scope, id, {
      terraformResourceType: 'ncloud_mysql_databases',
      terraformGeneratorMetadata: {
        providerName: 'ncloud',
        providerVersion: '4.0.4',
        providerVersionConstraint: '4.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._mysqlDatabaseList.internalValue = config.mysqlDatabaseList;
    this._mysqlInstanceNo = config.mysqlInstanceNo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mysql_database_list - computed: false, optional: false, required: true
  private _mysqlDatabaseList = new MysqlDatabasesMysqlDatabaseListStructList(this, "mysql_database_list", false);
  public get mysqlDatabaseList() {
    return this._mysqlDatabaseList;
  }
  public putMysqlDatabaseList(value: MysqlDatabasesMysqlDatabaseListStruct[] | cdktf.IResolvable) {
    this._mysqlDatabaseList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabaseListInput() {
    return this._mysqlDatabaseList.internalValue;
  }

  // mysql_instance_no - computed: false, optional: false, required: true
  private _mysqlInstanceNo?: string; 
  public get mysqlInstanceNo() {
    return this.getStringAttribute('mysql_instance_no');
  }
  public set mysqlInstanceNo(value: string) {
    this._mysqlInstanceNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInstanceNoInput() {
    return this._mysqlInstanceNo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mysql_database_list: cdktf.listMapper(mysqlDatabasesMysqlDatabaseListStructToTerraform, false)(this._mysqlDatabaseList.internalValue),
      mysql_instance_no: cdktf.stringToTerraform(this._mysqlInstanceNo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      mysql_database_list: {
        value: cdktf.listMapperHcl(mysqlDatabasesMysqlDatabaseListStructToHclTerraform, false)(this._mysqlDatabaseList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlDatabasesMysqlDatabaseListStructList",
      },
      mysql_instance_no: {
        value: cdktf.stringToHclTerraform(this._mysqlInstanceNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
