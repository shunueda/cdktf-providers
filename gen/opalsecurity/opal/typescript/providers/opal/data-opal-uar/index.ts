// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/uar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalUarConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the UAR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/uar#uar_id DataOpalUar#uar_id}
  */
  readonly uarId: string;
}
export interface DataOpalUarUarScopeTags {
}

export function dataOpalUarUarScopeTagsToTerraform(struct?: DataOpalUarUarScopeTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalUarUarScopeTagsToHclTerraform(struct?: DataOpalUarUarScopeTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalUarUarScopeTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpalUarUarScopeTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalUarUarScopeTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOpalUarUarScopeTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpalUarUarScopeTagsOutputReference {
    return new DataOpalUarUarScopeTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpalUarUarScope {
}

export function dataOpalUarUarScopeToTerraform(struct?: DataOpalUarUarScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalUarUarScopeToHclTerraform(struct?: DataOpalUarUarScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalUarUarScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalUarUarScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalUarUarScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admins - computed: true, optional: false, required: false
  public get admins() {
    return this.getListAttribute('admins');
  }

  // apps - computed: true, optional: false, required: false
  public get apps() {
    return this.getListAttribute('apps');
  }

  // entities - computed: true, optional: false, required: false
  public get entities() {
    return this.getListAttribute('entities');
  }

  // filter_operator - computed: true, optional: false, required: false
  public get filterOperator() {
    return this.getStringAttribute('filter_operator');
  }

  // group_types - computed: true, optional: false, required: false
  public get groupTypes() {
    return this.getListAttribute('group_types');
  }

  // group_visibility - computed: true, optional: false, required: false
  public get groupVisibility() {
    return this.getStringAttribute('group_visibility');
  }

  // include_group_bindings - computed: true, optional: false, required: false
  public get includeGroupBindings() {
    return this.getBooleanAttribute('include_group_bindings');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // resource_types - computed: true, optional: false, required: false
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataOpalUarUarScopeTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/uar opal_uar}
*/
export class DataOpalUar extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_uar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalUar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalUar to import
  * @param importFromId The id of the existing DataOpalUar that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/uar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalUar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_uar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/uar opal_uar} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalUarConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpalUarConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_uar',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._uarId = config.uarId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deadline - computed: true, optional: false, required: false
  public get deadline() {
    return this.getStringAttribute('deadline');
  }

  // instantly_action_reviews - computed: true, optional: false, required: false
  public get instantlyActionReviews() {
    return this.getBooleanAttribute('instantly_action_reviews');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reviewer_assignment_policy - computed: true, optional: false, required: false
  public get reviewerAssignmentPolicy() {
    return this.getStringAttribute('reviewer_assignment_policy');
  }

  // self_review_allowed - computed: true, optional: false, required: false
  public get selfReviewAllowed() {
    return this.getBooleanAttribute('self_review_allowed');
  }

  // send_reviewer_assignment_notification - computed: true, optional: false, required: false
  public get sendReviewerAssignmentNotification() {
    return this.getBooleanAttribute('send_reviewer_assignment_notification');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // uar_id - computed: false, optional: false, required: true
  private _uarId?: string; 
  public get uarId() {
    return this.getStringAttribute('uar_id');
  }
  public set uarId(value: string) {
    this._uarId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uarIdInput() {
    return this._uarId;
  }

  // uar_scope - computed: true, optional: false, required: false
  private _uarScope = new DataOpalUarUarScopeOutputReference(this, "uar_scope");
  public get uarScope() {
    return this._uarScope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      uar_id: cdktf.stringToTerraform(this._uarId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      uar_id: {
        value: cdktf.stringToHclTerraform(this._uarId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
