// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4AclPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default action, either `accept` or `drop`
  *   - Choices: `accept`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#default_action Ipv4AclPolicyDefinition#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#description Ipv4AclPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#name Ipv4AclPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of ACL sequences
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#sequences Ipv4AclPolicyDefinition#sequences}
  */
  readonly sequences: Ipv4AclPolicyDefinitionSequences[] | cdktf.IResolvable;
}
export interface Ipv4AclPolicyDefinitionSequencesActionEntriesSetParameters {
  /**
  * DSCP value, Attribute conditional on `type` being equal to `dscp`
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#dscp Ipv4AclPolicyDefinition#dscp}
  */
  readonly dscp?: number;
  /**
  * Next hop IP, Attribute conditional on `type` being equal to `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#next_hop Ipv4AclPolicyDefinition#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Type of set parameter
  *   - Choices: `dscp`, `nextHop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#type Ipv4AclPolicyDefinition#type}
  */
  readonly type: string;
}

export function ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersToTerraform(struct?: Ipv4AclPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.numberToTerraform(struct!.dscp),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform(struct?: Ipv4AclPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
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

export class Ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4AclPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4AclPolicyDefinitionSequencesActionEntriesSetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscp = undefined;
      this._nextHop = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscp = value.dscp;
      this._nextHop = value.nextHop;
      this._type = value.type;
    }
  }

  // dscp - computed: false, optional: true, required: false
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
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

