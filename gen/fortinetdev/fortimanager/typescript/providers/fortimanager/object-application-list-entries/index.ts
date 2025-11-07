// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectApplicationListEntriesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#action ObjectApplicationListEntriesA#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#adom ObjectApplicationListEntriesA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#application ObjectApplicationListEntriesA#application}
  */
  readonly application?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#behavior ObjectApplicationListEntriesA#behavior}
  */
  readonly behavior?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#category ObjectApplicationListEntriesA#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#dynamic_sort_subtable ObjectApplicationListEntriesA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#exclusion ObjectApplicationListEntriesA#exclusion}
  */
  readonly exclusion?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#fosid ObjectApplicationListEntriesA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#id ObjectApplicationListEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#list ObjectApplicationListEntriesA#list}
  */
  readonly list: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#log ObjectApplicationListEntriesA#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#log_packet ObjectApplicationListEntriesA#log_packet}
  */
  readonly logPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#per_ip_shaper ObjectApplicationListEntriesA#per_ip_shaper}
  */
  readonly perIpShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#popularity ObjectApplicationListEntriesA#popularity}
  */
  readonly popularity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#protocols ObjectApplicationListEntriesA#protocols}
  */
  readonly protocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#quarantine ObjectApplicationListEntriesA#quarantine}
  */
  readonly quarantine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#quarantine_expiry ObjectApplicationListEntriesA#quarantine_expiry}
  */
  readonly quarantineExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#quarantine_log ObjectApplicationListEntriesA#quarantine_log}
  */
  readonly quarantineLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#rate_count ObjectApplicationListEntriesA#rate_count}
  */
  readonly rateCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#rate_duration ObjectApplicationListEntriesA#rate_duration}
  */
  readonly rateDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#rate_mode ObjectApplicationListEntriesA#rate_mode}
  */
  readonly rateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#rate_track ObjectApplicationListEntriesA#rate_track}
  */
  readonly rateTrack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#risk ObjectApplicationListEntriesA#risk}
  */
  readonly risk?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#scopetype ObjectApplicationListEntriesA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#session_ttl ObjectApplicationListEntriesA#session_ttl}
  */
  readonly sessionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#shaper ObjectApplicationListEntriesA#shaper}
  */
  readonly shaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#shaper_reverse ObjectApplicationListEntriesA#shaper_reverse}
  */
  readonly shaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#sub_category ObjectApplicationListEntriesA#sub_category}
  */
  readonly subCategory?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#technology ObjectApplicationListEntriesA#technology}
  */
  readonly technology?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#vendor ObjectApplicationListEntriesA#vendor}
  */
  readonly vendor?: string[];
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#parameters ObjectApplicationListEntriesA#parameters}
  */
  readonly parameters?: ObjectApplicationListEntriesParametersA[] | cdktf.IResolvable;
}
export interface ObjectApplicationListEntriesParametersMembersA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#id ObjectApplicationListEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#name ObjectApplicationListEntriesA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#value ObjectApplicationListEntriesA#value}
  */
  readonly value?: string;
}

