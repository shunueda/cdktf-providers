// https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PartitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#analytics_tier Partition#analytics_tier}
  */
  readonly analyticsTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#id Partition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#is_compliant Partition#is_compliant}
  */
  readonly isCompliant?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the partition is included in the default search scope. Configuring this property is exclusively permitted for flex partitions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#is_included_in_default_search Partition#is_included_in_default_search}
  */
  readonly isIncludedInDefaultSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#name Partition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#reduce_retention_period_immediately Partition#reduce_retention_period_immediately}
  */
  readonly reduceRetentionPeriodImmediately?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#retention_period Partition#retention_period}
  */
  readonly retentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#routing_expression Partition#routing_expression}
  */
  readonly routingExpression?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition sumologic_partition}
*/
export class Partition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_partition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Partition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Partition to import
  * @param importFromId The id of the existing Partition that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Partition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_partition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.1.8/docs/resources/partition sumologic_partition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PartitionConfig
  */
  public constructor(scope: Construct, id: string, config: PartitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_partition',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.1.8',
        providerVersionConstraint: '3.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._analyticsTier = config.analyticsTier;
    this._id = config.id;
    this._isCompliant = config.isCompliant;
    this._isIncludedInDefaultSearch = config.isIncludedInDefaultSearch;
    this._name = config.name;
    this._reduceRetentionPeriodImmediately = config.reduceRetentionPeriodImmediately;
    this._retentionPeriod = config.retentionPeriod;
    this._routingExpression = config.routingExpression;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytics_tier - computed: false, optional: true, required: false
  private _analyticsTier?: string; 
  public get analyticsTier() {
    return this.getStringAttribute('analytics_tier');
  }
  public set analyticsTier(value: string) {
    this._analyticsTier = value;
  }
  public resetAnalyticsTier() {
    this._analyticsTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsTierInput() {
    return this._analyticsTier;
  }

  // data_forwarding_id - computed: true, optional: false, required: false
  public get dataForwardingId() {
    return this.getStringAttribute('data_forwarding_id');
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

  // index_type - computed: true, optional: false, required: false
  public get indexType() {
    return this.getStringAttribute('index_type');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // is_compliant - computed: false, optional: true, required: false
  private _isCompliant?: boolean | cdktf.IResolvable; 
  public get isCompliant() {
    return this.getBooleanAttribute('is_compliant');
  }
  public set isCompliant(value: boolean | cdktf.IResolvable) {
    this._isCompliant = value;
  }
  public resetIsCompliant() {
    this._isCompliant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompliantInput() {
    return this._isCompliant;
  }

  // is_included_in_default_search - computed: false, optional: true, required: false
  private _isIncludedInDefaultSearch?: boolean | cdktf.IResolvable; 
  public get isIncludedInDefaultSearch() {
    return this.getBooleanAttribute('is_included_in_default_search');
  }
  public set isIncludedInDefaultSearch(value: boolean | cdktf.IResolvable) {
    this._isIncludedInDefaultSearch = value;
  }
  public resetIsIncludedInDefaultSearch() {
    this._isIncludedInDefaultSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIncludedInDefaultSearchInput() {
    return this._isIncludedInDefaultSearch;
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

  // reduce_retention_period_immediately - computed: false, optional: true, required: false
  private _reduceRetentionPeriodImmediately?: boolean | cdktf.IResolvable; 
  public get reduceRetentionPeriodImmediately() {
    return this.getBooleanAttribute('reduce_retention_period_immediately');
  }
  public set reduceRetentionPeriodImmediately(value: boolean | cdktf.IResolvable) {
    this._reduceRetentionPeriodImmediately = value;
  }
  public resetReduceRetentionPeriodImmediately() {
    this._reduceRetentionPeriodImmediately = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reduceRetentionPeriodImmediatelyInput() {
    return this._reduceRetentionPeriodImmediately;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: number; 
  public get retentionPeriod() {
    return this.getNumberAttribute('retention_period');
  }
  public set retentionPeriod(value: number) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // routing_expression - computed: false, optional: true, required: false
  private _routingExpression?: string; 
  public get routingExpression() {
    return this.getStringAttribute('routing_expression');
  }
  public set routingExpression(value: string) {
    this._routingExpression = value;
  }
  public resetRoutingExpression() {
    this._routingExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingExpressionInput() {
    return this._routingExpression;
  }

  // total_bytes - computed: true, optional: false, required: false
  public get totalBytes() {
    return this.getNumberAttribute('total_bytes');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytics_tier: cdktf.stringToTerraform(this._analyticsTier),
      id: cdktf.stringToTerraform(this._id),
      is_compliant: cdktf.booleanToTerraform(this._isCompliant),
      is_included_in_default_search: cdktf.booleanToTerraform(this._isIncludedInDefaultSearch),
      name: cdktf.stringToTerraform(this._name),
      reduce_retention_period_immediately: cdktf.booleanToTerraform(this._reduceRetentionPeriodImmediately),
      retention_period: cdktf.numberToTerraform(this._retentionPeriod),
      routing_expression: cdktf.stringToTerraform(this._routingExpression),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analytics_tier: {
        value: cdktf.stringToHclTerraform(this._analyticsTier),
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
      is_compliant: {
        value: cdktf.booleanToHclTerraform(this._isCompliant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_included_in_default_search: {
        value: cdktf.booleanToHclTerraform(this._isIncludedInDefaultSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reduce_retention_period_immediately: {
        value: cdktf.booleanToHclTerraform(this._reduceRetentionPeriodImmediately),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retention_period: {
        value: cdktf.numberToHclTerraform(this._retentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_expression: {
        value: cdktf.stringToHclTerraform(this._routingExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
