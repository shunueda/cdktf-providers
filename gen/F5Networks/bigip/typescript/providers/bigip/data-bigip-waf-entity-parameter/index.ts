// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipWafEntityParameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether an empty value is allowed for a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#allow_empty_type DataBigipWafEntityParameter#allow_empty_type}
  */
  readonly allowEmptyType?: boolean | cdktf.IResolvable;
  /**
  * Determines whether multiple parameter instances with the same name are allowed in one request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#allow_repeated_parameter_name DataBigipWafEntityParameter#allow_repeated_parameter_name}
  */
  readonly allowRepeatedParameterName?: boolean | cdktf.IResolvable;
  /**
  * Determines whether attack signatures and threat campaigns must be detected in a parameter's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#attack_signatures_check DataBigipWafEntityParameter#attack_signatures_check}
  */
  readonly attackSignaturesCheck?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a parameter has a restricted maximum length for value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#check_max_value_length DataBigipWafEntityParameter#check_max_value_length}
  */
  readonly checkMaxValueLength?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a parameter has a restricted minimum length for value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#check_min_value_length DataBigipWafEntityParameter#check_min_value_length}
  */
  readonly checkMinValueLength?: boolean | cdktf.IResolvable;
  /**
  * Specifies data type of parameter's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#data_type DataBigipWafEntityParameter#data_type}
  */
  readonly dataType?: string;
  /**
  * Description of the entity parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#description DataBigipWafEntityParameter#description}
  */
  readonly description?: string;
  /**
  * Determines whether the parameter value includes the pattern defined in regularExpression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#enable_regular_expression DataBigipWafEntityParameter#enable_regular_expression}
  */
  readonly enableRegularExpression?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#id DataBigipWafEntityParameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines whether a parameter’s value contains a Base64 encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#is_base64 DataBigipWafEntityParameter#is_base64}
  */
  readonly isBase64?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a parameter is located in the value of Cookie header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#is_cookie DataBigipWafEntityParameter#is_cookie}
  */
  readonly isCookie?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a parameter is located in headers as one of the headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#is_header DataBigipWafEntityParameter#is_header}
  */
  readonly isHeader?: boolean | cdktf.IResolvable;
  /**
  * The JSON for WAF Entity Parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#json DataBigipWafEntityParameter#json}
  */
  readonly json?: string;
  /**
  * Specifies whether the parameter is associated with a URL, a flow, or neither.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#level DataBigipWafEntityParameter#level}
  */
  readonly level?: string;
  /**
  * Determines whether a parameter must exist in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#mandatory DataBigipWafEntityParameter#mandatory}
  */
  readonly mandatory?: boolean | cdktf.IResolvable;
  /**
  * Maximum length for value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#max_value_length DataBigipWafEntityParameter#max_value_length}
  */
  readonly maxValueLength?: number;
  /**
  * Determines whether disallowed metacharacters must be detected in a parameter’s value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#metachars_on_parameter_value_check DataBigipWafEntityParameter#metachars_on_parameter_value_check}
  */
  readonly metacharsOnParameterValueCheck?: boolean | cdktf.IResolvable;
  /**
  * Minimum length for value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#min_value_length DataBigipWafEntityParameter#min_value_length}
  */
  readonly minValueLength?: number;
  /**
  * Name of the Entity Parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#name DataBigipWafEntityParameter#name}
  */
  readonly name: string;
  /**
  * Specifies location of parameter in request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#parameter_location DataBigipWafEntityParameter#parameter_location}
  */
  readonly parameterLocation?: string;
  /**
  * Determines the staging state of a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#perform_staging DataBigipWafEntityParameter#perform_staging}
  */
  readonly performStaging?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a parameter is sensitive and must be not visible in logs nor in the user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#sensitive_parameter DataBigipWafEntityParameter#sensitive_parameter}
  */
  readonly sensitiveParameter?: boolean | cdktf.IResolvable;
  /**
  * List of Attack Signature Ids which are disabled for this particular parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#signature_overrides_disable DataBigipWafEntityParameter#signature_overrides_disable}
  */
  readonly signatureOverridesDisable?: number[];
  /**
  * Specifies whether the parameter is an explicit or a wildcard attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#type DataBigipWafEntityParameter#type}
  */
  readonly type?: string;
  /**
  * Specify the valid type for the value of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#value_type DataBigipWafEntityParameter#value_type}
  */
  readonly valueType?: string;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#url DataBigipWafEntityParameter#url}
  */
  readonly url?: DataBigipWafEntityParameterUrl;
}
export interface DataBigipWafEntityParameterUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#method DataBigipWafEntityParameter#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#name DataBigipWafEntityParameter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#protocol DataBigipWafEntityParameter#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#type DataBigipWafEntityParameter#type}
  */
  readonly type: string;
}

