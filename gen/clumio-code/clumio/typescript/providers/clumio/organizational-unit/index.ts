// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/organizational_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationalUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Brief description to denote details of the organizational unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/organizational_unit#description OrganizationalUnit#description}
  */
  readonly description?: string;
  /**
  * Unique name assigned to the organizational unit. Root organizational unit is named as 'Global organizational unit'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/organizational_unit#name OrganizationalUnit#name}
  */
  readonly name: string;
  /**
  * The identifier of the parent organizational unit under which the new organizational unit is to be created. If not provided, the resource will be created under the default organizational unit associated with the credentials used to create the organizational unit. Root organizational unit ID is '00000000-0000-0000-0000-000000000000'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/organizational_unit#parent_id OrganizationalUnit#parent_id}
  */
  readonly parentId?: string;
}
export interface OrganizationalUnitUsersWithRole {
}

export function organizationalUnitUsersWithRoleToTerraform(struct?: OrganizationalUnitUsersWithRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function organizationalUnitUsersWithRoleToHclTerraform(struct?: OrganizationalUnitUsersWithRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OrganizationalUnitUsersWithRoleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationalUnitUsersWithRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationalUnitUsersWithRole | undefined) {
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

export class OrganizationalUnitUsersWithRoleList extends cdktf.ComplexList {

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
  public get(index: number): OrganizationalUnitUsersWithRoleOutputReference {
    return new OrganizationalUnitUsersWithRoleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/organizational_unit clumio_organizational_unit}
*/
export class OrganizationalUnit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_organizational_unit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationalUnit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationalUnit to import
  * @param importFromId The id of the existing OrganizationalUnit that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/organizational_unit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationalUnit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_organizational_unit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/organizational_unit clumio_organizational_unit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationalUnitConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationalUnitConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_organizational_unit',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // children_count - computed: true, optional: false, required: false
  public get childrenCount() {
    return this.getNumberAttribute('children_count');
  }

  // configured_datasource_types - computed: true, optional: false, required: false
  public get configuredDatasourceTypes() {
    return this.getListAttribute('configured_datasource_types');
  }

  // descendant_ids - computed: true, optional: false, required: false
  public get descendantIds() {
    return this.getListAttribute('descendant_ids');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // user_count - computed: true, optional: false, required: false
  public get userCount() {
    return this.getNumberAttribute('user_count');
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // users_with_role - computed: true, optional: false, required: false
  private _usersWithRole = new OrganizationalUnitUsersWithRoleList(this, "users_with_role", false);
  public get usersWithRole() {
    return this._usersWithRole;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
