// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmsEventRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#description CmsEventRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#group_id CmsEventRule#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#id CmsEventRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#rule_name CmsEventRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#silence_time CmsEventRule#silence_time}
  */
  readonly silenceTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#status CmsEventRule#status}
  */
  readonly status?: string;
  /**
  * contact_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#contact_parameters CmsEventRule#contact_parameters}
  */
  readonly contactParameters?: CmsEventRuleContactParameters[] | cdktf.IResolvable;
  /**
  * event_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#event_pattern CmsEventRule#event_pattern}
  */
  readonly eventPattern: CmsEventRuleEventPattern;
  /**
  * fc_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#fc_parameters CmsEventRule#fc_parameters}
  */
  readonly fcParameters?: CmsEventRuleFcParameters[] | cdktf.IResolvable;
  /**
  * mns_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#mns_parameters CmsEventRule#mns_parameters}
  */
  readonly mnsParameters?: CmsEventRuleMnsParameters[] | cdktf.IResolvable;
  /**
  * open_api_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#open_api_parameters CmsEventRule#open_api_parameters}
  */
  readonly openApiParameters?: CmsEventRuleOpenApiParameters[] | cdktf.IResolvable;
  /**
  * sls_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#sls_parameters CmsEventRule#sls_parameters}
  */
  readonly slsParameters?: CmsEventRuleSlsParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#timeouts CmsEventRule#timeouts}
  */
  readonly timeouts?: CmsEventRuleTimeouts;
  /**
  * webhook_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#webhook_parameters CmsEventRule#webhook_parameters}
  */
  readonly webhookParameters?: CmsEventRuleWebhookParameters[] | cdktf.IResolvable;
}
export interface CmsEventRuleContactParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#contact_group_name CmsEventRule#contact_group_name}
  */
  readonly contactGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#contact_parameters_id CmsEventRule#contact_parameters_id}
  */
  readonly contactParametersId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#level CmsEventRule#level}
  */
  readonly level?: string;
}

export function cmsEventRuleContactParametersToTerraform(struct?: CmsEventRuleContactParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_group_name: cdktf.stringToTerraform(struct!.contactGroupName),
    contact_parameters_id: cdktf.stringToTerraform(struct!.contactParametersId),
    level: cdktf.stringToTerraform(struct!.level),
  }
}


