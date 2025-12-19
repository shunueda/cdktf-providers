// https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/organizational_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClumioOrganizationalUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/organizational_unit#name DataClumioOrganizationalUnit#name}
  */
  readonly name: string;
}
export interface DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRole {
}

export function dataClumioOrganizationalUnitOrganizationalUnitsUsersWithRoleToTerraform(struct?: DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataClumioOrganizationalUnitOrganizationalUnitsUsersWithRoleToHclTerraform(struct?: DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assigned_role - computed: true, optional: false, required: false
  public get assignedRole() {
    return this.getStringAttribute('assigned_role');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRoleList extends cdktf.ComplexList {

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
  public get(index: number): DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRoleOutputReference {
    return new DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataClumioOrganizationalUnitOrganizationalUnits {
}

export function dataClumioOrganizationalUnitOrganizationalUnitsToTerraform(struct?: DataClumioOrganizationalUnitOrganizationalUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataClumioOrganizationalUnitOrganizationalUnitsToHclTerraform(struct?: DataClumioOrganizationalUnitOrganizationalUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataClumioOrganizationalUnitOrganizationalUnitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataClumioOrganizationalUnitOrganizationalUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClumioOrganizationalUnitOrganizationalUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // descendant_ids - computed: true, optional: false, required: false
  public get descendantIds() {
    return cdktf.Fn.tolist(this.getListAttribute('descendant_ids'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent_id - computed: true, optional: false, required: false
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }

  // users_with_role - computed: true, optional: false, required: false
  private _usersWithRole = new DataClumioOrganizationalUnitOrganizationalUnitsUsersWithRoleList(this, "users_with_role", true);
  public get usersWithRole() {
    return this._usersWithRole;
  }
}

export class DataClumioOrganizationalUnitOrganizationalUnitsList extends cdktf.ComplexList {

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
  public get(index: number): DataClumioOrganizationalUnitOrganizationalUnitsOutputReference {
    return new DataClumioOrganizationalUnitOrganizationalUnitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/organizational_unit clumio_organizational_unit}
*/
export class DataClumioOrganizationalUnit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_organizational_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClumioOrganizationalUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClumioOrganizationalUnit to import
  * @param importFromId The id of the existing DataClumioOrganizationalUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/organizational_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClumioOrganizationalUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_organizational_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.17.0/docs/data-sources/organizational_unit clumio_organizational_unit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClumioOrganizationalUnitConfig
  */
  public constructor(scope: Construct, id: string, config: DataClumioOrganizationalUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_organizational_unit',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // organizational_units - computed: true, optional: false, required: false
  private _organizationalUnits = new DataClumioOrganizationalUnitOrganizationalUnitsList(this, "organizational_units", true);
  public get organizationalUnits() {
    return this._organizationalUnits;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
