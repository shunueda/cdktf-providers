// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointIncomingwebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#description ServiceendpointIncomingwebhook#description}
  */
  readonly description?: string;
  /**
  * Optional http header name on which checksum will be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#http_header ServiceendpointIncomingwebhook#http_header}
  */
  readonly httpHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#id ServiceendpointIncomingwebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#project_id ServiceendpointIncomingwebhook#project_id}
  */
  readonly projectId: string;
  /**
  * Optional secret for the webhook. WebHook service will use this secret to calculate the payload checksum.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#secret ServiceendpointIncomingwebhook#secret}
  */
  readonly secret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#service_endpoint_name ServiceendpointIncomingwebhook#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * The name of the WebHook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#webhook_name ServiceendpointIncomingwebhook#webhook_name}
  */
  readonly webhookName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#timeouts ServiceendpointIncomingwebhook#timeouts}
  */
  readonly timeouts?: ServiceendpointIncomingwebhookTimeouts;
}
export interface ServiceendpointIncomingwebhookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#create ServiceendpointIncomingwebhook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#delete ServiceendpointIncomingwebhook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#read ServiceendpointIncomingwebhook#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#update ServiceendpointIncomingwebhook#update}
  */
  readonly update?: string;
}

export function serviceendpointIncomingwebhookTimeoutsToTerraform(struct?: ServiceendpointIncomingwebhookTimeouts | cdktf.IResolvable): any {
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


export function serviceendpointIncomingwebhookTimeoutsToHclTerraform(struct?: ServiceendpointIncomingwebhookTimeouts | cdktf.IResolvable): any {
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

export class ServiceendpointIncomingwebhookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointIncomingwebhookTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceendpointIncomingwebhookTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook azuredevops_serviceendpoint_incomingwebhook}
*/
export class ServiceendpointIncomingwebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_incomingwebhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointIncomingwebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointIncomingwebhook to import
  * @param importFromId The id of the existing ServiceendpointIncomingwebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointIncomingwebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_incomingwebhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_incomingwebhook azuredevops_serviceendpoint_incomingwebhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointIncomingwebhookConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointIncomingwebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_incomingwebhook',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.1',
        providerVersionConstraint: '1.12.1'
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
    this._httpHeader = config.httpHeader;
    this._id = config.id;
    this._projectId = config.projectId;
    this._secret = config.secret;
    this._serviceEndpointName = config.serviceEndpointName;
    this._webhookName = config.webhookName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: true, optional: false, required: false
  private _authorization = new cdktf.StringMap(this, "authorization");
  public get authorization() {
    return this._authorization;
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

  // http_header - computed: false, optional: true, required: false
  private _httpHeader?: string; 
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }
  public set httpHeader(value: string) {
    this._httpHeader = value;
  }
  public resetHttpHeader() {
    this._httpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader;
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

  // service_endpoint_name - computed: false, optional: false, required: true
  private _serviceEndpointName?: string; 
  public get serviceEndpointName() {
    return this.getStringAttribute('service_endpoint_name');
  }
  public set serviceEndpointName(value: string) {
    this._serviceEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointNameInput() {
    return this._serviceEndpointName;
  }

  // webhook_name - computed: false, optional: false, required: true
  private _webhookName?: string; 
  public get webhookName() {
    return this.getStringAttribute('webhook_name');
  }
  public set webhookName(value: string) {
    this._webhookName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookNameInput() {
    return this._webhookName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointIncomingwebhookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointIncomingwebhookTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      http_header: cdktf.stringToTerraform(this._httpHeader),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      secret: cdktf.stringToTerraform(this._secret),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      webhook_name: cdktf.stringToTerraform(this._webhookName),
      timeouts: serviceendpointIncomingwebhookTimeoutsToTerraform(this._timeouts.internalValue),
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
      http_header: {
        value: cdktf.stringToHclTerraform(this._httpHeader),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhook_name: {
        value: cdktf.stringToHclTerraform(this._webhookName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: serviceendpointIncomingwebhookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointIncomingwebhookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
