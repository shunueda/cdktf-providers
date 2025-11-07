// https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCrunchybridgeAccountConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCrunchybridgeAccountTeamMembership {
}

export function dataCrunchybridgeAccountTeamMembershipToTerraform(struct?: DataCrunchybridgeAccountTeamMembership): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCrunchybridgeAccountTeamMembershipToHclTerraform(struct?: DataCrunchybridgeAccountTeamMembership): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCrunchybridgeAccountTeamMembershipOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCrunchybridgeAccountTeamMembership | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCrunchybridgeAccountTeamMembership | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }

  // team_role - computed: true, optional: false, required: false
  public get teamRole() {
    return this.getStringAttribute('team_role');
  }
}

export class DataCrunchybridgeAccountTeamMembershipList extends cdktf.ComplexList {

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
  public get(index: number): DataCrunchybridgeAccountTeamMembershipOutputReference {
    return new DataCrunchybridgeAccountTeamMembershipOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/account crunchybridge_account}
*/
export class DataCrunchybridgeAccount extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "crunchybridge_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCrunchybridgeAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCrunchybridgeAccount to import
  * @param importFromId The id of the existing DataCrunchybridgeAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCrunchybridgeAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "crunchybridge_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/crunchydata/crunchybridge/0.3.0/docs/data-sources/account crunchybridge_account} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCrunchybridgeAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCrunchybridgeAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'crunchybridge_account',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_team - computed: true, optional: false, required: false
  public get defaultTeam() {
    return this.getStringAttribute('default_team');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // personal_team - computed: true, optional: false, required: false
  public get personalTeam() {
    return this.getStringAttribute('personal_team');
  }

  // team_membership - computed: true, optional: false, required: false
  private _teamMembership = new DataCrunchybridgeAccountTeamMembershipList(this, "team_membership", false);
  public get teamMembership() {
    return this._teamMembership;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
