// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthorizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Define attribute rule for authorization policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attribute_rule AamAuthorizationPolicy#attribute_rule}
  */
  readonly attributeRule?: string;
  /**
  * Extended search filter. EX: Check whether user belongs to a nested group. (memberOf:1.2.840.113556.1.4.1941:=$GROUP-DN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#extended_filter AamAuthorizationPolicy#extended_filter}
  */
  readonly extendedFilter?: string;
  /**
  * This policy only provides server info for forward policy feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#forward_policy_authorize_only AamAuthorizationPolicy#forward_policy_authorize_only}
  */
  readonly forwardPolicyAuthorizeOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#id AamAuthorizationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify JWT authorization template (Specify JWT authorization template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#jwt_authorization AamAuthorizationPolicy#jwt_authorization}
  */
  readonly jwtAuthorization?: string;
  /**
  * Specify authorization policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#name AamAuthorizationPolicy#name}
  */
  readonly name: string;
  /**
  * Specify a LDAP or RADIUS server for authorization (Specify a LDAP or RADIUS server name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#server AamAuthorizationPolicy#server}
  */
  readonly server?: string;
  /**
  * Specify an authentication service group for authorization (Specify authentication service group name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#service_group AamAuthorizationPolicy#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#user_tag AamAuthorizationPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#uuid AamAuthorizationPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * attribute_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attribute_list AamAuthorizationPolicy#attribute_list}
  */
  readonly attributeList?: AamAuthorizationPolicyAttributeListStruct[] | cdktf.IResolvable;
  /**
  * jwt_claim_map_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#jwt_claim_map_list AamAuthorizationPolicy#jwt_claim_map_list}
  */
  readonly jwtClaimMapList?: AamAuthorizationPolicyJwtClaimMapListStruct[] | cdktf.IResolvable;
}
export interface AamAuthorizationPolicyAttributeListStruct {
  /**
  * Custom-defined attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#a10_ax_auth_uri AamAuthorizationPolicy#a10_ax_auth_uri}
  */
  readonly a10AxAuthUri?: number;
  /**
  * The value of this attribute will depend on AX configuration instead of user configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#a10_dynamic_defined AamAuthorizationPolicy#a10_dynamic_defined}
  */
  readonly a10DynamicDefined?: number;
  /**
  * Matched when attribute is present (with any value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#any AamAuthorizationPolicy#any}
  */
  readonly any?: number;
  /**
  * 'equal': Operation type is equal; 'not-equal': Operation type is not equal; 'less-than': Operation type is less-than; 'more-than': Operation type is more-than; 'less-than-equal-to': Operation type is less-than-equal-to; 'more-than-equal-to': Operation type is more-thatn-equal-to;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_int AamAuthorizationPolicy#attr_int}
  */
  readonly attrInt?: string;
  /**
  * Set attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_int_val AamAuthorizationPolicy#attr_int_val}
  */
  readonly attrIntVal?: number;
  /**
  * 'equal': Operation type is equal; 'not-equal': Operation type is not-equal;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_ip AamAuthorizationPolicy#attr_ip}
  */
  readonly attrIp?: string;
  /**
  * IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_ipv4 AamAuthorizationPolicy#attr_ipv4}
  */
  readonly attrIpv4?: string;
  /**
  * Set attribute ID for authorization policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_num AamAuthorizationPolicy#attr_num}
  */
  readonly attrNum: number;
  /**
  * 'equal': Operation type is equal; 'not-equal': Operation type is not equal; 'less-than': Operation type is less-than; 'more-than': Operation type is more-than; 'less-than-equal-to': Operation type is less-than-equal-to; 'more-than-equal-to': Operation type is more-thatn-equal-to;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_number AamAuthorizationPolicy#attr_number}
  */
  readonly attrNumber?: string;
  /**
  * Set attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_number_val AamAuthorizationPolicy#attr_number_val}
  */
  readonly attrNumberVal?: string;
  /**
  * 'match': Operation type is match; 'sub-string': Operation type is sub-string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_str AamAuthorizationPolicy#attr_str}
  */
  readonly attrStr?: string;
  /**
  * Set attribute value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_str_val AamAuthorizationPolicy#attr_str_val}
  */
  readonly attrStrVal?: string;
  /**
  * Specify attribute type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_type AamAuthorizationPolicy#attr_type}
  */
  readonly attrType?: number;
  /**
  * Specify attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attribute_name AamAuthorizationPolicy#attribute_name}
  */
  readonly attributeName?: string;
  /**
  * 'match': Operation type is match; 'sub-string': Operation type is sub-string;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#custom_attr_str AamAuthorizationPolicy#custom_attr_str}
  */
  readonly customAttrStr?: string;
  /**
  * Specify attribute type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#custom_attr_type AamAuthorizationPolicy#custom_attr_type}
  */
  readonly customAttrType?: number;
  /**
  * Attribute type is integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#integer_type AamAuthorizationPolicy#integer_type}
  */
  readonly integerType?: number;
  /**
  * IP address is transformed into network byte order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#ip_type AamAuthorizationPolicy#ip_type}
  */
  readonly ipType?: number;
  /**
  * Attribute type is decimal number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#number_type AamAuthorizationPolicy#number_type}
  */
  readonly numberType?: number;
  /**
  * Attribute type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#string_type AamAuthorizationPolicy#string_type}
  */
  readonly stringType?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#uuid AamAuthorizationPolicy#uuid}
  */
  readonly uuid?: string;
}

