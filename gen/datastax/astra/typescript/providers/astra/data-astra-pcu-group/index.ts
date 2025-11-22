// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAstraPcuGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the PCU group to retrieve.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group#pcu_group_id DataAstraPcuGroup#pcu_group_id}
  */
  readonly pcuGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group astra_pcu_group}
*/
export class DataAstraPcuGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_pcu_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAstraPcuGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAstraPcuGroup to import
  * @param importFromId The id of the existing DataAstraPcuGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAstraPcuGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_pcu_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/data-sources/pcu_group astra_pcu_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAstraPcuGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataAstraPcuGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_pcu_group',
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

  // cache_type - computed: true, optional: false, required: false
  public get cacheType() {
    return this.getStringAttribute('cache_type');
  }

  // cloud_provider - computed: true, optional: false, required: false
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_capacity - computed: true, optional: false, required: false
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }

  // min_capacity - computed: true, optional: false, required: false
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

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

  // provision_type - computed: true, optional: false, required: false
  public get provisionType() {
    return this.getStringAttribute('provision_type');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // reserved_capacity - computed: true, optional: false, required: false
  public get reservedCapacity() {
    return this.getNumberAttribute('reserved_capacity');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
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
