// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface QosPolicyListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list#id QosPolicyList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list#policies QosPolicyList#policies}
  */
  readonly policies: QosPolicyListPolicies[] | cdktf.IResolvable;
}
export interface QosPolicyListPolicies {
  /**
  * List of DSCP values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list#dscp_values QosPolicyList#dscp_values}
  */
  readonly dscpValues: string[];
  /**
  * QoS policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list#name QosPolicyList#name}
  */
  readonly name: string;
  /**
  * QoS class UUID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list#qos_class_uuid QosPolicyList#qos_class_uuid}
  */
  readonly qosClassUuid: string;
}

export function qosPolicyListPoliciesToTerraform(struct?: QosPolicyListPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dscpValues),
    name: cdktf.stringToTerraform(struct!.name),
    qos_class_uuid: cdktf.stringToTerraform(struct!.qosClassUuid),
  }
}


export function qosPolicyListPoliciesToHclTerraform(struct?: QosPolicyListPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dscpValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_class_uuid: {
      value: cdktf.stringToHclTerraform(struct!.qosClassUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class QosPolicyListPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): QosPolicyListPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscpValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpValues = this._dscpValues;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._qosClassUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosClassUuid = this._qosClassUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: QosPolicyListPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscpValues = undefined;
      this._name = undefined;
      this._qosClassUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscpValues = value.dscpValues;
      this._name = value.name;
      this._qosClassUuid = value.qosClassUuid;
    }
  }

  // dscp_values - computed: false, optional: false, required: true
  private _dscpValues?: string[]; 
  public get dscpValues() {
    return this.getListAttribute('dscp_values');
  }
  public set dscpValues(value: string[]) {
    this._dscpValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValuesInput() {
    return this._dscpValues;
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

  // qos_class_uuid - computed: false, optional: false, required: true
  private _qosClassUuid?: string; 
  public get qosClassUuid() {
    return this.getStringAttribute('qos_class_uuid');
  }
  public set qosClassUuid(value: string) {
    this._qosClassUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosClassUuidInput() {
    return this._qosClassUuid;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class QosPolicyListPoliciesList extends cdktf.ComplexList {
  public internalValue? : QosPolicyListPolicies[] | cdktf.IResolvable

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
  public get(index: number): QosPolicyListPoliciesOutputReference {
    return new QosPolicyListPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list aviatrix_qos_policy_list}
*/
export class QosPolicyList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_qos_policy_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a QosPolicyList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the QosPolicyList to import
  * @param importFromId The id of the existing QosPolicyList that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the QosPolicyList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_qos_policy_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/qos_policy_list aviatrix_qos_policy_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options QosPolicyListConfig
  */
  public constructor(scope: Construct, id: string, config: QosPolicyListConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_qos_policy_list',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policies - computed: false, optional: false, required: true
  private _policies = new QosPolicyListPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: QosPolicyListPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policies: cdktf.listMapper(qosPolicyListPoliciesToTerraform, true)(this._policies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktf.listMapperHcl(qosPolicyListPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "QosPolicyListPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