export function objectApplicationListEntriesParametersMembersAToTerraform(struct?: ObjectApplicationListEntriesParametersMembersA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function objectApplicationListEntriesParametersMembersAToHclTerraform(struct?: ObjectApplicationListEntriesParametersMembersA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectApplicationListEntriesParametersMembersAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectApplicationListEntriesParametersMembersA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectApplicationListEntriesParametersMembersA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ObjectApplicationListEntriesParametersMembersAList extends cdktf.ComplexList {
  public internalValue? : ObjectApplicationListEntriesParametersMembersA[] | cdktf.IResolvable

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
  public get(index: number): ObjectApplicationListEntriesParametersMembersAOutputReference {
    return new ObjectApplicationListEntriesParametersMembersAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectApplicationListEntriesParametersA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#id ObjectApplicationListEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#value ObjectApplicationListEntriesA#value}
  */
  readonly value?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#members ObjectApplicationListEntriesA#members}
  */
  readonly members?: ObjectApplicationListEntriesParametersMembersA[] | cdktf.IResolvable;
}

export function objectApplicationListEntriesParametersAToTerraform(struct?: ObjectApplicationListEntriesParametersA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
    members: cdktf.listMapper(objectApplicationListEntriesParametersMembersAToTerraform, true)(struct!.members),
  }
}


export function objectApplicationListEntriesParametersAToHclTerraform(struct?: ObjectApplicationListEntriesParametersA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(objectApplicationListEntriesParametersMembersAToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectApplicationListEntriesParametersMembersAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectApplicationListEntriesParametersAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectApplicationListEntriesParametersA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectApplicationListEntriesParametersA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
      this._members.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
      this._members.internalValue = value.members;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // members - computed: false, optional: true, required: false
  private _members = new ObjectApplicationListEntriesParametersMembersAList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: ObjectApplicationListEntriesParametersMembersA[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}

export class ObjectApplicationListEntriesParametersAList extends cdktf.ComplexList {
  public internalValue? : ObjectApplicationListEntriesParametersA[] | cdktf.IResolvable

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
  public get(index: number): ObjectApplicationListEntriesParametersAOutputReference {
    return new ObjectApplicationListEntriesParametersAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries fortimanager_object_application_list_entries}
*/
export class ObjectApplicationListEntriesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_application_list_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectApplicationListEntriesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectApplicationListEntriesA to import
  * @param importFromId The id of the existing ObjectApplicationListEntriesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectApplicationListEntriesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_application_list_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_application_list_entries fortimanager_object_application_list_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectApplicationListEntriesAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectApplicationListEntriesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_application_list_entries',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._adom = config.adom;
    this._application = config.application;
    this._behavior = config.behavior;
    this._category = config.category;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._exclusion = config.exclusion;
    this._fosid = config.fosid;
    this._id = config.id;
    this._list = config.list;
    this._log = config.log;
    this._logPacket = config.logPacket;
    this._perIpShaper = config.perIpShaper;
    this._popularity = config.popularity;
    this._protocols = config.protocols;
    this._quarantine = config.quarantine;
    this._quarantineExpiry = config.quarantineExpiry;
    this._quarantineLog = config.quarantineLog;
    this._rateCount = config.rateCount;
    this._rateDuration = config.rateDuration;
    this._rateMode = config.rateMode;
    this._rateTrack = config.rateTrack;
    this._risk = config.risk;
    this._scopetype = config.scopetype;
    this._sessionTtl = config.sessionTtl;
    this._shaper = config.shaper;
    this._shaperReverse = config.shaperReverse;
    this._subCategory = config.subCategory;
    this._technology = config.technology;
    this._vendor = config.vendor;
    this._parameters.internalValue = config.parameters;
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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // application - computed: true, optional: true, required: false
  private _application?: number[]; 
  public get application() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('application')));
  }
  public set application(value: number[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string[]; 
  public get behavior() {
    return cdktf.Fn.tolist(this.getListAttribute('behavior'));
  }
  public set behavior(value: string[]) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // exclusion - computed: true, optional: true, required: false
  private _exclusion?: number[]; 
  public get exclusion() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('exclusion')));
  }
  public set exclusion(value: number[]) {
    this._exclusion = value;
  }
  public resetExclusion() {
    this._exclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionInput() {
    return this._exclusion;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // list - computed: false, optional: false, required: true
  private _list?: string; 
  public get list() {
    return this.getStringAttribute('list');
  }
  public set list(value: string) {
    this._list = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_packet - computed: true, optional: true, required: false
  private _logPacket?: string; 
  public get logPacket() {
    return this.getStringAttribute('log_packet');
  }
  public set logPacket(value: string) {
    this._logPacket = value;
  }
  public resetLogPacket() {
    this._logPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPacketInput() {
    return this._logPacket;
  }

  // per_ip_shaper - computed: false, optional: true, required: false
  private _perIpShaper?: string; 
  public get perIpShaper() {
    return this.getStringAttribute('per_ip_shaper');
  }
  public set perIpShaper(value: string) {
    this._perIpShaper = value;
  }
  public resetPerIpShaper() {
    this._perIpShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perIpShaperInput() {
    return this._perIpShaper;
  }

  // popularity - computed: true, optional: true, required: false
  private _popularity?: string[]; 
  public get popularity() {
    return cdktf.Fn.tolist(this.getListAttribute('popularity'));
  }
  public set popularity(value: string[]) {
    this._popularity = value;
  }
  public resetPopularity() {
    this._popularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get popularityInput() {
    return this._popularity;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // quarantine - computed: true, optional: true, required: false
  private _quarantine?: string; 
  public get quarantine() {
    return this.getStringAttribute('quarantine');
  }
  public set quarantine(value: string) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // quarantine_expiry - computed: true, optional: true, required: false
  private _quarantineExpiry?: string; 
  public get quarantineExpiry() {
    return this.getStringAttribute('quarantine_expiry');
  }
  public set quarantineExpiry(value: string) {
    this._quarantineExpiry = value;
  }
  public resetQuarantineExpiry() {
    this._quarantineExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineExpiryInput() {
    return this._quarantineExpiry;
  }

  // quarantine_log - computed: true, optional: true, required: false
  private _quarantineLog?: string; 
  public get quarantineLog() {
    return this.getStringAttribute('quarantine_log');
  }
  public set quarantineLog(value: string) {
    this._quarantineLog = value;
  }
  public resetQuarantineLog() {
    this._quarantineLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineLogInput() {
    return this._quarantineLog;
  }

  // rate_count - computed: false, optional: true, required: false
  private _rateCount?: number; 
  public get rateCount() {
    return this.getNumberAttribute('rate_count');
  }
  public set rateCount(value: number) {
    this._rateCount = value;
  }
  public resetRateCount() {
    this._rateCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateCountInput() {
    return this._rateCount;
  }

  // rate_duration - computed: true, optional: true, required: false
  private _rateDuration?: number; 
  public get rateDuration() {
    return this.getNumberAttribute('rate_duration');
  }
  public set rateDuration(value: number) {
    this._rateDuration = value;
  }
  public resetRateDuration() {
    this._rateDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateDurationInput() {
    return this._rateDuration;
  }

  // rate_mode - computed: true, optional: true, required: false
  private _rateMode?: string; 
  public get rateMode() {
    return this.getStringAttribute('rate_mode');
  }
  public set rateMode(value: string) {
    this._rateMode = value;
  }
  public resetRateMode() {
    this._rateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateModeInput() {
    return this._rateMode;
  }

  // rate_track - computed: true, optional: true, required: false
  private _rateTrack?: string; 
  public get rateTrack() {
    return this.getStringAttribute('rate_track');
  }
  public set rateTrack(value: string) {
    this._rateTrack = value;
  }
  public resetRateTrack() {
    this._rateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateTrackInput() {
    return this._rateTrack;
  }

  // risk - computed: true, optional: true, required: false
  private _risk?: number[]; 
  public get risk() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('risk')));
  }
  public set risk(value: number[]) {
    this._risk = value;
  }
  public resetRisk() {
    this._risk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // session_ttl - computed: false, optional: true, required: false
  private _sessionTtl?: number; 
  public get sessionTtl() {
    return this.getNumberAttribute('session_ttl');
  }
  public set sessionTtl(value: number) {
    this._sessionTtl = value;
  }
  public resetSessionTtl() {
    this._sessionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTtlInput() {
    return this._sessionTtl;
  }

  // shaper - computed: false, optional: true, required: false
  private _shaper?: string; 
  public get shaper() {
    return this.getStringAttribute('shaper');
  }
  public set shaper(value: string) {
    this._shaper = value;
  }
  public resetShaper() {
    this._shaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaperInput() {
    return this._shaper;
  }

  // shaper_reverse - computed: false, optional: true, required: false
  private _shaperReverse?: string; 
  public get shaperReverse() {
    return this.getStringAttribute('shaper_reverse');
  }
  public set shaperReverse(value: string) {
    this._shaperReverse = value;
  }
  public resetShaperReverse() {
    this._shaperReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaperReverseInput() {
    return this._shaperReverse;
  }

  // sub_category - computed: true, optional: true, required: false
  private _subCategory?: number[]; 
  public get subCategory() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('sub_category')));
  }
  public set subCategory(value: number[]) {
    this._subCategory = value;
  }
  public resetSubCategory() {
    this._subCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subCategoryInput() {
    return this._subCategory;
  }

  // technology - computed: true, optional: true, required: false
  private _technology?: string[]; 
  public get technology() {
    return cdktf.Fn.tolist(this.getListAttribute('technology'));
  }
  public set technology(value: string[]) {
    this._technology = value;
  }
  public resetTechnology() {
    this._technology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get technologyInput() {
    return this._technology;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string[]; 
  public get vendor() {
    return cdktf.Fn.tolist(this.getListAttribute('vendor'));
  }
  public set vendor(value: string[]) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ObjectApplicationListEntriesParametersAList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ObjectApplicationListEntriesParametersA[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      application: cdktf.listMapper(cdktf.numberToTerraform, false)(this._application),
      behavior: cdktf.listMapper(cdktf.stringToTerraform, false)(this._behavior),
      category: cdktf.stringToTerraform(this._category),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      exclusion: cdktf.listMapper(cdktf.numberToTerraform, false)(this._exclusion),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      list: cdktf.stringToTerraform(this._list),
      log: cdktf.stringToTerraform(this._log),
      log_packet: cdktf.stringToTerraform(this._logPacket),
      per_ip_shaper: cdktf.stringToTerraform(this._perIpShaper),
      popularity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._popularity),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      quarantine: cdktf.stringToTerraform(this._quarantine),
      quarantine_expiry: cdktf.stringToTerraform(this._quarantineExpiry),
      quarantine_log: cdktf.stringToTerraform(this._quarantineLog),
      rate_count: cdktf.numberToTerraform(this._rateCount),
      rate_duration: cdktf.numberToTerraform(this._rateDuration),
      rate_mode: cdktf.stringToTerraform(this._rateMode),
      rate_track: cdktf.stringToTerraform(this._rateTrack),
      risk: cdktf.listMapper(cdktf.numberToTerraform, false)(this._risk),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      session_ttl: cdktf.numberToTerraform(this._sessionTtl),
      shaper: cdktf.stringToTerraform(this._shaper),
      shaper_reverse: cdktf.stringToTerraform(this._shaperReverse),
      sub_category: cdktf.listMapper(cdktf.numberToTerraform, false)(this._subCategory),
      technology: cdktf.listMapper(cdktf.stringToTerraform, false)(this._technology),
      vendor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vendor),
      parameters: cdktf.listMapper(objectApplicationListEntriesParametersAToTerraform, true)(this._parameters.internalValue),
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._application),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      behavior: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._behavior),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusion: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._exclusion),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list: {
        value: cdktf.stringToHclTerraform(this._list),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log: {
        value: cdktf.stringToHclTerraform(this._log),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_packet: {
        value: cdktf.stringToHclTerraform(this._logPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      per_ip_shaper: {
        value: cdktf.stringToHclTerraform(this._perIpShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      popularity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._popularity),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      quarantine: {
        value: cdktf.stringToHclTerraform(this._quarantine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_expiry: {
        value: cdktf.stringToHclTerraform(this._quarantineExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quarantine_log: {
        value: cdktf.stringToHclTerraform(this._quarantineLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_count: {
        value: cdktf.numberToHclTerraform(this._rateCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_duration: {
        value: cdktf.numberToHclTerraform(this._rateDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_mode: {
        value: cdktf.stringToHclTerraform(this._rateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_track: {
        value: cdktf.stringToHclTerraform(this._rateTrack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._risk),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_ttl: {
        value: cdktf.numberToHclTerraform(this._sessionTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shaper: {
        value: cdktf.stringToHclTerraform(this._shaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shaper_reverse: {
        value: cdktf.stringToHclTerraform(this._shaperReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_category: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._subCategory),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      technology: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._technology),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vendor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vendor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      parameters: {
        value: cdktf.listMapperHcl(objectApplicationListEntriesParametersAToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectApplicationListEntriesParametersAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
