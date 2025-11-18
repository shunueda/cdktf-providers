// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InboundEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#allowed_senders InboundEmail#allowed_senders}
  */
  readonly allowedSenders: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#description InboundEmail#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#id InboundEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#level_cel InboundEmail#level_cel}
  */
  readonly levelCel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#name InboundEmail#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#rule_matching_strategy InboundEmail#rule_matching_strategy}
  */
  readonly ruleMatchingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#rules InboundEmail#rules}
  */
  readonly rules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#slug InboundEmail#slug}
  */
  readonly slug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#status_cel InboundEmail#status_cel}
  */
  readonly statusCel: string;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#target InboundEmail#target}
  */
  readonly target?: InboundEmailTarget;
}
export interface InboundEmailTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#id InboundEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#type InboundEmail#type}
  */
  readonly type: string;
}

export function inboundEmailTargetToTerraform(struct?: InboundEmailTargetOutputReference | InboundEmailTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function inboundEmailTargetToHclTerraform(struct?: InboundEmailTargetOutputReference | InboundEmailTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InboundEmailTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InboundEmailTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InboundEmailTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email firehydrant_inbound_email}
*/
export class InboundEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_inbound_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InboundEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InboundEmail to import
  * @param importFromId The id of the existing InboundEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InboundEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_inbound_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/inbound_email firehydrant_inbound_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InboundEmailConfig
  */
  public constructor(scope: Construct, id: string, config: InboundEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_inbound_email',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.11',
        providerVersionConstraint: '0.14.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedSenders = config.allowedSenders;
    this._description = config.description;
    this._id = config.id;
    this._levelCel = config.levelCel;
    this._name = config.name;
    this._ruleMatchingStrategy = config.ruleMatchingStrategy;
    this._rules = config.rules;
    this._slug = config.slug;
    this._statusCel = config.statusCel;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_senders - computed: false, optional: false, required: true
  private _allowedSenders?: string[]; 
  public get allowedSenders() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_senders'));
  }
  public set allowedSenders(value: string[]) {
    this._allowedSenders = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSendersInput() {
    return this._allowedSenders;
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

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
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

  // level_cel - computed: false, optional: false, required: true
  private _levelCel?: string; 
  public get levelCel() {
    return this.getStringAttribute('level_cel');
  }
  public set levelCel(value: string) {
    this._levelCel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelCelInput() {
    return this._levelCel;
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

  // rule_matching_strategy - computed: false, optional: true, required: false
  private _ruleMatchingStrategy?: string; 
  public get ruleMatchingStrategy() {
    return this.getStringAttribute('rule_matching_strategy');
  }
  public set ruleMatchingStrategy(value: string) {
    this._ruleMatchingStrategy = value;
  }
  public resetRuleMatchingStrategy() {
    this._ruleMatchingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleMatchingStrategyInput() {
    return this._ruleMatchingStrategy;
  }

  // rules - computed: false, optional: true, required: false
  private _rules?: string[]; 
  public get rules() {
    return cdktf.Fn.tolist(this.getListAttribute('rules'));
  }
  public set rules(value: string[]) {
    this._rules = value;
  }
  public resetRules() {
    this._rules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // status_cel - computed: false, optional: false, required: true
  private _statusCel?: string; 
  public get statusCel() {
    return this.getStringAttribute('status_cel');
  }
  public set statusCel(value: string) {
    this._statusCel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCelInput() {
    return this._statusCel;
  }

  // target - computed: false, optional: true, required: false
  private _target = new InboundEmailTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: InboundEmailTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_senders: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedSenders),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      level_cel: cdktf.stringToTerraform(this._levelCel),
      name: cdktf.stringToTerraform(this._name),
      rule_matching_strategy: cdktf.stringToTerraform(this._ruleMatchingStrategy),
      rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rules),
      slug: cdktf.stringToTerraform(this._slug),
      status_cel: cdktf.stringToTerraform(this._statusCel),
      target: inboundEmailTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_senders: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedSenders),
        isBlock: false,
        type: "set",
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
      level_cel: {
        value: cdktf.stringToHclTerraform(this._levelCel),
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
      rule_matching_strategy: {
        value: cdktf.stringToHclTerraform(this._ruleMatchingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_cel: {
        value: cdktf.stringToHclTerraform(this._statusCel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: inboundEmailTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InboundEmailTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
