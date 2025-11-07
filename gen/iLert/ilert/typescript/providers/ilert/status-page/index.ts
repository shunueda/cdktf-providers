// https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatusPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#account_wide_view StatusPage#account_wide_view}
  */
  readonly accountWideView?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#announcement StatusPage#announcement}
  */
  readonly announcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#announcement_in_widget StatusPage#announcement_in_widget}
  */
  readonly announcementInWidget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#announcement_on_page StatusPage#announcement_on_page}
  */
  readonly announcementOnPage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#appearance StatusPage#appearance}
  */
  readonly appearance?: string;
  /**
  * Don't use this field yet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#custom_css StatusPage#custom_css}
  */
  readonly customCss?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#domain StatusPage#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#email_whitelist StatusPage#email_whitelist}
  */
  readonly emailWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#favicon_url StatusPage#favicon_url}
  */
  readonly faviconUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#hidden_from_search StatusPage#hidden_from_search}
  */
  readonly hiddenFromSearch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#ip_whitelist StatusPage#ip_whitelist}
  */
  readonly ipWhitelist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#logo_redirect_url StatusPage#logo_redirect_url}
  */
  readonly logoRedirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#logo_url StatusPage#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#name StatusPage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#page_description StatusPage#page_description}
  */
  readonly pageDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#page_layout StatusPage#page_layout}
  */
  readonly pageLayout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#page_title StatusPage#page_title}
  */
  readonly pageTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#show_incident_history_option StatusPage#show_incident_history_option}
  */
  readonly showIncidentHistoryOption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#show_subscribe_action StatusPage#show_subscribe_action}
  */
  readonly showSubscribeAction?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#subdomain StatusPage#subdomain}
  */
  readonly subdomain: string;
  /**
  * Please use `appearance` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#theme_mode StatusPage#theme_mode}
  */
  readonly themeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#timezone StatusPage#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#visibility StatusPage#visibility}
  */
  readonly visibility: string;
  /**
  * metric block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#metric StatusPage#metric}
  */
  readonly metric?: StatusPageMetric[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#service StatusPage#service}
  */
  readonly service: StatusPageService[] | cdktf.IResolvable;
  /**
  * structure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#structure StatusPage#structure}
  */
  readonly structure?: StatusPageStructure;
  /**
  * team block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#team StatusPage#team}
  */
  readonly team?: StatusPageTeam[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#timeouts StatusPage#timeouts}
  */
  readonly timeouts?: StatusPageTimeouts;
}
export interface StatusPageMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#name StatusPage#name}
  */
  readonly name?: string;
}

