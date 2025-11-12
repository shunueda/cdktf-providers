// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditsyslogpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#action Auditsyslogpolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#id Auditsyslogpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#name Auditsyslogpolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#rule Auditsyslogpolicy#rule}
  */
  readonly rule?: string;
  /**
  * globalbinding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#globalbinding Auditsyslogpolicy#globalbinding}
  */
  readonly globalbinding?: AuditsyslogpolicyGlobalbinding;
}
export interface AuditsyslogpolicyGlobalbinding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#feature Auditsyslogpolicy#feature}
  */
  readonly feature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#globalbindtype Auditsyslogpolicy#globalbindtype}
  */
  readonly globalbindtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#gotopriorityexpression Auditsyslogpolicy#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#nextfactor Auditsyslogpolicy#nextfactor}
  */
  readonly nextfactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#priority Auditsyslogpolicy#priority}
  */
  readonly priority?: number;
}

export function auditsyslogpolicyGlobalbindingToTerraform(struct?: AuditsyslogpolicyGlobalbindingOutputReference | AuditsyslogpolicyGlobalbinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature: cdktf.stringToTerraform(struct!.feature),
    globalbindtype: cdktf.stringToTerraform(struct!.globalbindtype),
    gotopriorityexpression: cdktf.stringToTerraform(struct!.gotopriorityexpression),
    nextfactor: cdktf.stringToTerraform(struct!.nextfactor),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function auditsyslogpolicyGlobalbindingToHclTerraform(struct?: AuditsyslogpolicyGlobalbindingOutputReference | AuditsyslogpolicyGlobalbinding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature: {
      value: cdktf.stringToHclTerraform(struct!.feature),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    globalbindtype: {
      value: cdktf.stringToHclTerraform(struct!.globalbindtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gotopriorityexpression: {
      value: cdktf.stringToHclTerraform(struct!.gotopriorityexpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nextfactor: {
      value: cdktf.stringToHclTerraform(struct!.nextfactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuditsyslogpolicyGlobalbindingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuditsyslogpolicyGlobalbinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feature !== undefined) {
      hasAnyValues = true;
      internalValueResult.feature = this._feature;
    }
    if (this._globalbindtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalbindtype = this._globalbindtype;
    }
    if (this._gotopriorityexpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.gotopriorityexpression = this._gotopriorityexpression;
    }
    if (this._nextfactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextfactor = this._nextfactor;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuditsyslogpolicyGlobalbinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._feature = undefined;
      this._globalbindtype = undefined;
      this._gotopriorityexpression = undefined;
      this._nextfactor = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._feature = value.feature;
      this._globalbindtype = value.globalbindtype;
      this._gotopriorityexpression = value.gotopriorityexpression;
      this._nextfactor = value.nextfactor;
      this._priority = value.priority;
    }
  }

  // feature - computed: true, optional: true, required: false
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  public resetFeature() {
    this._feature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // globalbindtype - computed: true, optional: true, required: false
  private _globalbindtype?: string; 
  public get globalbindtype() {
    return this.getStringAttribute('globalbindtype');
  }
  public set globalbindtype(value: string) {
    this._globalbindtype = value;
  }
  public resetGlobalbindtype() {
    this._globalbindtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalbindtypeInput() {
    return this._globalbindtype;
  }

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
  }

  // nextfactor - computed: true, optional: true, required: false
  private _nextfactor?: string; 
  public get nextfactor() {
    return this.getStringAttribute('nextfactor');
  }
  public set nextfactor(value: string) {
    this._nextfactor = value;
  }
  public resetNextfactor() {
    this._nextfactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextfactorInput() {
    return this._nextfactor;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy citrixadc_auditsyslogpolicy}
*/
export class Auditsyslogpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_auditsyslogpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Auditsyslogpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Auditsyslogpolicy to import
  * @param importFromId The id of the existing Auditsyslogpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Auditsyslogpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_auditsyslogpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogpolicy citrixadc_auditsyslogpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditsyslogpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AuditsyslogpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_auditsyslogpolicy',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._id = config.id;
    this._name = config.name;
    this._rule = config.rule;
    this._globalbinding.internalValue = config.globalbinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // globalbinding - computed: false, optional: true, required: false
  private _globalbinding = new AuditsyslogpolicyGlobalbindingOutputReference(this, "globalbinding");
  public get globalbinding() {
    return this._globalbinding;
  }
  public putGlobalbinding(value: AuditsyslogpolicyGlobalbinding) {
    this._globalbinding.internalValue = value;
  }
  public resetGlobalbinding() {
    this._globalbinding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalbindingInput() {
    return this._globalbinding.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rule: cdktf.stringToTerraform(this._rule),
      globalbinding: auditsyslogpolicyGlobalbindingToTerraform(this._globalbinding.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      globalbinding: {
        value: auditsyslogpolicyGlobalbindingToHclTerraform(this._globalbinding.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuditsyslogpolicyGlobalbindingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