export function cmsEventRuleContactParametersToHclTerraform(struct?: CmsEventRuleContactParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_group_name: {
      value: cdktf.stringToHclTerraform(struct!.contactGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_parameters_id: {
      value: cdktf.stringToHclTerraform(struct!.contactParametersId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsEventRuleContactParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsEventRuleContactParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroupName = this._contactGroupName;
    }
    if (this._contactParametersId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactParametersId = this._contactParametersId;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsEventRuleContactParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactGroupName = undefined;
      this._contactParametersId = undefined;
      this._level = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactGroupName = value.contactGroupName;
      this._contactParametersId = value.contactParametersId;
      this._level = value.level;
    }
  }

  // contact_group_name - computed: false, optional: true, required: false
  private _contactGroupName?: string; 
  public get contactGroupName() {
    return this.getStringAttribute('contact_group_name');
  }
  public set contactGroupName(value: string) {
    this._contactGroupName = value;
  }
  public resetContactGroupName() {
    this._contactGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupNameInput() {
    return this._contactGroupName;
  }

  // contact_parameters_id - computed: false, optional: true, required: false
  private _contactParametersId?: string; 
  public get contactParametersId() {
    return this.getStringAttribute('contact_parameters_id');
  }
  public set contactParametersId(value: string) {
    this._contactParametersId = value;
  }
  public resetContactParametersId() {
    this._contactParametersId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactParametersIdInput() {
    return this._contactParametersId;
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
}

export class CmsEventRuleContactParametersList extends cdktf.ComplexList {
  public internalValue? : CmsEventRuleContactParameters[] | cdktf.IResolvable

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
  public get(index: number): CmsEventRuleContactParametersOutputReference {
    return new CmsEventRuleContactParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsEventRuleEventPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#event_type_list CmsEventRule#event_type_list}
  */
  readonly eventTypeList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#level_list CmsEventRule#level_list}
  */
  readonly levelList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#name_list CmsEventRule#name_list}
  */
  readonly nameList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#product CmsEventRule#product}
  */
  readonly product: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#sql_filter CmsEventRule#sql_filter}
  */
  readonly sqlFilter?: string;
}

export function cmsEventRuleEventPatternToTerraform(struct?: CmsEventRuleEventPatternOutputReference | CmsEventRuleEventPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventTypeList),
    level_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.levelList),
    name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameList),
    product: cdktf.stringToTerraform(struct!.product),
    sql_filter: cdktf.stringToTerraform(struct!.sqlFilter),
  }
}


export function cmsEventRuleEventPatternToHclTerraform(struct?: CmsEventRuleEventPatternOutputReference | CmsEventRuleEventPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventTypeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    level_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.levelList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_filter: {
      value: cdktf.stringToHclTerraform(struct!.sqlFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsEventRuleEventPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CmsEventRuleEventPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTypeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTypeList = this._eventTypeList;
    }
    if (this._levelList !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelList = this._levelList;
    }
    if (this._nameList !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameList = this._nameList;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._sqlFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlFilter = this._sqlFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsEventRuleEventPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventTypeList = undefined;
      this._levelList = undefined;
      this._nameList = undefined;
      this._product = undefined;
      this._sqlFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventTypeList = value.eventTypeList;
      this._levelList = value.levelList;
      this._nameList = value.nameList;
      this._product = value.product;
      this._sqlFilter = value.sqlFilter;
    }
  }

  // event_type_list - computed: false, optional: true, required: false
  private _eventTypeList?: string[]; 
  public get eventTypeList() {
    return this.getListAttribute('event_type_list');
  }
  public set eventTypeList(value: string[]) {
    this._eventTypeList = value;
  }
  public resetEventTypeList() {
    this._eventTypeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeListInput() {
    return this._eventTypeList;
  }

  // level_list - computed: false, optional: true, required: false
  private _levelList?: string[]; 
  public get levelList() {
    return this.getListAttribute('level_list');
  }
  public set levelList(value: string[]) {
    this._levelList = value;
  }
  public resetLevelList() {
    this._levelList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelListInput() {
    return this._levelList;
  }

  // name_list - computed: false, optional: true, required: false
  private _nameList?: string[]; 
  public get nameList() {
    return this.getListAttribute('name_list');
  }
  public set nameList(value: string[]) {
    this._nameList = value;
  }
  public resetNameList() {
    this._nameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameListInput() {
    return this._nameList;
  }

  // product - computed: false, optional: false, required: true
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // sql_filter - computed: false, optional: true, required: false
  private _sqlFilter?: string; 
  public get sqlFilter() {
    return this.getStringAttribute('sql_filter');
  }
  public set sqlFilter(value: string) {
    this._sqlFilter = value;
  }
  public resetSqlFilter() {
    this._sqlFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlFilterInput() {
    return this._sqlFilter;
  }
}
export interface CmsEventRuleFcParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#fc_parameters_id CmsEventRule#fc_parameters_id}
  */
  readonly fcParametersId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#function_name CmsEventRule#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#region CmsEventRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#service_name CmsEventRule#service_name}
  */
  readonly serviceName?: string;
}

export function cmsEventRuleFcParametersToTerraform(struct?: CmsEventRuleFcParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fc_parameters_id: cdktf.stringToTerraform(struct!.fcParametersId),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    region: cdktf.stringToTerraform(struct!.region),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function cmsEventRuleFcParametersToHclTerraform(struct?: CmsEventRuleFcParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fc_parameters_id: {
      value: cdktf.stringToHclTerraform(struct!.fcParametersId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsEventRuleFcParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsEventRuleFcParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fcParametersId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fcParametersId = this._fcParametersId;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsEventRuleFcParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fcParametersId = undefined;
      this._functionName = undefined;
      this._region = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fcParametersId = value.fcParametersId;
      this._functionName = value.functionName;
      this._region = value.region;
      this._serviceName = value.serviceName;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // fc_parameters_id - computed: false, optional: true, required: false
  private _fcParametersId?: string; 
  public get fcParametersId() {
    return this.getStringAttribute('fc_parameters_id');
  }
  public set fcParametersId(value: string) {
    this._fcParametersId = value;
  }
  public resetFcParametersId() {
    this._fcParametersId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcParametersIdInput() {
    return this._fcParametersId;
  }

  // function_name - computed: false, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class CmsEventRuleFcParametersList extends cdktf.ComplexList {
  public internalValue? : CmsEventRuleFcParameters[] | cdktf.IResolvable

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
  public get(index: number): CmsEventRuleFcParametersOutputReference {
    return new CmsEventRuleFcParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsEventRuleMnsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#mns_parameters_id CmsEventRule#mns_parameters_id}
  */
  readonly mnsParametersId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#queue CmsEventRule#queue}
  */
  readonly queue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#region CmsEventRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#topic CmsEventRule#topic}
  */
  readonly topic?: string;
}

export function cmsEventRuleMnsParametersToTerraform(struct?: CmsEventRuleMnsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mns_parameters_id: cdktf.stringToTerraform(struct!.mnsParametersId),
    queue: cdktf.stringToTerraform(struct!.queue),
    region: cdktf.stringToTerraform(struct!.region),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function cmsEventRuleMnsParametersToHclTerraform(struct?: CmsEventRuleMnsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mns_parameters_id: {
      value: cdktf.stringToHclTerraform(struct!.mnsParametersId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue: {
      value: cdktf.stringToHclTerraform(struct!.queue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsEventRuleMnsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsEventRuleMnsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mnsParametersId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mnsParametersId = this._mnsParametersId;
    }
    if (this._queue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queue = this._queue;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsEventRuleMnsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mnsParametersId = undefined;
      this._queue = undefined;
      this._region = undefined;
      this._topic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mnsParametersId = value.mnsParametersId;
      this._queue = value.queue;
      this._region = value.region;
      this._topic = value.topic;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // mns_parameters_id - computed: false, optional: true, required: false
  private _mnsParametersId?: string; 
  public get mnsParametersId() {
    return this.getStringAttribute('mns_parameters_id');
  }
  public set mnsParametersId(value: string) {
    this._mnsParametersId = value;
  }
  public resetMnsParametersId() {
    this._mnsParametersId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnsParametersIdInput() {
    return this._mnsParametersId;
  }

  // queue - computed: false, optional: true, required: false
  private _queue?: string; 
  public get queue() {
    return this.getStringAttribute('queue');
  }
  public set queue(value: string) {
    this._queue = value;
  }
  public resetQueue() {
    this._queue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueInput() {
    return this._queue;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}

export class CmsEventRuleMnsParametersList extends cdktf.ComplexList {
  public internalValue? : CmsEventRuleMnsParameters[] | cdktf.IResolvable

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
  public get(index: number): CmsEventRuleMnsParametersOutputReference {
    return new CmsEventRuleMnsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsEventRuleOpenApiParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#action CmsEventRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#open_api_parameters_id CmsEventRule#open_api_parameters_id}
  */
  readonly openApiParametersId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#product CmsEventRule#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#region CmsEventRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#role CmsEventRule#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#version CmsEventRule#version}
  */
  readonly version?: string;
}

export function cmsEventRuleOpenApiParametersToTerraform(struct?: CmsEventRuleOpenApiParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    open_api_parameters_id: cdktf.stringToTerraform(struct!.openApiParametersId),
    product: cdktf.stringToTerraform(struct!.product),
    region: cdktf.stringToTerraform(struct!.region),
    role: cdktf.stringToTerraform(struct!.role),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cmsEventRuleOpenApiParametersToHclTerraform(struct?: CmsEventRuleOpenApiParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_api_parameters_id: {
      value: cdktf.stringToHclTerraform(struct!.openApiParametersId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsEventRuleOpenApiParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsEventRuleOpenApiParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._openApiParametersId !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiParametersId = this._openApiParametersId;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsEventRuleOpenApiParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._openApiParametersId = undefined;
      this._product = undefined;
      this._region = undefined;
      this._role = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._openApiParametersId = value.openApiParametersId;
      this._product = value.product;
      this._region = value.region;
      this._role = value.role;
      this._version = value.version;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // open_api_parameters_id - computed: false, optional: true, required: false
  private _openApiParametersId?: string; 
  public get openApiParametersId() {
    return this.getStringAttribute('open_api_parameters_id');
  }
  public set openApiParametersId(value: string) {
    this._openApiParametersId = value;
  }
  public resetOpenApiParametersId() {
    this._openApiParametersId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiParametersIdInput() {
    return this._openApiParametersId;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CmsEventRuleOpenApiParametersList extends cdktf.ComplexList {
  public internalValue? : CmsEventRuleOpenApiParameters[] | cdktf.IResolvable

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
  public get(index: number): CmsEventRuleOpenApiParametersOutputReference {
    return new CmsEventRuleOpenApiParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsEventRuleSlsParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#log_store CmsEventRule#log_store}
  */
  readonly logStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#project CmsEventRule#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#region CmsEventRule#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#sls_parameters_id CmsEventRule#sls_parameters_id}
  */
  readonly slsParametersId?: string;
}

export function cmsEventRuleSlsParametersToTerraform(struct?: CmsEventRuleSlsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_store: cdktf.stringToTerraform(struct!.logStore),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
    sls_parameters_id: cdktf.stringToTerraform(struct!.slsParametersId),
  }
}


export function cmsEventRuleSlsParametersToHclTerraform(struct?: CmsEventRuleSlsParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_store: {
      value: cdktf.stringToHclTerraform(struct!.logStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_parameters_id: {
      value: cdktf.stringToHclTerraform(struct!.slsParametersId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsEventRuleSlsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsEventRuleSlsParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStore = this._logStore;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._slsParametersId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsParametersId = this._slsParametersId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsEventRuleSlsParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logStore = undefined;
      this._project = undefined;
      this._region = undefined;
      this._slsParametersId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logStore = value.logStore;
      this._project = value.project;
      this._region = value.region;
      this._slsParametersId = value.slsParametersId;
    }
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // log_store - computed: false, optional: true, required: false
  private _logStore?: string; 
  public get logStore() {
    return this.getStringAttribute('log_store');
  }
  public set logStore(value: string) {
    this._logStore = value;
  }
  public resetLogStore() {
    this._logStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStoreInput() {
    return this._logStore;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sls_parameters_id - computed: false, optional: true, required: false
  private _slsParametersId?: string; 
  public get slsParametersId() {
    return this.getStringAttribute('sls_parameters_id');
  }
  public set slsParametersId(value: string) {
    this._slsParametersId = value;
  }
  public resetSlsParametersId() {
    this._slsParametersId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsParametersIdInput() {
    return this._slsParametersId;
  }
}

export class CmsEventRuleSlsParametersList extends cdktf.ComplexList {
  public internalValue? : CmsEventRuleSlsParameters[] | cdktf.IResolvable

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
  public get(index: number): CmsEventRuleSlsParametersOutputReference {
    return new CmsEventRuleSlsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CmsEventRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#create CmsEventRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#delete CmsEventRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#update CmsEventRule#update}
  */
  readonly update?: string;
}

export function cmsEventRuleTimeoutsToTerraform(struct?: CmsEventRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cmsEventRuleTimeoutsToHclTerraform(struct?: CmsEventRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsEventRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CmsEventRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsEventRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface CmsEventRuleWebhookParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#method CmsEventRule#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#protocol CmsEventRule#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#url CmsEventRule#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#webhook_parameters_id CmsEventRule#webhook_parameters_id}
  */
  readonly webhookParametersId?: string;
}

export function cmsEventRuleWebhookParametersToTerraform(struct?: CmsEventRuleWebhookParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    url: cdktf.stringToTerraform(struct!.url),
    webhook_parameters_id: cdktf.stringToTerraform(struct!.webhookParametersId),
  }
}


export function cmsEventRuleWebhookParametersToHclTerraform(struct?: CmsEventRuleWebhookParameters | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_parameters_id: {
      value: cdktf.stringToHclTerraform(struct!.webhookParametersId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsEventRuleWebhookParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsEventRuleWebhookParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._webhookParametersId !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookParametersId = this._webhookParametersId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsEventRuleWebhookParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._method = undefined;
      this._protocol = undefined;
      this._url = undefined;
      this._webhookParametersId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._method = value.method;
      this._protocol = value.protocol;
      this._url = value.url;
      this._webhookParametersId = value.webhookParametersId;
    }
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // webhook_parameters_id - computed: false, optional: true, required: false
  private _webhookParametersId?: string; 
  public get webhookParametersId() {
    return this.getStringAttribute('webhook_parameters_id');
  }
  public set webhookParametersId(value: string) {
    this._webhookParametersId = value;
  }
  public resetWebhookParametersId() {
    this._webhookParametersId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookParametersIdInput() {
    return this._webhookParametersId;
  }
}

export class CmsEventRuleWebhookParametersList extends cdktf.ComplexList {
  public internalValue? : CmsEventRuleWebhookParameters[] | cdktf.IResolvable

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
  public get(index: number): CmsEventRuleWebhookParametersOutputReference {
    return new CmsEventRuleWebhookParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule alicloud_cms_event_rule}
*/
export class CmsEventRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_event_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmsEventRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmsEventRule to import
  * @param importFromId The id of the existing CmsEventRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmsEventRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_event_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/cms_event_rule alicloud_cms_event_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmsEventRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CmsEventRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_event_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._groupId = config.groupId;
    this._id = config.id;
    this._ruleName = config.ruleName;
    this._silenceTime = config.silenceTime;
    this._status = config.status;
    this._contactParameters.internalValue = config.contactParameters;
    this._eventPattern.internalValue = config.eventPattern;
    this._fcParameters.internalValue = config.fcParameters;
    this._mnsParameters.internalValue = config.mnsParameters;
    this._openApiParameters.internalValue = config.openApiParameters;
    this._slsParameters.internalValue = config.slsParameters;
    this._timeouts.internalValue = config.timeouts;
    this._webhookParameters.internalValue = config.webhookParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // silence_time - computed: false, optional: true, required: false
  private _silenceTime?: number; 
  public get silenceTime() {
    return this.getNumberAttribute('silence_time');
  }
  public set silenceTime(value: number) {
    this._silenceTime = value;
  }
  public resetSilenceTime() {
    this._silenceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silenceTimeInput() {
    return this._silenceTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // contact_parameters - computed: false, optional: true, required: false
  private _contactParameters = new CmsEventRuleContactParametersList(this, "contact_parameters", false);
  public get contactParameters() {
    return this._contactParameters;
  }
  public putContactParameters(value: CmsEventRuleContactParameters[] | cdktf.IResolvable) {
    this._contactParameters.internalValue = value;
  }
  public resetContactParameters() {
    this._contactParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactParametersInput() {
    return this._contactParameters.internalValue;
  }

  // event_pattern - computed: false, optional: false, required: true
  private _eventPattern = new CmsEventRuleEventPatternOutputReference(this, "event_pattern");
  public get eventPattern() {
    return this._eventPattern;
  }
  public putEventPattern(value: CmsEventRuleEventPattern) {
    this._eventPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPatternInput() {
    return this._eventPattern.internalValue;
  }

  // fc_parameters - computed: false, optional: true, required: false
  private _fcParameters = new CmsEventRuleFcParametersList(this, "fc_parameters", false);
  public get fcParameters() {
    return this._fcParameters;
  }
  public putFcParameters(value: CmsEventRuleFcParameters[] | cdktf.IResolvable) {
    this._fcParameters.internalValue = value;
  }
  public resetFcParameters() {
    this._fcParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcParametersInput() {
    return this._fcParameters.internalValue;
  }

  // mns_parameters - computed: false, optional: true, required: false
  private _mnsParameters = new CmsEventRuleMnsParametersList(this, "mns_parameters", false);
  public get mnsParameters() {
    return this._mnsParameters;
  }
  public putMnsParameters(value: CmsEventRuleMnsParameters[] | cdktf.IResolvable) {
    this._mnsParameters.internalValue = value;
  }
  public resetMnsParameters() {
    this._mnsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mnsParametersInput() {
    return this._mnsParameters.internalValue;
  }

  // open_api_parameters - computed: false, optional: true, required: false
  private _openApiParameters = new CmsEventRuleOpenApiParametersList(this, "open_api_parameters", false);
  public get openApiParameters() {
    return this._openApiParameters;
  }
  public putOpenApiParameters(value: CmsEventRuleOpenApiParameters[] | cdktf.IResolvable) {
    this._openApiParameters.internalValue = value;
  }
  public resetOpenApiParameters() {
    this._openApiParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiParametersInput() {
    return this._openApiParameters.internalValue;
  }

  // sls_parameters - computed: false, optional: true, required: false
  private _slsParameters = new CmsEventRuleSlsParametersList(this, "sls_parameters", false);
  public get slsParameters() {
    return this._slsParameters;
  }
  public putSlsParameters(value: CmsEventRuleSlsParameters[] | cdktf.IResolvable) {
    this._slsParameters.internalValue = value;
  }
  public resetSlsParameters() {
    this._slsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsParametersInput() {
    return this._slsParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CmsEventRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CmsEventRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // webhook_parameters - computed: false, optional: true, required: false
  private _webhookParameters = new CmsEventRuleWebhookParametersList(this, "webhook_parameters", false);
  public get webhookParameters() {
    return this._webhookParameters;
  }
  public putWebhookParameters(value: CmsEventRuleWebhookParameters[] | cdktf.IResolvable) {
    this._webhookParameters.internalValue = value;
  }
  public resetWebhookParameters() {
    this._webhookParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookParametersInput() {
    return this._webhookParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      silence_time: cdktf.numberToTerraform(this._silenceTime),
      status: cdktf.stringToTerraform(this._status),
      contact_parameters: cdktf.listMapper(cmsEventRuleContactParametersToTerraform, true)(this._contactParameters.internalValue),
      event_pattern: cmsEventRuleEventPatternToTerraform(this._eventPattern.internalValue),
      fc_parameters: cdktf.listMapper(cmsEventRuleFcParametersToTerraform, true)(this._fcParameters.internalValue),
      mns_parameters: cdktf.listMapper(cmsEventRuleMnsParametersToTerraform, true)(this._mnsParameters.internalValue),
      open_api_parameters: cdktf.listMapper(cmsEventRuleOpenApiParametersToTerraform, true)(this._openApiParameters.internalValue),
      sls_parameters: cdktf.listMapper(cmsEventRuleSlsParametersToTerraform, true)(this._slsParameters.internalValue),
      timeouts: cmsEventRuleTimeoutsToTerraform(this._timeouts.internalValue),
      webhook_parameters: cdktf.listMapper(cmsEventRuleWebhookParametersToTerraform, true)(this._webhookParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      silence_time: {
        value: cdktf.numberToHclTerraform(this._silenceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_parameters: {
        value: cdktf.listMapperHcl(cmsEventRuleContactParametersToHclTerraform, true)(this._contactParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmsEventRuleContactParametersList",
      },
      event_pattern: {
        value: cmsEventRuleEventPatternToHclTerraform(this._eventPattern.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CmsEventRuleEventPatternList",
      },
      fc_parameters: {
        value: cdktf.listMapperHcl(cmsEventRuleFcParametersToHclTerraform, true)(this._fcParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmsEventRuleFcParametersList",
      },
      mns_parameters: {
        value: cdktf.listMapperHcl(cmsEventRuleMnsParametersToHclTerraform, true)(this._mnsParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmsEventRuleMnsParametersList",
      },
      open_api_parameters: {
        value: cdktf.listMapperHcl(cmsEventRuleOpenApiParametersToHclTerraform, true)(this._openApiParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmsEventRuleOpenApiParametersList",
      },
      sls_parameters: {
        value: cdktf.listMapperHcl(cmsEventRuleSlsParametersToHclTerraform, true)(this._slsParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmsEventRuleSlsParametersList",
      },
      timeouts: {
        value: cmsEventRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CmsEventRuleTimeouts",
      },
      webhook_parameters: {
        value: cdktf.listMapperHcl(cmsEventRuleWebhookParametersToHclTerraform, true)(this._webhookParameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmsEventRuleWebhookParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
