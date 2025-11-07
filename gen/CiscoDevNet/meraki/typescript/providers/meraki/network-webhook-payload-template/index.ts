// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkWebhookPayloadTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#body NetworkWebhookPayloadTemplate#body}
  */
  readonly body?: string;
  /**
  * A file containing liquid template used for the body of the webhook message. Either `body` or `bodyFile` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#body_file NetworkWebhookPayloadTemplate#body_file}
  */
  readonly bodyFile?: string;
  /**
  * The liquid template used with the webhook headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#headers NetworkWebhookPayloadTemplate#headers}
  */
  readonly headers?: NetworkWebhookPayloadTemplateHeaders[] | cdktf.IResolvable;
  /**
  * A file containing the liquid template used with the webhook headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#headers_file NetworkWebhookPayloadTemplate#headers_file}
  */
  readonly headersFile?: string;
  /**
  * The name of the new template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#name NetworkWebhookPayloadTemplate#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#network_id NetworkWebhookPayloadTemplate#network_id}
  */
  readonly networkId: string;
}
export interface NetworkWebhookPayloadTemplateHeaders {
  /**
  * The name of the header template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#name NetworkWebhookPayloadTemplate#name}
  */
  readonly name: string;
  /**
  * The liquid template for the headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#template NetworkWebhookPayloadTemplate#template}
  */
  readonly template?: string;
}

export function networkWebhookPayloadTemplateHeadersToTerraform(struct?: NetworkWebhookPayloadTemplateHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function networkWebhookPayloadTemplateHeadersToHclTerraform(struct?: NetworkWebhookPayloadTemplateHeaders | cdktf.IResolvable): any {
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

export class NetworkWebhookPayloadTemplateHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkWebhookPayloadTemplateHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkWebhookPayloadTemplateHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._template = value.template;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class NetworkWebhookPayloadTemplateHeadersList extends cdktf.ComplexList {
  public internalValue? : NetworkWebhookPayloadTemplateHeaders[] | cdktf.IResolvable

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
  public get(index: number): NetworkWebhookPayloadTemplateHeadersOutputReference {
    return new NetworkWebhookPayloadTemplateHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template meraki_network_webhook_payload_template}
*/
export class NetworkWebhookPayloadTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_webhook_payload_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkWebhookPayloadTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkWebhookPayloadTemplate to import
  * @param importFromId The id of the existing NetworkWebhookPayloadTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkWebhookPayloadTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_webhook_payload_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/network_webhook_payload_template meraki_network_webhook_payload_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkWebhookPayloadTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkWebhookPayloadTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_webhook_payload_template',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._body = config.body;
    this._bodyFile = config.bodyFile;
    this._headers.internalValue = config.headers;
    this._headersFile = config.headersFile;
    this._name = config.name;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_file - computed: false, optional: true, required: false
  private _bodyFile?: string; 
  public get bodyFile() {
    return this.getStringAttribute('body_file');
  }
  public set bodyFile(value: string) {
    this._bodyFile = value;
  }
  public resetBodyFile() {
    this._bodyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyFileInput() {
    return this._bodyFile;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new NetworkWebhookPayloadTemplateHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: NetworkWebhookPayloadTemplateHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // headers_file - computed: false, optional: true, required: false
  private _headersFile?: string; 
  public get headersFile() {
    return this.getStringAttribute('headers_file');
  }
  public set headersFile(value: string) {
    this._headersFile = value;
  }
  public resetHeadersFile() {
    this._headersFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersFileInput() {
    return this._headersFile;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body: cdktf.stringToTerraform(this._body),
      body_file: cdktf.stringToTerraform(this._bodyFile),
      headers: cdktf.listMapper(networkWebhookPayloadTemplateHeadersToTerraform, false)(this._headers.internalValue),
      headers_file: cdktf.stringToTerraform(this._headersFile),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body: {
        value: cdktf.stringToHclTerraform(this._body),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_file: {
        value: cdktf.stringToHclTerraform(this._bodyFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(networkWebhookPayloadTemplateHeadersToHclTerraform, false)(this._headers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkWebhookPayloadTemplateHeadersList",
      },
      headers_file: {
        value: cdktf.stringToHclTerraform(this._headersFile),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
