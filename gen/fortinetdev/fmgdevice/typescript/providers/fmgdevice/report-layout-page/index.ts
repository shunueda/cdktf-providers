// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportLayoutPageAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#column_break_before ReportLayoutPageA#column_break_before}
  */
  readonly columnBreakBefore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#device_name ReportLayoutPageA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#device_vdom ReportLayoutPageA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#id ReportLayoutPageA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#layout ReportLayoutPageA#layout}
  */
  readonly layout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#options ReportLayoutPageA#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#page_break_before ReportLayoutPageA#page_break_before}
  */
  readonly pageBreakBefore?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#paper ReportLayoutPageA#paper}
  */
  readonly paper?: string;
  /**
  * footer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#footer ReportLayoutPageA#footer}
  */
  readonly footer?: ReportLayoutPageFooterA;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#header ReportLayoutPageA#header}
  */
  readonly header?: ReportLayoutPageHeaderA;
}
export interface ReportLayoutPageFooterFooterItemA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#content ReportLayoutPageA#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#description ReportLayoutPageA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#id ReportLayoutPageA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#img_src ReportLayoutPageA#img_src}
  */
  readonly imgSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#style ReportLayoutPageA#style}
  */
  readonly style?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#type ReportLayoutPageA#type}
  */
  readonly type?: string;
}

