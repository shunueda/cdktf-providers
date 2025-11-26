// https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of after-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#after_apply Context#after_apply}
  */
  readonly afterApply?: string[];
  /**
  * List of after-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#after_destroy Context#after_destroy}
  */
  readonly afterDestroy?: string[];
  /**
  * List of after-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#after_init Context#after_init}
  */
  readonly afterInit?: string[];
  /**
  * List of after-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#after_perform Context#after_perform}
  */
  readonly afterPerform?: string[];
  /**
  * List of after-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#after_plan Context#after_plan}
  */
  readonly afterPlan?: string[];
  /**
  * List of after-run scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#after_run Context#after_run}
  */
  readonly afterRun?: string[];
  /**
  * List of before-apply scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#before_apply Context#before_apply}
  */
  readonly beforeApply?: string[];
  /**
  * List of before-destroy scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#before_destroy Context#before_destroy}
  */
  readonly beforeDestroy?: string[];
  /**
  * List of before-init scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#before_init Context#before_init}
  */
  readonly beforeInit?: string[];
  /**
  * List of before-perform scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#before_perform Context#before_perform}
  */
  readonly beforePerform?: string[];
  /**
  * List of before-plan scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#before_plan Context#before_plan}
  */
  readonly beforePlan?: string[];
  /**
  * Free-form context description for users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#description Context#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#id Context#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels of the context. To leverage the `autoattach` magic label, ensure your label follows the naming convention: `autoattach:<your-label-name>`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#labels Context#labels}
  */
  readonly labels?: string[];
  /**
  * Name of the context - should be unique in one account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#name Context#name}
  */
  readonly name: string;
  /**
  * ID (slug) of the space the context is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#space_id Context#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context spacelift_context}
*/
export class Context extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Context resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Context to import
  * @param importFromId The id of the existing Context that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Context to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/resources/context spacelift_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContextConfig
  */
  public constructor(scope: Construct, id: string, config: ContextConfig) {
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // after_apply - computed: false, optional: true, required: false
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

  // after_destroy - computed: false, optional: true, required: false
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

  // after_init - computed: false, optional: true, required: false
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

  // after_perform - computed: false, optional: true, required: false
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

  // after_plan - computed: false, optional: true, required: false
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

  // before_apply - computed: false, optional: true, required: false
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

  // before_destroy - computed: false, optional: true, required: false
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

  // before_init - computed: false, optional: true, required: false
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

  // before_perform - computed: false, optional: true, required: false
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

  // before_plan - computed: false, optional: true, required: false
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
