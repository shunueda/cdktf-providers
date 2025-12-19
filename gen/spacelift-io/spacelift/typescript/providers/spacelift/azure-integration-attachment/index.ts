// https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureIntegrationAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment#id AzureIntegrationAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the integration to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment#integration_id AzureIntegrationAttachment#integration_id}
  */
  readonly integrationId: string;
  /**
  * ID of the module to attach the integration to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment#module_id AzureIntegrationAttachment#module_id}
  */
  readonly moduleId?: string;
  /**
  * Indicates whether this attachment is used for read operations. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment#read AzureIntegrationAttachment#read}
  */
  readonly read?: boolean | cdktf.IResolvable;
  /**
  * ID of the stack to attach the integration to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment#stack_id AzureIntegrationAttachment#stack_id}
  */
  readonly stackId?: string;
  /**
  * Contains the Azure subscription ID to use with this Stack.  Overrides the default subscription ID set at the integration level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment#subscription_id AzureIntegrationAttachment#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Indicates whether this attachment is used for write operations. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment#write AzureIntegrationAttachment#write}
  */
  readonly write?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment spacelift_azure_integration_attachment}
*/
export class AzureIntegrationAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_azure_integration_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureIntegrationAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureIntegrationAttachment to import
  * @param importFromId The id of the existing AzureIntegrationAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureIntegrationAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_azure_integration_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.42.0/docs/resources/azure_integration_attachment spacelift_azure_integration_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureIntegrationAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: AzureIntegrationAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_azure_integration_attachment',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.42.0',
        providerVersionConstraint: '1.42.0'
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
    this._integrationId = config.integrationId;
    this._moduleId = config.moduleId;
    this._read = config.read;
    this._stackId = config.stackId;
    this._subscriptionId = config.subscriptionId;
    this._write = config.write;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
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

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: string; 
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // read - computed: false, optional: true, required: false
  private _read?: boolean | cdktf.IResolvable; 
  public get read() {
    return this.getBooleanAttribute('read');
  }
  public set read(value: boolean | cdktf.IResolvable) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // write - computed: false, optional: true, required: false
  private _write?: boolean | cdktf.IResolvable; 
  public get write() {
    return this.getBooleanAttribute('write');
  }
  public set write(value: boolean | cdktf.IResolvable) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      module_id: cdktf.stringToTerraform(this._moduleId),
      read: cdktf.booleanToTerraform(this._read),
      stack_id: cdktf.stringToTerraform(this._stackId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      write: cdktf.booleanToTerraform(this._write),
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
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_id: {
        value: cdktf.stringToHclTerraform(this._moduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read: {
        value: cdktf.booleanToHclTerraform(this._read),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write: {
        value: cdktf.booleanToHclTerraform(this._write),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
