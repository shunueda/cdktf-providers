// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthorizationPolicyAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom-defined attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#a10_ax_auth_uri AamAuthorizationPolicyAttribute#a10_ax_auth_uri}
  */
  readonly a10AxAuthUri?: number;
  /**
  * The value of this attribute will depend on AX configuration instead of user configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#a10_dynamic_defined AamAuthorizationPolicyAttribute#a10_dynamic_defined}
  */
  readonly a10DynamicDefined?: number;
  /**
  * Matched when attribute is present (with any value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#any AamAuthorizationPolicyAttribute#any}
  */
  readonly any?: number;
  /**
  * 'equal': Operation type is equal; 'not-equal': Operation type is not equal; 'less-than': Operation type is less-than; 'more-than': Operation type is more-than; 'less-than-equal-to': Operation type is less-than-equal-to; 'more-than-equal-to': Operation type is more-thatn-equal-to;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_int AamAuthorizationPolicyAttribute#attr_int}
  */
  readonly attrInt?: string;
  /**
  * Set attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_int_val AamAuthorizationPolicyAttribute#attr_int_val}
  */
  readonly attrIntVal?: number;
  /**
  * 'equal': Operation type is equal; 'not-equal': Operation type is not-equal;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_ip AamAuthorizationPolicyAttribute#attr_ip}
  */
  readonly attrIp?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_ipv4 AamAuthorizationPolicyAttribute#attr_ipv4}
  */
  readonly attrIpv4?: string;
  /**
  * Set attribute ID for authorization policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_num AamAuthorizationPolicyAttribute#attr_num}
  */
  readonly attrNum: number;
  /**
  * 'equal': Operation type is equal; 'not-equal': Operation type is not equal; 'less-than': Operation type is less-than; 'more-than': Operation type is more-than; 'less-than-equal-to': Operation type is less-than-equal-to; 'more-than-equal-to': Operation type is more-thatn-equal-to;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_number AamAuthorizationPolicyAttribute#attr_number}
  */
  readonly attrNumber?: string;
  /**
  * Set attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_number_val AamAuthorizationPolicyAttribute#attr_number_val}
  */
  readonly attrNumberVal?: string;
  /**
  * 'match': Operation type is match; 'sub-string': Operation type is sub-string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_str AamAuthorizationPolicyAttribute#attr_str}
  */
  readonly attrStr?: string;
  /**
  * Set attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_str_val AamAuthorizationPolicyAttribute#attr_str_val}
  */
  readonly attrStrVal?: string;
  /**
  * Specify attribute type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attr_type AamAuthorizationPolicyAttribute#attr_type}
  */
  readonly attrType?: number;
  /**
  * Specify attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#attribute_name AamAuthorizationPolicyAttribute#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * 'match': Operation type is match; 'sub-string': Operation type is sub-string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#custom_attr_str AamAuthorizationPolicyAttribute#custom_attr_str}
  */
  readonly customAttrStr?: string;
  /**
  * Specify attribute type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#custom_attr_type AamAuthorizationPolicyAttribute#custom_attr_type}
  */
  readonly customAttrType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#id AamAuthorizationPolicyAttribute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Attribute type is integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#integer_type AamAuthorizationPolicyAttribute#integer_type}
  */
  readonly integerType?: number;
  /**
  * IP address is transformed into network byte order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#ip_type AamAuthorizationPolicyAttribute#ip_type}
  */
  readonly ipType?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#name AamAuthorizationPolicyAttribute#name}
  */
  readonly name: string;
  /**
  * Attribute type is decimal number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#number_type AamAuthorizationPolicyAttribute#number_type}
  */
  readonly numberType?: number;
  /**
  * Attribute type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#string_type AamAuthorizationPolicyAttribute#string_type}
  */
  readonly stringType?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#uuid AamAuthorizationPolicyAttribute#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute thunder_aam_authorization_policy_attribute}
