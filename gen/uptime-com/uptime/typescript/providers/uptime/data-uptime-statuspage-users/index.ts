// https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/statuspage_users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUptimeStatuspageUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the status page to retrieve users for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/statuspage_users#statuspage_id DataUptimeStatuspageUsers#statuspage_id}
  */
  readonly statuspageId: number;
}
export interface DataUptimeStatuspageUsersUsers {
}

export function dataUptimeStatuspageUsersUsersToTerraform(struct?: DataUptimeStatuspageUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUptimeStatuspageUsersUsersToHclTerraform(struct?: DataUptimeStatuspageUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUptimeStatuspageUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataUptimeStatuspageUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUptimeStatuspageUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
}

export class DataUptimeStatuspageUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataUptimeStatuspageUsersUsersOutputReference {
    return new DataUptimeStatuspageUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/statuspage_users uptime_statuspage_users}
*/
export class DataUptimeStatuspageUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime_statuspage_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUptimeStatuspageUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUptimeStatuspageUsers to import
  * @param importFromId The id of the existing DataUptimeStatuspageUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/statuspage_users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUptimeStatuspageUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime_statuspage_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.18.1/docs/data-sources/statuspage_users uptime_statuspage_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUptimeStatuspageUsersConfig
  */
  public constructor(scope: Construct, id: string, config: DataUptimeStatuspageUsersConfig) {
    super(scope, id, {
      terraformResourceType: 'uptime_statuspage_users',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.18.1',
        providerVersionConstraint: '2.18.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._statuspageId = config.statuspageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // statuspage_id - computed: false, optional: false, required: true
  private _statuspageId?: number; 
  public get statuspageId() {
    return this.getNumberAttribute('statuspage_id');
  }
  public set statuspageId(value: number) {
    this._statuspageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statuspageIdInput() {
    return this._statuspageId;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataUptimeStatuspageUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      statuspage_id: cdktf.numberToTerraform(this._statuspageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      statuspage_id: {
        value: cdktf.numberToHclTerraform(this._statuspageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
