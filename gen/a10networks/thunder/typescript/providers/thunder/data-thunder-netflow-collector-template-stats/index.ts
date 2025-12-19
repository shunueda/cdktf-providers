// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetflowCollectorTemplateStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#id DataThunderNetflowCollectorTemplateStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#stats DataThunderNetflowCollectorTemplateStats#stats}
  */
  readonly stats?: DataThunderNetflowCollectorTemplateStatsStats;
}
export interface DataThunderNetflowCollectorTemplateStatsStats {
  /**
  * Netflow Templates Dropped Maximum Limit Reached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#template_drop_exceeded DataThunderNetflowCollectorTemplateStats#template_drop_exceeded}
  */
  readonly templateDropExceeded?: number;
  /**
  * Netflow Templates Dropped OOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#template_drop_out_of_memory DataThunderNetflowCollectorTemplateStats#template_drop_out_of_memory}
  */
  readonly templateDropOutOfMemory?: number;
  /**
  * Netflow v10(IPFIX) Templates Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#v10_templates_created DataThunderNetflowCollectorTemplateStats#v10_templates_created}
  */
  readonly v10TemplatesCreated?: number;
  /**
  * Netflow v10(IPFIX) Templates Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#v10_templates_deleted DataThunderNetflowCollectorTemplateStats#v10_templates_deleted}
  */
  readonly v10TemplatesDeleted?: number;
  /**
  * Netflow v9 Templates Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#v9_templates_created DataThunderNetflowCollectorTemplateStats#v9_templates_created}
  */
  readonly v9TemplatesCreated?: number;
  /**
  * Netflow v9 Templates Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#v9_templates_deleted DataThunderNetflowCollectorTemplateStats#v9_templates_deleted}
  */
  readonly v9TemplatesDeleted?: number;
}

export function dataThunderNetflowCollectorTemplateStatsStatsToTerraform(struct?: DataThunderNetflowCollectorTemplateStatsStatsOutputReference | DataThunderNetflowCollectorTemplateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_drop_exceeded: cdktf.numberToTerraform(struct!.templateDropExceeded),
    template_drop_out_of_memory: cdktf.numberToTerraform(struct!.templateDropOutOfMemory),
    v10_templates_created: cdktf.numberToTerraform(struct!.v10TemplatesCreated),
    v10_templates_deleted: cdktf.numberToTerraform(struct!.v10TemplatesDeleted),
    v9_templates_created: cdktf.numberToTerraform(struct!.v9TemplatesCreated),
    v9_templates_deleted: cdktf.numberToTerraform(struct!.v9TemplatesDeleted),
  }
}


