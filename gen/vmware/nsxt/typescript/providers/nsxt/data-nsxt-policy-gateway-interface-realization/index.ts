// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNsxtPolicyGatewayInterfaceRealizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Initial delay to start realization checks in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization#delay DataNsxtPolicyGatewayInterfaceRealization#delay}
  */
  readonly delay?: number;
  /**
  * The display name of the gateway interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization#display_name DataNsxtPolicyGatewayInterfaceRealization#display_name}
  */
  readonly displayName?: string;
  /**
  * The path for the gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization#gateway_path DataNsxtPolicyGatewayInterfaceRealization#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Unique ID of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization#id DataNsxtPolicyGatewayInterfaceRealization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Realization timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization#timeout DataNsxtPolicyGatewayInterfaceRealization#timeout}
  */
  readonly timeout?: number;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization#context DataNsxtPolicyGatewayInterfaceRealization#context}
  */
  readonly context?: DataNsxtPolicyGatewayInterfaceRealizationContext;
}
export interface DataNsxtPolicyGatewayInterfaceRealizationContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization#project_id DataNsxtPolicyGatewayInterfaceRealization#project_id}
  */
  readonly projectId: string;
}

export function dataNsxtPolicyGatewayInterfaceRealizationContextToTerraform(struct?: DataNsxtPolicyGatewayInterfaceRealizationContextOutputReference | DataNsxtPolicyGatewayInterfaceRealizationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function dataNsxtPolicyGatewayInterfaceRealizationContextToHclTerraform(struct?: DataNsxtPolicyGatewayInterfaceRealizationContextOutputReference | DataNsxtPolicyGatewayInterfaceRealizationContext): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNsxtPolicyGatewayInterfaceRealizationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataNsxtPolicyGatewayInterfaceRealizationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNsxtPolicyGatewayInterfaceRealizationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization nsxt_policy_gateway_interface_realization}
*/
export class DataNsxtPolicyGatewayInterfaceRealization extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_gateway_interface_realization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNsxtPolicyGatewayInterfaceRealization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNsxtPolicyGatewayInterfaceRealization to import
  * @param importFromId The id of the existing DataNsxtPolicyGatewayInterfaceRealization that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNsxtPolicyGatewayInterfaceRealization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_gateway_interface_realization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/data-sources/policy_gateway_interface_realization nsxt_policy_gateway_interface_realization} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNsxtPolicyGatewayInterfaceRealizationConfig
  */
  public constructor(scope: Construct, id: string, config: DataNsxtPolicyGatewayInterfaceRealizationConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_gateway_interface_realization',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delay = config.delay;
    this._displayName = config.displayName;
    this._gatewayPath = config.gatewayPath;
    this._id = config.id;
    this._timeout = config.timeout;
    this._context.internalValue = config.context;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
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

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getListAttribute('ip_address');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // context - computed: false, optional: true, required: false
  private _context = new DataNsxtPolicyGatewayInterfaceRealizationContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: DataNsxtPolicyGatewayInterfaceRealizationContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay: cdktf.numberToTerraform(this._delay),
      display_name: cdktf.stringToTerraform(this._displayName),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      id: cdktf.stringToTerraform(this._id),
      timeout: cdktf.numberToTerraform(this._timeout),
      context: dataNsxtPolicyGatewayInterfaceRealizationContextToTerraform(this._context.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
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
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      context: {
        value: dataNsxtPolicyGatewayInterfaceRealizationContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataNsxtPolicyGatewayInterfaceRealizationContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