*/
export class AamAuthorizationPolicyAttribute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authorization_policy_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthorizationPolicyAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthorizationPolicyAttribute to import
  * @param importFromId The id of the existing AamAuthorizationPolicyAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthorizationPolicyAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authorization_policy_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_attribute thunder_aam_authorization_policy_attribute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthorizationPolicyAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthorizationPolicyAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authorization_policy_attribute',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._a10AxAuthUri = config.a10AxAuthUri;
    this._a10DynamicDefined = config.a10DynamicDefined;
    this._any = config.any;
    this._attrInt = config.attrInt;
    this._attrIntVal = config.attrIntVal;
    this._attrIp = config.attrIp;
    this._attrIpv4 = config.attrIpv4;
    this._attrNum = config.attrNum;
    this._attrNumber = config.attrNumber;
    this._attrNumberVal = config.attrNumberVal;
    this._attrStr = config.attrStr;
    this._attrStrVal = config.attrStrVal;
    this._attrType = config.attrType;
    this._attributeName = config.attributeName;
    this._customAttrStr = config.customAttrStr;
    this._customAttrType = config.customAttrType;
    this._id = config.id;
    this._integerType = config.integerType;
    this._ipType = config.ipType;
    this._name = config.name;
    this._numberType = config.numberType;
    this._stringType = config.stringType;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // a10_ax_auth_uri - computed: false, optional: true, required: false
  private _a10AxAuthUri?: number; 
  public get a10AxAuthUri() {
    return this.getNumberAttribute('a10_ax_auth_uri');
  }
  public set a10AxAuthUri(value: number) {
    this._a10AxAuthUri = value;
  }
  public resetA10AxAuthUri() {
    this._a10AxAuthUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10AxAuthUriInput() {
    return this._a10AxAuthUri;
  }

  // a10_dynamic_defined - computed: false, optional: true, required: false
  private _a10DynamicDefined?: number; 
  public get a10DynamicDefined() {
    return this.getNumberAttribute('a10_dynamic_defined');
  }
  public set a10DynamicDefined(value: number) {
    this._a10DynamicDefined = value;
  }
  public resetA10DynamicDefined() {
    this._a10DynamicDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get a10DynamicDefinedInput() {
    return this._a10DynamicDefined;
  }

  // any - computed: false, optional: true, required: false
  private _any?: number; 
  public get any() {
    return this.getNumberAttribute('any');
  }
  public set any(value: number) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // attr_int - computed: false, optional: true, required: false
  private _attrInt?: string; 
  public get attrInt() {
    return this.getStringAttribute('attr_int');
  }
  public set attrInt(value: string) {
    this._attrInt = value;
  }
  public resetAttrInt() {
    this._attrInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrIntInput() {
    return this._attrInt;
  }

  // attr_int_val - computed: false, optional: true, required: false
  private _attrIntVal?: number; 
  public get attrIntVal() {
    return this.getNumberAttribute('attr_int_val');
  }
  public set attrIntVal(value: number) {
    this._attrIntVal = value;
  }
  public resetAttrIntVal() {
    this._attrIntVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrIntValInput() {
    return this._attrIntVal;
  }

  // attr_ip - computed: false, optional: true, required: false
  private _attrIp?: string; 
  public get attrIp() {
    return this.getStringAttribute('attr_ip');
  }
  public set attrIp(value: string) {
    this._attrIp = value;
  }
  public resetAttrIp() {
    this._attrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrIpInput() {
    return this._attrIp;
  }

  // attr_ipv4 - computed: false, optional: true, required: false
  private _attrIpv4?: string; 
  public get attrIpv4() {
    return this.getStringAttribute('attr_ipv4');
  }
  public set attrIpv4(value: string) {
    this._attrIpv4 = value;
  }
  public resetAttrIpv4() {
    this._attrIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrIpv4Input() {
    return this._attrIpv4;
  }

  // attr_num - computed: false, optional: false, required: true
  private _attrNum?: number; 
  public get attrNum() {
    return this.getNumberAttribute('attr_num');
  }
  public set attrNum(value: number) {
    this._attrNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attrNumInput() {
    return this._attrNum;
  }

  // attr_number - computed: false, optional: true, required: false
  private _attrNumber?: string; 
  public get attrNumber() {
    return this.getStringAttribute('attr_number');
  }
  public set attrNumber(value: string) {
    this._attrNumber = value;
  }
  public resetAttrNumber() {
    this._attrNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrNumberInput() {
    return this._attrNumber;
  }

  // attr_number_val - computed: false, optional: true, required: false
  private _attrNumberVal?: string; 
  public get attrNumberVal() {
    return this.getStringAttribute('attr_number_val');
  }
  public set attrNumberVal(value: string) {
    this._attrNumberVal = value;
  }
  public resetAttrNumberVal() {
    this._attrNumberVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrNumberValInput() {
    return this._attrNumberVal;
  }

  // attr_str - computed: false, optional: true, required: false
  private _attrStr?: string; 
  public get attrStr() {
    return this.getStringAttribute('attr_str');
  }
  public set attrStr(value: string) {
    this._attrStr = value;
  }
  public resetAttrStr() {
    this._attrStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrStrInput() {
    return this._attrStr;
  }

  // attr_str_val - computed: false, optional: true, required: false
  private _attrStrVal?: string; 
  public get attrStrVal() {
    return this.getStringAttribute('attr_str_val');
  }
  public set attrStrVal(value: string) {
    this._attrStrVal = value;
  }
  public resetAttrStrVal() {
    this._attrStrVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrStrValInput() {
    return this._attrStrVal;
  }

  // attr_type - computed: false, optional: true, required: false
  private _attrType?: number; 
  public get attrType() {
    return this.getNumberAttribute('attr_type');
  }
  public set attrType(value: number) {
    this._attrType = value;
  }
  public resetAttrType() {
    this._attrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrTypeInput() {
    return this._attrType;
  }

  // attribute_name - computed: false, optional: true, required: false
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  public resetAttributeName() {
    this._attributeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // custom_attr_str - computed: false, optional: true, required: false
  private _customAttrStr?: string; 
  public get customAttrStr() {
    return this.getStringAttribute('custom_attr_str');
  }
  public set customAttrStr(value: string) {
    this._customAttrStr = value;
  }
  public resetCustomAttrStr() {
    this._customAttrStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttrStrInput() {
    return this._customAttrStr;
  }

  // custom_attr_type - computed: false, optional: true, required: false
  private _customAttrType?: number; 
  public get customAttrType() {
    return this.getNumberAttribute('custom_attr_type');
  }
  public set customAttrType(value: number) {
    this._customAttrType = value;
  }
  public resetCustomAttrType() {
    this._customAttrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttrTypeInput() {
    return this._customAttrType;
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

  // integer_type - computed: false, optional: true, required: false
  private _integerType?: number; 
  public get integerType() {
    return this.getNumberAttribute('integer_type');
  }
  public set integerType(value: number) {
    this._integerType = value;
  }
  public resetIntegerType() {
    this._integerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerTypeInput() {
    return this._integerType;
  }

  // ip_type - computed: false, optional: true, required: false
  private _ipType?: number; 
  public get ipType() {
    return this.getNumberAttribute('ip_type');
  }
  public set ipType(value: number) {
    this._ipType = value;
  }
  public resetIpType() {
    this._ipType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTypeInput() {
    return this._ipType;
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

  // number_type - computed: false, optional: true, required: false
  private _numberType?: number; 
  public get numberType() {
    return this.getNumberAttribute('number_type');
  }
  public set numberType(value: number) {
    this._numberType = value;
  }
  public resetNumberType() {
    this._numberType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberTypeInput() {
    return this._numberType;
  }

  // string_type - computed: false, optional: true, required: false
  private _stringType?: number; 
  public get stringType() {
    return this.getNumberAttribute('string_type');
  }
  public set stringType(value: number) {
    this._stringType = value;
  }
  public resetStringType() {
    this._stringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTypeInput() {
    return this._stringType;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      a10_ax_auth_uri: cdktf.numberToTerraform(this._a10AxAuthUri),
      a10_dynamic_defined: cdktf.numberToTerraform(this._a10DynamicDefined),
      any: cdktf.numberToTerraform(this._any),
      attr_int: cdktf.stringToTerraform(this._attrInt),
      attr_int_val: cdktf.numberToTerraform(this._attrIntVal),
      attr_ip: cdktf.stringToTerraform(this._attrIp),
      attr_ipv4: cdktf.stringToTerraform(this._attrIpv4),
      attr_num: cdktf.numberToTerraform(this._attrNum),
      attr_number: cdktf.stringToTerraform(this._attrNumber),
      attr_number_val: cdktf.stringToTerraform(this._attrNumberVal),
      attr_str: cdktf.stringToTerraform(this._attrStr),
      attr_str_val: cdktf.stringToTerraform(this._attrStrVal),
      attr_type: cdktf.numberToTerraform(this._attrType),
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      custom_attr_str: cdktf.stringToTerraform(this._customAttrStr),
      custom_attr_type: cdktf.numberToTerraform(this._customAttrType),
      id: cdktf.stringToTerraform(this._id),
      integer_type: cdktf.numberToTerraform(this._integerType),
      ip_type: cdktf.numberToTerraform(this._ipType),
      name: cdktf.stringToTerraform(this._name),
      number_type: cdktf.numberToTerraform(this._numberType),
      string_type: cdktf.numberToTerraform(this._stringType),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      a10_ax_auth_uri: {
        value: cdktf.numberToHclTerraform(this._a10AxAuthUri),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      a10_dynamic_defined: {
        value: cdktf.numberToHclTerraform(this._a10DynamicDefined),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      any: {
        value: cdktf.numberToHclTerraform(this._any),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attr_int: {
        value: cdktf.stringToHclTerraform(this._attrInt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_int_val: {
        value: cdktf.numberToHclTerraform(this._attrIntVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attr_ip: {
        value: cdktf.stringToHclTerraform(this._attrIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_ipv4: {
        value: cdktf.stringToHclTerraform(this._attrIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_num: {
        value: cdktf.numberToHclTerraform(this._attrNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attr_number: {
        value: cdktf.stringToHclTerraform(this._attrNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_number_val: {
        value: cdktf.stringToHclTerraform(this._attrNumberVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_str: {
        value: cdktf.stringToHclTerraform(this._attrStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_str_val: {
        value: cdktf.stringToHclTerraform(this._attrStrVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attr_type: {
        value: cdktf.numberToHclTerraform(this._attrType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_attr_str: {
        value: cdktf.stringToHclTerraform(this._customAttrStr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_attr_type: {
        value: cdktf.numberToHclTerraform(this._customAttrType),
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
      integer_type: {
        value: cdktf.numberToHclTerraform(this._integerType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_type: {
        value: cdktf.numberToHclTerraform(this._ipType),
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
      number_type: {
        value: cdktf.numberToHclTerraform(this._numberType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      string_type: {
        value: cdktf.numberToHclTerraform(this._stringType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
