// https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StatusPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * A custom user domain, e.g. "status.example.com". See the docs on updating your DNS and SSL usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#custom_domain StatusPage#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Possible values are `AUTO`, `DARK`, and `LIGHT`. (Default `AUTO`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#default_theme StatusPage#default_theme}
  */
  readonly defaultTheme?: string;
  /**
  * A URL to an image file to use as the favicon of the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#favicon StatusPage#favicon}
  */
  readonly favicon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#id StatusPage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A URL to an image file to use as the logo for the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#logo StatusPage#logo}
  */
  readonly logo?: string;
  /**
  * The name of the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#name StatusPage#name}
  */
  readonly name: string;
  /**
  * The URL the user should be redirected to when clicking the logo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#redirect_to StatusPage#redirect_to}
  */
  readonly redirectTo?: string;
  /**
  * The URL of the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#url StatusPage#url}
  */
  readonly url: string;
  /**
  * card block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#card StatusPage#card}
  */
  readonly card: StatusPageCard[] | cdktf.IResolvable;
}
export interface StatusPageCardServiceAttachment {
  /**
  * The ID of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#service_id StatusPage#service_id}
  */
  readonly serviceId: string;
}

export function statusPageCardServiceAttachmentToTerraform(struct?: StatusPageCardServiceAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_id: cdktf.stringToTerraform(struct!.serviceId),
  }
}


export function statusPageCardServiceAttachmentToHclTerraform(struct?: StatusPageCardServiceAttachment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageCardServiceAttachmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatusPageCardServiceAttachment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageCardServiceAttachment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceId = value.serviceId;
    }
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }
}

export class StatusPageCardServiceAttachmentList extends cdktf.ComplexList {
  public internalValue? : StatusPageCardServiceAttachment[] | cdktf.IResolvable

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
  public get(index: number): StatusPageCardServiceAttachmentOutputReference {
    return new StatusPageCardServiceAttachmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StatusPageCard {
  /**
  * The name of the card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#name StatusPage#name}
  */
  readonly name: string;
  /**
  * service_attachment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#service_attachment StatusPage#service_attachment}
  */
  readonly serviceAttachment: StatusPageCardServiceAttachment[] | cdktf.IResolvable;
}

export function statusPageCardToTerraform(struct?: StatusPageCard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    service_attachment: cdktf.listMapper(statusPageCardServiceAttachmentToTerraform, true)(struct!.serviceAttachment),
  }
}


export function statusPageCardToHclTerraform(struct?: StatusPageCard | cdktf.IResolvable): any {
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
    service_attachment: {
      value: cdktf.listMapperHcl(statusPageCardServiceAttachmentToHclTerraform, true)(struct!.serviceAttachment),
      isBlock: true,
      type: "list",
      storageClassType: "StatusPageCardServiceAttachmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StatusPageCardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StatusPageCard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serviceAttachment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachment = this._serviceAttachment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StatusPageCard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serviceAttachment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serviceAttachment.internalValue = value.serviceAttachment;
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

  // service_attachment - computed: false, optional: false, required: true
  private _serviceAttachment = new StatusPageCardServiceAttachmentList(this, "service_attachment", false);
  public get serviceAttachment() {
    return this._serviceAttachment;
  }
  public putServiceAttachment(value: StatusPageCardServiceAttachment[] | cdktf.IResolvable) {
    this._serviceAttachment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment.internalValue;
  }
}

export class StatusPageCardList extends cdktf.ComplexList {
  public internalValue? : StatusPageCard[] | cdktf.IResolvable

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
  public get(index: number): StatusPageCardOutputReference {
    return new StatusPageCardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page checkly_status_page}
*/
export class StatusPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkly_status_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StatusPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StatusPage to import
  * @param importFromId The id of the existing StatusPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StatusPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkly_status_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkly/checkly/1.17.0/docs/resources/status_page checkly_status_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StatusPageConfig
  */
  public constructor(scope: Construct, id: string, config: StatusPageConfig) {
    super(scope, id, {
      terraformResourceType: 'checkly_status_page',
      terraformGeneratorMetadata: {
        providerName: 'checkly',
        providerVersion: '1.17.0',
        providerVersionConstraint: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customDomain = config.customDomain;
    this._defaultTheme = config.defaultTheme;
    this._favicon = config.favicon;
    this._id = config.id;
    this._logo = config.logo;
    this._name = config.name;
    this._redirectTo = config.redirectTo;
    this._url = config.url;
    this._card.internalValue = config.card;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // default_theme - computed: false, optional: true, required: false
  private _defaultTheme?: string; 
  public get defaultTheme() {
    return this.getStringAttribute('default_theme');
  }
  public set defaultTheme(value: string) {
    this._defaultTheme = value;
  }
  public resetDefaultTheme() {
    this._defaultTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultThemeInput() {
    return this._defaultTheme;
  }

  // favicon - computed: false, optional: true, required: false
  private _favicon?: string; 
  public get favicon() {
    return this.getStringAttribute('favicon');
  }
  public set favicon(value: string) {
    this._favicon = value;
  }
  public resetFavicon() {
    this._favicon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faviconInput() {
    return this._favicon;
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

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
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

  // redirect_to - computed: false, optional: true, required: false
  private _redirectTo?: string; 
  public get redirectTo() {
    return this.getStringAttribute('redirect_to');
  }
  public set redirectTo(value: string) {
    this._redirectTo = value;
  }
  public resetRedirectTo() {
    this._redirectTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectToInput() {
    return this._redirectTo;
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

  // card - computed: false, optional: false, required: true
  private _card = new StatusPageCardList(this, "card", false);
  public get card() {
    return this._card;
  }
  public putCard(value: StatusPageCard[] | cdktf.IResolvable) {
    this._card.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cardInput() {
    return this._card.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_domain: cdktf.stringToTerraform(this._customDomain),
      default_theme: cdktf.stringToTerraform(this._defaultTheme),
      favicon: cdktf.stringToTerraform(this._favicon),
      id: cdktf.stringToTerraform(this._id),
      logo: cdktf.stringToTerraform(this._logo),
      name: cdktf.stringToTerraform(this._name),
      redirect_to: cdktf.stringToTerraform(this._redirectTo),
      url: cdktf.stringToTerraform(this._url),
      card: cdktf.listMapper(statusPageCardToTerraform, true)(this._card.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_domain: {
        value: cdktf.stringToHclTerraform(this._customDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_theme: {
        value: cdktf.stringToHclTerraform(this._defaultTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      favicon: {
        value: cdktf.stringToHclTerraform(this._favicon),
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
      logo: {
        value: cdktf.stringToHclTerraform(this._logo),
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
      redirect_to: {
        value: cdktf.stringToHclTerraform(this._redirectTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      card: {
        value: cdktf.listMapperHcl(statusPageCardToHclTerraform, true)(this._card.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StatusPageCardList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
