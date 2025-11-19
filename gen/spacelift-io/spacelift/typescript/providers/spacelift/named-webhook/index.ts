// https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamedWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * enables or disables sending webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#enabled NamedWebhook#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * endpoint to send the requests to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#endpoint NamedWebhook#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#id NamedWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * labels for the webhook to use when referring in policies or filtering them
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#labels NamedWebhook#labels}
  */
  readonly labels?: string[];
  /**
  * the name for the webhook which will also be used to generate the id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#name NamedWebhook#name}
  */
  readonly name: string;
  /**
  * whether to retry the webhook in case of failure. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#retry_on_failure NamedWebhook#retry_on_failure}
  */
  readonly retryOnFailure?: boolean | cdktf.IResolvable;
  /**
  * secret used to sign each request so you're able to verify that the request comes from us. Defaults to an empty value. Note that once it's created, it will be just an empty string in the state due to security reasons.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#secret NamedWebhook#secret}
  */
  readonly secret?: string;
  /**
  * ID of the space the webhook is in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#space_id NamedWebhook#space_id}
  */
  readonly spaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook spacelift_named_webhook}
*/
export class NamedWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_named_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NamedWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NamedWebhook to import
  * @param importFromId The id of the existing NamedWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NamedWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_named_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/resources/named_webhook spacelift_named_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamedWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: NamedWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_named_webhook',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._retryOnFailure = config.retryOnFailure;
    this._secret = config.secret;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // retry_on_failure - computed: false, optional: true, required: false
  private _retryOnFailure?: boolean | cdktf.IResolvable; 
  public get retryOnFailure() {
    return this.getBooleanAttribute('retry_on_failure');
  }
  public set retryOnFailure(value: boolean | cdktf.IResolvable) {
    this._retryOnFailure = value;
  }
  public resetRetryOnFailure() {
    this._retryOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnFailureInput() {
    return this._retryOnFailure;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // space_id - computed: false, optional: false, required: true
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      retry_on_failure: cdktf.booleanToTerraform(this._retryOnFailure),
      secret: cdktf.stringToTerraform(this._secret),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_on_failure: {
        value: cdktf.booleanToHclTerraform(this._retryOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
