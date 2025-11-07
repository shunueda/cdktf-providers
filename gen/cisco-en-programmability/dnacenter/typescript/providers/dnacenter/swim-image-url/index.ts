// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwimImageUrlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#id SwimImageUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#parameters SwimImageUrl#parameters}
  */
  readonly parameters: SwimImageUrlParameters;
}
export interface SwimImageUrlItem {
}

export function swimImageUrlItemToTerraform(struct?: SwimImageUrlItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function swimImageUrlItemToHclTerraform(struct?: SwimImageUrlItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SwimImageUrlItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SwimImageUrlItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwimImageUrlItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class SwimImageUrlItemList extends cdktf.ComplexList {

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
  public get(index: number): SwimImageUrlItemOutputReference {
    return new SwimImageUrlItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwimImageUrlParametersPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#application_type SwimImageUrl#application_type}
  */
  readonly applicationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#image_family SwimImageUrl#image_family}
  */
  readonly imageFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#source_url SwimImageUrl#source_url}
  */
  readonly sourceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#third_party SwimImageUrl#third_party}
  */
  readonly thirdParty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#vendor SwimImageUrl#vendor}
  */
  readonly vendor?: string;
}

export function swimImageUrlParametersPayloadToTerraform(struct?: SwimImageUrlParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_type: cdktf.stringToTerraform(struct!.applicationType),
    image_family: cdktf.stringToTerraform(struct!.imageFamily),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
    third_party: cdktf.stringToTerraform(struct!.thirdParty),
    vendor: cdktf.stringToTerraform(struct!.vendor),
  }
}


export function swimImageUrlParametersPayloadToHclTerraform(struct?: SwimImageUrlParametersPayload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_type: {
      value: cdktf.stringToHclTerraform(struct!.applicationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_family: {
      value: cdktf.stringToHclTerraform(struct!.imageFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_url: {
      value: cdktf.stringToHclTerraform(struct!.sourceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    third_party: {
      value: cdktf.stringToHclTerraform(struct!.thirdParty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor: {
      value: cdktf.stringToHclTerraform(struct!.vendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwimImageUrlParametersPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwimImageUrlParametersPayload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType;
    }
    if (this._imageFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageFamily = this._imageFamily;
    }
    if (this._sourceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUrl = this._sourceUrl;
    }
    if (this._thirdParty !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdParty = this._thirdParty;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwimImageUrlParametersPayload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationType = undefined;
      this._imageFamily = undefined;
      this._sourceUrl = undefined;
      this._thirdParty = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationType = value.applicationType;
      this._imageFamily = value.imageFamily;
      this._sourceUrl = value.sourceUrl;
      this._thirdParty = value.thirdParty;
      this._vendor = value.vendor;
    }
  }

  // application_type - computed: true, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // image_family - computed: true, optional: true, required: false
  private _imageFamily?: string; 
  public get imageFamily() {
    return this.getStringAttribute('image_family');
  }
  public set imageFamily(value: string) {
    this._imageFamily = value;
  }
  public resetImageFamily() {
    this._imageFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFamilyInput() {
    return this._imageFamily;
  }

  // source_url - computed: true, optional: true, required: false
  private _sourceUrl?: string; 
  public get sourceUrl() {
    return this.getStringAttribute('source_url');
  }
  public set sourceUrl(value: string) {
    this._sourceUrl = value;
  }
  public resetSourceUrl() {
    this._sourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrlInput() {
    return this._sourceUrl;
  }

  // third_party - computed: true, optional: true, required: false
  private _thirdParty?: string; 
  public get thirdParty() {
    return this.getStringAttribute('third_party');
  }
  public set thirdParty(value: string) {
    this._thirdParty = value;
  }
  public resetThirdParty() {
    this._thirdParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyInput() {
    return this._thirdParty;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string; 
  public get vendor() {
    return this.getStringAttribute('vendor');
  }
  public set vendor(value: string) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

export class SwimImageUrlParametersPayloadList extends cdktf.ComplexList {
  public internalValue? : SwimImageUrlParametersPayload[] | cdktf.IResolvable

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
  public get(index: number): SwimImageUrlParametersPayloadOutputReference {
    return new SwimImageUrlParametersPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwimImageUrlParameters {
  /**
  * scheduleAt query parameter. Epoch Time (The number of milli-seconds since January 1 1970 UTC) at which the distribution should be scheduled (Optional) 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#schedule_at SwimImageUrl#schedule_at}
  */
  readonly scheduleAt?: string;
  /**
  * scheduleDesc query parameter. Custom Description (Optional)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#schedule_desc SwimImageUrl#schedule_desc}
  */
  readonly scheduleDesc?: string;
  /**
  * scheduleOrigin query parameter. Originator of this call (Optional)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#schedule_origin SwimImageUrl#schedule_origin}
  */
  readonly scheduleOrigin?: string;
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#payload SwimImageUrl#payload}
  */
  readonly payload?: SwimImageUrlParametersPayload[] | cdktf.IResolvable;
}

export function swimImageUrlParametersToTerraform(struct?: SwimImageUrlParametersOutputReference | SwimImageUrlParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule_at: cdktf.stringToTerraform(struct!.scheduleAt),
    schedule_desc: cdktf.stringToTerraform(struct!.scheduleDesc),
    schedule_origin: cdktf.stringToTerraform(struct!.scheduleOrigin),
    payload: cdktf.listMapper(swimImageUrlParametersPayloadToTerraform, true)(struct!.payload),
  }
}


export function swimImageUrlParametersToHclTerraform(struct?: SwimImageUrlParametersOutputReference | SwimImageUrlParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schedule_at: {
      value: cdktf.stringToHclTerraform(struct!.scheduleAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_desc: {
      value: cdktf.stringToHclTerraform(struct!.scheduleDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_origin: {
      value: cdktf.stringToHclTerraform(struct!.scheduleOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload: {
      value: cdktf.listMapperHcl(swimImageUrlParametersPayloadToHclTerraform, true)(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "SwimImageUrlParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwimImageUrlParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwimImageUrlParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduleAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleAt = this._scheduleAt;
    }
    if (this._scheduleDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleDesc = this._scheduleDesc;
    }
    if (this._scheduleOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleOrigin = this._scheduleOrigin;
    }
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwimImageUrlParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheduleAt = undefined;
      this._scheduleDesc = undefined;
      this._scheduleOrigin = undefined;
      this._payload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheduleAt = value.scheduleAt;
      this._scheduleDesc = value.scheduleDesc;
      this._scheduleOrigin = value.scheduleOrigin;
      this._payload.internalValue = value.payload;
    }
  }

  // schedule_at - computed: false, optional: true, required: false
  private _scheduleAt?: string; 
  public get scheduleAt() {
    return this.getStringAttribute('schedule_at');
  }
  public set scheduleAt(value: string) {
    this._scheduleAt = value;
  }
  public resetScheduleAt() {
    this._scheduleAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleAtInput() {
    return this._scheduleAt;
  }

  // schedule_desc - computed: false, optional: true, required: false
  private _scheduleDesc?: string; 
  public get scheduleDesc() {
    return this.getStringAttribute('schedule_desc');
  }
  public set scheduleDesc(value: string) {
    this._scheduleDesc = value;
  }
  public resetScheduleDesc() {
    this._scheduleDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleDescInput() {
    return this._scheduleDesc;
  }

  // schedule_origin - computed: false, optional: true, required: false
  private _scheduleOrigin?: string; 
  public get scheduleOrigin() {
    return this.getStringAttribute('schedule_origin');
  }
  public set scheduleOrigin(value: string) {
    this._scheduleOrigin = value;
  }
  public resetScheduleOrigin() {
    this._scheduleOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOriginInput() {
    return this._scheduleOrigin;
  }

  // payload - computed: false, optional: true, required: false
  private _payload = new SwimImageUrlParametersPayloadList(this, "payload", false);
  public get payload() {
    return this._payload;
  }
  public putPayload(value: SwimImageUrlParametersPayload[] | cdktf.IResolvable) {
    this._payload.internalValue = value;
  }
  public resetPayload() {
    this._payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url dnacenter_swim_image_url}
*/
export class SwimImageUrl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_swim_image_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwimImageUrl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwimImageUrl to import
  * @param importFromId The id of the existing SwimImageUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwimImageUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_swim_image_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_url dnacenter_swim_image_url} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwimImageUrlConfig
  */
  public constructor(scope: Construct, id: string, config: SwimImageUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_swim_image_url',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new SwimImageUrlItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new SwimImageUrlParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SwimImageUrlParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: swimImageUrlParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: swimImageUrlParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwimImageUrlParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
