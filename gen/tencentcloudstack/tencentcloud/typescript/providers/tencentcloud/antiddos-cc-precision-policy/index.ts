// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosCcPrecisionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#domain AntiddosCcPrecisionPolicy#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#id AntiddosCcPrecisionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#instance_id AntiddosCcPrecisionPolicy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Ip value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#ip AntiddosCcPrecisionPolicy#ip}
  */
  readonly ip: string;
  /**
  * policy type, alg or drop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#policy_action AntiddosCcPrecisionPolicy#policy_action}
  */
  readonly policyAction: string;
  /**
  * protocol http or https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#protocol AntiddosCcPrecisionPolicy#protocol}
  */
  readonly protocol: string;
  /**
  * policy_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#policy_list AntiddosCcPrecisionPolicy#policy_list}
  */
  readonly policyList: AntiddosCcPrecisionPolicyPolicyListStruct[] | cdktf.IResolvable;
}
export interface AntiddosCcPrecisionPolicyPolicyListStruct {
  /**
  * Configuration fields can take values of cgi, ua, cookie, referer, accept, srcip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#field_name AntiddosCcPrecisionPolicy#field_name}
  */
  readonly fieldName: string;
  /**
  * field type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#field_type AntiddosCcPrecisionPolicy#field_type}
  */
  readonly fieldType: string;
  /**
  * value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#value AntiddosCcPrecisionPolicy#value}
  */
  readonly value: string;
  /**
  * Configuration item value comparison method, can take values of equal, not_ Equal, include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#value_operator AntiddosCcPrecisionPolicy#value_operator}
  */
  readonly valueOperator: string;
}

export function antiddosCcPrecisionPolicyPolicyListStructToTerraform(struct?: AntiddosCcPrecisionPolicyPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    value: cdktf.stringToTerraform(struct!.value),
    value_operator: cdktf.stringToTerraform(struct!.valueOperator),
  }
}


export function antiddosCcPrecisionPolicyPolicyListStructToHclTerraform(struct?: AntiddosCcPrecisionPolicyPolicyListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
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
    value_operator: {
      value: cdktf.stringToHclTerraform(struct!.valueOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosCcPrecisionPolicyPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntiddosCcPrecisionPolicyPolicyListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueOperator = this._valueOperator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosCcPrecisionPolicyPolicyListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._fieldType = undefined;
      this._value = undefined;
      this._valueOperator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._fieldType = value.fieldType;
      this._value = value.value;
      this._valueOperator = value.valueOperator;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
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

  // value_operator - computed: false, optional: false, required: true
  private _valueOperator?: string; 
  public get valueOperator() {
    return this.getStringAttribute('value_operator');
  }
  public set valueOperator(value: string) {
    this._valueOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueOperatorInput() {
    return this._valueOperator;
  }
}

export class AntiddosCcPrecisionPolicyPolicyListStructList extends cdktf.ComplexList {
  public internalValue? : AntiddosCcPrecisionPolicyPolicyListStruct[] | cdktf.IResolvable

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
  public get(index: number): AntiddosCcPrecisionPolicyPolicyListStructOutputReference {
    return new AntiddosCcPrecisionPolicyPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy tencentcloud_antiddos_cc_precision_policy}
*/
export class AntiddosCcPrecisionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_cc_precision_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosCcPrecisionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosCcPrecisionPolicy to import
  * @param importFromId The id of the existing AntiddosCcPrecisionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosCcPrecisionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_cc_precision_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/antiddos_cc_precision_policy tencentcloud_antiddos_cc_precision_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosCcPrecisionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosCcPrecisionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_cc_precision_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ip = config.ip;
    this._policyAction = config.policyAction;
    this._protocol = config.protocol;
    this._policyList.internalValue = config.policyList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // policy_action - computed: false, optional: false, required: true
  private _policyAction?: string; 
  public get policyAction() {
    return this.getStringAttribute('policy_action');
  }
  public set policyAction(value: string) {
    this._policyAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyActionInput() {
    return this._policyAction;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // policy_list - computed: false, optional: false, required: true
  private _policyList = new AntiddosCcPrecisionPolicyPolicyListStructList(this, "policy_list", false);
  public get policyList() {
    return this._policyList;
  }
  public putPolicyList(value: AntiddosCcPrecisionPolicyPolicyListStruct[] | cdktf.IResolvable) {
    this._policyList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyListInput() {
    return this._policyList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip: cdktf.stringToTerraform(this._ip),
      policy_action: cdktf.stringToTerraform(this._policyAction),
      protocol: cdktf.stringToTerraform(this._protocol),
      policy_list: cdktf.listMapper(antiddosCcPrecisionPolicyPolicyListStructToTerraform, true)(this._policyList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_action: {
        value: cdktf.stringToHclTerraform(this._policyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_list: {
        value: cdktf.listMapperHcl(antiddosCcPrecisionPolicyPolicyListStructToHclTerraform, true)(this._policyList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosCcPrecisionPolicyPolicyListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
