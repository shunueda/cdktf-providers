// https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogtailConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the connection to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/connection#id DataLogtailConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataLogtailConnectionDataSources {
}

export function dataLogtailConnectionDataSourcesToTerraform(struct?: DataLogtailConnectionDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLogtailConnectionDataSourcesToHclTerraform(struct?: DataLogtailConnectionDataSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLogtailConnectionDataSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogtailConnectionDataSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogtailConnectionDataSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_sources - computed: true, optional: false, required: false
  public get dataSources() {
    return this.getListAttribute('data_sources');
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getNumberAttribute('source_id');
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // team_name - computed: true, optional: false, required: false
  public get teamName() {
    return this.getStringAttribute('team_name');
  }
}

export class DataLogtailConnectionDataSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataLogtailConnectionDataSourcesOutputReference {
    return new DataLogtailConnectionDataSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/connection logtail_connection}
*/
export class DataLogtailConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logtail_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogtailConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogtailConnection to import
  * @param importFromId The id of the existing DataLogtailConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogtailConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logtail_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/logtail/0.7.1/docs/data-sources/connection logtail_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogtailConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogtailConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logtail_connection',
      terraformGeneratorMetadata: {
        providerName: 'logtail',
        providerVersion: '0.7.1',
        providerVersionConstraint: '0.7.1'
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

  // client_type - computed: true, optional: false, required: false
  public get clientType() {
    return this.getStringAttribute('client_type');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // data_region - computed: true, optional: false, required: false
  public get dataRegion() {
    return this.getStringAttribute('data_region');
  }

  // data_sources - computed: true, optional: false, required: false
  private _dataSources = new DataLogtailConnectionDataSourcesList(this, "data_sources", false);
  public get dataSources() {
    return this._dataSources;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
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

  // ip_allowlist - computed: true, optional: false, required: false
  public get ipAllowlist() {
    return this.getListAttribute('ip_allowlist');
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sample_query - computed: true, optional: false, required: false
  public get sampleQuery() {
    return this.getStringAttribute('sample_query');
  }

  // team_ids - computed: true, optional: false, required: false
  public get teamIds() {
    return this.getNumberListAttribute('team_ids');
  }

  // team_names - computed: true, optional: false, required: false
  public get teamNames() {
    return this.getListAttribute('team_names');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
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
