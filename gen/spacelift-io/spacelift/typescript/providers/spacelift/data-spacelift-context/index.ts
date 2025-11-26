// https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of after-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#after_apply DataSpaceliftContext#after_apply}
  */
  readonly afterApply?: string[];
  /**
  * List of after-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#after_destroy DataSpaceliftContext#after_destroy}
  */
  readonly afterDestroy?: string[];
  /**
  * List of after-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#after_init DataSpaceliftContext#after_init}
  */
  readonly afterInit?: string[];
  /**
  * List of after-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#after_perform DataSpaceliftContext#after_perform}
  */
  readonly afterPerform?: string[];
  /**
  * List of after-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#after_plan DataSpaceliftContext#after_plan}
  */
  readonly afterPlan?: string[];
  /**
  * List of after-run scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#after_run DataSpaceliftContext#after_run}
  */
  readonly afterRun?: string[];
  /**
  * List of before-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#before_apply DataSpaceliftContext#before_apply}
  */
  readonly beforeApply?: string[];
  /**
  * List of before-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#before_destroy DataSpaceliftContext#before_destroy}
  */
  readonly beforeDestroy?: string[];
  /**
  * List of before-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#before_init DataSpaceliftContext#before_init}
  */
  readonly beforeInit?: string[];
  /**
  * List of before-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#before_perform DataSpaceliftContext#before_perform}
  */
  readonly beforePerform?: string[];
  /**
  * List of before-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#before_plan DataSpaceliftContext#before_plan}
  */
  readonly beforePlan?: string[];
  /**
  * immutable ID (slug) of the context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#context_id DataSpaceliftContext#context_id}
  */
  readonly contextId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#id DataSpaceliftContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context spacelift_context}
*/
export class DataSpaceliftContext extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftContext to import
  * @param importFromId The id of the existing DataSpaceliftContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/context spacelift_context} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftContextConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftContextConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_context',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.40.0',
        providerVersionConstraint: '1.40.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._afterApply = config.afterApply;
    this._afterDestroy = config.afterDestroy;
    this._afterInit = config.afterInit;
    this._afterPerform = config.afterPerform;
    this._afterPlan = config.afterPlan;
    this._afterRun = config.afterRun;
    this._beforeApply = config.beforeApply;
    this._beforeDestroy = config.beforeDestroy;
    this._beforeInit = config.beforeInit;
    this._beforePerform = config.beforePerform;
    this._beforePlan = config.beforePlan;
    this._contextId = config.contextId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after_apply - computed: true, optional: true, required: false
  private _afterApply?: string[]; 
  public get afterApply() {
    return this.getListAttribute('after_apply');
  }
  public set afterApply(value: string[]) {
    this._afterApply = value;
  }
  public resetAfterApply() {
    this._afterApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterApplyInput() {
    return this._afterApply;
  }

  // after_destroy - computed: true, optional: true, required: false
  private _afterDestroy?: string[]; 
  public get afterDestroy() {
    return this.getListAttribute('after_destroy');
  }
  public set afterDestroy(value: string[]) {
    this._afterDestroy = value;
  }
  public resetAfterDestroy() {
    this._afterDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterDestroyInput() {
    return this._afterDestroy;
  }

  // after_init - computed: true, optional: true, required: false
  private _afterInit?: string[]; 
  public get afterInit() {
    return this.getListAttribute('after_init');
  }
  public set afterInit(value: string[]) {
    this._afterInit = value;
  }
  public resetAfterInit() {
    this._afterInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInitInput() {
    return this._afterInit;
  }

  // after_perform - computed: true, optional: true, required: false
  private _afterPerform?: string[]; 
  public get afterPerform() {
    return this.getListAttribute('after_perform');
  }
  public set afterPerform(value: string[]) {
    this._afterPerform = value;
  }
  public resetAfterPerform() {
    this._afterPerform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterPerformInput() {
    return this._afterPerform;
  }

  // after_plan - computed: true, optional: true, required: false
  private _afterPlan?: string[]; 
  public get afterPlan() {
    return this.getListAttribute('after_plan');
  }
  public set afterPlan(value: string[]) {
    this._afterPlan = value;
  }
  public resetAfterPlan() {
    this._afterPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterPlanInput() {
    return this._afterPlan;
  }

  // after_run - computed: false, optional: true, required: false
  private _afterRun?: string[]; 
  public get afterRun() {
    return this.getListAttribute('after_run');
  }
  public set afterRun(value: string[]) {
    this._afterRun = value;
  }
  public resetAfterRun() {
    this._afterRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterRunInput() {
    return this._afterRun;
  }

  // before_apply - computed: true, optional: true, required: false
  private _beforeApply?: string[]; 
  public get beforeApply() {
    return this.getListAttribute('before_apply');
  }
  public set beforeApply(value: string[]) {
    this._beforeApply = value;
  }
  public resetBeforeApply() {
    this._beforeApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeApplyInput() {
    return this._beforeApply;
  }

  // before_destroy - computed: true, optional: true, required: false
  private _beforeDestroy?: string[]; 
  public get beforeDestroy() {
    return this.getListAttribute('before_destroy');
  }
  public set beforeDestroy(value: string[]) {
    this._beforeDestroy = value;
  }
  public resetBeforeDestroy() {
    this._beforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeDestroyInput() {
    return this._beforeDestroy;
  }

  // before_init - computed: true, optional: true, required: false
  private _beforeInit?: string[]; 
  public get beforeInit() {
    return this.getListAttribute('before_init');
  }
  public set beforeInit(value: string[]) {
    this._beforeInit = value;
  }
  public resetBeforeInit() {
    this._beforeInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInitInput() {
    return this._beforeInit;
  }

  // before_perform - computed: true, optional: true, required: false
  private _beforePerform?: string[]; 
  public get beforePerform() {
    return this.getListAttribute('before_perform');
  }
  public set beforePerform(value: string[]) {
    this._beforePerform = value;
  }
  public resetBeforePerform() {
    this._beforePerform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforePerformInput() {
    return this._beforePerform;
  }

  // before_plan - computed: true, optional: true, required: false
  private _beforePlan?: string[]; 
  public get beforePlan() {
    return this.getListAttribute('before_plan');
  }
  public set beforePlan(value: string[]) {
    this._beforePlan = value;
  }
  public resetBeforePlan() {
    this._beforePlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforePlanInput() {
    return this._beforePlan;
  }

  // context_id - computed: false, optional: false, required: true
  private _contextId?: string; 
  public get contextId() {
    return this.getStringAttribute('context_id');
  }
  public set contextId(value: string) {
    this._contextId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      after_apply: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterApply),
      after_destroy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterDestroy),
      after_init: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterInit),
      after_perform: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterPerform),
      after_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterPlan),
      after_run: cdktf.listMapper(cdktf.stringToTerraform, false)(this._afterRun),
      before_apply: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforeApply),
      before_destroy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforeDestroy),
      before_init: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforeInit),
      before_perform: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforePerform),
      before_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._beforePlan),
      context_id: cdktf.stringToTerraform(this._contextId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      after_apply: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterApply),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_destroy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterDestroy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_init: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterInit),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_perform: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterPerform),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_plan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterPlan),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      after_run: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._afterRun),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_apply: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforeApply),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_destroy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforeDestroy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_init: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforeInit),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_perform: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforePerform),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      before_plan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._beforePlan),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      context_id: {
        value: cdktf.stringToHclTerraform(this._contextId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
