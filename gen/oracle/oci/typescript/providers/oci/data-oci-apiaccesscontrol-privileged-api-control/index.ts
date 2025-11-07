// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciApiaccesscontrolPrivilegedApiControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_control#privileged_api_control_id DataOciApiaccesscontrolPrivilegedApiControl#privileged_api_control_id}
  */
  readonly privilegedApiControlId: string;
}
export interface DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct {
}

export function dataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructToTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructToHclTerraform(struct?: DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // attribute_names - computed: true, optional: false, required: false
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
}

export class DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructOutputReference {
    return new DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_control oci_apiaccesscontrol_privileged_api_control}
*/
export class DataOciApiaccesscontrolPrivilegedApiControl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_apiaccesscontrol_privileged_api_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciApiaccesscontrolPrivilegedApiControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciApiaccesscontrolPrivilegedApiControl to import
  * @param importFromId The id of the existing DataOciApiaccesscontrolPrivilegedApiControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciApiaccesscontrolPrivilegedApiControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_apiaccesscontrol_privileged_api_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/apiaccesscontrol_privileged_api_control oci_apiaccesscontrol_privileged_api_control} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciApiaccesscontrolPrivilegedApiControlConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciApiaccesscontrolPrivilegedApiControlConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_apiaccesscontrol_privileged_api_control',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._privilegedApiControlId = config.privilegedApiControlId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approver_group_id_list - computed: true, optional: false, required: false
  public get approverGroupIdList() {
    return this.getListAttribute('approver_group_id_list');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // notification_topic_id - computed: true, optional: false, required: false
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }

  // number_of_approvers - computed: true, optional: false, required: false
  public get numberOfApprovers() {
    return this.getNumberAttribute('number_of_approvers');
  }

  // privileged_api_control_id - computed: false, optional: false, required: true
  private _privilegedApiControlId?: string; 
  public get privilegedApiControlId() {
    return this.getStringAttribute('privileged_api_control_id');
  }
  public set privilegedApiControlId(value: string) {
    this._privilegedApiControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedApiControlIdInput() {
    return this._privilegedApiControlId;
  }

  // privileged_operation_list - computed: true, optional: false, required: false
  private _privilegedOperationList = new DataOciApiaccesscontrolPrivilegedApiControlPrivilegedOperationListStructList(this, "privileged_operation_list", false);
  public get privilegedOperationList() {
    return this._privilegedOperationList;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    return this.getListAttribute('resources');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_details - computed: true, optional: false, required: false
  public get stateDetails() {
    return this.getStringAttribute('state_details');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_deleted - computed: true, optional: false, required: false
  public get timeDeleted() {
    return this.getStringAttribute('time_deleted');
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
      privileged_api_control_id: cdktf.stringToTerraform(this._privilegedApiControlId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      privileged_api_control_id: {
        value: cdktf.stringToHclTerraform(this._privilegedApiControlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