export function dataThunderNetflowCollectorTemplateStatsStatsToHclTerraform(struct?: DataThunderNetflowCollectorTemplateStatsStatsOutputReference | DataThunderNetflowCollectorTemplateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_drop_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.templateDropExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_drop_out_of_memory: {
      value: cdktf.numberToHclTerraform(struct!.templateDropOutOfMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v10_templates_created: {
      value: cdktf.numberToHclTerraform(struct!.v10TemplatesCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v10_templates_deleted: {
      value: cdktf.numberToHclTerraform(struct!.v10TemplatesDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v9_templates_created: {
      value: cdktf.numberToHclTerraform(struct!.v9TemplatesCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v9_templates_deleted: {
      value: cdktf.numberToHclTerraform(struct!.v9TemplatesDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetflowCollectorTemplateStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetflowCollectorTemplateStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateDropExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDropExceeded = this._templateDropExceeded;
    }
    if (this._templateDropOutOfMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDropOutOfMemory = this._templateDropOutOfMemory;
    }
    if (this._v10TemplatesCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.v10TemplatesCreated = this._v10TemplatesCreated;
    }
    if (this._v10TemplatesDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.v10TemplatesDeleted = this._v10TemplatesDeleted;
    }
    if (this._v9TemplatesCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.v9TemplatesCreated = this._v9TemplatesCreated;
    }
    if (this._v9TemplatesDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.v9TemplatesDeleted = this._v9TemplatesDeleted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetflowCollectorTemplateStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateDropExceeded = undefined;
      this._templateDropOutOfMemory = undefined;
      this._v10TemplatesCreated = undefined;
      this._v10TemplatesDeleted = undefined;
      this._v9TemplatesCreated = undefined;
      this._v9TemplatesDeleted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateDropExceeded = value.templateDropExceeded;
      this._templateDropOutOfMemory = value.templateDropOutOfMemory;
      this._v10TemplatesCreated = value.v10TemplatesCreated;
      this._v10TemplatesDeleted = value.v10TemplatesDeleted;
      this._v9TemplatesCreated = value.v9TemplatesCreated;
      this._v9TemplatesDeleted = value.v9TemplatesDeleted;
    }
  }

  // template_drop_exceeded - computed: false, optional: true, required: false
  private _templateDropExceeded?: number; 
  public get templateDropExceeded() {
    return this.getNumberAttribute('template_drop_exceeded');
  }
  public set templateDropExceeded(value: number) {
    this._templateDropExceeded = value;
  }
  public resetTemplateDropExceeded() {
    this._templateDropExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDropExceededInput() {
    return this._templateDropExceeded;
  }

  // template_drop_out_of_memory - computed: false, optional: true, required: false
  private _templateDropOutOfMemory?: number; 
  public get templateDropOutOfMemory() {
    return this.getNumberAttribute('template_drop_out_of_memory');
  }
  public set templateDropOutOfMemory(value: number) {
    this._templateDropOutOfMemory = value;
  }
  public resetTemplateDropOutOfMemory() {
    this._templateDropOutOfMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDropOutOfMemoryInput() {
    return this._templateDropOutOfMemory;
  }

  // v10_templates_created - computed: false, optional: true, required: false
  private _v10TemplatesCreated?: number; 
  public get v10TemplatesCreated() {
    return this.getNumberAttribute('v10_templates_created');
  }
  public set v10TemplatesCreated(value: number) {
    this._v10TemplatesCreated = value;
  }
  public resetV10TemplatesCreated() {
    this._v10TemplatesCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v10TemplatesCreatedInput() {
    return this._v10TemplatesCreated;
  }

  // v10_templates_deleted - computed: false, optional: true, required: false
  private _v10TemplatesDeleted?: number; 
  public get v10TemplatesDeleted() {
    return this.getNumberAttribute('v10_templates_deleted');
  }
  public set v10TemplatesDeleted(value: number) {
    this._v10TemplatesDeleted = value;
  }
  public resetV10TemplatesDeleted() {
    this._v10TemplatesDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v10TemplatesDeletedInput() {
    return this._v10TemplatesDeleted;
  }

  // v9_templates_created - computed: false, optional: true, required: false
  private _v9TemplatesCreated?: number; 
  public get v9TemplatesCreated() {
    return this.getNumberAttribute('v9_templates_created');
  }
  public set v9TemplatesCreated(value: number) {
    this._v9TemplatesCreated = value;
  }
  public resetV9TemplatesCreated() {
    this._v9TemplatesCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v9TemplatesCreatedInput() {
    return this._v9TemplatesCreated;
  }

  // v9_templates_deleted - computed: false, optional: true, required: false
  private _v9TemplatesDeleted?: number; 
  public get v9TemplatesDeleted() {
    return this.getNumberAttribute('v9_templates_deleted');
  }
  public set v9TemplatesDeleted(value: number) {
    this._v9TemplatesDeleted = value;
  }
  public resetV9TemplatesDeleted() {
    this._v9TemplatesDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v9TemplatesDeletedInput() {
    return this._v9TemplatesDeleted;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats thunder_netflow_collector_template_stats}
*/
export class DataThunderNetflowCollectorTemplateStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_collector_template_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetflowCollectorTemplateStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetflowCollectorTemplateStats to import
  * @param importFromId The id of the existing DataThunderNetflowCollectorTemplateStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetflowCollectorTemplateStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_collector_template_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/netflow_collector_template_stats thunder_netflow_collector_template_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetflowCollectorTemplateStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetflowCollectorTemplateStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_collector_template_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderNetflowCollectorTemplateStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNetflowCollectorTemplateStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderNetflowCollectorTemplateStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderNetflowCollectorTemplateStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetflowCollectorTemplateStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
