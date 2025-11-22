// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstraPcuGroupAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The PCU group to retrieve associations for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group_associations#pcu_group_id DataAstraPcuGroupAssociations#pcu_group_id}
  */
  readonly pcuGroupId: string;
}
export interface DataAstraPcuGroupAssociationsResults {
}

export function dataAstraPcuGroupAssociationsResultsToTerraform(struct?: DataAstraPcuGroupAssociationsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAstraPcuGroupAssociationsResultsToHclTerraform(struct?: DataAstraPcuGroupAssociationsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAstraPcuGroupAssociationsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAstraPcuGroupAssociationsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAstraPcuGroupAssociationsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datacenter_id - computed: true, optional: false, required: false
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }
}

export class DataAstraPcuGroupAssociationsResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataAstraPcuGroupAssociationsResultsOutputReference {
    return new DataAstraPcuGroupAssociationsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group_associations astra_pcu_group_associations}
*/
export class DataAstraPcuGroupAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_pcu_group_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstraPcuGroupAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstraPcuGroupAssociations to import
  * @param importFromId The id of the existing DataAstraPcuGroupAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstraPcuGroupAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_pcu_group_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group_associations astra_pcu_group_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstraPcuGroupAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAstraPcuGroupAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_pcu_group_associations',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._pcuGroupId = config.pcuGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // pcu_group_id - computed: false, optional: false, required: true
  private _pcuGroupId?: string; 
  public get pcuGroupId() {
    return this.getStringAttribute('pcu_group_id');
  }
  public set pcuGroupId(value: string) {
    this._pcuGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pcuGroupIdInput() {
    return this._pcuGroupId;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataAstraPcuGroupAssociationsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      pcu_group_id: cdktf.stringToTerraform(this._pcuGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      pcu_group_id: {
        value: cdktf.stringToHclTerraform(this._pcuGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