export class Ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersList extends cdktf.ComplexList {
  public internalValue? : Ipv4AclPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable

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
  public get(index: number): Ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference {
    return new Ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv4AclPolicyDefinitionSequencesActionEntries {
  /**
  * Class map ID, Attribute conditional on `type` being equal to `class`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#class_map_id Ipv4AclPolicyDefinition#class_map_id}
  */
  readonly classMapId?: string;
  /**
  * Class map version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#class_map_version Ipv4AclPolicyDefinition#class_map_version}
  */
  readonly classMapVersion?: number;
  /**
  * Counter name, Attribute conditional on `type` being equal to `count`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#counter_name Ipv4AclPolicyDefinition#counter_name}
  */
  readonly counterName?: string;
  /**
  * Enable logging, Attribute conditional on `type` being equal to `log`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#log Ipv4AclPolicyDefinition#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Mirror ID, Attribute conditional on `type` being equal to `mirror`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#mirror_id Ipv4AclPolicyDefinition#mirror_id}
  */
  readonly mirrorId?: string;
  /**
  * Mirror version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#mirror_version Ipv4AclPolicyDefinition#mirror_version}
  */
  readonly mirrorVersion?: number;
  /**
  * Policer ID, Attribute conditional on `type` being equal to `policer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#policer_id Ipv4AclPolicyDefinition#policer_id}
  */
  readonly policerId?: string;
  /**
  * Policer version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#policer_version Ipv4AclPolicyDefinition#policer_version}
  */
  readonly policerVersion?: number;
  /**
  * List of set parameters, Attribute conditional on `type` being equal to `set`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#set_parameters Ipv4AclPolicyDefinition#set_parameters}
  */
  readonly setParameters?: Ipv4AclPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable;
  /**
  * Type of action entry
  *   - Choices: `class`, `count`, `set`, `log`, `mirror`, `policer`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#type Ipv4AclPolicyDefinition#type}
  */
  readonly type: string;
}

export function ipv4AclPolicyDefinitionSequencesActionEntriesToTerraform(struct?: Ipv4AclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
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
    set_parameters: cdktf.listMapper(ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersToTerraform, false)(struct!.setParameters),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipv4AclPolicyDefinitionSequencesActionEntriesToHclTerraform(struct?: Ipv4AclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersToHclTerraform, false)(struct!.setParameters),
      isBlock: true,
      type: "list",
      storageClassType: "Ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersList",
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

export class Ipv4AclPolicyDefinitionSequencesActionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4AclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Ipv4AclPolicyDefinitionSequencesActionEntries | cdktf.IResolvable | undefined) {
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
  private _setParameters = new Ipv4AclPolicyDefinitionSequencesActionEntriesSetParametersList(this, "set_parameters", false);
  public get setParameters() {
    return this._setParameters;
  }
  public putSetParameters(value: Ipv4AclPolicyDefinitionSequencesActionEntriesSetParameters[] | cdktf.IResolvable) {
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

export class Ipv4AclPolicyDefinitionSequencesActionEntriesList extends cdktf.ComplexList {
  public internalValue? : Ipv4AclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable

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
  public get(index: number): Ipv4AclPolicyDefinitionSequencesActionEntriesOutputReference {
    return new Ipv4AclPolicyDefinitionSequencesActionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv4AclPolicyDefinitionSequencesMatchEntries {
  /**
  * Class map ID, Attribute conditional on `type` being equal to `class`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#class_map_id Ipv4AclPolicyDefinition#class_map_id}
  */
  readonly classMapId?: string;
  /**
  * Class map version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#class_map_version Ipv4AclPolicyDefinition#class_map_version}
  */
  readonly classMapVersion?: number;
  /**
  * Destination data IPv4 prefix list ID, Attribute conditional on `type` being equal to `destinationDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#destination_data_ipv4_prefix_list_id Ipv4AclPolicyDefinition#destination_data_ipv4_prefix_list_id}
  */
  readonly destinationDataIpv4PrefixListId?: string;
  /**
  * Destination data IPv4 prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#destination_data_ipv4_prefix_list_version Ipv4AclPolicyDefinition#destination_data_ipv4_prefix_list_version}
  */
  readonly destinationDataIpv4PrefixListVersion?: number;
  /**
  * Destination IP prefix, Attribute conditional on `type` being equal to `destinationIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#destination_ip Ipv4AclPolicyDefinition#destination_ip}
  */
  readonly destinationIp?: string;
  /**
  * Destination IP prefix variable, Attribute conditional on `type` being equal to `destinationIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#destination_ip_variable Ipv4AclPolicyDefinition#destination_ip_variable}
  */
  readonly destinationIpVariable?: string;
  /**
  * Destination ports. Single value (0-65535) or ranges separated by spaces., Attribute conditional on `type` being equal to `destinationPort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#destination_ports Ipv4AclPolicyDefinition#destination_ports}
  */
  readonly destinationPorts?: string;
  /**
  * DSCP value, Attribute conditional on `type` being equal to `dscp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#dscp Ipv4AclPolicyDefinition#dscp}
  */
  readonly dscp?: string;
  /**
  * ICMP Message, Attribute conditional on `type` being equal to `icmpMessage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#icmp_message Ipv4AclPolicyDefinition#icmp_message}
  */
  readonly icmpMessage?: string;
  /**
  * Packet length, Attribute conditional on `type` being equal to `packetLength`
  *   - Range: `0`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#packet_length Ipv4AclPolicyDefinition#packet_length}
  */
  readonly packetLength?: number;
  /**
  * PLP - priority, Attribute conditional on `type` being equal to `plp`
  *   - Choices: `high`, `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#priority Ipv4AclPolicyDefinition#priority}
  */
  readonly priority?: string;
  /**
  * Single value (0-255) or multiple values separated by spaces, Attribute conditional on `type` being equal to `protocol`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#protocol Ipv4AclPolicyDefinition#protocol}
  */
  readonly protocol?: string;
  /**
  * Source data IPv4 prefix list ID, Attribute conditional on `type` being equal to `sourceDataPrefixList`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#source_data_ipv4_prefix_list_id Ipv4AclPolicyDefinition#source_data_ipv4_prefix_list_id}
  */
  readonly sourceDataIpv4PrefixListId?: string;
  /**
  * Source data IPv4 prefix list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#source_data_ipv4_prefix_list_version Ipv4AclPolicyDefinition#source_data_ipv4_prefix_list_version}
  */
  readonly sourceDataIpv4PrefixListVersion?: number;
  /**
  * Source IP prefix, Attribute conditional on `type` being equal to `sourceIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#source_ip Ipv4AclPolicyDefinition#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Source IP prefix variable, Attribute conditional on `type` being equal to `sourceIp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#source_ip_variable Ipv4AclPolicyDefinition#source_ip_variable}
  */
  readonly sourceIpVariable?: string;
  /**
  * Source ports. Single value (0-65535) or ranges separated by spaces., Attribute conditional on `type` being equal to `sourcePort`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#source_ports Ipv4AclPolicyDefinition#source_ports}
  */
  readonly sourcePorts?: string;
  /**
  * TCP parameters, Attribute conditional on `type` being equal to `tcp`
  *   - Choices: `syn`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#tcp Ipv4AclPolicyDefinition#tcp}
  */
  readonly tcp?: string;
  /**
  * Type of match entry
  *   - Choices: `dscp`, `sourceIp`, `destinationIp`, `class`, `packetLength`, `plp`, `sourcePort`, `destinationPort`, `sourceDataPrefixList`, `destinationDataPrefixList`, `protocol`, `tcp`, `icmpMessage`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#type Ipv4AclPolicyDefinition#type}
  */
  readonly type: string;
}

export function ipv4AclPolicyDefinitionSequencesMatchEntriesToTerraform(struct?: Ipv4AclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_map_id: cdktf.stringToTerraform(struct!.classMapId),
    class_map_version: cdktf.numberToTerraform(struct!.classMapVersion),
    destination_data_ipv4_prefix_list_id: cdktf.stringToTerraform(struct!.destinationDataIpv4PrefixListId),
    destination_data_ipv4_prefix_list_version: cdktf.numberToTerraform(struct!.destinationDataIpv4PrefixListVersion),
    destination_ip: cdktf.stringToTerraform(struct!.destinationIp),
    destination_ip_variable: cdktf.stringToTerraform(struct!.destinationIpVariable),
    destination_ports: cdktf.stringToTerraform(struct!.destinationPorts),
    dscp: cdktf.stringToTerraform(struct!.dscp),
    icmp_message: cdktf.stringToTerraform(struct!.icmpMessage),
    packet_length: cdktf.numberToTerraform(struct!.packetLength),
    priority: cdktf.stringToTerraform(struct!.priority),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    source_data_ipv4_prefix_list_id: cdktf.stringToTerraform(struct!.sourceDataIpv4PrefixListId),
    source_data_ipv4_prefix_list_version: cdktf.numberToTerraform(struct!.sourceDataIpv4PrefixListVersion),
    source_ip: cdktf.stringToTerraform(struct!.sourceIp),
    source_ip_variable: cdktf.stringToTerraform(struct!.sourceIpVariable),
    source_ports: cdktf.stringToTerraform(struct!.sourcePorts),
    tcp: cdktf.stringToTerraform(struct!.tcp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ipv4AclPolicyDefinitionSequencesMatchEntriesToHclTerraform(struct?: Ipv4AclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable): any {
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
    destination_data_ipv4_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.destinationDataIpv4PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_data_ipv4_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.destinationDataIpv4PrefixListVersion),
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
    destination_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.destinationIpVariable),
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
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icmp_message: {
      value: cdktf.stringToHclTerraform(struct!.icmpMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_ipv4_prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDataIpv4PrefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_data_ipv4_prefix_list_version: {
      value: cdktf.numberToHclTerraform(struct!.sourceDataIpv4PrefixListVersion),
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
    source_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpVariable),
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

export class Ipv4AclPolicyDefinitionSequencesMatchEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4AclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined {
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
    if (this._destinationDataIpv4PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv4PrefixListId = this._destinationDataIpv4PrefixListId;
    }
    if (this._destinationDataIpv4PrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationDataIpv4PrefixListVersion = this._destinationDataIpv4PrefixListVersion;
    }
    if (this._destinationIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIp = this._destinationIp;
    }
    if (this._destinationIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpVariable = this._destinationIpVariable;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._icmpMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpMessage = this._icmpMessage;
    }
    if (this._packetLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLength = this._packetLength;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sourceDataIpv4PrefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv4PrefixListId = this._sourceDataIpv4PrefixListId;
    }
    if (this._sourceDataIpv4PrefixListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDataIpv4PrefixListVersion = this._sourceDataIpv4PrefixListVersion;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._sourceIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpVariable = this._sourceIpVariable;
    }
    if (this._sourcePorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePorts = this._sourcePorts;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4AclPolicyDefinitionSequencesMatchEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classMapId = undefined;
      this._classMapVersion = undefined;
      this._destinationDataIpv4PrefixListId = undefined;
      this._destinationDataIpv4PrefixListVersion = undefined;
      this._destinationIp = undefined;
      this._destinationIpVariable = undefined;
      this._destinationPorts = undefined;
      this._dscp = undefined;
      this._icmpMessage = undefined;
      this._packetLength = undefined;
      this._priority = undefined;
      this._protocol = undefined;
      this._sourceDataIpv4PrefixListId = undefined;
      this._sourceDataIpv4PrefixListVersion = undefined;
      this._sourceIp = undefined;
      this._sourceIpVariable = undefined;
      this._sourcePorts = undefined;
      this._tcp = undefined;
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
      this._destinationDataIpv4PrefixListId = value.destinationDataIpv4PrefixListId;
      this._destinationDataIpv4PrefixListVersion = value.destinationDataIpv4PrefixListVersion;
      this._destinationIp = value.destinationIp;
      this._destinationIpVariable = value.destinationIpVariable;
      this._destinationPorts = value.destinationPorts;
      this._dscp = value.dscp;
      this._icmpMessage = value.icmpMessage;
      this._packetLength = value.packetLength;
      this._priority = value.priority;
      this._protocol = value.protocol;
      this._sourceDataIpv4PrefixListId = value.sourceDataIpv4PrefixListId;
      this._sourceDataIpv4PrefixListVersion = value.sourceDataIpv4PrefixListVersion;
      this._sourceIp = value.sourceIp;
      this._sourceIpVariable = value.sourceIpVariable;
      this._sourcePorts = value.sourcePorts;
      this._tcp = value.tcp;
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

  // destination_data_ipv4_prefix_list_id - computed: false, optional: true, required: false
  private _destinationDataIpv4PrefixListId?: string; 
  public get destinationDataIpv4PrefixListId() {
    return this.getStringAttribute('destination_data_ipv4_prefix_list_id');
  }
  public set destinationDataIpv4PrefixListId(value: string) {
    this._destinationDataIpv4PrefixListId = value;
  }
  public resetDestinationDataIpv4PrefixListId() {
    this._destinationDataIpv4PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv4PrefixListIdInput() {
    return this._destinationDataIpv4PrefixListId;
  }

  // destination_data_ipv4_prefix_list_version - computed: false, optional: true, required: false
  private _destinationDataIpv4PrefixListVersion?: number; 
  public get destinationDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('destination_data_ipv4_prefix_list_version');
  }
  public set destinationDataIpv4PrefixListVersion(value: number) {
    this._destinationDataIpv4PrefixListVersion = value;
  }
  public resetDestinationDataIpv4PrefixListVersion() {
    this._destinationDataIpv4PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDataIpv4PrefixListVersionInput() {
    return this._destinationDataIpv4PrefixListVersion;
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

  // destination_ip_variable - computed: false, optional: true, required: false
  private _destinationIpVariable?: string; 
  public get destinationIpVariable() {
    return this.getStringAttribute('destination_ip_variable');
  }
  public set destinationIpVariable(value: string) {
    this._destinationIpVariable = value;
  }
  public resetDestinationIpVariable() {
    this._destinationIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpVariableInput() {
    return this._destinationIpVariable;
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

  // dscp - computed: false, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // icmp_message - computed: false, optional: true, required: false
  private _icmpMessage?: string; 
  public get icmpMessage() {
    return this.getStringAttribute('icmp_message');
  }
  public set icmpMessage(value: string) {
    this._icmpMessage = value;
  }
  public resetIcmpMessage() {
    this._icmpMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpMessageInput() {
    return this._icmpMessage;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // source_data_ipv4_prefix_list_id - computed: false, optional: true, required: false
  private _sourceDataIpv4PrefixListId?: string; 
  public get sourceDataIpv4PrefixListId() {
    return this.getStringAttribute('source_data_ipv4_prefix_list_id');
  }
  public set sourceDataIpv4PrefixListId(value: string) {
    this._sourceDataIpv4PrefixListId = value;
  }
  public resetSourceDataIpv4PrefixListId() {
    this._sourceDataIpv4PrefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv4PrefixListIdInput() {
    return this._sourceDataIpv4PrefixListId;
  }

  // source_data_ipv4_prefix_list_version - computed: false, optional: true, required: false
  private _sourceDataIpv4PrefixListVersion?: number; 
  public get sourceDataIpv4PrefixListVersion() {
    return this.getNumberAttribute('source_data_ipv4_prefix_list_version');
  }
  public set sourceDataIpv4PrefixListVersion(value: number) {
    this._sourceDataIpv4PrefixListVersion = value;
  }
  public resetSourceDataIpv4PrefixListVersion() {
    this._sourceDataIpv4PrefixListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDataIpv4PrefixListVersionInput() {
    return this._sourceDataIpv4PrefixListVersion;
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

  // source_ip_variable - computed: false, optional: true, required: false
  private _sourceIpVariable?: string; 
  public get sourceIpVariable() {
    return this.getStringAttribute('source_ip_variable');
  }
  public set sourceIpVariable(value: string) {
    this._sourceIpVariable = value;
  }
  public resetSourceIpVariable() {
    this._sourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpVariableInput() {
    return this._sourceIpVariable;
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

export class Ipv4AclPolicyDefinitionSequencesMatchEntriesList extends cdktf.ComplexList {
  public internalValue? : Ipv4AclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable

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
  public get(index: number): Ipv4AclPolicyDefinitionSequencesMatchEntriesOutputReference {
    return new Ipv4AclPolicyDefinitionSequencesMatchEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Ipv4AclPolicyDefinitionSequences {
  /**
  * List of action entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#action_entries Ipv4AclPolicyDefinition#action_entries}
  */
  readonly actionEntries?: Ipv4AclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable;
  /**
  * Base action, either `accept` or `drop`
  *   - Choices: `accept`, `drop`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#base_action Ipv4AclPolicyDefinition#base_action}
  */
  readonly baseAction?: string;
  /**
  * Sequence ID
  *   - Range: `1`-`65534`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#id Ipv4AclPolicyDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * List of match entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#match_entries Ipv4AclPolicyDefinition#match_entries}
  */
  readonly matchEntries?: Ipv4AclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable;
  /**
  * Sequence name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#name Ipv4AclPolicyDefinition#name}
  */
  readonly name: string;
}

export function ipv4AclPolicyDefinitionSequencesToTerraform(struct?: Ipv4AclPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_entries: cdktf.listMapper(ipv4AclPolicyDefinitionSequencesActionEntriesToTerraform, false)(struct!.actionEntries),
    base_action: cdktf.stringToTerraform(struct!.baseAction),
    id: cdktf.numberToTerraform(struct!.id),
    match_entries: cdktf.listMapper(ipv4AclPolicyDefinitionSequencesMatchEntriesToTerraform, false)(struct!.matchEntries),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipv4AclPolicyDefinitionSequencesToHclTerraform(struct?: Ipv4AclPolicyDefinitionSequences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_entries: {
      value: cdktf.listMapperHcl(ipv4AclPolicyDefinitionSequencesActionEntriesToHclTerraform, false)(struct!.actionEntries),
      isBlock: true,
      type: "set",
      storageClassType: "Ipv4AclPolicyDefinitionSequencesActionEntriesList",
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
      value: cdktf.listMapperHcl(ipv4AclPolicyDefinitionSequencesMatchEntriesToHclTerraform, false)(struct!.matchEntries),
      isBlock: true,
      type: "set",
      storageClassType: "Ipv4AclPolicyDefinitionSequencesMatchEntriesList",
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

export class Ipv4AclPolicyDefinitionSequencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4AclPolicyDefinitionSequences | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Ipv4AclPolicyDefinitionSequences | cdktf.IResolvable | undefined) {
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
  private _actionEntries = new Ipv4AclPolicyDefinitionSequencesActionEntriesList(this, "action_entries", true);
  public get actionEntries() {
    return this._actionEntries;
  }
  public putActionEntries(value: Ipv4AclPolicyDefinitionSequencesActionEntries[] | cdktf.IResolvable) {
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
  private _matchEntries = new Ipv4AclPolicyDefinitionSequencesMatchEntriesList(this, "match_entries", true);
  public get matchEntries() {
    return this._matchEntries;
  }
  public putMatchEntries(value: Ipv4AclPolicyDefinitionSequencesMatchEntries[] | cdktf.IResolvable) {
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

export class Ipv4AclPolicyDefinitionSequencesList extends cdktf.ComplexList {
  public internalValue? : Ipv4AclPolicyDefinitionSequences[] | cdktf.IResolvable

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
  public get(index: number): Ipv4AclPolicyDefinitionSequencesOutputReference {
    return new Ipv4AclPolicyDefinitionSequencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition sdwan_ipv4_acl_policy_definition}
*/
export class Ipv4AclPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_ipv4_acl_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4AclPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4AclPolicyDefinition to import
  * @param importFromId The id of the existing Ipv4AclPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4AclPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_ipv4_acl_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/ipv4_acl_policy_definition sdwan_ipv4_acl_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4AclPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: Ipv4AclPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_ipv4_acl_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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
  private _sequences = new Ipv4AclPolicyDefinitionSequencesList(this, "sequences", false);
  public get sequences() {
    return this._sequences;
  }
  public putSequences(value: Ipv4AclPolicyDefinitionSequences[] | cdktf.IResolvable) {
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
      sequences: cdktf.listMapper(ipv4AclPolicyDefinitionSequencesToTerraform, false)(this._sequences.internalValue),
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
        value: cdktf.listMapperHcl(ipv4AclPolicyDefinitionSequencesToHclTerraform, false)(this._sequences.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv4AclPolicyDefinitionSequencesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
