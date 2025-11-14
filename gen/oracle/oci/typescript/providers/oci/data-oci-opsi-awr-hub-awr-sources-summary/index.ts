// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub_awr_sources_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiAwrHubAwrSourcesSummaryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub_awr_sources_summary#awr_hub_id DataOciOpsiAwrHubAwrSourcesSummary#awr_hub_id}
  */
  readonly awrHubId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub_awr_sources_summary#compartment_id DataOciOpsiAwrHubAwrSourcesSummary#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub_awr_sources_summary#id DataOciOpsiAwrHubAwrSourcesSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub_awr_sources_summary#name DataOciOpsiAwrHubAwrSourcesSummary#name}
  */
  readonly name?: string;
}
export interface DataOciOpsiAwrHubAwrSourcesSummaryItems {
}

export function dataOciOpsiAwrHubAwrSourcesSummaryItemsToTerraform(struct?: DataOciOpsiAwrHubAwrSourcesSummaryItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOpsiAwrHubAwrSourcesSummaryItemsToHclTerraform(struct?: DataOciOpsiAwrHubAwrSourcesSummaryItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOpsiAwrHubAwrSourcesSummaryItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOpsiAwrHubAwrSourcesSummaryItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // awr_hub_id - computed: true, optional: false, required: false
  public get awrHubId() {
    return this.getStringAttribute('awr_hub_id');
  }

  // awr_source_database_id - computed: true, optional: false, required: false
  public get awrSourceDatabaseId() {
    return this.getStringAttribute('awr_source_database_id');
  }

  // hours_since_last_import - computed: true, optional: false, required: false
  public get hoursSinceLastImport() {
    return this.getNumberAttribute('hours_since_last_import');
  }

  // max_snapshot_identifier - computed: true, optional: false, required: false
  public get maxSnapshotIdentifier() {
    return this.getNumberAttribute('max_snapshot_identifier');
  }

  // min_snapshot_identifier - computed: true, optional: false, required: false
  public get minSnapshotIdentifier() {
    return this.getNumberAttribute('min_snapshot_identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // snapshots_uploaded - computed: true, optional: false, required: false
  public get snapshotsUploaded() {
    return this.getNumberAttribute('snapshots_uploaded');
  }

  // time_first_snapshot_generated - computed: true, optional: false, required: false
  public get timeFirstSnapshotGenerated() {
    return this.getStringAttribute('time_first_snapshot_generated');
  }

  // time_last_snapshot_generated - computed: true, optional: false, required: false
  public get timeLastSnapshotGenerated() {
    return this.getStringAttribute('time_last_snapshot_generated');
  }
}

export class DataOciOpsiAwrHubAwrSourcesSummaryItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference {
    return new DataOciOpsiAwrHubAwrSourcesSummaryItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub_awr_sources_summary oci_opsi_awr_hub_awr_sources_summary}
*/
export class DataOciOpsiAwrHubAwrSourcesSummary extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_awr_hub_awr_sources_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSourcesSummary resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiAwrHubAwrSourcesSummary to import
  * @param importFromId The id of the existing DataOciOpsiAwrHubAwrSourcesSummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub_awr_sources_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiAwrHubAwrSourcesSummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_awr_hub_awr_sources_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub_awr_sources_summary oci_opsi_awr_hub_awr_sources_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiAwrHubAwrSourcesSummaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiAwrHubAwrSourcesSummaryConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_awr_hub_awr_sources_summary',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awrHubId = config.awrHubId;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // awr_hub_id - computed: false, optional: false, required: true
  private _awrHubId?: string; 
  public get awrHubId() {
    return this.getStringAttribute('awr_hub_id');
  }
  public set awrHubId(value: string) {
    this._awrHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awrHubIdInput() {
    return this._awrHubId;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOpsiAwrHubAwrSourcesSummaryItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      awr_hub_id: cdktf.stringToTerraform(this._awrHubId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      awr_hub_id: {
        value: cdktf.stringToHclTerraform(this._awrHubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
