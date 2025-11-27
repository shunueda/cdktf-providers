// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZentralOsqueryQueryConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query#id DataZentralOsqueryQuery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Name of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query#name DataZentralOsqueryQuery#name}
  */
  readonly name?: string;
  /**
  * Attributes to link a query to a pack for scheduling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query#scheduling DataZentralOsqueryQuery#scheduling}
  */
  readonly scheduling?: DataZentralOsqueryQueryScheduling;
  /**
  * `ID` of the machine tag that is updated by this query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query#tag_id DataZentralOsqueryQuery#tag_id}
  */
  readonly tagId?: number;
}
export interface DataZentralOsqueryQueryScheduling {
  /**
  * Restrict this query to a percentage (1-100) of target hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query#shard DataZentralOsqueryQuery#shard}
  */
  readonly shard?: number;
}

export function dataZentralOsqueryQuerySchedulingToTerraform(struct?: DataZentralOsqueryQueryScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard: cdktf.numberToTerraform(struct!.shard),
  }
}


export function dataZentralOsqueryQuerySchedulingToHclTerraform(struct?: DataZentralOsqueryQueryScheduling | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shard: {
      value: cdktf.numberToHclTerraform(struct!.shard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZentralOsqueryQuerySchedulingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataZentralOsqueryQueryScheduling | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shard !== undefined) {
      hasAnyValues = true;
      internalValueResult.shard = this._shard;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZentralOsqueryQueryScheduling | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shard = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shard = value.shard;
    }
  }

  // can_be_denylisted - computed: true, optional: false, required: false
  public get canBeDenylisted() {
    return this.getBooleanAttribute('can_be_denylisted');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // log_removed_actions - computed: true, optional: false, required: false
  public get logRemovedActions() {
    return this.getBooleanAttribute('log_removed_actions');
  }

  // pack_id - computed: true, optional: false, required: false
  public get packId() {
    return this.getNumberAttribute('pack_id');
  }

  // shard - computed: true, optional: true, required: false
  private _shard?: number; 
  public get shard() {
    return this.getNumberAttribute('shard');
  }
  public set shard(value: number) {
    this._shard = value;
  }
  public resetShard() {
    this._shard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard;
  }

  // snapshot_mode - computed: true, optional: false, required: false
  public get snapshotMode() {
    return this.getBooleanAttribute('snapshot_mode');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query zentral_osquery_query}
*/
export class DataZentralOsqueryQuery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_osquery_query";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZentralOsqueryQuery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZentralOsqueryQuery to import
  * @param importFromId The id of the existing DataZentralOsqueryQuery that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZentralOsqueryQuery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_osquery_query", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/data-sources/osquery_query zentral_osquery_query} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZentralOsqueryQueryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZentralOsqueryQueryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zentral_osquery_query',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
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
    this._name = config.name;
    this._scheduling.internalValue = config.scheduling;
    this._tagId = config.tagId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compliance_check_enabled - computed: true, optional: false, required: false
  public get complianceCheckEnabled() {
    return this.getBooleanAttribute('compliance_check_enabled');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // minimum_osquery_version - computed: true, optional: false, required: false
  public get minimumOsqueryVersion() {
    return this.getStringAttribute('minimum_osquery_version');
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

  // platforms - computed: true, optional: false, required: false
  public get platforms() {
    return cdktf.Fn.tolist(this.getListAttribute('platforms'));
  }

  // scheduling - computed: true, optional: true, required: false
  private _scheduling = new DataZentralOsqueryQuerySchedulingOutputReference(this, "scheduling");
  public get scheduling() {
    return this._scheduling;
  }
  public putScheduling(value: DataZentralOsqueryQueryScheduling) {
    this._scheduling.internalValue = value;
  }
  public resetScheduling() {
    this._scheduling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingInput() {
    return this._scheduling.internalValue;
  }

  // sql - computed: true, optional: false, required: false
  public get sql() {
    return this.getStringAttribute('sql');
  }

  // tag_id - computed: false, optional: true, required: false
  private _tagId?: number; 
  public get tagId() {
    return this.getNumberAttribute('tag_id');
  }
  public set tagId(value: number) {
    this._tagId = value;
  }
  public resetTagId() {
    this._tagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scheduling: dataZentralOsqueryQuerySchedulingToTerraform(this._scheduling.internalValue),
      tag_id: cdktf.numberToTerraform(this._tagId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling: {
        value: dataZentralOsqueryQuerySchedulingToHclTerraform(this._scheduling.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataZentralOsqueryQueryScheduling",
      },
      tag_id: {
        value: cdktf.numberToHclTerraform(this._tagId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