export function aamAuthorizationPolicyAttributeListStructToTerraform(struct?: AamAuthorizationPolicyAttributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a10_ax_auth_uri: cdktf.numberToTerraform(struct!.a10AxAuthUri),
    a10_dynamic_defined: cdktf.numberToTerraform(struct!.a10DynamicDefined),
    any: cdktf.numberToTerraform(struct!.any),
    attr_int: cdktf.stringToTerraform(struct!.attrInt),
    attr_int_val: cdktf.numberToTerraform(struct!.attrIntVal),
    attr_ip: cdktf.stringToTerraform(struct!.attrIp),
    attr_ipv4: cdktf.stringToTerraform(struct!.attrIpv4),
    attr_num: cdktf.numberToTerraform(struct!.attrNum),
    attr_number: cdktf.stringToTerraform(struct!.attrNumber),
    attr_number_val: cdktf.stringToTerraform(struct!.attrNumberVal),
    attr_str: cdktf.stringToTerraform(struct!.attrStr),
    attr_str_val: cdktf.stringToTerraform(struct!.attrStrVal),
    attr_type: cdktf.numberToTerraform(struct!.attrType),
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    custom_attr_str: cdktf.stringToTerraform(struct!.customAttrStr),
    custom_attr_type: cdktf.numberToTerraform(struct!.customAttrType),
    integer_type: cdktf.numberToTerraform(struct!.integerType),
    ip_type: cdktf.numberToTerraform(struct!.ipType),
    number_type: cdktf.numberToTerraform(struct!.numberType),
    string_type: cdktf.numberToTerraform(struct!.stringType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function aamAuthorizationPolicyAttributeListStructToHclTerraform(struct?: AamAuthorizationPolicyAttributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a10_ax_auth_uri: {
      value: cdktf.numberToHclTerraform(struct!.a10AxAuthUri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a10_dynamic_defined: {
      value: cdktf.numberToHclTerraform(struct!.a10DynamicDefined),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    any: {
      value: cdktf.numberToHclTerraform(struct!.any),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attr_int: {
      value: cdktf.stringToHclTerraform(struct!.attrInt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_int_val: {
      value: cdktf.numberToHclTerraform(struct!.attrIntVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attr_ip: {
      value: cdktf.stringToHclTerraform(struct!.attrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.attrIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_num: {
      value: cdktf.numberToHclTerraform(struct!.attrNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attr_number: {
      value: cdktf.stringToHclTerraform(struct!.attrNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_number_val: {
      value: cdktf.stringToHclTerraform(struct!.attrNumberVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_str: {
      value: cdktf.stringToHclTerraform(struct!.attrStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_str_val: {
      value: cdktf.stringToHclTerraform(struct!.attrStrVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attr_type: {
      value: cdktf.numberToHclTerraform(struct!.attrType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attr_str: {
      value: cdktf.stringToHclTerraform(struct!.customAttrStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attr_type: {
      value: cdktf.numberToHclTerraform(struct!.customAttrType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    integer_type: {
      value: cdktf.numberToHclTerraform(struct!.integerType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_type: {
      value: cdktf.numberToHclTerraform(struct!.ipType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_type: {
      value: cdktf.numberToHclTerraform(struct!.numberType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    string_type: {
      value: cdktf.numberToHclTerraform(struct!.stringType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthorizationPolicyAttributeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthorizationPolicyAttributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._a10AxAuthUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.a10AxAuthUri = this._a10AxAuthUri;
    }
    if (this._a10DynamicDefined !== undefined) {
      hasAnyValues = true;
      internalValueResult.a10DynamicDefined = this._a10DynamicDefined;
    }
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._attrInt !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrInt = this._attrInt;
    }
    if (this._attrIntVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrIntVal = this._attrIntVal;
    }
    if (this._attrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrIp = this._attrIp;
    }
    if (this._attrIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrIpv4 = this._attrIpv4;
    }
    if (this._attrNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrNum = this._attrNum;
    }
    if (this._attrNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrNumber = this._attrNumber;
    }
    if (this._attrNumberVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrNumberVal = this._attrNumberVal;
    }
    if (this._attrStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrStr = this._attrStr;
    }
    if (this._attrStrVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrStrVal = this._attrStrVal;
    }
    if (this._attrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrType = this._attrType;
    }
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._customAttrStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttrStr = this._customAttrStr;
    }
    if (this._customAttrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttrType = this._customAttrType;
    }
    if (this._integerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerType = this._integerType;
    }
    if (this._ipType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipType = this._ipType;
    }
    if (this._numberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberType = this._numberType;
    }
    if (this._stringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringType = this._stringType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthorizationPolicyAttributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._a10AxAuthUri = undefined;
      this._a10DynamicDefined = undefined;
      this._any = undefined;
      this._attrInt = undefined;
      this._attrIntVal = undefined;
      this._attrIp = undefined;
      this._attrIpv4 = undefined;
      this._attrNum = undefined;
      this._attrNumber = undefined;
      this._attrNumberVal = undefined;
      this._attrStr = undefined;
      this._attrStrVal = undefined;
      this._attrType = undefined;
      this._attributeName = undefined;
      this._customAttrStr = undefined;
      this._customAttrType = undefined;
      this._integerType = undefined;
      this._ipType = undefined;
      this._numberType = undefined;
      this._stringType = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._a10AxAuthUri = value.a10AxAuthUri;
      this._a10DynamicDefined = value.a10DynamicDefined;
      this._any = value.any;
      this._attrInt = value.attrInt;
      this._attrIntVal = value.attrIntVal;
      this._attrIp = value.attrIp;
      this._attrIpv4 = value.attrIpv4;
      this._attrNum = value.attrNum;
      this._attrNumber = value.attrNumber;
      this._attrNumberVal = value.attrNumberVal;
      this._attrStr = value.attrStr;
      this._attrStrVal = value.attrStrVal;
      this._attrType = value.attrType;
      this._attributeName = value.attributeName;
      this._customAttrStr = value.customAttrStr;
      this._customAttrType = value.customAttrType;
      this._integerType = value.integerType;
      this._ipType = value.ipType;
      this._numberType = value.numberType;
      this._stringType = value.stringType;
      this._uuid = value.uuid;
    }
  }

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
}

export class AamAuthorizationPolicyAttributeListStructList extends cdktf.ComplexList {
  public internalValue? : AamAuthorizationPolicyAttributeListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAuthorizationPolicyAttributeListStructOutputReference {
    return new AamAuthorizationPolicyAttributeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AamAuthorizationPolicyJwtClaimMapListStruct {
  /**
  * Spcify attribute ID for claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#attr_num AamAuthorizationPolicy#attr_num}
  */
  readonly attrNum: number;
  /**
  * 'true': True; 'false': False;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#bool_val AamAuthorizationPolicy#bool_val}
  */
  readonly boolVal?: string;
  /**
  * Claim type is boolean
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#boolean_type AamAuthorizationPolicy#boolean_type}
  */
  readonly booleanType?: number;
  /**
  * Specify JWT claim name to map to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#claim AamAuthorizationPolicy#claim}
  */
  readonly claim?: string;
  /**
  * Specify JWT claim value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#num_val AamAuthorizationPolicy#num_val}
  */
  readonly numVal?: number;
  /**
  * Claim type is number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#number_type AamAuthorizationPolicy#number_type}
  */
  readonly numberType?: number;
  /**
  * Specify JWT claim value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#str_val AamAuthorizationPolicy#str_val}
  */
  readonly strVal?: string;
  /**
  * Claim type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#string_type AamAuthorizationPolicy#string_type}
  */
  readonly stringType?: number;
  /**
  * Specify claim type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#type AamAuthorizationPolicy#type}
  */
  readonly type?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#uuid AamAuthorizationPolicy#uuid}
  */
  readonly uuid?: string;
}

export function aamAuthorizationPolicyJwtClaimMapListStructToTerraform(struct?: AamAuthorizationPolicyJwtClaimMapListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attr_num: cdktf.numberToTerraform(struct!.attrNum),
    bool_val: cdktf.stringToTerraform(struct!.boolVal),
    boolean_type: cdktf.numberToTerraform(struct!.booleanType),
    claim: cdktf.stringToTerraform(struct!.claim),
    num_val: cdktf.numberToTerraform(struct!.numVal),
    number_type: cdktf.numberToTerraform(struct!.numberType),
    str_val: cdktf.stringToTerraform(struct!.strVal),
    string_type: cdktf.numberToTerraform(struct!.stringType),
    type: cdktf.numberToTerraform(struct!.type),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function aamAuthorizationPolicyJwtClaimMapListStructToHclTerraform(struct?: AamAuthorizationPolicyJwtClaimMapListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attr_num: {
      value: cdktf.numberToHclTerraform(struct!.attrNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bool_val: {
      value: cdktf.stringToHclTerraform(struct!.boolVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boolean_type: {
      value: cdktf.numberToHclTerraform(struct!.booleanType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    claim: {
      value: cdktf.stringToHclTerraform(struct!.claim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_val: {
      value: cdktf.numberToHclTerraform(struct!.numVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    number_type: {
      value: cdktf.numberToHclTerraform(struct!.numberType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_val: {
      value: cdktf.stringToHclTerraform(struct!.strVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_type: {
      value: cdktf.numberToHclTerraform(struct!.stringType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthorizationPolicyJwtClaimMapListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthorizationPolicyJwtClaimMapListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrNum = this._attrNum;
    }
    if (this._boolVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolVal = this._boolVal;
    }
    if (this._booleanType !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanType = this._booleanType;
    }
    if (this._claim !== undefined) {
      hasAnyValues = true;
      internalValueResult.claim = this._claim;
    }
    if (this._numVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.numVal = this._numVal;
    }
    if (this._numberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberType = this._numberType;
    }
    if (this._strVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.strVal = this._strVal;
    }
    if (this._stringType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringType = this._stringType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthorizationPolicyJwtClaimMapListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrNum = undefined;
      this._boolVal = undefined;
      this._booleanType = undefined;
      this._claim = undefined;
      this._numVal = undefined;
      this._numberType = undefined;
      this._strVal = undefined;
      this._stringType = undefined;
      this._type = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrNum = value.attrNum;
      this._boolVal = value.boolVal;
      this._booleanType = value.booleanType;
      this._claim = value.claim;
      this._numVal = value.numVal;
      this._numberType = value.numberType;
      this._strVal = value.strVal;
      this._stringType = value.stringType;
      this._type = value.type;
      this._uuid = value.uuid;
    }
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

  // bool_val - computed: false, optional: true, required: false
  private _boolVal?: string; 
  public get boolVal() {
    return this.getStringAttribute('bool_val');
  }
  public set boolVal(value: string) {
    this._boolVal = value;
  }
  public resetBoolVal() {
    this._boolVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValInput() {
    return this._boolVal;
  }

  // boolean_type - computed: false, optional: true, required: false
  private _booleanType?: number; 
  public get booleanType() {
    return this.getNumberAttribute('boolean_type');
  }
  public set booleanType(value: number) {
    this._booleanType = value;
  }
  public resetBooleanType() {
    this._booleanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanTypeInput() {
    return this._booleanType;
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
  }

  // num_val - computed: false, optional: true, required: false
  private _numVal?: number; 
  public get numVal() {
    return this.getNumberAttribute('num_val');
  }
  public set numVal(value: number) {
    this._numVal = value;
  }
  public resetNumVal() {
    this._numVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numValInput() {
    return this._numVal;
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

  // str_val - computed: false, optional: true, required: false
  private _strVal?: string; 
  public get strVal() {
    return this.getStringAttribute('str_val');
  }
  public set strVal(value: string) {
    this._strVal = value;
  }
  public resetStrVal() {
    this._strVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValInput() {
    return this._strVal;
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

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
}

export class AamAuthorizationPolicyJwtClaimMapListStructList extends cdktf.ComplexList {
  public internalValue? : AamAuthorizationPolicyJwtClaimMapListStruct[] | cdktf.IResolvable

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
  public get(index: number): AamAuthorizationPolicyJwtClaimMapListStructOutputReference {
    return new AamAuthorizationPolicyJwtClaimMapListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy thunder_aam_authorization_policy}
*/
export class AamAuthorizationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authorization_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthorizationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthorizationPolicy to import
  * @param importFromId The id of the existing AamAuthorizationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthorizationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authorization_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy thunder_aam_authorization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthorizationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthorizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authorization_policy',
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
    this._attributeRule = config.attributeRule;
    this._extendedFilter = config.extendedFilter;
    this._forwardPolicyAuthorizeOnly = config.forwardPolicyAuthorizeOnly;
    this._id = config.id;
    this._jwtAuthorization = config.jwtAuthorization;
    this._name = config.name;
    this._server = config.server;
    this._serviceGroup = config.serviceGroup;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._attributeList.internalValue = config.attributeList;
    this._jwtClaimMapList.internalValue = config.jwtClaimMapList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_rule - computed: false, optional: true, required: false
  private _attributeRule?: string; 
  public get attributeRule() {
    return this.getStringAttribute('attribute_rule');
  }
  public set attributeRule(value: string) {
    this._attributeRule = value;
  }
  public resetAttributeRule() {
    this._attributeRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeRuleInput() {
    return this._attributeRule;
  }

  // extended_filter - computed: false, optional: true, required: false
  private _extendedFilter?: string; 
  public get extendedFilter() {
    return this.getStringAttribute('extended_filter');
  }
  public set extendedFilter(value: string) {
    this._extendedFilter = value;
  }
  public resetExtendedFilter() {
    this._extendedFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedFilterInput() {
    return this._extendedFilter;
  }

  // forward_policy_authorize_only - computed: false, optional: true, required: false
  private _forwardPolicyAuthorizeOnly?: number; 
  public get forwardPolicyAuthorizeOnly() {
    return this.getNumberAttribute('forward_policy_authorize_only');
  }
  public set forwardPolicyAuthorizeOnly(value: number) {
    this._forwardPolicyAuthorizeOnly = value;
  }
  public resetForwardPolicyAuthorizeOnly() {
    this._forwardPolicyAuthorizeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPolicyAuthorizeOnlyInput() {
    return this._forwardPolicyAuthorizeOnly;
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

  // jwt_authorization - computed: false, optional: true, required: false
  private _jwtAuthorization?: string; 
  public get jwtAuthorization() {
    return this.getStringAttribute('jwt_authorization');
  }
  public set jwtAuthorization(value: string) {
    this._jwtAuthorization = value;
  }
  public resetJwtAuthorization() {
    this._jwtAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthorizationInput() {
    return this._jwtAuthorization;
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // attribute_list - computed: false, optional: true, required: false
  private _attributeList = new AamAuthorizationPolicyAttributeListStructList(this, "attribute_list", false);
  public get attributeList() {
    return this._attributeList;
  }
  public putAttributeList(value: AamAuthorizationPolicyAttributeListStruct[] | cdktf.IResolvable) {
    this._attributeList.internalValue = value;
  }
  public resetAttributeList() {
    this._attributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeListInput() {
    return this._attributeList.internalValue;
  }

  // jwt_claim_map_list - computed: false, optional: true, required: false
  private _jwtClaimMapList = new AamAuthorizationPolicyJwtClaimMapListStructList(this, "jwt_claim_map_list", false);
  public get jwtClaimMapList() {
    return this._jwtClaimMapList;
  }
  public putJwtClaimMapList(value: AamAuthorizationPolicyJwtClaimMapListStruct[] | cdktf.IResolvable) {
    this._jwtClaimMapList.internalValue = value;
  }
  public resetJwtClaimMapList() {
    this._jwtClaimMapList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimMapListInput() {
    return this._jwtClaimMapList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_rule: cdktf.stringToTerraform(this._attributeRule),
      extended_filter: cdktf.stringToTerraform(this._extendedFilter),
      forward_policy_authorize_only: cdktf.numberToTerraform(this._forwardPolicyAuthorizeOnly),
      id: cdktf.stringToTerraform(this._id),
      jwt_authorization: cdktf.stringToTerraform(this._jwtAuthorization),
      name: cdktf.stringToTerraform(this._name),
      server: cdktf.stringToTerraform(this._server),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      attribute_list: cdktf.listMapper(aamAuthorizationPolicyAttributeListStructToTerraform, true)(this._attributeList.internalValue),
      jwt_claim_map_list: cdktf.listMapper(aamAuthorizationPolicyJwtClaimMapListStructToTerraform, true)(this._jwtClaimMapList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_rule: {
        value: cdktf.stringToHclTerraform(this._attributeRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_filter: {
        value: cdktf.stringToHclTerraform(this._extendedFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_policy_authorize_only: {
        value: cdktf.numberToHclTerraform(this._forwardPolicyAuthorizeOnly),
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
      jwt_authorization: {
        value: cdktf.stringToHclTerraform(this._jwtAuthorization),
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
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_list: {
        value: cdktf.listMapperHcl(aamAuthorizationPolicyAttributeListStructToHclTerraform, true)(this._attributeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthorizationPolicyAttributeListStructList",
      },
      jwt_claim_map_list: {
        value: cdktf.listMapperHcl(aamAuthorizationPolicyJwtClaimMapListStructToHclTerraform, true)(this._jwtClaimMapList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthorizationPolicyJwtClaimMapListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
