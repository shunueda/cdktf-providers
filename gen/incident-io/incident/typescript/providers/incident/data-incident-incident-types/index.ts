// https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/incident_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIncidentIncidentTypesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataIncidentIncidentTypesIncidentTypes {
}

export function dataIncidentIncidentTypesIncidentTypesToTerraform(struct?: DataIncidentIncidentTypesIncidentTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIncidentIncidentTypesIncidentTypesToHclTerraform(struct?: DataIncidentIncidentTypesIncidentTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIncidentIncidentTypesIncidentTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIncidentIncidentTypesIncidentTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIncidentIncidentTypesIncidentTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_in_triage - computed: true, optional: false, required: false
  public get createInTriage() {
    return this.getStringAttribute('create_in_triage');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_incidents_only - computed: true, optional: false, required: false
  public get privateIncidentsOnly() {
    return this.getBooleanAttribute('private_incidents_only');
  }
}

export class DataIncidentIncidentTypesIncidentTypesList extends cdktf.ComplexList {

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
  public get(index: number): DataIncidentIncidentTypesIncidentTypesOutputReference {
    return new DataIncidentIncidentTypesIncidentTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/incident_types incident_incident_types}
*/
export class DataIncidentIncidentTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incident_incident_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIncidentIncidentTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIncidentIncidentTypes to import
  * @param importFromId The id of the existing DataIncidentIncidentTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/incident_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIncidentIncidentTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incident_incident_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/incident-io/incident/5.24.1/docs/data-sources/incident_types incident_incident_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIncidentIncidentTypesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIncidentIncidentTypesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'incident_incident_types',
      terraformGeneratorMetadata: {
        providerName: 'incident',
        providerVersion: '5.24.1',
        providerVersionConstraint: '5.24.1'
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

  // incident_types - computed: true, optional: false, required: false
  private _incidentTypes = new DataIncidentIncidentTypesIncidentTypesList(this, "incident_types", false);
  public get incidentTypes() {
    return this._incidentTypes;
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
