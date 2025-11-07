import * as cdktf from 'cdktf';
export interface SloAnomalyConfigNoDataAlertMethod {
  /**
  * The name of the previously defined alert method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Project name the Alert Method is in,  must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names). If not defined, Nobl9 returns a default value for this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project Slo#project}
  */
  readonly project: string;
}

export function sloAnomalyConfigNoDataAlertMethodToTerraform(struct?: SloAnomalyConfigNoDataAlertMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function sloAnomalyConfigNoDataAlertMethodToHclTerraform(struct?: SloAnomalyConfigNoDataAlertMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloAnomalyConfigNoDataAlertMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloAnomalyConfigNoDataAlertMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAnomalyConfigNoDataAlertMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._project = value.project;
    }
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

export class SloAnomalyConfigNoDataAlertMethodList extends cdktf.ComplexList {
  public internalValue? : SloAnomalyConfigNoDataAlertMethod[] | cdktf.IResolvable

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
  public get(index: number): SloAnomalyConfigNoDataAlertMethodOutputReference {
    return new SloAnomalyConfigNoDataAlertMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAnomalyConfigNoData {
  /**
  * Specifies the duration to wait after receiving no data before triggering an alert. The value must be a valid Go duration string, such as "1h" for one hour. If not specified, the system defaults to "15m" (15 minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#alert_after Slo#alert_after}
  */
  readonly alertAfter?: string;
  /**
  * alert_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#alert_method Slo#alert_method}
  */
  readonly alertMethod?: SloAnomalyConfigNoDataAlertMethod[] | cdktf.IResolvable;
}

export function sloAnomalyConfigNoDataToTerraform(struct?: SloAnomalyConfigNoData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_after: cdktf.stringToTerraform(struct!.alertAfter),
    alert_method: cdktf.listMapper(sloAnomalyConfigNoDataAlertMethodToTerraform, true)(struct!.alertMethod),
  }
}


export function sloAnomalyConfigNoDataToHclTerraform(struct?: SloAnomalyConfigNoData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_after: {
      value: cdktf.stringToHclTerraform(struct!.alertAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_method: {
      value: cdktf.listMapperHcl(sloAnomalyConfigNoDataAlertMethodToHclTerraform, true)(struct!.alertMethod),
      isBlock: true,
      type: "list",
      storageClassType: "SloAnomalyConfigNoDataAlertMethodList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloAnomalyConfigNoDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloAnomalyConfigNoData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertAfter = this._alertAfter;
    }
    if (this._alertMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertMethod = this._alertMethod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAnomalyConfigNoData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertAfter = undefined;
      this._alertMethod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertAfter = value.alertAfter;
      this._alertMethod.internalValue = value.alertMethod;
    }
  }

  // alert_after - computed: true, optional: true, required: false
  private _alertAfter?: string; 
  public get alertAfter() {
    return this.getStringAttribute('alert_after');
  }
  public set alertAfter(value: string) {
    this._alertAfter = value;
  }
  public resetAlertAfter() {
    this._alertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertAfterInput() {
    return this._alertAfter;
  }

  // alert_method - computed: false, optional: true, required: false
  private _alertMethod = new SloAnomalyConfigNoDataAlertMethodList(this, "alert_method", false);
  public get alertMethod() {
    return this._alertMethod;
  }
  public putAlertMethod(value: SloAnomalyConfigNoDataAlertMethod[] | cdktf.IResolvable) {
    this._alertMethod.internalValue = value;
  }
  public resetAlertMethod() {
    this._alertMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertMethodInput() {
    return this._alertMethod.internalValue;
  }
}

export class SloAnomalyConfigNoDataList extends cdktf.ComplexList {
  public internalValue? : SloAnomalyConfigNoData[] | cdktf.IResolvable

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
  public get(index: number): SloAnomalyConfigNoDataOutputReference {
    return new SloAnomalyConfigNoDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAnomalyConfig {
  /**
  * no_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#no_data Slo#no_data}
  */
  readonly noData?: SloAnomalyConfigNoData[] | cdktf.IResolvable;
}

export function sloAnomalyConfigToTerraform(struct?: SloAnomalyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_data: cdktf.listMapper(sloAnomalyConfigNoDataToTerraform, true)(struct!.noData),
  }
}


export function sloAnomalyConfigToHclTerraform(struct?: SloAnomalyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_data: {
      value: cdktf.listMapperHcl(sloAnomalyConfigNoDataToHclTerraform, true)(struct!.noData),
      isBlock: true,
      type: "list",
      storageClassType: "SloAnomalyConfigNoDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloAnomalyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloAnomalyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noData = this._noData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAnomalyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noData.internalValue = value.noData;
    }
  }

  // no_data - computed: false, optional: true, required: false
  private _noData = new SloAnomalyConfigNoDataList(this, "no_data", false);
  public get noData() {
    return this._noData;
  }
  public putNoData(value: SloAnomalyConfigNoData[] | cdktf.IResolvable) {
    this._noData.internalValue = value;
  }
  public resetNoData() {
    this._noData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDataInput() {
    return this._noData.internalValue;
  }
}

export class SloAnomalyConfigList extends cdktf.ComplexList {
  public internalValue? : SloAnomalyConfig[] | cdktf.IResolvable

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
  public get(index: number): SloAnomalyConfigOutputReference {
    return new SloAnomalyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloAttachment {
  /**
  * Name displayed for the attachment. Max. length: 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#display_name Slo#display_name}
  */
  readonly displayName?: string;
  /**
  * URL to the attachment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#url Slo#url}
  */
  readonly url: string;
}

export function sloAttachmentToTerraform(struct?: SloAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function sloAttachmentToHclTerraform(struct?: SloAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloAttachmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloAttachment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloAttachment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._url = value.url;
    }
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SloAttachmentList extends cdktf.ComplexList {
  public internalValue? : SloAttachment[] | cdktf.IResolvable

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
  public get(index: number): SloAttachmentOutputReference {
    return new SloAttachmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloCompositeBurnRateCondition {
  /**
  * Type of logical operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#op Slo#op}
  */
  readonly op: string;
  /**
  * Burn rate value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#value Slo#value}
  */
  readonly value: number;
}

export function sloCompositeBurnRateConditionToTerraform(struct?: SloCompositeBurnRateCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function sloCompositeBurnRateConditionToHclTerraform(struct?: SloCompositeBurnRateCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloCompositeBurnRateConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloCompositeBurnRateCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloCompositeBurnRateCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._op = value.op;
      this._value = value.value;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SloCompositeBurnRateConditionList extends cdktf.ComplexList {
  public internalValue? : SloCompositeBurnRateCondition[] | cdktf.IResolvable

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
  public get(index: number): SloCompositeBurnRateConditionOutputReference {
    return new SloCompositeBurnRateConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloComposite {
  /**
  * The numeric target for your objective.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#target Slo#target}
  */
  readonly target: number;
  /**
  * burn_rate_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#burn_rate_condition Slo#burn_rate_condition}
  */
  readonly burnRateCondition?: SloCompositeBurnRateCondition[] | cdktf.IResolvable;
}

export function sloCompositeToTerraform(struct?: SloComposite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.numberToTerraform(struct!.target),
    burn_rate_condition: cdktf.listMapper(sloCompositeBurnRateConditionToTerraform, true)(struct!.burnRateCondition),
  }
}


export function sloCompositeToHclTerraform(struct?: SloComposite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burn_rate_condition: {
      value: cdktf.listMapperHcl(sloCompositeBurnRateConditionToHclTerraform, true)(struct!.burnRateCondition),
      isBlock: true,
      type: "set",
      storageClassType: "SloCompositeBurnRateConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloCompositeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloComposite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._burnRateCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.burnRateCondition = this._burnRateCondition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloComposite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target = undefined;
      this._burnRateCondition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target = value.target;
      this._burnRateCondition.internalValue = value.burnRateCondition;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // burn_rate_condition - computed: false, optional: true, required: false
  private _burnRateCondition = new SloCompositeBurnRateConditionList(this, "burn_rate_condition", true);
  public get burnRateCondition() {
    return this._burnRateCondition;
  }
  public putBurnRateCondition(value: SloCompositeBurnRateCondition[] | cdktf.IResolvable) {
    this._burnRateCondition.internalValue = value;
  }
  public resetBurnRateCondition() {
    this._burnRateCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burnRateConditionInput() {
    return this._burnRateCondition.internalValue;
  }
}

export class SloCompositeList extends cdktf.ComplexList {
  public internalValue? : SloComposite[] | cdktf.IResolvable

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
  public get(index: number): SloCompositeOutputReference {
    return new SloCompositeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloIndicator {
  /**
  * Kind of the metric source. One of {Agent, Direct}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#kind Slo#kind}
  */
  readonly kind?: string;
  /**
  * Name of the metric source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Name of the metric source project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project Slo#project}
  */
  readonly project?: string;
}

export function sloIndicatorToTerraform(struct?: SloIndicator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function sloIndicatorToHclTerraform(struct?: SloIndicator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloIndicatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloIndicator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloIndicator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._name = value.name;
      this._project = value.project;
    }
  }

  // kind - computed: true, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}

export class SloIndicatorList extends cdktf.ComplexList {
  public internalValue? : SloIndicator[] | cdktf.IResolvable

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
  public get(index: number): SloIndicatorOutputReference {
    return new SloIndicatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloLabel {
  /**
  * A key for the label, unique within the associated resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#key Slo#key}
  */
  readonly key: string;
  /**
  * A set of values for a single key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#values Slo#values}
  */
  readonly values: string[];
}

export function sloLabelToTerraform(struct?: SloLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function sloLabelToHclTerraform(struct?: SloLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SloLabelList extends cdktf.ComplexList {
  public internalValue? : SloLabel[] | cdktf.IResolvable

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
  public get(index: number): SloLabelOutputReference {
    return new SloLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCompositeComponentsObjectivesCompositeObjective {
  /**
  * SLO objective name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#objective Slo#objective}
  */
  readonly objective: string;
  /**
  * Project name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project Slo#project}
  */
  readonly project: string;
  /**
  * SLO name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#slo Slo#slo}
  */
  readonly slo: string;
  /**
  * Weights determine each component's contribution to the composite SLO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#weight Slo#weight}
  */
  readonly weight: number;
  /**
  * Defines how to treat missing component data on `max_delay` expiry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#when_delayed Slo#when_delayed}
  */
  readonly whenDelayed: string;
}

export function sloObjectiveCompositeComponentsObjectivesCompositeObjectiveToTerraform(struct?: SloObjectiveCompositeComponentsObjectivesCompositeObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objective: cdktf.stringToTerraform(struct!.objective),
    project: cdktf.stringToTerraform(struct!.project),
    slo: cdktf.stringToTerraform(struct!.slo),
    weight: cdktf.numberToTerraform(struct!.weight),
    when_delayed: cdktf.stringToTerraform(struct!.whenDelayed),
  }
}


export function sloObjectiveCompositeComponentsObjectivesCompositeObjectiveToHclTerraform(struct?: SloObjectiveCompositeComponentsObjectivesCompositeObjective | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objective: {
      value: cdktf.stringToHclTerraform(struct!.objective),
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
    slo: {
      value: cdktf.stringToHclTerraform(struct!.slo),
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
    when_delayed: {
      value: cdktf.stringToHclTerraform(struct!.whenDelayed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCompositeComponentsObjectivesCompositeObjectiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCompositeComponentsObjectivesCompositeObjective | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objective !== undefined) {
      hasAnyValues = true;
      internalValueResult.objective = this._objective;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._slo !== undefined) {
      hasAnyValues = true;
      internalValueResult.slo = this._slo;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._whenDelayed !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenDelayed = this._whenDelayed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCompositeComponentsObjectivesCompositeObjective | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objective = undefined;
      this._project = undefined;
      this._slo = undefined;
      this._weight = undefined;
      this._whenDelayed = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objective = value.objective;
      this._project = value.project;
      this._slo = value.slo;
      this._weight = value.weight;
      this._whenDelayed = value.whenDelayed;
    }
  }

  // objective - computed: false, optional: false, required: true
  private _objective?: string; 
  public get objective() {
    return this.getStringAttribute('objective');
  }
  public set objective(value: string) {
    this._objective = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectiveInput() {
    return this._objective;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // slo - computed: false, optional: false, required: true
  private _slo?: string; 
  public get slo() {
    return this.getStringAttribute('slo');
  }
  public set slo(value: string) {
    this._slo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloInput() {
    return this._slo;
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

  // when_delayed - computed: false, optional: false, required: true
  private _whenDelayed?: string; 
  public get whenDelayed() {
    return this.getStringAttribute('when_delayed');
  }
  public set whenDelayed(value: string) {
    this._whenDelayed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenDelayedInput() {
    return this._whenDelayed;
  }
}

export class SloObjectiveCompositeComponentsObjectivesCompositeObjectiveList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCompositeComponentsObjectivesCompositeObjective[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCompositeComponentsObjectivesCompositeObjectiveOutputReference {
    return new SloObjectiveCompositeComponentsObjectivesCompositeObjectiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCompositeComponentsObjectives {
  /**
  * composite_objective block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#composite_objective Slo#composite_objective}
  */
  readonly compositeObjective?: SloObjectiveCompositeComponentsObjectivesCompositeObjective[] | cdktf.IResolvable;
}

export function sloObjectiveCompositeComponentsObjectivesToTerraform(struct?: SloObjectiveCompositeComponentsObjectives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    composite_objective: cdktf.listMapper(sloObjectiveCompositeComponentsObjectivesCompositeObjectiveToTerraform, true)(struct!.compositeObjective),
  }
}


export function sloObjectiveCompositeComponentsObjectivesToHclTerraform(struct?: SloObjectiveCompositeComponentsObjectives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    composite_objective: {
      value: cdktf.listMapperHcl(sloObjectiveCompositeComponentsObjectivesCompositeObjectiveToHclTerraform, true)(struct!.compositeObjective),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCompositeComponentsObjectivesCompositeObjectiveList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCompositeComponentsObjectivesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCompositeComponentsObjectives | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compositeObjective?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compositeObjective = this._compositeObjective?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCompositeComponentsObjectives | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compositeObjective.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compositeObjective.internalValue = value.compositeObjective;
    }
  }

  // composite_objective - computed: false, optional: true, required: false
  private _compositeObjective = new SloObjectiveCompositeComponentsObjectivesCompositeObjectiveList(this, "composite_objective", false);
  public get compositeObjective() {
    return this._compositeObjective;
  }
  public putCompositeObjective(value: SloObjectiveCompositeComponentsObjectivesCompositeObjective[] | cdktf.IResolvable) {
    this._compositeObjective.internalValue = value;
  }
  public resetCompositeObjective() {
    this._compositeObjective.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeObjectiveInput() {
    return this._compositeObjective.internalValue;
  }
}

export class SloObjectiveCompositeComponentsObjectivesList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCompositeComponentsObjectives[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCompositeComponentsObjectivesOutputReference {
    return new SloObjectiveCompositeComponentsObjectivesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCompositeComponents {
  /**
  * objectives block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#objectives Slo#objectives}
  */
  readonly objectives?: SloObjectiveCompositeComponentsObjectives[] | cdktf.IResolvable;
}

export function sloObjectiveCompositeComponentsToTerraform(struct?: SloObjectiveCompositeComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    objectives: cdktf.listMapper(sloObjectiveCompositeComponentsObjectivesToTerraform, true)(struct!.objectives),
  }
}


export function sloObjectiveCompositeComponentsToHclTerraform(struct?: SloObjectiveCompositeComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    objectives: {
      value: cdktf.listMapperHcl(sloObjectiveCompositeComponentsObjectivesToHclTerraform, true)(struct!.objectives),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCompositeComponentsObjectivesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCompositeComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCompositeComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectives?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectives = this._objectives?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCompositeComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectives.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectives.internalValue = value.objectives;
    }
  }

  // objectives - computed: false, optional: true, required: false
  private _objectives = new SloObjectiveCompositeComponentsObjectivesList(this, "objectives", false);
  public get objectives() {
    return this._objectives;
  }
  public putObjectives(value: SloObjectiveCompositeComponentsObjectives[] | cdktf.IResolvable) {
    this._objectives.internalValue = value;
  }
  public resetObjectives() {
    this._objectives.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectivesInput() {
    return this._objectives.internalValue;
  }
}

export class SloObjectiveCompositeComponentsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCompositeComponents[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCompositeComponentsOutputReference {
    return new SloObjectiveCompositeComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveComposite {
  /**
  * Maximum time for your composite SLO to wait for data from objectives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#max_delay Slo#max_delay}
  */
  readonly maxDelay: string;
  /**
  * components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#components Slo#components}
  */
  readonly components?: SloObjectiveCompositeComponents[] | cdktf.IResolvable;
}

export function sloObjectiveCompositeToTerraform(struct?: SloObjectiveComposite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_delay: cdktf.stringToTerraform(struct!.maxDelay),
    components: cdktf.listMapper(sloObjectiveCompositeComponentsToTerraform, true)(struct!.components),
  }
}


export function sloObjectiveCompositeToHclTerraform(struct?: SloObjectiveComposite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_delay: {
      value: cdktf.stringToHclTerraform(struct!.maxDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    components: {
      value: cdktf.listMapperHcl(sloObjectiveCompositeComponentsToHclTerraform, true)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCompositeComponentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCompositeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveComposite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDelay = this._maxDelay;
    }
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveComposite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxDelay = undefined;
      this._components.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxDelay = value.maxDelay;
      this._components.internalValue = value.components;
    }
  }

  // max_delay - computed: false, optional: false, required: true
  private _maxDelay?: string; 
  public get maxDelay() {
    return this.getStringAttribute('max_delay');
  }
  public set maxDelay(value: string) {
    this._maxDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayInput() {
    return this._maxDelay;
  }

  // components - computed: false, optional: true, required: false
  private _components = new SloObjectiveCompositeComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: SloObjectiveCompositeComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }
}

export class SloObjectiveCompositeList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveComposite[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCompositeOutputReference {
    return new SloObjectiveCompositeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadAmazonPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsBadAmazonPrometheusToTerraform(struct?: SloObjectiveCountMetricsBadAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsBadAmazonPrometheusToHclTerraform(struct?: SloObjectiveCountMetricsBadAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadAmazonPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadAmazonPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadAmazonPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsBadAmazonPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadAmazonPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadAmazonPrometheusOutputReference {
    return new SloObjectiveCountMetricsBadAmazonPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadAppdynamics {
  /**
  * Name of the added application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#application_name Slo#application_name}
  */
  readonly applicationName: string;
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveCountMetricsBadAppdynamicsToTerraform(struct?: SloObjectiveCountMetricsBadAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveCountMetricsBadAppdynamicsToHclTerraform(struct?: SloObjectiveCountMetricsBadAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadAppdynamicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadAppdynamics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadAppdynamics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName = value.applicationName;
      this._metricPath = value.metricPath;
    }
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveCountMetricsBadAppdynamicsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadAppdynamics[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadAppdynamicsOutputReference {
    return new SloObjectiveCountMetricsBadAppdynamicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadAzureMonitorDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveCountMetricsBadAzureMonitorDimensionsToTerraform(struct?: SloObjectiveCountMetricsBadAzureMonitorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveCountMetricsBadAzureMonitorDimensionsToHclTerraform(struct?: SloObjectiveCountMetricsBadAzureMonitorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SloObjectiveCountMetricsBadAzureMonitorDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadAzureMonitorDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SloObjectiveCountMetricsBadAzureMonitorDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class SloObjectiveCountMetricsBadAzureMonitorDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadAzureMonitorDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadAzureMonitorDimensionsOutputReference {
    return new SloObjectiveCountMetricsBadAzureMonitorDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadAzureMonitorWorkspace {
  /**
  * Resource group of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#resource_group Slo#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Subscription ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#subscription_id Slo#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#workspace_id Slo#workspace_id}
  */
  readonly workspaceId: string;
}

export function sloObjectiveCountMetricsBadAzureMonitorWorkspaceToTerraform(struct?: SloObjectiveCountMetricsBadAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function sloObjectiveCountMetricsBadAzureMonitorWorkspaceToHclTerraform(struct?: SloObjectiveCountMetricsBadAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadAzureMonitorWorkspaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadAzureMonitorWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadAzureMonitorWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._workspaceId = value.workspaceId;
    }
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class SloObjectiveCountMetricsBadAzureMonitorWorkspaceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadAzureMonitorWorkspace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadAzureMonitorWorkspaceOutputReference {
    return new SloObjectiveCountMetricsBadAzureMonitorWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadAzureMonitor {
  /**
  * Aggregation type [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Specifies source: 'metrics' or 'logs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#data_type Slo#data_type}
  */
  readonly dataType: string;
  /**
  * Logs query in Kusto Query Language [Required for logs]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#kql_query Slo#kql_query}
  */
  readonly kqlQuery?: string;
  /**
  * Name of the metric [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric [Optional for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_namespace Slo#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Identifier of the Azure Cloud resource [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#resource_id Slo#resource_id}
  */
  readonly resourceId?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveCountMetricsBadAzureMonitorDimensions[] | cdktf.IResolvable;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#workspace Slo#workspace}
  */
  readonly workspace?: SloObjectiveCountMetricsBadAzureMonitorWorkspace[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsBadAzureMonitorToTerraform(struct?: SloObjectiveCountMetricsBadAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    kql_query: cdktf.stringToTerraform(struct!.kqlQuery),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    dimensions: cdktf.listMapper(sloObjectiveCountMetricsBadAzureMonitorDimensionsToTerraform, true)(struct!.dimensions),
    workspace: cdktf.listMapper(sloObjectiveCountMetricsBadAzureMonitorWorkspaceToTerraform, true)(struct!.workspace),
  }
}


export function sloObjectiveCountMetricsBadAzureMonitorToHclTerraform(struct?: SloObjectiveCountMetricsBadAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kql_query: {
      value: cdktf.stringToHclTerraform(struct!.kqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadAzureMonitorDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveCountMetricsBadAzureMonitorDimensionsList",
    },
    workspace: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadAzureMonitorWorkspaceToHclTerraform, true)(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadAzureMonitorWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadAzureMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadAzureMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._kqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.kqlQuery = this._kqlQuery;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadAzureMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._dataType = undefined;
      this._kqlQuery = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._resourceId = undefined;
      this._dimensions.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._dataType = value.dataType;
      this._kqlQuery = value.kqlQuery;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._resourceId = value.resourceId;
      this._dimensions.internalValue = value.dimensions;
      this._workspace.internalValue = value.workspace;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // kql_query - computed: false, optional: true, required: false
  private _kqlQuery?: string; 
  public get kqlQuery() {
    return this.getStringAttribute('kql_query');
  }
  public set kqlQuery(value: string) {
    this._kqlQuery = value;
  }
  public resetKqlQuery() {
    this._kqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kqlQueryInput() {
    return this._kqlQuery;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveCountMetricsBadAzureMonitorDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveCountMetricsBadAzureMonitorDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new SloObjectiveCountMetricsBadAzureMonitorWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: SloObjectiveCountMetricsBadAzureMonitorWorkspace[] | cdktf.IResolvable) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class SloObjectiveCountMetricsBadAzureMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadAzureMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadAzureMonitorOutputReference {
    return new SloObjectiveCountMetricsBadAzureMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadAzurePrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsBadAzurePrometheusToTerraform(struct?: SloObjectiveCountMetricsBadAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsBadAzurePrometheusToHclTerraform(struct?: SloObjectiveCountMetricsBadAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadAzurePrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadAzurePrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadAzurePrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsBadAzurePrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadAzurePrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadAzurePrometheusOutputReference {
    return new SloObjectiveCountMetricsBadAzurePrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadBigquery {
  /**
  * Location of you BigQuery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#location Slo#location}
  */
  readonly location: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsBadBigqueryToTerraform(struct?: SloObjectiveCountMetricsBadBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsBadBigqueryToHclTerraform(struct?: SloObjectiveCountMetricsBadBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadBigqueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadBigquery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadBigquery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._projectId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._projectId = value.projectId;
      this._query = value.query;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsBadBigqueryList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadBigquery[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadBigqueryOutputReference {
    return new SloObjectiveCountMetricsBadBigqueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadCloudwatchDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveCountMetricsBadCloudwatchDimensionsToTerraform(struct?: SloObjectiveCountMetricsBadCloudwatchDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveCountMetricsBadCloudwatchDimensionsToHclTerraform(struct?: SloObjectiveCountMetricsBadCloudwatchDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SloObjectiveCountMetricsBadCloudwatchDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadCloudwatchDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SloObjectiveCountMetricsBadCloudwatchDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class SloObjectiveCountMetricsBadCloudwatchDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadCloudwatchDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadCloudwatchDimensionsOutputReference {
    return new SloObjectiveCountMetricsBadCloudwatchDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadCloudwatch {
  /**
  * AccountID used with cross-account observability feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#account_id Slo#account_id}
  */
  readonly accountId?: string;
  /**
  * JSON query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#json Slo#json}
  */
  readonly json?: string;
  /**
  * Metric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#namespace Slo#namespace}
  */
  readonly namespace?: string;
  /**
  * Region of the CloudWatch instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
  /**
  * SQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#sql Slo#sql}
  */
  readonly sql?: string;
  /**
  * Metric data aggregations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#stat Slo#stat}
  */
  readonly stat?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveCountMetricsBadCloudwatchDimensions[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsBadCloudwatchToTerraform(struct?: SloObjectiveCountMetricsBadCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    json: cdktf.stringToTerraform(struct!.json),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
    sql: cdktf.stringToTerraform(struct!.sql),
    stat: cdktf.stringToTerraform(struct!.stat),
    dimensions: cdktf.listMapper(sloObjectiveCountMetricsBadCloudwatchDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function sloObjectiveCountMetricsBadCloudwatchToHclTerraform(struct?: SloObjectiveCountMetricsBadCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    sql: {
      value: cdktf.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadCloudwatchDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveCountMetricsBadCloudwatchDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadCloudwatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadCloudwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadCloudwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._json = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._region = undefined;
      this._sql = undefined;
      this._stat = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._json = value.json;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._region = value.region;
      this._sql = value.sql;
      this._stat = value.stat;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // json - computed: false, optional: true, required: false
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

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sql - computed: false, optional: true, required: false
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  public resetSql() {
    this._sql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // stat - computed: false, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveCountMetricsBadCloudwatchDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveCountMetricsBadCloudwatchDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class SloObjectiveCountMetricsBadCloudwatchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadCloudwatch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadCloudwatchOutputReference {
    return new SloObjectiveCountMetricsBadCloudwatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadCoralogix {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsBadCoralogixToTerraform(struct?: SloObjectiveCountMetricsBadCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsBadCoralogixToHclTerraform(struct?: SloObjectiveCountMetricsBadCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadCoralogixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadCoralogix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadCoralogix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsBadCoralogixList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadCoralogix[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadCoralogixOutputReference {
    return new SloObjectiveCountMetricsBadCoralogixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadDatadog {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsBadDatadogToTerraform(struct?: SloObjectiveCountMetricsBadDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsBadDatadogToHclTerraform(struct?: SloObjectiveCountMetricsBadDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadDatadogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsBadDatadogList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadDatadog[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadDatadogOutputReference {
    return new SloObjectiveCountMetricsBadDatadogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadDynatrace {
  /**
  * Selector for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_selector Slo#metric_selector}
  */
  readonly metricSelector: string;
}

export function sloObjectiveCountMetricsBadDynatraceToTerraform(struct?: SloObjectiveCountMetricsBadDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_selector: cdktf.stringToTerraform(struct!.metricSelector),
  }
}


export function sloObjectiveCountMetricsBadDynatraceToHclTerraform(struct?: SloObjectiveCountMetricsBadDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_selector: {
      value: cdktf.stringToHclTerraform(struct!.metricSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadDynatraceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadDynatrace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSelector = this._metricSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadDynatrace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricSelector = value.metricSelector;
    }
  }

  // metric_selector - computed: false, optional: false, required: true
  private _metricSelector?: string; 
  public get metricSelector() {
    return this.getStringAttribute('metric_selector');
  }
  public set metricSelector(value: string) {
    this._metricSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector;
  }
}

export class SloObjectiveCountMetricsBadDynatraceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadDynatrace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadDynatraceOutputReference {
    return new SloObjectiveCountMetricsBadDynatraceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadElasticsearch {
  /**
  * Index of metrics we want to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#index Slo#index}
  */
  readonly index: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsBadElasticsearchToTerraform(struct?: SloObjectiveCountMetricsBadElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsBadElasticsearchToHclTerraform(struct?: SloObjectiveCountMetricsBadElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._query = value.query;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsBadElasticsearchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadElasticsearchOutputReference {
    return new SloObjectiveCountMetricsBadElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadGcm {
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics in PromQL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql?: string;
  /**
  * Query for the metrics in MQL format [deprecated](https://cloud.google.com/stackdriver/docs/deprecations/mql)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
}

export function sloObjectiveCountMetricsBadGcmToTerraform(struct?: SloObjectiveCountMetricsBadGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    promql: cdktf.stringToTerraform(struct!.promql),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsBadGcmToHclTerraform(struct?: SloObjectiveCountMetricsBadGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadGcmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadGcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadGcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._promql = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._promql = value.promql;
      this._query = value.query;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // promql - computed: false, optional: true, required: false
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  public resetPromql() {
    this._promql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsBadGcmList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadGcm[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadGcmOutputReference {
    return new SloObjectiveCountMetricsBadGcmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadGrafanaLoki {
  /**
  * Query for the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#logql Slo#logql}
  */
  readonly logql: string;
}

export function sloObjectiveCountMetricsBadGrafanaLokiToTerraform(struct?: SloObjectiveCountMetricsBadGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logql: cdktf.stringToTerraform(struct!.logql),
  }
}


export function sloObjectiveCountMetricsBadGrafanaLokiToHclTerraform(struct?: SloObjectiveCountMetricsBadGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logql: {
      value: cdktf.stringToHclTerraform(struct!.logql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadGrafanaLokiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadGrafanaLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logql !== undefined) {
      hasAnyValues = true;
      internalValueResult.logql = this._logql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadGrafanaLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logql = value.logql;
    }
  }

  // logql - computed: false, optional: false, required: true
  private _logql?: string; 
  public get logql() {
    return this.getStringAttribute('logql');
  }
  public set logql(value: string) {
    this._logql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logqlInput() {
    return this._logql;
  }
}

export class SloObjectiveCountMetricsBadGrafanaLokiList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadGrafanaLoki[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadGrafanaLokiOutputReference {
    return new SloObjectiveCountMetricsBadGrafanaLokiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadGraphite {
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveCountMetricsBadGraphiteToTerraform(struct?: SloObjectiveCountMetricsBadGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveCountMetricsBadGraphiteToHclTerraform(struct?: SloObjectiveCountMetricsBadGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadGraphiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadGraphite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadGraphite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPath = value.metricPath;
    }
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveCountMetricsBadGraphiteList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadGraphite[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadGraphiteOutputReference {
    return new SloObjectiveCountMetricsBadGraphiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadHoneycomb {
  /**
  * Column name - required for all calculation types besides 'CONCURRENCY' and 'COUNT'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#attribute Slo#attribute}
  */
  readonly attribute?: string;
}

export function sloObjectiveCountMetricsBadHoneycombToTerraform(struct?: SloObjectiveCountMetricsBadHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
  }
}


export function sloObjectiveCountMetricsBadHoneycombToHclTerraform(struct?: SloObjectiveCountMetricsBadHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadHoneycombOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadHoneycomb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadHoneycomb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class SloObjectiveCountMetricsBadHoneycombList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadHoneycomb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadHoneycombOutputReference {
    return new SloObjectiveCountMetricsBadHoneycombOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadInfluxdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsBadInfluxdbToTerraform(struct?: SloObjectiveCountMetricsBadInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsBadInfluxdbToHclTerraform(struct?: SloObjectiveCountMetricsBadInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadInfluxdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadInfluxdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadInfluxdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsBadInfluxdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadInfluxdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadInfluxdbOutputReference {
    return new SloObjectiveCountMetricsBadInfluxdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadInstanaApplicationGroupBy {
  /**
  * Group by tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag Slo#tag}
  */
  readonly tag: string;
  /**
  * Tag entity - one of 'DESTINATION', 'SOURCE', 'NOT_APPLICABLE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag_entity Slo#tag_entity}
  */
  readonly tagEntity: string;
  /**
  * Second level key for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag_second_level_key Slo#tag_second_level_key}
  */
  readonly tagSecondLevelKey?: string;
}

export function sloObjectiveCountMetricsBadInstanaApplicationGroupByToTerraform(struct?: SloObjectiveCountMetricsBadInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    tag_entity: cdktf.stringToTerraform(struct!.tagEntity),
    tag_second_level_key: cdktf.stringToTerraform(struct!.tagSecondLevelKey),
  }
}


export function sloObjectiveCountMetricsBadInstanaApplicationGroupByToHclTerraform(struct?: SloObjectiveCountMetricsBadInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_entity: {
      value: cdktf.stringToHclTerraform(struct!.tagEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_second_level_key: {
      value: cdktf.stringToHclTerraform(struct!.tagSecondLevelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadInstanaApplicationGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadInstanaApplicationGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagEntity = this._tagEntity;
    }
    if (this._tagSecondLevelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSecondLevelKey = this._tagSecondLevelKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadInstanaApplicationGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
      this._tagEntity = undefined;
      this._tagSecondLevelKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
      this._tagEntity = value.tagEntity;
      this._tagSecondLevelKey = value.tagSecondLevelKey;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_entity - computed: false, optional: false, required: true
  private _tagEntity?: string; 
  public get tagEntity() {
    return this.getStringAttribute('tag_entity');
  }
  public set tagEntity(value: string) {
    this._tagEntity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagEntityInput() {
    return this._tagEntity;
  }

  // tag_second_level_key - computed: false, optional: true, required: false
  private _tagSecondLevelKey?: string; 
  public get tagSecondLevelKey() {
    return this.getStringAttribute('tag_second_level_key');
  }
  public set tagSecondLevelKey(value: string) {
    this._tagSecondLevelKey = value;
  }
  public resetTagSecondLevelKey() {
    this._tagSecondLevelKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSecondLevelKeyInput() {
    return this._tagSecondLevelKey;
  }
}

export class SloObjectiveCountMetricsBadInstanaApplicationGroupByList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadInstanaApplicationGroupBy[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadInstanaApplicationGroupByOutputReference {
    return new SloObjectiveCountMetricsBadInstanaApplicationGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadInstanaApplication {
  /**
  * Depends on the value specified for 'metric_id'- more info in N9 docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation: string;
  /**
  * API query user passes in a JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#api_query Slo#api_query}
  */
  readonly apiQuery: string;
  /**
  * Include internal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#include_internal Slo#include_internal}
  */
  readonly includeInternal?: boolean | cdktf.IResolvable;
  /**
  * Include synthetic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#include_synthetic Slo#include_synthetic}
  */
  readonly includeSynthetic?: boolean | cdktf.IResolvable;
  /**
  * Metric ID one of 'calls', 'erroneousCalls', 'errors', 'latency'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#group_by Slo#group_by}
  */
  readonly groupBy?: SloObjectiveCountMetricsBadInstanaApplicationGroupBy[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsBadInstanaApplicationToTerraform(struct?: SloObjectiveCountMetricsBadInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    api_query: cdktf.stringToTerraform(struct!.apiQuery),
    include_internal: cdktf.booleanToTerraform(struct!.includeInternal),
    include_synthetic: cdktf.booleanToTerraform(struct!.includeSynthetic),
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    group_by: cdktf.listMapper(sloObjectiveCountMetricsBadInstanaApplicationGroupByToTerraform, true)(struct!.groupBy),
  }
}


export function sloObjectiveCountMetricsBadInstanaApplicationToHclTerraform(struct?: SloObjectiveCountMetricsBadInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_query: {
      value: cdktf.stringToHclTerraform(struct!.apiQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_internal: {
      value: cdktf.booleanToHclTerraform(struct!.includeInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_synthetic: {
      value: cdktf.booleanToHclTerraform(struct!.includeSynthetic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadInstanaApplicationGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadInstanaApplicationGroupByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadInstanaApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadInstanaApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._apiQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiQuery = this._apiQuery;
    }
    if (this._includeInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInternal = this._includeInternal;
    }
    if (this._includeSynthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSynthetic = this._includeSynthetic;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadInstanaApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._apiQuery = undefined;
      this._includeInternal = undefined;
      this._includeSynthetic = undefined;
      this._metricId = undefined;
      this._groupBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._apiQuery = value.apiQuery;
      this._includeInternal = value.includeInternal;
      this._includeSynthetic = value.includeSynthetic;
      this._metricId = value.metricId;
      this._groupBy.internalValue = value.groupBy;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // api_query - computed: false, optional: false, required: true
  private _apiQuery?: string; 
  public get apiQuery() {
    return this.getStringAttribute('api_query');
  }
  public set apiQuery(value: string) {
    this._apiQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiQueryInput() {
    return this._apiQuery;
  }

  // include_internal - computed: false, optional: true, required: false
  private _includeInternal?: boolean | cdktf.IResolvable; 
  public get includeInternal() {
    return this.getBooleanAttribute('include_internal');
  }
  public set includeInternal(value: boolean | cdktf.IResolvable) {
    this._includeInternal = value;
  }
  public resetIncludeInternal() {
    this._includeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInternalInput() {
    return this._includeInternal;
  }

  // include_synthetic - computed: false, optional: true, required: false
  private _includeSynthetic?: boolean | cdktf.IResolvable; 
  public get includeSynthetic() {
    return this.getBooleanAttribute('include_synthetic');
  }
  public set includeSynthetic(value: boolean | cdktf.IResolvable) {
    this._includeSynthetic = value;
  }
  public resetIncludeSynthetic() {
    this._includeSynthetic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSyntheticInput() {
    return this._includeSynthetic;
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new SloObjectiveCountMetricsBadInstanaApplicationGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: SloObjectiveCountMetricsBadInstanaApplicationGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }
}

export class SloObjectiveCountMetricsBadInstanaApplicationList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadInstanaApplication[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadInstanaApplicationOutputReference {
    return new SloObjectiveCountMetricsBadInstanaApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadInstanaInfrastructure {
  /**
  * Metric ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * Metric retrieval method 'query' or 'snapshot'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_retrieval_method Slo#metric_retrieval_method}
  */
  readonly metricRetrievalMethod: string;
  /**
  * Plugin ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#plugin_id Slo#plugin_id}
  */
  readonly pluginId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
  /**
  * Snapshot ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#snapshot_id Slo#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function sloObjectiveCountMetricsBadInstanaInfrastructureToTerraform(struct?: SloObjectiveCountMetricsBadInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    metric_retrieval_method: cdktf.stringToTerraform(struct!.metricRetrievalMethod),
    plugin_id: cdktf.stringToTerraform(struct!.pluginId),
    query: cdktf.stringToTerraform(struct!.query),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function sloObjectiveCountMetricsBadInstanaInfrastructureToHclTerraform(struct?: SloObjectiveCountMetricsBadInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_retrieval_method: {
      value: cdktf.stringToHclTerraform(struct!.metricRetrievalMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_id: {
      value: cdktf.stringToHclTerraform(struct!.pluginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadInstanaInfrastructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadInstanaInfrastructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._metricRetrievalMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRetrievalMethod = this._metricRetrievalMethod;
    }
    if (this._pluginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginId = this._pluginId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadInstanaInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricId = undefined;
      this._metricRetrievalMethod = undefined;
      this._pluginId = undefined;
      this._query = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricId = value.metricId;
      this._metricRetrievalMethod = value.metricRetrievalMethod;
      this._pluginId = value.pluginId;
      this._query = value.query;
      this._snapshotId = value.snapshotId;
    }
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // metric_retrieval_method - computed: false, optional: false, required: true
  private _metricRetrievalMethod?: string; 
  public get metricRetrievalMethod() {
    return this.getStringAttribute('metric_retrieval_method');
  }
  public set metricRetrievalMethod(value: string) {
    this._metricRetrievalMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRetrievalMethodInput() {
    return this._metricRetrievalMethod;
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class SloObjectiveCountMetricsBadInstanaInfrastructureList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadInstanaInfrastructure[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadInstanaInfrastructureOutputReference {
    return new SloObjectiveCountMetricsBadInstanaInfrastructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadInstana {
  /**
  * Instana metric type 'application' or 'infrastructure'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_type Slo#metric_type}
  */
  readonly metricType: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#application Slo#application}
  */
  readonly application?: SloObjectiveCountMetricsBadInstanaApplication[] | cdktf.IResolvable;
  /**
  * infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#infrastructure Slo#infrastructure}
  */
  readonly infrastructure?: SloObjectiveCountMetricsBadInstanaInfrastructure[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsBadInstanaToTerraform(struct?: SloObjectiveCountMetricsBadInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    application: cdktf.listMapper(sloObjectiveCountMetricsBadInstanaApplicationToTerraform, true)(struct!.application),
    infrastructure: cdktf.listMapper(sloObjectiveCountMetricsBadInstanaInfrastructureToTerraform, true)(struct!.infrastructure),
  }
}


export function sloObjectiveCountMetricsBadInstanaToHclTerraform(struct?: SloObjectiveCountMetricsBadInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadInstanaApplicationToHclTerraform, true)(struct!.application),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadInstanaApplicationList",
    },
    infrastructure: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadInstanaInfrastructureToHclTerraform, true)(struct!.infrastructure),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadInstanaInfrastructureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadInstanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadInstana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadInstana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricType = undefined;
      this._application.internalValue = undefined;
      this._infrastructure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricType = value.metricType;
      this._application.internalValue = value.application;
      this._infrastructure.internalValue = value.infrastructure;
    }
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // application - computed: false, optional: true, required: false
  private _application = new SloObjectiveCountMetricsBadInstanaApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }
  public putApplication(value: SloObjectiveCountMetricsBadInstanaApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // infrastructure - computed: false, optional: true, required: false
  private _infrastructure = new SloObjectiveCountMetricsBadInstanaInfrastructureList(this, "infrastructure", false);
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: SloObjectiveCountMetricsBadInstanaInfrastructure[] | cdktf.IResolvable) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }
}

export class SloObjectiveCountMetricsBadInstanaList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadInstana[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadInstanaOutputReference {
    return new SloObjectiveCountMetricsBadInstanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadLightstep {
  /**
  * Optional value to filter by percentiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#percentile Slo#percentile}
  */
  readonly percentile?: number;
  /**
  * ID of the metrics stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#stream_id Slo#stream_id}
  */
  readonly streamId?: string;
  /**
  * Type of data to filter by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#type_of_data Slo#type_of_data}
  */
  readonly typeOfData: string;
  /**
  * UQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#uql Slo#uql}
  */
  readonly uql?: string;
}

export function sloObjectiveCountMetricsBadLightstepToTerraform(struct?: SloObjectiveCountMetricsBadLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile: cdktf.numberToTerraform(struct!.percentile),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    type_of_data: cdktf.stringToTerraform(struct!.typeOfData),
    uql: cdktf.stringToTerraform(struct!.uql),
  }
}


export function sloObjectiveCountMetricsBadLightstepToHclTerraform(struct?: SloObjectiveCountMetricsBadLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_of_data: {
      value: cdktf.stringToHclTerraform(struct!.typeOfData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uql: {
      value: cdktf.stringToHclTerraform(struct!.uql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadLightstepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadLightstep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._typeOfData !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOfData = this._typeOfData;
    }
    if (this._uql !== undefined) {
      hasAnyValues = true;
      internalValueResult.uql = this._uql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadLightstep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentile = undefined;
      this._streamId = undefined;
      this._typeOfData = undefined;
      this._uql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentile = value.percentile;
      this._streamId = value.streamId;
      this._typeOfData = value.typeOfData;
      this._uql = value.uql;
    }
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // stream_id - computed: false, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // type_of_data - computed: false, optional: false, required: true
  private _typeOfData?: string; 
  public get typeOfData() {
    return this.getStringAttribute('type_of_data');
  }
  public set typeOfData(value: string) {
    this._typeOfData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfDataInput() {
    return this._typeOfData;
  }

  // uql - computed: false, optional: true, required: false
  private _uql?: string; 
  public get uql() {
    return this.getStringAttribute('uql');
  }
  public set uql(value: string) {
    this._uql = value;
  }
  public resetUql() {
    this._uql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uqlInput() {
    return this._uql;
  }
}

export class SloObjectiveCountMetricsBadLightstepList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadLightstep[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadLightstepOutputReference {
    return new SloObjectiveCountMetricsBadLightstepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadLogicMonitor {
  /**
  * Checkpoint ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#checkpoint_id Slo#checkpoint_id}
  */
  readonly checkpointId?: string;
  /**
  * Device Datasource Instance ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#device_data_source_instance_id Slo#device_data_source_instance_id}
  */
  readonly deviceDataSourceInstanceId?: number;
  /**
  * Graph ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#graph_id Slo#graph_id}
  */
  readonly graphId?: number;
  /**
  * Graph Name. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#graph_name Slo#graph_name}
  */
  readonly graphName?: string;
  /**
  * Line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#line Slo#line}
  */
  readonly line: string;
  /**
  * Query type: device_metrics or website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query_type Slo#query_type}
  */
  readonly queryType: string;
  /**
  * Website ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#website_id Slo#website_id}
  */
  readonly websiteId?: string;
}

export function sloObjectiveCountMetricsBadLogicMonitorToTerraform(struct?: SloObjectiveCountMetricsBadLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkpoint_id: cdktf.stringToTerraform(struct!.checkpointId),
    device_data_source_instance_id: cdktf.numberToTerraform(struct!.deviceDataSourceInstanceId),
    graph_id: cdktf.numberToTerraform(struct!.graphId),
    graph_name: cdktf.stringToTerraform(struct!.graphName),
    line: cdktf.stringToTerraform(struct!.line),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    website_id: cdktf.stringToTerraform(struct!.websiteId),
  }
}


export function sloObjectiveCountMetricsBadLogicMonitorToHclTerraform(struct?: SloObjectiveCountMetricsBadLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.checkpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_data_source_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceDataSourceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_id: {
      value: cdktf.numberToHclTerraform(struct!.graphId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_name: {
      value: cdktf.stringToHclTerraform(struct!.graphName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line: {
      value: cdktf.stringToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website_id: {
      value: cdktf.stringToHclTerraform(struct!.websiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadLogicMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadLogicMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointId = this._checkpointId;
    }
    if (this._deviceDataSourceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDataSourceInstanceId = this._deviceDataSourceInstanceId;
    }
    if (this._graphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphId = this._graphId;
    }
    if (this._graphName !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphName = this._graphName;
    }
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._websiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteId = this._websiteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadLogicMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkpointId = undefined;
      this._deviceDataSourceInstanceId = undefined;
      this._graphId = undefined;
      this._graphName = undefined;
      this._line = undefined;
      this._queryType = undefined;
      this._websiteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkpointId = value.checkpointId;
      this._deviceDataSourceInstanceId = value.deviceDataSourceInstanceId;
      this._graphId = value.graphId;
      this._graphName = value.graphName;
      this._line = value.line;
      this._queryType = value.queryType;
      this._websiteId = value.websiteId;
    }
  }

  // checkpoint_id - computed: false, optional: true, required: false
  private _checkpointId?: string; 
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }
  public set checkpointId(value: string) {
    this._checkpointId = value;
  }
  public resetCheckpointId() {
    this._checkpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointIdInput() {
    return this._checkpointId;
  }

  // device_data_source_instance_id - computed: false, optional: true, required: false
  private _deviceDataSourceInstanceId?: number; 
  public get deviceDataSourceInstanceId() {
    return this.getNumberAttribute('device_data_source_instance_id');
  }
  public set deviceDataSourceInstanceId(value: number) {
    this._deviceDataSourceInstanceId = value;
  }
  public resetDeviceDataSourceInstanceId() {
    this._deviceDataSourceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDataSourceInstanceIdInput() {
    return this._deviceDataSourceInstanceId;
  }

  // graph_id - computed: false, optional: true, required: false
  private _graphId?: number; 
  public get graphId() {
    return this.getNumberAttribute('graph_id');
  }
  public set graphId(value: number) {
    this._graphId = value;
  }
  public resetGraphId() {
    this._graphId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphIdInput() {
    return this._graphId;
  }

  // graph_name - computed: false, optional: true, required: false
  private _graphName?: string; 
  public get graphName() {
    return this.getStringAttribute('graph_name');
  }
  public set graphName(value: string) {
    this._graphName = value;
  }
  public resetGraphName() {
    this._graphName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameInput() {
    return this._graphName;
  }

  // line - computed: false, optional: false, required: true
  private _line?: string; 
  public get line() {
    return this.getStringAttribute('line');
  }
  public set line(value: string) {
    this._line = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // website_id - computed: false, optional: true, required: false
  private _websiteId?: string; 
  public get websiteId() {
    return this.getStringAttribute('website_id');
  }
  public set websiteId(value: string) {
    this._websiteId = value;
  }
  public resetWebsiteId() {
    this._websiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteIdInput() {
    return this._websiteId;
  }
}

export class SloObjectiveCountMetricsBadLogicMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadLogicMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadLogicMonitorOutputReference {
    return new SloObjectiveCountMetricsBadLogicMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadNewrelic {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#nrql Slo#nrql}
  */
  readonly nrql: string;
}

export function sloObjectiveCountMetricsBadNewrelicToTerraform(struct?: SloObjectiveCountMetricsBadNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nrql: cdktf.stringToTerraform(struct!.nrql),
  }
}


export function sloObjectiveCountMetricsBadNewrelicToHclTerraform(struct?: SloObjectiveCountMetricsBadNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nrql: {
      value: cdktf.stringToHclTerraform(struct!.nrql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadNewrelicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadNewrelic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nrql !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrql = this._nrql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadNewrelic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nrql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nrql = value.nrql;
    }
  }

  // nrql - computed: false, optional: false, required: true
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }
}

export class SloObjectiveCountMetricsBadNewrelicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadNewrelic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadNewrelicOutputReference {
    return new SloObjectiveCountMetricsBadNewrelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadOpentsdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsBadOpentsdbToTerraform(struct?: SloObjectiveCountMetricsBadOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsBadOpentsdbToHclTerraform(struct?: SloObjectiveCountMetricsBadOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadOpentsdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadOpentsdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadOpentsdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsBadOpentsdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadOpentsdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadOpentsdbOutputReference {
    return new SloObjectiveCountMetricsBadOpentsdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadPingdom {
  /**
  * Pingdom uptime or transaction check's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#check_id Slo#check_id}
  */
  readonly checkId: string;
  /**
  * Pingdom check type - uptime or transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#check_type Slo#check_type}
  */
  readonly checkType?: string;
  /**
  * Optional for the Uptime checks. Use it to filter the Pingdom check results by status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#status Slo#status}
  */
  readonly status?: string;
}

export function sloObjectiveCountMetricsBadPingdomToTerraform(struct?: SloObjectiveCountMetricsBadPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_id: cdktf.stringToTerraform(struct!.checkId),
    check_type: cdktf.stringToTerraform(struct!.checkType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sloObjectiveCountMetricsBadPingdomToHclTerraform(struct?: SloObjectiveCountMetricsBadPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_id: {
      value: cdktf.stringToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_type: {
      value: cdktf.stringToHclTerraform(struct!.checkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadPingdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadPingdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._checkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkType = this._checkType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadPingdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkId = undefined;
      this._checkType = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkId = value.checkId;
      this._checkType = value.checkType;
      this._status = value.status;
    }
  }

  // check_id - computed: false, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // check_type - computed: false, optional: true, required: false
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // status - computed: false, optional: true, required: false
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
}

export class SloObjectiveCountMetricsBadPingdomList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadPingdom[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadPingdomOutputReference {
    return new SloObjectiveCountMetricsBadPingdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsBadPrometheusToTerraform(struct?: SloObjectiveCountMetricsBadPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsBadPrometheusToHclTerraform(struct?: SloObjectiveCountMetricsBadPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsBadPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadPrometheusOutputReference {
    return new SloObjectiveCountMetricsBadPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadRedshift {
  /**
  * Redshift custer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#cluster_id Slo#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#database_name Slo#database_name}
  */
  readonly databaseName: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Region of the Redshift instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
}

export function sloObjectiveCountMetricsBadRedshiftToTerraform(struct?: SloObjectiveCountMetricsBadRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    query: cdktf.stringToTerraform(struct!.query),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function sloObjectiveCountMetricsBadRedshiftToHclTerraform(struct?: SloObjectiveCountMetricsBadRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadRedshiftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadRedshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadRedshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._databaseName = undefined;
      this._query = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._databaseName = value.databaseName;
      this._query = value.query;
      this._region = value.region;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SloObjectiveCountMetricsBadRedshiftList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadRedshift[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadRedshiftOutputReference {
    return new SloObjectiveCountMetricsBadRedshiftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadSplunk {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsBadSplunkToTerraform(struct?: SloObjectiveCountMetricsBadSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsBadSplunkToHclTerraform(struct?: SloObjectiveCountMetricsBadSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadSplunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsBadSplunkList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadSplunk[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadSplunkOutputReference {
    return new SloObjectiveCountMetricsBadSplunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadSplunkObservability {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#program Slo#program}
  */
  readonly program: string;
}

export function sloObjectiveCountMetricsBadSplunkObservabilityToTerraform(struct?: SloObjectiveCountMetricsBadSplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    program: cdktf.stringToTerraform(struct!.program),
  }
}


export function sloObjectiveCountMetricsBadSplunkObservabilityToHclTerraform(struct?: SloObjectiveCountMetricsBadSplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    program: {
      value: cdktf.stringToHclTerraform(struct!.program),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadSplunkObservabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadSplunkObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._program !== undefined) {
      hasAnyValues = true;
      internalValueResult.program = this._program;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadSplunkObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._program = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._program = value.program;
    }
  }

  // program - computed: false, optional: false, required: true
  private _program?: string; 
  public get program() {
    return this.getStringAttribute('program');
  }
  public set program(value: string) {
    this._program = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programInput() {
    return this._program;
  }
}

export class SloObjectiveCountMetricsBadSplunkObservabilityList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadSplunkObservability[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadSplunkObservabilityOutputReference {
    return new SloObjectiveCountMetricsBadSplunkObservabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadSumologic {
  /**
  * Period of data aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#quantization Slo#quantization}
  */
  readonly quantization?: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Aggregation function - avg, sum, min, max, count, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#rollup Slo#rollup}
  */
  readonly rollup?: string;
  /**
  * Sumologic source - metrics or logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
}

export function sloObjectiveCountMetricsBadSumologicToTerraform(struct?: SloObjectiveCountMetricsBadSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantization: cdktf.stringToTerraform(struct!.quantization),
    query: cdktf.stringToTerraform(struct!.query),
    rollup: cdktf.stringToTerraform(struct!.rollup),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sloObjectiveCountMetricsBadSumologicToHclTerraform(struct?: SloObjectiveCountMetricsBadSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantization: {
      value: cdktf.stringToHclTerraform(struct!.quantization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollup: {
      value: cdktf.stringToHclTerraform(struct!.rollup),
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

export class SloObjectiveCountMetricsBadSumologicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadSumologic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantization !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantization = this._quantization;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollup = this._rollup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadSumologic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantization = undefined;
      this._query = undefined;
      this._rollup = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantization = value.quantization;
      this._query = value.query;
      this._rollup = value.rollup;
      this._type = value.type;
    }
  }

  // quantization - computed: false, optional: true, required: false
  private _quantization?: string; 
  public get quantization() {
    return this.getStringAttribute('quantization');
  }
  public set quantization(value: string) {
    this._quantization = value;
  }
  public resetQuantization() {
    this._quantization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantizationInput() {
    return this._quantization;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rollup - computed: false, optional: true, required: false
  private _rollup?: string; 
  public get rollup() {
    return this.getStringAttribute('rollup');
  }
  public set rollup(value: string) {
    this._rollup = value;
  }
  public resetRollup() {
    this._rollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupInput() {
    return this._rollup;
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

export class SloObjectiveCountMetricsBadSumologicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadSumologic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadSumologicOutputReference {
    return new SloObjectiveCountMetricsBadSumologicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBadThousandeyes {
  /**
  * ID of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#test_id Slo#test_id}
  */
  readonly testId: number;
  /**
  * Type of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#test_type Slo#test_type}
  */
  readonly testType?: string;
}

export function sloObjectiveCountMetricsBadThousandeyesToTerraform(struct?: SloObjectiveCountMetricsBadThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_id: cdktf.numberToTerraform(struct!.testId),
    test_type: cdktf.stringToTerraform(struct!.testType),
  }
}


export function sloObjectiveCountMetricsBadThousandeyesToHclTerraform(struct?: SloObjectiveCountMetricsBadThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_id: {
      value: cdktf.numberToHclTerraform(struct!.testId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_type: {
      value: cdktf.stringToHclTerraform(struct!.testType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadThousandeyesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBadThousandeyes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testId !== undefined) {
      hasAnyValues = true;
      internalValueResult.testId = this._testId;
    }
    if (this._testType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testType = this._testType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBadThousandeyes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testId = undefined;
      this._testType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testId = value.testId;
      this._testType = value.testType;
    }
  }

  // test_id - computed: false, optional: false, required: true
  private _testId?: number; 
  public get testId() {
    return this.getNumberAttribute('test_id');
  }
  public set testId(value: number) {
    this._testId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdInput() {
    return this._testId;
  }

  // test_type - computed: false, optional: true, required: false
  private _testType?: string; 
  public get testType() {
    return this.getStringAttribute('test_type');
  }
  public set testType(value: string) {
    this._testType = value;
  }
  public resetTestType() {
    this._testType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTypeInput() {
    return this._testType;
  }
}

export class SloObjectiveCountMetricsBadThousandeyesList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBadThousandeyes[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadThousandeyesOutputReference {
    return new SloObjectiveCountMetricsBadThousandeyesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsBad {
  /**
  * amazon_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#amazon_prometheus Slo#amazon_prometheus}
  */
  readonly amazonPrometheus?: SloObjectiveCountMetricsBadAmazonPrometheus[] | cdktf.IResolvable;
  /**
  * appdynamics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#appdynamics Slo#appdynamics}
  */
  readonly appdynamics?: SloObjectiveCountMetricsBadAppdynamics[] | cdktf.IResolvable;
  /**
  * azure_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#azure_monitor Slo#azure_monitor}
  */
  readonly azureMonitor?: SloObjectiveCountMetricsBadAzureMonitor[] | cdktf.IResolvable;
  /**
  * azure_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#azure_prometheus Slo#azure_prometheus}
  */
  readonly azurePrometheus?: SloObjectiveCountMetricsBadAzurePrometheus[] | cdktf.IResolvable;
  /**
  * bigquery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#bigquery Slo#bigquery}
  */
  readonly bigquery?: SloObjectiveCountMetricsBadBigquery[] | cdktf.IResolvable;
  /**
  * cloudwatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#cloudwatch Slo#cloudwatch}
  */
  readonly cloudwatch?: SloObjectiveCountMetricsBadCloudwatch[] | cdktf.IResolvable;
  /**
  * coralogix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#coralogix Slo#coralogix}
  */
  readonly coralogix?: SloObjectiveCountMetricsBadCoralogix[] | cdktf.IResolvable;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#datadog Slo#datadog}
  */
  readonly datadog?: SloObjectiveCountMetricsBadDatadog[] | cdktf.IResolvable;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#dynatrace Slo#dynatrace}
  */
  readonly dynatrace?: SloObjectiveCountMetricsBadDynatrace[] | cdktf.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#elasticsearch Slo#elasticsearch}
  */
  readonly elasticsearch?: SloObjectiveCountMetricsBadElasticsearch[] | cdktf.IResolvable;
  /**
  * gcm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#gcm Slo#gcm}
  */
  readonly gcm?: SloObjectiveCountMetricsBadGcm[] | cdktf.IResolvable;
  /**
  * grafana_loki block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#grafana_loki Slo#grafana_loki}
  */
  readonly grafanaLoki?: SloObjectiveCountMetricsBadGrafanaLoki[] | cdktf.IResolvable;
  /**
  * graphite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#graphite Slo#graphite}
  */
  readonly graphite?: SloObjectiveCountMetricsBadGraphite[] | cdktf.IResolvable;
  /**
  * honeycomb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#honeycomb Slo#honeycomb}
  */
  readonly honeycomb?: SloObjectiveCountMetricsBadHoneycomb[] | cdktf.IResolvable;
  /**
  * influxdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#influxdb Slo#influxdb}
  */
  readonly influxdb?: SloObjectiveCountMetricsBadInfluxdb[] | cdktf.IResolvable;
  /**
  * instana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#instana Slo#instana}
  */
  readonly instana?: SloObjectiveCountMetricsBadInstana[] | cdktf.IResolvable;
  /**
  * lightstep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#lightstep Slo#lightstep}
  */
  readonly lightstep?: SloObjectiveCountMetricsBadLightstep[] | cdktf.IResolvable;
  /**
  * logic_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#logic_monitor Slo#logic_monitor}
  */
  readonly logicMonitor?: SloObjectiveCountMetricsBadLogicMonitor[] | cdktf.IResolvable;
  /**
  * newrelic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#newrelic Slo#newrelic}
  */
  readonly newrelic?: SloObjectiveCountMetricsBadNewrelic[] | cdktf.IResolvable;
  /**
  * opentsdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#opentsdb Slo#opentsdb}
  */
  readonly opentsdb?: SloObjectiveCountMetricsBadOpentsdb[] | cdktf.IResolvable;
  /**
  * pingdom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#pingdom Slo#pingdom}
  */
  readonly pingdom?: SloObjectiveCountMetricsBadPingdom[] | cdktf.IResolvable;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#prometheus Slo#prometheus}
  */
  readonly prometheus?: SloObjectiveCountMetricsBadPrometheus[] | cdktf.IResolvable;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#redshift Slo#redshift}
  */
  readonly redshift?: SloObjectiveCountMetricsBadRedshift[] | cdktf.IResolvable;
  /**
  * splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#splunk Slo#splunk}
  */
  readonly splunk?: SloObjectiveCountMetricsBadSplunk[] | cdktf.IResolvable;
  /**
  * splunk_observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#splunk_observability Slo#splunk_observability}
  */
  readonly splunkObservability?: SloObjectiveCountMetricsBadSplunkObservability[] | cdktf.IResolvable;
  /**
  * sumologic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#sumologic Slo#sumologic}
  */
  readonly sumologic?: SloObjectiveCountMetricsBadSumologic[] | cdktf.IResolvable;
  /**
  * thousandeyes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#thousandeyes Slo#thousandeyes}
  */
  readonly thousandeyes?: SloObjectiveCountMetricsBadThousandeyes[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsBadToTerraform(struct?: SloObjectiveCountMetricsBad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_prometheus: cdktf.listMapper(sloObjectiveCountMetricsBadAmazonPrometheusToTerraform, true)(struct!.amazonPrometheus),
    appdynamics: cdktf.listMapper(sloObjectiveCountMetricsBadAppdynamicsToTerraform, true)(struct!.appdynamics),
    azure_monitor: cdktf.listMapper(sloObjectiveCountMetricsBadAzureMonitorToTerraform, true)(struct!.azureMonitor),
    azure_prometheus: cdktf.listMapper(sloObjectiveCountMetricsBadAzurePrometheusToTerraform, true)(struct!.azurePrometheus),
    bigquery: cdktf.listMapper(sloObjectiveCountMetricsBadBigqueryToTerraform, true)(struct!.bigquery),
    cloudwatch: cdktf.listMapper(sloObjectiveCountMetricsBadCloudwatchToTerraform, true)(struct!.cloudwatch),
    coralogix: cdktf.listMapper(sloObjectiveCountMetricsBadCoralogixToTerraform, true)(struct!.coralogix),
    datadog: cdktf.listMapper(sloObjectiveCountMetricsBadDatadogToTerraform, true)(struct!.datadog),
    dynatrace: cdktf.listMapper(sloObjectiveCountMetricsBadDynatraceToTerraform, true)(struct!.dynatrace),
    elasticsearch: cdktf.listMapper(sloObjectiveCountMetricsBadElasticsearchToTerraform, true)(struct!.elasticsearch),
    gcm: cdktf.listMapper(sloObjectiveCountMetricsBadGcmToTerraform, true)(struct!.gcm),
    grafana_loki: cdktf.listMapper(sloObjectiveCountMetricsBadGrafanaLokiToTerraform, true)(struct!.grafanaLoki),
    graphite: cdktf.listMapper(sloObjectiveCountMetricsBadGraphiteToTerraform, true)(struct!.graphite),
    honeycomb: cdktf.listMapper(sloObjectiveCountMetricsBadHoneycombToTerraform, true)(struct!.honeycomb),
    influxdb: cdktf.listMapper(sloObjectiveCountMetricsBadInfluxdbToTerraform, true)(struct!.influxdb),
    instana: cdktf.listMapper(sloObjectiveCountMetricsBadInstanaToTerraform, true)(struct!.instana),
    lightstep: cdktf.listMapper(sloObjectiveCountMetricsBadLightstepToTerraform, true)(struct!.lightstep),
    logic_monitor: cdktf.listMapper(sloObjectiveCountMetricsBadLogicMonitorToTerraform, true)(struct!.logicMonitor),
    newrelic: cdktf.listMapper(sloObjectiveCountMetricsBadNewrelicToTerraform, true)(struct!.newrelic),
    opentsdb: cdktf.listMapper(sloObjectiveCountMetricsBadOpentsdbToTerraform, true)(struct!.opentsdb),
    pingdom: cdktf.listMapper(sloObjectiveCountMetricsBadPingdomToTerraform, true)(struct!.pingdom),
    prometheus: cdktf.listMapper(sloObjectiveCountMetricsBadPrometheusToTerraform, true)(struct!.prometheus),
    redshift: cdktf.listMapper(sloObjectiveCountMetricsBadRedshiftToTerraform, true)(struct!.redshift),
    splunk: cdktf.listMapper(sloObjectiveCountMetricsBadSplunkToTerraform, true)(struct!.splunk),
    splunk_observability: cdktf.listMapper(sloObjectiveCountMetricsBadSplunkObservabilityToTerraform, true)(struct!.splunkObservability),
    sumologic: cdktf.listMapper(sloObjectiveCountMetricsBadSumologicToTerraform, true)(struct!.sumologic),
    thousandeyes: cdktf.listMapper(sloObjectiveCountMetricsBadThousandeyesToTerraform, true)(struct!.thousandeyes),
  }
}


export function sloObjectiveCountMetricsBadToHclTerraform(struct?: SloObjectiveCountMetricsBad | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadAmazonPrometheusToHclTerraform, true)(struct!.amazonPrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadAmazonPrometheusList",
    },
    appdynamics: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadAppdynamicsToHclTerraform, true)(struct!.appdynamics),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadAppdynamicsList",
    },
    azure_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadAzureMonitorToHclTerraform, true)(struct!.azureMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadAzureMonitorList",
    },
    azure_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadAzurePrometheusToHclTerraform, true)(struct!.azurePrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadAzurePrometheusList",
    },
    bigquery: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadBigqueryToHclTerraform, true)(struct!.bigquery),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadBigqueryList",
    },
    cloudwatch: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadCloudwatchToHclTerraform, true)(struct!.cloudwatch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadCloudwatchList",
    },
    coralogix: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadCoralogixToHclTerraform, true)(struct!.coralogix),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadCoralogixList",
    },
    datadog: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadDatadogToHclTerraform, true)(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadDatadogList",
    },
    dynatrace: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadDynatraceToHclTerraform, true)(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadDynatraceList",
    },
    elasticsearch: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadElasticsearchToHclTerraform, true)(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadElasticsearchList",
    },
    gcm: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadGcmToHclTerraform, true)(struct!.gcm),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadGcmList",
    },
    grafana_loki: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadGrafanaLokiToHclTerraform, true)(struct!.grafanaLoki),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadGrafanaLokiList",
    },
    graphite: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadGraphiteToHclTerraform, true)(struct!.graphite),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadGraphiteList",
    },
    honeycomb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadHoneycombToHclTerraform, true)(struct!.honeycomb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadHoneycombList",
    },
    influxdb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadInfluxdbToHclTerraform, true)(struct!.influxdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadInfluxdbList",
    },
    instana: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadInstanaToHclTerraform, true)(struct!.instana),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadInstanaList",
    },
    lightstep: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadLightstepToHclTerraform, true)(struct!.lightstep),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadLightstepList",
    },
    logic_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadLogicMonitorToHclTerraform, true)(struct!.logicMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadLogicMonitorList",
    },
    newrelic: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadNewrelicToHclTerraform, true)(struct!.newrelic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadNewrelicList",
    },
    opentsdb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadOpentsdbToHclTerraform, true)(struct!.opentsdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadOpentsdbList",
    },
    pingdom: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadPingdomToHclTerraform, true)(struct!.pingdom),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadPingdomList",
    },
    prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadPrometheusToHclTerraform, true)(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadPrometheusList",
    },
    redshift: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadRedshiftToHclTerraform, true)(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadRedshiftList",
    },
    splunk: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadSplunkToHclTerraform, true)(struct!.splunk),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadSplunkList",
    },
    splunk_observability: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadSplunkObservabilityToHclTerraform, true)(struct!.splunkObservability),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadSplunkObservabilityList",
    },
    sumologic: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadSumologicToHclTerraform, true)(struct!.sumologic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadSumologicList",
    },
    thousandeyes: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsBadThousandeyesToHclTerraform, true)(struct!.thousandeyes),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsBadThousandeyesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsBadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsBad | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonPrometheus = this._amazonPrometheus?.internalValue;
    }
    if (this._appdynamics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appdynamics = this._appdynamics?.internalValue;
    }
    if (this._azureMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMonitor = this._azureMonitor?.internalValue;
    }
    if (this._azurePrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePrometheus = this._azurePrometheus?.internalValue;
    }
    if (this._bigquery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigquery = this._bigquery?.internalValue;
    }
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    if (this._coralogix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coralogix = this._coralogix?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._gcm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcm = this._gcm?.internalValue;
    }
    if (this._grafanaLoki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaLoki = this._grafanaLoki?.internalValue;
    }
    if (this._graphite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphite = this._graphite?.internalValue;
    }
    if (this._honeycomb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycomb = this._honeycomb?.internalValue;
    }
    if (this._influxdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb?.internalValue;
    }
    if (this._instana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instana = this._instana?.internalValue;
    }
    if (this._lightstep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightstep = this._lightstep?.internalValue;
    }
    if (this._logicMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicMonitor = this._logicMonitor?.internalValue;
    }
    if (this._newrelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelic = this._newrelic?.internalValue;
    }
    if (this._opentsdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentsdb = this._opentsdb?.internalValue;
    }
    if (this._pingdom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingdom = this._pingdom?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._splunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunk = this._splunk?.internalValue;
    }
    if (this._splunkObservability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkObservability = this._splunkObservability?.internalValue;
    }
    if (this._sumologic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumologic = this._sumologic?.internalValue;
    }
    if (this._thousandeyes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandeyes = this._thousandeyes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsBad | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = undefined;
      this._appdynamics.internalValue = undefined;
      this._azureMonitor.internalValue = undefined;
      this._azurePrometheus.internalValue = undefined;
      this._bigquery.internalValue = undefined;
      this._cloudwatch.internalValue = undefined;
      this._coralogix.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._gcm.internalValue = undefined;
      this._grafanaLoki.internalValue = undefined;
      this._graphite.internalValue = undefined;
      this._honeycomb.internalValue = undefined;
      this._influxdb.internalValue = undefined;
      this._instana.internalValue = undefined;
      this._lightstep.internalValue = undefined;
      this._logicMonitor.internalValue = undefined;
      this._newrelic.internalValue = undefined;
      this._opentsdb.internalValue = undefined;
      this._pingdom.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._splunk.internalValue = undefined;
      this._splunkObservability.internalValue = undefined;
      this._sumologic.internalValue = undefined;
      this._thousandeyes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = value.amazonPrometheus;
      this._appdynamics.internalValue = value.appdynamics;
      this._azureMonitor.internalValue = value.azureMonitor;
      this._azurePrometheus.internalValue = value.azurePrometheus;
      this._bigquery.internalValue = value.bigquery;
      this._cloudwatch.internalValue = value.cloudwatch;
      this._coralogix.internalValue = value.coralogix;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._gcm.internalValue = value.gcm;
      this._grafanaLoki.internalValue = value.grafanaLoki;
      this._graphite.internalValue = value.graphite;
      this._honeycomb.internalValue = value.honeycomb;
      this._influxdb.internalValue = value.influxdb;
      this._instana.internalValue = value.instana;
      this._lightstep.internalValue = value.lightstep;
      this._logicMonitor.internalValue = value.logicMonitor;
      this._newrelic.internalValue = value.newrelic;
      this._opentsdb.internalValue = value.opentsdb;
      this._pingdom.internalValue = value.pingdom;
      this._prometheus.internalValue = value.prometheus;
      this._redshift.internalValue = value.redshift;
      this._splunk.internalValue = value.splunk;
      this._splunkObservability.internalValue = value.splunkObservability;
      this._sumologic.internalValue = value.sumologic;
      this._thousandeyes.internalValue = value.thousandeyes;
    }
  }

  // amazon_prometheus - computed: false, optional: true, required: false
  private _amazonPrometheus = new SloObjectiveCountMetricsBadAmazonPrometheusList(this, "amazon_prometheus", false);
  public get amazonPrometheus() {
    return this._amazonPrometheus;
  }
  public putAmazonPrometheus(value: SloObjectiveCountMetricsBadAmazonPrometheus[] | cdktf.IResolvable) {
    this._amazonPrometheus.internalValue = value;
  }
  public resetAmazonPrometheus() {
    this._amazonPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonPrometheusInput() {
    return this._amazonPrometheus.internalValue;
  }

  // appdynamics - computed: false, optional: true, required: false
  private _appdynamics = new SloObjectiveCountMetricsBadAppdynamicsList(this, "appdynamics", false);
  public get appdynamics() {
    return this._appdynamics;
  }
  public putAppdynamics(value: SloObjectiveCountMetricsBadAppdynamics[] | cdktf.IResolvable) {
    this._appdynamics.internalValue = value;
  }
  public resetAppdynamics() {
    this._appdynamics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appdynamicsInput() {
    return this._appdynamics.internalValue;
  }

  // azure_monitor - computed: false, optional: true, required: false
  private _azureMonitor = new SloObjectiveCountMetricsBadAzureMonitorList(this, "azure_monitor", false);
  public get azureMonitor() {
    return this._azureMonitor;
  }
  public putAzureMonitor(value: SloObjectiveCountMetricsBadAzureMonitor[] | cdktf.IResolvable) {
    this._azureMonitor.internalValue = value;
  }
  public resetAzureMonitor() {
    this._azureMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorInput() {
    return this._azureMonitor.internalValue;
  }

  // azure_prometheus - computed: false, optional: true, required: false
  private _azurePrometheus = new SloObjectiveCountMetricsBadAzurePrometheusList(this, "azure_prometheus", false);
  public get azurePrometheus() {
    return this._azurePrometheus;
  }
  public putAzurePrometheus(value: SloObjectiveCountMetricsBadAzurePrometheus[] | cdktf.IResolvable) {
    this._azurePrometheus.internalValue = value;
  }
  public resetAzurePrometheus() {
    this._azurePrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrometheusInput() {
    return this._azurePrometheus.internalValue;
  }

  // bigquery - computed: false, optional: true, required: false
  private _bigquery = new SloObjectiveCountMetricsBadBigqueryList(this, "bigquery", false);
  public get bigquery() {
    return this._bigquery;
  }
  public putBigquery(value: SloObjectiveCountMetricsBadBigquery[] | cdktf.IResolvable) {
    this._bigquery.internalValue = value;
  }
  public resetBigquery() {
    this._bigquery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryInput() {
    return this._bigquery.internalValue;
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new SloObjectiveCountMetricsBadCloudwatchList(this, "cloudwatch", false);
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: SloObjectiveCountMetricsBadCloudwatch[] | cdktf.IResolvable) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // coralogix - computed: false, optional: true, required: false
  private _coralogix = new SloObjectiveCountMetricsBadCoralogixList(this, "coralogix", false);
  public get coralogix() {
    return this._coralogix;
  }
  public putCoralogix(value: SloObjectiveCountMetricsBadCoralogix[] | cdktf.IResolvable) {
    this._coralogix.internalValue = value;
  }
  public resetCoralogix() {
    this._coralogix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coralogixInput() {
    return this._coralogix.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new SloObjectiveCountMetricsBadDatadogList(this, "datadog", false);
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: SloObjectiveCountMetricsBadDatadog[] | cdktf.IResolvable) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new SloObjectiveCountMetricsBadDynatraceList(this, "dynatrace", false);
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: SloObjectiveCountMetricsBadDynatrace[] | cdktf.IResolvable) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new SloObjectiveCountMetricsBadElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: SloObjectiveCountMetricsBadElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // gcm - computed: false, optional: true, required: false
  private _gcm = new SloObjectiveCountMetricsBadGcmList(this, "gcm", false);
  public get gcm() {
    return this._gcm;
  }
  public putGcm(value: SloObjectiveCountMetricsBadGcm[] | cdktf.IResolvable) {
    this._gcm.internalValue = value;
  }
  public resetGcm() {
    this._gcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmInput() {
    return this._gcm.internalValue;
  }

  // grafana_loki - computed: false, optional: true, required: false
  private _grafanaLoki = new SloObjectiveCountMetricsBadGrafanaLokiList(this, "grafana_loki", false);
  public get grafanaLoki() {
    return this._grafanaLoki;
  }
  public putGrafanaLoki(value: SloObjectiveCountMetricsBadGrafanaLoki[] | cdktf.IResolvable) {
    this._grafanaLoki.internalValue = value;
  }
  public resetGrafanaLoki() {
    this._grafanaLoki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaLokiInput() {
    return this._grafanaLoki.internalValue;
  }

  // graphite - computed: false, optional: true, required: false
  private _graphite = new SloObjectiveCountMetricsBadGraphiteList(this, "graphite", false);
  public get graphite() {
    return this._graphite;
  }
  public putGraphite(value: SloObjectiveCountMetricsBadGraphite[] | cdktf.IResolvable) {
    this._graphite.internalValue = value;
  }
  public resetGraphite() {
    this._graphite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteInput() {
    return this._graphite.internalValue;
  }

  // honeycomb - computed: false, optional: true, required: false
  private _honeycomb = new SloObjectiveCountMetricsBadHoneycombList(this, "honeycomb", false);
  public get honeycomb() {
    return this._honeycomb;
  }
  public putHoneycomb(value: SloObjectiveCountMetricsBadHoneycomb[] | cdktf.IResolvable) {
    this._honeycomb.internalValue = value;
  }
  public resetHoneycomb() {
    this._honeycomb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycombInput() {
    return this._honeycomb.internalValue;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new SloObjectiveCountMetricsBadInfluxdbList(this, "influxdb", false);
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: SloObjectiveCountMetricsBadInfluxdb[] | cdktf.IResolvable) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // instana - computed: false, optional: true, required: false
  private _instana = new SloObjectiveCountMetricsBadInstanaList(this, "instana", false);
  public get instana() {
    return this._instana;
  }
  public putInstana(value: SloObjectiveCountMetricsBadInstana[] | cdktf.IResolvable) {
    this._instana.internalValue = value;
  }
  public resetInstana() {
    this._instana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanaInput() {
    return this._instana.internalValue;
  }

  // lightstep - computed: false, optional: true, required: false
  private _lightstep = new SloObjectiveCountMetricsBadLightstepList(this, "lightstep", false);
  public get lightstep() {
    return this._lightstep;
  }
  public putLightstep(value: SloObjectiveCountMetricsBadLightstep[] | cdktf.IResolvable) {
    this._lightstep.internalValue = value;
  }
  public resetLightstep() {
    this._lightstep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepInput() {
    return this._lightstep.internalValue;
  }

  // logic_monitor - computed: false, optional: true, required: false
  private _logicMonitor = new SloObjectiveCountMetricsBadLogicMonitorList(this, "logic_monitor", false);
  public get logicMonitor() {
    return this._logicMonitor;
  }
  public putLogicMonitor(value: SloObjectiveCountMetricsBadLogicMonitor[] | cdktf.IResolvable) {
    this._logicMonitor.internalValue = value;
  }
  public resetLogicMonitor() {
    this._logicMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicMonitorInput() {
    return this._logicMonitor.internalValue;
  }

  // newrelic - computed: false, optional: true, required: false
  private _newrelic = new SloObjectiveCountMetricsBadNewrelicList(this, "newrelic", false);
  public get newrelic() {
    return this._newrelic;
  }
  public putNewrelic(value: SloObjectiveCountMetricsBadNewrelic[] | cdktf.IResolvable) {
    this._newrelic.internalValue = value;
  }
  public resetNewrelic() {
    this._newrelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicInput() {
    return this._newrelic.internalValue;
  }

  // opentsdb - computed: false, optional: true, required: false
  private _opentsdb = new SloObjectiveCountMetricsBadOpentsdbList(this, "opentsdb", false);
  public get opentsdb() {
    return this._opentsdb;
  }
  public putOpentsdb(value: SloObjectiveCountMetricsBadOpentsdb[] | cdktf.IResolvable) {
    this._opentsdb.internalValue = value;
  }
  public resetOpentsdb() {
    this._opentsdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentsdbInput() {
    return this._opentsdb.internalValue;
  }

  // pingdom - computed: false, optional: true, required: false
  private _pingdom = new SloObjectiveCountMetricsBadPingdomList(this, "pingdom", false);
  public get pingdom() {
    return this._pingdom;
  }
  public putPingdom(value: SloObjectiveCountMetricsBadPingdom[] | cdktf.IResolvable) {
    this._pingdom.internalValue = value;
  }
  public resetPingdom() {
    this._pingdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingdomInput() {
    return this._pingdom.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new SloObjectiveCountMetricsBadPrometheusList(this, "prometheus", false);
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: SloObjectiveCountMetricsBadPrometheus[] | cdktf.IResolvable) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new SloObjectiveCountMetricsBadRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: SloObjectiveCountMetricsBadRedshift[] | cdktf.IResolvable) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new SloObjectiveCountMetricsBadSplunkList(this, "splunk", false);
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: SloObjectiveCountMetricsBadSplunk[] | cdktf.IResolvable) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // splunk_observability - computed: false, optional: true, required: false
  private _splunkObservability = new SloObjectiveCountMetricsBadSplunkObservabilityList(this, "splunk_observability", false);
  public get splunkObservability() {
    return this._splunkObservability;
  }
  public putSplunkObservability(value: SloObjectiveCountMetricsBadSplunkObservability[] | cdktf.IResolvable) {
    this._splunkObservability.internalValue = value;
  }
  public resetSplunkObservability() {
    this._splunkObservability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkObservabilityInput() {
    return this._splunkObservability.internalValue;
  }

  // sumologic - computed: false, optional: true, required: false
  private _sumologic = new SloObjectiveCountMetricsBadSumologicList(this, "sumologic", false);
  public get sumologic() {
    return this._sumologic;
  }
  public putSumologic(value: SloObjectiveCountMetricsBadSumologic[] | cdktf.IResolvable) {
    this._sumologic.internalValue = value;
  }
  public resetSumologic() {
    this._sumologic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicInput() {
    return this._sumologic.internalValue;
  }

  // thousandeyes - computed: false, optional: true, required: false
  private _thousandeyes = new SloObjectiveCountMetricsBadThousandeyesList(this, "thousandeyes", false);
  public get thousandeyes() {
    return this._thousandeyes;
  }
  public putThousandeyes(value: SloObjectiveCountMetricsBadThousandeyes[] | cdktf.IResolvable) {
    this._thousandeyes.internalValue = value;
  }
  public resetThousandeyes() {
    this._thousandeyes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandeyesInput() {
    return this._thousandeyes.internalValue;
  }
}

export class SloObjectiveCountMetricsBadList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsBad[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsBadOutputReference {
    return new SloObjectiveCountMetricsBadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodAmazonPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsGoodAmazonPrometheusToTerraform(struct?: SloObjectiveCountMetricsGoodAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsGoodAmazonPrometheusToHclTerraform(struct?: SloObjectiveCountMetricsGoodAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodAmazonPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodAmazonPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodAmazonPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsGoodAmazonPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodAmazonPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodAmazonPrometheusOutputReference {
    return new SloObjectiveCountMetricsGoodAmazonPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodAppdynamics {
  /**
  * Name of the added application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#application_name Slo#application_name}
  */
  readonly applicationName: string;
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveCountMetricsGoodAppdynamicsToTerraform(struct?: SloObjectiveCountMetricsGoodAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveCountMetricsGoodAppdynamicsToHclTerraform(struct?: SloObjectiveCountMetricsGoodAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodAppdynamicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodAppdynamics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodAppdynamics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName = value.applicationName;
      this._metricPath = value.metricPath;
    }
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveCountMetricsGoodAppdynamicsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodAppdynamics[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodAppdynamicsOutputReference {
    return new SloObjectiveCountMetricsGoodAppdynamicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodAzureMonitorDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveCountMetricsGoodAzureMonitorDimensionsToTerraform(struct?: SloObjectiveCountMetricsGoodAzureMonitorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveCountMetricsGoodAzureMonitorDimensionsToHclTerraform(struct?: SloObjectiveCountMetricsGoodAzureMonitorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SloObjectiveCountMetricsGoodAzureMonitorDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodAzureMonitorDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SloObjectiveCountMetricsGoodAzureMonitorDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class SloObjectiveCountMetricsGoodAzureMonitorDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodAzureMonitorDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodAzureMonitorDimensionsOutputReference {
    return new SloObjectiveCountMetricsGoodAzureMonitorDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodAzureMonitorWorkspace {
  /**
  * Resource group of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#resource_group Slo#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Subscription ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#subscription_id Slo#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#workspace_id Slo#workspace_id}
  */
  readonly workspaceId: string;
}

export function sloObjectiveCountMetricsGoodAzureMonitorWorkspaceToTerraform(struct?: SloObjectiveCountMetricsGoodAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function sloObjectiveCountMetricsGoodAzureMonitorWorkspaceToHclTerraform(struct?: SloObjectiveCountMetricsGoodAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodAzureMonitorWorkspaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodAzureMonitorWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodAzureMonitorWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._workspaceId = value.workspaceId;
    }
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class SloObjectiveCountMetricsGoodAzureMonitorWorkspaceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodAzureMonitorWorkspace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodAzureMonitorWorkspaceOutputReference {
    return new SloObjectiveCountMetricsGoodAzureMonitorWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodAzureMonitor {
  /**
  * Aggregation type [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Specifies source: 'metrics' or 'logs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#data_type Slo#data_type}
  */
  readonly dataType: string;
  /**
  * Logs query in Kusto Query Language [Required for logs]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#kql_query Slo#kql_query}
  */
  readonly kqlQuery?: string;
  /**
  * Name of the metric [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric [Optional for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_namespace Slo#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Identifier of the Azure Cloud resource [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#resource_id Slo#resource_id}
  */
  readonly resourceId?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveCountMetricsGoodAzureMonitorDimensions[] | cdktf.IResolvable;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#workspace Slo#workspace}
  */
  readonly workspace?: SloObjectiveCountMetricsGoodAzureMonitorWorkspace[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodAzureMonitorToTerraform(struct?: SloObjectiveCountMetricsGoodAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    kql_query: cdktf.stringToTerraform(struct!.kqlQuery),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    dimensions: cdktf.listMapper(sloObjectiveCountMetricsGoodAzureMonitorDimensionsToTerraform, true)(struct!.dimensions),
    workspace: cdktf.listMapper(sloObjectiveCountMetricsGoodAzureMonitorWorkspaceToTerraform, true)(struct!.workspace),
  }
}


export function sloObjectiveCountMetricsGoodAzureMonitorToHclTerraform(struct?: SloObjectiveCountMetricsGoodAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kql_query: {
      value: cdktf.stringToHclTerraform(struct!.kqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodAzureMonitorDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveCountMetricsGoodAzureMonitorDimensionsList",
    },
    workspace: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodAzureMonitorWorkspaceToHclTerraform, true)(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodAzureMonitorWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodAzureMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodAzureMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._kqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.kqlQuery = this._kqlQuery;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodAzureMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._dataType = undefined;
      this._kqlQuery = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._resourceId = undefined;
      this._dimensions.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._dataType = value.dataType;
      this._kqlQuery = value.kqlQuery;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._resourceId = value.resourceId;
      this._dimensions.internalValue = value.dimensions;
      this._workspace.internalValue = value.workspace;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // kql_query - computed: false, optional: true, required: false
  private _kqlQuery?: string; 
  public get kqlQuery() {
    return this.getStringAttribute('kql_query');
  }
  public set kqlQuery(value: string) {
    this._kqlQuery = value;
  }
  public resetKqlQuery() {
    this._kqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kqlQueryInput() {
    return this._kqlQuery;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveCountMetricsGoodAzureMonitorDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveCountMetricsGoodAzureMonitorDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new SloObjectiveCountMetricsGoodAzureMonitorWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: SloObjectiveCountMetricsGoodAzureMonitorWorkspace[] | cdktf.IResolvable) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodAzureMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodAzureMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodAzureMonitorOutputReference {
    return new SloObjectiveCountMetricsGoodAzureMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodAzurePrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsGoodAzurePrometheusToTerraform(struct?: SloObjectiveCountMetricsGoodAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsGoodAzurePrometheusToHclTerraform(struct?: SloObjectiveCountMetricsGoodAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodAzurePrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodAzurePrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodAzurePrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsGoodAzurePrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodAzurePrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodAzurePrometheusOutputReference {
    return new SloObjectiveCountMetricsGoodAzurePrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodBigquery {
  /**
  * Location of you BigQuery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#location Slo#location}
  */
  readonly location: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodBigqueryToTerraform(struct?: SloObjectiveCountMetricsGoodBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodBigqueryToHclTerraform(struct?: SloObjectiveCountMetricsGoodBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodBigqueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodBigquery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodBigquery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._projectId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._projectId = value.projectId;
      this._query = value.query;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodBigqueryList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodBigquery[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodBigqueryOutputReference {
    return new SloObjectiveCountMetricsGoodBigqueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodCloudwatchDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveCountMetricsGoodCloudwatchDimensionsToTerraform(struct?: SloObjectiveCountMetricsGoodCloudwatchDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveCountMetricsGoodCloudwatchDimensionsToHclTerraform(struct?: SloObjectiveCountMetricsGoodCloudwatchDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SloObjectiveCountMetricsGoodCloudwatchDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodCloudwatchDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SloObjectiveCountMetricsGoodCloudwatchDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class SloObjectiveCountMetricsGoodCloudwatchDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodCloudwatchDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodCloudwatchDimensionsOutputReference {
    return new SloObjectiveCountMetricsGoodCloudwatchDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodCloudwatch {
  /**
  * AccountID used with cross-account observability feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#account_id Slo#account_id}
  */
  readonly accountId?: string;
  /**
  * JSON query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#json Slo#json}
  */
  readonly json?: string;
  /**
  * Metric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#namespace Slo#namespace}
  */
  readonly namespace?: string;
  /**
  * Region of the CloudWatch instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
  /**
  * SQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#sql Slo#sql}
  */
  readonly sql?: string;
  /**
  * Metric data aggregations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#stat Slo#stat}
  */
  readonly stat?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveCountMetricsGoodCloudwatchDimensions[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodCloudwatchToTerraform(struct?: SloObjectiveCountMetricsGoodCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    json: cdktf.stringToTerraform(struct!.json),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
    sql: cdktf.stringToTerraform(struct!.sql),
    stat: cdktf.stringToTerraform(struct!.stat),
    dimensions: cdktf.listMapper(sloObjectiveCountMetricsGoodCloudwatchDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function sloObjectiveCountMetricsGoodCloudwatchToHclTerraform(struct?: SloObjectiveCountMetricsGoodCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    sql: {
      value: cdktf.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodCloudwatchDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveCountMetricsGoodCloudwatchDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodCloudwatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodCloudwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodCloudwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._json = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._region = undefined;
      this._sql = undefined;
      this._stat = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._json = value.json;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._region = value.region;
      this._sql = value.sql;
      this._stat = value.stat;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // json - computed: false, optional: true, required: false
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

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sql - computed: false, optional: true, required: false
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  public resetSql() {
    this._sql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // stat - computed: false, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveCountMetricsGoodCloudwatchDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveCountMetricsGoodCloudwatchDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodCloudwatchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodCloudwatch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodCloudwatchOutputReference {
    return new SloObjectiveCountMetricsGoodCloudwatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodCoralogix {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsGoodCoralogixToTerraform(struct?: SloObjectiveCountMetricsGoodCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsGoodCoralogixToHclTerraform(struct?: SloObjectiveCountMetricsGoodCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodCoralogixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodCoralogix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodCoralogix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsGoodCoralogixList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodCoralogix[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodCoralogixOutputReference {
    return new SloObjectiveCountMetricsGoodCoralogixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodDatadog {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodDatadogToTerraform(struct?: SloObjectiveCountMetricsGoodDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodDatadogToHclTerraform(struct?: SloObjectiveCountMetricsGoodDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodDatadogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodDatadogList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodDatadog[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodDatadogOutputReference {
    return new SloObjectiveCountMetricsGoodDatadogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodDynatrace {
  /**
  * Selector for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_selector Slo#metric_selector}
  */
  readonly metricSelector: string;
}

export function sloObjectiveCountMetricsGoodDynatraceToTerraform(struct?: SloObjectiveCountMetricsGoodDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_selector: cdktf.stringToTerraform(struct!.metricSelector),
  }
}


export function sloObjectiveCountMetricsGoodDynatraceToHclTerraform(struct?: SloObjectiveCountMetricsGoodDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_selector: {
      value: cdktf.stringToHclTerraform(struct!.metricSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodDynatraceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodDynatrace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSelector = this._metricSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodDynatrace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricSelector = value.metricSelector;
    }
  }

  // metric_selector - computed: false, optional: false, required: true
  private _metricSelector?: string; 
  public get metricSelector() {
    return this.getStringAttribute('metric_selector');
  }
  public set metricSelector(value: string) {
    this._metricSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector;
  }
}

export class SloObjectiveCountMetricsGoodDynatraceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodDynatrace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodDynatraceOutputReference {
    return new SloObjectiveCountMetricsGoodDynatraceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodElasticsearch {
  /**
  * Index of metrics we want to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#index Slo#index}
  */
  readonly index: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodElasticsearchToTerraform(struct?: SloObjectiveCountMetricsGoodElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodElasticsearchToHclTerraform(struct?: SloObjectiveCountMetricsGoodElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._query = value.query;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodElasticsearchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodElasticsearchOutputReference {
    return new SloObjectiveCountMetricsGoodElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodGcm {
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics in PromQL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql?: string;
  /**
  * Query for the metrics in MQL format [deprecated](https://cloud.google.com/stackdriver/docs/deprecations/mql)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
}

export function sloObjectiveCountMetricsGoodGcmToTerraform(struct?: SloObjectiveCountMetricsGoodGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    promql: cdktf.stringToTerraform(struct!.promql),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodGcmToHclTerraform(struct?: SloObjectiveCountMetricsGoodGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodGcmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodGcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodGcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._promql = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._promql = value.promql;
      this._query = value.query;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // promql - computed: false, optional: true, required: false
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  public resetPromql() {
    this._promql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodGcmList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodGcm[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodGcmOutputReference {
    return new SloObjectiveCountMetricsGoodGcmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodGrafanaLoki {
  /**
  * Query for the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#logql Slo#logql}
  */
  readonly logql: string;
}

export function sloObjectiveCountMetricsGoodGrafanaLokiToTerraform(struct?: SloObjectiveCountMetricsGoodGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logql: cdktf.stringToTerraform(struct!.logql),
  }
}


export function sloObjectiveCountMetricsGoodGrafanaLokiToHclTerraform(struct?: SloObjectiveCountMetricsGoodGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logql: {
      value: cdktf.stringToHclTerraform(struct!.logql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodGrafanaLokiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodGrafanaLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logql !== undefined) {
      hasAnyValues = true;
      internalValueResult.logql = this._logql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodGrafanaLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logql = value.logql;
    }
  }

  // logql - computed: false, optional: false, required: true
  private _logql?: string; 
  public get logql() {
    return this.getStringAttribute('logql');
  }
  public set logql(value: string) {
    this._logql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logqlInput() {
    return this._logql;
  }
}

export class SloObjectiveCountMetricsGoodGrafanaLokiList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodGrafanaLoki[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodGrafanaLokiOutputReference {
    return new SloObjectiveCountMetricsGoodGrafanaLokiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodGraphite {
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveCountMetricsGoodGraphiteToTerraform(struct?: SloObjectiveCountMetricsGoodGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveCountMetricsGoodGraphiteToHclTerraform(struct?: SloObjectiveCountMetricsGoodGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodGraphiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodGraphite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodGraphite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPath = value.metricPath;
    }
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveCountMetricsGoodGraphiteList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodGraphite[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodGraphiteOutputReference {
    return new SloObjectiveCountMetricsGoodGraphiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodHoneycomb {
  /**
  * Column name - required for all calculation types besides 'CONCURRENCY' and 'COUNT'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#attribute Slo#attribute}
  */
  readonly attribute?: string;
}

export function sloObjectiveCountMetricsGoodHoneycombToTerraform(struct?: SloObjectiveCountMetricsGoodHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
  }
}


export function sloObjectiveCountMetricsGoodHoneycombToHclTerraform(struct?: SloObjectiveCountMetricsGoodHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodHoneycombOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodHoneycomb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodHoneycomb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class SloObjectiveCountMetricsGoodHoneycombList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodHoneycomb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodHoneycombOutputReference {
    return new SloObjectiveCountMetricsGoodHoneycombOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodInfluxdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodInfluxdbToTerraform(struct?: SloObjectiveCountMetricsGoodInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodInfluxdbToHclTerraform(struct?: SloObjectiveCountMetricsGoodInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodInfluxdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodInfluxdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodInfluxdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodInfluxdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodInfluxdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodInfluxdbOutputReference {
    return new SloObjectiveCountMetricsGoodInfluxdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodInstanaApplicationGroupBy {
  /**
  * Group by tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag Slo#tag}
  */
  readonly tag: string;
  /**
  * Tag entity - one of 'DESTINATION', 'SOURCE', 'NOT_APPLICABLE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag_entity Slo#tag_entity}
  */
  readonly tagEntity: string;
  /**
  * Second level key for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag_second_level_key Slo#tag_second_level_key}
  */
  readonly tagSecondLevelKey?: string;
}

export function sloObjectiveCountMetricsGoodInstanaApplicationGroupByToTerraform(struct?: SloObjectiveCountMetricsGoodInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    tag_entity: cdktf.stringToTerraform(struct!.tagEntity),
    tag_second_level_key: cdktf.stringToTerraform(struct!.tagSecondLevelKey),
  }
}


export function sloObjectiveCountMetricsGoodInstanaApplicationGroupByToHclTerraform(struct?: SloObjectiveCountMetricsGoodInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_entity: {
      value: cdktf.stringToHclTerraform(struct!.tagEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_second_level_key: {
      value: cdktf.stringToHclTerraform(struct!.tagSecondLevelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodInstanaApplicationGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodInstanaApplicationGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagEntity = this._tagEntity;
    }
    if (this._tagSecondLevelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSecondLevelKey = this._tagSecondLevelKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodInstanaApplicationGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
      this._tagEntity = undefined;
      this._tagSecondLevelKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
      this._tagEntity = value.tagEntity;
      this._tagSecondLevelKey = value.tagSecondLevelKey;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_entity - computed: false, optional: false, required: true
  private _tagEntity?: string; 
  public get tagEntity() {
    return this.getStringAttribute('tag_entity');
  }
  public set tagEntity(value: string) {
    this._tagEntity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagEntityInput() {
    return this._tagEntity;
  }

  // tag_second_level_key - computed: false, optional: true, required: false
  private _tagSecondLevelKey?: string; 
  public get tagSecondLevelKey() {
    return this.getStringAttribute('tag_second_level_key');
  }
  public set tagSecondLevelKey(value: string) {
    this._tagSecondLevelKey = value;
  }
  public resetTagSecondLevelKey() {
    this._tagSecondLevelKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSecondLevelKeyInput() {
    return this._tagSecondLevelKey;
  }
}

export class SloObjectiveCountMetricsGoodInstanaApplicationGroupByList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodInstanaApplicationGroupBy[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodInstanaApplicationGroupByOutputReference {
    return new SloObjectiveCountMetricsGoodInstanaApplicationGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodInstanaApplication {
  /**
  * Depends on the value specified for 'metric_id'- more info in N9 docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation: string;
  /**
  * API query user passes in a JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#api_query Slo#api_query}
  */
  readonly apiQuery: string;
  /**
  * Include internal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#include_internal Slo#include_internal}
  */
  readonly includeInternal?: boolean | cdktf.IResolvable;
  /**
  * Include synthetic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#include_synthetic Slo#include_synthetic}
  */
  readonly includeSynthetic?: boolean | cdktf.IResolvable;
  /**
  * Metric ID one of 'calls', 'erroneousCalls', 'errors', 'latency'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#group_by Slo#group_by}
  */
  readonly groupBy?: SloObjectiveCountMetricsGoodInstanaApplicationGroupBy[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodInstanaApplicationToTerraform(struct?: SloObjectiveCountMetricsGoodInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    api_query: cdktf.stringToTerraform(struct!.apiQuery),
    include_internal: cdktf.booleanToTerraform(struct!.includeInternal),
    include_synthetic: cdktf.booleanToTerraform(struct!.includeSynthetic),
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    group_by: cdktf.listMapper(sloObjectiveCountMetricsGoodInstanaApplicationGroupByToTerraform, true)(struct!.groupBy),
  }
}


export function sloObjectiveCountMetricsGoodInstanaApplicationToHclTerraform(struct?: SloObjectiveCountMetricsGoodInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_query: {
      value: cdktf.stringToHclTerraform(struct!.apiQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_internal: {
      value: cdktf.booleanToHclTerraform(struct!.includeInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_synthetic: {
      value: cdktf.booleanToHclTerraform(struct!.includeSynthetic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodInstanaApplicationGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodInstanaApplicationGroupByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodInstanaApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodInstanaApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._apiQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiQuery = this._apiQuery;
    }
    if (this._includeInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInternal = this._includeInternal;
    }
    if (this._includeSynthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSynthetic = this._includeSynthetic;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodInstanaApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._apiQuery = undefined;
      this._includeInternal = undefined;
      this._includeSynthetic = undefined;
      this._metricId = undefined;
      this._groupBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._apiQuery = value.apiQuery;
      this._includeInternal = value.includeInternal;
      this._includeSynthetic = value.includeSynthetic;
      this._metricId = value.metricId;
      this._groupBy.internalValue = value.groupBy;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // api_query - computed: false, optional: false, required: true
  private _apiQuery?: string; 
  public get apiQuery() {
    return this.getStringAttribute('api_query');
  }
  public set apiQuery(value: string) {
    this._apiQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiQueryInput() {
    return this._apiQuery;
  }

  // include_internal - computed: false, optional: true, required: false
  private _includeInternal?: boolean | cdktf.IResolvable; 
  public get includeInternal() {
    return this.getBooleanAttribute('include_internal');
  }
  public set includeInternal(value: boolean | cdktf.IResolvable) {
    this._includeInternal = value;
  }
  public resetIncludeInternal() {
    this._includeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInternalInput() {
    return this._includeInternal;
  }

  // include_synthetic - computed: false, optional: true, required: false
  private _includeSynthetic?: boolean | cdktf.IResolvable; 
  public get includeSynthetic() {
    return this.getBooleanAttribute('include_synthetic');
  }
  public set includeSynthetic(value: boolean | cdktf.IResolvable) {
    this._includeSynthetic = value;
  }
  public resetIncludeSynthetic() {
    this._includeSynthetic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSyntheticInput() {
    return this._includeSynthetic;
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new SloObjectiveCountMetricsGoodInstanaApplicationGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: SloObjectiveCountMetricsGoodInstanaApplicationGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodInstanaApplicationList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodInstanaApplication[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodInstanaApplicationOutputReference {
    return new SloObjectiveCountMetricsGoodInstanaApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodInstanaInfrastructure {
  /**
  * Metric ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * Metric retrieval method 'query' or 'snapshot'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_retrieval_method Slo#metric_retrieval_method}
  */
  readonly metricRetrievalMethod: string;
  /**
  * Plugin ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#plugin_id Slo#plugin_id}
  */
  readonly pluginId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
  /**
  * Snapshot ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#snapshot_id Slo#snapshot_id}
  */
  readonly snapshotId?: string;
}

export function sloObjectiveCountMetricsGoodInstanaInfrastructureToTerraform(struct?: SloObjectiveCountMetricsGoodInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    metric_retrieval_method: cdktf.stringToTerraform(struct!.metricRetrievalMethod),
    plugin_id: cdktf.stringToTerraform(struct!.pluginId),
    query: cdktf.stringToTerraform(struct!.query),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
  }
}


export function sloObjectiveCountMetricsGoodInstanaInfrastructureToHclTerraform(struct?: SloObjectiveCountMetricsGoodInstanaInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_retrieval_method: {
      value: cdktf.stringToHclTerraform(struct!.metricRetrievalMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin_id: {
      value: cdktf.stringToHclTerraform(struct!.pluginId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodInstanaInfrastructureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodInstanaInfrastructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._metricRetrievalMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricRetrievalMethod = this._metricRetrievalMethod;
    }
    if (this._pluginId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginId = this._pluginId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodInstanaInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricId = undefined;
      this._metricRetrievalMethod = undefined;
      this._pluginId = undefined;
      this._query = undefined;
      this._snapshotId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricId = value.metricId;
      this._metricRetrievalMethod = value.metricRetrievalMethod;
      this._pluginId = value.pluginId;
      this._query = value.query;
      this._snapshotId = value.snapshotId;
    }
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // metric_retrieval_method - computed: false, optional: false, required: true
  private _metricRetrievalMethod?: string; 
  public get metricRetrievalMethod() {
    return this.getStringAttribute('metric_retrieval_method');
  }
  public set metricRetrievalMethod(value: string) {
    this._metricRetrievalMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricRetrievalMethodInput() {
    return this._metricRetrievalMethod;
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }
}

export class SloObjectiveCountMetricsGoodInstanaInfrastructureList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodInstanaInfrastructure[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodInstanaInfrastructureOutputReference {
    return new SloObjectiveCountMetricsGoodInstanaInfrastructureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodInstana {
  /**
  * Instana metric type 'application' or 'infrastructure'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_type Slo#metric_type}
  */
  readonly metricType: string;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#application Slo#application}
  */
  readonly application?: SloObjectiveCountMetricsGoodInstanaApplication[] | cdktf.IResolvable;
  /**
  * infrastructure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#infrastructure Slo#infrastructure}
  */
  readonly infrastructure?: SloObjectiveCountMetricsGoodInstanaInfrastructure[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodInstanaToTerraform(struct?: SloObjectiveCountMetricsGoodInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    application: cdktf.listMapper(sloObjectiveCountMetricsGoodInstanaApplicationToTerraform, true)(struct!.application),
    infrastructure: cdktf.listMapper(sloObjectiveCountMetricsGoodInstanaInfrastructureToTerraform, true)(struct!.infrastructure),
  }
}


export function sloObjectiveCountMetricsGoodInstanaToHclTerraform(struct?: SloObjectiveCountMetricsGoodInstana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodInstanaApplicationToHclTerraform, true)(struct!.application),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodInstanaApplicationList",
    },
    infrastructure: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodInstanaInfrastructureToHclTerraform, true)(struct!.infrastructure),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodInstanaInfrastructureList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodInstanaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodInstana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._application?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application?.internalValue;
    }
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodInstana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricType = undefined;
      this._application.internalValue = undefined;
      this._infrastructure.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricType = value.metricType;
      this._application.internalValue = value.application;
      this._infrastructure.internalValue = value.infrastructure;
    }
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // application - computed: false, optional: true, required: false
  private _application = new SloObjectiveCountMetricsGoodInstanaApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }
  public putApplication(value: SloObjectiveCountMetricsGoodInstanaApplication[] | cdktf.IResolvable) {
    this._application.internalValue = value;
  }
  public resetApplication() {
    this._application.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // infrastructure - computed: false, optional: true, required: false
  private _infrastructure = new SloObjectiveCountMetricsGoodInstanaInfrastructureList(this, "infrastructure", false);
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: SloObjectiveCountMetricsGoodInstanaInfrastructure[] | cdktf.IResolvable) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodInstanaList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodInstana[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodInstanaOutputReference {
    return new SloObjectiveCountMetricsGoodInstanaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodLightstep {
  /**
  * Optional value to filter by percentiles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#percentile Slo#percentile}
  */
  readonly percentile?: number;
  /**
  * ID of the metrics stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#stream_id Slo#stream_id}
  */
  readonly streamId?: string;
  /**
  * Type of data to filter by
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#type_of_data Slo#type_of_data}
  */
  readonly typeOfData: string;
  /**
  * UQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#uql Slo#uql}
  */
  readonly uql?: string;
}

export function sloObjectiveCountMetricsGoodLightstepToTerraform(struct?: SloObjectiveCountMetricsGoodLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentile: cdktf.numberToTerraform(struct!.percentile),
    stream_id: cdktf.stringToTerraform(struct!.streamId),
    type_of_data: cdktf.stringToTerraform(struct!.typeOfData),
    uql: cdktf.stringToTerraform(struct!.uql),
  }
}


export function sloObjectiveCountMetricsGoodLightstepToHclTerraform(struct?: SloObjectiveCountMetricsGoodLightstep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentile: {
      value: cdktf.numberToHclTerraform(struct!.percentile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_id: {
      value: cdktf.stringToHclTerraform(struct!.streamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_of_data: {
      value: cdktf.stringToHclTerraform(struct!.typeOfData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uql: {
      value: cdktf.stringToHclTerraform(struct!.uql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodLightstepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodLightstep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentile = this._percentile;
    }
    if (this._streamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamId = this._streamId;
    }
    if (this._typeOfData !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOfData = this._typeOfData;
    }
    if (this._uql !== undefined) {
      hasAnyValues = true;
      internalValueResult.uql = this._uql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodLightstep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentile = undefined;
      this._streamId = undefined;
      this._typeOfData = undefined;
      this._uql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentile = value.percentile;
      this._streamId = value.streamId;
      this._typeOfData = value.typeOfData;
      this._uql = value.uql;
    }
  }

  // percentile - computed: false, optional: true, required: false
  private _percentile?: number; 
  public get percentile() {
    return this.getNumberAttribute('percentile');
  }
  public set percentile(value: number) {
    this._percentile = value;
  }
  public resetPercentile() {
    this._percentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentileInput() {
    return this._percentile;
  }

  // stream_id - computed: false, optional: true, required: false
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  public resetStreamId() {
    this._streamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // type_of_data - computed: false, optional: false, required: true
  private _typeOfData?: string; 
  public get typeOfData() {
    return this.getStringAttribute('type_of_data');
  }
  public set typeOfData(value: string) {
    this._typeOfData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfDataInput() {
    return this._typeOfData;
  }

  // uql - computed: false, optional: true, required: false
  private _uql?: string; 
  public get uql() {
    return this.getStringAttribute('uql');
  }
  public set uql(value: string) {
    this._uql = value;
  }
  public resetUql() {
    this._uql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uqlInput() {
    return this._uql;
  }
}

export class SloObjectiveCountMetricsGoodLightstepList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodLightstep[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodLightstepOutputReference {
    return new SloObjectiveCountMetricsGoodLightstepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodLogicMonitor {
  /**
  * Checkpoint ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#checkpoint_id Slo#checkpoint_id}
  */
  readonly checkpointId?: string;
  /**
  * Device Datasource Instance ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#device_data_source_instance_id Slo#device_data_source_instance_id}
  */
  readonly deviceDataSourceInstanceId?: number;
  /**
  * Graph ID. Used by Query type = device_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#graph_id Slo#graph_id}
  */
  readonly graphId?: number;
  /**
  * Graph Name. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#graph_name Slo#graph_name}
  */
  readonly graphName?: string;
  /**
  * Line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#line Slo#line}
  */
  readonly line: string;
  /**
  * Query type: device_metrics or website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query_type Slo#query_type}
  */
  readonly queryType: string;
  /**
  * Website ID. Used by Query type = website_metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#website_id Slo#website_id}
  */
  readonly websiteId?: string;
}

export function sloObjectiveCountMetricsGoodLogicMonitorToTerraform(struct?: SloObjectiveCountMetricsGoodLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    checkpoint_id: cdktf.stringToTerraform(struct!.checkpointId),
    device_data_source_instance_id: cdktf.numberToTerraform(struct!.deviceDataSourceInstanceId),
    graph_id: cdktf.numberToTerraform(struct!.graphId),
    graph_name: cdktf.stringToTerraform(struct!.graphName),
    line: cdktf.stringToTerraform(struct!.line),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    website_id: cdktf.stringToTerraform(struct!.websiteId),
  }
}


export function sloObjectiveCountMetricsGoodLogicMonitorToHclTerraform(struct?: SloObjectiveCountMetricsGoodLogicMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    checkpoint_id: {
      value: cdktf.stringToHclTerraform(struct!.checkpointId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_data_source_instance_id: {
      value: cdktf.numberToHclTerraform(struct!.deviceDataSourceInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_id: {
      value: cdktf.numberToHclTerraform(struct!.graphId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    graph_name: {
      value: cdktf.stringToHclTerraform(struct!.graphName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    line: {
      value: cdktf.stringToHclTerraform(struct!.line),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website_id: {
      value: cdktf.stringToHclTerraform(struct!.websiteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodLogicMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodLogicMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkpointId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointId = this._checkpointId;
    }
    if (this._deviceDataSourceInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDataSourceInstanceId = this._deviceDataSourceInstanceId;
    }
    if (this._graphId !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphId = this._graphId;
    }
    if (this._graphName !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphName = this._graphName;
    }
    if (this._line !== undefined) {
      hasAnyValues = true;
      internalValueResult.line = this._line;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._websiteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.websiteId = this._websiteId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodLogicMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkpointId = undefined;
      this._deviceDataSourceInstanceId = undefined;
      this._graphId = undefined;
      this._graphName = undefined;
      this._line = undefined;
      this._queryType = undefined;
      this._websiteId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkpointId = value.checkpointId;
      this._deviceDataSourceInstanceId = value.deviceDataSourceInstanceId;
      this._graphId = value.graphId;
      this._graphName = value.graphName;
      this._line = value.line;
      this._queryType = value.queryType;
      this._websiteId = value.websiteId;
    }
  }

  // checkpoint_id - computed: false, optional: true, required: false
  private _checkpointId?: string; 
  public get checkpointId() {
    return this.getStringAttribute('checkpoint_id');
  }
  public set checkpointId(value: string) {
    this._checkpointId = value;
  }
  public resetCheckpointId() {
    this._checkpointId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointIdInput() {
    return this._checkpointId;
  }

  // device_data_source_instance_id - computed: false, optional: true, required: false
  private _deviceDataSourceInstanceId?: number; 
  public get deviceDataSourceInstanceId() {
    return this.getNumberAttribute('device_data_source_instance_id');
  }
  public set deviceDataSourceInstanceId(value: number) {
    this._deviceDataSourceInstanceId = value;
  }
  public resetDeviceDataSourceInstanceId() {
    this._deviceDataSourceInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDataSourceInstanceIdInput() {
    return this._deviceDataSourceInstanceId;
  }

  // graph_id - computed: false, optional: true, required: false
  private _graphId?: number; 
  public get graphId() {
    return this.getNumberAttribute('graph_id');
  }
  public set graphId(value: number) {
    this._graphId = value;
  }
  public resetGraphId() {
    this._graphId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphIdInput() {
    return this._graphId;
  }

  // graph_name - computed: false, optional: true, required: false
  private _graphName?: string; 
  public get graphName() {
    return this.getStringAttribute('graph_name');
  }
  public set graphName(value: string) {
    this._graphName = value;
  }
  public resetGraphName() {
    this._graphName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphNameInput() {
    return this._graphName;
  }

  // line - computed: false, optional: false, required: true
  private _line?: string; 
  public get line() {
    return this.getStringAttribute('line');
  }
  public set line(value: string) {
    this._line = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lineInput() {
    return this._line;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // website_id - computed: false, optional: true, required: false
  private _websiteId?: string; 
  public get websiteId() {
    return this.getStringAttribute('website_id');
  }
  public set websiteId(value: string) {
    this._websiteId = value;
  }
  public resetWebsiteId() {
    this._websiteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteIdInput() {
    return this._websiteId;
  }
}

export class SloObjectiveCountMetricsGoodLogicMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodLogicMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodLogicMonitorOutputReference {
    return new SloObjectiveCountMetricsGoodLogicMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodNewrelic {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#nrql Slo#nrql}
  */
  readonly nrql: string;
}

export function sloObjectiveCountMetricsGoodNewrelicToTerraform(struct?: SloObjectiveCountMetricsGoodNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nrql: cdktf.stringToTerraform(struct!.nrql),
  }
}


export function sloObjectiveCountMetricsGoodNewrelicToHclTerraform(struct?: SloObjectiveCountMetricsGoodNewrelic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nrql: {
      value: cdktf.stringToHclTerraform(struct!.nrql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodNewrelicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodNewrelic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nrql !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrql = this._nrql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodNewrelic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nrql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nrql = value.nrql;
    }
  }

  // nrql - computed: false, optional: false, required: true
  private _nrql?: string; 
  public get nrql() {
    return this.getStringAttribute('nrql');
  }
  public set nrql(value: string) {
    this._nrql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nrqlInput() {
    return this._nrql;
  }
}

export class SloObjectiveCountMetricsGoodNewrelicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodNewrelic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodNewrelicOutputReference {
    return new SloObjectiveCountMetricsGoodNewrelicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodOpentsdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodOpentsdbToTerraform(struct?: SloObjectiveCountMetricsGoodOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodOpentsdbToHclTerraform(struct?: SloObjectiveCountMetricsGoodOpentsdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodOpentsdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodOpentsdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodOpentsdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodOpentsdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodOpentsdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodOpentsdbOutputReference {
    return new SloObjectiveCountMetricsGoodOpentsdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodPingdom {
  /**
  * Pingdom uptime or transaction check's ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#check_id Slo#check_id}
  */
  readonly checkId: string;
  /**
  * Pingdom check type - uptime or transaction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#check_type Slo#check_type}
  */
  readonly checkType?: string;
  /**
  * Optional for the Uptime checks. Use it to filter the Pingdom check results by status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#status Slo#status}
  */
  readonly status?: string;
}

export function sloObjectiveCountMetricsGoodPingdomToTerraform(struct?: SloObjectiveCountMetricsGoodPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_id: cdktf.stringToTerraform(struct!.checkId),
    check_type: cdktf.stringToTerraform(struct!.checkType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function sloObjectiveCountMetricsGoodPingdomToHclTerraform(struct?: SloObjectiveCountMetricsGoodPingdom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_id: {
      value: cdktf.stringToHclTerraform(struct!.checkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_type: {
      value: cdktf.stringToHclTerraform(struct!.checkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodPingdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodPingdom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkId = this._checkId;
    }
    if (this._checkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkType = this._checkType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodPingdom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkId = undefined;
      this._checkType = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkId = value.checkId;
      this._checkType = value.checkType;
      this._status = value.status;
    }
  }

  // check_id - computed: false, optional: false, required: true
  private _checkId?: string; 
  public get checkId() {
    return this.getStringAttribute('check_id');
  }
  public set checkId(value: string) {
    this._checkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get checkIdInput() {
    return this._checkId;
  }

  // check_type - computed: false, optional: true, required: false
  private _checkType?: string; 
  public get checkType() {
    return this.getStringAttribute('check_type');
  }
  public set checkType(value: string) {
    this._checkType = value;
  }
  public resetCheckType() {
    this._checkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkTypeInput() {
    return this._checkType;
  }

  // status - computed: false, optional: true, required: false
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
}

export class SloObjectiveCountMetricsGoodPingdomList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodPingdom[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodPingdomOutputReference {
    return new SloObjectiveCountMetricsGoodPingdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsGoodPrometheusToTerraform(struct?: SloObjectiveCountMetricsGoodPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsGoodPrometheusToHclTerraform(struct?: SloObjectiveCountMetricsGoodPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsGoodPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodPrometheusOutputReference {
    return new SloObjectiveCountMetricsGoodPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodRedshift {
  /**
  * Redshift custer ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#cluster_id Slo#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#database_name Slo#database_name}
  */
  readonly databaseName: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Region of the Redshift instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
}

export function sloObjectiveCountMetricsGoodRedshiftToTerraform(struct?: SloObjectiveCountMetricsGoodRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    query: cdktf.stringToTerraform(struct!.query),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function sloObjectiveCountMetricsGoodRedshiftToHclTerraform(struct?: SloObjectiveCountMetricsGoodRedshift | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodRedshiftOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodRedshift | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodRedshift | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._databaseName = undefined;
      this._query = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._databaseName = value.databaseName;
      this._query = value.query;
      this._region = value.region;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class SloObjectiveCountMetricsGoodRedshiftList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodRedshift[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodRedshiftOutputReference {
    return new SloObjectiveCountMetricsGoodRedshiftOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodSplunk {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodSplunkToTerraform(struct?: SloObjectiveCountMetricsGoodSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodSplunkToHclTerraform(struct?: SloObjectiveCountMetricsGoodSplunk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodSplunkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodSplunk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodSplunk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodSplunkList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodSplunk[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodSplunkOutputReference {
    return new SloObjectiveCountMetricsGoodSplunkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodSplunkObservability {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#program Slo#program}
  */
  readonly program: string;
}

export function sloObjectiveCountMetricsGoodSplunkObservabilityToTerraform(struct?: SloObjectiveCountMetricsGoodSplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    program: cdktf.stringToTerraform(struct!.program),
  }
}


export function sloObjectiveCountMetricsGoodSplunkObservabilityToHclTerraform(struct?: SloObjectiveCountMetricsGoodSplunkObservability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    program: {
      value: cdktf.stringToHclTerraform(struct!.program),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodSplunkObservabilityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodSplunkObservability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._program !== undefined) {
      hasAnyValues = true;
      internalValueResult.program = this._program;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodSplunkObservability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._program = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._program = value.program;
    }
  }

  // program - computed: false, optional: false, required: true
  private _program?: string; 
  public get program() {
    return this.getStringAttribute('program');
  }
  public set program(value: string) {
    this._program = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programInput() {
    return this._program;
  }
}

export class SloObjectiveCountMetricsGoodSplunkObservabilityList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodSplunkObservability[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodSplunkObservabilityOutputReference {
    return new SloObjectiveCountMetricsGoodSplunkObservabilityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodSumologic {
  /**
  * Period of data aggregation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#quantization Slo#quantization}
  */
  readonly quantization?: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
  /**
  * Aggregation function - avg, sum, min, max, count, none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#rollup Slo#rollup}
  */
  readonly rollup?: string;
  /**
  * Sumologic source - metrics or logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#type Slo#type}
  */
  readonly type: string;
}

export function sloObjectiveCountMetricsGoodSumologicToTerraform(struct?: SloObjectiveCountMetricsGoodSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quantization: cdktf.stringToTerraform(struct!.quantization),
    query: cdktf.stringToTerraform(struct!.query),
    rollup: cdktf.stringToTerraform(struct!.rollup),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sloObjectiveCountMetricsGoodSumologicToHclTerraform(struct?: SloObjectiveCountMetricsGoodSumologic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quantization: {
      value: cdktf.stringToHclTerraform(struct!.quantization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollup: {
      value: cdktf.stringToHclTerraform(struct!.rollup),
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

export class SloObjectiveCountMetricsGoodSumologicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodSumologic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quantization !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantization = this._quantization;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._rollup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollup = this._rollup;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodSumologic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._quantization = undefined;
      this._query = undefined;
      this._rollup = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._quantization = value.quantization;
      this._query = value.query;
      this._rollup = value.rollup;
      this._type = value.type;
    }
  }

  // quantization - computed: false, optional: true, required: false
  private _quantization?: string; 
  public get quantization() {
    return this.getStringAttribute('quantization');
  }
  public set quantization(value: string) {
    this._quantization = value;
  }
  public resetQuantization() {
    this._quantization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantizationInput() {
    return this._quantization;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // rollup - computed: false, optional: true, required: false
  private _rollup?: string; 
  public get rollup() {
    return this.getStringAttribute('rollup');
  }
  public set rollup(value: string) {
    this._rollup = value;
  }
  public resetRollup() {
    this._rollup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollupInput() {
    return this._rollup;
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

export class SloObjectiveCountMetricsGoodSumologicList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodSumologic[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodSumologicOutputReference {
    return new SloObjectiveCountMetricsGoodSumologicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodThousandeyes {
  /**
  * ID of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#test_id Slo#test_id}
  */
  readonly testId: number;
  /**
  * Type of the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#test_type Slo#test_type}
  */
  readonly testType?: string;
}

export function sloObjectiveCountMetricsGoodThousandeyesToTerraform(struct?: SloObjectiveCountMetricsGoodThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    test_id: cdktf.numberToTerraform(struct!.testId),
    test_type: cdktf.stringToTerraform(struct!.testType),
  }
}


export function sloObjectiveCountMetricsGoodThousandeyesToHclTerraform(struct?: SloObjectiveCountMetricsGoodThousandeyes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    test_id: {
      value: cdktf.numberToHclTerraform(struct!.testId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_type: {
      value: cdktf.stringToHclTerraform(struct!.testType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodThousandeyesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodThousandeyes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._testId !== undefined) {
      hasAnyValues = true;
      internalValueResult.testId = this._testId;
    }
    if (this._testType !== undefined) {
      hasAnyValues = true;
      internalValueResult.testType = this._testType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodThousandeyes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._testId = undefined;
      this._testType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._testId = value.testId;
      this._testType = value.testType;
    }
  }

  // test_id - computed: false, optional: false, required: true
  private _testId?: number; 
  public get testId() {
    return this.getNumberAttribute('test_id');
  }
  public set testId(value: number) {
    this._testId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testIdInput() {
    return this._testId;
  }

  // test_type - computed: false, optional: true, required: false
  private _testType?: string; 
  public get testType() {
    return this.getStringAttribute('test_type');
  }
  public set testType(value: string) {
    this._testType = value;
  }
  public resetTestType() {
    this._testType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testTypeInput() {
    return this._testType;
  }
}

export class SloObjectiveCountMetricsGoodThousandeyesList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodThousandeyes[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodThousandeyesOutputReference {
    return new SloObjectiveCountMetricsGoodThousandeyesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGood {
  /**
  * amazon_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#amazon_prometheus Slo#amazon_prometheus}
  */
  readonly amazonPrometheus?: SloObjectiveCountMetricsGoodAmazonPrometheus[] | cdktf.IResolvable;
  /**
  * appdynamics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#appdynamics Slo#appdynamics}
  */
  readonly appdynamics?: SloObjectiveCountMetricsGoodAppdynamics[] | cdktf.IResolvable;
  /**
  * azure_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#azure_monitor Slo#azure_monitor}
  */
  readonly azureMonitor?: SloObjectiveCountMetricsGoodAzureMonitor[] | cdktf.IResolvable;
  /**
  * azure_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#azure_prometheus Slo#azure_prometheus}
  */
  readonly azurePrometheus?: SloObjectiveCountMetricsGoodAzurePrometheus[] | cdktf.IResolvable;
  /**
  * bigquery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#bigquery Slo#bigquery}
  */
  readonly bigquery?: SloObjectiveCountMetricsGoodBigquery[] | cdktf.IResolvable;
  /**
  * cloudwatch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#cloudwatch Slo#cloudwatch}
  */
  readonly cloudwatch?: SloObjectiveCountMetricsGoodCloudwatch[] | cdktf.IResolvable;
  /**
  * coralogix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#coralogix Slo#coralogix}
  */
  readonly coralogix?: SloObjectiveCountMetricsGoodCoralogix[] | cdktf.IResolvable;
  /**
  * datadog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#datadog Slo#datadog}
  */
  readonly datadog?: SloObjectiveCountMetricsGoodDatadog[] | cdktf.IResolvable;
  /**
  * dynatrace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#dynatrace Slo#dynatrace}
  */
  readonly dynatrace?: SloObjectiveCountMetricsGoodDynatrace[] | cdktf.IResolvable;
  /**
  * elasticsearch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#elasticsearch Slo#elasticsearch}
  */
  readonly elasticsearch?: SloObjectiveCountMetricsGoodElasticsearch[] | cdktf.IResolvable;
  /**
  * gcm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#gcm Slo#gcm}
  */
  readonly gcm?: SloObjectiveCountMetricsGoodGcm[] | cdktf.IResolvable;
  /**
  * grafana_loki block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#grafana_loki Slo#grafana_loki}
  */
  readonly grafanaLoki?: SloObjectiveCountMetricsGoodGrafanaLoki[] | cdktf.IResolvable;
  /**
  * graphite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#graphite Slo#graphite}
  */
  readonly graphite?: SloObjectiveCountMetricsGoodGraphite[] | cdktf.IResolvable;
  /**
  * honeycomb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#honeycomb Slo#honeycomb}
  */
  readonly honeycomb?: SloObjectiveCountMetricsGoodHoneycomb[] | cdktf.IResolvable;
  /**
  * influxdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#influxdb Slo#influxdb}
  */
  readonly influxdb?: SloObjectiveCountMetricsGoodInfluxdb[] | cdktf.IResolvable;
  /**
  * instana block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#instana Slo#instana}
  */
  readonly instana?: SloObjectiveCountMetricsGoodInstana[] | cdktf.IResolvable;
  /**
  * lightstep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#lightstep Slo#lightstep}
  */
  readonly lightstep?: SloObjectiveCountMetricsGoodLightstep[] | cdktf.IResolvable;
  /**
  * logic_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#logic_monitor Slo#logic_monitor}
  */
  readonly logicMonitor?: SloObjectiveCountMetricsGoodLogicMonitor[] | cdktf.IResolvable;
  /**
  * newrelic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#newrelic Slo#newrelic}
  */
  readonly newrelic?: SloObjectiveCountMetricsGoodNewrelic[] | cdktf.IResolvable;
  /**
  * opentsdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#opentsdb Slo#opentsdb}
  */
  readonly opentsdb?: SloObjectiveCountMetricsGoodOpentsdb[] | cdktf.IResolvable;
  /**
  * pingdom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#pingdom Slo#pingdom}
  */
  readonly pingdom?: SloObjectiveCountMetricsGoodPingdom[] | cdktf.IResolvable;
  /**
  * prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#prometheus Slo#prometheus}
  */
  readonly prometheus?: SloObjectiveCountMetricsGoodPrometheus[] | cdktf.IResolvable;
  /**
  * redshift block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#redshift Slo#redshift}
  */
  readonly redshift?: SloObjectiveCountMetricsGoodRedshift[] | cdktf.IResolvable;
  /**
  * splunk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#splunk Slo#splunk}
  */
  readonly splunk?: SloObjectiveCountMetricsGoodSplunk[] | cdktf.IResolvable;
  /**
  * splunk_observability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#splunk_observability Slo#splunk_observability}
  */
  readonly splunkObservability?: SloObjectiveCountMetricsGoodSplunkObservability[] | cdktf.IResolvable;
  /**
  * sumologic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#sumologic Slo#sumologic}
  */
  readonly sumologic?: SloObjectiveCountMetricsGoodSumologic[] | cdktf.IResolvable;
  /**
  * thousandeyes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#thousandeyes Slo#thousandeyes}
  */
  readonly thousandeyes?: SloObjectiveCountMetricsGoodThousandeyes[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodToTerraform(struct?: SloObjectiveCountMetricsGood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon_prometheus: cdktf.listMapper(sloObjectiveCountMetricsGoodAmazonPrometheusToTerraform, true)(struct!.amazonPrometheus),
    appdynamics: cdktf.listMapper(sloObjectiveCountMetricsGoodAppdynamicsToTerraform, true)(struct!.appdynamics),
    azure_monitor: cdktf.listMapper(sloObjectiveCountMetricsGoodAzureMonitorToTerraform, true)(struct!.azureMonitor),
    azure_prometheus: cdktf.listMapper(sloObjectiveCountMetricsGoodAzurePrometheusToTerraform, true)(struct!.azurePrometheus),
    bigquery: cdktf.listMapper(sloObjectiveCountMetricsGoodBigqueryToTerraform, true)(struct!.bigquery),
    cloudwatch: cdktf.listMapper(sloObjectiveCountMetricsGoodCloudwatchToTerraform, true)(struct!.cloudwatch),
    coralogix: cdktf.listMapper(sloObjectiveCountMetricsGoodCoralogixToTerraform, true)(struct!.coralogix),
    datadog: cdktf.listMapper(sloObjectiveCountMetricsGoodDatadogToTerraform, true)(struct!.datadog),
    dynatrace: cdktf.listMapper(sloObjectiveCountMetricsGoodDynatraceToTerraform, true)(struct!.dynatrace),
    elasticsearch: cdktf.listMapper(sloObjectiveCountMetricsGoodElasticsearchToTerraform, true)(struct!.elasticsearch),
    gcm: cdktf.listMapper(sloObjectiveCountMetricsGoodGcmToTerraform, true)(struct!.gcm),
    grafana_loki: cdktf.listMapper(sloObjectiveCountMetricsGoodGrafanaLokiToTerraform, true)(struct!.grafanaLoki),
    graphite: cdktf.listMapper(sloObjectiveCountMetricsGoodGraphiteToTerraform, true)(struct!.graphite),
    honeycomb: cdktf.listMapper(sloObjectiveCountMetricsGoodHoneycombToTerraform, true)(struct!.honeycomb),
    influxdb: cdktf.listMapper(sloObjectiveCountMetricsGoodInfluxdbToTerraform, true)(struct!.influxdb),
    instana: cdktf.listMapper(sloObjectiveCountMetricsGoodInstanaToTerraform, true)(struct!.instana),
    lightstep: cdktf.listMapper(sloObjectiveCountMetricsGoodLightstepToTerraform, true)(struct!.lightstep),
    logic_monitor: cdktf.listMapper(sloObjectiveCountMetricsGoodLogicMonitorToTerraform, true)(struct!.logicMonitor),
    newrelic: cdktf.listMapper(sloObjectiveCountMetricsGoodNewrelicToTerraform, true)(struct!.newrelic),
    opentsdb: cdktf.listMapper(sloObjectiveCountMetricsGoodOpentsdbToTerraform, true)(struct!.opentsdb),
    pingdom: cdktf.listMapper(sloObjectiveCountMetricsGoodPingdomToTerraform, true)(struct!.pingdom),
    prometheus: cdktf.listMapper(sloObjectiveCountMetricsGoodPrometheusToTerraform, true)(struct!.prometheus),
    redshift: cdktf.listMapper(sloObjectiveCountMetricsGoodRedshiftToTerraform, true)(struct!.redshift),
    splunk: cdktf.listMapper(sloObjectiveCountMetricsGoodSplunkToTerraform, true)(struct!.splunk),
    splunk_observability: cdktf.listMapper(sloObjectiveCountMetricsGoodSplunkObservabilityToTerraform, true)(struct!.splunkObservability),
    sumologic: cdktf.listMapper(sloObjectiveCountMetricsGoodSumologicToTerraform, true)(struct!.sumologic),
    thousandeyes: cdktf.listMapper(sloObjectiveCountMetricsGoodThousandeyesToTerraform, true)(struct!.thousandeyes),
  }
}


export function sloObjectiveCountMetricsGoodToHclTerraform(struct?: SloObjectiveCountMetricsGood | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodAmazonPrometheusToHclTerraform, true)(struct!.amazonPrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodAmazonPrometheusList",
    },
    appdynamics: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodAppdynamicsToHclTerraform, true)(struct!.appdynamics),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodAppdynamicsList",
    },
    azure_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodAzureMonitorToHclTerraform, true)(struct!.azureMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodAzureMonitorList",
    },
    azure_prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodAzurePrometheusToHclTerraform, true)(struct!.azurePrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodAzurePrometheusList",
    },
    bigquery: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodBigqueryToHclTerraform, true)(struct!.bigquery),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodBigqueryList",
    },
    cloudwatch: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodCloudwatchToHclTerraform, true)(struct!.cloudwatch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodCloudwatchList",
    },
    coralogix: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodCoralogixToHclTerraform, true)(struct!.coralogix),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodCoralogixList",
    },
    datadog: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodDatadogToHclTerraform, true)(struct!.datadog),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodDatadogList",
    },
    dynatrace: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodDynatraceToHclTerraform, true)(struct!.dynatrace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodDynatraceList",
    },
    elasticsearch: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodElasticsearchToHclTerraform, true)(struct!.elasticsearch),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodElasticsearchList",
    },
    gcm: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodGcmToHclTerraform, true)(struct!.gcm),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodGcmList",
    },
    grafana_loki: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodGrafanaLokiToHclTerraform, true)(struct!.grafanaLoki),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodGrafanaLokiList",
    },
    graphite: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodGraphiteToHclTerraform, true)(struct!.graphite),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodGraphiteList",
    },
    honeycomb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodHoneycombToHclTerraform, true)(struct!.honeycomb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodHoneycombList",
    },
    influxdb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodInfluxdbToHclTerraform, true)(struct!.influxdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodInfluxdbList",
    },
    instana: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodInstanaToHclTerraform, true)(struct!.instana),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodInstanaList",
    },
    lightstep: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodLightstepToHclTerraform, true)(struct!.lightstep),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodLightstepList",
    },
    logic_monitor: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodLogicMonitorToHclTerraform, true)(struct!.logicMonitor),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodLogicMonitorList",
    },
    newrelic: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodNewrelicToHclTerraform, true)(struct!.newrelic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodNewrelicList",
    },
    opentsdb: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodOpentsdbToHclTerraform, true)(struct!.opentsdb),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodOpentsdbList",
    },
    pingdom: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodPingdomToHclTerraform, true)(struct!.pingdom),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodPingdomList",
    },
    prometheus: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodPrometheusToHclTerraform, true)(struct!.prometheus),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodPrometheusList",
    },
    redshift: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodRedshiftToHclTerraform, true)(struct!.redshift),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodRedshiftList",
    },
    splunk: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodSplunkToHclTerraform, true)(struct!.splunk),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodSplunkList",
    },
    splunk_observability: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodSplunkObservabilityToHclTerraform, true)(struct!.splunkObservability),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodSplunkObservabilityList",
    },
    sumologic: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodSumologicToHclTerraform, true)(struct!.sumologic),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodSumologicList",
    },
    thousandeyes: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodThousandeyesToHclTerraform, true)(struct!.thousandeyes),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodThousandeyesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGood | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazonPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonPrometheus = this._amazonPrometheus?.internalValue;
    }
    if (this._appdynamics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appdynamics = this._appdynamics?.internalValue;
    }
    if (this._azureMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureMonitor = this._azureMonitor?.internalValue;
    }
    if (this._azurePrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azurePrometheus = this._azurePrometheus?.internalValue;
    }
    if (this._bigquery?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigquery = this._bigquery?.internalValue;
    }
    if (this._cloudwatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatch = this._cloudwatch?.internalValue;
    }
    if (this._coralogix?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coralogix = this._coralogix?.internalValue;
    }
    if (this._datadog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datadog = this._datadog?.internalValue;
    }
    if (this._dynatrace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynatrace = this._dynatrace?.internalValue;
    }
    if (this._elasticsearch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.elasticsearch = this._elasticsearch?.internalValue;
    }
    if (this._gcm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcm = this._gcm?.internalValue;
    }
    if (this._grafanaLoki?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grafanaLoki = this._grafanaLoki?.internalValue;
    }
    if (this._graphite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphite = this._graphite?.internalValue;
    }
    if (this._honeycomb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.honeycomb = this._honeycomb?.internalValue;
    }
    if (this._influxdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb?.internalValue;
    }
    if (this._instana?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instana = this._instana?.internalValue;
    }
    if (this._lightstep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lightstep = this._lightstep?.internalValue;
    }
    if (this._logicMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicMonitor = this._logicMonitor?.internalValue;
    }
    if (this._newrelic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newrelic = this._newrelic?.internalValue;
    }
    if (this._opentsdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opentsdb = this._opentsdb?.internalValue;
    }
    if (this._pingdom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingdom = this._pingdom?.internalValue;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    if (this._redshift?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redshift = this._redshift?.internalValue;
    }
    if (this._splunk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunk = this._splunk?.internalValue;
    }
    if (this._splunkObservability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splunkObservability = this._splunkObservability?.internalValue;
    }
    if (this._sumologic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sumologic = this._sumologic?.internalValue;
    }
    if (this._thousandeyes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thousandeyes = this._thousandeyes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGood | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = undefined;
      this._appdynamics.internalValue = undefined;
      this._azureMonitor.internalValue = undefined;
      this._azurePrometheus.internalValue = undefined;
      this._bigquery.internalValue = undefined;
      this._cloudwatch.internalValue = undefined;
      this._coralogix.internalValue = undefined;
      this._datadog.internalValue = undefined;
      this._dynatrace.internalValue = undefined;
      this._elasticsearch.internalValue = undefined;
      this._gcm.internalValue = undefined;
      this._grafanaLoki.internalValue = undefined;
      this._graphite.internalValue = undefined;
      this._honeycomb.internalValue = undefined;
      this._influxdb.internalValue = undefined;
      this._instana.internalValue = undefined;
      this._lightstep.internalValue = undefined;
      this._logicMonitor.internalValue = undefined;
      this._newrelic.internalValue = undefined;
      this._opentsdb.internalValue = undefined;
      this._pingdom.internalValue = undefined;
      this._prometheus.internalValue = undefined;
      this._redshift.internalValue = undefined;
      this._splunk.internalValue = undefined;
      this._splunkObservability.internalValue = undefined;
      this._sumologic.internalValue = undefined;
      this._thousandeyes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazonPrometheus.internalValue = value.amazonPrometheus;
      this._appdynamics.internalValue = value.appdynamics;
      this._azureMonitor.internalValue = value.azureMonitor;
      this._azurePrometheus.internalValue = value.azurePrometheus;
      this._bigquery.internalValue = value.bigquery;
      this._cloudwatch.internalValue = value.cloudwatch;
      this._coralogix.internalValue = value.coralogix;
      this._datadog.internalValue = value.datadog;
      this._dynatrace.internalValue = value.dynatrace;
      this._elasticsearch.internalValue = value.elasticsearch;
      this._gcm.internalValue = value.gcm;
      this._grafanaLoki.internalValue = value.grafanaLoki;
      this._graphite.internalValue = value.graphite;
      this._honeycomb.internalValue = value.honeycomb;
      this._influxdb.internalValue = value.influxdb;
      this._instana.internalValue = value.instana;
      this._lightstep.internalValue = value.lightstep;
      this._logicMonitor.internalValue = value.logicMonitor;
      this._newrelic.internalValue = value.newrelic;
      this._opentsdb.internalValue = value.opentsdb;
      this._pingdom.internalValue = value.pingdom;
      this._prometheus.internalValue = value.prometheus;
      this._redshift.internalValue = value.redshift;
      this._splunk.internalValue = value.splunk;
      this._splunkObservability.internalValue = value.splunkObservability;
      this._sumologic.internalValue = value.sumologic;
      this._thousandeyes.internalValue = value.thousandeyes;
    }
  }

  // amazon_prometheus - computed: false, optional: true, required: false
  private _amazonPrometheus = new SloObjectiveCountMetricsGoodAmazonPrometheusList(this, "amazon_prometheus", false);
  public get amazonPrometheus() {
    return this._amazonPrometheus;
  }
  public putAmazonPrometheus(value: SloObjectiveCountMetricsGoodAmazonPrometheus[] | cdktf.IResolvable) {
    this._amazonPrometheus.internalValue = value;
  }
  public resetAmazonPrometheus() {
    this._amazonPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonPrometheusInput() {
    return this._amazonPrometheus.internalValue;
  }

  // appdynamics - computed: false, optional: true, required: false
  private _appdynamics = new SloObjectiveCountMetricsGoodAppdynamicsList(this, "appdynamics", false);
  public get appdynamics() {
    return this._appdynamics;
  }
  public putAppdynamics(value: SloObjectiveCountMetricsGoodAppdynamics[] | cdktf.IResolvable) {
    this._appdynamics.internalValue = value;
  }
  public resetAppdynamics() {
    this._appdynamics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appdynamicsInput() {
    return this._appdynamics.internalValue;
  }

  // azure_monitor - computed: false, optional: true, required: false
  private _azureMonitor = new SloObjectiveCountMetricsGoodAzureMonitorList(this, "azure_monitor", false);
  public get azureMonitor() {
    return this._azureMonitor;
  }
  public putAzureMonitor(value: SloObjectiveCountMetricsGoodAzureMonitor[] | cdktf.IResolvable) {
    this._azureMonitor.internalValue = value;
  }
  public resetAzureMonitor() {
    this._azureMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureMonitorInput() {
    return this._azureMonitor.internalValue;
  }

  // azure_prometheus - computed: false, optional: true, required: false
  private _azurePrometheus = new SloObjectiveCountMetricsGoodAzurePrometheusList(this, "azure_prometheus", false);
  public get azurePrometheus() {
    return this._azurePrometheus;
  }
  public putAzurePrometheus(value: SloObjectiveCountMetricsGoodAzurePrometheus[] | cdktf.IResolvable) {
    this._azurePrometheus.internalValue = value;
  }
  public resetAzurePrometheus() {
    this._azurePrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azurePrometheusInput() {
    return this._azurePrometheus.internalValue;
  }

  // bigquery - computed: false, optional: true, required: false
  private _bigquery = new SloObjectiveCountMetricsGoodBigqueryList(this, "bigquery", false);
  public get bigquery() {
    return this._bigquery;
  }
  public putBigquery(value: SloObjectiveCountMetricsGoodBigquery[] | cdktf.IResolvable) {
    this._bigquery.internalValue = value;
  }
  public resetBigquery() {
    this._bigquery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryInput() {
    return this._bigquery.internalValue;
  }

  // cloudwatch - computed: false, optional: true, required: false
  private _cloudwatch = new SloObjectiveCountMetricsGoodCloudwatchList(this, "cloudwatch", false);
  public get cloudwatch() {
    return this._cloudwatch;
  }
  public putCloudwatch(value: SloObjectiveCountMetricsGoodCloudwatch[] | cdktf.IResolvable) {
    this._cloudwatch.internalValue = value;
  }
  public resetCloudwatch() {
    this._cloudwatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchInput() {
    return this._cloudwatch.internalValue;
  }

  // coralogix - computed: false, optional: true, required: false
  private _coralogix = new SloObjectiveCountMetricsGoodCoralogixList(this, "coralogix", false);
  public get coralogix() {
    return this._coralogix;
  }
  public putCoralogix(value: SloObjectiveCountMetricsGoodCoralogix[] | cdktf.IResolvable) {
    this._coralogix.internalValue = value;
  }
  public resetCoralogix() {
    this._coralogix.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coralogixInput() {
    return this._coralogix.internalValue;
  }

  // datadog - computed: false, optional: true, required: false
  private _datadog = new SloObjectiveCountMetricsGoodDatadogList(this, "datadog", false);
  public get datadog() {
    return this._datadog;
  }
  public putDatadog(value: SloObjectiveCountMetricsGoodDatadog[] | cdktf.IResolvable) {
    this._datadog.internalValue = value;
  }
  public resetDatadog() {
    this._datadog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogInput() {
    return this._datadog.internalValue;
  }

  // dynatrace - computed: false, optional: true, required: false
  private _dynatrace = new SloObjectiveCountMetricsGoodDynatraceList(this, "dynatrace", false);
  public get dynatrace() {
    return this._dynatrace;
  }
  public putDynatrace(value: SloObjectiveCountMetricsGoodDynatrace[] | cdktf.IResolvable) {
    this._dynatrace.internalValue = value;
  }
  public resetDynatrace() {
    this._dynatrace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynatraceInput() {
    return this._dynatrace.internalValue;
  }

  // elasticsearch - computed: false, optional: true, required: false
  private _elasticsearch = new SloObjectiveCountMetricsGoodElasticsearchList(this, "elasticsearch", false);
  public get elasticsearch() {
    return this._elasticsearch;
  }
  public putElasticsearch(value: SloObjectiveCountMetricsGoodElasticsearch[] | cdktf.IResolvable) {
    this._elasticsearch.internalValue = value;
  }
  public resetElasticsearch() {
    this._elasticsearch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchInput() {
    return this._elasticsearch.internalValue;
  }

  // gcm - computed: false, optional: true, required: false
  private _gcm = new SloObjectiveCountMetricsGoodGcmList(this, "gcm", false);
  public get gcm() {
    return this._gcm;
  }
  public putGcm(value: SloObjectiveCountMetricsGoodGcm[] | cdktf.IResolvable) {
    this._gcm.internalValue = value;
  }
  public resetGcm() {
    this._gcm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmInput() {
    return this._gcm.internalValue;
  }

  // grafana_loki - computed: false, optional: true, required: false
  private _grafanaLoki = new SloObjectiveCountMetricsGoodGrafanaLokiList(this, "grafana_loki", false);
  public get grafanaLoki() {
    return this._grafanaLoki;
  }
  public putGrafanaLoki(value: SloObjectiveCountMetricsGoodGrafanaLoki[] | cdktf.IResolvable) {
    this._grafanaLoki.internalValue = value;
  }
  public resetGrafanaLoki() {
    this._grafanaLoki.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaLokiInput() {
    return this._grafanaLoki.internalValue;
  }

  // graphite - computed: false, optional: true, required: false
  private _graphite = new SloObjectiveCountMetricsGoodGraphiteList(this, "graphite", false);
  public get graphite() {
    return this._graphite;
  }
  public putGraphite(value: SloObjectiveCountMetricsGoodGraphite[] | cdktf.IResolvable) {
    this._graphite.internalValue = value;
  }
  public resetGraphite() {
    this._graphite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteInput() {
    return this._graphite.internalValue;
  }

  // honeycomb - computed: false, optional: true, required: false
  private _honeycomb = new SloObjectiveCountMetricsGoodHoneycombList(this, "honeycomb", false);
  public get honeycomb() {
    return this._honeycomb;
  }
  public putHoneycomb(value: SloObjectiveCountMetricsGoodHoneycomb[] | cdktf.IResolvable) {
    this._honeycomb.internalValue = value;
  }
  public resetHoneycomb() {
    this._honeycomb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get honeycombInput() {
    return this._honeycomb.internalValue;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new SloObjectiveCountMetricsGoodInfluxdbList(this, "influxdb", false);
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: SloObjectiveCountMetricsGoodInfluxdb[] | cdktf.IResolvable) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // instana - computed: false, optional: true, required: false
  private _instana = new SloObjectiveCountMetricsGoodInstanaList(this, "instana", false);
  public get instana() {
    return this._instana;
  }
  public putInstana(value: SloObjectiveCountMetricsGoodInstana[] | cdktf.IResolvable) {
    this._instana.internalValue = value;
  }
  public resetInstana() {
    this._instana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanaInput() {
    return this._instana.internalValue;
  }

  // lightstep - computed: false, optional: true, required: false
  private _lightstep = new SloObjectiveCountMetricsGoodLightstepList(this, "lightstep", false);
  public get lightstep() {
    return this._lightstep;
  }
  public putLightstep(value: SloObjectiveCountMetricsGoodLightstep[] | cdktf.IResolvable) {
    this._lightstep.internalValue = value;
  }
  public resetLightstep() {
    this._lightstep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lightstepInput() {
    return this._lightstep.internalValue;
  }

  // logic_monitor - computed: false, optional: true, required: false
  private _logicMonitor = new SloObjectiveCountMetricsGoodLogicMonitorList(this, "logic_monitor", false);
  public get logicMonitor() {
    return this._logicMonitor;
  }
  public putLogicMonitor(value: SloObjectiveCountMetricsGoodLogicMonitor[] | cdktf.IResolvable) {
    this._logicMonitor.internalValue = value;
  }
  public resetLogicMonitor() {
    this._logicMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicMonitorInput() {
    return this._logicMonitor.internalValue;
  }

  // newrelic - computed: false, optional: true, required: false
  private _newrelic = new SloObjectiveCountMetricsGoodNewrelicList(this, "newrelic", false);
  public get newrelic() {
    return this._newrelic;
  }
  public putNewrelic(value: SloObjectiveCountMetricsGoodNewrelic[] | cdktf.IResolvable) {
    this._newrelic.internalValue = value;
  }
  public resetNewrelic() {
    this._newrelic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newrelicInput() {
    return this._newrelic.internalValue;
  }

  // opentsdb - computed: false, optional: true, required: false
  private _opentsdb = new SloObjectiveCountMetricsGoodOpentsdbList(this, "opentsdb", false);
  public get opentsdb() {
    return this._opentsdb;
  }
  public putOpentsdb(value: SloObjectiveCountMetricsGoodOpentsdb[] | cdktf.IResolvable) {
    this._opentsdb.internalValue = value;
  }
  public resetOpentsdb() {
    this._opentsdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opentsdbInput() {
    return this._opentsdb.internalValue;
  }

  // pingdom - computed: false, optional: true, required: false
  private _pingdom = new SloObjectiveCountMetricsGoodPingdomList(this, "pingdom", false);
  public get pingdom() {
    return this._pingdom;
  }
  public putPingdom(value: SloObjectiveCountMetricsGoodPingdom[] | cdktf.IResolvable) {
    this._pingdom.internalValue = value;
  }
  public resetPingdom() {
    this._pingdom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingdomInput() {
    return this._pingdom.internalValue;
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus = new SloObjectiveCountMetricsGoodPrometheusList(this, "prometheus", false);
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: SloObjectiveCountMetricsGoodPrometheus[] | cdktf.IResolvable) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }

  // redshift - computed: false, optional: true, required: false
  private _redshift = new SloObjectiveCountMetricsGoodRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }
  public putRedshift(value: SloObjectiveCountMetricsGoodRedshift[] | cdktf.IResolvable) {
    this._redshift.internalValue = value;
  }
  public resetRedshift() {
    this._redshift.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftInput() {
    return this._redshift.internalValue;
  }

  // splunk - computed: false, optional: true, required: false
  private _splunk = new SloObjectiveCountMetricsGoodSplunkList(this, "splunk", false);
  public get splunk() {
    return this._splunk;
  }
  public putSplunk(value: SloObjectiveCountMetricsGoodSplunk[] | cdktf.IResolvable) {
    this._splunk.internalValue = value;
  }
  public resetSplunk() {
    this._splunk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkInput() {
    return this._splunk.internalValue;
  }

  // splunk_observability - computed: false, optional: true, required: false
  private _splunkObservability = new SloObjectiveCountMetricsGoodSplunkObservabilityList(this, "splunk_observability", false);
  public get splunkObservability() {
    return this._splunkObservability;
  }
  public putSplunkObservability(value: SloObjectiveCountMetricsGoodSplunkObservability[] | cdktf.IResolvable) {
    this._splunkObservability.internalValue = value;
  }
  public resetSplunkObservability() {
    this._splunkObservability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkObservabilityInput() {
    return this._splunkObservability.internalValue;
  }

  // sumologic - computed: false, optional: true, required: false
  private _sumologic = new SloObjectiveCountMetricsGoodSumologicList(this, "sumologic", false);
  public get sumologic() {
    return this._sumologic;
  }
  public putSumologic(value: SloObjectiveCountMetricsGoodSumologic[] | cdktf.IResolvable) {
    this._sumologic.internalValue = value;
  }
  public resetSumologic() {
    this._sumologic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicInput() {
    return this._sumologic.internalValue;
  }

  // thousandeyes - computed: false, optional: true, required: false
  private _thousandeyes = new SloObjectiveCountMetricsGoodThousandeyesList(this, "thousandeyes", false);
  public get thousandeyes() {
    return this._thousandeyes;
  }
  public putThousandeyes(value: SloObjectiveCountMetricsGoodThousandeyes[] | cdktf.IResolvable) {
    this._thousandeyes.internalValue = value;
  }
  public resetThousandeyes() {
    this._thousandeyes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thousandeyesInput() {
    return this._thousandeyes.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGood[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodOutputReference {
    return new SloObjectiveCountMetricsGoodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalAmazonPrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsGoodTotalAmazonPrometheusToTerraform(struct?: SloObjectiveCountMetricsGoodTotalAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsGoodTotalAmazonPrometheusToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalAmazonPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalAmazonPrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalAmazonPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalAmazonPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsGoodTotalAmazonPrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalAmazonPrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalAmazonPrometheusOutputReference {
    return new SloObjectiveCountMetricsGoodTotalAmazonPrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalAppdynamics {
  /**
  * Name of the added application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#application_name Slo#application_name}
  */
  readonly applicationName: string;
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveCountMetricsGoodTotalAppdynamicsToTerraform(struct?: SloObjectiveCountMetricsGoodTotalAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveCountMetricsGoodTotalAppdynamicsToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalAppdynamics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalAppdynamicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalAppdynamics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalAppdynamics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName = value.applicationName;
      this._metricPath = value.metricPath;
    }
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveCountMetricsGoodTotalAppdynamicsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalAppdynamics[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalAppdynamicsOutputReference {
    return new SloObjectiveCountMetricsGoodTotalAppdynamicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalAzureMonitorDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsToTerraform(struct?: SloObjectiveCountMetricsGoodTotalAzureMonitorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalAzureMonitorDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalAzureMonitorDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalAzureMonitorDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class SloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalAzureMonitorDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsOutputReference {
    return new SloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspace {
  /**
  * Resource group of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#resource_group Slo#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Subscription ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#subscription_id Slo#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * ID of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#workspace_id Slo#workspace_id}
  */
  readonly workspaceId: string;
}

export function sloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceToTerraform(struct?: SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function sloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._workspaceId = value.workspaceId;
    }
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceOutputReference {
    return new SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalAzureMonitor {
  /**
  * Aggregation type [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Specifies source: 'metrics' or 'logs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#data_type Slo#data_type}
  */
  readonly dataType: string;
  /**
  * Logs query in Kusto Query Language [Required for logs]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#kql_query Slo#kql_query}
  */
  readonly kqlQuery?: string;
  /**
  * Name of the metric [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric [Optional for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_namespace Slo#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Identifier of the Azure Cloud resource [Required for metrics]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#resource_id Slo#resource_id}
  */
  readonly resourceId?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveCountMetricsGoodTotalAzureMonitorDimensions[] | cdktf.IResolvable;
  /**
  * workspace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#workspace Slo#workspace}
  */
  readonly workspace?: SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspace[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodTotalAzureMonitorToTerraform(struct?: SloObjectiveCountMetricsGoodTotalAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    kql_query: cdktf.stringToTerraform(struct!.kqlQuery),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metric_namespace: cdktf.stringToTerraform(struct!.metricNamespace),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    dimensions: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsToTerraform, true)(struct!.dimensions),
    workspace: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceToTerraform, true)(struct!.workspace),
  }
}


export function sloObjectiveCountMetricsGoodTotalAzureMonitorToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalAzureMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kql_query: {
      value: cdktf.stringToHclTerraform(struct!.kqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_namespace: {
      value: cdktf.stringToHclTerraform(struct!.metricNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsList",
    },
    workspace: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceToHclTerraform, true)(struct!.workspace),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalAzureMonitorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalAzureMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._kqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.kqlQuery = this._kqlQuery;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metricNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNamespace = this._metricNamespace;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._workspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspace = this._workspace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalAzureMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._dataType = undefined;
      this._kqlQuery = undefined;
      this._metricName = undefined;
      this._metricNamespace = undefined;
      this._resourceId = undefined;
      this._dimensions.internalValue = undefined;
      this._workspace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._dataType = value.dataType;
      this._kqlQuery = value.kqlQuery;
      this._metricName = value.metricName;
      this._metricNamespace = value.metricNamespace;
      this._resourceId = value.resourceId;
      this._dimensions.internalValue = value.dimensions;
      this._workspace.internalValue = value.workspace;
    }
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // data_type - computed: false, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // kql_query - computed: false, optional: true, required: false
  private _kqlQuery?: string; 
  public get kqlQuery() {
    return this.getStringAttribute('kql_query');
  }
  public set kqlQuery(value: string) {
    this._kqlQuery = value;
  }
  public resetKqlQuery() {
    this._kqlQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kqlQueryInput() {
    return this._kqlQuery;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveCountMetricsGoodTotalAzureMonitorDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveCountMetricsGoodTotalAzureMonitorDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace = new SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspaceList(this, "workspace", false);
  public get workspace() {
    return this._workspace;
  }
  public putWorkspace(value: SloObjectiveCountMetricsGoodTotalAzureMonitorWorkspace[] | cdktf.IResolvable) {
    this._workspace.internalValue = value;
  }
  public resetWorkspace() {
    this._workspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodTotalAzureMonitorList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalAzureMonitor[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalAzureMonitorOutputReference {
    return new SloObjectiveCountMetricsGoodTotalAzureMonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalAzurePrometheus {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsGoodTotalAzurePrometheusToTerraform(struct?: SloObjectiveCountMetricsGoodTotalAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsGoodTotalAzurePrometheusToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalAzurePrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalAzurePrometheusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalAzurePrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalAzurePrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsGoodTotalAzurePrometheusList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalAzurePrometheus[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalAzurePrometheusOutputReference {
    return new SloObjectiveCountMetricsGoodTotalAzurePrometheusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalBigquery {
  /**
  * Location of you BigQuery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#location Slo#location}
  */
  readonly location: string;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodTotalBigqueryToTerraform(struct?: SloObjectiveCountMetricsGoodTotalBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodTotalBigqueryToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalBigquery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalBigqueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalBigquery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalBigquery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._projectId = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._projectId = value.projectId;
      this._query = value.query;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodTotalBigqueryList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalBigquery[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalBigqueryOutputReference {
    return new SloObjectiveCountMetricsGoodTotalBigqueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalCloudwatchDimensions {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#name Slo#name}
  */
  readonly name: string;
  /**
  * Value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#value Slo#value}
  */
  readonly value: string;
}

export function sloObjectiveCountMetricsGoodTotalCloudwatchDimensionsToTerraform(struct?: SloObjectiveCountMetricsGoodTotalCloudwatchDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function sloObjectiveCountMetricsGoodTotalCloudwatchDimensionsToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalCloudwatchDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class SloObjectiveCountMetricsGoodTotalCloudwatchDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalCloudwatchDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalCloudwatchDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._value = value.value;
    }
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
}

export class SloObjectiveCountMetricsGoodTotalCloudwatchDimensionsList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalCloudwatchDimensions[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalCloudwatchDimensionsOutputReference {
    return new SloObjectiveCountMetricsGoodTotalCloudwatchDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalCloudwatch {
  /**
  * AccountID used with cross-account observability feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#account_id Slo#account_id}
  */
  readonly accountId?: string;
  /**
  * JSON query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#json Slo#json}
  */
  readonly json?: string;
  /**
  * Metric name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_name Slo#metric_name}
  */
  readonly metricName?: string;
  /**
  * Namespace of the metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#namespace Slo#namespace}
  */
  readonly namespace?: string;
  /**
  * Region of the CloudWatch instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#region Slo#region}
  */
  readonly region: string;
  /**
  * SQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#sql Slo#sql}
  */
  readonly sql?: string;
  /**
  * Metric data aggregations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#stat Slo#stat}
  */
  readonly stat?: string;
  /**
  * dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#dimensions Slo#dimensions}
  */
  readonly dimensions?: SloObjectiveCountMetricsGoodTotalCloudwatchDimensions[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodTotalCloudwatchToTerraform(struct?: SloObjectiveCountMetricsGoodTotalCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    json: cdktf.stringToTerraform(struct!.json),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    region: cdktf.stringToTerraform(struct!.region),
    sql: cdktf.stringToTerraform(struct!.sql),
    stat: cdktf.stringToTerraform(struct!.stat),
    dimensions: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalCloudwatchDimensionsToTerraform, true)(struct!.dimensions),
  }
}


export function sloObjectiveCountMetricsGoodTotalCloudwatchToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalCloudwatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    json: {
      value: cdktf.stringToHclTerraform(struct!.json),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    sql: {
      value: cdktf.stringToHclTerraform(struct!.sql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dimensions: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalCloudwatchDimensionsToHclTerraform, true)(struct!.dimensions),
      isBlock: true,
      type: "set",
      storageClassType: "SloObjectiveCountMetricsGoodTotalCloudwatchDimensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalCloudwatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalCloudwatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._json !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sql !== undefined) {
      hasAnyValues = true;
      internalValueResult.sql = this._sql;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalCloudwatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._json = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
      this._region = undefined;
      this._sql = undefined;
      this._stat = undefined;
      this._dimensions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._json = value.json;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
      this._region = value.region;
      this._sql = value.sql;
      this._stat = value.stat;
      this._dimensions.internalValue = value.dimensions;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // json - computed: false, optional: true, required: false
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

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sql - computed: false, optional: true, required: false
  private _sql?: string; 
  public get sql() {
    return this.getStringAttribute('sql');
  }
  public set sql(value: string) {
    this._sql = value;
  }
  public resetSql() {
    this._sql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlInput() {
    return this._sql;
  }

  // stat - computed: false, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new SloObjectiveCountMetricsGoodTotalCloudwatchDimensionsList(this, "dimensions", true);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: SloObjectiveCountMetricsGoodTotalCloudwatchDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodTotalCloudwatchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalCloudwatch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalCloudwatchOutputReference {
    return new SloObjectiveCountMetricsGoodTotalCloudwatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalCoralogix {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql: string;
}

export function sloObjectiveCountMetricsGoodTotalCoralogixToTerraform(struct?: SloObjectiveCountMetricsGoodTotalCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    promql: cdktf.stringToTerraform(struct!.promql),
  }
}


export function sloObjectiveCountMetricsGoodTotalCoralogixToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalCoralogix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalCoralogixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalCoralogix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalCoralogix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._promql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._promql = value.promql;
    }
  }

  // promql - computed: false, optional: false, required: true
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }
}

export class SloObjectiveCountMetricsGoodTotalCoralogixList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalCoralogix[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalCoralogixOutputReference {
    return new SloObjectiveCountMetricsGoodTotalCoralogixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalDatadog {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodTotalDatadogToTerraform(struct?: SloObjectiveCountMetricsGoodTotalDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodTotalDatadogToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalDatadog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalDatadogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalDatadog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalDatadog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodTotalDatadogList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalDatadog[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalDatadogOutputReference {
    return new SloObjectiveCountMetricsGoodTotalDatadogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalDynatrace {
  /**
  * Selector for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_selector Slo#metric_selector}
  */
  readonly metricSelector: string;
}

export function sloObjectiveCountMetricsGoodTotalDynatraceToTerraform(struct?: SloObjectiveCountMetricsGoodTotalDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_selector: cdktf.stringToTerraform(struct!.metricSelector),
  }
}


export function sloObjectiveCountMetricsGoodTotalDynatraceToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalDynatrace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_selector: {
      value: cdktf.stringToHclTerraform(struct!.metricSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalDynatraceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalDynatrace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricSelector = this._metricSelector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalDynatrace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricSelector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricSelector = value.metricSelector;
    }
  }

  // metric_selector - computed: false, optional: false, required: true
  private _metricSelector?: string; 
  public get metricSelector() {
    return this.getStringAttribute('metric_selector');
  }
  public set metricSelector(value: string) {
    this._metricSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricSelectorInput() {
    return this._metricSelector;
  }
}

export class SloObjectiveCountMetricsGoodTotalDynatraceList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalDynatrace[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalDynatraceOutputReference {
    return new SloObjectiveCountMetricsGoodTotalDynatraceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalElasticsearch {
  /**
  * Index of metrics we want to query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#index Slo#index}
  */
  readonly index: string;
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodTotalElasticsearchToTerraform(struct?: SloObjectiveCountMetricsGoodTotalElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.stringToTerraform(struct!.index),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodTotalElasticsearchToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalElasticsearch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalElasticsearchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalElasticsearch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalElasticsearch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._query = value.query;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodTotalElasticsearchList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalElasticsearch[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalElasticsearchOutputReference {
    return new SloObjectiveCountMetricsGoodTotalElasticsearchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalGcm {
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#project_id Slo#project_id}
  */
  readonly projectId: string;
  /**
  * Query for the metrics in PromQL format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#promql Slo#promql}
  */
  readonly promql?: string;
  /**
  * Query for the metrics in MQL format [deprecated](https://cloud.google.com/stackdriver/docs/deprecations/mql)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query?: string;
}

export function sloObjectiveCountMetricsGoodTotalGcmToTerraform(struct?: SloObjectiveCountMetricsGoodTotalGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    promql: cdktf.stringToTerraform(struct!.promql),
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodTotalGcmToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalGcm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promql: {
      value: cdktf.stringToHclTerraform(struct!.promql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalGcmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalGcm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._promql !== undefined) {
      hasAnyValues = true;
      internalValueResult.promql = this._promql;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalGcm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._promql = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._promql = value.promql;
      this._query = value.query;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // promql - computed: false, optional: true, required: false
  private _promql?: string; 
  public get promql() {
    return this.getStringAttribute('promql');
  }
  public set promql(value: string) {
    this._promql = value;
  }
  public resetPromql() {
    this._promql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlInput() {
    return this._promql;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodTotalGcmList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalGcm[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalGcmOutputReference {
    return new SloObjectiveCountMetricsGoodTotalGcmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalGrafanaLoki {
  /**
  * Query for the logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#logql Slo#logql}
  */
  readonly logql: string;
}

export function sloObjectiveCountMetricsGoodTotalGrafanaLokiToTerraform(struct?: SloObjectiveCountMetricsGoodTotalGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logql: cdktf.stringToTerraform(struct!.logql),
  }
}


export function sloObjectiveCountMetricsGoodTotalGrafanaLokiToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalGrafanaLoki | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logql: {
      value: cdktf.stringToHclTerraform(struct!.logql),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalGrafanaLokiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalGrafanaLoki | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logql !== undefined) {
      hasAnyValues = true;
      internalValueResult.logql = this._logql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalGrafanaLoki | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logql = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logql = value.logql;
    }
  }

  // logql - computed: false, optional: false, required: true
  private _logql?: string; 
  public get logql() {
    return this.getStringAttribute('logql');
  }
  public set logql(value: string) {
    this._logql = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logqlInput() {
    return this._logql;
  }
}

export class SloObjectiveCountMetricsGoodTotalGrafanaLokiList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalGrafanaLoki[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalGrafanaLokiOutputReference {
    return new SloObjectiveCountMetricsGoodTotalGrafanaLokiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalGraphite {
  /**
  * Path to the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_path Slo#metric_path}
  */
  readonly metricPath: string;
}

export function sloObjectiveCountMetricsGoodTotalGraphiteToTerraform(struct?: SloObjectiveCountMetricsGoodTotalGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_path: cdktf.stringToTerraform(struct!.metricPath),
  }
}


export function sloObjectiveCountMetricsGoodTotalGraphiteToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalGraphite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_path: {
      value: cdktf.stringToHclTerraform(struct!.metricPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalGraphiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalGraphite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricPath = this._metricPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalGraphite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricPath = value.metricPath;
    }
  }

  // metric_path - computed: false, optional: false, required: true
  private _metricPath?: string; 
  public get metricPath() {
    return this.getStringAttribute('metric_path');
  }
  public set metricPath(value: string) {
    this._metricPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricPathInput() {
    return this._metricPath;
  }
}

export class SloObjectiveCountMetricsGoodTotalGraphiteList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalGraphite[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalGraphiteOutputReference {
    return new SloObjectiveCountMetricsGoodTotalGraphiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalHoneycomb {
  /**
  * Column name - required for all calculation types besides 'CONCURRENCY' and 'COUNT'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#attribute Slo#attribute}
  */
  readonly attribute?: string;
}

export function sloObjectiveCountMetricsGoodTotalHoneycombToTerraform(struct?: SloObjectiveCountMetricsGoodTotalHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
  }
}


export function sloObjectiveCountMetricsGoodTotalHoneycombToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalHoneycomb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalHoneycombOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalHoneycomb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalHoneycomb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
    }
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }
}

export class SloObjectiveCountMetricsGoodTotalHoneycombList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalHoneycomb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalHoneycombOutputReference {
    return new SloObjectiveCountMetricsGoodTotalHoneycombOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalInfluxdb {
  /**
  * Query for the metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#query Slo#query}
  */
  readonly query: string;
}

export function sloObjectiveCountMetricsGoodTotalInfluxdbToTerraform(struct?: SloObjectiveCountMetricsGoodTotalInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function sloObjectiveCountMetricsGoodTotalInfluxdbToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalInfluxdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalInfluxdbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalInfluxdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalInfluxdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._query = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}

export class SloObjectiveCountMetricsGoodTotalInfluxdbList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalInfluxdb[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalInfluxdbOutputReference {
    return new SloObjectiveCountMetricsGoodTotalInfluxdbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupBy {
  /**
  * Group by tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag Slo#tag}
  */
  readonly tag: string;
  /**
  * Tag entity - one of 'DESTINATION', 'SOURCE', 'NOT_APPLICABLE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag_entity Slo#tag_entity}
  */
  readonly tagEntity: string;
  /**
  * Second level key for the tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#tag_second_level_key Slo#tag_second_level_key}
  */
  readonly tagSecondLevelKey?: string;
}

export function sloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByToTerraform(struct?: SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    tag_entity: cdktf.stringToTerraform(struct!.tagEntity),
    tag_second_level_key: cdktf.stringToTerraform(struct!.tagSecondLevelKey),
  }
}


export function sloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_entity: {
      value: cdktf.stringToHclTerraform(struct!.tagEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_second_level_key: {
      value: cdktf.stringToHclTerraform(struct!.tagSecondLevelKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._tagEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagEntity = this._tagEntity;
    }
    if (this._tagSecondLevelKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagSecondLevelKey = this._tagSecondLevelKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
      this._tagEntity = undefined;
      this._tagSecondLevelKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
      this._tagEntity = value.tagEntity;
      this._tagSecondLevelKey = value.tagSecondLevelKey;
    }
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tag_entity - computed: false, optional: false, required: true
  private _tagEntity?: string; 
  public get tagEntity() {
    return this.getStringAttribute('tag_entity');
  }
  public set tagEntity(value: string) {
    this._tagEntity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagEntityInput() {
    return this._tagEntity;
  }

  // tag_second_level_key - computed: false, optional: true, required: false
  private _tagSecondLevelKey?: string; 
  public get tagSecondLevelKey() {
    return this.getStringAttribute('tag_second_level_key');
  }
  public set tagSecondLevelKey(value: string) {
    this._tagSecondLevelKey = value;
  }
  public resetTagSecondLevelKey() {
    this._tagSecondLevelKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSecondLevelKeyInput() {
    return this._tagSecondLevelKey;
  }
}

export class SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupBy[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByOutputReference {
    return new SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SloObjectiveCountMetricsGoodTotalInstanaApplication {
  /**
  * Depends on the value specified for 'metric_id'- more info in N9 docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#aggregation Slo#aggregation}
  */
  readonly aggregation: string;
  /**
  * API query user passes in a JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#api_query Slo#api_query}
  */
  readonly apiQuery: string;
  /**
  * Include internal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#include_internal Slo#include_internal}
  */
  readonly includeInternal?: boolean | cdktf.IResolvable;
  /**
  * Include synthetic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#include_synthetic Slo#include_synthetic}
  */
  readonly includeSynthetic?: boolean | cdktf.IResolvable;
  /**
  * Metric ID one of 'calls', 'erroneousCalls', 'errors', 'latency'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#metric_id Slo#metric_id}
  */
  readonly metricId: string;
  /**
  * group_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.44.1/docs/resources/slo#group_by Slo#group_by}
  */
  readonly groupBy?: SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupBy[] | cdktf.IResolvable;
}

export function sloObjectiveCountMetricsGoodTotalInstanaApplicationToTerraform(struct?: SloObjectiveCountMetricsGoodTotalInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    api_query: cdktf.stringToTerraform(struct!.apiQuery),
    include_internal: cdktf.booleanToTerraform(struct!.includeInternal),
    include_synthetic: cdktf.booleanToTerraform(struct!.includeSynthetic),
    metric_id: cdktf.stringToTerraform(struct!.metricId),
    group_by: cdktf.listMapper(sloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByToTerraform, true)(struct!.groupBy),
  }
}


export function sloObjectiveCountMetricsGoodTotalInstanaApplicationToHclTerraform(struct?: SloObjectiveCountMetricsGoodTotalInstanaApplication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: cdktf.stringToHclTerraform(struct!.aggregation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_query: {
      value: cdktf.stringToHclTerraform(struct!.apiQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_internal: {
      value: cdktf.booleanToHclTerraform(struct!.includeInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_synthetic: {
      value: cdktf.booleanToHclTerraform(struct!.includeSynthetic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_id: {
      value: cdktf.stringToHclTerraform(struct!.metricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(sloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByToHclTerraform, true)(struct!.groupBy),
      isBlock: true,
      type: "list",
      storageClassType: "SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SloObjectiveCountMetricsGoodTotalInstanaApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SloObjectiveCountMetricsGoodTotalInstanaApplication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation;
    }
    if (this._apiQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiQuery = this._apiQuery;
    }
    if (this._includeInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeInternal = this._includeInternal;
    }
    if (this._includeSynthetic !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSynthetic = this._includeSynthetic;
    }
    if (this._metricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricId = this._metricId;
    }
    if (this._groupBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SloObjectiveCountMetricsGoodTotalInstanaApplication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation = undefined;
      this._apiQuery = undefined;
      this._includeInternal = undefined;
      this._includeSynthetic = undefined;
      this._metricId = undefined;
      this._groupBy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation = value.aggregation;
      this._apiQuery = value.apiQuery;
      this._includeInternal = value.includeInternal;
      this._includeSynthetic = value.includeSynthetic;
      this._metricId = value.metricId;
      this._groupBy.internalValue = value.groupBy;
    }
  }

  // aggregation - computed: false, optional: false, required: true
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // api_query - computed: false, optional: false, required: true
  private _apiQuery?: string; 
  public get apiQuery() {
    return this.getStringAttribute('api_query');
  }
  public set apiQuery(value: string) {
    this._apiQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiQueryInput() {
    return this._apiQuery;
  }

  // include_internal - computed: false, optional: true, required: false
  private _includeInternal?: boolean | cdktf.IResolvable; 
  public get includeInternal() {
    return this.getBooleanAttribute('include_internal');
  }
  public set includeInternal(value: boolean | cdktf.IResolvable) {
    this._includeInternal = value;
  }
  public resetIncludeInternal() {
    this._includeInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInternalInput() {
    return this._includeInternal;
  }

  // include_synthetic - computed: false, optional: true, required: false
  private _includeSynthetic?: boolean | cdktf.IResolvable; 
  public get includeSynthetic() {
    return this.getBooleanAttribute('include_synthetic');
  }
  public set includeSynthetic(value: boolean | cdktf.IResolvable) {
    this._includeSynthetic = value;
  }
  public resetIncludeSynthetic() {
    this._includeSynthetic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSyntheticInput() {
    return this._includeSynthetic;
  }

  // metric_id - computed: false, optional: false, required: true
  private _metricId?: string; 
  public get metricId() {
    return this.getStringAttribute('metric_id');
  }
  public set metricId(value: string) {
    this._metricId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricIdInput() {
    return this._metricId;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy = new SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupByList(this, "group_by", false);
  public get groupBy() {
    return this._groupBy;
  }
  public putGroupBy(value: SloObjectiveCountMetricsGoodTotalInstanaApplicationGroupBy[] | cdktf.IResolvable) {
    this._groupBy.internalValue = value;
  }
  public resetGroupBy() {
    this._groupBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy.internalValue;
  }
}

export class SloObjectiveCountMetricsGoodTotalInstanaApplicationList extends cdktf.ComplexList {
  public internalValue? : SloObjectiveCountMetricsGoodTotalInstanaApplication[] | cdktf.IResolvable

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
  public get(index: number): SloObjectiveCountMetricsGoodTotalInstanaApplicationOutputReference {
    return new SloObjectiveCountMetricsGoodTotalInstanaApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