export function statusPageMetricToTerraform(struct?: StatusPageMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function statusPageMetricToHclTerraform(struct?: StatusPageMetric | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageMetricOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatusPageMetric | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
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
}

export class StatusPageMetricList extends cdktf.ComplexList {
  public internalValue? : StatusPageMetric[] | cdktf.IResolvable

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
  public get(index: number): StatusPageMetricOutputReference {
    return new StatusPageMetricOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatusPageService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#name StatusPage#name}
  */
  readonly name?: string;
}

export function statusPageServiceToTerraform(struct?: StatusPageService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function statusPageServiceToHclTerraform(struct?: StatusPageService | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatusPageService | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
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
}

export class StatusPageServiceList extends cdktf.ComplexList {
  public internalValue? : StatusPageService[] | cdktf.IResolvable

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
  public get(index: number): StatusPageServiceOutputReference {
    return new StatusPageServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatusPageStructureElementChild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#options StatusPage#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#type StatusPage#type}
  */
  readonly type: string;
}

export function statusPageStructureElementChildToTerraform(struct?: StatusPageStructureElementChild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function statusPageStructureElementChildToHclTerraform(struct?: StatusPageStructureElementChild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class StatusPageStructureElementChildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatusPageStructureElementChild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageStructureElementChild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._options = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._options = value.options;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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

export class StatusPageStructureElementChildList extends cdktf.ComplexList {
  public internalValue? : StatusPageStructureElementChild[] | cdktf.IResolvable

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
  public get(index: number): StatusPageStructureElementChildOutputReference {
    return new StatusPageStructureElementChildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatusPageStructureElement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#options StatusPage#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#type StatusPage#type}
  */
  readonly type: string;
  /**
  * child block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#child StatusPage#child}
  */
  readonly child?: StatusPageStructureElementChild[] | cdktf.IResolvable;
}

export function statusPageStructureElementToTerraform(struct?: StatusPageStructureElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.options),
    type: cdktf.stringToTerraform(struct!.type),
    child: cdktf.listMapper(statusPageStructureElementChildToTerraform, true)(struct!.child),
  }
}


export function statusPageStructureElementToHclTerraform(struct?: StatusPageStructureElement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.options),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    child: {
      value: cdktf.listMapperHcl(statusPageStructureElementChildToHclTerraform, true)(struct!.child),
      isBlock: true,
      type: "list",
      storageClassType: "StatusPageStructureElementChildList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageStructureElementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatusPageStructureElement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._child?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.child = this._child?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageStructureElement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._options = undefined;
      this._type = undefined;
      this._child.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._options = value.options;
      this._type = value.type;
      this._child.internalValue = value.child;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return this.getListAttribute('options');
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
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

  // child - computed: false, optional: true, required: false
  private _child = new StatusPageStructureElementChildList(this, "child", false);
  public get child() {
    return this._child;
  }
  public putChild(value: StatusPageStructureElementChild[] | cdktf.IResolvable) {
    this._child.internalValue = value;
  }
  public resetChild() {
    this._child.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childInput() {
    return this._child.internalValue;
  }
}

export class StatusPageStructureElementList extends cdktf.ComplexList {
  public internalValue? : StatusPageStructureElement[] | cdktf.IResolvable

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
  public get(index: number): StatusPageStructureElementOutputReference {
    return new StatusPageStructureElementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatusPageStructure {
  /**
  * element block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#element StatusPage#element}
  */
  readonly element: StatusPageStructureElement[] | cdktf.IResolvable;
}

export function statusPageStructureToTerraform(struct?: StatusPageStructureOutputReference | StatusPageStructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element: cdktf.listMapper(statusPageStructureElementToTerraform, true)(struct!.element),
  }
}


export function statusPageStructureToHclTerraform(struct?: StatusPageStructureOutputReference | StatusPageStructure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element: {
      value: cdktf.listMapperHcl(statusPageStructureElementToHclTerraform, true)(struct!.element),
      isBlock: true,
      type: "list",
      storageClassType: "StatusPageStructureElementList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageStructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StatusPageStructure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._element?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.element = this._element?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageStructure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._element.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._element.internalValue = value.element;
    }
  }

  // element - computed: false, optional: false, required: true
  private _element = new StatusPageStructureElementList(this, "element", false);
  public get element() {
    return this._element;
  }
  public putElement(value: StatusPageStructureElement[] | cdktf.IResolvable) {
    this._element.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element.internalValue;
  }
}
export interface StatusPageTeam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#name StatusPage#name}
  */
  readonly name?: string;
}

export function statusPageTeamToTerraform(struct?: StatusPageTeam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function statusPageTeamToHclTerraform(struct?: StatusPageTeam | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageTeamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatusPageTeam | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageTeam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
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
    }
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
}

export class StatusPageTeamList extends cdktf.ComplexList {
  public internalValue? : StatusPageTeam[] | cdktf.IResolvable

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
  public get(index: number): StatusPageTeamOutputReference {
    return new StatusPageTeamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatusPageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#create StatusPage#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#delete StatusPage#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#read StatusPage#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#update StatusPage#update}
  */
  readonly update?: string;
}

export function statusPageTimeoutsToTerraform(struct?: StatusPageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function statusPageTimeoutsToHclTerraform(struct?: StatusPageTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class StatusPageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StatusPageTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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

/**
* Represents a {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page ilert_status_page}
*/
export class StatusPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ilert_status_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatusPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatusPage to import
  * @param importFromId The id of the existing StatusPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatusPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ilert_status_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ilert/ilert/2.14.3/docs/resources/status_page ilert_status_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatusPageConfig
  */
  public constructor(scope: Construct, id: string, config: StatusPageConfig) {
    super(scope, id, {
      terraformResourceType: 'ilert_status_page',
      terraformGeneratorMetadata: {
        providerName: 'ilert',
        providerVersion: '2.14.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountWideView = config.accountWideView;
    this._announcement = config.announcement;
    this._announcementInWidget = config.announcementInWidget;
    this._announcementOnPage = config.announcementOnPage;
    this._appearance = config.appearance;
    this._customCss = config.customCss;
    this._domain = config.domain;
    this._emailWhitelist = config.emailWhitelist;
    this._faviconUrl = config.faviconUrl;
    this._hiddenFromSearch = config.hiddenFromSearch;
    this._id = config.id;
    this._ipWhitelist = config.ipWhitelist;
    this._logoRedirectUrl = config.logoRedirectUrl;
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._pageDescription = config.pageDescription;
    this._pageLayout = config.pageLayout;
    this._pageTitle = config.pageTitle;
    this._showIncidentHistoryOption = config.showIncidentHistoryOption;
    this._showSubscribeAction = config.showSubscribeAction;
    this._subdomain = config.subdomain;
    this._themeMode = config.themeMode;
    this._timezone = config.timezone;
    this._visibility = config.visibility;
    this._metric.internalValue = config.metric;
    this._service.internalValue = config.service;
    this._structure.internalValue = config.structure;
    this._team.internalValue = config.team;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_wide_view - computed: false, optional: true, required: false
  private _accountWideView?: boolean | cdktf.IResolvable; 
  public get accountWideView() {
    return this.getBooleanAttribute('account_wide_view');
  }
  public set accountWideView(value: boolean | cdktf.IResolvable) {
    this._accountWideView = value;
  }
  public resetAccountWideView() {
    this._accountWideView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountWideViewInput() {
    return this._accountWideView;
  }

  // activated - computed: true, optional: false, required: false
  public get activated() {
    return this.getBooleanAttribute('activated');
  }

  // announcement - computed: false, optional: true, required: false
  private _announcement?: string; 
  public get announcement() {
    return this.getStringAttribute('announcement');
  }
  public set announcement(value: string) {
    this._announcement = value;
  }
  public resetAnnouncement() {
    this._announcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementInput() {
    return this._announcement;
  }

  // announcement_in_widget - computed: false, optional: true, required: false
  private _announcementInWidget?: boolean | cdktf.IResolvable; 
  public get announcementInWidget() {
    return this.getBooleanAttribute('announcement_in_widget');
  }
  public set announcementInWidget(value: boolean | cdktf.IResolvable) {
    this._announcementInWidget = value;
  }
  public resetAnnouncementInWidget() {
    this._announcementInWidget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementInWidgetInput() {
    return this._announcementInWidget;
  }

  // announcement_on_page - computed: false, optional: true, required: false
  private _announcementOnPage?: boolean | cdktf.IResolvable; 
  public get announcementOnPage() {
    return this.getBooleanAttribute('announcement_on_page');
  }
  public set announcementOnPage(value: boolean | cdktf.IResolvable) {
    this._announcementOnPage = value;
  }
  public resetAnnouncementOnPage() {
    this._announcementOnPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcementOnPageInput() {
    return this._announcementOnPage;
  }

  // appearance - computed: false, optional: true, required: false
  private _appearance?: string; 
  public get appearance() {
    return this.getStringAttribute('appearance');
  }
  public set appearance(value: string) {
    this._appearance = value;
  }
  public resetAppearance() {
    this._appearance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appearanceInput() {
    return this._appearance;
  }

  // custom_css - computed: false, optional: true, required: false
  private _customCss?: string; 
  public get customCss() {
    return this.getStringAttribute('custom_css');
  }
  public set customCss(value: string) {
    this._customCss = value;
  }
  public resetCustomCss() {
    this._customCss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCssInput() {
    return this._customCss;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // email_whitelist - computed: false, optional: true, required: false
  private _emailWhitelist?: string[]; 
  public get emailWhitelist() {
    return this.getListAttribute('email_whitelist');
  }
  public set emailWhitelist(value: string[]) {
    this._emailWhitelist = value;
  }
  public resetEmailWhitelist() {
    this._emailWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailWhitelistInput() {
    return this._emailWhitelist;
  }

  // favicon_url - computed: false, optional: true, required: false
  private _faviconUrl?: string; 
  public get faviconUrl() {
    return this.getStringAttribute('favicon_url');
  }
  public set faviconUrl(value: string) {
    this._faviconUrl = value;
  }
  public resetFaviconUrl() {
    this._faviconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconUrlInput() {
    return this._faviconUrl;
  }

  // hidden_from_search - computed: false, optional: true, required: false
  private _hiddenFromSearch?: boolean | cdktf.IResolvable; 
  public get hiddenFromSearch() {
    return this.getBooleanAttribute('hidden_from_search');
  }
  public set hiddenFromSearch(value: boolean | cdktf.IResolvable) {
    this._hiddenFromSearch = value;
  }
  public resetHiddenFromSearch() {
    this._hiddenFromSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenFromSearchInput() {
    return this._hiddenFromSearch;
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

  // ip_whitelist - computed: false, optional: true, required: false
  private _ipWhitelist?: string[]; 
  public get ipWhitelist() {
    return this.getListAttribute('ip_whitelist');
  }
  public set ipWhitelist(value: string[]) {
    this._ipWhitelist = value;
  }
  public resetIpWhitelist() {
    this._ipWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhitelistInput() {
    return this._ipWhitelist;
  }

  // logo_redirect_url - computed: false, optional: true, required: false
  private _logoRedirectUrl?: string; 
  public get logoRedirectUrl() {
    return this.getStringAttribute('logo_redirect_url');
  }
  public set logoRedirectUrl(value: string) {
    this._logoRedirectUrl = value;
  }
  public resetLogoRedirectUrl() {
    this._logoRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoRedirectUrlInput() {
    return this._logoRedirectUrl;
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
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

  // page_description - computed: false, optional: true, required: false
  private _pageDescription?: string; 
  public get pageDescription() {
    return this.getStringAttribute('page_description');
  }
  public set pageDescription(value: string) {
    this._pageDescription = value;
  }
  public resetPageDescription() {
    this._pageDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageDescriptionInput() {
    return this._pageDescription;
  }

  // page_layout - computed: false, optional: true, required: false
  private _pageLayout?: string; 
  public get pageLayout() {
    return this.getStringAttribute('page_layout');
  }
  public set pageLayout(value: string) {
    this._pageLayout = value;
  }
  public resetPageLayout() {
    this._pageLayout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageLayoutInput() {
    return this._pageLayout;
  }

  // page_title - computed: false, optional: true, required: false
  private _pageTitle?: string; 
  public get pageTitle() {
    return this.getStringAttribute('page_title');
  }
  public set pageTitle(value: string) {
    this._pageTitle = value;
  }
  public resetPageTitle() {
    this._pageTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTitleInput() {
    return this._pageTitle;
  }

  // show_incident_history_option - computed: false, optional: true, required: false
  private _showIncidentHistoryOption?: boolean | cdktf.IResolvable; 
  public get showIncidentHistoryOption() {
    return this.getBooleanAttribute('show_incident_history_option');
  }
  public set showIncidentHistoryOption(value: boolean | cdktf.IResolvable) {
    this._showIncidentHistoryOption = value;
  }
  public resetShowIncidentHistoryOption() {
    this._showIncidentHistoryOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showIncidentHistoryOptionInput() {
    return this._showIncidentHistoryOption;
  }

  // show_subscribe_action - computed: false, optional: true, required: false
  private _showSubscribeAction?: boolean | cdktf.IResolvable; 
  public get showSubscribeAction() {
    return this.getBooleanAttribute('show_subscribe_action');
  }
  public set showSubscribeAction(value: boolean | cdktf.IResolvable) {
    this._showSubscribeAction = value;
  }
  public resetShowSubscribeAction() {
    this._showSubscribeAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSubscribeActionInput() {
    return this._showSubscribeAction;
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // theme_mode - computed: false, optional: true, required: false
  private _themeMode?: string; 
  public get themeMode() {
    return this.getStringAttribute('theme_mode');
  }
  public set themeMode(value: string) {
    this._themeMode = value;
  }
  public resetThemeMode() {
    this._themeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeModeInput() {
    return this._themeMode;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new StatusPageMetricList(this, "metric", false);
  public get metric() {
    return this._metric;
  }
  public putMetric(value: StatusPageMetric[] | cdktf.IResolvable) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service = new StatusPageServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: StatusPageService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // structure - computed: false, optional: true, required: false
  private _structure = new StatusPageStructureOutputReference(this, "structure");
  public get structure() {
    return this._structure;
  }
  public putStructure(value: StatusPageStructure) {
    this._structure.internalValue = value;
  }
  public resetStructure() {
    this._structure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structureInput() {
    return this._structure.internalValue;
  }

  // team - computed: false, optional: true, required: false
  private _team = new StatusPageTeamList(this, "team", false);
  public get team() {
    return this._team;
  }
  public putTeam(value: StatusPageTeam[] | cdktf.IResolvable) {
    this._team.internalValue = value;
  }
  public resetTeam() {
    this._team.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StatusPageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StatusPageTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_wide_view: cdktf.booleanToTerraform(this._accountWideView),
      announcement: cdktf.stringToTerraform(this._announcement),
      announcement_in_widget: cdktf.booleanToTerraform(this._announcementInWidget),
      announcement_on_page: cdktf.booleanToTerraform(this._announcementOnPage),
      appearance: cdktf.stringToTerraform(this._appearance),
      custom_css: cdktf.stringToTerraform(this._customCss),
      domain: cdktf.stringToTerraform(this._domain),
      email_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailWhitelist),
      favicon_url: cdktf.stringToTerraform(this._faviconUrl),
      hidden_from_search: cdktf.booleanToTerraform(this._hiddenFromSearch),
      id: cdktf.stringToTerraform(this._id),
      ip_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipWhitelist),
      logo_redirect_url: cdktf.stringToTerraform(this._logoRedirectUrl),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      page_description: cdktf.stringToTerraform(this._pageDescription),
      page_layout: cdktf.stringToTerraform(this._pageLayout),
      page_title: cdktf.stringToTerraform(this._pageTitle),
      show_incident_history_option: cdktf.booleanToTerraform(this._showIncidentHistoryOption),
      show_subscribe_action: cdktf.booleanToTerraform(this._showSubscribeAction),
      subdomain: cdktf.stringToTerraform(this._subdomain),
      theme_mode: cdktf.stringToTerraform(this._themeMode),
      timezone: cdktf.stringToTerraform(this._timezone),
      visibility: cdktf.stringToTerraform(this._visibility),
      metric: cdktf.listMapper(statusPageMetricToTerraform, true)(this._metric.internalValue),
      service: cdktf.listMapper(statusPageServiceToTerraform, true)(this._service.internalValue),
      structure: statusPageStructureToTerraform(this._structure.internalValue),
      team: cdktf.listMapper(statusPageTeamToTerraform, true)(this._team.internalValue),
      timeouts: statusPageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_wide_view: {
        value: cdktf.booleanToHclTerraform(this._accountWideView),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      announcement: {
        value: cdktf.stringToHclTerraform(this._announcement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      announcement_in_widget: {
        value: cdktf.booleanToHclTerraform(this._announcementInWidget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      announcement_on_page: {
        value: cdktf.booleanToHclTerraform(this._announcementOnPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      appearance: {
        value: cdktf.stringToHclTerraform(this._appearance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_css: {
        value: cdktf.stringToHclTerraform(this._customCss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailWhitelist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      favicon_url: {
        value: cdktf.stringToHclTerraform(this._faviconUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hidden_from_search: {
        value: cdktf.booleanToHclTerraform(this._hiddenFromSearch),
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
      ip_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipWhitelist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      logo_redirect_url: {
        value: cdktf.stringToHclTerraform(this._logoRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_url: {
        value: cdktf.stringToHclTerraform(this._logoUrl),
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
      page_description: {
        value: cdktf.stringToHclTerraform(this._pageDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_layout: {
        value: cdktf.stringToHclTerraform(this._pageLayout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_title: {
        value: cdktf.stringToHclTerraform(this._pageTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_incident_history_option: {
        value: cdktf.booleanToHclTerraform(this._showIncidentHistoryOption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_subscribe_action: {
        value: cdktf.booleanToHclTerraform(this._showSubscribeAction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subdomain: {
        value: cdktf.stringToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme_mode: {
        value: cdktf.stringToHclTerraform(this._themeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.listMapperHcl(statusPageMetricToHclTerraform, true)(this._metric.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatusPageMetricList",
      },
      service: {
        value: cdktf.listMapperHcl(statusPageServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatusPageServiceList",
      },
      structure: {
        value: statusPageStructureToHclTerraform(this._structure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatusPageStructureList",
      },
      team: {
        value: cdktf.listMapperHcl(statusPageTeamToHclTerraform, true)(this._team.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatusPageTeamList",
      },
      timeouts: {
        value: statusPageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StatusPageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
