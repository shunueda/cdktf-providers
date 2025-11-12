// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyncServicesV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#acl_enabled SyncServicesV1#acl_enabled}
  */
  readonly aclEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#friendly_name SyncServicesV1#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#id SyncServicesV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#reachability_debouncing_enabled SyncServicesV1#reachability_debouncing_enabled}
  */
  readonly reachabilityDebouncingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#reachability_debouncing_window SyncServicesV1#reachability_debouncing_window}
  */
  readonly reachabilityDebouncingWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#reachability_webhooks_enabled SyncServicesV1#reachability_webhooks_enabled}
  */
  readonly reachabilityWebhooksEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#webhook_url SyncServicesV1#webhook_url}
  */
  readonly webhookUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#webhooks_from_rest_enabled SyncServicesV1#webhooks_from_rest_enabled}
  */
  readonly webhooksFromRestEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1 twilio_sync_services_v1}
*/
export class SyncServicesV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_sync_services_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyncServicesV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyncServicesV1 to import
  * @param importFromId The id of the existing SyncServicesV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyncServicesV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_sync_services_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_v1 twilio_sync_services_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyncServicesV1Config = {}
  */
  public constructor(scope: Construct, id: string, config: SyncServicesV1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'twilio_sync_services_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclEnabled = config.aclEnabled;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._reachabilityDebouncingEnabled = config.reachabilityDebouncingEnabled;
    this._reachabilityDebouncingWindow = config.reachabilityDebouncingWindow;
    this._reachabilityWebhooksEnabled = config.reachabilityWebhooksEnabled;
    this._webhookUrl = config.webhookUrl;
    this._webhooksFromRestEnabled = config.webhooksFromRestEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_enabled - computed: true, optional: true, required: false
  private _aclEnabled?: boolean | cdktf.IResolvable; 
  public get aclEnabled() {
    return this.getBooleanAttribute('acl_enabled');
  }
  public set aclEnabled(value: boolean | cdktf.IResolvable) {
    this._aclEnabled = value;
  }
  public resetAclEnabled() {
    this._aclEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclEnabledInput() {
    return this._aclEnabled;
  }

  // friendly_name - computed: true, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // reachability_debouncing_enabled - computed: true, optional: true, required: false
  private _reachabilityDebouncingEnabled?: boolean | cdktf.IResolvable; 
  public get reachabilityDebouncingEnabled() {
    return this.getBooleanAttribute('reachability_debouncing_enabled');
  }
  public set reachabilityDebouncingEnabled(value: boolean | cdktf.IResolvable) {
    this._reachabilityDebouncingEnabled = value;
  }
  public resetReachabilityDebouncingEnabled() {
    this._reachabilityDebouncingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityDebouncingEnabledInput() {
    return this._reachabilityDebouncingEnabled;
  }

  // reachability_debouncing_window - computed: true, optional: true, required: false
  private _reachabilityDebouncingWindow?: number; 
  public get reachabilityDebouncingWindow() {
    return this.getNumberAttribute('reachability_debouncing_window');
  }
  public set reachabilityDebouncingWindow(value: number) {
    this._reachabilityDebouncingWindow = value;
  }
  public resetReachabilityDebouncingWindow() {
    this._reachabilityDebouncingWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityDebouncingWindowInput() {
    return this._reachabilityDebouncingWindow;
  }

  // reachability_webhooks_enabled - computed: true, optional: true, required: false
  private _reachabilityWebhooksEnabled?: boolean | cdktf.IResolvable; 
  public get reachabilityWebhooksEnabled() {
    return this.getBooleanAttribute('reachability_webhooks_enabled');
  }
  public set reachabilityWebhooksEnabled(value: boolean | cdktf.IResolvable) {
    this._reachabilityWebhooksEnabled = value;
  }
  public resetReachabilityWebhooksEnabled() {
    this._reachabilityWebhooksEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityWebhooksEnabledInput() {
    return this._reachabilityWebhooksEnabled;
  }

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // webhook_url - computed: true, optional: true, required: false
  private _webhookUrl?: string; 
  public get webhookUrl() {
    return this.getStringAttribute('webhook_url');
  }
  public set webhookUrl(value: string) {
    this._webhookUrl = value;
  }
  public resetWebhookUrl() {
    this._webhookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookUrlInput() {
    return this._webhookUrl;
  }

  // webhooks_from_rest_enabled - computed: true, optional: true, required: false
  private _webhooksFromRestEnabled?: boolean | cdktf.IResolvable; 
  public get webhooksFromRestEnabled() {
    return this.getBooleanAttribute('webhooks_from_rest_enabled');
  }
  public set webhooksFromRestEnabled(value: boolean | cdktf.IResolvable) {
    this._webhooksFromRestEnabled = value;
  }
  public resetWebhooksFromRestEnabled() {
    this._webhooksFromRestEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhooksFromRestEnabledInput() {
    return this._webhooksFromRestEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acl_enabled: cdktf.booleanToTerraform(this._aclEnabled),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      reachability_debouncing_enabled: cdktf.booleanToTerraform(this._reachabilityDebouncingEnabled),
      reachability_debouncing_window: cdktf.numberToTerraform(this._reachabilityDebouncingWindow),
      reachability_webhooks_enabled: cdktf.booleanToTerraform(this._reachabilityWebhooksEnabled),
      webhook_url: cdktf.stringToTerraform(this._webhookUrl),
      webhooks_from_rest_enabled: cdktf.booleanToTerraform(this._webhooksFromRestEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_enabled: {
        value: cdktf.booleanToHclTerraform(this._aclEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      reachability_debouncing_enabled: {
        value: cdktf.booleanToHclTerraform(this._reachabilityDebouncingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reachability_debouncing_window: {
        value: cdktf.numberToHclTerraform(this._reachabilityDebouncingWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reachability_webhooks_enabled: {
        value: cdktf.booleanToHclTerraform(this._reachabilityWebhooksEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      webhook_url: {
        value: cdktf.stringToHclTerraform(this._webhookUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      webhooks_from_rest_enabled: {
        value: cdktf.booleanToHclTerraform(this._webhooksFromRestEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
