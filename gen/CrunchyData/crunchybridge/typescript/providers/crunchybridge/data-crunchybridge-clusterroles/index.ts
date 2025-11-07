// https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/clusterroles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrunchybridgeClusterrolesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique ID of the cluster in [EID format](https://docs.crunchybridge.com/api-concepts/eid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/clusterroles#id DataCrunchybridgeClusterroles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCrunchybridgeClusterrolesUserRoles {
}

export function dataCrunchybridgeClusterrolesUserRolesToTerraform(struct?: DataCrunchybridgeClusterrolesUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrunchybridgeClusterrolesUserRolesToHclTerraform(struct?: DataCrunchybridgeClusterrolesUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrunchybridgeClusterrolesUserRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrunchybridgeClusterrolesUserRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrunchybridgeClusterrolesUserRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataCrunchybridgeClusterrolesUserRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataCrunchybridgeClusterrolesUserRolesOutputReference {
    return new DataCrunchybridgeClusterrolesUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/clusterroles crunchybridge_clusterroles}
*/
export class DataCrunchybridgeClusterroles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crunchybridge_clusterroles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrunchybridgeClusterroles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrunchybridgeClusterroles to import
  * @param importFromId The id of the existing DataCrunchybridgeClusterroles that should be imported. Refer to the {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/clusterroles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrunchybridgeClusterroles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crunchybridge_clusterroles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/clusterroles crunchybridge_clusterroles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrunchybridgeClusterrolesConfig
  */
  public constructor(scope: Construct, id: string, config: DataCrunchybridgeClusterrolesConfig) {
    super(scope, id, {
      terraformResourceType: 'crunchybridge_clusterroles',
      terraformGeneratorMetadata: {
        providerName: 'crunchybridge',
        providerVersion: '0.3.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: true, optional: false, required: false
  private _application = new cdktf.StringMap(this, "application");
  public get application() {
    return this._application;
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

  // superuser - computed: true, optional: false, required: false
  private _superuser = new cdktf.StringMap(this, "superuser");
  public get superuser() {
    return this._superuser;
  }

  // user_roles - computed: true, optional: false, required: false
  private _userRoles = new DataCrunchybridgeClusterrolesUserRolesList(this, "user_roles", false);
  public get userRoles() {
    return this._userRoles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
