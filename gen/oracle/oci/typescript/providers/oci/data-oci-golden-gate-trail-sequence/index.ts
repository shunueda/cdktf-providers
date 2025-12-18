// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciGoldenGateTrailSequenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence#deployment_id DataOciGoldenGateTrailSequence#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence#display_name DataOciGoldenGateTrailSequence#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence#id DataOciGoldenGateTrailSequence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence#trail_file_id DataOciGoldenGateTrailSequence#trail_file_id}
  */
  readonly trailFileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence#trail_sequence_id DataOciGoldenGateTrailSequence#trail_sequence_id}
  */
  readonly trailSequenceId: string;
}
export interface DataOciGoldenGateTrailSequenceItems {
}

export function dataOciGoldenGateTrailSequenceItemsToTerraform(struct?: DataOciGoldenGateTrailSequenceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciGoldenGateTrailSequenceItemsToHclTerraform(struct?: DataOciGoldenGateTrailSequenceItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciGoldenGateTrailSequenceItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciGoldenGateTrailSequenceItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciGoldenGateTrailSequenceItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // sequence_id - computed: true, optional: false, required: false
  public get sequenceId() {
    return this.getStringAttribute('sequence_id');
  }

  // size_in_bytes - computed: true, optional: false, required: false
  public get sizeInBytes() {
    return this.getNumberAttribute('size_in_bytes');
  }

  // time_last_updated - computed: true, optional: false, required: false
  public get timeLastUpdated() {
    return this.getStringAttribute('time_last_updated');
  }
}

export class DataOciGoldenGateTrailSequenceItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciGoldenGateTrailSequenceItemsOutputReference {
    return new DataOciGoldenGateTrailSequenceItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence oci_golden_gate_trail_sequence}
*/
export class DataOciGoldenGateTrailSequence extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_golden_gate_trail_sequence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciGoldenGateTrailSequence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciGoldenGateTrailSequence to import
  * @param importFromId The id of the existing DataOciGoldenGateTrailSequence that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciGoldenGateTrailSequence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_golden_gate_trail_sequence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/golden_gate_trail_sequence oci_golden_gate_trail_sequence} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciGoldenGateTrailSequenceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciGoldenGateTrailSequenceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_golden_gate_trail_sequence',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploymentId = config.deploymentId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._trailFileId = config.trailFileId;
    this._trailSequenceId = config.trailSequenceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId?: string; 
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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
  private _items = new DataOciGoldenGateTrailSequenceItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // time_last_fetched - computed: true, optional: false, required: false
  public get timeLastFetched() {
    return this.getStringAttribute('time_last_fetched');
  }

  // trail_file_id - computed: false, optional: false, required: true
  private _trailFileId?: string; 
  public get trailFileId() {
    return this.getStringAttribute('trail_file_id');
  }
  public set trailFileId(value: string) {
    this._trailFileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trailFileIdInput() {
    return this._trailFileId;
  }

  // trail_sequence_id - computed: false, optional: false, required: true
  private _trailSequenceId?: string; 
  public get trailSequenceId() {
    return this.getStringAttribute('trail_sequence_id');
  }
  public set trailSequenceId(value: string) {
    this._trailSequenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trailSequenceIdInput() {
    return this._trailSequenceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      trail_file_id: cdktf.stringToTerraform(this._trailFileId),
      trail_sequence_id: cdktf.stringToTerraform(this._trailSequenceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployment_id: {
        value: cdktf.stringToHclTerraform(this._deploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      trail_file_id: {
        value: cdktf.stringToHclTerraform(this._trailFileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trail_sequence_id: {
        value: cdktf.stringToHclTerraform(this._trailSequenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
