// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafDomainV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#certificate_id WafDomainV1#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#cipher WafDomainV1#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#hostname WafDomainV1#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#id WafDomainV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#policy_id WafDomainV1#policy_id}
  */
  readonly policyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#proxy WafDomainV1#proxy}
  */
  readonly proxy: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#sip_header_list WafDomainV1#sip_header_list}
  */
  readonly sipHeaderList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#sip_header_name WafDomainV1#sip_header_name}
  */
  readonly sipHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#tls WafDomainV1#tls}
  */
  readonly tls?: string;
  /**
  * block_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#block_page WafDomainV1#block_page}
  */
  readonly blockPage?: WafDomainV1BlockPage;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#server WafDomainV1#server}
  */
  readonly server: WafDomainV1Server[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#timeouts WafDomainV1#timeouts}
  */
  readonly timeouts?: WafDomainV1Timeouts;
}
export interface WafDomainV1BlockPage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#content WafDomainV1#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#content_type WafDomainV1#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#redirect_url WafDomainV1#redirect_url}
  */
  readonly redirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#status_code WafDomainV1#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#template WafDomainV1#template}
  */
  readonly template: string;
}

export function wafDomainV1BlockPageToTerraform(struct?: WafDomainV1BlockPageOutputReference | WafDomainV1BlockPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function wafDomainV1BlockPageToHclTerraform(struct?: WafDomainV1BlockPageOutputReference | WafDomainV1BlockPage): any {
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
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafDomainV1BlockPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafDomainV1BlockPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafDomainV1BlockPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._contentType = undefined;
      this._redirectUrl = undefined;
      this._statusCode = undefined;
      this._template = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._contentType = value.contentType;
      this._redirectUrl = value.redirectUrl;
      this._statusCode = value.statusCode;
      this._template = value.template;
    }
  }

  // content - computed: true, optional: true, required: false
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

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // redirect_url - computed: true, optional: true, required: false
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  public resetRedirectUrl() {
    this._redirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface WafDomainV1Server {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#address WafDomainV1#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#back_protocol WafDomainV1#back_protocol}
  */
  readonly backProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#client_protocol WafDomainV1#client_protocol}
  */
  readonly clientProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#front_protocol WafDomainV1#front_protocol}
  */
  readonly frontProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#port WafDomainV1#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#server_protocol WafDomainV1#server_protocol}
  */
  readonly serverProtocol?: string;
}

export function wafDomainV1ServerToTerraform(struct?: WafDomainV1Server | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    back_protocol: cdktf.stringToTerraform(struct!.backProtocol),
    client_protocol: cdktf.stringToTerraform(struct!.clientProtocol),
    front_protocol: cdktf.stringToTerraform(struct!.frontProtocol),
    port: cdktf.stringToTerraform(struct!.port),
    server_protocol: cdktf.stringToTerraform(struct!.serverProtocol),
  }
}


