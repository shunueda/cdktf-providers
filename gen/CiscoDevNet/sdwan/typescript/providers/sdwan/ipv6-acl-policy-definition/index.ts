// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6AclPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default action, either `accept` or `drop`
  *   - Choices: `accept`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#default_action Ipv6AclPolicyDefinition#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#description Ipv6AclPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#name Ipv6AclPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of ACL sequences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#sequences Ipv6AclPolicyDefinition#sequences}
  */
  readonly sequences: Ipv6AclPolicyDefinitionSequences[] | cdktf.IResolvable;
}
export interface Ipv6AclPolicyDefinitionSequencesActionEntriesSetParameters {
  /**
  * Next hop IP, Attribute conditional on `type` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#next_hop Ipv6AclPolicyDefinition#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Traffic class, Attribute conditional on `type` being equal to `trafficClass`
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#traffic_class Ipv6AclPolicyDefinition#traffic_class}
  */
  readonly trafficClass?: number;
  /**
  * Type of set parameter
  *   - Choices: `trafficClass`, `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#type Ipv6AclPolicyDefinition#type}
  */
  readonly type: string;
}

export function ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersToTerraform(struct?: Ipv6AclPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    traffic_class: cdktf.numberToTerraform(struct!.trafficClass),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform(struct?: Ipv6AclPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class: {
      value: cdktf.numberToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class Ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ipv6AclPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6AclPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nextHop = undefined;
      this._trafficClass = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nextHop = value.nextHop;
      this._trafficClass = value.trafficClass;
      this._type = value.type;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: number; 
  public get trafficClass() {
    return this.getNumberAttribute('traffic_class');
  }
  public set trafficClass(value: number) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
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

export class Ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersList extends cdktf.ComplexList {
  public internalValue? : Ipv6AclPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable

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
  public get(index: number): Ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference {
    return new Ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv6AclPolicyDefinitionSequencesActionEntries {
  /**
  * Class map ID, Attribute conditional on `type` being equal to `class`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#class_map_id Ipv6AclPolicyDefinition#class_map_id}
  */
  readonly classMapId?: string;
  /**
  * Class map version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#class_map_version Ipv6AclPolicyDefinition#class_map_version}
  */
  readonly classMapVersion?: number;
  /**
  * Counter name, Attribute conditional on `type` being equal to `count`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#counter_name Ipv6AclPolicyDefinition#counter_name}
  */
  readonly counterName?: string;
  /**
  * Enable logging, Attribute conditional on `type` being equal to `log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#log Ipv6AclPolicyDefinition#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Mirror ID, Attribute conditional on `type` being equal to `mirror`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#mirror_id Ipv6AclPolicyDefinition#mirror_id}
  */
  readonly mirrorId?: string;
  /**
  * Mirror version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#mirror_version Ipv6AclPolicyDefinition#mirror_version}
  */
  readonly mirrorVersion?: number;
  /**
  * Policer ID, Attribute conditional on `type` being equal to `policer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#policer_id Ipv6AclPolicyDefinition#policer_id}
  */
  readonly policerId?: string;
  /**
  * Policer version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#policer_version Ipv6AclPolicyDefinition#policer_version}
  */
  readonly policerVersion?: number;
  /**
  * List of set parameters, Attribute conditional on `type` being equal to `set`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#set_parameters Ipv6AclPolicyDefinition#set_parameters}
  */
  readonly setParameters?: Ipv6AclPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable;
  /**
  * Type of action entry
  *   - Choices: `class`, `count`, `set`, `log`, `mirror`, `policer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#type Ipv6AclPolicyDefinition#type}
  */
  readonly type: string;
}

export function ipv6AclPolicyDefinitionSequencesActionEntriesToTerraform(struct?: Ipv6AclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_map_id: cdktf.stringToTerraform(struct!.classMapId),
    class_map_version: cdktf.numberToTerraform(struct!.classMapVersion),
    counter_name: cdktf.stringToTerraform(struct!.counterName),
    log: cdktf.booleanToTerraform(struct!.log),
    mirror_id: cdktf.stringToTerraform(struct!.mirrorId),
    mirror_version: cdktf.numberToTerraform(struct!.mirrorVersion),
    policer_id: cdktf.stringToTerraform(struct!.policerId),
    policer_version: cdktf.numberToTerraform(struct!.policerVersion),
    set_parameters: cdktf.listMapper(ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersToTerraform, false)(struct!.setParameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipv6AclPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: Ipv6AclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_map_id: {
      value: cdktf.stringToHclTerraform(struct!.classMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_map_version: {
      value: cdktf.numberToHclTerraform(struct!.classMapVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    counter_name: {
      value: cdktf.stringToHclTerraform(struct!.counterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mirror_id: {
      value: cdktf.stringToHclTerraform(struct!.mirrorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mirror_version: {
      value: cdktf.numberToHclTerraform(struct!.mirrorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policer_id: {
      value: cdktf.stringToHclTerraform(struct!.policerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policer_version: {
      value: cdktf.numberToHclTerraform(struct!.policerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    set_parameters: {
      value: cdktf.listMapperHcl(ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform, false)(struct!.setParameters),
      isBlock: true,
      type: "list",
      storageClassType: "Ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersList",
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

export class Ipv6AclPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ipv6AclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMapId = this._classMapId;
    }
    if (this._classMapVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMapVersion = this._classMapVersion;
    }
    if (this._counterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterName = this._counterName;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._mirrorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorId = this._mirrorId;
    }
    if (this._mirrorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorVersion = this._mirrorVersion;
    }
    if (this._policerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerId = this._policerId;
    }
    if (this._policerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.policerVersion = this._policerVersion;
    }
    if (this._setParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setParameters = this._setParameters?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6AclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classMapId = undefined;
      this._classMapVersion = undefined;
      this._counterName = undefined;
      this._log = undefined;
      this._mirrorId = undefined;
      this._mirrorVersion = undefined;
      this._policerId = undefined;
      this._policerVersion = undefined;
      this._setParameters.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classMapId = value.classMapId;
      this._classMapVersion = value.classMapVersion;
      this._counterName = value.counterName;
      this._log = value.log;
      this._mirrorId = value.mirrorId;
      this._mirrorVersion = value.mirrorVersion;
      this._policerId = value.policerId;
      this._policerVersion = value.policerVersion;
      this._setParameters.internalValue = value.setParameters;
      this._type = value.type;
    }
  }

  // class_map_id - computed: false, optional: true, required: false
  private _classMapId?: string; 
  public get classMapId() {
    return this.getStringAttribute('class_map_id');
  }
  public set classMapId(value: string) {
    this._classMapId = value;
  }
  public resetClassMapId() {
    this._classMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapIdInput() {
    return this._classMapId;
  }

  // class_map_version - computed: false, optional: true, required: false
  private _classMapVersion?: number; 
  public get classMapVersion() {
    return this.getNumberAttribute('class_map_version');
  }
  public set classMapVersion(value: number) {
    this._classMapVersion = value;
  }
  public resetClassMapVersion() {
    this._classMapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapVersionInput() {
    return this._classMapVersion;
  }

  // counter_name - computed: false, optional: true, required: false
  private _counterName?: string; 
  public get counterName() {
    return this.getStringAttribute('counter_name');
  }
  public set counterName(value: string) {
    this._counterName = value;
  }
  public resetCounterName() {
    this._counterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterNameInput() {
    return this._counterName;
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // mirror_id - computed: false, optional: true, required: false
  private _mirrorId?: string; 
  public get mirrorId() {
    return this.getStringAttribute('mirror_id');
  }
  public set mirrorId(value: string) {
    this._mirrorId = value;
  }
  public resetMirrorId() {
    this._mirrorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorIdInput() {
    return this._mirrorId;
  }

  // mirror_version - computed: false, optional: true, required: false
  private _mirrorVersion?: number; 
  public get mirrorVersion() {
    return this.getNumberAttribute('mirror_version');
  }
  public set mirrorVersion(value: number) {
    this._mirrorVersion = value;
  }
  public resetMirrorVersion() {
    this._mirrorVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorVersionInput() {
    return this._mirrorVersion;
  }

  // policer_id - computed: false, optional: true, required: false
  private _policerId?: string; 
  public get policerId() {
    return this.getStringAttribute('policer_id');
  }
  public set policerId(value: string) {
    this._policerId = value;
  }
  public resetPolicerId() {
    this._policerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerIdInput() {
    return this._policerId;
  }

  // policer_version - computed: false, optional: true, required: false
  private _policerVersion?: number; 
  public get policerVersion() {
    return this.getNumberAttribute('policer_version');
  }
  public set policerVersion(value: number) {
    this._policerVersion = value;
  }
  public resetPolicerVersion() {
    this._policerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerVersionInput() {
    return this._policerVersion;
  }

  // set_parameters - computed: false, optional: true, required: false
  private _setParameters = new Ipv6AclPolicyDefinitionSequencesActionEntriesSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }
  public putSetParameters(value: Ipv6AclPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable) {
    this._setParameters.internalValue = value;
  }
  public resetSetParameters() {
    this._setParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setParametersInput() {
    return this._setParameters.internalValue;
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

export class Ipv6AclPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {
  public internalValue? : Ipv6AclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable

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
  public get(index: number): Ipv6AclPolicyDefinitionSequencesActionEntriesOutputReference {
    return new Ipv6AclPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv6AclPolicyDefinitionSequencesMatchEntries {
  /**
  * Class map ID, Attribute conditional on `type` being equal to `class`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#class_map_id Ipv6AclPolicyDefinition#class_map_id}
  */
  readonly classMapId?: string;
  /**
  * Class map version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#class_map_version Ipv6AclPolicyDefinition#class_map_version}
  */
  readonly classMapVersion?: number;
  /**
  * Destination dataIPv6 prefix list ID, Attribute conditional on `type` being equal to `destinationDataIpv6PrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#destination_data_ipv6_prefix_list_id Ipv6AclPolicyDefinition#destination_data_ipv6_prefix_list_id}
  */
  readonly destinationDataIpv6PrefixListId?: string;
  /**
  * Destination data prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#destination_data_ipv6_prefix_list_version Ipv6AclPolicyDefinition#destination_data_ipv6_prefix_list_version}
  */
  readonly destinationDataIpv6PrefixListVersion?: number;
  /**
  * Destination IPv6 prefix, Attribute conditional on `type` being equal to `destinationIpv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#destination_ip Ipv6AclPolicyDefinition#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Destination ports. Single value (0-65535) or ranges separated by spaces., Attribute conditional on `type` being equal to `destinationPort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#destination_ports Ipv6AclPolicyDefinition#destination_ports}
  */
  readonly destinationPorts?: string;
  /**
  * Next header, Attribute conditional on `type` being equal to `nextHeader`
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#next_header Ipv6AclPolicyDefinition#next_header}
  */
  readonly nextHeader?: number;
  /**
  * Packet length, Attribute conditional on `type` being equal to `packetLength`
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#packet_length Ipv6AclPolicyDefinition#packet_length}
  */
  readonly packetLength?: number;
  /**
  * PLP - priority, Attribute conditional on `type` being equal to `plp`
  *   - Choices: `high`, `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#priority Ipv6AclPolicyDefinition#priority}
  */
  readonly priority?: string;
  /**
  * Source data IPv6 prefix list ID, Attribute conditional on `type` being equal to `sourceDataIpv6PrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#source_data_ipv6_prefix_list_id Ipv6AclPolicyDefinition#source_data_ipv6_prefix_list_id}
  */
  readonly sourceDataIpv6PrefixListId?: string;
  /**
  * Source data IPv6 prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#source_data_ipv6_prefix_list_version Ipv6AclPolicyDefinition#source_data_ipv6_prefix_list_version}
  */
  readonly sourceDataIpv6PrefixListVersion?: number;
  /**
  * Source IPv6 prefix, Attribute conditional on `type` being equal to `sourceIpv6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#source_ip Ipv6AclPolicyDefinition#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Source ports. Single value (0-65535) or ranges separated by spaces., Attribute conditional on `type` being equal to `sourcePort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#source_ports Ipv6AclPolicyDefinition#source_ports}
  */
  readonly sourcePorts?: string;
  /**
  * TCP parameters, Attribute conditional on `type` being equal to `tcp`
  *   - Choices: `syn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#tcp Ipv6AclPolicyDefinition#tcp}
  */
  readonly tcp?: string;
  /**
  * Traffic class, Attribute conditional on `type` being equal to `trafficClass`
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#traffic_class Ipv6AclPolicyDefinition#traffic_class}
  */
  readonly trafficClass?: number;
  /**
  * Type of match entry
  *   - Choices: `nextHeader`, `sourceIpv6`, `destinationIpv6`, `class`, `packetLength`, `plp`, `sourcePort`, `destinationPort`, `sourceDataIpv6PrefixList`, `destinationDataIpv6PrefixList`, `tcp`, `trafficClass`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#type Ipv6AclPolicyDefinition#type}
  */
  readonly type: string;
}

export function ipv6AclPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: Ipv6AclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_map_id: cdktf.stringToTerraform(struct!.classMapId),
    class_map_version: cdktf.numberToTerraform(struct!.classMapVersion),
    destination_data_ipv6_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataIpv6PrefixListId),
    destination_data_ipv6_prefix_list_version: cdktf.numberToTerraform(struct!.destinationDataIpv6PrefixListVersion),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_ports: cdktf.stringToTerraform(struct!.destinationPorts),
    next_header: cdktf.numberToTerraform(struct!.nextHeader),
    packet_length: cdktf.numberToTerraform(struct!.packetLength),
    priority: cdktf.stringToTerraform(struct!.priority),
    source_data_ipv6_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataIpv6PrefixListId),
    source_data_ipv6_prefix_list_version: cdktf.numberToTerraform(struct!.sourceDataIpv6PrefixListVersion),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ports: cdktf.stringToTerraform(struct!.sourcePorts),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    traffic_class: cdktf.numberToTerraform(struct!.trafficClass),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipv6AclPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: Ipv6AclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_map_id: {
      value: cdktf.stringToHclTerraform(struct!.classMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_map_version: {
      value: cdktf.numberToHclTerraform(struct!.classMapVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_data_ipv6_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataIpv6PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_ipv6_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationDataIpv6PrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_ip: {
      value: cdktf.stringToHclTerraform(struct!.destinationIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_ports: {
      value: cdktf.stringToHclTerraform(struct!.destinationPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_header: {
      value: cdktf.numberToHclTerraform(struct!.nextHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_length: {
      value: cdktf.numberToHclTerraform(struct!.packetLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_ipv6_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataIpv6PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_ipv6_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceDataIpv6PrefixListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_ip: {
      value: cdktf.stringToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ports: {
      value: cdktf.stringToHclTerraform(struct!.sourcePorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp: {
      value: cdktf.stringToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_class: {
      value: cdktf.numberToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class Ipv6AclPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ipv6AclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMapId = this._classMapId;
    }
    if (this._classMapVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMapVersion = this._classMapVersion;
    }
    if (this._destinationDataIpv6PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv6PrefixListId = this._destinationDataIpv6PrefixListId;
    }
    if (this._destinationDataIpv6PrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv6PrefixListVersion = this._destinationDataIpv6PrefixListVersion;
    }
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._nextHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHeader = this._nextHeader;
    }
    if (this._packetLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLength = this._packetLength;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._sourceDataIpv6PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv6PrefixListId = this._sourceDataIpv6PrefixListId;
    }
    if (this._sourceDataIpv6PrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv6PrefixListVersion = this._sourceDataIpv6PrefixListVersion;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6AclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classMapId = undefined;
      this._classMapVersion = undefined;
      this._destinationDataIpv6PrefixListId = undefined;
      this._destinationDataIpv6PrefixListVersion = undefined;
      this._destinationIp = undefined;
      this._destinationPorts = undefined;
      this._nextHeader = undefined;
      this._packetLength = undefined;
      this._priority = undefined;
      this._sourceDataIpv6PrefixListId = undefined;
      this._sourceDataIpv6PrefixListVersion = undefined;
      this._sourceIp = undefined;
      this._sourcePorts = undefined;
      this._tcp = undefined;
      this._trafficClass = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classMapId = value.classMapId;
      this._classMapVersion = value.classMapVersion;
      this._destinationDataIpv6PrefixListId = value.destinationDataIpv6PrefixListId;
      this._destinationDataIpv6PrefixListVersion = value.destinationDataIpv6PrefixListVersion;
      this._destinationIp = value.destinationIp;
      this._destinationPorts = value.destinationPorts;
      this._nextHeader = value.nextHeader;
      this._packetLength = value.packetLength;
      this._priority = value.priority;
      this._sourceDataIpv6PrefixListId = value.sourceDataIpv6PrefixListId;
      this._sourceDataIpv6PrefixListVersion = value.sourceDataIpv6PrefixListVersion;
      this._sourceIp = value.sourceIp;
      this._sourcePorts = value.sourcePorts;
      this._tcp = value.tcp;
      this._trafficClass = value.trafficClass;
      this._type = value.type;
    }
  }

  // class_map_id - computed: false, optional: true, required: false
  private _classMapId?: string; 
  public get classMapId() {
    return this.getStringAttribute('class_map_id');
  }
  public set classMapId(value: string) {
    this._classMapId = value;
  }
  public resetClassMapId() {
    this._classMapId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapIdInput() {
    return this._classMapId;
  }

  // class_map_version - computed: false, optional: true, required: false
  private _classMapVersion?: number; 
  public get classMapVersion() {
    return this.getNumberAttribute('class_map_version');
  }
  public set classMapVersion(value: number) {
    this._classMapVersion = value;
  }
  public resetClassMapVersion() {
    this._classMapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapVersionInput() {
    return this._classMapVersion;
  }

  // destination_data_ipv6_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataIpv6PrefixListId?: string; 
  public get destinationDataIpv6PrefixListId() {
    return this.getStringAttribute('destination_data_ipv6_prefix_list_id');
  }
  public set destinationDataIpv6PrefixListId(value: string) {
    this._destinationDataIpv6PrefixListId = value;
  }
  public resetDestinationDataIpv6PrefixListId() {
    this._destinationDataIpv6PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv6PrefixListIdInput() {
    return this._destinationDataIpv6PrefixListId;
  }

  // destination_data_ipv6_prefix_list_version - computed: false, optional: true, required: false
  private _destinationDataIpv6PrefixListVersion?: number; 
  public get destinationDataIpv6PrefixListVersion() {
    return this.getNumberAttribute('destination_data_ipv6_prefix_list_version');
  }
  public set destinationDataIpv6PrefixListVersion(value: number) {
    this._destinationDataIpv6PrefixListVersion = value;
  }
  public resetDestinationDataIpv6PrefixListVersion() {
    this._destinationDataIpv6PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv6PrefixListVersionInput() {
    return this._destinationDataIpv6PrefixListVersion;
  }

  // destination_ip - computed: false, optional: true, required: false
  private _destinationIp?: string; 
  public get destinationIp() {
    return this.getStringAttribute('destination_ip');
  }
  public set destinationIp(value: string) {
    this._destinationIp = value;
  }
  public resetDestinationIp() {
    this._destinationIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpInput() {
    return this._destinationIp;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string; 
  public get destinationPorts() {
    return this.getStringAttribute('destination_ports');
  }
  public set destinationPorts(value: string) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // next_header - computed: false, optional: true, required: false
  private _nextHeader?: number; 
  public get nextHeader() {
    return this.getNumberAttribute('next_header');
  }
  public set nextHeader(value: number) {
    this._nextHeader = value;
  }
  public resetNextHeader() {
    this._nextHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHeaderInput() {
    return this._nextHeader;
  }

  // packet_length - computed: false, optional: true, required: false
  private _packetLength?: number; 
  public get packetLength() {
    return this.getNumberAttribute('packet_length');
  }
  public set packetLength(value: number) {
    this._packetLength = value;
  }
  public resetPacketLength() {
    this._packetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLengthInput() {
    return this._packetLength;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // source_data_ipv6_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataIpv6PrefixListId?: string; 
  public get sourceDataIpv6PrefixListId() {
    return this.getStringAttribute('source_data_ipv6_prefix_list_id');
  }
  public set sourceDataIpv6PrefixListId(value: string) {
    this._sourceDataIpv6PrefixListId = value;
  }
  public resetSourceDataIpv6PrefixListId() {
    this._sourceDataIpv6PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv6PrefixListIdInput() {
    return this._sourceDataIpv6PrefixListId;
  }

  // source_data_ipv6_prefix_list_version - computed: false, optional: true, required: false
  private _sourceDataIpv6PrefixListVersion?: number; 
  public get sourceDataIpv6PrefixListVersion() {
    return this.getNumberAttribute('source_data_ipv6_prefix_list_version');
  }
  public set sourceDataIpv6PrefixListVersion(value: number) {
    this._sourceDataIpv6PrefixListVersion = value;
  }
  public resetSourceDataIpv6PrefixListVersion() {
    this._sourceDataIpv6PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv6PrefixListVersionInput() {
    return this._sourceDataIpv6PrefixListVersion;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ports - computed: false, optional: true, required: false
  private _sourcePorts?: string; 
  public get sourcePorts() {
    return this.getStringAttribute('source_ports');
  }
  public set sourcePorts(value: string) {
    this._sourcePorts = value;
  }
  public resetSourcePorts() {
    this._sourcePorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortsInput() {
    return this._sourcePorts;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: string; 
  public get tcp() {
    return this.getStringAttribute('tcp');
  }
  public set tcp(value: string) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: number; 
  public get trafficClass() {
    return this.getNumberAttribute('traffic_class');
  }
  public set trafficClass(value: number) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
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

export class Ipv6AclPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : Ipv6AclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): Ipv6AclPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new Ipv6AclPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv6AclPolicyDefinitionSequences {
  /**
  * List of action entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#action_entries Ipv6AclPolicyDefinition#action_entries}
  */
  readonly actionEntries?: Ipv6AclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable;
  /**
  * Base action, either `accept` or `drop`
  *   - Choices: `accept`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#base_action Ipv6AclPolicyDefinition#base_action}
  */
  readonly baseAction?: string;
  /**
  * Sequence ID
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#id Ipv6AclPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * List of match entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#match_entries Ipv6AclPolicyDefinition#match_entries}
  */
  readonly matchEntries?: Ipv6AclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#name Ipv6AclPolicyDefinition#name}
  */
  readonly name: string;
}

export function ipv6AclPolicyDefinitionSequencesToTerraform(struct?: Ipv6AclPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_entries: cdktf.listMapper(ipv6AclPolicyDefinitionSequencesActionEntriesToTerraform, false)(struct!.actionEntries),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    id: cdktf.numberToTerraform(struct!.id),
    match_entries: cdktf.listMapper(ipv6AclPolicyDefinitionSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipv6AclPolicyDefinitionSequencesToHclTerraform(struct?: Ipv6AclPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_entries: {
      value: cdktf.listMapperHcl(ipv6AclPolicyDefinitionSequencesActionEntriesToHclTerraform, false)(struct!.actionEntries),
      isBlock: true,
      type: "set",
      storageClassType: "Ipv6AclPolicyDefinitionSequencesActionEntriesList",
    },
    base_action: {
      value: cdktf.stringToHclTerraform(struct!.baseAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_entries: {
      value: cdktf.listMapperHcl(ipv6AclPolicyDefinitionSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "Ipv6AclPolicyDefinitionSequencesMatchEntriesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv6AclPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Ipv6AclPolicyDefinitionSequences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionEntries = this._actionEntries?.internalValue;
    }
    if (this._baseAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseAction = this._baseAction;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matchEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchEntries = this._matchEntries?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6AclPolicyDefinitionSequences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = undefined;
      this._baseAction = undefined;
      this._id = undefined;
      this._matchEntries.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionEntries.internalValue = value.actionEntries;
      this._baseAction = value.baseAction;
      this._id = value.id;
      this._matchEntries.internalValue = value.matchEntries;
      this._name = value.name;
    }
  }

  // action_entries - computed: false, optional: true, required: false
  private _actionEntries = new Ipv6AclPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }
  public putActionEntries(value: Ipv6AclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable) {
    this._actionEntries.internalValue = value;
  }
  public resetActionEntries() {
    this._actionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionEntriesInput() {
    return this._actionEntries.internalValue;
  }

  // base_action - computed: false, optional: true, required: false
  private _baseAction?: string; 
  public get baseAction() {
    return this.getStringAttribute('base_action');
  }
  public set baseAction(value: string) {
    this._baseAction = value;
  }
  public resetBaseAction() {
    this._baseAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseActionInput() {
    return this._baseAction;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // match_entries - computed: false, optional: true, required: false
  private _matchEntries = new Ipv6AclPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: Ipv6AclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable) {
    this._matchEntries.internalValue = value;
  }
  public resetMatchEntries() {
    this._matchEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEntriesInput() {
    return this._matchEntries.internalValue;
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
}

export class Ipv6AclPolicyDefinitionSequencesList extends cdktf.ComplexList {
  public internalValue? : Ipv6AclPolicyDefinitionSequences[] | cdktf.IResolvable

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
  public get(index: number): Ipv6AclPolicyDefinitionSequencesOutputReference {
    return new Ipv6AclPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition sdwan_ipv6_acl_policy_definition}
*/
export class Ipv6AclPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_ipv6_acl_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6AclPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6AclPolicyDefinition to import
  * @param importFromId The id of the existing Ipv6AclPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6AclPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_ipv6_acl_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv6_acl_policy_definition sdwan_ipv6_acl_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6AclPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv6AclPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_ipv6_acl_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAction = config.defaultAction;
    this._description = config.description;
    this._name = config.name;
    this._sequences.internalValue = config.sequences;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // sequences - computed: false, optional: false, required: true
  private _sequences = new Ipv6AclPolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: Ipv6AclPolicyDefinitionSequences[] | cdktf.IResolvable) {
    this._sequences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sequencesInput() {
    return this._sequences.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
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
      default_action: cdktf.stringToTerraform(this._defaultAction),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      sequences: cdktf.listMapper(ipv6AclPolicyDefinitionSequencesToTerraform, false)(this._sequences.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      sequences: {
        value: cdktf.listMapperHcl(ipv6AclPolicyDefinitionSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv6AclPolicyDefinitionSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