export function dataBigipWafEntityParameterUrlToTerraform(struct?: DataBigipWafEntityParameterUrlOutputReference | DataBigipWafEntityParameterUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataBigipWafEntityParameterUrlToHclTerraform(struct?: DataBigipWafEntityParameterUrlOutputReference | DataBigipWafEntityParameterUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataBigipWafEntityParameterUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataBigipWafEntityParameterUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBigipWafEntityParameterUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._name = value.name;
      this._protocol = value.protocol;
      this._type = value.type;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter bigip_waf_entity_parameter}
*/
export class DataBigipWafEntityParameter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_waf_entity_parameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipWafEntityParameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipWafEntityParameter to import
  * @param importFromId The id of the existing DataBigipWafEntityParameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipWafEntityParameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_waf_entity_parameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/waf_entity_parameter bigip_waf_entity_parameter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipWafEntityParameterConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipWafEntityParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_waf_entity_parameter',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowEmptyType = config.allowEmptyType;
    this._allowRepeatedParameterName = config.allowRepeatedParameterName;
    this._attackSignaturesCheck = config.attackSignaturesCheck;
    this._checkMaxValueLength = config.checkMaxValueLength;
    this._checkMinValueLength = config.checkMinValueLength;
    this._dataType = config.dataType;
    this._description = config.description;
    this._enableRegularExpression = config.enableRegularExpression;
    this._id = config.id;
    this._isBase64 = config.isBase64;
    this._isCookie = config.isCookie;
    this._isHeader = config.isHeader;
    this._json = config.json;
    this._level = config.level;
    this._mandatory = config.mandatory;
    this._maxValueLength = config.maxValueLength;
    this._metacharsOnParameterValueCheck = config.metacharsOnParameterValueCheck;
    this._minValueLength = config.minValueLength;
    this._name = config.name;
    this._parameterLocation = config.parameterLocation;
    this._performStaging = config.performStaging;
    this._sensitiveParameter = config.sensitiveParameter;
    this._signatureOverridesDisable = config.signatureOverridesDisable;
    this._type = config.type;
    this._valueType = config.valueType;
    this._url.internalValue = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_empty_type - computed: false, optional: true, required: false
  private _allowEmptyType?: boolean | cdktf.IResolvable; 
  public get allowEmptyType() {
    return this.getBooleanAttribute('allow_empty_type');
  }
  public set allowEmptyType(value: boolean | cdktf.IResolvable) {
    this._allowEmptyType = value;
  }
  public resetAllowEmptyType() {
    this._allowEmptyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyTypeInput() {
    return this._allowEmptyType;
  }

  // allow_repeated_parameter_name - computed: false, optional: true, required: false
  private _allowRepeatedParameterName?: boolean | cdktf.IResolvable; 
  public get allowRepeatedParameterName() {
    return this.getBooleanAttribute('allow_repeated_parameter_name');
  }
  public set allowRepeatedParameterName(value: boolean | cdktf.IResolvable) {
    this._allowRepeatedParameterName = value;
  }
  public resetAllowRepeatedParameterName() {
    this._allowRepeatedParameterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRepeatedParameterNameInput() {
    return this._allowRepeatedParameterName;
  }

  // attack_signatures_check - computed: false, optional: true, required: false
  private _attackSignaturesCheck?: boolean | cdktf.IResolvable; 
  public get attackSignaturesCheck() {
    return this.getBooleanAttribute('attack_signatures_check');
  }
  public set attackSignaturesCheck(value: boolean | cdktf.IResolvable) {
    this._attackSignaturesCheck = value;
  }
  public resetAttackSignaturesCheck() {
    this._attackSignaturesCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackSignaturesCheckInput() {
    return this._attackSignaturesCheck;
  }

  // check_max_value_length - computed: false, optional: true, required: false
  private _checkMaxValueLength?: boolean | cdktf.IResolvable; 
  public get checkMaxValueLength() {
    return this.getBooleanAttribute('check_max_value_length');
  }
  public set checkMaxValueLength(value: boolean | cdktf.IResolvable) {
    this._checkMaxValueLength = value;
  }
  public resetCheckMaxValueLength() {
    this._checkMaxValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkMaxValueLengthInput() {
    return this._checkMaxValueLength;
  }

  // check_min_value_length - computed: false, optional: true, required: false
  private _checkMinValueLength?: boolean | cdktf.IResolvable; 
  public get checkMinValueLength() {
    return this.getBooleanAttribute('check_min_value_length');
  }
  public set checkMinValueLength(value: boolean | cdktf.IResolvable) {
    this._checkMinValueLength = value;
  }
  public resetCheckMinValueLength() {
    this._checkMinValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkMinValueLengthInput() {
    return this._checkMinValueLength;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // enable_regular_expression - computed: false, optional: true, required: false
  private _enableRegularExpression?: boolean | cdktf.IResolvable; 
  public get enableRegularExpression() {
    return this.getBooleanAttribute('enable_regular_expression');
  }
  public set enableRegularExpression(value: boolean | cdktf.IResolvable) {
    this._enableRegularExpression = value;
  }
  public resetEnableRegularExpression() {
    this._enableRegularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRegularExpressionInput() {
    return this._enableRegularExpression;
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

  // is_base64 - computed: false, optional: true, required: false
  private _isBase64?: boolean | cdktf.IResolvable; 
  public get isBase64() {
    return this.getBooleanAttribute('is_base64');
  }
  public set isBase64(value: boolean | cdktf.IResolvable) {
    this._isBase64 = value;
  }
  public resetIsBase64() {
    this._isBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isBase64Input() {
    return this._isBase64;
  }

  // is_cookie - computed: false, optional: true, required: false
  private _isCookie?: boolean | cdktf.IResolvable; 
  public get isCookie() {
    return this.getBooleanAttribute('is_cookie');
  }
  public set isCookie(value: boolean | cdktf.IResolvable) {
    this._isCookie = value;
  }
  public resetIsCookie() {
    this._isCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCookieInput() {
    return this._isCookie;
  }

  // is_header - computed: false, optional: true, required: false
  private _isHeader?: boolean | cdktf.IResolvable; 
  public get isHeader() {
    return this.getBooleanAttribute('is_header');
  }
  public set isHeader(value: boolean | cdktf.IResolvable) {
    this._isHeader = value;
  }
  public resetIsHeader() {
    this._isHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isHeaderInput() {
    return this._isHeader;
  }

  // json - computed: true, optional: true, required: false
  private _json?: string; 
  public get json() {
    return this.getStringAttribute('json');
  }
  public set json(value: string) {
    this._json = value;
  }
  public resetJson() {
    this._json = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json;
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // mandatory - computed: false, optional: true, required: false
  private _mandatory?: boolean | cdktf.IResolvable; 
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }
  public set mandatory(value: boolean | cdktf.IResolvable) {
    this._mandatory = value;
  }
  public resetMandatory() {
    this._mandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryInput() {
    return this._mandatory;
  }

  // max_value_length - computed: false, optional: true, required: false
  private _maxValueLength?: number; 
  public get maxValueLength() {
    return this.getNumberAttribute('max_value_length');
  }
  public set maxValueLength(value: number) {
    this._maxValueLength = value;
  }
  public resetMaxValueLength() {
    this._maxValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueLengthInput() {
    return this._maxValueLength;
  }

  // metachars_on_parameter_value_check - computed: false, optional: true, required: false
  private _metacharsOnParameterValueCheck?: boolean | cdktf.IResolvable; 
  public get metacharsOnParameterValueCheck() {
    return this.getBooleanAttribute('metachars_on_parameter_value_check');
  }
  public set metacharsOnParameterValueCheck(value: boolean | cdktf.IResolvable) {
    this._metacharsOnParameterValueCheck = value;
  }
  public resetMetacharsOnParameterValueCheck() {
    this._metacharsOnParameterValueCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metacharsOnParameterValueCheckInput() {
    return this._metacharsOnParameterValueCheck;
  }

  // min_value_length - computed: false, optional: true, required: false
  private _minValueLength?: number; 
  public get minValueLength() {
    return this.getNumberAttribute('min_value_length');
  }
  public set minValueLength(value: number) {
    this._minValueLength = value;
  }
  public resetMinValueLength() {
    this._minValueLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueLengthInput() {
    return this._minValueLength;
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

  // parameter_location - computed: false, optional: true, required: false
  private _parameterLocation?: string; 
  public get parameterLocation() {
    return this.getStringAttribute('parameter_location');
  }
  public set parameterLocation(value: string) {
    this._parameterLocation = value;
  }
  public resetParameterLocation() {
    this._parameterLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterLocationInput() {
    return this._parameterLocation;
  }

  // perform_staging - computed: false, optional: true, required: false
  private _performStaging?: boolean | cdktf.IResolvable; 
  public get performStaging() {
    return this.getBooleanAttribute('perform_staging');
  }
  public set performStaging(value: boolean | cdktf.IResolvable) {
    this._performStaging = value;
  }
  public resetPerformStaging() {
    this._performStaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performStagingInput() {
    return this._performStaging;
  }

  // sensitive_parameter - computed: false, optional: true, required: false
  private _sensitiveParameter?: boolean | cdktf.IResolvable; 
  public get sensitiveParameter() {
    return this.getBooleanAttribute('sensitive_parameter');
  }
  public set sensitiveParameter(value: boolean | cdktf.IResolvable) {
    this._sensitiveParameter = value;
  }
  public resetSensitiveParameter() {
    this._sensitiveParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveParameterInput() {
    return this._sensitiveParameter;
  }

  // signature_overrides_disable - computed: false, optional: true, required: false
  private _signatureOverridesDisable?: number[]; 
  public get signatureOverridesDisable() {
    return this.getNumberListAttribute('signature_overrides_disable');
  }
  public set signatureOverridesDisable(value: number[]) {
    this._signatureOverridesDisable = value;
  }
  public resetSignatureOverridesDisable() {
    this._signatureOverridesDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureOverridesDisableInput() {
    return this._signatureOverridesDisable;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // url - computed: false, optional: true, required: false
  private _url = new DataBigipWafEntityParameterUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: DataBigipWafEntityParameterUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_empty_type: cdktf.booleanToTerraform(this._allowEmptyType),
      allow_repeated_parameter_name: cdktf.booleanToTerraform(this._allowRepeatedParameterName),
      attack_signatures_check: cdktf.booleanToTerraform(this._attackSignaturesCheck),
      check_max_value_length: cdktf.booleanToTerraform(this._checkMaxValueLength),
      check_min_value_length: cdktf.booleanToTerraform(this._checkMinValueLength),
      data_type: cdktf.stringToTerraform(this._dataType),
      description: cdktf.stringToTerraform(this._description),
      enable_regular_expression: cdktf.booleanToTerraform(this._enableRegularExpression),
      id: cdktf.stringToTerraform(this._id),
      is_base64: cdktf.booleanToTerraform(this._isBase64),
      is_cookie: cdktf.booleanToTerraform(this._isCookie),
      is_header: cdktf.booleanToTerraform(this._isHeader),
      json: cdktf.stringToTerraform(this._json),
      level: cdktf.stringToTerraform(this._level),
      mandatory: cdktf.booleanToTerraform(this._mandatory),
      max_value_length: cdktf.numberToTerraform(this._maxValueLength),
      metachars_on_parameter_value_check: cdktf.booleanToTerraform(this._metacharsOnParameterValueCheck),
      min_value_length: cdktf.numberToTerraform(this._minValueLength),
      name: cdktf.stringToTerraform(this._name),
      parameter_location: cdktf.stringToTerraform(this._parameterLocation),
      perform_staging: cdktf.booleanToTerraform(this._performStaging),
      sensitive_parameter: cdktf.booleanToTerraform(this._sensitiveParameter),
      signature_overrides_disable: cdktf.listMapper(cdktf.numberToTerraform, false)(this._signatureOverridesDisable),
      type: cdktf.stringToTerraform(this._type),
      value_type: cdktf.stringToTerraform(this._valueType),
      url: dataBigipWafEntityParameterUrlToTerraform(this._url.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_empty_type: {
        value: cdktf.booleanToHclTerraform(this._allowEmptyType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_repeated_parameter_name: {
        value: cdktf.booleanToHclTerraform(this._allowRepeatedParameterName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      attack_signatures_check: {
        value: cdktf.booleanToHclTerraform(this._attackSignaturesCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_max_value_length: {
        value: cdktf.booleanToHclTerraform(this._checkMaxValueLength),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      check_min_value_length: {
        value: cdktf.booleanToHclTerraform(this._checkMinValueLength),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
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
      enable_regular_expression: {
        value: cdktf.booleanToHclTerraform(this._enableRegularExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_base64: {
        value: cdktf.booleanToHclTerraform(this._isBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_cookie: {
        value: cdktf.booleanToHclTerraform(this._isCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_header: {
        value: cdktf.booleanToHclTerraform(this._isHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      json: {
        value: cdktf.stringToHclTerraform(this._json),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mandatory: {
        value: cdktf.booleanToHclTerraform(this._mandatory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_value_length: {
        value: cdktf.numberToHclTerraform(this._maxValueLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metachars_on_parameter_value_check: {
        value: cdktf.booleanToHclTerraform(this._metacharsOnParameterValueCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      min_value_length: {
        value: cdktf.numberToHclTerraform(this._minValueLength),
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
      parameter_location: {
        value: cdktf.stringToHclTerraform(this._parameterLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perform_staging: {
        value: cdktf.booleanToHclTerraform(this._performStaging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sensitive_parameter: {
        value: cdktf.booleanToHclTerraform(this._sensitiveParameter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      signature_overrides_disable: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._signatureOverridesDisable),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_type: {
        value: cdktf.stringToHclTerraform(this._valueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: dataBigipWafEntityParameterUrlToHclTerraform(this._url.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBigipWafEntityParameterUrlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
