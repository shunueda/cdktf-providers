// https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorksheetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#description Worksheet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#favorite Worksheet#favorite}
  */
  readonly favorite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#graphs Worksheet#graphs}
  */
  readonly graphs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#id Worksheet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#notes Worksheet#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#tags Worksheet#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#title Worksheet#title}
  */
  readonly title: string;
  /**
  * smart_queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#smart_queries Worksheet#smart_queries}
  */
  readonly smartQueries?: WorksheetSmartQueries[] | cdktf.IResolvable;
}
export interface WorksheetSmartQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#name Worksheet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#order Worksheet#order}
  */
  readonly order?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#query Worksheet#query}
  */
  readonly query: string;
}

export function worksheetSmartQueriesToTerraform(struct?: WorksheetSmartQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.order),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function worksheetSmartQueriesToHclTerraform(struct?: WorksheetSmartQueries | cdktf.IResolvable): any {
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
    order: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.order),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorksheetSmartQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorksheetSmartQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorksheetSmartQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._order = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._order = value.order;
      this._query = value.query;
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

  // order - computed: false, optional: true, required: false
  private _order?: string[]; 
  public get order() {
    return cdktf.Fn.tolist(this.getListAttribute('order'));
  }
  public set order(value: string[]) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class WorksheetSmartQueriesList extends cdktf.ComplexList {
  public internalValue? : WorksheetSmartQueries[] | cdktf.IResolvable

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
  public get(index: number): WorksheetSmartQueriesOutputReference {
    return new WorksheetSmartQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet circonus_worksheet}
*/
export class Worksheet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "circonus_worksheet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Worksheet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Worksheet to import
  * @param importFromId The id of the existing Worksheet that should be imported. Refer to the {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Worksheet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "circonus_worksheet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/circonus-labs/circonus/0.12.15/docs/resources/worksheet circonus_worksheet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorksheetConfig
  */
  public constructor(scope: Construct, id: string, config: WorksheetConfig) {
    super(scope, id, {
      terraformResourceType: 'circonus_worksheet',
      terraformGeneratorMetadata: {
        providerName: 'circonus',
        providerVersion: '0.12.15'
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
    this._favorite = config.favorite;
    this._graphs = config.graphs;
    this._id = config.id;
    this._notes = config.notes;
    this._tags = config.tags;
    this._title = config.title;
    this._smartQueries.internalValue = config.smartQueries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // favorite - computed: false, optional: true, required: false
  private _favorite?: boolean | cdktf.IResolvable; 
  public get favorite() {
    return this.getBooleanAttribute('favorite');
  }
  public set favorite(value: boolean | cdktf.IResolvable) {
    this._favorite = value;
  }
  public resetFavorite() {
    this._favorite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get favoriteInput() {
    return this._favorite;
  }

  // graphs - computed: false, optional: true, required: false
  private _graphs?: string[]; 
  public get graphs() {
    return cdktf.Fn.tolist(this.getListAttribute('graphs'));
  }
  public set graphs(value: string[]) {
    this._graphs = value;
  }
  public resetGraphs() {
    this._graphs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphsInput() {
    return this._graphs;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // smart_queries - computed: false, optional: true, required: false
  private _smartQueries = new WorksheetSmartQueriesList(this, "smart_queries", true);
  public get smartQueries() {
    return this._smartQueries;
  }
  public putSmartQueries(value: WorksheetSmartQueries[] | cdktf.IResolvable) {
    this._smartQueries.internalValue = value;
  }
  public resetSmartQueries() {
    this._smartQueries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartQueriesInput() {
    return this._smartQueries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      favorite: cdktf.booleanToTerraform(this._favorite),
      graphs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._graphs),
      id: cdktf.stringToTerraform(this._id),
      notes: cdktf.stringToTerraform(this._notes),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      smart_queries: cdktf.listMapper(worksheetSmartQueriesToTerraform, true)(this._smartQueries.internalValue),
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
      favorite: {
        value: cdktf.booleanToHclTerraform(this._favorite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      graphs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._graphs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_queries: {
        value: cdktf.listMapperHcl(worksheetSmartQueriesToHclTerraform, true)(this._smartQueries.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WorksheetSmartQueriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
