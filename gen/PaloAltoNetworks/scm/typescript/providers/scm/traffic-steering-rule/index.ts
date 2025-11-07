// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficSteeringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#action TrafficSteeringRule#action}
  */
  readonly action?: TrafficSteeringRuleAction;
  /**
  * Category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#category TrafficSteeringRule#category}
  */
  readonly category?: string[];
  /**
  * Destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#destination TrafficSteeringRule#destination}
  */
  readonly destination?: string[];
  /**
  * The folder containing the traffic steering rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#folder TrafficSteeringRule#folder}
  */
  readonly folder: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#name TrafficSteeringRule#name}
  */
  readonly name: string;
  /**
  * Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#service TrafficSteeringRule#service}
  */
  readonly service: string[];
  /**
  * Source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#source TrafficSteeringRule#source}
  */
  readonly source: string[];
  /**
  * Source user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#source_user TrafficSteeringRule#source_user}
  */
  readonly sourceUser?: string[];
}
export interface TrafficSteeringRuleActionForward {
  /**
  * Target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#target TrafficSteeringRule#target}
  */
  readonly target?: string;
}

export function trafficSteeringRuleActionForwardToTerraform(struct?: TrafficSteeringRuleActionForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function trafficSteeringRuleActionForwardToHclTerraform(struct?: TrafficSteeringRuleActionForward | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficSteeringRuleActionForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrafficSteeringRuleActionForward | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficSteeringRuleActionForward | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface TrafficSteeringRuleAction {
  /**
  * Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#forward TrafficSteeringRule#forward}
  */
  readonly forward?: TrafficSteeringRuleActionForward;
  /**
  * No pbf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#no_pbf TrafficSteeringRule#no_pbf}
  */
  readonly noPbf?: string;
}

export function trafficSteeringRuleActionToTerraform(struct?: TrafficSteeringRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward: trafficSteeringRuleActionForwardToTerraform(struct!.forward),
    no_pbf: cdktf.stringToTerraform(struct!.noPbf),
  }
}


export function trafficSteeringRuleActionToHclTerraform(struct?: TrafficSteeringRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward: {
      value: trafficSteeringRuleActionForwardToHclTerraform(struct!.forward),
      isBlock: true,
      type: "struct",
      storageClassType: "TrafficSteeringRuleActionForward",
    },
    no_pbf: {
      value: cdktf.stringToHclTerraform(struct!.noPbf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TrafficSteeringRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TrafficSteeringRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._noPbf !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPbf = this._noPbf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TrafficSteeringRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forward.internalValue = undefined;
      this._noPbf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forward.internalValue = value.forward;
      this._noPbf = value.noPbf;
    }
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new TrafficSteeringRuleActionForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: TrafficSteeringRuleActionForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // no_pbf - computed: false, optional: true, required: false
  private _noPbf?: string; 
  public get noPbf() {
    return this.getStringAttribute('no_pbf');
  }
  public set noPbf(value: string) {
    this._noPbf = value;
  }
  public resetNoPbf() {
    this._noPbf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPbfInput() {
    return this._noPbf;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule scm_traffic_steering_rule}
*/
export class TrafficSteeringRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_traffic_steering_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficSteeringRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficSteeringRule to import
  * @param importFromId The id of the existing TrafficSteeringRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficSteeringRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_traffic_steering_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.3/docs/resources/traffic_steering_rule scm_traffic_steering_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficSteeringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficSteeringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_traffic_steering_rule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action.internalValue = config.action;
    this._category = config.category;
    this._destination = config.destination;
    this._folder = config.folder;
    this._name = config.name;
    this._service = config.service;
    this._source = config.source;
    this._sourceUser = config.sourceUser;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action = new TrafficSteeringRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: TrafficSteeringRuleAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string[]; 
  public get category() {
    return this.getListAttribute('category');
  }
  public set category(value: string[]) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // destination - computed: true, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service - computed: false, optional: false, required: true
  private _service?: string[]; 
  public get service() {
    return this.getListAttribute('service');
  }
  public set service(value: string[]) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_user - computed: true, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: trafficSteeringRuleActionToTerraform(this._action.internalValue),
      category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._category),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceUser),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: trafficSteeringRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TrafficSteeringRuleAction",
      },
      category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._category),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_user: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceUser),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
