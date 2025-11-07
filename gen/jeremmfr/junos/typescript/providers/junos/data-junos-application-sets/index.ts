// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/application_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJunosApplicationSetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of application-sets to apply a filter on application-sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/application_sets#match_application_sets DataJunosApplicationSets#match_application_sets}
  */
  readonly matchApplicationSets?: string[];
  /**
  * List of applications to apply a filter on application-sets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/application_sets#match_applications DataJunosApplicationSets#match_applications}
  */
  readonly matchApplications?: string[];
  /**
  * A regexp to apply a filter on application-sets name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/application_sets#match_name DataJunosApplicationSets#match_name}
  */
  readonly matchName?: string;
}
export interface DataJunosApplicationSetsApplicationSets {
}

export function dataJunosApplicationSetsApplicationSetsToTerraform(struct?: DataJunosApplicationSetsApplicationSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataJunosApplicationSetsApplicationSetsToHclTerraform(struct?: DataJunosApplicationSetsApplicationSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataJunosApplicationSetsApplicationSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataJunosApplicationSetsApplicationSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataJunosApplicationSetsApplicationSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_set - computed: true, optional: false, required: false
  public get applicationSet() {
    return this.getListAttribute('application_set');
  }

  // applications - computed: true, optional: false, required: false
  public get applications() {
    return this.getListAttribute('applications');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataJunosApplicationSetsApplicationSetsList extends cdktf.ComplexList {

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
  public get(index: number): DataJunosApplicationSetsApplicationSetsOutputReference {
    return new DataJunosApplicationSetsApplicationSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/application_sets junos_application_sets}
*/
export class DataJunosApplicationSets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_application_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJunosApplicationSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJunosApplicationSets to import
  * @param importFromId The id of the existing DataJunosApplicationSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/application_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJunosApplicationSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_application_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/data-sources/application_sets junos_application_sets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJunosApplicationSetsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataJunosApplicationSetsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_application_sets',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._matchApplicationSets = config.matchApplicationSets;
    this._matchApplications = config.matchApplications;
    this._matchName = config.matchName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_sets - computed: true, optional: false, required: false
  private _applicationSets = new DataJunosApplicationSetsApplicationSetsList(this, "application_sets", false);
  public get applicationSets() {
    return this._applicationSets;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // match_application_sets - computed: false, optional: true, required: false
  private _matchApplicationSets?: string[]; 
  public get matchApplicationSets() {
    return cdktf.Fn.tolist(this.getListAttribute('match_application_sets'));
  }
  public set matchApplicationSets(value: string[]) {
    this._matchApplicationSets = value;
  }
  public resetMatchApplicationSets() {
    this._matchApplicationSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchApplicationSetsInput() {
    return this._matchApplicationSets;
  }

  // match_applications - computed: false, optional: true, required: false
  private _matchApplications?: string[]; 
  public get matchApplications() {
    return cdktf.Fn.tolist(this.getListAttribute('match_applications'));
  }
  public set matchApplications(value: string[]) {
    this._matchApplications = value;
  }
  public resetMatchApplications() {
    this._matchApplications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchApplicationsInput() {
    return this._matchApplications;
  }

  // match_name - computed: false, optional: true, required: false
  private _matchName?: string; 
  public get matchName() {
    return this.getStringAttribute('match_name');
  }
  public set matchName(value: string) {
    this._matchName = value;
  }
  public resetMatchName() {
    this._matchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchNameInput() {
    return this._matchName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      match_application_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchApplicationSets),
      match_applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._matchApplications),
      match_name: cdktf.stringToTerraform(this._matchName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      match_application_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchApplicationSets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      match_applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._matchApplications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      match_name: {
        value: cdktf.stringToHclTerraform(this._matchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