export function wafDomainV1ServerToHclTerraform(struct?: WafDomainV1Server | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    back_protocol: {
      value: cdktf.stringToHclTerraform(struct!.backProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_protocol: {
      value: cdktf.stringToHclTerraform(struct!.clientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    front_protocol: {
      value: cdktf.stringToHclTerraform(struct!.frontProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_protocol: {
      value: cdktf.stringToHclTerraform(struct!.serverProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafDomainV1ServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafDomainV1Server | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._backProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.backProtocol = this._backProtocol;
    }
    if (this._clientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProtocol = this._clientProtocol;
    }
    if (this._frontProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontProtocol = this._frontProtocol;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverProtocol = this._serverProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafDomainV1Server | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._backProtocol = undefined;
      this._clientProtocol = undefined;
      this._frontProtocol = undefined;
      this._port = undefined;
      this._serverProtocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._backProtocol = value.backProtocol;
      this._clientProtocol = value.clientProtocol;
      this._frontProtocol = value.frontProtocol;
      this._port = value.port;
      this._serverProtocol = value.serverProtocol;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // back_protocol - computed: true, optional: true, required: false
  private _backProtocol?: string; 
  public get backProtocol() {
    return this.getStringAttribute('back_protocol');
  }
  public set backProtocol(value: string) {
    this._backProtocol = value;
  }
  public resetBackProtocol() {
    this._backProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backProtocolInput() {
    return this._backProtocol;
  }

  // client_protocol - computed: true, optional: true, required: false
  private _clientProtocol?: string; 
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }
  public set clientProtocol(value: string) {
    this._clientProtocol = value;
  }
  public resetClientProtocol() {
    this._clientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProtocolInput() {
    return this._clientProtocol;
  }

  // front_protocol - computed: true, optional: true, required: false
  private _frontProtocol?: string; 
  public get frontProtocol() {
    return this.getStringAttribute('front_protocol');
  }
  public set frontProtocol(value: string) {
    this._frontProtocol = value;
  }
  public resetFrontProtocol() {
    this._frontProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontProtocolInput() {
    return this._frontProtocol;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_protocol - computed: true, optional: true, required: false
  private _serverProtocol?: string; 
  public get serverProtocol() {
    return this.getStringAttribute('server_protocol');
  }
  public set serverProtocol(value: string) {
    this._serverProtocol = value;
  }
  public resetServerProtocol() {
    this._serverProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProtocolInput() {
    return this._serverProtocol;
  }
}

export class WafDomainV1ServerList extends cdktf.ComplexList {
  public internalValue? : WafDomainV1Server[] | cdktf.IResolvable

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
  public get(index: number): WafDomainV1ServerOutputReference {
    return new WafDomainV1ServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafDomainV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#create WafDomainV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#delete WafDomainV1#delete}
  */
  readonly delete?: string;
}

export function wafDomainV1TimeoutsToTerraform(struct?: WafDomainV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function wafDomainV1TimeoutsToHclTerraform(struct?: WafDomainV1Timeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafDomainV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WafDomainV1Timeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafDomainV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1 opentelekomcloud_waf_domain_v1}
*/
export class WafDomainV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_waf_domain_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafDomainV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafDomainV1 to import
  * @param importFromId The id of the existing WafDomainV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafDomainV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_waf_domain_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/waf_domain_v1 opentelekomcloud_waf_domain_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafDomainV1Config
  */
  public constructor(scope: Construct, id: string, config: WafDomainV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_domain_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._cipher = config.cipher;
    this._hostname = config.hostname;
    this._id = config.id;
    this._policyId = config.policyId;
    this._proxy = config.proxy;
    this._sipHeaderList = config.sipHeaderList;
    this._sipHeaderName = config.sipHeaderName;
    this._tls = config.tls;
    this._blockPage.internalValue = config.blockPage;
    this._server.internalValue = config.server;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_code - computed: true, optional: false, required: false
  public get accessCode() {
    return this.getStringAttribute('access_code');
  }

  // access_status - computed: true, optional: false, required: false
  public get accessStatus() {
    return this.getNumberAttribute('access_status');
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // cipher - computed: true, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // policy_id - computed: true, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // protect_status - computed: true, optional: false, required: false
  public get protectStatus() {
    return this.getNumberAttribute('protect_status');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // proxy - computed: false, optional: false, required: true
  private _proxy?: boolean | cdktf.IResolvable; 
  public get proxy() {
    return this.getBooleanAttribute('proxy');
  }
  public set proxy(value: boolean | cdktf.IResolvable) {
    this._proxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // sip_header_list - computed: false, optional: true, required: false
  private _sipHeaderList?: string[]; 
  public get sipHeaderList() {
    return this.getListAttribute('sip_header_list');
  }
  public set sipHeaderList(value: string[]) {
    this._sipHeaderList = value;
  }
  public resetSipHeaderList() {
    this._sipHeaderList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHeaderListInput() {
    return this._sipHeaderList;
  }

  // sip_header_name - computed: false, optional: true, required: false
  private _sipHeaderName?: string; 
  public get sipHeaderName() {
    return this.getStringAttribute('sip_header_name');
  }
  public set sipHeaderName(value: string) {
    this._sipHeaderName = value;
  }
  public resetSipHeaderName() {
    this._sipHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHeaderNameInput() {
    return this._sipHeaderName;
  }

  // sub_domain - computed: true, optional: false, required: false
  public get subDomain() {
    return this.getStringAttribute('sub_domain');
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this.getStringAttribute('tls');
  }
  public set tls(value: string) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // txt_code - computed: true, optional: false, required: false
  public get txtCode() {
    return this.getStringAttribute('txt_code');
  }

  // block_page - computed: false, optional: true, required: false
  private _blockPage = new WafDomainV1BlockPageOutputReference(this, "block_page");
  public get blockPage() {
    return this._blockPage;
  }
  public putBlockPage(value: WafDomainV1BlockPage) {
    this._blockPage.internalValue = value;
  }
  public resetBlockPage() {
    this._blockPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPageInput() {
    return this._blockPage.internalValue;
  }

  // server - computed: false, optional: false, required: true
  private _server = new WafDomainV1ServerList(this, "server", false);
  public get server() {
    return this._server;
  }
  public putServer(value: WafDomainV1Server[] | cdktf.IResolvable) {
    this._server.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WafDomainV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WafDomainV1Timeouts) {
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
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      cipher: cdktf.stringToTerraform(this._cipher),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      proxy: cdktf.booleanToTerraform(this._proxy),
      sip_header_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sipHeaderList),
      sip_header_name: cdktf.stringToTerraform(this._sipHeaderName),
      tls: cdktf.stringToTerraform(this._tls),
      block_page: wafDomainV1BlockPageToTerraform(this._blockPage.internalValue),
      server: cdktf.listMapper(wafDomainV1ServerToTerraform, true)(this._server.internalValue),
      timeouts: wafDomainV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.booleanToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sip_header_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sipHeaderList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sip_header_name: {
        value: cdktf.stringToHclTerraform(this._sipHeaderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls: {
        value: cdktf.stringToHclTerraform(this._tls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_page: {
        value: wafDomainV1BlockPageToHclTerraform(this._blockPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafDomainV1BlockPageList",
      },
      server: {
        value: cdktf.listMapperHcl(wafDomainV1ServerToHclTerraform, true)(this._server.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafDomainV1ServerList",
      },
      timeouts: {
        value: wafDomainV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WafDomainV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
