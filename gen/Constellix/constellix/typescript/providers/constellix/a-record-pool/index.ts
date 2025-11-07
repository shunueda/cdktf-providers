// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ARecordPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#disable_flag ARecordPool#disable_flag}
  */
  readonly disableFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#failed_flag ARecordPool#failed_flag}
  */
  readonly failedFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#id ARecordPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#min_available_failover ARecordPool#min_available_failover}
  */
  readonly minAvailableFailover: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#name ARecordPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#note ARecordPool#note}
  */
  readonly note?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#num_return ARecordPool#num_return}
  */
  readonly numReturn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#version ARecordPool#version}
  */
  readonly version?: number;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#values ARecordPool#values}
  */
  readonly values: ARecordPoolValues[] | cdktf.IResolvable;
}
export interface ARecordPoolValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#check_id ARecordPool#check_id}
  */
  readonly checkId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#disable_flag ARecordPool#disable_flag}
  */
  readonly disableFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#policy ARecordPool#policy}
  */
  readonly policy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#value ARecordPool#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#weight ARecordPool#weight}
  */
  readonly weight: number;
}

export function aRecordPoolValuesToTerraform(struct?: ARecordPoolValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_id: cdktf.numberToTerraform(struct!.checkId),
    disable_flag: cdktf.stringToTerraform(struct!.disableFlag),
    policy: cdktf.stringToTerraform(struct!.policy),
    value: cdktf.stringToTerraform(struct!.value),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function aRecordPoolValuesToHclTerraform(struct?: ARecordPoolValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_id: {
      value: cdktf.numberToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_flag: {
      value: cdktf.stringToHclTerraform(struct!.disableFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ARecordPoolValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ARecordPoolValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._disableFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFlag = this._disableFlag;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ARecordPoolValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkId = undefined;
      this._disableFlag = undefined;
      this._policy = undefined;
      this._value = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkId = value.checkId;
      this._disableFlag = value.disableFlag;
      this._policy = value.policy;
      this._value = value.value;
      this._weight = value.weight;
    }
  }

  // check_id - computed: true, optional: true, required: false
  private _checkId?: number; 
  public get checkId() {
    return this.getNumberAttribute('check_id');
  }
  public set checkId(value: number) {
    this._checkId = value;
  }
  public resetCheckId() {
    this._checkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // disable_flag - computed: true, optional: true, required: false
  private _disableFlag?: string; 
  public get disableFlag() {
    return this.getStringAttribute('disable_flag');
  }
  public set disableFlag(value: string) {
    this._disableFlag = value;
  }
  public resetDisableFlag() {
    this._disableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFlagInput() {
    return this._disableFlag;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ARecordPoolValuesList extends cdktf.ComplexList {
  public internalValue? : ARecordPoolValues[] | cdktf.IResolvable

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
  public get(index: number): ARecordPoolValuesOutputReference {
    return new ARecordPoolValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool constellix_a_record_pool}
*/
export class ARecordPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_a_record_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ARecordPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ARecordPool to import
  * @param importFromId The id of the existing ARecordPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ARecordPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_a_record_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/a_record_pool constellix_a_record_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ARecordPoolConfig
  */
  public constructor(scope: Construct, id: string, config: ARecordPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_a_record_pool',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableFlag = config.disableFlag;
    this._failedFlag = config.failedFlag;
    this._id = config.id;
    this._minAvailableFailover = config.minAvailableFailover;
    this._name = config.name;
    this._note = config.note;
    this._numReturn = config.numReturn;
    this._version = config.version;
    this._values.internalValue = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_flag - computed: true, optional: true, required: false
  private _disableFlag?: string; 
  public get disableFlag() {
    return this.getStringAttribute('disable_flag');
  }
  public set disableFlag(value: string) {
    this._disableFlag = value;
  }
  public resetDisableFlag() {
    this._disableFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFlagInput() {
    return this._disableFlag;
  }

  // failed_flag - computed: true, optional: true, required: false
  private _failedFlag?: string; 
  public get failedFlag() {
    return this.getStringAttribute('failed_flag');
  }
  public set failedFlag(value: string) {
    this._failedFlag = value;
  }
  public resetFailedFlag() {
    this._failedFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedFlagInput() {
    return this._failedFlag;
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

  // min_available_failover - computed: false, optional: false, required: true
  private _minAvailableFailover?: number; 
  public get minAvailableFailover() {
    return this.getNumberAttribute('min_available_failover');
  }
  public set minAvailableFailover(value: number) {
    this._minAvailableFailover = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableFailoverInput() {
    return this._minAvailableFailover;
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

  // note - computed: true, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // num_return - computed: false, optional: false, required: true
  private _numReturn?: number; 
  public get numReturn() {
    return this.getNumberAttribute('num_return');
  }
  public set numReturn(value: number) {
    this._numReturn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numReturnInput() {
    return this._numReturn;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // values - computed: false, optional: false, required: true
  private _values = new ARecordPoolValuesList(this, "values", true);
  public get values() {
    return this._values;
  }
  public putValues(value: ARecordPoolValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_flag: cdktf.stringToTerraform(this._disableFlag),
      failed_flag: cdktf.stringToTerraform(this._failedFlag),
      id: cdktf.stringToTerraform(this._id),
      min_available_failover: cdktf.numberToTerraform(this._minAvailableFailover),
      name: cdktf.stringToTerraform(this._name),
      note: cdktf.stringToTerraform(this._note),
      num_return: cdktf.numberToTerraform(this._numReturn),
      version: cdktf.numberToTerraform(this._version),
      values: cdktf.listMapper(aRecordPoolValuesToTerraform, true)(this._values.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_flag: {
        value: cdktf.stringToHclTerraform(this._disableFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failed_flag: {
        value: cdktf.stringToHclTerraform(this._failedFlag),
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
      min_available_failover: {
        value: cdktf.numberToHclTerraform(this._minAvailableFailover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_return: {
        value: cdktf.numberToHclTerraform(this._numReturn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      values: {
        value: cdktf.listMapperHcl(aRecordPoolValuesToHclTerraform, true)(this._values.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ARecordPoolValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
