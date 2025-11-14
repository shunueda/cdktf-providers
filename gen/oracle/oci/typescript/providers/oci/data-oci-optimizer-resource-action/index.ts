// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/optimizer_resource_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOptimizerResourceActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/optimizer_resource_action#include_resource_metadata DataOciOptimizerResourceAction#include_resource_metadata}
  */
  readonly includeResourceMetadata?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/optimizer_resource_action#resource_action_id DataOciOptimizerResourceAction#resource_action_id}
  */
  readonly resourceActionId: string;
}
export interface DataOciOptimizerResourceActionAction {
}

export function dataOciOptimizerResourceActionActionToTerraform(struct?: DataOciOptimizerResourceActionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOptimizerResourceActionActionToHclTerraform(struct?: DataOciOptimizerResourceActionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOptimizerResourceActionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciOptimizerResourceActionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOptimizerResourceActionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciOptimizerResourceActionActionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOptimizerResourceActionActionOutputReference {
    return new DataOciOptimizerResourceActionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/optimizer_resource_action oci_optimizer_resource_action}
*/
export class DataOciOptimizerResourceAction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_optimizer_resource_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOptimizerResourceAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOptimizerResourceAction to import
  * @param importFromId The id of the existing DataOciOptimizerResourceAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/optimizer_resource_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOptimizerResourceAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_optimizer_resource_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/optimizer_resource_action oci_optimizer_resource_action} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOptimizerResourceActionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOptimizerResourceActionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_optimizer_resource_action',
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
    this._includeResourceMetadata = config.includeResourceMetadata;
    this._resourceActionId = config.resourceActionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  private _action = new DataOciOptimizerResourceActionActionList(this, "action", false);
  public get action() {
    return this._action;
  }

  // category_id - computed: true, optional: false, required: false
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compartment_name - computed: true, optional: false, required: false
  public get compartmentName() {
    return this.getStringAttribute('compartment_name');
  }

  // estimated_cost_saving - computed: true, optional: false, required: false
  public get estimatedCostSaving() {
    return this.getNumberAttribute('estimated_cost_saving');
  }

  // extended_metadata - computed: true, optional: false, required: false
  private _extendedMetadata = new cdktf.StringMap(this, "extended_metadata");
  public get extendedMetadata() {
    return this._extendedMetadata;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_resource_metadata - computed: false, optional: true, required: false
  private _includeResourceMetadata?: boolean | cdktf.IResolvable; 
  public get includeResourceMetadata() {
    return this.getBooleanAttribute('include_resource_metadata');
  }
  public set includeResourceMetadata(value: boolean | cdktf.IResolvable) {
    this._includeResourceMetadata = value;
  }
  public resetIncludeResourceMetadata() {
    this._includeResourceMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeResourceMetadataInput() {
    return this._includeResourceMetadata;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recommendation_id - computed: true, optional: false, required: false
  public get recommendationId() {
    return this.getStringAttribute('recommendation_id');
  }

  // resource_action_id - computed: false, optional: false, required: true
  private _resourceActionId?: string; 
  public get resourceActionId() {
    return this.getStringAttribute('resource_action_id');
  }
  public set resourceActionId(value: string) {
    this._resourceActionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceActionIdInput() {
    return this._resourceActionId;
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_status_begin - computed: true, optional: false, required: false
  public get timeStatusBegin() {
    return this.getStringAttribute('time_status_begin');
  }

  // time_status_end - computed: true, optional: false, required: false
  public get timeStatusEnd() {
    return this.getStringAttribute('time_status_end');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_resource_metadata: cdktf.booleanToTerraform(this._includeResourceMetadata),
      resource_action_id: cdktf.stringToTerraform(this._resourceActionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_resource_metadata: {
        value: cdktf.booleanToHclTerraform(this._includeResourceMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_action_id: {
        value: cdktf.stringToHclTerraform(this._resourceActionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
