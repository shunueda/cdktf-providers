// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebCategoryWebReputationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#id WebCategoryWebReputationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#uuid WebCategoryWebReputationA#uuid}
  */
  readonly uuid?: string;
  /**
  * bypassed_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#bypassed_urls WebCategoryWebReputationA#bypassed_urls}
  */
  readonly bypassedUrls?: WebCategoryWebReputationBypassedUrlsA;
  /**
  * intercepted_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#intercepted_urls WebCategoryWebReputationA#intercepted_urls}
  */
  readonly interceptedUrls?: WebCategoryWebReputationInterceptedUrlsA;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#url WebCategoryWebReputationA#url}
  */
  readonly url?: WebCategoryWebReputationUrlA;
}
export interface WebCategoryWebReputationBypassedUrlsA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#uuid WebCategoryWebReputationA#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryWebReputationBypassedUrlsAToTerraform(struct?: WebCategoryWebReputationBypassedUrlsAOutputReference | WebCategoryWebReputationBypassedUrlsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryWebReputationBypassedUrlsAToHclTerraform(struct?: WebCategoryWebReputationBypassedUrlsAOutputReference | WebCategoryWebReputationBypassedUrlsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class WebCategoryWebReputationBypassedUrlsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryWebReputationBypassedUrlsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryWebReputationBypassedUrlsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface WebCategoryWebReputationInterceptedUrlsA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#uuid WebCategoryWebReputationA#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryWebReputationInterceptedUrlsAToTerraform(struct?: WebCategoryWebReputationInterceptedUrlsAOutputReference | WebCategoryWebReputationInterceptedUrlsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryWebReputationInterceptedUrlsAToHclTerraform(struct?: WebCategoryWebReputationInterceptedUrlsAOutputReference | WebCategoryWebReputationInterceptedUrlsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class WebCategoryWebReputationInterceptedUrlsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryWebReputationInterceptedUrlsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryWebReputationInterceptedUrlsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface WebCategoryWebReputationUrlA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#uuid WebCategoryWebReputationA#uuid}
  */
  readonly uuid?: string;
}

export function webCategoryWebReputationUrlAToTerraform(struct?: WebCategoryWebReputationUrlAOutputReference | WebCategoryWebReputationUrlA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function webCategoryWebReputationUrlAToHclTerraform(struct?: WebCategoryWebReputationUrlAOutputReference | WebCategoryWebReputationUrlA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class WebCategoryWebReputationUrlAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebCategoryWebReputationUrlA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebCategoryWebReputationUrlA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation thunder_web_category_web_reputation}
*/
export class WebCategoryWebReputationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_web_reputation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebCategoryWebReputationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebCategoryWebReputationA to import
  * @param importFromId The id of the existing WebCategoryWebReputationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebCategoryWebReputationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_web_reputation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/web_category_web_reputation thunder_web_category_web_reputation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebCategoryWebReputationAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WebCategoryWebReputationAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_web_reputation',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._uuid = config.uuid;
    this._bypassedUrls.internalValue = config.bypassedUrls;
    this._interceptedUrls.internalValue = config.interceptedUrls;
    this._url.internalValue = config.url;
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

  // bypassed_urls - computed: false, optional: true, required: false
  private _bypassedUrls = new WebCategoryWebReputationBypassedUrlsAOutputReference(this, "bypassed_urls");
  public get bypassedUrls() {
    return this._bypassedUrls;
  }
  public putBypassedUrls(value: WebCategoryWebReputationBypassedUrlsA) {
    this._bypassedUrls.internalValue = value;
  }
  public resetBypassedUrls() {
    this._bypassedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassedUrlsInput() {
    return this._bypassedUrls.internalValue;
  }

  // intercepted_urls - computed: false, optional: true, required: false
  private _interceptedUrls = new WebCategoryWebReputationInterceptedUrlsAOutputReference(this, "intercepted_urls");
  public get interceptedUrls() {
    return this._interceptedUrls;
  }
  public putInterceptedUrls(value: WebCategoryWebReputationInterceptedUrlsA) {
    this._interceptedUrls.internalValue = value;
  }
  public resetInterceptedUrls() {
    this._interceptedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptedUrlsInput() {
    return this._interceptedUrls.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new WebCategoryWebReputationUrlAOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: WebCategoryWebReputationUrlA) {
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
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      bypassed_urls: webCategoryWebReputationBypassedUrlsAToTerraform(this._bypassedUrls.internalValue),
      intercepted_urls: webCategoryWebReputationInterceptedUrlsAToTerraform(this._interceptedUrls.internalValue),
      url: webCategoryWebReputationUrlAToTerraform(this._url.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypassed_urls: {
        value: webCategoryWebReputationBypassedUrlsAToHclTerraform(this._bypassedUrls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryWebReputationBypassedUrlsAList",
      },
      intercepted_urls: {
        value: webCategoryWebReputationInterceptedUrlsAToHclTerraform(this._interceptedUrls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryWebReputationInterceptedUrlsAList",
      },
      url: {
        value: webCategoryWebReputationUrlAToHclTerraform(this._url.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebCategoryWebReputationUrlAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