export function reportLayoutPageFooterFooterItemAToTerraform(struct?: ReportLayoutPageFooterFooterItemA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    img_src: cdktf.stringToTerraform(struct!.imgSrc),
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportLayoutPageFooterFooterItemAToHclTerraform(struct?: ReportLayoutPageFooterFooterItemA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    img_src: {
      value: cdktf.stringToHclTerraform(struct!.imgSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
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

export class ReportLayoutPageFooterFooterItemAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutPageFooterFooterItemA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imgSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgSrc = this._imgSrc;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPageFooterFooterItemA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._description = undefined;
      this._id = undefined;
      this._imgSrc = undefined;
      this._style = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._description = value.description;
      this._id = value.id;
      this._imgSrc = value.imgSrc;
      this._style = value.style;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // img_src - computed: false, optional: true, required: false
  private _imgSrc?: string; 
  public get imgSrc() {
    return this.getStringAttribute('img_src');
  }
  public set imgSrc(value: string) {
    this._imgSrc = value;
  }
  public resetImgSrc() {
    this._imgSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgSrcInput() {
    return this._imgSrc;
  }

  // style - computed: true, optional: true, required: false
  private _style?: string[]; 
  public get style() {
    return cdktf.Fn.tolist(this.getListAttribute('style'));
  }
  public set style(value: string[]) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // type - computed: true, optional: true, required: false
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
}

export class ReportLayoutPageFooterFooterItemAList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutPageFooterFooterItemA[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutPageFooterFooterItemAOutputReference {
    return new ReportLayoutPageFooterFooterItemAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportLayoutPageFooterA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#style ReportLayoutPageA#style}
  */
  readonly style?: string[];
  /**
  * footer_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#footer_item ReportLayoutPageA#footer_item}
  */
  readonly footerItem?: ReportLayoutPageFooterFooterItemA[] | cdktf.IResolvable;
}

export function reportLayoutPageFooterAToTerraform(struct?: ReportLayoutPageFooterAOutputReference | ReportLayoutPageFooterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    footer_item: cdktf.listMapper(reportLayoutPageFooterFooterItemAToTerraform, true)(struct!.footerItem),
  }
}


export function reportLayoutPageFooterAToHclTerraform(struct?: ReportLayoutPageFooterAOutputReference | ReportLayoutPageFooterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    footer_item: {
      value: cdktf.listMapperHcl(reportLayoutPageFooterFooterItemAToHclTerraform, true)(struct!.footerItem),
      isBlock: true,
      type: "list",
      storageClassType: "ReportLayoutPageFooterFooterItemAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportLayoutPageFooterAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportLayoutPageFooterA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._footerItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerItem = this._footerItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPageFooterA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._style = undefined;
      this._footerItem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._style = value.style;
      this._footerItem.internalValue = value.footerItem;
    }
  }

  // style - computed: true, optional: true, required: false
  private _style?: string[]; 
  public get style() {
    return cdktf.Fn.tolist(this.getListAttribute('style'));
  }
  public set style(value: string[]) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // footer_item - computed: false, optional: true, required: false
  private _footerItem = new ReportLayoutPageFooterFooterItemAList(this, "footer_item", false);
  public get footerItem() {
    return this._footerItem;
  }
  public putFooterItem(value: ReportLayoutPageFooterFooterItemA[] | cdktf.IResolvable) {
    this._footerItem.internalValue = value;
  }
  public resetFooterItem() {
    this._footerItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerItemInput() {
    return this._footerItem.internalValue;
  }
}
export interface ReportLayoutPageHeaderHeaderItemA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#content ReportLayoutPageA#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#description ReportLayoutPageA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#id ReportLayoutPageA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#img_src ReportLayoutPageA#img_src}
  */
  readonly imgSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#style ReportLayoutPageA#style}
  */
  readonly style?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#type ReportLayoutPageA#type}
  */
  readonly type?: string;
}

export function reportLayoutPageHeaderHeaderItemAToTerraform(struct?: ReportLayoutPageHeaderHeaderItemA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    img_src: cdktf.stringToTerraform(struct!.imgSrc),
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reportLayoutPageHeaderHeaderItemAToHclTerraform(struct?: ReportLayoutPageHeaderHeaderItemA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    img_src: {
      value: cdktf.stringToHclTerraform(struct!.imgSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
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

export class ReportLayoutPageHeaderHeaderItemAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReportLayoutPageHeaderHeaderItemA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._imgSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgSrc = this._imgSrc;
    }
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPageHeaderHeaderItemA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._description = undefined;
      this._id = undefined;
      this._imgSrc = undefined;
      this._style = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._description = value.description;
      this._id = value.id;
      this._imgSrc = value.imgSrc;
      this._style = value.style;
      this._type = value.type;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // img_src - computed: false, optional: true, required: false
  private _imgSrc?: string; 
  public get imgSrc() {
    return this.getStringAttribute('img_src');
  }
  public set imgSrc(value: string) {
    this._imgSrc = value;
  }
  public resetImgSrc() {
    this._imgSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgSrcInput() {
    return this._imgSrc;
  }

  // style - computed: true, optional: true, required: false
  private _style?: string[]; 
  public get style() {
    return cdktf.Fn.tolist(this.getListAttribute('style'));
  }
  public set style(value: string[]) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // type - computed: true, optional: true, required: false
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
}

export class ReportLayoutPageHeaderHeaderItemAList extends cdktf.ComplexList {
  public internalValue? : ReportLayoutPageHeaderHeaderItemA[] | cdktf.IResolvable

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
  public get(index: number): ReportLayoutPageHeaderHeaderItemAOutputReference {
    return new ReportLayoutPageHeaderHeaderItemAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReportLayoutPageHeaderA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#style ReportLayoutPageA#style}
  */
  readonly style?: string[];
  /**
  * header_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#header_item ReportLayoutPageA#header_item}
  */
  readonly headerItem?: ReportLayoutPageHeaderHeaderItemA[] | cdktf.IResolvable;
}

export function reportLayoutPageHeaderAToTerraform(struct?: ReportLayoutPageHeaderAOutputReference | ReportLayoutPageHeaderA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    style: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.style),
    header_item: cdktf.listMapper(reportLayoutPageHeaderHeaderItemAToTerraform, true)(struct!.headerItem),
  }
}


export function reportLayoutPageHeaderAToHclTerraform(struct?: ReportLayoutPageHeaderAOutputReference | ReportLayoutPageHeaderA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    style: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.style),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    header_item: {
      value: cdktf.listMapperHcl(reportLayoutPageHeaderHeaderItemAToHclTerraform, true)(struct!.headerItem),
      isBlock: true,
      type: "list",
      storageClassType: "ReportLayoutPageHeaderHeaderItemAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReportLayoutPageHeaderAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ReportLayoutPageHeaderA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._style !== undefined) {
      hasAnyValues = true;
      internalValueResult.style = this._style;
    }
    if (this._headerItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerItem = this._headerItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReportLayoutPageHeaderA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._style = undefined;
      this._headerItem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._style = value.style;
      this._headerItem.internalValue = value.headerItem;
    }
  }

  // style - computed: true, optional: true, required: false
  private _style?: string[]; 
  public get style() {
    return cdktf.Fn.tolist(this.getListAttribute('style'));
  }
  public set style(value: string[]) {
    this._style = value;
  }
  public resetStyle() {
    this._style = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get styleInput() {
    return this._style;
  }

  // header_item - computed: false, optional: true, required: false
  private _headerItem = new ReportLayoutPageHeaderHeaderItemAList(this, "header_item", false);
  public get headerItem() {
    return this._headerItem;
  }
  public putHeaderItem(value: ReportLayoutPageHeaderHeaderItemA[] | cdktf.IResolvable) {
    this._headerItem.internalValue = value;
  }
  public resetHeaderItem() {
    this._headerItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerItemInput() {
    return this._headerItem.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page fmgdevice_report_layout_page}
*/
export class ReportLayoutPageA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_report_layout_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportLayoutPageA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportLayoutPageA to import
  * @param importFromId The id of the existing ReportLayoutPageA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportLayoutPageA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_report_layout_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/report_layout_page fmgdevice_report_layout_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportLayoutPageAConfig
  */
  public constructor(scope: Construct, id: string, config: ReportLayoutPageAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_report_layout_page',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._columnBreakBefore = config.columnBreakBefore;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._layout = config.layout;
    this._options = config.options;
    this._pageBreakBefore = config.pageBreakBefore;
    this._paper = config.paper;
    this._footer.internalValue = config.footer;
    this._header.internalValue = config.header;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_break_before - computed: true, optional: true, required: false
  private _columnBreakBefore?: string[]; 
  public get columnBreakBefore() {
    return cdktf.Fn.tolist(this.getListAttribute('column_break_before'));
  }
  public set columnBreakBefore(value: string[]) {
    this._columnBreakBefore = value;
  }
  public resetColumnBreakBefore() {
    this._columnBreakBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnBreakBeforeInput() {
    return this._columnBreakBefore;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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

  // layout - computed: false, optional: false, required: true
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
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

  // page_break_before - computed: true, optional: true, required: false
  private _pageBreakBefore?: string[]; 
  public get pageBreakBefore() {
    return cdktf.Fn.tolist(this.getListAttribute('page_break_before'));
  }
  public set pageBreakBefore(value: string[]) {
    this._pageBreakBefore = value;
  }
  public resetPageBreakBefore() {
    this._pageBreakBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageBreakBeforeInput() {
    return this._pageBreakBefore;
  }

  // paper - computed: true, optional: true, required: false
  private _paper?: string; 
  public get paper() {
    return this.getStringAttribute('paper');
  }
  public set paper(value: string) {
    this._paper = value;
  }
  public resetPaper() {
    this._paper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paperInput() {
    return this._paper;
  }

  // footer - computed: false, optional: true, required: false
  private _footer = new ReportLayoutPageFooterAOutputReference(this, "footer");
  public get footer() {
    return this._footer;
  }
  public putFooter(value: ReportLayoutPageFooterA) {
    this._footer.internalValue = value;
  }
  public resetFooter() {
    this._footer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerInput() {
    return this._footer.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new ReportLayoutPageHeaderAOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: ReportLayoutPageHeaderA) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      column_break_before: cdktf.listMapper(cdktf.stringToTerraform, false)(this._columnBreakBefore),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      layout: cdktf.stringToTerraform(this._layout),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      page_break_before: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pageBreakBefore),
      paper: cdktf.stringToTerraform(this._paper),
      footer: reportLayoutPageFooterAToTerraform(this._footer.internalValue),
      header: reportLayoutPageHeaderAToTerraform(this._header.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      column_break_before: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._columnBreakBefore),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      layout: {
        value: cdktf.stringToHclTerraform(this._layout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      page_break_before: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pageBreakBefore),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      paper: {
        value: cdktf.stringToHclTerraform(this._paper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      footer: {
        value: reportLayoutPageFooterAToHclTerraform(this._footer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportLayoutPageFooterAList",
      },
      header: {
        value: reportLayoutPageHeaderAToHclTerraform(this._header.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReportLayoutPageHeaderAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
