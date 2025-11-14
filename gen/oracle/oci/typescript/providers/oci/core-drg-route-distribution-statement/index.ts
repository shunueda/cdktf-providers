// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreDrgRouteDistributionStatementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#action CoreDrgRouteDistributionStatement#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#drg_route_distribution_id CoreDrgRouteDistributionStatement#drg_route_distribution_id}
  */
  readonly drgRouteDistributionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#id CoreDrgRouteDistributionStatement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#priority CoreDrgRouteDistributionStatement#priority}
  */
  readonly priority: number;
  /**
  * match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#match_criteria CoreDrgRouteDistributionStatement#match_criteria}
  */
  readonly matchCriteria: CoreDrgRouteDistributionStatementMatchCriteria;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#timeouts CoreDrgRouteDistributionStatement#timeouts}
  */
  readonly timeouts?: CoreDrgRouteDistributionStatementTimeouts;
}
export interface CoreDrgRouteDistributionStatementMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#attachment_type CoreDrgRouteDistributionStatement#attachment_type}
  */
  readonly attachmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#drg_attachment_id CoreDrgRouteDistributionStatement#drg_attachment_id}
  */
  readonly drgAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#match_type CoreDrgRouteDistributionStatement#match_type}
  */
  readonly matchType?: string;
}

export function coreDrgRouteDistributionStatementMatchCriteriaToTerraform(struct?: CoreDrgRouteDistributionStatementMatchCriteriaOutputReference | CoreDrgRouteDistributionStatementMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attachment_type: cdktf.stringToTerraform(struct!.attachmentType),
    drg_attachment_id: cdktf.stringToTerraform(struct!.drgAttachmentId),
    match_type: cdktf.stringToTerraform(struct!.matchType),
  }
}


export function coreDrgRouteDistributionStatementMatchCriteriaToHclTerraform(struct?: CoreDrgRouteDistributionStatementMatchCriteriaOutputReference | CoreDrgRouteDistributionStatementMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attachment_type: {
      value: cdktf.stringToHclTerraform(struct!.attachmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drg_attachment_id: {
      value: cdktf.stringToHclTerraform(struct!.drgAttachmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreDrgRouteDistributionStatementMatchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreDrgRouteDistributionStatementMatchCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attachmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attachmentType = this._attachmentType;
    }
    if (this._drgAttachmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.drgAttachmentId = this._drgAttachmentId;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreDrgRouteDistributionStatementMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attachmentType = undefined;
      this._drgAttachmentId = undefined;
      this._matchType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attachmentType = value.attachmentType;
      this._drgAttachmentId = value.drgAttachmentId;
      this._matchType = value.matchType;
    }
  }

  // attachment_type - computed: false, optional: true, required: false
  private _attachmentType?: string; 
  public get attachmentType() {
    return this.getStringAttribute('attachment_type');
  }
  public set attachmentType(value: string) {
    this._attachmentType = value;
  }
  public resetAttachmentType() {
    this._attachmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentTypeInput() {
    return this._attachmentType;
  }

  // drg_attachment_id - computed: false, optional: true, required: false
  private _drgAttachmentId?: string; 
  public get drgAttachmentId() {
    return this.getStringAttribute('drg_attachment_id');
  }
  public set drgAttachmentId(value: string) {
    this._drgAttachmentId = value;
  }
  public resetDrgAttachmentId() {
    this._drgAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drgAttachmentIdInput() {
    return this._drgAttachmentId;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }
}
export interface CoreDrgRouteDistributionStatementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#create CoreDrgRouteDistributionStatement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#delete CoreDrgRouteDistributionStatement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#update CoreDrgRouteDistributionStatement#update}
  */
  readonly update?: string;
}

export function coreDrgRouteDistributionStatementTimeoutsToTerraform(struct?: CoreDrgRouteDistributionStatementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function coreDrgRouteDistributionStatementTimeoutsToHclTerraform(struct?: CoreDrgRouteDistributionStatementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreDrgRouteDistributionStatementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreDrgRouteDistributionStatementTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreDrgRouteDistributionStatementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement oci_core_drg_route_distribution_statement}
*/
export class CoreDrgRouteDistributionStatement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_drg_route_distribution_statement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreDrgRouteDistributionStatement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreDrgRouteDistributionStatement to import
  * @param importFromId The id of the existing CoreDrgRouteDistributionStatement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreDrgRouteDistributionStatement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_drg_route_distribution_statement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/core_drg_route_distribution_statement oci_core_drg_route_distribution_statement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreDrgRouteDistributionStatementConfig
  */
  public constructor(scope: Construct, id: string, config: CoreDrgRouteDistributionStatementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_drg_route_distribution_statement',
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
    this._action = config.action;
    this._drgRouteDistributionId = config.drgRouteDistributionId;
    this._id = config.id;
    this._priority = config.priority;
    this._matchCriteria.internalValue = config.matchCriteria;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // drg_route_distribution_id - computed: false, optional: false, required: true
  private _drgRouteDistributionId?: string; 
  public get drgRouteDistributionId() {
    return this.getStringAttribute('drg_route_distribution_id');
  }
  public set drgRouteDistributionId(value: string) {
    this._drgRouteDistributionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drgRouteDistributionIdInput() {
    return this._drgRouteDistributionId;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // match_criteria - computed: false, optional: false, required: true
  private _matchCriteria = new CoreDrgRouteDistributionStatementMatchCriteriaOutputReference(this, "match_criteria");
  public get matchCriteria() {
    return this._matchCriteria;
  }
  public putMatchCriteria(value: CoreDrgRouteDistributionStatementMatchCriteria) {
    this._matchCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreDrgRouteDistributionStatementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreDrgRouteDistributionStatementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      drg_route_distribution_id: cdktf.stringToTerraform(this._drgRouteDistributionId),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      match_criteria: coreDrgRouteDistributionStatementMatchCriteriaToTerraform(this._matchCriteria.internalValue),
      timeouts: coreDrgRouteDistributionStatementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drg_route_distribution_id: {
        value: cdktf.stringToHclTerraform(this._drgRouteDistributionId),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_criteria: {
        value: coreDrgRouteDistributionStatementMatchCriteriaToHclTerraform(this._matchCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreDrgRouteDistributionStatementMatchCriteriaList",
      },
      timeouts: {
        value: coreDrgRouteDistributionStatementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreDrgRouteDistributionStatementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
